(ns cljs-audio.scheduling
  (:require [cljs-audio.webaudio :as wa]))

(defn schedule-parameters [schedulers events]
  (let [schedulers-keys (keys schedulers)]
    (reduce
      (fn [res event]
        (reduce
          (fn [res scheduler-key]
            (let [curr-value (get res scheduler-key [])
                  scheduler (scheduler-key schedulers)
                  new-value (scheduler (scheduler-key event)
                                       (::time event))]
              (assoc res scheduler-key
                         (into curr-value
                               new-value))))
          res schedulers-keys))
      {} events)))