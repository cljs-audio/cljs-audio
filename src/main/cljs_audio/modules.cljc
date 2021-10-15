(ns cljs-audio.modules
  (:require [cljs-audio.envelopes :refer [adsr! adsr at-time cancel-at-time!]]))

(defn poly [synth params-v]
  (let [synths
        (into {} (map-indexed (fn [index params]
                                [(keyword (str index)) (synth params)]
                                ) params-v))
        connections (into #{} (mapv (fn [key] [key :>]) (keys synths)))]
    [synths
     connections]))

(defn at-start [v] [[:set-value-at-time v 0]])

(defn delay-fx [{:keys [time gain] :or {time 0.5 gain 1}}]
  [{:delay [:delay {:delay-time time} [10]]
    :vca   [:gain {:gain gain}]}
   #{[:> :delay]
     [:delay :vca]
     [:vca :>]}])

(defn one-shot-sample [{:keys [buffer time]}]
  (println "one-shot-sample" time)
  [{:player [:buffer-source {:buffer buffer :playback-rate 1 :start time}]
    :vca    [:gain {:gain 0.5}]
    }
   #{
     [:player :vca]
     [:vca :>]
     }])

(defn multi-tap-delay [{:keys [dry times gains] :or {dry   1
                                                     times (reduce into (mapv at-start [1]))
                                                     gains (reduce into (mapv at-start [1]))}}]
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

(defn simple-voice [{:keys [frequency detune type gain start]
                     :or   {frequency 220 detune 0 type "triangle" gain 1 start 0}}]
  [{:osc [:oscillator {:frequency frequency
                       :detune    detune
                       :type      type
                       :start     start}]
    :vca [:gain {:gain gain}]}
   #{[:osc :vca]
     [:vca :>]}])

(defn kick [{:keys [velocity time]
             :or   {velocity 1 time 0}}]
  [{:osc [:oscillator {:frequency 110
                       :type      "sine"}]
    :vca [:gain {:gain (adsr 0.01 0.1 0.8 0.1 0.05 velocity time)}]}
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


