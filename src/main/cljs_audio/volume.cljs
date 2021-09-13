(ns cljs-audio.volume)

(defn log10 [v] (/ (js/Math.log v) js/Math.LN10))

(defn gain [v] (js/Math.pow 10 (/ v 20)))

;decibel_level = 20 * log10( gain.value );
;gain.value = Math.pow(10, (decibel_level / 20));
;function log10(x) {
;                   return Math.log(x)/Math.LN10;
;                   }

