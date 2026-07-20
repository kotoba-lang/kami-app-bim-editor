(ns kami.bim-editor.interaction-test
  (:require [bim :as bim]
            [clojure.test :refer [deftest is]]
            [kami.bim-editor.interaction :as interaction]))

(deftest camera-rays-pick-nearest-elements-and-frame-selection
  (let [near (bim/wall {:id 10 :start [-1.0 0.0 0.0] :end [1.0 0.0 0.0]
                        :thickness 0.2 :height 2.0})
        far (bim/wall {:id 11 :start [-1.0 -3.0 0.0] :end [1.0 -3.0 0.0]
                       :thickness 0.2 :height 2.0})
        ray (interaction/camera-ray {:eye [0.0 5.0 1.0] :target [0.0 0.0 1.0]
                                     :aspect 1.0}
                                    0.0 0.0)
        hit (interaction/pick-element [far near] ray)
        frame (interaction/frame-bounds (:pick/bounds hit))]
    (is (= [0.0 -1.0 0.0] (:ray/direction ray)))
    (is (= 10 (:element/id hit)))
    (is (pos? (:pick/distance hit)))
    (is (= [0.0 0.0 1.0] (:camera/target frame)))
    (is (pos? (:camera/distance frame)))
    (is (nil? (interaction/pick-element
               [near far]
               (interaction/camera-ray {:eye [5.0 5.0 1.0] :target [5.0 0.0 1.0]}
                                       0.0 0.0))))))

(deftest ray-box-handles-inside-and-parallel-rays
  (let [box {:min [-1.0 -1.0 -1.0] :max [1.0 1.0 1.0]}]
    (is (= 0.0 (interaction/ray-box-distance
                {:ray/origin [0.0 0.0 0.0] :ray/direction [1.0 0.0 0.0]} box)))
    (is (= 2.0 (interaction/ray-box-distance
                {:ray/origin [0.0 3.0 0.0] :ray/direction [0.0 -1.0 0.0]} box)))
    (is (nil? (interaction/ray-box-distance
               {:ray/origin [2.0 3.0 0.0] :ray/direction [0.0 -1.0 0.0]} box)))))
