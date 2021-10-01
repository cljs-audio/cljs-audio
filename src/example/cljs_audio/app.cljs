(ns cljs-audio.app
  (:require
    [cljs-audio.webaudio :as wa]
    [cljs-audio.envelopes :refer [adsr adsr! at-time cancel-at-time!]]
    [cljs-audio.scheduling :as s]
    [cljs-audio.time :as t]
    [cljs-audio.modules :as m]
    [cljs.core.async :as async :refer [close! go-loop chan go <! >! take! put!]]
    [clojure.test.check.random :as rnd]
    [cljs.core.async.interop :refer-macros [<p!]]
    [promesa.core :as p]
    ["standardized-audio-context" :as sac]
    ["worker-timers" :as worker-timers]))

(def rnd (atom (rnd/make-random 1)))
(defn next-random! [] (let [res (rnd/rand-double @rnd)]
                        (swap! rnd #(first (rnd/split %)))
                        res))

(defn choose [prng v] (nth v (Math/floor (* (count v) (prng)))))

(def events ["touchstart" "touchend" "mousedown" "keydown"])
;:sampled-kick  (one-shot-sample {:buffer kick :start-time time})
;:sampled-kick2 (one-shot-sample {:rate 0.7 :buffer kick :start-time (if double-kick (+ time (/ 60 (* 4 bpm))) 0)})
;:sampled-ch    (one-shot-sample {:buffer ch :start-time (+ time (/ 60 (* 2 bpm)))})

(defn kick [{:keys [time adsr-osc adsr-vca]}]
  [{:osc [:oscillator {:frequency (adsr-osc time) :start time}]
    :vca [:gain {:gain (adsr-vca time)}]}
   #{[:osc :vca]
     [:vca :>]}])

;(defn hat [{:keys [time adsr-lp adsr-vca]}]
;  [{:noise [:audio-worklet {} ["noise-generator"]]
;    :lp    [:biquad-filter {:frequency (adsr-lp time)}]
;    :vca   [:gain {:gain (adsr-vca time)}]}
;   #{[:noise :lp]
;     [:lp :vca]
;     [:vca :>]}])

(defn simple-voice [{:keys [type]
                     :or   {type "triangle"}}]
  [{:osc1 [:oscillator {:frequency 0
                        :detune    0
                        :type      type
                        :start     0}]
    :osc2 [:oscillator {:frequency 0
                        :detune    0
                        :type      type
                        :start     0}]
    :vca  [:gain {:gain 1}]}
   #{[:osc :vca]
     [:vca :>]}
   #{[:osc-frequency! [:osc1 :frequency] [[:at-time]]]
     [:lfo-frequency! [:osc2 :frequency] [[:at-time]]]
     [:gain! [:vca :gain] [[:at-time]]]}])

(defn build-patch []
  [{:synth (simple-voice {:type "sine"})}
   #{[:synth :>]}
   #{[:note-pitch:> [:synth :osc-frequency!]]
     [:wow-factor:> [:synth :lfo-frequency!]]
     [:note-velocity:> [:synth :gain!]]}])

;; value port
;; parameter port

(defn schedule! [{:keys [env ports ctx]} [port-path event-data]]
  (let [port-targets (get-port-targets port-path)]
    (if (port? port-target)
      (get-in-sibling))))

(wa/schedule! audio [[:note-pitch!] [220 0]])
(wa/schedule! audio [[:note-velocity!] [1 0]])
(wa/schedule! audio [[:synth :osc-frequency:>] [1 0]])

(defn loop-update-audio [{:keys [audio lag] :or {lag 0}}]
  (wa/schedule-part (* 1 4 (/ 60 140))
                    audio
                    (build-patch 140 (wa/current-time audio))
                    lag
                    loop-update-audio))

(defn resume-audio-context []
  (let [audio (wa/make-audio {:polyfill sac})]
    (p/let [_ (wa/resume audio)
            _ (wa/add-module audio "js/noise-generator.js")
            oh (wa/fetch-sample audio "resources/hi-hat.wav")
            ch (wa/fetch-sample audio "resources/closed-hat.wav")
            ]
           (doseq [ev events] (.removeEventListener js/document.body ev resume-audio-context))
           (loop-update-audio {:audio (into audio {:buffers {:oh oh :ch ch}})}))))

(defn main []
  (doseq [ev events] (js/document.body.addEventListener ev resume-audio-context false)))
