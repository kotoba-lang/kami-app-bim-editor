(ns kami.bim-editor.integration-test
  (:require [clojure.test :refer [deftest is]]
            [bim]
            [ifc.core :as ifc]
            [kami.bim-editor.integration :as integration]))

(defn model []
  (let [level (bim/storey {:id 3 :name "Ground" :elevation 0 :height 3
                           :placement :identity :spaces [] :elements []})]
    (-> (bim/project "House")
        (assoc :id "house-1")
        (update :sites conj
                (bim/site {:id 1 :name "Site" :placement :identity
                           :buildings [(bim/building {:id 2 :name "House" :placement :identity
                                                      :reference-elevation 0 :storeys [level]})]}))
        (bim/add-element 3 (bim/wall {:id 10 :start [0 0 0] :end [5 0 0]})))))

(deftest publishes-one-coordinated-revision
  (let [bundle (integration/coordinated-revision
                {:project (model) :project-id "house-1" :project-name "House"
                 :revision 4 :events []})]
    (is (= :coordinated-bim-revision (:kami/document bundle)))
    (is (= 1 (get-in bundle [:project/federation :federation/schema-version])))
    (is (= :floor-plan (get-in bundle [:project/drawings :drawing/views 0 :view/kind])))
    (is (= "IFC4X3_ADD2" (get-in bundle [:project/ifc :ifc/schema])))
    (is (= :design/revision-published
           (get-in bundle [:project/cloud-itonami :itonami/event])))
    (is (= 4 (get-in bundle [:project/cloud-itonami :design/revision])))))

(deftest imports-shared-ifc-spf
  (let [source (model)
        text (ifc/write-spf (integration/coordinated-ifc source))]
    (is (= source (integration/import-ifc-spf text)))))

(deftest exports-pdf-and-dxf-through-shared-libraries
  (let [project (model)
        dxf (integration/export-drawing project 3 :dxf)
        pdf (integration/export-drawing project 3 :pdf)]
    (is (= "application/dxf" (:media-type dxf)))
    (is (re-find #"0\nSECTION\n2\nENTITIES" (:content dxf)))
    (is (= "application/pdf" (:media-type pdf)))
    (is (= "%PDF" (apply str (map char (take 4 (:content pdf))))))))
