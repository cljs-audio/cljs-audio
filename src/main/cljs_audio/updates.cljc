(ns cljs-audio.updates
  (:require [editscript.core :as e]
            [cljs.core.match :refer [match]]))

(defn path-type [path patch]
  (case path
    [:group :cljs-audio.updates/out] :top
    [:group :cljs-audio.updates/in] nil
    (let [id (last path)]
      (cond
        (= id :cljs-audio.updates/out) :node
        (= id :cljs-audio.updates/in) :node
        (vector? id) (if (get-in patch (into (vec (butlast path)) [(first id)]))
                       :parameter
                       nil)
        :else (let [thing (get-in patch path)]
                (cond
                  (:type thing) :node
                  (:connections thing) :patch
                  :else (println "Can't parse " thing path patch)))))))

(defmulti resolve-from path-type)

(defmethod resolve-from nil [path]
  nil)

(defmethod resolve-from :node [path]
  path)

(defmethod resolve-from :top [path]
  nil)

(defmethod resolve-from :patch [path root-patch]
  (into path [:group ::out]))

(defmulti resolve-to path-type)

(defmethod resolve-to nil [path]
  nil)

(defmethod resolve-to :node [path]
  path)

(defmethod resolve-to :top [path]
  [:ctx])

(defmethod resolve-to :parameter [path]
  path)

(defmethod resolve-to :patch [path root-patch]
  (into path [:group ::in]))

(defn schedule [path name [command & args]]
  [:schedule path name command (vec args)])

(defn set-parameter [path name value]
  (case name
    :start [[:start path value]]
    :stop [[:stop path value]]
    (if (vector? value)
      (if (vector? (first value))
        (into [] (mapv (fn [value] (schedule path name value)) value))
        [(schedule path name (vec value))])
      [[:set path name value]])))

(defn make-set-params [path params]
  (into [] (mapcat (fn [[name value]] (set-parameter path name value)) (vec params))))

