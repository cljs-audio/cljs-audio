(ns cljs-audio.app
  (:require
    [cljs-audio.webaudio :refer [make-audio update-audio]]
    ["standardized-audio-context" :refer (AudioContext)]))

(defonce audio (atom nil))

(def events ["touchstart" "touchend" "click" "keydown"])

(def switch (atom true))
(def frequency (atom 220))

(defn simple-voice [{:keys [frequency detune gain]
                     :or   {frequency 220 detune 0 gain 1}}]
  [{:osc [:oscillator {:frequency frequency
                       :detune    detune
                       :type      "sine"} []]
    :lfo [:oscillator {:frequency 2
                       :type "sine"}]
    :vca [:gain {:gain gain} []]}
   {:osc :vca
    :lfo [:vca :gain]
    :vca :>}])

(defonce mouse-y (atom 220))

(defn resume-audio-context [] (let [ctx (new AudioContext)]
                                (.then (.resume ctx)
                                       (fn []
                                         (doseq [ev events] (js/document.removeEventListener ev resume-audio-context))
                                         (reset! audio (make-audio ctx))
                                         (swap! audio update-audio (simple-voice 220))
                                         (js/document.addEventListener "mousedown" (fn [] (swap! audio update-audio (simple-voice {:gain [[:set-target-at-time 0 (+ 0.1 (.-currentTime ctx)) 0.5] [:set-target-at-time 1 (+ 1 (.-currentTime ctx)).5]] :frequency @mouse-y})) false))
                                         (js/document.addEventListener "mousemove" (fn [e] (reset! mouse-y (.-offsetY e)) false))))))

(defn main []
  (doseq [ev events] (js/document.addEventListener ev resume-audio-context false)))