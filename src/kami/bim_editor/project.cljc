(ns kami.bim-editor.project)
(def current-version 4)
(defn document [{:keys [id name building-model family-catalog drawings editor camera interaction]}]
  {:kami/document :bim-editor-project :kami/version current-version
   :project/id (or id "untitled-bim") :project/name (or name "Untitled BIM")
   :project/building-model building-model :project/family-catalog (or family-catalog {})
   :project/drawings (or drawings {})
   :project/editor editor :project/camera camera :project/interaction interaction})
(defn migrate [v]
  (cond
    (= :bim-editor-project (:kami/document v))
    (case (:kami/version v) 4 v
      3 (assoc v :kami/version 4 :project/drawings {})
      2 (-> v (assoc :kami/version 4 :project/family-catalog {} :project/drawings {}))
      1 (-> v (assoc :kami/version 4 :project/interaction {:profile :revit}
                     :project/family-catalog {} :project/drawings {})
            (dissoc :project/version))
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
         (map? (:project/family-catalog p))
         (map? (:project/drawings p))
         (map? (:project/editor p)) (map? (:project/camera p)) (map? (:project/interaction p)))))
(defn open [v] (let [p (migrate v)] (when-not (valid? p) (throw (ex-info "Invalid BIM Editor project" {:project p}))) p))
