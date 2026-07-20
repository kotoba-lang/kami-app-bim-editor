(ns kami.bim-editor.family-editor-test
  (:require [clojure.test :refer [deftest is]]
            [bim.integration :as family]
            [kami.bim-editor.family-editor :as editor]))

(deftest creates-updates-and-instantiates-editable-family
  (let [definition (editor/box-family
                    {:id "Base Cabinet" :name "Base Cabinet" :category :furniture
                     :width 0.8 :depth 0.6 :height 0.9 :material "Oak" :shared? true})
        catalog (-> (family/family-catalog [])
                    (editor/upsert-family definition)
                    (editor/upsert-type "base-cabinet" "Wide" 1.2))
        instance (family/instantiate-family-type
                  catalog "base-cabinet" :wide 10
                  {:depth 0.7 :height 1.0 :finish "Walnut"}
                  {:detail-level :fine})]
    (is (= "base-cabinet" (:family/id definition)))
    (is (true? (:family/shared? definition)))
    (is (= 1.2 (get-in instance [:geometry :profile :x-dim])))
    (is (= 0.7 (get-in instance [:geometry :profile :y-dim])))
    (is (= "Walnut" (:material instance)))
    (is (= 0.84 (get-in instance [:quantities :gross-volume-m3])))))

(deftest rejects-empty-family-identity
  (is (thrown-with-msg? #?(:clj Exception :cljs js/Error) #"family id is required"
                        (editor/box-family {:id " " :width 1 :depth 1 :height 1
                                            :material "Default"}))))
