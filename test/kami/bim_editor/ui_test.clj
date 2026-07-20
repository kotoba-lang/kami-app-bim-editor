(ns kami.bim-editor.ui-test
  (:require [clojure.string :as string]
            [clojure.test :refer [deftest is]]
            [kami.bim-editor.ui :as ui]))

(deftest generated-ui-retains-complete-authoring-workspace
  (let [page (ui/page)]
    (doseq [id ["add-wall" "add-family-instance" "analyze-structure" "route-pipe"
                "move-element" "copy-element" "move-x" "move-y" "move-z"
                "snap-enabled" "snap-grid" "snap-tolerance" "snap-status"
                "viewport-tool" "drag-measure" "snap-marker"
                "rotate-element" "mirror-element" "array-element" "transform-angle"
                "pivot-x" "pivot-y" "pivot-z" "mirror-x" "mirror-y" "mirror-z"
                "array-kind" "array-count"
                "add-room" "quantity-schedule" "clash-results" "drawing-kind"
                "drawing-format" "export-drawing" "import-ifc-file"]]
      (is (string/includes? page (str "id=\"" id "\""))))
    (is (string/includes? page "value=\"pdf\""))
    (is (string/includes? page "value=\"dxf\""))))
