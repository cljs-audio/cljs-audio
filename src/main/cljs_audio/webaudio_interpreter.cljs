(ns cljs-audio.webaudio-interpreter
  (:require
    [cljs.core.match :refer [match]]
    [camel-snake-kebab.core :refer [->PascalCaseKeyword ->camelCaseKeyword ->camelCase]]
    [oops.core :refer [oapply oget oset!]]
    [medley.core :refer [dissoc-in]]))

(defn set-parameter [[node-path parameter-name parameter-value] {:keys [env buffers] :as audio}]
  (let [node (get-in env node-path)
        param (case parameter-name
                :type (oget node "type")
                :detune (oget node "detune")
                :ratio (oget node "ratio")
                :attack (oget node "attack")
                :release (oget node "release")
                :threshold (oget node "threshold")
                :knee (oget node "knee")
                :frequency (oget node "frequency")
                :gain (oget node "gain")
                :buffer (oget node "buffer")
                :playback-rate (oget node "playbackRate"))]
    (if (exists? (.-value param))
      ;; handle AudioParam case
      (set! (.-value param) parameter-value)
      ;; handle primitive param case
      (case parameter-name
        :type (oset! node "type" parameter-value)
        :detune (oset! node "detune" parameter-value)
        :ratio (oset! node "ratio" parameter-value)
        :attack (oset! node "attack" parameter-value)
        :release (oset! node "release" parameter-value)
        :threshold (oset! node "threshold" parameter-value)
        :knee (oset! node "knee" parameter-value)
        :frequency (oset! node "frequency" parameter-value)
        :gain (oset! node "gain" parameter-value)
        :buffer (oset! node "buffer" (get buffers parameter-value))
        :playback-rate (oset! node "playbackRate" parameter-value))))
  audio)

(defn create-node [[node-path type create-args] {:keys [ctx env polyfill] :as audio}]
  (let [node
        (case type
          :audio-worklet (new polyfill ctx (first create-args))
          :analyser (oapply ctx "createAnalyser" create-args)
          :audio-buffer-source (do
                                 (oapply ctx "createBufferSource" create-args))
          :audio-destination (oapply ctx "createAudioDestination" create-args)
          :biquad-filter (oapply ctx "createBiquadFilter" create-args)
          :channel-merger (oapply ctx "createChannelMerger" create-args)
          :channel-splitters (oapply ctx "createChannelSplitter" create-args)
          :constant-source (oapply ctx "createConstantSource" create-args)
          :convolver (oapply ctx "createConvolver" create-args)
          :delay (oapply ctx "createDelay" create-args)
          :dynamics-compressor (oapply ctx "createDynamicsCompressor" create-args)
          :gain (oapply ctx "createGain" create-args)
          :iir-filter (oapply ctx "createIIRFilter" create-args)
          :media-element-audio-source (oapply ctx "createMediaElementSource" create-args)
          :media-stream-audio-destination (oapply ctx "createMediaStreamDestination" create-args)
          :media-stream-audio-source (oapply ctx "createMediaStreamSource" create-args)
          :oscillator (oapply ctx "createOscillator" create-args)
          :panner (oapply ctx "createPanner" create-args)
          :wave-shaper (oapply ctx "createWaveShaper" create-args)
          :stereo-panner (oapply ctx "createStereoPanner" create-args)
          :buffer-source (oapply ctx "createBufferSource" create-args))]
    (let [env (assoc-in env
                        node-path
                        node)
          new-audio (into audio {:env env})]
      (println "Create node!")
      (if (type #{:oscillator :biquad-filter})
        (set-parameter [node-path :frequency 0.00001]
                       new-audio)
        new-audio))))

(defn connect [[from-path to-path] {:keys [ctx env] :as audio}]
  (let [from (get-in env from-path)
        to (if (= to-path [:ctx]) (.-destination ctx)
                                  (get-in env to-path))]
    (.connect from to)
    audio))

(defn connect-parameter [[from-path to-path parameter-name] {:keys [env] :as audio}]
  (let [from (get-in env from-path)
        node (get-in env to-path)
        param (case parameter-name
                :type (oget node "type")
                :detune (oget node "detune")
                :ratio (oget node "ratio")
                :attack (oget node "attack")
                :release (oget node "release")
                :threshold (oget node "threshold")
                :knee (oget node "knee")
                :frequency (oget node "frequency")
                :gain (oget node "gain")
                :buffer (oget node "buffer")
                :playback-rate (oget node "playbackRate"))
        ]
    (.connect from param)
    audio))

(defn start [[node-path time] {:keys [env] :as audio}]
  (let [node (get-in env node-path)]
    (when (exists? (.-start node)) (.start node time)))
  audio)

(defn stop [[node-path time] {:keys [env] :as audio}]
  (let [node (get-in env node-path)]
    (when (and node (exists? (.-stop node)))
      (try (.stop node time)
           (catch js/Error err (js/console.log (ex-cause err))))))
  audio)

(defn schedule [[node-path param-name command args] {:keys [env] :as audio}]
  (let [node (get-in env node-path)
        param (case param-name
                :gain (oget node "gain")
                :delay-time (oget node "delayTime")
                :detune (oget node "detune")
                :frequency (oget node "frequency")
                :playback-rate (oget node "playbackRate")
                :type (oget node "type")
                :ratio (oget node "ratio")
                :attack (oget node "attack")
                :release (oget node "release")
                :threshold (oget node "threshold")
                :knee (oget node "knee")
                :buffer (oget node "buffer"))]
    (when (not (nil? param))
      (case command
        :cancel-scheduled-values (oapply param "cancelScheduledValues" args)
        :cancel-and-hold-at-time (oapply param "cancelAndHoldAtTime" args)
        :exponential-ramp-to-value-at-time (oapply param "exponentialRampToValueAtTime" args)
        :linear-ramp-to-value-at-time (oapply param "linearRampToValueAtTime" args)
        :set-target-at-time (oapply param "setTargetAtTime" args)
        :set-value-at-time (oapply param "setValueAtTime" args)
        :set-value-curve-at-time (oapply param "setValueCurveAtTime" args))
      ))
  audio)

(defn disconnect [[from-path to-path] {:keys [ctx env] :as audio}]
  (let [from-node (get-in env from-path)]
    (if (nil? to-path)
      (.disconnect from-node)
      (let [to-node (if (= to-path [:ctx]) (.-destination ctx)
                                           (get-in env to-path))]
        (.disconnect from-node to-node))))
  audio)

(defn remove-node [[node-path] {:keys [env] :as audio}]
  (let [node (get-in env node-path)]
    (if node
      (do (when (exists? (.-stop node))
            (try (.stop node)
                 (catch js/Error err (js/console.log (ex-cause err)))))
          (into audio {:env (dissoc-in env node-path)}))
      audio)))

(defn update->side-fx [[name & args] audio]
  (case name
    :add-node (create-node args audio)
    :set (set-parameter args audio)
    :connect (connect args audio)
    :connect-parameter (connect-parameter args audio)
    :disconnect (if (nil? (second args)) (disconnect [(first args) nil] audio)
                                         (disconnect args audio))
    :remove-node (remove-node args audio)
    :start (start args audio)
    :stop (stop args audio)
    :schedule (schedule args audio)
    ))