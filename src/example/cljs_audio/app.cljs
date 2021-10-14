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

(defn kick [{:keys [frequency gain]}]
  [{:osc [:oscillator {:frequency frequency :start 0}]
    :vca [:gain {:gain gain}]}
   #{[:osc :vca]
     [:vca :>]}])

(def bpm 140)

(def beat (/ 60 bpm))
(def bar (* 4 beat))

(defn pattern [time] {:frequency (reduce into
                                         (mapv #(adsr 0.1 0.1 0.8 0.1 0.01 220
                                                      (+ time (* % (t/seconds bpm "1/4")))) (range 4)))})

(defn freq-gain [time] (let [times (mapv #(+ time (* % (t/seconds bpm "1/4"))) (range 4))]
                    (s/schedule-parameters {:frequency (partial adsr 0.1 0.1 0.8 0.1 0.01)
                                            :gain      (partial adsr 0.1 0.1 0.8 0.1 0.01)}
                                           (mapv (fn [time] {:frequency 220
                                                             :gain      0.5
                                                             ::s/time   time}) times))))

(defn build-patch [time]
  [{:kick (kick (freq-gain time))
    :hat  (m/one-shot-sample {:buffer :ch :time (+ time (t/seconds bpm "1/8"))})
    :hat2  (m/one-shot-sample {:buffer :ch :time (+ time (t/seconds bpm "1/8") (t/seconds bpm "1/4"))})
    :hat3  (m/one-shot-sample {:buffer :ch :time (+ time (t/seconds bpm "1/8") (t/seconds bpm "2/4"))})
    :hat4  (m/one-shot-sample {:buffer :ch :time (+ time (t/seconds bpm "1/8") (t/seconds bpm "3/4"))})
    }
   #{[:kick :>]
     [:hat :>]
     [:hat2 :>]
     [:hat3 :>]
     [:hat4 :>]
     }])



#_(defn play [audio lag]
    (let [t (wa/current-time audio)
          env (:env audio)]
      (wa/schedule! env [:kick :osc :frequency]
                    (adsr 0.1 0.1 0.8 0.1 0.01 220 t))
      (wa/schedule! env [:kick :vca :gain]
                    (adsr 0.1 0.1 0.8 0.1 0.01 1 t))
      (let [hats (vec (concat
                        (adsr 0.01 0.1 0.8 0.1 0.01 1 t)
                        (adsr 0.01 0.1 0.8 0.1 0.01 1 (+ t (t/seconds 150 "1/8")))
                        (adsr 0.01 0.1 0.8 0.1 0.01 1 (+ t (* 2 (t/seconds 150 "1/8"))))
                        (adsr 0.01 0.1 0.8 0.1 0.01 1 (+ t (* 3 (t/seconds 150 "1/8"))))))]

        (wa/schedule! env [:hat :vca :gain]
                      hats)
        (wa/start! env [:hat :player] (+ 1 t))
        ;; have a container for audio buffer nodes
        ;; every time start is called creates a new one and connects it to the output
        ;; let's ignore audio params yet
        (wa/set-timeout {:interval   (- beat lag)
                         :start-time (wa/current-time audio)
                         :audio      audio}
                        #(play (into audio {:env env}) %)))))

(defn start-updates [audio new-patch cycle]
  (let [start-time (wa/current-time audio)]
    (p/then (wa/calculate-updates audio new-patch)
            (fn [{:keys [updates]}]
              (let [new-env (wa/apply-updates
                              audio
                              updates)
                    end-time (wa/current-time audio)
                    work-time (- end-time start-time)]
                (wa/set-timeout {:interval   (- bar work-time)
                                 :start-time (wa/current-time audio)
                                 :audio      audio}
                                #(start-updates (into audio
                                                      {:patch new-patch
                                                       :env   new-env})
                                                (build-patch (* cycle bar))
                                                (inc cycle))))))))

(defn resume-audio-context []
  (let [audio (wa/make-audio {:polyfill sac})]
    (p/let [_ (wa/resume audio)
            _ (wa/add-module audio "js/noise-generator.js")
            oh (wa/fetch-sample audio "resources/oh01.wav")
            ch (wa/fetch-sample audio "resources/hh01.wav")
            ;buffer-size (* 2 (wa/sample-rate audio))
            ;noise-buffer (wa/create-buffer audio bufferSize)
            ]
           (doseq [ev events] (.removeEventListener js/document.body ev resume-audio-context))
           (let [audio (into audio {:buffers {:oh oh
                                              :ch ch}})
                 new-patch (build-patch 0)]
             (start-updates audio new-patch 0)))))

(defn main []
  (doseq [ev events] (js/document.body.addEventListener ev resume-audio-context false)))
