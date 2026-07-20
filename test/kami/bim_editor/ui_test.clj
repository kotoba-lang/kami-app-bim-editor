(ns kami.bim-editor.ui-test
  (:require [clojure.string :as string]
            [clojure.test :refer [deftest is]]
            [kami.bim-editor.ui :as ui]))

(deftest generated-ui-retains-complete-authoring-workspace
  (let [page (ui/page)]
    (doseq [id ["add-wall" "add-roof" "roof-width" "roof-depth" "roof-slope"
                "roof-thickness" "add-stair" "stair-width" "stair-run" "stair-rise"
                "stair-risers" "add-railing" "railing-path" "railing-height"
                "railing-spacing" "add-curtain" "curtain-width" "curtain-height"
                "curtain-columns" "curtain-rows"
                "add-family-instance" "family-id" "family-name" "family-category"
                "family-width" "family-material" "family-shared" "family-detail"
                "save-family-definition" "family-type-name" "save-family-type"
                "family-status" "analyze-structure" "route-pipe"
                "move-element" "copy-element" "move-x" "move-y" "move-z"
                "snap-enabled" "snap-grid" "snap-tolerance" "snap-status"
                "viewport-tool" "drag-measure" "snap-marker" "selection-box"
                "rotate-element" "mirror-element" "array-element" "transform-angle"
                "pivot-x" "pivot-y" "pivot-z" "mirror-x" "mirror-y" "mirror-z"
                "array-kind" "array-count"
                "align-axis" "align-reference-anchor" "align-moving-anchor"
                "align-elements" "wall-offset" "offset-walls" "trim-walls"
                "wall-join-style" "wall-join-priority" "join-walls"
                "wall-layers" "apply-wall-layers" "authoring-status"
                "slab-layers" "apply-slab-layers" "shaft-x" "shaft-y"
                "slab-elevations" "apply-slab-shape"
                "shaft-width" "shaft-depth" "add-shaft-opening"
                "host-offset" "host-sill" "rehost-element"
                "add-room" "auto-rooms" "quantity-schedule" "clash-results" "drawing-kind"
                "drawing-annotation-kind" "drawing-annotation-points"
                "drawing-annotation-text" "drawing-annotation-revision"
                "annotation-family" "auto-tag-elements"
                "save-drawing-annotation" "new-drawing-annotation"
                "drawing-annotations" "drawing-annotation-status"
                "view-range-top" "view-range-cut" "view-range-bottom" "view-range-depth"
                "apply-view-range" "print-paper" "print-orientation" "print-scale"
                "print-color" "apply-print-setting" "print-status"
                "drawing-format" "export-drawing" "import-ifc-file"]]
      (is (string/includes? page (str "id=\"" id "\""))))
    (is (string/includes? page "value=\"pdf\""))
    (is (string/includes? page "value=\"dxf\""))))
