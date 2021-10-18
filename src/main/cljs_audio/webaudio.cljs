(ns cljs-audio.webaudio
  (:require
    [cljs-audio.webaudio-interpreter :as wi]
    [cljs.core.async :refer [go promise-chan put! <! >! take!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [cognitect.transit :as t]
    [cljs-audio.workers.core :as main]
    [cljs-audio.updates :as up]))

(defn make-audio [{:keys [polyfill stream buffers] :or {polyfill {} buffers {}}}]
  "Creates an instance of cljs-audio.
  Accepts a polyfill such as standardized-audio-context.
  Falls back to js/AudioContext if there is none provided.
  Returns newly created state."
  (let [polyfill (js->clj polyfill)
        clazz (get polyfill "AudioContext" js/AudioContext)
        ctx (new clazz)]
    {:ctx      ctx
     :patch    [{} #{}]
     :env      {}
     :polyfill (get polyfill "AudioWorkletNode" js/AudioWorkletNode)
     :stream   stream
     :workers  (main/create-pool 1 "js/worker.js")
     :buffers  buffers}))

(defn add-module [{:keys [ctx]} path]
  "Fetches audio worklet module.
  Returns a Promise."
  (.addModule (.-audioWorklet ctx) path))

(defn fetch-sample [{:keys [ctx]} path]
  "Fetches sample and decode it to audio data.
  Returns a Promise."
  (-> (js/fetch path)
      (.then (fn [data] (-> (.arrayBuffer data)
                            (.then (fn [buff] (.decodeAudioData ctx buff))))))))

(defn current-time
  "Returns current audio context time."
  [{:keys [ctx]}] (.-currentTime ctx))

(defn calculate-updates [{:keys [patch workers]} new-patch]
  "Generates updated state of cljs-audio instance
  and executes web audio side effects.
  Returns updated state."
  (new js/Promise (fn [resolve reject]
                    (take! (main/do-with-pool! workers {:handler   :patches->commands,
                                                        :arguments {:old-patch patch
                                                                    :new-patch new-patch}})
                           (fn [result] (when (= (:state result) :error)
                                          (reject (:error result)))
                             (resolve (:data result)))))))

(defn calculate-updates-sync [{:keys [patch]} new-patch]
  "Generates updated state of cljs-audio instance
  and executes web audio side effects.
  Returns updated state."
  (up/patches->commands patch new-patch))

(defn resume [{:keys [ctx]}]
  (.resume ctx))

(defn eval-updates! [audio updates]
  (reduce (fn [audio update] (wi/update->side-fx update audio))
          audio
          updates))

(defn schedule! [audio path commands]
  (let [param (last path)
        node-path (butlast path)
        full-path (take (* 2 (count node-path)) (interleave (repeat :group) node-path))]
    (doseq [[command & args] commands]
      (wi/schedule [full-path param command args] audio))))