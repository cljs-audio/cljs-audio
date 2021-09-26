(ns cljs-audio.envelopes)

(defn at-time [v time]
  [[:set-target-at-time (+ v 0.0001) time 0.0001]])

(defn cancel-at-time! [time]
  [[:cancel-and-hold-at-time time]])



(defn at-time! [v time]
  (into (cancel-at-time! time)
        (at-time v time)))

(defn adsr [a d s r s-length value time]
  "Schedules ADSR envelope."
  (into (at-time 0 time)
        [[:exponential-ramp-to-value-at-time (+ 0.0001 value) (+ time a)]
         [:exponential-ramp-to-value-at-time (+ (* s value) 0.0001) (+ time a d)]
         [:exponential-ramp-to-value-at-time (+ (* s value) 0.0001) (+ time a d s-length)]
         [:exponential-ramp-to-value-at-time 0.0001 (+ time a d s-length r)]]))

(defn adsr! [a d s r s-length value time]
  "Cancels all scheduled values and schedules ADSR envelope."
  (into (cancel-at-time! time)
        (adsr a d s r s-length value time)))