(defn make-add-node [path type create-args]
  (into [[:add-node path type (or create-args [])]]
        (when (type #{:oscillator :biquad-filter}) (set-parameter path :frequency 0))))

(def get-parameters second)

(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(defn find-from [val {:keys [from]}] (= from val))
(defn find-to [val {:keys [to]}] (= to val))

(defn find-first [f coll]
  (first (drop-while (complement f) coll)))

(defn find-connection-id-by-to [connections to-id]
  (let [first-connection (find-first (fn [[_ to]] (= to to-id)) (into [] connections))]
    (first first-connection)))

(defn make-connect [connection-path patch]
  (let [parent-patch-path (vec (drop-last 2 connection-path))
        [from-id to-id] (last connection-path)]
    (let [from-path (into parent-patch-path [:group from-id])
          from (resolve-from from-path patch)]
      (if (vector? to-id)
        (let [[to-id parameter-name] to-id
              to-path (into parent-patch-path [:group to-id])
              to (resolve-to to-path patch)]
          [(into [:connect-parameter] [from to parameter-name])])
        (let [to-path (into parent-patch-path [:group to-id])
              to (resolve-to to-path patch)]
          [(into [:connect] [from to])])))))

(defn find-node-connections [node-path patch]
  (let [node-id (last node-path)
        all-connections (get-in patch (into (vec (drop-last 2 node-path)) [:connections]))
        node-connections (filter (fn [[from to]] (or (= from node-id)
                                                     (= to node-id)))
                                 (into [] all-connections))]
    (mapv (fn [id] (into (vec (drop-last 2 node-path)) [:connections id])) node-connections)))

(defn add-node [path patch]
  (let [node (get-in patch path)
        {:keys [type parameters create-args]} node]
    (into (into (make-add-node path type create-args)
                (make-set-params path parameters))
          (let [node-connections-paths (find-node-connections path patch)]
            (vec (mapcat (fn [path] (make-connect path patch)) node-connections-paths))))))

(defn make-remove-node [path]
  [[:disconnect path]
   [:remove-node path]])

(defn add-group [path patch]
  (let [group (get-in patch path)
        in-path (into path [::in])
        out-path (into path [::out])
        patch (-> patch
                  (assoc-in in-path {:type :gain :parameters {} :create-args []})
                  (assoc-in out-path {:type :gain :parameters {} :create-args []}))
        create-in-out-commands (if (= path [:group])
                                 []
                                 (into (add-node in-path patch)
                                       (add-node out-path patch)))]
    (into
      create-in-out-commands
      (mapcat (fn [[id node]]
                (cond
                  (:type node) (add-node (into path [id]) patch)
                  :else (add-group (into path [id :group]) patch)))
              (into [] group)))))

(defn remove-group [path patch]
  (let [group (get-in patch path)
        make-remove-in-out (if (= path [:group])
                             []
                             (into (make-remove-node (into path [::in]))
                                   (make-remove-node (into path [::out]))))]
    (if (empty? group)
      []
      (into make-remove-in-out
            (mapcat (fn [[id node]]
                      (cond
                        (:type node) (make-remove-node (into path [id]))
                        (:group node) (remove-group (into path [id :group]) patch)
                        :else (println "ERROR" path node)))
                    (into group))))))

(declare ->patch-ast)

(defn edit->update [edit]
  (let [[path op v] edit]
    (match [[(into [] (reverse path)) op v]]
           ;; connections
           [[[:connections & r] :r #{}]] [:remove-all-connections path]
           [[[:connections & r] :r v]] [:replace-all-connections path]
           [[[_ :connections & r] :+ v]] [:add-connection path]
           [[[_ :connections & r] :- v]] [:remove-connection path]
           ;; parameters
           [[[:start :parameters & r] :r v]] [:start path]
           [[[:start :parameters & r] :+ v]] [:start path]
           [[[:stop :parameters & r] :r v]] [:stop path]
           [[[:stop :parameters & r] :+ v]] [:stop path]
           [[[_ :parameters & r] :r v]] [:replace-parameter path]
           [[[_ _ :parameters & r] :r v]] [:replace-parameter (drop-last 1 path)]
           [[[_ _ _ :parameters & r] :r v]] [:replace-parameter (drop-last 2 path)]
           [[[_ :parameters & r] :+ v]] [:set-parameter path]
           [[[_ _ :parameters & r] :+ v]] [:set-parameter (drop-last 1 path)]
           [[[_ _ _ :parameters & r] :+ v]] [:set-parameter (drop-last 2 path)]
           [[[_ :parameters & r] :- v]] [:no-op]
           [[[_ _ :parameters & r] :- v]] [:no-op]
           [[[_ _ _ :parameters & r] :- v]] [:no-op]
           ;; nodes
           [[[:group & r] :r v]] [:replace-group path]
           [[[:group & r] :+ v]] [:replace-group path]
           [[[_ :group & r] :r v]] [:replace-node path]
           [[[_ :group & r] :+ v]] [:add-node path]
           [[[:create-args id & r] :r v]] [:recreate-node path] ;; TODO:!!!
           )))

(defn make-updates [a b]
  (let [edits (e/get-edits (e/diff a b) {:algo :quick})]
    (mapv (fn [edit] (edit->update edit)) edits)))

(defmulti update->commands (fn [[update-name]]
                             update-name))

(defmethod update->commands :add-connection [[_ path] _ patch]
  (make-connect path patch))

(defn make-disconnect [connection-path patch]
  (let [parent-patch-path (vec (drop-last 2 connection-path))
        nodes (last connection-path)
        [from to] (mapv (fn [node] (into parent-patch-path [:group node])) nodes)]
    [(into [:disconnect] [(resolve-from from patch) (resolve-to to patch)])]))

(defmethod update->commands :remove-connection [[_ path] patch _]
  (make-disconnect path patch))

(defn remove-all-connections [path patch]
  (let [connections-path (vec (drop-last path))
        connections (get-in patch path)]
    (into [] (mapcat (fn [connection] (make-disconnect (into connections-path [connection]) patch)) connections))))

(defmethod update->commands :remove-all-connections [[_ path] old-patch]
  (remove-all-connections path old-patch))

(defn add-all-connections [path patch]
  (let [connections-path (vec (drop-last path))
        connections (get-in patch path)]
    (into [] (mapcat (fn [connection] (make-connect (into connections-path [:connections connection]) patch)) connections))))

(defmethod update->commands :replace-all-connections [[_ path] old-patch new-patch]
  (concat (remove-all-connections path old-patch)
          (add-all-connections path new-patch)))

(defmethod update->commands :set-parameters [[_ path] _ new-patch]
  (let [node-path (vec (drop-last 2 path))]
    (vec (mapcat (fn [name value]
                   (set-parameter node-path name value))
                 (get-in new-patch path)))))

(defmethod update->commands :set-parameter [[_ path] _ new-patch]
  (let [value (get-in new-patch path)
        parameter-name (last path)
        node-path (vec (drop-last 2 path))]
    (set-parameter node-path parameter-name value)))

(defmethod update->commands :replace-parameter [[_ path] _ new-patch]
  (let [value (get-in new-patch path)
        parameter-name (last path)
        node-path (vec (drop-last 2 path))]
    (set-parameter node-path parameter-name value)))

(defmethod update->commands :replace-group [[_ path] old-patch new-patch]
  (into (remove-group path old-patch) (add-group path new-patch)))

(defmethod update->commands :add-node [[_ path] old-patch new-patch]
  (let [node (get-in new-patch path)]
    (cond
      (:type node) (add-node path new-patch)
      :else (add-group (into path [:group]) new-patch))))

(defn replace-node [path old-patch new-patch]
  (into
    (let [node (get-in old-patch path)]
      (cond
        (:type node) (make-remove-node path)
        :else (remove-group (into path [:group]) old-patch)))
    (let [node (get-in new-patch path)]
      (cond
        (:type node) (add-node path new-patch)
        :else (add-group (into path [:group]) new-patch)))))

(defmethod update->commands :replace-node [[_ path] old-patch new-patch]
  (replace-node path old-patch new-patch))

(defmethod update->commands :start [[_ path] old-patch new-patch]
  (let [value (get-in new-patch path)
        node-path (vec (drop-last 2 path))
        res (into (replace-node node-path old-patch new-patch)
                  [[:start node-path value]])]
    res))

(defmethod update->commands :stop [[_ path] _ new-patch]
  (let [value (get-in new-patch path)
        node-path (vec (drop-last 2 path))]
    [[:stop node-path value]]))

(defmethod update->commands :no-op [] [])

(defn ->node-ast [[type parameters create-args]] {:type type :parameters parameters :create-args create-args})

(defn ->group-ast [group] (into {} (mapv (fn [[id node]] (if (keyword? (first node))
                                                           [id (->node-ast node)]
                                                           [id (->patch-ast node)]
                                                           )) (into [] group))))

(defn ->connections-ast [connections] (set (mapv (fn [[from-id to-id]] [(if (= from-id :>) ::in from-id)
                                                                        (if (= to-id :>) ::out to-id)])
                                                 (into [] connections))))

(defn ->patch-ast [patch]
  (let [[group connections] patch]
    {:group       (->group-ast group)
     :connections (->connections-ast connections)}))

(defn cleanup-meaningless-ops [[name a1 a2]]
  (not (and (= name :connect) (or (= a1 []) (= a2 [])))))

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

(defn patches->commands [old new]
  (let [a (->patch-ast old)
        b (->patch-ast new)
        updates (make-updates a b)]
    (sort-updates-by-priority (into [] (filter cleanup-meaningless-ops (vec (mapcat #(update->commands % a b) updates)))))))