(ns cljs-audio.workers.worker
  (:require [cljs.core.async :refer [<!]]
            [cognitect.transit :as t])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def r (t/reader :json))
(def w (t/writer :json))

(def handlers
  (atom {}))

(defn register
  [id fun]
  (swap! handlers assoc id fun))

(defn- chan?
  [x]
  (satisfies? cljs.core.async.impl.protocols/ReadPort x))

(defn- do-respond!
  [data]
  (try
    (let [message
          (t/write w {:state :success :data data})

          transfer
          (->> (:transfer data)
               (map keyword)
               (select-keys data)
               vals)]

      (if (seq transfer)
        (.postMessage js/self message (t/write w transfer))
        (.postMessage js/self message)))

    (catch js/Object e
      (when-let [c js/console]
        (.error c e))
      (->> {:state :error, :message (.toString e)}
           (t/write w)
           (.postMessage js/self)))))

(defn- handle-request!
  [event]
  (try
    (let [data (.-data event)
          decoded-data (t/read r data)
          handler (@handlers (:handler decoded-data))
          arguments (:arguments decoded-data)
          result (handler arguments)]
      (if (chan? result)
        (go (do-respond! (<! result)))
        (do-respond! result)))

    (catch js/Object e
      (when-let [c js/console]
        (.error c e))
      (->> {:state :error, :message (.toString e)}
           (t/write w)
           (.postMessage js/self)))))

(defn bootstrap
  []
  (aset js/self "onmessage" handle-request!))
