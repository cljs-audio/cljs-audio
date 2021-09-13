(ns cljs-audio.utils
  (:require [camel-snake-kebab.core :refer [->camelCase]]))

(defn symb->name [s] (key->js (->camelCase s)))

(defn derefable? [x] (satisfies? IDeref x))
(defn has-destination? [out] (exists? (.-destination out)))
(defn has-connect? [out] (exists? (.-connect out)))
(defn has-value? [out] (exists? (.-value out)))

(defn node-type [node]
  (cond
    (nil? node) :missing
    (= node :>) :context-id
    (keyword? node) :id
    (derefable? node) :graph
    (has-destination? node) :context
    (has-connect? node) :node
    (has-value? node)  :param
    :else (do (println "unknown node" node) node))
  )