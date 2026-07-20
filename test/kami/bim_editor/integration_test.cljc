(ns kami.bim-editor.integration-test
  (:require [clojure.test :refer [deftest is]]
            [bim]
            [ifc.core :as ifc]
            [pdf.core :as pdf]
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
        drawings {3 {:view/annotations
                     [{:annotation/id 1 :kind :leader :points [[1 0] [1 1] [2 1]]
                       :text "Rated wall"}]}}
        dxf (integration/export-drawing project 3 :dxf drawings)
        pdf (integration/export-drawing project 3 :pdf drawings)
        pdf-text (apply str (map char (:content pdf)))]
    (is (= "application/dxf" (:media-type dxf)))
    (is (re-find #"0\nSECTION\n2\nENTITIES" (:content dxf)))
    (is (re-find #"Rated wall" (:content dxf)))
    (is (= "application/pdf" (:media-type pdf)))
    (is (= "%PDF" (subs pdf-text 0 4)))
    (is (re-find #"Rated wall" pdf-text))))

(deftest publishes-persistent-semantic-drawing-set
  (let [project (model)
        drawing-set {:drawing/views
                     [{:view/id "plan-3" :view/kind :floor-plan
                       :view/name "Ground Plan" :view/storey-id 3}]
                     :drawing/schedules []
                     :drawing/sheets
                     [{:sheet/id "cover" :sheet/number "G-001" :sheet/name "Cover"
                       :sheet/views []}
                      {:sheet/id "plan" :sheet/number "A-101" :sheet/name "Floor Plans"
                       :sheet/views ["plan-3"]
                       :sheet/title-block {:title-block/project "House"}}]}
        export (integration/export-drawing project 3 :pdf {} nil drawing-set)
        parsed (pdf/parse (:content export))
        pages (pdf/pages parsed)]
    (is (= 2 (count pages)))
    (is (= "G-001  Cover" (first (pdf/page-text (:objects parsed) (first pages)))))
    (is (= "A-101  Floor Plans" (first (pdf/page-text (:objects parsed) (second pages)))))))
