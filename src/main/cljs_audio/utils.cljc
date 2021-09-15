(ns cljs-audio.utils
  (:require [camel-snake-kebab.core :refer [->camelCase]]))

(defn symb->name [s] (key->js (->camelCase s)))
(defn derefable? [x] (satisfies? IDeref x))