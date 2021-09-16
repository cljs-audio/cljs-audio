(ns cljs-audio.modules
  (:require [cljs-audio.envelopes :refer [adsr!]]))

(defn at-start [v] [:set-value-at-time v 0])

(defn delay-fx [{:keys [time gain] :or {time 0.5 gain 1}}]
  [{:delay [:delay {:delay-time time} [5]]
    :vca   [:gain {:gain gain}]}
   #{[:> :delay]
     [:delay :vca]
     [:vca :>]}])

(defn multi-tap-delay [{:keys [dry times gains] :or {dry   1
                                                     times (mapv at-start [1])
                                                     gains (mapv at-start [1])}}]
  (let [delays (map-indexed
                 (fn [i [time gain]] [(keyword (str i))
                                      (delay-fx {:time time :gain gain})])
                 (mapv vector times (apply concat
                                           (repeat gains))))
        delay-keys (keys (into {} delays))]
    [(into {:dry [:gain []]} delays)
     (into (into #{[:> :dry]
                   [:dry :>]} (mapv (fn [key] [:> key]) delay-keys))
           (mapv (fn [key] [key :>]) delay-keys))]))

(defn simple-voice [{:keys [frequency detune type gain]
                     :or   {frequency 220 detune 0 type "triangle" gain 1}}]
  [{:osc [:oscillator {:frequency frequency
                       :detune    detune
                       :type      type} [1 2]]
    :vca [:gain {:gain gain}]}
   #{[:osc :vca]
     [:vca :>]}])

(defn simple-voice-minus-gain [{:keys [frequency detune type gain]
                                :or   {frequency 220 detune 0 type "triangle" gain 1}}]
  [{:osc [:oscillator {:frequency frequency
                       :detune    detune
                       :type      type} [1 2]]}
   #{[:osc :>]}])

(defn simple-voice-replace-gain [{:keys [frequency detune type gain]
                                  :or   {frequency 220 detune 0 type "triangle" gain 1}}]
  [{:osc  [:oscillator {:frequency frequency
                        :detune    detune
                        :type      type} [1 2]]
    :osc2 [:oscillator {:frequency frequency
                        :detune    detune
                        :type      type} [1]]}
   #{[:osc :>]
     [:osc2 :osc]}])


(defn fx [{:keys [time] :or {time 0.5}}]
  [{:io [:delay {:time time} [5]]} {:io :>
                                    :>  :io}])


(defn vca [{:keys [gain] :or {gain 1}}]
  [{:io [:gain {:gain gain}]}
   #{[:io :>]
     [:> :io]}])

(defn delayed-waveforms [{:keys [frequency gain]}]
  [{:oscs (osc-bank {:frequency frequency :gain gain})
    :fx   (fx {:gain gain})}
   #{[:oscs :fx]
     [:fx :>]}])

(defn osc-bank [{:keys [frequency gain] :or {frequency 220 gain 1}}]
  [{:1   [:oscillator {:frequency frequency :type "sine"}]
    :2   [:oscillator {:frequency frequency :type "triangle"}]
    :3   [:oscillator {:frequency frequency :type "square"}]
    :mix [:gain {}]
    :vca (vca {:gain gain})}
   #{[:1 :mix]
     [:2 :mix]
     [:3 :mix]
     [:mix :vca]
     [:vca :>]}])

(defn synth [{:keys [frequency] :or {frequency 220}}]
  [{:voice1 (simple-voice {:frequency frequency})
    :voice2 (simple-voice {:frequency frequency})
    :vca    [:gain {}]}
   #{[:voice1 :vca]
     [:voice2 :vca]
     [:vca :>]}])


