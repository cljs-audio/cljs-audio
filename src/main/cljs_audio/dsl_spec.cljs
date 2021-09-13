(ns cljs-audio.dsl-spec
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [clojure.test.check :as tt]
            [camel-snake-kebab.core :as csk]
            [clojure.string :as cs]
            [clojure.set :refer [subset?]]))

;; DESIGN
;; input:
;; patch (dsl sentence)
;; state:
;; old-patch-ast - dsl unfolded into a parsable description
;; new-patch-ast
;; context (web audio context)
;; web-audio-env (map of ids to nodes/failure-messages)
;; process:
;; user-input -> patch -> patch-ast -> commands -> interpreter

;; Ideas!
;; backtrack failures to the parts of the dsl and visualize it somehow
;; keep track of both patch->patch and ast->ast diffs for it

;; DSL
;; web audio node
;; kinds
;; source
;; destination
;; processing

(defn is-io-node-id [id] (= id :>))
(s/def ::io-node-id (s/and keyword? is-io-node-id))
(s/def ::node-id (s/and keyword? (complement is-io-node-id)))

(s/def ::function ifn?)

(s/def ::primitive-node-type #{:analyser
                               :audio-buffer-source
                               :audio-destination
                               :audio-scheduled-source
                               :audio-worklet
                               :biquad-filter
                               :channel-merger
                               :channel-splitters
                               :constant-source
                               :convolver
                               :delay
                               :dynamics-compressor
                               :gain
                               :iir-filter
                               :media-element-audio-source
                               :media-stream-audio-destination
                               :media-stream-audio-source
                               :oscillator
                               :panner
                               :wave-shaper
                               :stereo-panner})

(s/def ::node-type (s/or
                     :function ::function
                     :primitive ::primitive-node-type))

(s/def ::time number?)

(s/def ::cancel-scheduled-values #{:cancel-scheduled-values :cancel-scheduled :cancel})
(s/def ::cancel-and-hold-at-time #{:cancel-and-hold-at-time :cancel-and-hold})
(s/def ::exponential-ramp-to-value-at-time #{:exponential-ramp-to-value-at-time :exponential-ramp-to-value :exponential-ramp})
(s/def ::linear-ramp-to-value-at-time #{:linear-ramp-to-value-at-time :linear-ramp-to-value :linear-ramp})
(s/def ::set-target-at-time #{:set-target-at-time :set-target})
(s/def ::set-value-at-time #{:set-value-at-time :set-value})
(s/def ::set-value-curve-at-time #{:set-value-curve})

(s/def ::float32-array (partial instance? js/Float32Array))

(s/def ::array-buffer (partial instance? js/ArrayBuffer))

(s/def ::schedule-parameter-value (or (s/tuple ::cancel-scheduled-values ::time)
                                      (s/tuple ::cancel-and-hold-at-time ::time)
                                      (s/tuple ::exponential-ramp-to-value-at-time number? ::time)
                                      (s/tuple ::linear-ramp-to-value-at-time number? ::time)
                                      (s/tuple ::set-target-at-time number? ::time number?)
                                      (s/tuple ::set-value-at-time number? ::time)
                                      (s/tuple ::set-value-curve-at-time ::time ::float32-array)))

(s/def ::parameter-name keyword?)

(s/def ::schedule (s/or :single-schedule ::schedule-parameter-value
                        :multi-schedule (s/coll-of ::schedule-parameter-value)))

(s/def ::parameter-value (s/or :string string?
                               :number number?
                               :none nil?
                               :bool boolean?
                               :schedule ::schedule
                               :array-buffer ::array-buffer))

(s/def ::parameters (s/map-of ::parameter-name ::parameter-value))
(s/def ::create-args (s/or :args vector?))
(s/def ::node (s/tuple ::node-type ::parameters ::create-args))
(s/def ::group (s/map-of ::node-id ::node))

(s/def ::multiple-outputs (s/map-of ::node-id ::parameter-name))

(s/def ::node-to-node (s/tuple ::node-id
                               (s/or :to-node ::node-id
                                     :to-multiple-nodes ::multiple-outputs)))
(s/def ::node-to-output (s/tuple ::node-id ::io-node-id))
(s/def ::input-to-node (s/tuple ::io-node-id ::node-id))

(s/def ::connection (s/or :node-to-node ::node-to-node
                          :node-to-:> ::node-to-output
                          :>-to-node ::input-to-node))

(s/def ::connections (s/every ::connection :distinct true))

(s/def ::patch (s/tuple ::group ::connections))

(defn vca [{:keys [gain] :or {gain 1}}]
  [{:io [:gain {:gain gain}]}
   {:io :>
    :>  :io}])

(gen/generate (s/gen ::patch {::function #(s/gen #{vca})
                              ::float32-array #{(new js/Float32Array)}
                              ::array-buffer #{(new js/ArrayBuffer 8)}}))

(s/exercise ::patch {::function #(s/gen #{vca})
                ::float32-array #{(new js/Float32Array)}
                ::array-buffer #{(new js/ArrayBuffer 8)}})

