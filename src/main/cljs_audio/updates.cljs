(ns cljs-audio.updates
  (:require [editscript.core :as e]
            [cljs-audio.utils :refer [derefable?]]
            [cljs.core.match :refer [match]]
            [clojure.spec.alpha :as s]))

(defn path-type [path patch]
  (if (= path [:group :>])
    :top-:>
    (let [id (last path)]
      (cond
        (= id ::>) ::>
        (vector? id) (if (get-in patch (into (vec (butlast path)) [(first id)]))
                       :parameter
                       nil)
        (= id :>) :>
        :else (let [thing (get-in patch path)]
                (cond
                  (:type thing) :node
                  (:connections thing) :patch
                  :else nil))))))

(defmulti resolve-from path-type)

(defmethod resolve-from :node [path]
  path)

(defmethod resolve-from nil [path]
  nil)

(defmethod resolve-from :top-:> [path]
  [:ctx])

(defmethod resolve-from :patch [path root-patch]
  (let [patch (get-in root-patch path)
        connections (:connections patch)
        result (mapv (fn [[from-id to-id]] (resolve-from (into path [:group from-id]) root-patch))
                     (filter (fn [[from-id to-id]] (= to-id :>)) connections))]
    (into [] (first result))))

(defmethod resolve-from :> [path _]
  (conj (vec (drop-last path)) ::out))

(defmethod resolve-from ::> [path patch]
  (let [patch-id (last (drop-last 2 path))
        parent-path (vec (drop-last 4 path))
        parent-connections (get-in patch (into parent-path [:connections]))
        result (first (mapv (fn [[from-id to-id]] (resolve-from (into parent-path [:group from-id]) patch))
                            (filter (fn [[from-id to-id]] (= to-id patch-id)) parent-connections)))]
    (into [] (if (= (:ctx result)) result (when result (resolve-from (conj (vec (drop-last result)) ::out) patch))))))

(defmulti resolve-to path-type)

(defmethod resolve-to :node [path]
  path)

(defmethod resolve-to :top-:> [path]
  [:ctx])

(defmethod resolve-to :parameter [path]
  path)

(defmethod resolve-to :patch [path root-patch]
  (let [patch (get-in root-patch path)
        connections (:connections patch)
        result (mapcat (fn [[_ to-id]] (resolve-to (into path [:group to-id]) root-patch))
                       (filter (fn [[from-id _]] (= from-id :>)) connections))]
    (into [] result)))

(defmethod resolve-to ::> [path patch]
  (let [patch-id (last (drop-last 2 path))
        parent-path (vec (drop-last 4 path))
        parent-connections (get-in patch (into parent-path [:connections]))
        result (first (mapv (fn [[_ to-id]] (resolve-to (into parent-path [:group to-id]) patch))
                            (filter (fn [[from-id _]] (= from-id patch-id)) parent-connections)))]
    (into [] (if (= (:ctx result)) result (when result (resolve-from (conj (vec (drop-last result)) ::out) patch))))))

(defmethod resolve-to :> [path _]
  (conj (vec (drop-last path)) ::out))

(defmethod resolve-to nil [path root-patch]
  nil)

(defn schedule [path name [command & args]]
  [:schedule path name command (vec args)])

(defn set-parameter [path name value]
  (if (vector? value)
    (if (vector? (first value))
      (into [] (mapv (fn [value] (schedule path name value)) value))
      [(schedule path name (vec value))])
    [[:set path name value]]))

(defn make-set-params [path params]
  (into [] (mapcat (fn [[name value]] (set-parameter path name value)) (vec params))))

(defn make-add-node [path type create-args]
  [[:add-node path type (or create-args [])]])

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
    (let [from (into parent-patch-path [:group from-id])
          from (resolve-from from patch)]
      (if (vector? to-id)
        (let [[to-id parameter-name] to-id
              to (into parent-patch-path [:group to-id])
              to (resolve-to to patch)]
          [(into [:connect-parameter] [from to parameter-name])])
        (let [
              to (into parent-patch-path [:group to-id])
              to (resolve-to to patch)]
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

(defn replace-input-id [id] [[:replace-input-id id]])
(defn replace-output-id [id] [[:replace-output-id id]])

(defn make-remove-node [path]
  [[:disconnect path]
   [:remove-node path]])

(def get-group first)
(def get-connections second)

(defn add-group [path patch]
  (let [group (get-in patch path)
        in-path (into path [::in])
        out-path (into path [::out])
        patch (-> patch
                  (assoc-in in-path {:type :gain :parameters {} :create-args []})
                  (assoc-in out-path {:type :gain :parameters {} :create-args []})
                  (update-in (into (vec (drop-last path)) [:connections]) #(into % [[::out ::>]])))
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

(defn edit->update [[path op v]]
  (match [[(into [] (reverse path)) op v]]
         ;; connections
         [[[:connections & r] :r #{}]] [:remove-all-connections path]
         [[[:connections & r] :r v]] [:replace-all-connections path]
         [[[_ :connections & r] :+ v]] [:add-connection path]
         [[[_ :connections & r] :- v]] [:remove-connection path]
         ;; parameters
         [[[_ :parameters & r] :r v]] [:replace-parameter path]
         [[[_ _ :parameters & r] :r v]] [:replace-parameter (drop-last 1 path)]
         [[[_ _ _ :parameters & r] :r v]] [:replace-parameter (drop-last 2 path)]
         [[[_ :parameters & r] :+ v]] [:set-parameter path]
         [[[_ :parameters & r] :- v]] [:no-op]
         ;; nodes
         [[[:group & r] :r v]] [:replace-group path]
         [[[:group & r] :+ v]] [:replace-group path]
         [[[_ :group & r] :r v]] [:replace-node path]
         [[[_ :group & r] :+ v]] [:add-node path]
         [[[:create-args id & r] :r v]] [:recreate-node path]
         ;[[[_ :group :patch & r] :- v]] [ path]
         ;; group

         ;:else [:no-op]
         ))

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
        node-path (vec (drop-last 3 path))]
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

(defmethod update->commands :replace-node [[_ path] old-patch new-patch]
  (into
    (let [node (get-in old-patch path)]
      (cond
        (:type node) (make-remove-node path)
        :else (remove-group (into path [:group]) old-patch)))
    (let [node (get-in new-patch path)]
      (cond
        (:type node) (add-node path new-patch)
        :else (add-group (into path [:group]) new-patch)))))

(defmethod update->commands :create-node-or-patch [[_ path] _ new-patch]
  (let [node-or-patch (get-in new-patch path)]
    (if (:type node-or-patch)                               ;; it is a primitive node
      (add-node path new-patch)
      (add-group path new-patch))))

(defn ->node-ast [[type parameters create-args]] {:type type :parameters parameters :create-args create-args})

(defn ->group-ast [group] (into {} (mapv (fn [[id node]] (if (keyword? (first node))
                                                           [id (->node-ast node)]
                                                           [id (->patch-ast node)]
                                                           )) (into [] group))))

(defn ->connections-ast [connections] (if (map? connections) (set (into [] connections)) connections))

(defn ->patch-ast [patch]
  (let [[group connections] patch]
    {:group       (->group-ast group)
     :connections (->connections-ast connections)}))

(defn cleanup-meaningless-ops [[name a1 a2]]
  (not (and (= name :connect) (or (= a1 []) (= a2 [])))))

(defn patches->commands [old new]
  (let [a (->patch-ast old)
        b (->patch-ast new)
        updates (make-updates a b)]
    (into [] (filter cleanup-meaningless-ops (distinct (mapcat #(update->commands % a b) updates))))))