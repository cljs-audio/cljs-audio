(ns cljs-audio.envelopes)

(defn at-time [v time]
  [[:set-target-at-time v time 0.001]])

(defn cancel-at-time! [time]
  [[:cancel-scheduled-values time]])

(defn at-time! [v time]
  (into (cancel-at-time! time)
        (at-time v time)))

(defn adsr [a d s r s-length value time]
  "Schedules ADSR envelope."
  (let [time (+ time 0.01)
        value (+ value 0.0001)]
    (into (at-time 0 time)
          [[:exponential-ramp-to-value-at-time value (+ time a)]
           [:exponential-ramp-to-value-at-time (* s value) (+ time a d)]
           [:exponential-ramp-to-value-at-time (* s value) (+ time a d s-length)]
           [:exponential-ramp-to-value-at-time 0.0001 (+ time a d s-length r)]])))

(defn adsr! [a d s r s-length value time]
  "Cancels all scheduled values and schedules ADSR envelope."
  (into (cancel-at-time! time)
        (adsr a d s r s-length value time)))
