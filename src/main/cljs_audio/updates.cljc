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


(defn resolve-from [path root-patch]
  (let [type (path-type path root-patch)]
    (case type
      nil nil
      :node path
      :top nil
      :patch (into path [:group ::out])
      )
    ))

(defn resolve-to [path root-patch]
  (let [type (path-type path root-patch)]
    (case type
      nil nil
      :node path
      :top [:ctx]
      :patch (into path [:group ::in])
      :parameter path
      )
    ))

(defn schedule [path name [command & args]]
  [:schedule path name command (vec args)])

(defn set-parameter [path name value]
  (case name
    :start [[:start path value]]
    :stop [[:stop path value]]
    (if (vector? value)
      (into [] (mapv (fn [value] (schedule path name value)) value))
      [[:set path name value]])))

(defn make-set-params [path params]
  (into [] (mapcat (fn [[name value]] (set-parameter path name value)) (vec params))))

(defn make-add-node [path type create-args]
  [[:add-node path type (or create-args [])]])

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
           [[[:connections & r] :r #{}]] #js [:remove-all-connections path]
           [[[:connections & r] :r v]] #js [:replace-all-connections path]
           [[[_ :connections & r] :+ v]] #js [:add-connection path]
           [[[_ :connections & r] :- v]] #js [:remove-connection path]
           ;; parameters
           [[[:start :parameters & r] :r v]] #js [:start path]
           [[[:start :parameters & r] :+ v]] #js [:start path]
           [[[:stop :parameters & r] :r v]] #js [:stop path]
           [[[:stop :parameters & r] :+ v]] #js [:stop path]
           [[[_ :parameters & r] :r v]] #js [:replace-parameter path]
           [[[_ _ :parameters & r] :r v]] #js [:replace-parameter (drop-last 1 path)]
           [[[_ _ _ :parameters & r] :r v]] #js [:replace-parameter (drop-last 2 path)]
           [[[_ :parameters & r] :+ v]] #js [:set-parameter path]
           [[[_ _ :parameters & r] :+ v]] #js [:set-parameter (drop-last 1 path)]
           [[[_ _ _ :parameters & r] :+ v]] #js [:set-parameter (drop-last 2 path)]
           [[[_ :parameters & r] :- v]] #js [:no-op]
           [[[_ _ :parameters & r] :- v]] #js [:no-op]
           [[[_ _ _ :parameters & r] :- v]] #js [:no-op]
           ;; nodes
           [[[_ :group & r] :r v]] #js [:replace-node path]
           [[[_ :group & r] :+ v]] #js [:add-node path]
           [[[:group & r] :r v]] #js [:replace-group path]
           [[[:group & r] :+ v]] #js [:replace-group path]
           [[[:create-args id & r] :r v]] #js [:recreate-node path] ;; TODO:!!!
           )))

(defn make-updates [a b]
  (let [edits (e/get-edits (e/diff a b) {:algo :quick})]
    (to-array (mapv (fn [edit] (edit->update edit)) edits))))

(defn make-disconnect [connection-path patch]
  (let [parent-patch-path (vec (drop-last 2 connection-path))
        nodes (last connection-path)
        [from to] (mapv (fn [node] (into parent-patch-path [:group node])) nodes)]
    [(into [:disconnect] [(resolve-from from patch) (resolve-to to patch)])]))

(defn remove-all-connections [path patch]
  (let [connections-path (vec (drop-last path))
        connections (get-in patch path)]
    (into [] (mapcat (fn [connection] (make-disconnect (into connections-path [connection]) patch)) connections))))

(defn add-all-connections [path patch]
  (let [connections-path (vec (drop-last path))
        connections (get-in patch path)]
    (into [] (mapcat (fn [connection] (make-connect (into connections-path [:connections connection]) patch)) connections))))

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

(defn update->commands [[name path] old-patch new-patch]
  (case name
    :add-connection (make-connect path new-patch)
    :remove-connection (make-disconnect path old-patch)
    :remove-all-connections (remove-all-connections path old-patch)
    :replace-all-connections (concat (remove-all-connections path old-patch)
                                     (add-all-connections path new-patch))
    :set-parameters (let [node-path (vec (drop-last 2 path))]
                      (vec (mapcat (fn [name value]
                                     (set-parameter node-path name value))
                                   (get-in new-patch path))))
    :set-parameter (let [value (get-in new-patch path)
                         parameter-name (last path)
                         node-path (vec (drop-last 2 path))]
                     (set-parameter node-path parameter-name value))
    :replace-parameter (let [value (get-in new-patch path)
                             parameter-name (last path)
                             node-path (vec (drop-last 2 path))]
                         (set-parameter node-path parameter-name value))
    :replace-group (into (remove-group path old-patch) (add-group path new-patch))
    :add-node (let [node (get-in new-patch path)]
                (cond
                  (:type node) (add-node path new-patch)
                  :else (add-group (into path [:group]) new-patch)))
    :replace-node (replace-node path old-patch new-patch)
    :start (let [value (get-in new-patch path)
                 node-path (vec (drop-last 2 path))]
             (into (replace-node node-path old-patch new-patch)
                   [[:start node-path value]]))
    :stop (let [value (get-in new-patch path)
                node-path (vec (drop-last 2 path))]
            [[:stop node-path value]])
    :no-op []
    ))

(defn ->node-ast [[type parameters create-args]] {:type type :parameters parameters :create-args create-args})

(defn ->group-ast [group] (into {} (mapv (fn [[id node]] (if (keyword? (first node))
                                                           [id (->node-ast node)]
                                                           [id (->patch-ast node)]
                                                           )) (into [] group))))

(defn ->connections-ast [connections] (set (mapv (fn [[from-id to-id]] [(if (= from-id :>) ::in from-id)
                                                                        (if (= to-id :>) ::out to-id)])
                                                 (into [] connections))))

(defn ->ports-ast [ports] ports)

(defn ->patch-ast [patch]
  (let [[group connections ports] patch]
    {:group       (->group-ast group)
     :connections (->connections-ast connections)
     :ports       (->ports-ast ports)}))

(defn cleanup-meaningless-ops [[name a1 a2]]
  (not (and (= name :connect) (or (= a1 []) (= a2 [])))))

(def priorities (into {} (map-indexed
                           (fn [ndx command] [command ndx])
                           [:stop
                            :disconnect
                            :remove-node
                            :add-node
                            :start
                            :set
                            :connect
                            :connect-parameter
                            :schedule])))

(defn sort-updates-by-priority [updates]
  (sort-by (fn [thing]
             (let [[update-name] thing]
               (update-name
                 priorities)))
           updates))

(defn patches->commands [old new]
  (let [a (->patch-ast old)
        b (->patch-ast new)
        updates (make-updates a b)]
    (vec (sort-updates-by-priority (filter cleanup-meaningless-ops (distinct (apply concat (mapv #(update->commands % a b) updates))))))))