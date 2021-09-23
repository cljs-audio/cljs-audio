(ns cljs-audio.webaudio
  (:require
    [cljs-audio.webaudio-interpreter :refer [eval-updates]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [cljs-audio.updates :refer [patches->commands]]))

(defn make-audio [{:keys [polyfill stream] :or {polyfill {}}}]
  "Creates an instance of cljs-audio.
  Accepts a polyfill such as standardized-audio-context.
  Falls back to js/AudioContext if there is none provided.
  Returns newly created state."
  (let [polyfill (js->clj polyfill)
        clazz (get polyfill "AudioContext" js/AudioContext)
        ctx (new clazz)]
    {:ctx ctx :patch [{} #{}] :env {} :polyfill polyfill :stream stream}))

(defn update-audio [{:keys [ctx patch env polyfill stream]} new-patch]
  "Generates updated state of cljs-audio instance
  and executes web audio side effects.
  Returns updated state."
  (let [updates (patches->commands patch new-patch)
        updated-env (eval-updates ctx env polyfill updates)]
    {:ctx ctx :patch new-patch :env updated-env :polyfill polyfill :stream stream}))

(defn add-module [{:keys [ctx]} path]
  "Fetches audio worklet module.
  Returns a Promise."

  (go (<p! (.addModule (.-audioWorklet ctx) "js/noise-generator.js"))))

(defn fetch-sample [{:keys [ctx]} path]
  "Fetches sample and decode it to audio data.
  Returns a Promise."
  (go (->> (js/fetch path)
           (<p!)
           (.arrayBuffer)
           (<p!)
           (.decodeAudioData ctx)
           (<p!))))

(defn current-time
  "Returns current audio context time."
  [{:keys [ctx]}] (.-currentTime ctx))

(defn resume [{:keys [ctx]}] (go (<p! (.resume ctx))))