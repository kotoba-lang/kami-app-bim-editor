(ns kami.bim-editor.integration
  "Application boundary for publishing one coordinated design revision."
  (:require [bim.integration :as bim-integration]
            [bim.interchange :as interchange]))

(defn coordinated-revision
  [{:keys [project project-id project-name revision events]}]
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
   :project/cloud-itonami (bim-integration/cloud-itonami-payload project revision)})

(defn apply-remote-events [project events]
  (bim-integration/merge-events project events))

(defn coordinated-ifc [project]
  (bim-integration/export-ifc project))

(defn import-ifc-spf [text]
  (bim-integration/import-ifc-spf text))

(defn export-drawing
  "Export an active floor plan or the full storey set through shared formats."
  [project active-storey-id format]
  (let [storeys (mapcat :storeys (mapcat :buildings (:sites project)))
        storey (first (filter #(= active-storey-id (:id %)) storeys))]
    (case format
      :dxf {:filename (str "floor-plan-" active-storey-id ".dxf")
            :media-type "application/dxf"
            :content (interchange/floor-plan-dxf storey)}
      :pdf {:filename "building-drawing-set.pdf" :media-type "application/pdf"
            :content (interchange/drawing-set-pdf (vec storeys))}
      (throw (ex-info "unsupported BIM drawing export format" {:format format})))))
