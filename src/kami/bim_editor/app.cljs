(ns kami.bim-editor.app (:require [cljs.reader :as reader] [clojure.string :as string] [bim] [kami.bim-editor.project :as project] [kami.webgpu.mesh :as gpu]))
(defn wall [id a b] (bim/wall {:id id :name (str "Wall " id) :start a :end b :thickness 0.25 :height 3.2 :material "Concrete"}))
(defn initial-project [] (let [st (bim/storey {:id 3 :name "Ground Floor" :elevation 0 :height 3.2 :placement :identity :spaces [] :elements []}) p (-> (bim/project "Lodge") (update :sites conj (bim/site {:id 1 :name "Site" :geo nil :placement :identity :buildings [(bim/building {:id 2 :name "Lodge" :placement :identity :reference-elevation 0 :storeys [st]})]})))] (reduce #(bim/add-element %1 3 %2) p [(wall 10 [0 0 0] [8 0 0]) (wall 11 [8 0 0] [8 6 0]) (wall 12 [8 6 0] [0 6 0]) (wall 13 [0 6 0] [0 0 0])])))
(defonce state (atom {:project (initial-project) :active-storey 3 :selected 10 :next-id 14 :next-storey-id 4
                      :selected-space nil :next-space-id 1000
                      :selected-clash nil
                      :history [] :future [] :azimuth 0.75 :elevation 0.5
                      :profile :revit :shortcut-buffer "" :project-id "untitled-bim" :project-name "Untitled BIM"
                      :revision 0 :save-status :clean}))
(defonce viewport (atom nil))
(declare refresh!)
(defn- storeys [] (:storeys (bim/find-building (:project @state) 2)))
(defn- elements [] (:elements (bim/find-storey (:project @state) (:active-storey @state))))
(defn- all-elements [] (mapcat :elements (storeys)))
(defn- spaces [] (:spaces (bim/find-storey (:project @state) (:active-storey @state))))
(defn- all-spaces [] (mapcat :spaces (storeys)))
(defn- selected [] (first (filter #(= (:selected @state) (:id %)) (elements))))
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
                                                :selected (:id row)) (refresh!)))
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
                                                        :selected (:clash/a result)) (refresh!)))
          (.appendChild container button))))))
