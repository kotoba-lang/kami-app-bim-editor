(ns kami.bim-editor.project)
(def current-version 2)
(defn document [{:keys [id name building-model editor camera interaction]}]
  {:kami/document :bim-editor-project :kami/version current-version
   :project/id (or id "untitled-bim") :project/name (or name "Untitled BIM")
   :project/building-model building-model :project/editor editor :project/camera camera :project/interaction interaction})
(defn migrate [v]
  (cond
    (= :bim-editor-project (:kami/document v))
    (case (:kami/version v) 2 v
      1 (-> v (assoc :kami/version 2 :project/interaction {:profile :revit}) (dissoc :project/version))
      (throw (ex-info "Unsupported BIM project version" {:version (:kami/version v)})))
    (and (map? v) (vector? (:sites v)))
    (let [storey (some-> v :sites first :buildings first :storeys first)]
      (document {:building-model v :editor {:active-storey (:id storey) :selected (some-> storey :elements first :id)}
                 :camera {:azimuth 0.75 :elevation 0.5} :interaction {:profile :revit}}))
    :else (throw (ex-info "Not a BIM Editor project" {:value v}))))
(defn valid? [p]
  (let [model (:project/building-model p) storeys (mapcat :storeys (mapcat :buildings (:sites model)))]
    (and (= :bim-editor-project (:kami/document p)) (= current-version (:kami/version p))
         (string? (:project/id p)) (string? (:project/name p)) (seq (:sites model)) (seq storeys)
         (every? #(and (some? (:id %)) (vector? (:elements %))) storeys)
         (map? (:project/editor p)) (map? (:project/camera p)) (map? (:project/interaction p)))))
(defn open [v] (let [p (migrate v)] (when-not (valid? p) (throw (ex-info "Invalid BIM Editor project" {:project p}))) p))
