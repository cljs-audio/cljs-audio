(ns cljs-audio.test-utils)

(defn simple-voice [{:keys [frequency detune type gain]
                     :or   {frequency 220 detune 0 type "triangle" gain 1}}]
  [{:osc  [:oscillator {:frequency frequency
                        :detune    detune
                        :type      type} [1 2]]
    :vca2 [:gain {:gain gain}]}
   #{[:osc :vca2]
     [:vca2 :>]
     [:> :osc]}])

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
   {:1   :mix
    :2   :mix
    :3   :mix
    :mix :vca
    :vca :>}])

(defn delayed-waveforms [{:keys [frequency gain]}]
  [{:oscs (osc-bank {:frequency frequency :gain gain})
    :fx   (fx {:gain gain})}
   #{[:oscs :fx]
     [:fx :>]}])

(defn synth [{:keys [frequency] :or {frequency 220}}]
  [{:voice1 (simple-voice {:frequency frequency})
    :voice2 (simple-voice {:frequency frequency})
    :vca    [:gain {}]}
   #{[:voice1 :vca]
     [:voice2 :vca]
     [:vca :>]}])
