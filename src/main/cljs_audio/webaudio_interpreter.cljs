(ns cljs-audio.webaudio-interpreter
  (:require
    [cljs.core.match :refer [match]]
    [camel-snake-kebab.core :refer [->PascalCaseKeyword ->camelCaseKeyword]]
    [oops.core :refer [oapply+ oget+ oset!+]]
    [medley.core :refer [dissoc-in]]
    [cljs-audio.utils :refer [symb->name derefable?]]))

(defn create-node [node-path type create-args]
  (fn [ctx env]
    (let [node (oapply+
                 ctx
                 (str "create"
                      (key->js (->PascalCaseKeyword type))) create-args)]
      (when (exists? (.-start node)) (.start node))
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
     (let [from-node (get-in env from-path)
           to-node (if (= to-path [:ctx]) (.-destination ctx)
                                                (get-in env to-path))]
       (if (nil? to-node) (.disconnect from-node) (.disconnect from-node to-node)))
     env)))

(defn remove-node [node-path]
  (fn [_ env]
    (let [node (get-in env node-path)]
      (when (exists? (.-stop node)) (.stop node)))
    (dissoc-in env node-path)))

(defn sort-updates-by-priority [updates]
  (vec (sort-by (fn [thing]
                  (let [[update-name] thing]

                    (update-name {
                                  :add-node          1
                                  :set               2
                                  :connect           3
                                  :connect-parameter 4
                                  :disconnect        5
                                  :remove-node       6
                                  :schedule          7
                                  }))) updates)))

(defn update->side-fx [update]
  (match [update]
         [[:add-node node-path type create-args]] (create-node node-path type create-args)
         [[:set node-path name value]] (set-parameter node-path name value)
         [[:connect from-path to-path]] (connect from-path to-path)
         [[:connect-parameter from-path to-path parameter-name]] (connect-parameter from-path to-path parameter-name)
         [[:disconnect from-path to-path]] (disconnect from-path to-path)
         [[:remove-node node-path]] (remove-node node-path)
         [[:schedule node-path param command args]] (schedule node-path param command args)))

(defn eval-updates [ctx env updates] (reduce (fn [env update] ((update->side-fx update) ctx env)) env (sort-updates-by-priority updates)))
