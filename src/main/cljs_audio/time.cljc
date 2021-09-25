(ns cljs-audio.time)

(def lengths {"1/4"   1
              "2/4"   2
              "3/4"   3
              "4/4"   4
              "5/4"   5
              "6/4"   6
              "7/4"   7
              "8/4"   8
              "1/8"   0.5
              "2/8"   1
              "3/8"   1.5
              "4/8"   2
              "5/8"   2.5
              "6/8"   3
              "7/8"   3.5
              "8/8"   4
              "1/2"   2
              "2/2"   4
              "1"     4
              "1/16"  0.25
              "1/32"  0.125
              "1/64"  0.0625
              "1/128" 0.03125})

(defn seconds [bpm note-length]
  (* (/ 60 bpm) (get lengths note-length)))

(defn hertz [bpm note-length] (* (/ bpm 60) (get lengths note-length)))

(defn quantize-to [time length] (Math/ceil (/ time length)))