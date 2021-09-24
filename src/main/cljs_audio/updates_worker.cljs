(ns cljs-audio.updates-worker
  (:require [cljs-audio.workers.worker :as worker]
            [cljs-audio.updates :refer [patches->commands]]))

(defn worker
  []
  (worker/register
    :mirror
    (fn [arguments]
      arguments))
  (worker/register
    :patches->commands
    (fn [{:keys [old-patch new-patch]}]
      (patches->commands old-patch new-patch)))
  (worker/bootstrap))