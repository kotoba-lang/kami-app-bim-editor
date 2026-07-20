(ns kami.bim-editor.app (:require [cljs.reader :as reader] [clojure.string :as string] [bim]
                                  [bim.editor :as editor]
                                  [bim.integration :as family]
                                  [bim.drawing :as drawing] [ifc.core :as ifc]
                                  [kami.bim-editor.integration :as integration]
                                  [kami.bim-editor.interaction :as interaction]
                                  [kami.bim-editor.project :as project] [kami.webgpu.mesh :as gpu]))
(defn wall [id a b] (bim/wall {:id id :name (str "Wall " id) :start a :end b :thickness 0.25 :height 3.2 :material "Concrete"}))
(defn initial-project [] (let [st (bim/storey {:id 3 :name "Ground Floor" :elevation 0 :height 3.2 :placement :identity :spaces [] :elements []}) p (-> (bim/project "Lodge") (update :sites conj (bim/site {:id 1 :name "Site" :geo nil :placement :identity :buildings [(bim/building {:id 2 :name "Lodge" :placement :identity :reference-elevation 0 :storeys [st]})]})))] (reduce #(bim/add-element %1 3 %2) p [(wall 10 [0 0 0] [8 0 0]) (wall 11 [8 0 0] [8 6 0]) (wall 12 [8 6 0] [0 6 0]) (wall 13 [0 6 0] [0 0 0])])))
(defn initial-family-catalog []
  (family/family-catalog
   [(family/family-definition
     {:id "casework" :name "Casework" :category :furniture
      :parameters {:width {:type :length :scope :type :default 0.8 :min 0.3}
                   :depth {:type :length :scope :instance :default 0.6 :min 0.2}
                   :height {:type :length :scope :instance :default 0.9 :min 0.2 :max 3.0}}
      :formulas {:volume [:* [:param :width] [:param :depth] [:param :height]]}
      :types {:standard {:id "casework-standard" :name "Standard" :parameters {:width 0.8}}
              :wide {:id "casework-wide" :name "Wide" :parameters {:width 1.2}}}
      :template {:kind :furniture :name "Casework" :global-id nil
                 :placement {:location [0 0 0]}
                 :geometry {:kind :extruded-area-solid
                            :profile {:kind :rectangle :x-dim [:param :width]
                                      :y-dim [:param :depth]}
                            :position {:location [0 0 0]} :direction [0 0 1]
                            :depth [:param :height]}
                 :quantities {:gross-volume-m3 [:param :volume]}
                 :psets {} :openings [] :connected-to []}})]))
(defonce state (atom {:project (initial-project) :active-storey 3 :selected 10 :selection #{10}
                      :next-id 14 :next-storey-id 4
                      :selected-space nil :next-space-id 1000
                      :selected-clash nil :family-catalog (initial-family-catalog)
                      :history [] :future [] :azimuth 0.75 :elevation 0.5 :last-snap nil
                      :camera-target [4.0 1.5 3.0] :camera-distance 14.0
                      :profile :revit :shortcut-buffer "" :project-id "untitled-bim" :project-name "Untitled BIM"
                      :revision 0 :save-status :clean}))
(defonce viewport (atom nil))
(declare refresh!)
(defn- storeys [] (:storeys (bim/find-building (:project @state) 2)))
(defn- elements [] (:elements (bim/find-storey (:project @state) (:active-storey @state))))
(defn- all-elements [] (mapcat :elements (storeys)))
(defn- spaces [] (:spaces (bim/find-storey (:project @state) (:active-storey @state))))
(defn- all-spaces [] (mapcat :spaces (storeys)))
(defn- selection-ids [] (set (:selection @state)))
(defn- selected-elements [] (filterv #(contains? (selection-ids) (:id %)) (all-elements)))
(defn- selected [] (first (filter #(= (:selected @state) (:id %)) (all-elements))))
(defn- select-only! [element-id]
  (swap! state assoc :selected element-id :selection (if element-id #{element-id} #{})))
(defn- apply-selection! [result]
  (swap! state assoc :selected (:primary result) :selection (:selection result)))
(defn- selection-mode [event]
  (cond (or (.-metaKey event) (.-ctrlKey event)) :toggle
        (.-shiftKey event) :add
        :else :replace))
(defn- selected-family []
  (get-in @state [:family-catalog :family-catalog/families
                  (.-value (.getElementById js/document "family-definition"))]))
(defn- refresh-family-types! []
  (let [select (.getElementById js/document "family-type") family (selected-family)]
    (set! (.-innerHTML select) "")
    (doseq [[type-key type-spec] (:family/types family)]
      (let [option (.createElement js/document "option")]
        (set! (.-value option) (name type-key))
        (set! (.-textContent option) (or (:name type-spec) (name type-key)))
        (.appendChild select option)))))
(defn- mesh [] (bim/merge-meshes (keep bim/element-mesh (all-elements))))
(defn- element-rows []
  (mapcat (fn [storey]
            (concat
             (map (fn [element]
                    (let [q (:quantities element)]
                      {:id (:id element) :storey (:name storey) :kind (name (:kind element)) :name (:name element)
                       :classification (get-in element [:classification :code] "")
                       :length (:length-m q) :gross-area (:gross-area-m2 q) :net-area (:net-area-m2 q)
                       :gross-volume (:gross-volume-m3 q) :net-volume (:net-volume-m3 q)})) (:elements storey))
             (map (fn [space]
                    (let [q (:quantities space)]
                      {:id (:id space) :storey (:name storey) :kind "space" :name (:name space)
                       :classification (name (:category space)) :length nil :gross-area (:gross-area-m2 q)
                       :net-area (:net-area-m2 q) :gross-volume (:gross-volume-m3 q) :net-volume (:net-volume-m3 q)}))
                  (:spaces storey)))) (storeys)))
(defn- format-quantity [value] (if (number? value) (.toFixed value 3) "—"))
(defn- refresh-schedule! []
  (let [container (.getElementById js/document "quantity-schedule") rows (element-rows)]
    (set! (.-innerHTML container) "")
    (doseq [row rows]
      (let [line (.createElement js/document "button")]
        (set! (.-textContent line) (str (:storey row) " · " (:kind row) " · " (:name row)
                                            " · L " (format-quantity (:length row))
                                            " · A " (format-quantity (:net-area row))
                                            " · V " (format-quantity (:net-volume row))))
        (.addEventListener line "click" #(do (swap! state assoc :active-storey
                                                     (:id (first (filter (fn [s] (= (:name s) (:storey row))) (storeys))))
                                                :selected (:id row) :selection #{(:id row)}) (refresh!)))
        (.appendChild container line)))))
(defn- csv-cell [value] (str "\"" (.replaceAll (str (or value "")) "\"" "\"\"") "\""))
(defn- schedule-csv []
  (let [columns [[:id "ID"] [:storey "Storey"] [:kind "Kind"] [:name "Name"] [:classification "Classification"]
                 [:length "Length m"] [:gross-area "Gross area m2"] [:net-area "Net area m2"]
                 [:gross-volume "Gross volume m3"] [:net-volume "Net volume m3"]]]
    (str (string/join "," (map (comp csv-cell second) columns)) "\n"
         (string/join "\n" (map (fn [row] (string/join "," (map #(csv-cell (get row (first %))) columns))) (element-rows))))))
(defn- download-schedule! []
  (let [a (.createElement js/document "a") url (.createObjectURL js/URL (js/Blob. #js [(schedule-csv)] #js {:type "text/csv;charset=utf-8"}))]
    (set! (.-href a) url) (set! (.-download a) "bim-quantity-schedule.csv") (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- clashes [] (bim/detect-clashes (:project @state) {:tolerance 0.001}))
(defn- refresh-clashes! []
  (let [container (.getElementById js/document "clash-results") results (clashes)]
    (set! (.-innerHTML container) "")
    (if (empty? results)
      (set! (.-textContent container) "No clashes")
      (doseq [[index result] (map-indexed vector results)]
        (let [button (.createElement js/document "button")]
          (set! (.-textContent button) (str "⚠ " (:clash/a result) " × " (:clash/b result)
                                             " · " (.toFixed (:clash/volume result) 4) " m³"))
          (when (= index (:selected-clash @state)) (.add (.-classList button) "selected"))
          (.addEventListener button "click" #(do (swap! state assoc :selected-clash index :active-storey (:clash/storey result)
                                                        :selected (:clash/a result)
                                                        :selection #{(:clash/a result)}) (refresh!)))
          (.appendChild container button))))))
(defn- download-clashes! []
  (let [rows (clashes) data (str "storey,element_a,element_b,kind_a,kind_b,overlap_x,overlap_y,overlap_z,volume_m3\n"
                                 (string/join "\n" (map (fn [c] (string/join "," (concat [(:clash/storey c) (:clash/a c) (:clash/b c)]
                                                                                         (map name (:clash/kinds c)) (:clash/overlap c) [(:clash/volume c)]))) rows)))
        a (.createElement js/document "a") url (.createObjectURL js/URL (js/Blob. #js [data] #js {:type "text/csv;charset=utf-8"}))]
    (set! (.-href a) url) (set! (.-download a) "bim-clashes.csv") (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- refresh! []
  (when-let [v @viewport]
    (let [m (mesh)
          draws (mapv (fn [{:keys [element/id mesh color]}]
                        {:element/id id :buffers (gpu/upload-mesh! (:mesh-context v) mesh)
                         :color color})
                      (interaction/element-render-items (all-elements) (selection-ids)))]
      (swap! viewport assoc :draws draws)
      (set! (.-textContent (.getElementById js/document "stats")) (str (count (storeys)) " storeys · " (count (all-elements)) " elements · " (/ (count (:indices m)) 3) " triangles"))
      (set! (.-textContent (.getElementById js/document "debug-state"))
            (js/JSON.stringify (clj->js {:storeyCount (count (storeys)) :activeStorey (:active-storey @state)
                                         :elementCount (count (all-elements))
                                         :spaceCount (count (all-spaces))
                                         :wallCount (count (filter #(= :wall (:kind %)) (all-elements)))
                                         :slabCount (count (filter #(= :slab (:kind %)) (all-elements)))
                                         :openingCount (reduce + (map #(count (:openings %)) (filter #(= :wall (:kind %)) (all-elements))))
                                         :scheduleRows (count (element-rows))
                                         :grossVolume (reduce + 0 (keep #(get-in % [:quantities :gross-volume-m3]) (all-elements)))
                                         :selected (:selected @state) :selection (vec (selection-ids))
                                         :profile (name (:profile @state))
                                         :projectVersion project/current-version :revision (:revision @state) :saveStatus (name (:save-status @state))
                                         :clashCount (count (clashes)) :selectedClash (:selected-clash @state)
                                         :shortcutBuffer (:shortcut-buffer @state)})))))
  (let [levels (.getElementById js/document "levels")]
    (set! (.-innerHTML levels) "")
    (doseq [storey (storeys)]
      (let [b (.createElement js/document "button")]
        (set! (.-textContent b) (str (:name storey) " · " (.toFixed (:elevation storey) 2) " m"))
        (when (= (:id storey) (:active-storey @state)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" #(do (swap! state assoc :active-storey (:id storey))
                                           (select-only! (some-> (first (:elements storey)) :id))
                                           (refresh!)))
        (.appendChild levels b))))
  (let [tree (.getElementById js/document "tree")]
    (set! (.-innerHTML tree) "")
    (doseq [e (elements)]
      (let [b (.createElement js/document "button") icon ({:wall "▱" :door "▯" :window "▦"} (:kind e) "◇")]
        (set! (.-textContent b) (str icon " " (:name e)))
        (when (contains? (selection-ids) (:id e)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" (fn [event]
                                        (apply-selection!
                                         (interaction/selection-after-click
                                          (selection-ids) (:id e) (selection-mode event)))
                                        (refresh!)))
        (.appendChild tree b))))
  (let [rooms (.getElementById js/document "rooms")]
    (set! (.-innerHTML rooms) "")
    (doseq [space (spaces)]
      (let [b (.createElement js/document "button")]
        (set! (.-textContent b) (str "▣ " (:name space) " · " (format-quantity (get-in space [:quantities :net-area-m2])) " m²"))
        (when (= (:id space) (:selected-space @state)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" #(do (swap! state assoc :selected-space (:id space))
                                           (set! (.-value (.getElementById js/document "room-name")) (:name space))
                                           (set! (.-value (.getElementById js/document "room-category")) (name (:category space)))
                                           (refresh!)))
        (.appendChild rooms b))))
  (refresh-schedule!)
  (refresh-clashes!)
  (when-let [e (selected)]
    (let [wall? (= :wall (:kind e))]
      (set! (.-textContent (.getElementById js/document "inspector-title")) (str "Selected " (name (:kind e))))
      (set! (.-value (.getElementById js/document "name")) (:name e))
      (set! (.-disabled (.getElementById js/document "apply")) (not wall?))
      (doseq [id ["length" "height" "thickness" "material"]] (set! (.-disabled (.getElementById js/document id)) (not wall?)))
      (when wall?
        (set! (.-value (.getElementById js/document "length")) (get-in e [:quantities :length-m]))
        (set! (.-value (.getElementById js/document "height")) (get-in e [:geometry :profile :height]))
        (set! (.-value (.getElementById js/document "thickness")) (get-in e [:geometry :profile :thickness]))))))
(defn- commit! [p] (swap! state (fn [s] (-> s (update :history conj (:project s)) (assoc :project p :future [] :save-status :dirty) (update :revision inc)))) (refresh!))
(defn- authoring-commit! [label operation]
  (try
    (if-let [project (operation)]
      (do (commit! project)
          (set! (.-textContent (.getElementById js/document "authoring-status")) label))
      (set! (.-textContent (.getElementById js/document "authoring-status"))
            (str label " unavailable")))
    (catch :default error
      (set! (.-textContent (.getElementById js/document "authoring-status"))
            (str "Error: " (.-message error))))))
(defn- camera-state []
  (let [{:keys [azimuth elevation camera-target camera-distance]} @state
        [tx ty tz] camera-target d camera-distance]
    {:eye [(+ tx (* d (js/Math.cos elevation) (js/Math.cos azimuth)))
           (+ ty (* d (js/Math.sin elevation)))
           (+ tz (* d (js/Math.cos elevation) (js/Math.sin azimuth)))]
     :target camera-target}))
(defn- draw! []
  (when-let [{:keys [draws] :as v} @viewport]
    (when draws
      (let [{:keys [eye target]} (camera-state)]
        (gpu/render-scene! v draws eye target))))
  (js/requestAnimationFrame draw!))
(defn- element-storey-id [element-id]
  (some (fn [storey]
          (when (some #(= element-id (:id %)) (:elements storey)) (:id storey)))
        (storeys)))
(defn- viewport-ndc-at [canvas client-x client-y]
  (let [rect (.getBoundingClientRect canvas)
        x (- (* 2.0 (/ (- client-x (.-left rect)) (.-width rect))) 1.0)
        y (- 1.0 (* 2.0 (/ (- client-y (.-top rect)) (.-height rect))))]
    [x y]))
(defn- viewport-ray-at [canvas client-x client-y]
  (let [[x y] (viewport-ndc-at canvas client-x client-y)
        rect (.getBoundingClientRect canvas)
        {:keys [eye target]} (camera-state)]
    (interaction/camera-ray {:eye eye :target target
                             :aspect (/ (.-width rect) (max 1.0 (.-height rect)))} x y)))
(defn- hit-at [canvas client-x client-y]
  (interaction/pick-element (all-elements) (viewport-ray-at canvas client-x client-y)))
(defn- pick-at! [canvas client-x client-y mode]
  (if-let [hit (hit-at canvas client-x client-y)]
      (let [element-id (:element/id hit)]
        (apply-selection! (interaction/selection-after-click (selection-ids) element-id mode))
        (swap! state assoc :active-storey (element-storey-id element-id))
        (refresh!))
      (do (when (= :replace mode) (select-only! nil)) (refresh!))))
(defn- frame-selected! []
  (when-let [bounds (some-> (selected) interaction/element-bounds)]
    (let [frame (interaction/frame-bounds bounds)]
      (swap! state assoc :camera-target (:camera/target frame)
             :camera-distance (:camera/distance frame))
      (refresh!))))
(defn- num [id] (js/parseFloat (.-value (.getElementById js/document id))))
(defn- snap-delta [elements delta]
  (let [elements (vec elements) selected-ids (set (map :id elements))
        enabled? (.-checked (.getElementById js/document "snap-enabled"))
        source (editor/model-snap-candidates elements)
        targets (editor/model-snap-candidates
                 (remove #(contains? selected-ids (:id %)) (all-elements)))
        evidence (when enabled?
                   (editor/snap-translation
                    source targets delta
                    {:grid (num "snap-grid") :tolerance (num "snap-tolerance")}))
        status (.getElementById js/document "snap-status")]
    (swap! state assoc :last-snap evidence)
    (set! (.-textContent status)
          (if evidence
            (str "Snapped " (name (:snap/kind evidence)) " · "
                 (.toFixed (:snap/distance evidence) 3) " m")
            (if enabled? "No snap in tolerance" "Snapping disabled")))
    (or (:snap/delta evidence) delta)))
(defn- transform-project [project elements transform & args]
  (reduce (fn [current element]
            (apply bim/update-element current (element-storey-id (:id element))
                   (:id element) transform args))
          project elements))
(defn- parse-point [id]
  (mapv #(js/parseFloat (.trim %))
        (string/split (.-value (.getElementById js/document id)) #",")))
(defn- parse-wall-layers []
  (mapv (fn [spec]
          (let [parts (mapv string/trim (string/split spec #":"))
                [material thickness category] parts]
            (when (or (not= 3 (count parts)) (string/blank? material) (string/blank? thickness)
                      (string/blank? category))
              (throw (js/Error. (str "Invalid wall layer: " spec))))
            (bim/material-layer material (js/parseFloat thickness) false (keyword category))))
        (remove string/blank?
                (map string/trim
                     (string/split (.-value (.getElementById js/document "wall-layers")) #",")))))
(defn- element-obstacle [element]
  (when-let [mesh (bim/element-mesh element)]
    (let [positions (:positions mesh)]
      {:min (apply mapv min positions) :max (apply mapv max positions)})))
(defn- analyze-structure! []
  (let [span (num "structural-span") load-n (* 1000.0 (num "structural-load"))
        model (family/structural-model
               {:nodes [(family/structural-node {:id :fixed :point [0.0 0.0]
                                                 :restraints [true true]})
                        (family/structural-node {:id :loaded :point [span 0.0]
                                                 :restraints [false true]})]
                :members [(family/structural-analysis-member
                           {:id :member :start-node :fixed :end-node :loaded
                            :area-m2 0.01 :elastic-modulus-pa 2.0e11 :material "S355"})]
                :load-cases [(family/structural-load-case
                              {:id :design :name "Design" :nodal-loads
                               [{:node :loaded :fx load-n :fy 0.0}]})]})
        result (family/analyze-2d-truss model :design)
        displacement (get-in result [:structural.analysis/displacements :loaded 0])
        force (get-in result [:structural.analysis/member-axial-forces :member])]
    (set! (.-textContent (.getElementById js/document "engineering-status"))
          (str "Axial " (.toFixed (/ force 1000.0) 2) " kN · Δ "
               (.toFixed (* displacement 1000.0) 3) " mm"))))
(defn- route-pipe! []
  (let [start (parse-point "pipe-start") end (parse-point "pipe-end")
        diameter (num "pipe-diameter")
        obstacles (vec (keep element-obstacle (all-elements)))
        path (family/route-mep start end obstacles {:step 0.25 :clearance diameter})]
    (if (< (count path) 2)
      (set! (.-textContent (.getElementById js/document "engineering-status")) "No route found")
      (let [first-id (:next-id @state)
            segments (mapv (fn [index [a b]]
                             (family/mep-segment
                              {:id (+ first-id index) :name (str "Pipe " (+ first-id index))
                               :kind :pipe :start a :end b :diameter diameter :system-id :hydronic}))
                           (range) (partition 2 1 path))
            project (reduce #(bim/add-element %1 (:active-storey @state) %2)
                            (:project @state) segments)]
        (swap! state update :next-id + (count segments))
        (select-only! (:id (first segments)))
        (set! (.-textContent (.getElementById js/document "engineering-status"))
              (str (count segments) " routed segments"))
        (commit! project)))))
(defn- editable-target? [event]
  (let [target (.-target event) tag (some-> target .-tagName .toLowerCase)]
    (or (#{"input" "select" "textarea"} tag) (.-isContentEditable target))))
(def revit-shortcuts {"wa" "add-wall" "dr" "add-door" "wn" "add-window" "ll" "add-level"
                      "fl" "add-slab" "rf" "add-roof" "mv" "move-element" "co" "copy-element"
                      "ro" "rotate-element" "mm" "mirror-element" "ar" "array-element"
                      "al" "align-elements" "of" "offset-walls" "tr" "trim-walls"
                      "wj" "join-walls" "wl" "apply-wall-layers"})
(def profile-shortcuts
  {:archicad {"w" "add-wall" "d" "add-door" "n" "add-window" "l" "add-level"
              "f" "add-slab" "m" "move-element" "c" "copy-element"
              "r" "rotate-element" "i" "mirror-element" "a" "array-element"}
   :vectorworks {"2" "add-wall" "d" "add-door" "w" "add-window" "l" "add-level"
                 "f" "add-slab" "m" "move-element" "c" "copy-element"
                 "r" "rotate-element" "i" "mirror-element" "a" "array-element"}})
(def ^:private storage-key "kami.bim-editor.project.v2")
(def ^:private backup-key "kami.bim-editor.project.backup")
(defn- project-document []
  (let [{:keys [project-id project-name project active-storey selected azimuth elevation
                camera-target camera-distance profile]} @state]
    (project/document {:id project-id :name project-name :building-model project
                       :family-catalog (:family-catalog @state)
                       :editor {:active-storey active-storey :selected selected
                                :selection (vec (selection-ids))}
                       :camera {:azimuth azimuth :elevation elevation :target camera-target
                                :distance camera-distance}
                       :interaction {:profile profile}})))
(defn- save-project! []
  (let [data (pr-str (project-document)) old (.getItem js/localStorage storage-key)]
    (when old (.setItem js/localStorage backup-key old)) (.setItem js/localStorage storage-key data)
    (swap! state assoc :save-status :saved) (refresh!)))
(defn- apply-project! [value]
  (let [p (project/open value) model (:project/building-model p) editor (:project/editor p)
        camera (:project/camera p) interaction (:project/interaction p)
        element-ids (map :id (mapcat :elements (mapcat :storeys (mapcat :buildings (:sites model)))))
        space-ids (map :id (mapcat :spaces (mapcat :storeys (mapcat :buildings (:sites model)))))
        storey-ids (map :id (mapcat :storeys (mapcat :buildings (:sites model))))]
    (swap! state assoc :project-id (:project/id p) :project-name (:project/name p) :project model
           :active-storey (:active-storey editor) :selected (:selected editor)
           :selection (set (or (:selection editor)
                               (when-let [selected (:selected editor)] [selected])))
           :azimuth (:azimuth camera)
           :elevation (:elevation camera)
           :camera-target (or (:target camera) [4.0 1.5 3.0])
           :camera-distance (or (:distance camera) 14.0)
           :profile (:profile interaction) :next-id (inc (reduce max 13 element-ids))
           :next-storey-id (inc (reduce max 3 storey-ids)) :next-space-id (inc (reduce max 999 space-ids))
           :family-catalog (if (seq (:project/family-catalog p))
                             (:project/family-catalog p) (initial-family-catalog))
           :selected-space nil :history [] :future [] :shortcut-buffer "" :save-status :saved)
    (set! (.-value (.getElementById js/document "profile")) (name (:profile interaction))) (refresh!)))
(defn- load-project! []
  (when-let [data (.getItem js/localStorage storage-key)]
    (try (apply-project! (reader/read-string data))
         (catch :default _ (when-let [backup (.getItem js/localStorage backup-key)] (apply-project! (reader/read-string backup)))))))
(defn- download-project! []
  (let [bundle (integration/coordinated-revision
                {:project (:project @state) :project-id (:project-id @state)
                 :project-name (:project-name @state) :revision (:revision @state) :events []})
        a (.createElement js/document "a")
        url (.createObjectURL js/URL (js/Blob. #js [(pr-str bundle)] #js {:type "application/edn"}))]
    (set! (.-href a) url) (set! (.-download a) "building.coordinated-bim.edn")
    (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- download-text! [filename mime value]
  (let [a (.createElement js/document "a")
        url (.createObjectURL js/URL (js/Blob. #js [value] #js {:type mime}))]
    (set! (.-href a) url) (set! (.-download a) filename)
    (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- download-bytes! [filename mime bytes]
  (let [a (.createElement js/document "a")
        data (js/Uint8Array. (clj->js bytes))
        url (.createObjectURL js/URL (js/Blob. #js [data] #js {:type mime}))]
    (set! (.-href a) url) (set! (.-download a) filename)
    (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- download-ifc! []
  (download-text! "building.ifc" "application/x-step"
                  (ifc/write-spf (integration/coordinated-ifc (:project @state)))))
(defn- download-drawing! []
  (let [model (:project @state)
        storey (bim/find-storey model (:active-storey @state))
        building (some-> model :sites first :buildings first)
        kind (keyword (.-value (.getElementById js/document "drawing-kind")))
        format (keyword (.-value (.getElementById js/document "drawing-format")))
        plan (when storey (drawing/documented-floor-plan storey))
        section (when building (drawing/orthographic-view building
                                                           {:kind :section :axis :x
                                                            :cut-position 0.0 :depth 20.0
                                                            :title "Section A"}))
        [filename content]
        (case kind
          :section [(str "section-" (:id building) ".svg")
                    (drawing/orthographic-view-svg building {:kind :section :axis :x
                                                             :cut-position 0.0 :depth 20.0
                                                             :title "Section A"})]
          :elevation [(str "elevation-" (:id building) ".svg")
                      (drawing/orthographic-view-svg building {:kind :elevation :axis :x
                                                               :cut-position 0.0
                                                               :title "North Elevation"})]
          :sheet ["sheet-A-001.svg"
                  (drawing/drawing-sheet-svg
                   {:number "A-001" :name "General Arrangements" :size :a1 :revision "P01"
                    :viewports [{:view plan :x 20 :y 20 :width 380 :height 260
                                 :title (:name storey) :scale 100}
                                {:view section :x 430 :y 20 :width 380 :height 260
                                 :title "Section A" :scale 50}]})]
          [(str "floor-plan-" (:id storey) ".svg")
           (drawing/documented-floor-plan-svg storey)])]
    (case format
      :dxf (let [{:keys [filename media-type content]}
                 (integration/export-drawing model (:active-storey @state) :dxf)]
             (download-text! filename media-type content))
      :pdf (let [{:keys [filename media-type content]}
                 (integration/export-drawing model (:active-storey @state) :pdf)]
             (download-bytes! filename media-type content))
      (when content (download-text! filename "image/svg+xml" content)))))
(defn- import-ifc! [event]
  (when-let [file (aget (.. event -target -files) 0)]
    (-> (.text file) (.then #(apply-project! (integration/import-ifc-spf %))))))
(defn- import-project! [event]
  (when-let [file (aget (.. event -target -files) 0)] (-> (.text file) (.then #(apply-project! (reader/read-string %))))))
(defn- invoke-shortcut! [event]
  (when-not (editable-target? event)
    (let [key (.toLowerCase (.-key event)) ctrl (or (.-ctrlKey event) (.-metaKey event)) profile (:profile @state)]
      (cond
        (and ctrl (= key "z") (.-shiftKey event)) (do (.preventDefault event) (.click (.getElementById js/document "redo")))
        (and ctrl (= key "z")) (do (.preventDefault event) (.click (.getElementById js/document "undo")))
        (= profile :revit)
        (when (re-matches #"[a-z]" key)
          (let [buffer (str (:shortcut-buffer @state) key) command (get revit-shortcuts buffer)
                prefix? (some #(.startsWith % buffer) (keys revit-shortcuts))]
            (.preventDefault event)
            (cond command (do (swap! state assoc :shortcut-buffer "") (.click (.getElementById js/document command)))
                  prefix? (swap! state assoc :shortcut-buffer buffer)
                  :else (swap! state assoc :shortcut-buffer key))))
        :else (when-let [command (get-in profile-shortcuts [profile key])]
                (.preventDefault event) (.click (.getElementById js/document command)))))))
(defn- show-drag-measure! [delta evidence]
  (let [[dx dy dz] delta
        length (js/Math.hypot dx dy dz)
        overlay (.getElementById js/document "drag-measure")]
    (set! (.-display (.-style overlay)) "block")
    (set! (.-textContent overlay)
          (str "Δ " (.toFixed length 3) " m · X " (.toFixed dx 3)
               " · Y " (.toFixed dy 3) " · Z " (.toFixed dz 3)
               (when evidence (str " · " (name (:snap/kind evidence))))))))
(defn- hide-drag-measure! []
  (set! (.-display (.-style (.getElementById js/document "drag-measure"))) "none"))
(defn- show-snap-marker! [canvas client-x client-y evidence]
  (let [marker (.getElementById js/document "snap-marker")]
    (if evidence
      (let [rect (.getBoundingClientRect canvas)]
        (set! (.-display (.-style marker)) "block")
        (set! (.-left (.-style marker)) (str (- client-x (.-left rect)) "px"))
        (set! (.-top (.-style marker)) (str (- client-y (.-top rect)) "px"))
        (set! (.-title marker) (name (:snap/kind evidence))))
      (set! (.-display (.-style marker)) "none"))))
(defn- hide-snap-marker! []
  (set! (.-display (.-style (.getElementById js/document "snap-marker"))) "none"))
(defn- show-selection-box! [canvas [start-x start-y] [current-x current-y]]
  (let [rect (.getBoundingClientRect canvas) box (.getElementById js/document "selection-box")
        left (- (min start-x current-x) (.-left rect))
        top (- (min start-y current-y) (.-top rect))]
    (set! (.-display (.-style box)) "block")
    (set! (.-left (.-style box)) (str left "px"))
    (set! (.-top (.-style box)) (str top "px"))
    (set! (.-width (.-style box)) (str (js/Math.abs (- current-x start-x)) "px"))
    (set! (.-height (.-style box)) (str (js/Math.abs (- current-y start-y)) "px"))))
(defn- hide-selection-box! []
  (set! (.-display (.-style (.getElementById js/document "selection-box"))) "none"))
(defn ^:export init! [] (let [canvas (.getElementById js/document "gpu-canvas") drag (atom nil)]
 (-> (gpu/init-canvas! canvas) (.then (fn [v] (reset! viewport v) (refresh!) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!))))
 (.addEventListener (.getElementById js/document "profile") "change"
                    #(do (swap! state assoc :profile (keyword (.. % -target -value)) :shortcut-buffer "")
                         (set! (.-textContent (.getElementById js/document "profile-hint"))
                               (case (:profile @state) :archicad "W Wall · D Door · N Window · L Level · F Floor"
                                     :vectorworks "2 Wall · D Door · W Window · L Layer · F Floor"
                                     "WA Wall · DR Door · WN Window · LL Level · FL Floor")) (refresh!)))
 (.addEventListener js/window "keydown"
                    (fn [event]
                      (if (and (= "Escape" (.-key event)) @drag)
                        (do (.preventDefault event)
                            (when-let [project (:original-project @drag)]
                              (swap! state interaction/cancel-drag-state project))
                            (reset! drag nil) (hide-drag-measure!) (hide-snap-marker!)
                            (hide-selection-box!) (refresh!))
                        (invoke-shortcut! event))))
 (.addEventListener (.getElementById js/document "analyze-structure") "click" analyze-structure!)
 (.addEventListener (.getElementById js/document "route-pipe") "click" route-pipe!)
 (.addEventListener (.getElementById js/document "family-definition") "change" refresh-family-types!)
 (refresh-family-types!)
 (.addEventListener (.getElementById js/document "add-family-instance") "click"
                    #(let [id (:next-id @state)
                           family-id (.-value (.getElementById js/document "family-definition"))
                           type-key (keyword (.-value (.getElementById js/document "family-type")))
                           instance (family/instantiate-family-type
                                     (:family-catalog @state) family-id type-key id
                                     {:depth (num "family-depth") :height (num "family-height")})]
                       (swap! state update :next-id inc)
                       (select-only! id)
                       (commit! (bim/add-element (:project @state) (:active-storey @state) instance))))
 (.addEventListener (.getElementById js/document "add-wall") "click" #(let [id (:next-id @state) storey-id (:active-storey @state)
                                                                                  z (:elevation (bim/find-storey (:project @state) storey-id))
                                                                                  y (+ 7 (- id 14)) w (wall id [0 y z] [4 y z])]
                                                                              (swap! state update :next-id inc) (select-only! id)
                                                                              (commit! (bim/add-element (:project @state) storey-id w))))
 (.addEventListener (.getElementById js/document "add-level") "click"
                    #(let [id (:next-storey-id @state) elevation (+ 3.2 (reduce max 0 (map :elevation (storeys))))
                           level (bim/storey {:id id :name (str "Level " (dec id)) :elevation elevation
                                              :height 3.2 :placement :identity :spaces [] :elements []})]
                       (swap! state assoc :next-storey-id (inc id) :active-storey id
                              :selected nil :selection #{})
                       (commit! (bim/add-storey (:project @state) 2 level))))
 (.addEventListener (.getElementById js/document "add-slab") "click"
                    #(let [id (:next-id @state) storey (bim/find-storey (:project @state) (:active-storey @state)) z (:elevation storey)
                           slab (bim/slab {:id id :name (str "Floor " (:name storey))
                                           :boundary [[0 0 z] [8 0 z] [8 6 z] [0 6 z]] :thickness 0.25})]
                       (swap! state assoc :next-id (inc id) :selected id :selection #{id})
                       (commit! (bim/add-element (:project @state) (:active-storey @state) slab))))
 (.addEventListener (.getElementById js/document "add-roof") "click"
                    (fn [_]
                      (authoring-commit!
                       "Roof added"
                       (fn []
                         (let [id (:next-id @state)
                               storey (bim/find-storey (:project @state) (:active-storey @state))
                               z (+ (:elevation storey) (:height storey))
                               width (num "roof-width") depth (num "roof-depth")
                               roof (bim/gable-roof
                                     {:id id :name (str "Roof " id)
                                      :boundary [[0 0 z] [width 0 z]
                                                 [width depth z] [0 depth z]]
                                      :slope-rad (* (num "roof-slope") (/ js/Math.PI 180.0))
                                      :thickness (num "roof-thickness")})]
                           (swap! state assoc :next-id (inc id) :selected id :selection #{id})
                           (bim/add-element (:project @state) (:active-storey @state) roof))))))
 (.addEventListener (.getElementById js/document "add-room") "click"
                    #(let [id (:next-space-id @state) storey (bim/find-storey (:project @state) (:active-storey @state))
                           z (:elevation storey) width (max 0.1 (num "room-width")) depth (max 0.1 (num "room-depth"))
                           room (bim/room-space {:id id :name (str "Room " id) :label (str id) :category :residential
                                                 :boundary [[0 0 z] [width 0 z] [width depth z] [0 depth z]] :height (:height storey)})]
                       (swap! state assoc :next-space-id (inc id) :selected-space id)
                       (commit! (bim/add-space (:project @state) (:active-storey @state) room))))
 (.addEventListener (.getElementById js/document "apply-room") "click"
                    #(when-let [id (:selected-space @state)]
                       (let [old (first (filter (fn [s] (= id (:id s))) (spaces)))
                             room (bim/room-space {:id id :name (.-value (.getElementById js/document "room-name"))
                                                   :label (:label old) :category (keyword (.-value (.getElementById js/document "room-category")))
                                                   :boundary (:boundary old) :height (:height old)})]
                         (commit! (bim/update-space (:project @state) (:active-storey @state) id (constantly room))))))
 (.addEventListener (.getElementById js/document "delete-room") "click"
                    #(when-let [id (:selected-space @state)]
                       (swap! state assoc :selected-space nil)
                       (commit! (bim/delete-space (:project @state) (:active-storey @state) id))))
 (doseq [[button-id kind] [["add-door" :door] ["add-window" :window]]]
   (.addEventListener (.getElementById js/document button-id) "click"
                      #(when-let [host (selected)]
                         (when (= :wall (:kind host))
                           (let [id (:next-id @state) opening-id (+ 10000 id)
                                 width (if (= kind :door) 0.9 1.2) height (if (= kind :door) 2.1 1.2)
                                 sill (if (= kind :door) 0 0.9)
                                 length (get-in host [:quantities :length-m]) offset (max 0.1 (/ (- length width) 2))
                                 opening (bim/rectangular-opening {:id opening-id :offset offset :sill sill :width width :height height :filled-by id})
                                 hosted (bim/add-opening-to-wall host opening)
                                 fill ((if (= kind :door) bim/door bim/window) {:id id :host-id (:id host) :opening-id opening-id})
                                 storey-id (:active-storey @state)
                                 p (-> (:project @state)
                                       (bim/update-element storey-id (:id host) (constantly hosted))
                                       (bim/add-element storey-id fill))]
                             (swap! state update :next-id inc)
                             (select-only! id)
                             (commit! p))))))
 (.addEventListener (.getElementById js/document "apply") "click" #(when-let [e (selected)] (let [[[x y z] _] (get-in e [:geometry :axis]) len (num "length") updated (bim/wall {:id (:id e) :name (.-value (.getElementById js/document "name")) :start [x y z] :end [(+ x len) y z] :height (num "height") :thickness (num "thickness") :material (.-value (.getElementById js/document "material"))})] (commit! (bim/update-element (:project @state) (:active-storey @state) (:id e) (constantly updated))))))
 (.addEventListener (.getElementById js/document "move-element") "click"
                    #(let [chosen (filterv bim/element-mesh (selected-elements))]
                       (when (seq chosen)
                         (let [delta (snap-delta chosen
                                                 [(num "move-x") (num "move-y") (num "move-z")])]
                           (commit! (transform-project (:project @state) chosen
                                                       bim/translate-element delta))))))
 (.addEventListener (.getElementById js/document "copy-element") "click"
                    #(let [chosen (filterv bim/element-mesh (selected-elements))]
                       (when (seq chosen)
                         (let [start-id (:next-id @state)
                               delta (snap-delta chosen
                                                 [(num "move-x") (num "move-y") (num "move-z")])
                               copies (mapv (fn [offset element]
                                              (bim/duplicate-element element (+ start-id offset) delta))
                                            (range) chosen)
                               p (reduce (fn [project [source copy]]
                                           (bim/add-element project
                                                            (element-storey-id (:id source)) copy))
                                         (:project @state) (map vector chosen copies))
                               ids (set (map :id copies))]
                           (swap! state assoc :next-id (+ start-id (count copies))
                                  :selected (:id (first copies)) :selection ids)
                           (commit! p)))))
 (.addEventListener (.getElementById js/document "rotate-element") "click"
                    #(let [chosen (filterv bim/element-mesh (selected-elements))]
                       (when (seq chosen)
                         (let [pivot [(num "pivot-x") (num "pivot-y") (num "pivot-z")]
                               angle (* (num "transform-angle") (/ js/Math.PI 180.0))]
                           (commit! (transform-project (:project @state) chosen
                                                       bim/rotate-element-z pivot angle))))))
 (.addEventListener (.getElementById js/document "mirror-element") "click"
                    #(let [chosen (filterv bim/element-mesh (selected-elements))]
                       (when (seq chosen)
                         (let [origin [(num "pivot-x") (num "pivot-y") (num "pivot-z")]
                               normal [(num "mirror-x") (num "mirror-y") (num "mirror-z")]]
                           (commit! (transform-project (:project @state) chosen
                                                       bim/mirror-element origin normal))))))
 (.addEventListener (.getElementById js/document "array-element") "click"
                    #(when-let [e (selected)]
                       (when (bim/element-mesh e)
                         (let [count-value (num "array-count")]
                           (when (and (js/Number.isInteger count-value) (<= 1 count-value 100))
                             (let [start-id (:next-id @state)
                                   identities (mapv (fn [offset]
                                                      (let [id (+ start-id offset)]
                                                        {:id id :global-id (str id)}))
                                                    (range count-value))
                                   kind (keyword (.-value (.getElementById js/document "array-kind")))
                                   copies (if (= :radial kind)
                                            (bim/radial-array
                                             e identities
                                             [(num "pivot-x") (num "pivot-y") (num "pivot-z")]
                                             (* (num "transform-angle") (/ js/Math.PI 180.0)))
                                            (bim/linear-array
                                             e identities
                                             (snap-delta [e] [(num "move-x") (num "move-y")
                                                              (num "move-z")])))
                                   p (reduce (fn [project copy]
                                               (bim/add-element project (:active-storey @state) copy))
                                             (:project @state) copies)]
                               (swap! state assoc :next-id (+ start-id count-value)
                                      :selected (:id (first copies))
                                      :selection (set (map :id copies)))
                               (commit! p)))))))
 (.addEventListener (.getElementById js/document "align-elements") "click"
                    (fn [_]
                      (authoring-commit!
                       "Aligned"
                       (fn []
                         (let [chosen (selected-elements) reference (selected)]
                           (when (= 2 (count chosen))
                             (let [moving (first (remove #(= (:id reference) (:id %)) chosen))
                                   aligned (bim/align-element
                                            reference moving
                                            {:axis (keyword (.-value (.getElementById js/document "align-axis")))
                                             :reference-anchor
                                             (keyword (.-value (.getElementById js/document "align-reference-anchor")))
                                             :moving-anchor
                                             (keyword (.-value (.getElementById js/document "align-moving-anchor")))})]
                               (bim/update-element (:project @state)
                                                   (element-storey-id (:id moving)) (:id moving)
                                                   (constantly aligned)))))))))
 (.addEventListener (.getElementById js/document "offset-walls") "click"
                    (fn [_]
                      (authoring-commit!
                       "Walls offset"
                       (fn []
                         (let [walls (filterv #(= :wall (:kind %)) (selected-elements))]
                           (when (seq walls)
                             (transform-project (:project @state) walls bim/offset-wall
                                                (num "wall-offset"))))))))
 (doseq [[button-id label operation]
         [["trim-walls" "Walls trimmed / extended" bim/trim-extend-walls]
          ["join-walls" "Walls joined" bim/join-walls]]]
   (.addEventListener (.getElementById js/document button-id) "click"
                      (fn [_]
                        (authoring-commit!
                         label
                         (fn []
                           (let [walls (filterv #(= :wall (:kind %)) (selected-elements))]
                             (when (= 2 (count walls))
                               (when-let [[left right]
                                          (if (= button-id "join-walls")
                                            (operation
                                             (first walls) (second walls)
                                             {:style (keyword (.-value (.getElementById js/document
                                                                                         "wall-join-style")))
                                              :priority (keyword (.-value (.getElementById js/document
                                                                                            "wall-join-priority")))})
                                            (operation (first walls) (second walls)))]
                                 (-> (:project @state)
                                     (bim/update-element (element-storey-id (:id left)) (:id left)
                                                         (constantly left))
                                     (bim/update-element (element-storey-id (:id right)) (:id right)
                                                         (constantly right)))))))))))
 (.addEventListener (.getElementById js/document "apply-wall-layers") "click"
                    (fn [_]
                      (authoring-commit!
                       "Wall layers applied"
                       (fn []
                         (let [walls (filterv #(= :wall (:kind %)) (selected-elements))
                               layers (parse-wall-layers)]
                           (when (seq walls)
                             (transform-project (:project @state) walls
                                                bim/set-wall-layers layers)))))))
 (.addEventListener (.getElementById js/document "delete") "click"
                    #(when-let [e (selected)]
                       (let [p (if (#{:door :window} (:kind e))
                                 (let [[host-id opening-id] (:connected-to e)]
                                   (-> (:project @state)
                                       (bim/update-element (:active-storey @state) host-id bim/remove-opening-from-wall opening-id)
                                       (bim/delete-element (:active-storey @state) (:id e))))
                                 (bim/delete-element (:project @state) (:active-storey @state) (:id e)))]
                         (commit! p)
                         (select-only! (some-> (first (elements)) :id))
                         (refresh!))))
 (.addEventListener (.getElementById js/document "undo") "click" #(when-let [p (peek (:history @state))] (swap! state (fn [s] (assoc s :project p :history (pop (:history s)) :future (conj (:future s) (:project s))))) (refresh!)))
 (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [p (peek (:future @state))] (swap! state (fn [s] (assoc s :project p :future (pop (:future s)) :history (conj (:history s) (:project s))))) (refresh!))))
 (.addEventListener canvas "pointerdown"
                    (fn [event]
                      (let [client-x (.-clientX event) client-y (.-clientY event)
                            tool (keyword (.-value (.getElementById js/document "viewport-tool")))
                            mode (selection-mode event)]
                        (case tool
                          :move
                          (if-let [hit (hit-at canvas client-x client-y)]
                            (let [element (:element hit) element-id (:element/id hit)
                                  bounds (:pick/bounds hit)
                                  plane-z (/ (+ (get-in bounds [:min 2])
                                                (get-in bounds [:max 2])) 2.0)
                                  plane {:plane/origin [0.0 0.0 plane-z]
                                         :plane/normal [0.0 0.0 1.0]}
                                  ray (viewport-ray-at canvas client-x client-y)]
                              (if (not= :replace mode)
                                (do (apply-selection!
                                     (interaction/selection-after-click
                                      (selection-ids) element-id mode))
                                    (reset! drag nil))
                                (do (when-not (contains? (selection-ids) element-id)
                                      (select-only! element-id))
                                    (swap! state assoc :selected element-id
                                           :active-storey (element-storey-id element-id))
                                    (if (interaction/ray-plane-point ray plane)
                                      (reset! drag {:mode :move :start [client-x client-y]
                                                    :moved? false :start-ray ray :plane plane
                                                    :elements (selected-elements)
                                                    :anchor element
                                                    :original-project (:project @state)})
                                      (reset! drag nil))))
                              (refresh!))
                            (do (when (= :replace mode) (select-only! nil)) (refresh!)))
                          :box
                          (reset! drag {:mode :box :start [client-x client-y]
                                        :last [client-x client-y] :moved? false
                                        :selection-mode mode})
                          (reset! drag {:mode :orbit :start [client-x client-y]
                                        :last [client-x client-y] :moved? false
                                        :selection-mode mode})))))
 (.addEventListener js/window "pointerup"
                    (fn [_]
                      (when-let [{:keys [mode start moved? original-project selection-mode]} @drag]
                        (case mode
                          :orbit (when-not moved?
                                   (pick-at! canvas (first start) (second start) selection-mode))
                          :box (when moved?
                                 (let [[start-x start-y] start
                                       current (:last @drag)
                                       [current-x _] current
                                       a (viewport-ndc-at canvas start-x start-y)
                                       b (viewport-ndc-at canvas (first current) (second current))
                                       rect (.getBoundingClientRect canvas)
                                       {:keys [eye target]} (camera-state)
                                       ids (interaction/elements-in-screen-rect
                                            (all-elements)
                                            {:eye eye :target target
                                             :aspect (/ (.-width rect)
                                                        (max 1.0 (.-height rect)))}
                                            {:min (mapv min a b) :max (mapv max a b)}
                                            (if (>= current-x start-x) :window :crossing))]
                                   (apply-selection!
                                    (interaction/selection-after-box
                                     (selection-ids) ids selection-mode))
                                   (refresh!)))
                          :move (when moved?
                                  (swap! state interaction/commit-drag-state original-project)
                                  (refresh!))))
                      (reset! drag nil) (hide-drag-measure!) (hide-snap-marker!)
                      (hide-selection-box!)))
 (.addEventListener canvas "dblclick" (fn [event] (.preventDefault event) (frame-selected!)))
 (.addEventListener js/window "pointermove"
                    (fn [e]
                      (when-let [{:keys [mode start moved? start-ray plane elements anchor
                                         original-project]
                                  [x y] :last} @drag]
                        (let [[start-x start-y] start
                              client-x (.-clientX e) client-y (.-clientY e)
                              passed-threshold? (> (js/Math.hypot (- client-x start-x)
                                                                  (- client-y start-y)) 3.0)]
                          (case mode
                            :orbit
                            (do (swap! state update :azimuth + (* 0.008 (- client-x x)))
                                (swap! state update :elevation
                                       (fn [v] (max -1.2 (min 1.2
                                                             (+ v (* 0.008 (- client-y y)))))))
                                (swap! drag assoc :last [client-x client-y]
                                       :moved? (or moved? passed-threshold?)))
                            :box
                            (do (swap! drag assoc :last [client-x client-y]
                                      :moved? (or moved? passed-threshold?))
                                (when passed-threshold?
                                  (show-selection-box! canvas start [client-x client-y])))
                            :move
                            (when passed-threshold?
                              (when-let [motion (interaction/drag-delta
                                                 start-ray
                                                 (viewport-ray-at canvas client-x client-y)
                                                 plane)]
                                (let [delta (snap-delta elements (:drag/delta motion))
                                      preview (transform-project original-project elements
                                                                 bim/translate-element delta)]
                                  (swap! state assoc :project preview)
                                  (swap! drag assoc :moved? true :delta delta)
                                  (show-drag-measure! delta (:last-snap @state))
                                  (show-snap-marker! canvas client-x client-y (:last-snap @state))
                                  (refresh!)))))))))
 (.addEventListener js/window "pointercancel"
                    (fn [_]
                      (when-let [project (:original-project @drag)]
                        (swap! state interaction/cancel-drag-state project))
                      (reset! drag nil) (hide-drag-measure!) (hide-snap-marker!)
                      (hide-selection-box!) (refresh!)))
 (.addEventListener (.getElementById js/document "save-project") "click" save-project!)
 (.addEventListener (.getElementById js/document "load-project") "click" load-project!)
 (.addEventListener (.getElementById js/document "import") "click" #(.click (.getElementById js/document "import-file")))
 (.addEventListener (.getElementById js/document "import-file") "change" import-project!)
 (.addEventListener (.getElementById js/document "export-schedule") "click" download-schedule!)
 (.addEventListener (.getElementById js/document "run-clashes") "click" refresh!)
 (.addEventListener (.getElementById js/document "export-clashes") "click" download-clashes!)
 (.addEventListener (.getElementById js/document "export-ifc") "click" download-ifc!)
 (.addEventListener (.getElementById js/document "export-drawing") "click" download-drawing!)
 (.addEventListener (.getElementById js/document "import-ifc") "click" #(.click (.getElementById js/document "import-ifc-file")))
 (.addEventListener (.getElementById js/document "import-ifc-file") "change" import-ifc!)
 (.addEventListener (.getElementById js/document "export") "click" download-project!)))
