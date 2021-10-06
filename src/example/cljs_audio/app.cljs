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

(defn kick []
  [{:osc [:oscillator {:frequency 0 :start 0}]
    :vca [:gain {:gain 0}]}
   #{[:osc :vca]
     [:vca :>]}])

(defn hat []
  [{:noise [:audio-worklet {} ["noise-generator"]]
    ;:lp    [:biquad-filter {:frequency 15000}]
    :vca   [:gain {:gain 1}]}
   #{[:noise :vca]
     ;[:lp :vca]
     [:vca :>]}])

(defn simple-voice [{:keys [type]
                     :or   {type "triangle"}}]
  [{:osc1 [:oscillator {:frequency 0
                        :detune    0
                        :type      type
                        :start     0}]
    :vca  [:gain {:gain 1}]}
   #{[:osc1 :vca]
     [:vca :>]}
   #_#{[:osc-frequency! [:osc1 :frequency]]
       [:lfo-frequency! [:osc2 :frequency]]
       [:gain! [:vca :gain] [[:at-time]]]}
   ])

(defn build-patch []
  [{:kick (kick)
    :hat  (hat)
    ;:hat2 (m/one-shot-sample {:buffer ch :start-time (+ time (/ 60 (* 2 bpm)))})
    }
   #{[:kick :>
      :hat :>]}
   #_#{[:note-pitch:> [:synth :osc-frequency!]]
       [:wow-factor:> [:synth :lfo-frequency!]]
       [:note-velocity:> [:synth :gain!]]}])

;(wa/schedule! audio [[:synth :osc-frequency!] [1 0]])

(def beat (/ 60 150))

(defn play [audio lag]
  (let [t (wa/current-time audio)
        env (:env audio)]
    (println :env env)
    (wa/schedule! env [:kick :osc :frequency]
                  (adsr 0.1 0.1 0.8 0.1 0.01 220 t))
    (wa/schedule! env [:kick :vca :gain]
                  (adsr 0.1 0.1 0.8 0.1 0.01 1 t))
    (let [hats (vec (concat (adsr 0.01 0.1 0.8 0.1 0.01 1 t)
                            (adsr 0.01 0.1 0.8 0.1 0.01 1 (+ t (t/seconds 140 "1/8")))
                            (adsr 0.01 0.1 0.8 0.1 0.01 1 (+ t (* 2 (t/seconds 140 "1/8"))))
                            (adsr 0.01 0.1 0.8 0.1 0.01 1 (+ t (* 3 (t/seconds 140 "1/8"))))))]
      (wa/schedule! env [:hat :vca :gain]
                    hats))
    (wa/set-timeout {:interval   (- beat lag)
                     :start-time (wa/current-time audio)
                     :audio      audio}
                    #(play audio %))))

(defn resume-audio-context []
  (let [audio (wa/make-audio {:polyfill sac})]
    (p/let [_ (wa/resume audio)
            _ (wa/add-module audio "js/noise-generator.js")
            oh (wa/fetch-sample audio "resources/hi-hat.wav")
            ch (wa/fetch-sample audio "resources/closed-hat.wav")]
           (doseq [ev events] (.removeEventListener js/document.body ev resume-audio-context))
           (let [audio (into audio {:buffers {:oh oh
                                              :ch ch}})
                 new-patch (build-patch)]
             (p/then (wa/calculate-updates audio new-patch)
                     (fn [updates]
                       (let [audio
                             (into audio
                                   {:patch new-patch
                                    :env   (wa/apply-updates
                                             audio
                                             updates)})]
                         (play audio 0))))
             ))))

(defn main []
  (doseq [ev events] (js/document.body.addEventListener ev resume-audio-context false)))
