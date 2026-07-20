(ns kami.bim-editor.project-test (:require [clojure.test :refer [deftest is]] [bim] [kami.bim-editor.project :as project]))
(def model (let [st (bim/storey {:id 3 :name "Ground" :elevation 0 :height 3 :placement :identity :spaces [] :elements []})]
             (update (bim/project "House") :sites conj (bim/site {:id 1 :name "Site" :placement :identity :buildings [(bim/building {:id 2 :name "House" :placement :identity :reference-elevation 0 :storeys [st]})]}))))
(deftest round-trip
  (let [p (project/document {:id "house" :name "House" :building-model model :editor {:active-storey 3 :selected nil}
                             :camera {:azimuth 1 :elevation 0.5} :interaction {:profile :revit}})]
    (is (project/valid? p)) (is (= p (project/open p))) (is (= 4 (:kami/version p)))
    (is (= {} (:project/drawings p)))))
(deftest version-two-migration
  (let [old (assoc (project/document {:id "old" :building-model model :editor {}
                                      :camera {} :interaction {}})
                   :kami/version 2)]
    (let [migrated (project/open (dissoc old :project/family-catalog :project/drawings))]
      (is (= {} (:project/family-catalog migrated)))
      (is (= {} (:project/drawings migrated))))))
(deftest legacy-migration (let [p (project/open model)] (is (= model (:project/building-model p))) (is (= 3 (get-in p [:project/editor :active-storey])))))
(deftest rejects-invalid
  (is (thrown? #?(:clj Exception :cljs js/Error) (project/open {:sites []})))
  (is (thrown? #?(:clj Exception :cljs js/Error) (project/open {:kami/document :bim-editor-project :kami/version 99}))))
