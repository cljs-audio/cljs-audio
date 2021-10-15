(ns cljs-audio.envelopes)

(def fix-factor 0.00001)

(defn at-time [v time]
  [[:set-target-at-time (+ v fix-factor) time 0.0001]])

(defn cancel-at-time! [time]
  [[:cancel-and-hold-at-time time]])

(defn at-time! [v time]
  (into (cancel-at-time! time)
        (at-time v time)))

(defn adsr [a d s r s-length value time]
  "Schedules ADSR envelope."
  (into (at-time 0 time)
        [[:exponential-ramp-to-value-at-time (+ fix-factor value) (+ time a)]
         [:exponential-ramp-to-value-at-time (+ (* s value) fix-factor) (+ time a d)]
         [:exponential-ramp-to-value-at-time (+ (* s value) fix-factor) (+ time a d s-length)]
         [:exponential-ramp-to-value-at-time fix-factor (+ time a d s-length r)]]))

(defn l-adsr [a d s r s-length value time]
  "Schedules ADSR envelope."
  (into (at-time 0 time)
        [[:linear-ramp-to-value-at-time value (+ time a)]
         [:linear-ramp-to-value-at-time (* s value) (+ time a d)]
         [:linear-ramp-to-value-at-time (* s value) (+ time a d s-length)]
         [:linear-ramp-to-value-at-time 0 (+ time a d s-length r)]]))

(defn l-adsr! [a d s r s-length value time]
  "Cancels all scheduled values and schedules ADSR envelope."
  (into (cancel-at-time! time)
        (l-adsr a d s r s-length value time)))

(defn adsr! [a d s r s-length value time]
  "Cancels all scheduled values and schedules ADSR envelope."
  (into (cancel-at-time! time)
        (adsr a d s r s-length value time)))