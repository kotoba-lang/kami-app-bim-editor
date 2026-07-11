(ns kami.bim-editor.app (:require [bim] [kami.webgpu.mesh :as gpu]))
(defn wall [id a b] (bim/wall {:id id :name (str "Wall " id) :start a :end b :thickness 0.25 :height 3.2 :material "Concrete"}))
(defn initial-project [] (let [st (bim/storey {:id 3 :name "Ground Floor" :elevation 0 :height 3.2 :placement :identity :spaces [] :elements []}) p (-> (bim/project "Lodge") (update :sites conj (bim/site {:id 1 :name "Site" :geo nil :placement :identity :buildings [(bim/building {:id 2 :name "Lodge" :placement :identity :reference-elevation 0 :storeys [st]})]})))] (reduce #(bim/add-element %1 3 %2) p [(wall 10 [0 0 0] [8 0 0]) (wall 11 [8 0 0] [8 6 0]) (wall 12 [8 6 0] [0 6 0]) (wall 13 [0 6 0] [0 0 0])])))
(defonce state (atom {:project (initial-project) :selected 10 :next-id 14 :history [] :future [] :azimuth 0.75 :elevation 0.5}))
(defonce viewport (atom nil))
(defn- elements [] (:elements (bim/find-storey (:project @state) 3)))
(defn- selected [] (first (filter #(= (:selected @state) (:id %)) (elements))))
(defn- mesh [] (bim/merge-meshes (map bim/wall-with-openings-mesh (filter #(= :wall (:kind %)) (elements)))))
(defn- refresh! []
  (when-let [v @viewport]
    (let [m (mesh)]
      (swap! viewport assoc :buffers (gpu/upload-mesh! (:mesh-context v) m))
      (set! (.-textContent (.getElementById js/document "stats")) (str (count (elements)) " semantic elements · " (/ (count (:indices m)) 3) " triangles"))
      (set! (.-textContent (.getElementById js/document "debug-state"))
            (js/JSON.stringify (clj->js {:elementCount (count (elements))
                                         :wallCount (count (filter #(= :wall (:kind %)) (elements)))
                                         :openingCount (reduce + (map #(count (:openings %)) (filter #(= :wall (:kind %)) (elements))))
                                         :selected (:selected @state)})))))
  (let [tree (.getElementById js/document "tree")]
    (set! (.-innerHTML tree) "")
    (doseq [e (elements)]
      (let [b (.createElement js/document "button") icon ({:wall "▱" :door "▯" :window "▦"} (:kind e) "◇")]
        (set! (.-textContent b) (str icon " " (:name e)))
        (when (= (:id e) (:selected @state)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" #(do (swap! state assoc :selected (:id e)) (refresh!)))
        (.appendChild tree b))))
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
(defn- commit! [p] (swap! state (fn [s] (-> s (update :history conj (:project s)) (assoc :project p :future [])))) (refresh!))
(defn- draw! [] (when-let [{:keys [buffers] :as v} @viewport] (when buffers (let [{:keys [azimuth elevation]} @state d 14 eye [(+ 4 (* d (js/Math.cos elevation) (js/Math.cos azimuth))) (+ 3 (* d (js/Math.sin elevation))) (+ 3 (* d (js/Math.cos elevation) (js/Math.sin azimuth)))]] (gpu/render-frame! v buffers eye [4 1.5 3] [0.55 0.7 0.95])))) (js/requestAnimationFrame draw!))
(defn- num [id] (js/parseFloat (.-value (.getElementById js/document id))))
(defn ^:export init! [] (let [canvas (.getElementById js/document "gpu-canvas") drag (atom nil)]
 (-> (gpu/init-canvas! canvas) (.then (fn [v] (reset! viewport v) (refresh!) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!))))
 (.addEventListener (.getElementById js/document "add-wall") "click" #(let [id (:next-id @state) y (+ 7 (- id 14)) w (wall id [0 y 0] [4 y 0])] (swap! state update :next-id inc) (swap! state assoc :selected id) (commit! (bim/add-element (:project @state) 3 w))))
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
                                 p (-> (:project @state)
                                       (bim/update-element 3 (:id host) (constantly hosted))
                                       (bim/add-element 3 fill))]
                             (swap! state update :next-id inc)
                             (swap! state assoc :selected id)
                             (commit! p))))))
 (.addEventListener (.getElementById js/document "apply") "click" #(when-let [e (selected)] (let [[[x y z] _] (get-in e [:geometry :axis]) len (num "length") updated (bim/wall {:id (:id e) :name (.-value (.getElementById js/document "name")) :start [x y z] :end [(+ x len) y z] :height (num "height") :thickness (num "thickness") :material (.-value (.getElementById js/document "material"))})] (commit! (bim/update-element (:project @state) 3 (:id e) (constantly updated))))))
 (.addEventListener (.getElementById js/document "delete") "click"
                    #(when-let [e (selected)]
                       (let [p (if (#{:door :window} (:kind e))
                                 (let [[host-id opening-id] (:connected-to e)]
                                   (-> (:project @state)
                                       (bim/update-element 3 host-id bim/remove-opening-from-wall opening-id)
                                       (bim/delete-element 3 (:id e))))
                                 (bim/delete-element (:project @state) 3 (:id e)))]
                         (commit! p)
                         (swap! state assoc :selected (some-> (first (elements)) :id))
                         (refresh!))))
 (.addEventListener (.getElementById js/document "undo") "click" #(when-let [p (peek (:history @state))] (swap! state (fn [s] (assoc s :project p :history (pop (:history s)) :future (conj (:future s) (:project s))))) (refresh!)))
 (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [p (peek (:future @state))] (swap! state (fn [s] (assoc s :project p :future (pop (:future s)) :history (conj (:history s) (:project s))))) (refresh!))))
 (.addEventListener canvas "pointerdown" #(reset! drag [(.-clientX %) (.-clientY %)])) (.addEventListener js/window "pointerup" #(reset! drag nil)) (.addEventListener js/window "pointermove" (fn [e] (when-let [[x y] @drag] (swap! state update :azimuth + (* 0.008 (- (.-clientX e) x))) (swap! state update :elevation (fn [v] (max -1.2 (min 1.2 (+ v (* 0.008 (- (.-clientY e) y))))))) (reset! drag [(.-clientX e) (.-clientY e)]))))
 (.addEventListener (.getElementById js/document "export") "click" #(let [a (.createElement js/document "a")] (set! (.-href a) (.createObjectURL js/URL (js/Blob. #js [(pr-str (:project @state))] #js {:type "application/edn"}))) (set! (.-download a) "building.bim.edn") (.click a)))))
