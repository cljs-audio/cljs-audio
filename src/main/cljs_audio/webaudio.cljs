(ns cljs-audio.webaudio
  (:require
    [cljs-audio.webaudio-interpreter :refer [eval-updates]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [cljs-audio.updates :refer [patches->commands]]))

(defn make-audio [{:keys [polyfill stream] :or {polyfill {}}}]
  (let [polyfill (js->clj polyfill)
        clazz (get polyfill "AudioContext" js/AudioContext)
        ctx (new clazz)]
    {:ctx ctx :patch [{} #{}] :env {} :polyfill polyfill :stream stream}))

(defn update-audio [{:keys [ctx patch env polyfill stream]} new-patch]
  (println :polyfill polyfill)
  (let [updates (patches->commands patch new-patch)
        updated-env (eval-updates ctx env polyfill updates)]
    {:ctx ctx :patch new-patch :env updated-env :polyfill polyfill :stream stream}))

(defn add-module [{:keys [ctx]} path]
  (go (<p! (.addModule (.-audioWorklet ctx) "js/noise-generator.js"))))

(defn fetch-sample [{:keys [ctx]} path]
  (go (->> (js/fetch path)
           (<p!)
           (.arrayBuffer)
           (<p!)
           (.decodeAudioData ctx)
           (<p!))))

(defn current-time [{:keys [ctx]}] (.-currentTime ctx))

(defn resume [{:keys [ctx]}] (go (<p! (.resume ctx))))