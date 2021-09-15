(ns cljs-audio.time)

(def lengths {"1/4"   1
              "1/8"   0.5
              "1/2"   2
              "1"     4
              "1/16"  0.25
              "1/32"  0.125
              "1/64"  0.0625
              "1/128" 0.03125})

(defn seconds [bpm note-length]
  (* (/ 60 bpm) (get lengths note-length)))

(defn hertz [bpm note-length] (* (/ bpm 60) (get lengths note-length)))

(defn quantize-to [time length] (Math/ceil (/ time length)))