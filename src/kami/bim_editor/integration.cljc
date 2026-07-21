(ns kami.bim-editor.integration
  "Application boundary for publishing one coordinated design revision."
  (:require [bim.integration :as bim-integration]
            [bim.interchange :as interchange]
            [bim.spatial :as spatial]))

(defn reconcile-mep-systems
  "Replace embedded MEP member snapshots with the current authored elements and
  remove deleted members before persistence or exchange."
  [project systems]
  (let [elements (mapcat :elements
                         (mapcat :storeys (mapcat :buildings (:sites project))))
        by-id (into {} (map (juxt :id identity)) elements)
        current (fn [members] (vec (keep #(get by-id (:id %)) members)))]
    (mapv #(-> %
               (update :mep/segments current)
               (update :mep/fittings current)
               (update :mep/equipment current))
          systems)))

(defn coordinated-model
  "Attach editor-owned analytical/system state to the authored building before
  IFC, CDE, drawing, or cloud publication."
  [project structural-model mep-systems]
  (cond-> (assoc project :mep/systems (reconcile-mep-systems project mep-systems))
    structural-model (assoc :structural/model structural-model)))

(defn coordinated-revision
  [{:keys [project project-id project-name revision events structural-model mep-systems]}]
  (let [project (coordinated-model project structural-model mep-systems)]
    {:kami/document :coordinated-bim-revision
   :kami/version 1
   :project/id project-id
   :project/name project-name
   :project/revision revision
   :project/model project
   :project/federation (bim-integration/federated-design
                        {:architectural project :structural [] :mep []})
   :project/drawings (bim-integration/generate-drawing-set project)
   :project/ifc (bim-integration/export-ifc project)
   :project/collaboration {:events (vec events)}
     :project/cloud-itonami (bim-integration/cloud-itonami-payload project revision)}))

(defn model-bounds
  "Return the tight world-space AABB for renderable or metadata-only elements."
  [elements]
  (when-let [bounds (seq (keep spatial/element-bounds elements))]
    {:min (apply mapv min (map :min bounds))
     :max (apply mapv max (map :max bounds))}))

(defn large-model-view
  "Build a metadata-first visible-set plan suitable for WebGPU workers."
  [elements view-bounds camera-position focal-length-px
   {:keys [cell-size batch-size max-resident max-loads]
    :or {cell-size 10.0 batch-size 512 max-resident 10000 max-loads 1000}}]
  (let [index (spatial/build-index elements {:cell-size cell-size})
        plan (spatial/stream-plan index view-bounds camera-position focal-length-px
                                  batch-size {:include-elements? false})
        delta (spatial/stream-delta (spatial/stream-session) plan
                                    {:max-resident max-resident :max-loads max-loads})]
    {:workspace/spatial-index index :workspace/query (spatial/query-report index view-bounds)
     :workspace/stream-plan plan :workspace/stream-delta delta}))

(defn capability-status
  "Summarize whether each integrated workspace discipline has publishable
  state, so UI and automation share the same readiness rules."
  [{:keys [project family-catalog structural-model mep-systems drawing-set
           review-topics cloud-state]}]
  {:architecture (boolean project)
   :families (boolean (seq (:family-catalog/families family-catalog)))
   :structure (boolean structural-model)
   :mep (boolean (seq mep-systems))
   :drawings (boolean (seq (:drawing/views drawing-set)))
   :coordination (boolean (seq review-topics))
   :opencde (boolean cloud-state)
   :ifc (boolean project)})

(defn apply-remote-events [project events]
  (bim-integration/merge-events project events))

(defn coordinated-ifc [project]
  (bim-integration/export-ifc project))

(defn import-ifc-spf [text]
  (bim-integration/import-ifc-spf text))

(defn cloud-opencde-publication
  "Build the exact wire package consumed by cloud-itonami.design-opencde.
  The IFC document is bound to the collaboration envelope's durable head;
  topic revisions and idempotency keys remain stable across retries."
  [sync-payload {:keys [document-id name content-ref content-hash base-version
                        timestamp topic-revisions topics]}]
  (when-not (= :design/collaboration-synchronized (:itonami/event sync-payload))
    (throw (ex-info "OpenCDE publication requires collaboration sync payload" {})))
  (let [project-id (:design/project-id sync-payload)
        head (:design/head-revision sync-payload)]
    (when-not (and project-id head document-id name content-ref content-hash
                   (integer? base-version) (<= 0 base-version))
      (throw (ex-info "incomplete cloud OpenCDE publication metadata"
                      {:project-id project-id :head head :document-id document-id})))
    {:document {:project-id project-id :design-revision head
                :document-id document-id :name name :media-type "application/ifc"
                :content-ref content-ref :content-hash content-hash
                :base-version base-version
                :idempotency-key (str project-id ":" head ":ifc:" content-hash)
                :metadata {:design/revision head} :timestamp timestamp}
     :topics
     (mapv (fn [topic]
             (let [guid (:bcf.topic/guid topic)
                   revision (get topic-revisions guid 0)]
               (when-not guid
                 (throw (ex-info "OpenCDE topic requires BCF guid" {:topic topic})))
               {:guid guid :topic topic :expected-revision revision
                :idempotency-key (str project-id ":" head ":bcf:" guid ":" revision)}))
           topics)}))

(defn export-drawing
  "Export an active floor plan or the full storey set through shared formats."
  ([project active-storey-id format]
   (export-drawing project active-storey-id format {} nil))
  ([project active-storey-id format drawing-views]
   (export-drawing project active-storey-id format drawing-views nil))
  ([project active-storey-id format drawing-views print-setting]
   (export-drawing project active-storey-id format drawing-views print-setting nil))
  ([project active-storey-id format drawing-views print-setting drawing-set]
   (let [storeys (mapcat :storeys (mapcat :buildings (:sites project)))
         storey (first (filter #(= active-storey-id (:id %)) storeys))
         annotations-by-storey
         (into {} (map (fn [[storey-id view]] [storey-id (:view/annotations view)]))
               drawing-views)]
     (case format
       :dxf {:filename (str "floor-plan-" active-storey-id ".dxf")
             :media-type "application/dxf"
             :content (interchange/floor-plan-dxf
                       storey {:annotations (get annotations-by-storey active-storey-id)})}
       :pdf {:filename "building-drawing-set.pdf" :media-type "application/pdf"
             :content (interchange/drawing-set-pdf
                       (vec storeys) {:annotations-by-storey annotations-by-storey
                                      :print-setting print-setting
                                      :drawing-set drawing-set})}
       (throw (ex-info "unsupported BIM drawing export format" {:format format}))))))
