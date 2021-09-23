(ns cljs-audio.webaudio-interpreter
  (:require
    [cljs.core.match :refer [match]]
    [camel-snake-kebab.core :refer [->PascalCaseKeyword ->camelCaseKeyword]]
    [oops.core :refer [oapply+ oget+ oset!+]]
    [medley.core :refer [dissoc-in]]
    [cljs-audio.utils :refer [symb->name derefable?]]))

(defn create-node [node-path type create-args]
  (fn [ctx env polyfill]
    (let [node (if (= type :audio-worklet)
                 (let [clazz (get polyfill "AudioWorkletNode" js/AudioWorkletNode)]
                   (new clazz ctx (first create-args)))
                 (oapply+
                   ctx
                   (str "create"
                        (key->js (->PascalCaseKeyword type))) create-args))]
      (assoc-in env
                node-path
                node))))

(defn connect [from-path to-path]
  (fn [ctx env]
    (let [from (get-in env from-path)
          to (if (= to-path [:ctx]) (.-destination ctx)
                                    (get-in env to-path))]
      (.connect from to)
      env)))

(defn connect-parameter [from-path to-path parameter-name]
  (fn [_ env]
    (let [from (get-in env from-path)
          to (get-in env to-path)
          js-parameter-name (symb->name parameter-name)
          param (oget+ to js-parameter-name)
          ]
      (.connect from param)
      env)))

(defn set-parameter [node-path parameter-name parameter-value]
  (fn [_ env]
    (let [js-parameter-name (symb->name parameter-name)
          node (get-in env node-path)
          param (oget+ node js-parameter-name)]
      (if (nil? param)
        ;; handle primitive param case
        (oset!+
          node
          js-parameter-name parameter-value)
        ;; handle AudioParam case
        (set! (.-value param) parameter-value)))
    env))

(defn start [node-path time]
  (fn [_ env]
    (let [node (get-in env node-path)]
      (when (exists? (.-start node)) (.start node time)))
    env))

(defn stop [node-path time]
  (fn [_ env]
    (let [node (get-in env node-path)]
      (when (exists? (.-stop node))
        (try (.stop node time)
             (catch js/Error err (js/console.log (ex-cause err))))))
    env))

(defn schedule [node-path param command args]
  (fn [_ env]
    (let [js-parameter-name (symb->name param)
          node (get-in env node-path)
          param (oget+ node js-parameter-name)]
      (when (not (nil? param))
        (oapply+ param (key->js (->camelCaseKeyword command)) args)))
    env))

(defn disconnect
  ([from-path to-path]
   (fn [ctx env]
     (let [from-node (get-in env from-path)]
       (if (nil? to-path)
         (.disconnect from-node)
         (let [to-node (if (= to-path [:ctx]) (.-destination ctx)
                                              (get-in env to-path))]
           (.disconnect from-node to-node))))
     env)))

(defn remove-node [node-path]
  (fn [_ env]
    (let [node (get-in env node-path)]
      (when (exists? (.-stop node))
        (try (.stop node)
             (catch js/Error err (js/console.log (ex-cause err))))))
    (dissoc-in env node-path)))

(defn sort-updates-by-priority [updates]
  (vec (sort-by (fn [thing]
                  (let [[update-name] thing]
                    (update-name
                      (into {} (map-indexed
                                 (fn [ndx command] [command ndx])
                                 [:stop
                                  :disconnect
                                  :remove-node
                                  :add-node
                                  :set
                                  :connect
                                  :connect-parameter
                                  :start
                                  :schedule])))))
                updates)))

(defn update->side-fx [update]
  (match [update]
         [[:add-node node-path type create-args]] (create-node node-path type create-args)
         [[:set node-path name value]] (set-parameter node-path name value)
         [[:connect from-path to-path]] (connect from-path to-path)
         [[:connect-parameter from-path to-path parameter-name]] (connect-parameter from-path to-path parameter-name)
         [[:disconnect from-path to-path]] (disconnect from-path to-path)
         [[:disconnect from-path]] (disconnect from-path nil)
         [[:remove-node node-path]] (remove-node node-path)
         [[:schedule node-path param command args]] (schedule node-path param command args)
         [[:start path time]] (start path time)
         [[:stop path time]] (stop path time)
         ))

(defn eval-updates [ctx env polyfill updates] (reduce (fn [env update] ((update->side-fx update) ctx env polyfill)) env (sort-updates-by-priority updates)))