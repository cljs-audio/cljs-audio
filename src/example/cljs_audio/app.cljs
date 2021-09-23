(ns cljs-audio.app
  (:require
    [cljs-audio.webaudio :as wa]
    [cljs-audio.envelopes :refer [adsr! adsr at-time! at-time]]
    [cljs-audio.scheduling :as s]
    [cljs-audio.time :as t]
    [cljs-audio.modules :as m]
    [cljs.core.async :refer [go <! take!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    ["standardized-audio-context" :as sac]))

(defn graph [{:keys [ir kick time bpm freq]}]
  (let [{:keys [frequency gain]} (s/schedule-parameters {:frequency at-time :gain (partial adsr 0.2 0.15 0.6 0.5 0.2)}
                                                        [{:frequency freq :gain 0.3 ::s/time (+ time 0)}
                                                         {:frequency (* 2 freq) :gain 0.3 ::s/time (+ time (t/seconds 120 "1/4"))}
                                                         {:frequency (* 4 freq) :gain 0.3 ::s/time (+ time (t/seconds 120 "1/4")
                                                                                                      (t/seconds 120 "1/4"))}])]
    [{:voice        (m/simple-voice {:frequency frequency
                                     :gain      gain
                                     :type      "sawtooth"})
      :sampled-kick (m/poly m/one-shot-sample
                            [{:buffer kick :start-time time :gain gain :rate 0.7}
                             {:buffer kick :start-time (+ time (t/seconds bpm "1/4")) :gain gain :rate 0.7}
                             {:buffer kick :start-time (+ time (t/seconds bpm "2/4")) :gain gain :rate 0.7}
                             {:buffer kick :start-time (+ time (t/seconds bpm "3/4")) :gain gain :rate 0.7}])
      ;:voice2 (m/simple-voice {:frequency frequency
      ;                         :detune    -4
      ;                         :gain      gain
      ;                         :type      "sine"})
      ;:reverb [:convolver {:buffer ir}]
      :fx           (m/multi-tap-delay {:times (mapv m/at-start [(t/seconds bpm "1/2")
                                                                 (t/seconds bpm "1")
                                                                 (t/seconds bpm "2")]) :gains (mapv m/at-start [0.5 0.25 0.125 0.05])})
      ;:vca    [:gain {:gain 0.3}]
      ;:comp   [:dynamics-compressor {:threshold -50 :knee 0 :ratio 20 :attack 0.005 :release 0.050}]
      }
     #{
       ;[:voice2 :vca]
       ;[:vca :comp]
       ;[:reverb :>]
       ;[:voice :fx]
       [:voice :fx]
       [:fx :>]
       [:sampled-kick :>]
       ;[:comp :reverb]
       ;[:comp :>]
       ;[:sampled-kick :comp]
       ;[:fx :comp]
       }]))

(defonce audio (atom nil))

(def events ["touchstart" "touchend" "mousedown" "keydown"])

(defn resume-audio-context []
  (let [audio (atom (wa/make-audio {:polyfill sac}))]
    (take! (wa/resume @audio)
             (fn []
               (go
                 (let [ir-audio-data (<! (wa/fetch-sample @audio "resources/ir.wav"))
                       kick-audio-data (<! (wa/fetch-sample @audio "resources/kick.wav"))
                       bpm 120]
                   (try
                     (doseq [ev events] (.removeEventListener js/document.body ev resume-audio-context))
                     (js/document.body.addEventListener "mousedown"
                                                        (fn [e]
                                                          (.preventDefault e)
                                                          (swap! audio wa/update-audio (graph {:kick kick-audio-data :freq (/ (.-offsetY e) 10) :ir ir-audio-data :time (wa/current-time @audio) :bpm bpm}))))
                     (js/document.body.addEventListener "touchstart"
                                                        (fn [e]
                                                          (.preventDefault e)
                                                          (let [touch (.item (.-changedTouches e) 0)]
                                                            (when (not (nil? touch))
                                                              (swap! audio wa/update-audio (graph {:kick kick-audio-data :freq (/ (.-pageY touch) 5) :ir ir-audio-data :time (wa/current-time @audio) :bpm bpm}))))
                                                          ))
                     (catch js/Error err (js/console.log (ex-cause err))))))))))

(defn main []
  (doseq [ev events] (js/document.body.addEventListener ev resume-audio-context false)))