(defn- download-clashes! []
  (let [rows (clashes) data (str "storey,element_a,element_b,kind_a,kind_b,overlap_x,overlap_y,overlap_z,volume_m3\n"
                                 (string/join "\n" (map (fn [c] (string/join "," (concat [(:clash/storey c) (:clash/a c) (:clash/b c)]
                                                                                         (map name (:clash/kinds c)) (:clash/overlap c) [(:clash/volume c)]))) rows)))
        a (.createElement js/document "a") url (.createObjectURL js/URL (js/Blob. #js [data] #js {:type "text/csv;charset=utf-8"}))]
    (set! (.-href a) url) (set! (.-download a) "bim-clashes.csv") (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- refresh! []
  (when-let [v @viewport]
    (let [m (mesh)]
      (swap! viewport assoc :buffers (gpu/upload-mesh! (:mesh-context v) m))
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
                                         :selected (:selected @state) :profile (name (:profile @state))
                                         :projectVersion project/current-version :revision (:revision @state) :saveStatus (name (:save-status @state))
                                         :clashCount (count (clashes)) :selectedClash (:selected-clash @state)
                                         :shortcutBuffer (:shortcut-buffer @state)})))))
  (let [levels (.getElementById js/document "levels")]
    (set! (.-innerHTML levels) "")
    (doseq [storey (storeys)]
      (let [b (.createElement js/document "button")]
        (set! (.-textContent b) (str (:name storey) " · " (.toFixed (:elevation storey) 2) " m"))
        (when (= (:id storey) (:active-storey @state)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" #(do (swap! state assoc :active-storey (:id storey) :selected (some-> (first (:elements storey)) :id)) (refresh!)))
        (.appendChild levels b))))
  (let [tree (.getElementById js/document "tree")]
    (set! (.-innerHTML tree) "")
    (doseq [e (elements)]
      (let [b (.createElement js/document "button") icon ({:wall "▱" :door "▯" :window "▦"} (:kind e) "◇")]
        (set! (.-textContent b) (str icon " " (:name e)))
        (when (= (:id e) (:selected @state)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" #(do (swap! state assoc :selected (:id e)) (refresh!)))
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
(defn- draw! [] (when-let [{:keys [buffers] :as v} @viewport] (when buffers (let [{:keys [azimuth elevation]} @state d 14 eye [(+ 4 (* d (js/Math.cos elevation) (js/Math.cos azimuth))) (+ 3 (* d (js/Math.sin elevation))) (+ 3 (* d (js/Math.cos elevation) (js/Math.sin azimuth)))]] (gpu/render-frame! v buffers eye [4 1.5 3] [0.55 0.7 0.95])))) (js/requestAnimationFrame draw!))
(defn- num [id] (js/parseFloat (.-value (.getElementById js/document id))))
(defn- editable-target? [event]
  (let [target (.-target event) tag (some-> target .-tagName .toLowerCase)]
    (or (#{"input" "select" "textarea"} tag) (.-isContentEditable target))))
(def revit-shortcuts {"wa" "add-wall" "dr" "add-door" "wn" "add-window" "ll" "add-level" "fl" "add-slab"})
(def profile-shortcuts
  {:archicad {"w" "add-wall" "d" "add-door" "n" "add-window" "l" "add-level" "f" "add-slab"}
   :vectorworks {"2" "add-wall" "d" "add-door" "w" "add-window" "l" "add-level" "f" "add-slab"}})
(def ^:private storage-key "kami.bim-editor.project.v2")
(def ^:private backup-key "kami.bim-editor.project.backup")
(defn- project-document []
  (let [{:keys [project-id project-name project active-storey selected azimuth elevation profile]} @state]
    (project/document {:id project-id :name project-name :building-model project
                       :editor {:active-storey active-storey :selected selected}
                       :camera {:azimuth azimuth :elevation elevation} :interaction {:profile profile}})))
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
           :active-storey (:active-storey editor) :selected (:selected editor) :azimuth (:azimuth camera)
           :elevation (:elevation camera) :profile (:profile interaction) :next-id (inc (reduce max 13 element-ids))
           :next-storey-id (inc (reduce max 3 storey-ids)) :next-space-id (inc (reduce max 999 space-ids))
           :selected-space nil :history [] :future [] :shortcut-buffer "" :save-status :saved)
    (set! (.-value (.getElementById js/document "profile")) (name (:profile interaction))) (refresh!)))
(defn- load-project! []
  (when-let [data (.getItem js/localStorage storage-key)]
    (try (apply-project! (reader/read-string data))
         (catch :default _ (when-let [backup (.getItem js/localStorage backup-key)] (apply-project! (reader/read-string backup)))))))
(defn- download-project! []
  (let [a (.createElement js/document "a") url (.createObjectURL js/URL (js/Blob. #js [(pr-str (project-document))] #js {:type "application/edn"}))]
    (set! (.-href a) url) (set! (.-download a) "building.kami-bim.edn") (.click a) (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
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
(defn ^:export init! [] (let [canvas (.getElementById js/document "gpu-canvas") drag (atom nil)]
 (-> (gpu/init-canvas! canvas) (.then (fn [v] (reset! viewport v) (refresh!) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!))))
 (.addEventListener (.getElementById js/document "profile") "change"
                    #(do (swap! state assoc :profile (keyword (.. % -target -value)) :shortcut-buffer "")
                         (set! (.-textContent (.getElementById js/document "profile-hint"))
                               (case (:profile @state) :archicad "W Wall · D Door · N Window · L Level · F Floor"
                                     :vectorworks "2 Wall · D Door · W Window · L Layer · F Floor"
                                     "WA Wall · DR Door · WN Window · LL Level · FL Floor")) (refresh!)))
 (.addEventListener js/window "keydown" invoke-shortcut!)
 (.addEventListener (.getElementById js/document "add-wall") "click" #(let [id (:next-id @state) storey-id (:active-storey @state)
                                                                                  z (:elevation (bim/find-storey (:project @state) storey-id))
                                                                                  y (+ 7 (- id 14)) w (wall id [0 y z] [4 y z])]
                                                                              (swap! state update :next-id inc) (swap! state assoc :selected id)
                                                                              (commit! (bim/add-element (:project @state) storey-id w))))
 (.addEventListener (.getElementById js/document "add-level") "click"
                    #(let [id (:next-storey-id @state) elevation (+ 3.2 (reduce max 0 (map :elevation (storeys))))
                           level (bim/storey {:id id :name (str "Level " (dec id)) :elevation elevation
                                              :height 3.2 :placement :identity :spaces [] :elements []})]
                       (swap! state assoc :next-storey-id (inc id) :active-storey id :selected nil)
                       (commit! (bim/add-storey (:project @state) 2 level))))
 (.addEventListener (.getElementById js/document "add-slab") "click"
                    #(let [id (:next-id @state) storey (bim/find-storey (:project @state) (:active-storey @state)) z (:elevation storey)
                           slab (bim/slab {:id id :name (str "Floor " (:name storey))
                                           :boundary [[0 0 z] [8 0 z] [8 6 z] [0 6 z]] :thickness 0.25})]
                       (swap! state assoc :next-id (inc id) :selected id)
                       (commit! (bim/add-element (:project @state) (:active-storey @state) slab))))
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
                             (swap! state assoc :selected id)
                             (commit! p))))))
 (.addEventListener (.getElementById js/document "apply") "click" #(when-let [e (selected)] (let [[[x y z] _] (get-in e [:geometry :axis]) len (num "length") updated (bim/wall {:id (:id e) :name (.-value (.getElementById js/document "name")) :start [x y z] :end [(+ x len) y z] :height (num "height") :thickness (num "thickness") :material (.-value (.getElementById js/document "material"))})] (commit! (bim/update-element (:project @state) (:active-storey @state) (:id e) (constantly updated))))))
 (.addEventListener (.getElementById js/document "delete") "click"
                    #(when-let [e (selected)]
                       (let [p (if (#{:door :window} (:kind e))
                                 (let [[host-id opening-id] (:connected-to e)]
                                   (-> (:project @state)
                                       (bim/update-element (:active-storey @state) host-id bim/remove-opening-from-wall opening-id)
                                       (bim/delete-element (:active-storey @state) (:id e))))
                                 (bim/delete-element (:project @state) (:active-storey @state) (:id e)))]
                         (commit! p)
                         (swap! state assoc :selected (some-> (first (elements)) :id))
                         (refresh!))))
 (.addEventListener (.getElementById js/document "undo") "click" #(when-let [p (peek (:history @state))] (swap! state (fn [s] (assoc s :project p :history (pop (:history s)) :future (conj (:future s) (:project s))))) (refresh!)))
 (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [p (peek (:future @state))] (swap! state (fn [s] (assoc s :project p :future (pop (:future s)) :history (conj (:history s) (:project s))))) (refresh!))))
 (.addEventListener canvas "pointerdown" #(reset! drag [(.-clientX %) (.-clientY %)])) (.addEventListener js/window "pointerup" #(reset! drag nil)) (.addEventListener js/window "pointermove" (fn [e] (when-let [[x y] @drag] (swap! state update :azimuth + (* 0.008 (- (.-clientX e) x))) (swap! state update :elevation (fn [v] (max -1.2 (min 1.2 (+ v (* 0.008 (- (.-clientY e) y))))))) (reset! drag [(.-clientX e) (.-clientY e)]))))
 (.addEventListener (.getElementById js/document "save-project") "click" save-project!)
 (.addEventListener (.getElementById js/document "load-project") "click" load-project!)
 (.addEventListener (.getElementById js/document "import") "click" #(.click (.getElementById js/document "import-file")))
 (.addEventListener (.getElementById js/document "import-file") "change" import-project!)
 (.addEventListener (.getElementById js/document "export-schedule") "click" download-schedule!)
 (.addEventListener (.getElementById js/document "run-clashes") "click" refresh!)
 (.addEventListener (.getElementById js/document "export-clashes") "click" download-clashes!)
 (.addEventListener (.getElementById js/document "export") "click" download-project!)))
