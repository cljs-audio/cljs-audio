(ns cljs-audio.core
  (:require
    [cljs-audio.webaudio-interpreter :refer [eval-updates]]
    [cljs-audio.updates :refer [patches->commands]]))

(defn make-audio [ctx stream]
  {:ctx ctx :patch [{} {}] :env {} :stream stream})

(defn update-audio [{:keys [ctx patch env]} new-patch]
  (let [updates (patches->commands patch new-patch)
        updated-env (eval-updates ctx env updates)]
    {:ctx ctx :patch new-patch :env updated-env}))