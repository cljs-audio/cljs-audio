(ns cljs-audio.modules
  (:require [cljs-audio.envelopes :refer [adsr!]]))

(defn at-start [v] [:set-value-at-time v 0])

(defn wow-fx [{:keys [frequency] :or {frequency 10}}] [{:vca [:gain {:gain 1}]
                                                        :mod [:oscillator {:frequency frequency}]}
                                                       {:vca :>
                                                        :mod #{{:vca :gain}}}])

(defn delay-fx [{:keys [time gain] :or {time 0.5 gain 1}}]
  [{:fx  [:delay {:delay-time time} [5]]}
   #{[:> :fx]
     [:fx :>]}])

(defn multi-tap-delay [{:keys [times gains] :or {times (mapv at-start [0.2 0.4 0.8 1])
                                                 gains (mapv at-start [0.6 0.4 0.2 0.1])}}]
  (let [delays (map-indexed
                 (fn [i [time gain]] [(keyword (str i)) (delay-fx {:time time :gain gain})])
                 (mapv vector times (apply concat (repeat gains))))
        delay-keys (keys (into {} delays))
        out [:gain {}]
        in [:gain {}]]
    [(into {:out out :in in} delays)
     (into (into #{[:out :>] [:> :in] [:in :out]} (mapv (fn [key] [:in key]) delay-keys))
      (mapv (fn [key] [key :out]) delay-keys))]))

(defn simple-voice [{:keys [frequency detune type gain]
                     :or   {frequency 220 detune 0 type "triangle" gain 1}}]
  [{:osc  [:oscillator {:frequency frequency
                        :detune    detune
                        :type      type} [1 2]]
    :vca [:gain {:gain gain}]}
   #{[:osc :vca]
     [:vca :>]}])

(defn wow-voice [{:keys [frequency detune type gain]
                  :or   {frequency 220 detune 0 type "triangle" gain 1}}]
  [{:osc  [:oscillator {:frequency frequency
                        :detune    detune
                        :type      type} [1 2]]
    :lfo  [:oscillator {:frequency 1
                        :type      "sine"}]
    :vca2 [:gain {:gain gain}]}
   #{[:osc :vca]
     [:lfo :vca :gain]
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

(defn osc-bank [{:keys [frequency gain] :or {frequency 220 gain 1}}]
  [{:1   [:oscillator {:frequency frequency :type "sine"}]
    :2   [:oscillator {:frequency frequency :type "triangle"}]
    :3   [:oscillator {:frequency frequency :type "square"}]
    :mix [:gain {}]
    :vca (vca {:gain gain})}
   #{[:1   :mix]
    [:2   :mix]
    [:3   :mix]
    [:mix :vca]
    [:vca :>]}])

(defn delayed-waveforms [{:keys [frequency gain]}]
  [{:oscs (osc-bank {:frequency frequency :gain gain})
    :fx   (fx {:gain gain})}
   #{[:oscs :fx]
     [:fx :>]}])

(delayed-waveforms {:frequency 220})

(defn synth [{:keys [frequency] :or {frequency 220}}]
  [{:voice1 (simple-voice {:frequency frequency})
    :voice2 (simple-voice {:frequency frequency})
    :vca    [:gain {}]}
   #{[:voice1 :vca]
     [:voice2 :vca]
     [:vca :>]}])


