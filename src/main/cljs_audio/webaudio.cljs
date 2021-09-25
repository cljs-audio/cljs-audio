(ns cljs-audio.webaudio
  (:require
    [cljs-audio.webaudio-interpreter :refer [eval-updates update->side-fx]]
    [cljs.core.async :refer [go promise-chan put! <! >!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [cognitect.transit :as t]
    [cljs-audio.workers.core :as main]
    [cljs-audio.updates :refer [patches->commands ->patch-ast]]))

(defn make-audio [{:keys [polyfill stream buffers] :or {polyfill {} buffers {}}}]
  "Creates an instance of cljs-audio.
  Accepts a polyfill such as standardized-audio-context.
  Falls back to js/AudioContext if there is none provided.
  Returns newly created state."
  (let [polyfill (js->clj polyfill)
        clazz (get polyfill "AudioContext" js/AudioContext)
        ctx (new clazz)]
    {:ctx     ctx :patch [{} #{}] :env {} :polyfill polyfill
     :stream  stream :workers (main/create-pool 1 "js/worker.js")
     :buffers buffers}))

(defn calculate-updates [{:keys [ctx patch env polyfill stream workers buffers]} new-patch]
  "Generates updated state of cljs-audio instance
  and executes web audio side effects.
  Returns updated state."
  (go
    (main/do-with-pool! workers {:handler   :patches->commands,
                                 :arguments {:old-patch patch
                                             :new-patch new-patch}})))

(defn apply-updates [{:keys [ctx env polyfill buffers workers]} updates]
  {:env     (eval-updates ctx env polyfill buffers updates)
   :ctx     ctx :polyfill polyfill
   :buffers buffers :workers workers})

(defn shift-schedule-time [args delta]
  (if (> (count args) 1)
    (update-in args [1] #(max 0 (+ % delta)))
    args))

(defn shift-update-time
  [delta update]
  (let [[name node-path param command args] update]
    (if (= :schedule name)
      (let [args (shift-schedule-time args delta)]
        [name node-path param command args])
      update)))

(defn shift-time-by [updates update-time-delta]
  (mapv (partial shift-update-time update-time-delta) updates))

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