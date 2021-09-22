(ns cljs-audio.updates-test
  (:require
    [clojure.walk :refer [postwalk postwalk-replace]]
    [cljs.test :refer-macros [deftest is testing]]
    [cljs-audio.modules :as m]
    [cljs-audio.envelopes :refer [adsr! at-time!]]
    [cljs-audio.modules :as m]
    [cljs-audio.test-utils :as tu]
    [cljs-audio.webaudio-interpreter :refer [sort-updates-by-priority]]
    [cljs-audio.updates :as u :refer [path-type resolve-to resolve-from patches->commands ->patch-ast make-updates edit->update update->commands]]))

(def context #js {:createOscillator (fn [] #js {:connect   (fn [] nil)
                                                :frequency {:value 220}
                                                :detune    {:value 0}
                                                :type      "triangle"})
                  :createGain       (fn [] #js {:connect (fn [] nil) :gain {:value 1}})})

(def simple-voice-instance (m/simple-voice {}))
(def empty-patch [{} {}])
(def vca-instance (m/vca {}))
(def delayed-waveforms-instance (tu/delayed-waveforms {:frequency 220 :gain 0.5}))

(tu/delayed-waveforms {:frequency 220 :gain 0.5})

(defn run-update->commands [[a b]] (patches->commands a b))

(->patch-ast [{:osc [:oscillator {}]
               :fx  (m/delay-fx {})}
              #{[:fx :>]
                [:osc :fx]}])

(deftest make-updates-test
  (testing "connect through nested module"
    (is (= (run-update->commands [[{:osc [:oscillator {}]}
                                   #{}]
                                  [{:osc [:oscillator {}]
                                    :fx  (m/delay-fx {})}
                                   #{[:fx :>]
                                     [:osc :fx]}]])
           [[:add-node [:group :fx :group :cljs-audio.updates/in] :gain []]
            [:connect [:group :fx :group :cljs-audio.updates/in] [:group :fx :group :delay]]
            [:add-node [:group :fx :group :cljs-audio.updates/out] :gain []]
            [:connect [:group :fx :group :vca] [:group :fx :group :cljs-audio.updates/out]]
            [:add-node [:group :fx :group :delay] :delay [5]]
            [:set [:group :fx :group :delay] :delay-time 0.5]
            [:connect [:group :fx :group :delay] [:group :fx :group :vca]]
            [:add-node [:group :fx :group :vca] :gain []]
            [:set [:group :fx :group :vca] :gain 1]
            [:connect [:group :osc] [:group :fx :group :cljs-audio.updates/in]]
            [:connect [:group :fx :group :cljs-audio.updates/out] [:ctx]]])))
  (testing "add a node with param"
    (is (= (run-update->commands [[{:osc [:oscillator {} [1 2]]}
                                   {:osc :vca}]
                                  [{:osc [:oscillator {} [1 2]]
                                    :vca [:gain {:gain 0.5}]}
                                   {:osc :vca}]])
           [[:add-node [:group :vca] :gain []]
            [:set [:group :vca] :gain 0.5]
            [:connect [:group :osc] [:group :vca]]])))
  (testing "add a patch with param"
    (is (= (run-update->commands [[{:osc [:oscillator {} [1 2]]}
                                   #{[:osc :vca]
                                     [:vca :>]}]
                                  [{:osc [:oscillator {} [1 2]]
                                    :vca [{:io [:gain {:gain 1}]}
                                          #{[:io :>]}]}
                                   #{[:osc :vca]
                                     [:vca :>]}]])
           [[:add-node [:group :vca :group :cljs-audio.updates/in] :gain []]
            [:add-node [:group :vca :group :cljs-audio.updates/out] :gain []]
            [:connect [:group :vca :group :io] [:group :vca :group :cljs-audio.updates/out]]
            [:add-node [:group :vca :group :io] :gain []]
            [:set [:group :vca :group :io] :gain 1]
            ])))
  (testing "add simple synth"
    (is (= (run-update->commands [empty-patch vca-instance])
           [[:add-node [:group :io] :gain []]
            [:set [:group :io] :gain 1]
            [:connect nil [:group :io]]
            [:connect [:group :io] [:ctx]]])))
  (testing "remove simple synth"
    (is (= (run-update->commands [vca-instance empty-patch])
           [[:disconnect [:group :io]]
            [:remove-node [:group :io]]
            [:disconnect nil [:group :io]]
            [:disconnect [:group :io] [:ctx]]])))
  (testing "change simple synth parameter"
    (is (= (run-update->commands [vca-instance (m/vca {:gain 0.1})])
           [[:set [:group :io] :gain 0.1]])))
  (testing "add compound synth"
    (is (= (run-update->commands [empty-patch simple-voice-instance])
           [[:add-node [:group :osc] :oscillator [1 2]]
            [:set [:group :osc] :frequency 220]
            [:set [:group :osc] :detune 0]
            [:set [:group :osc] :type "triangle"]
            [:connect [:group :osc] [:group :vca]]
            [:add-node [:group :vca] :gain []]
            [:set [:group :vca] :gain 1]
            [:connect [:group :vca] [:ctx]]])))
  (testing "remove compound synth"
    (is (= (run-update->commands [simple-voice-instance empty-patch])
           [[:disconnect [:group :osc]]
            [:remove-node [:group :osc]]
            [:disconnect [:group :vca]]
            [:remove-node [:group :vca]]
            [:disconnect [:group :osc] [:group :vca]]
            [:disconnect [:group :vca] [:ctx]]])))
  (testing "change compound synth parameter"
    (is (= (run-update->commands [simple-voice-instance (m/simple-voice {:frequency 110 :detune 10})])
           [[:set [:group :osc] :frequency 110]
            [:set [:group :osc] :detune 10]])))
  (testing "add complex synth"
    (is (= (run-update->commands [empty-patch delayed-waveforms-instance])
           [[:add-node [:group :oscs :group :cljs-audio.updates/in] :gain []]
            [:add-node [:group :oscs :group :cljs-audio.updates/out] :gain []]
            [:connect [:group :oscs :group :vca :group :cljs-audio.updates/out] [:group :oscs :group :cljs-audio.updates/out]]
            [:add-node [:group :oscs :group :1] :oscillator []]
            [:set [:group :oscs :group :1] :frequency 220]
            [:set [:group :oscs :group :1] :type "sine"]
            [:connect [:group :oscs :group :1] [:group :oscs :group :mix]]
            [:add-node [:group :oscs :group :2] :oscillator []]
            [:set [:group :oscs :group :2] :frequency 220]
            [:set [:group :oscs :group :2] :type "triangle"]
            [:connect [:group :oscs :group :2] [:group :oscs :group :mix]]
            [:add-node [:group :oscs :group :3] :oscillator []]
            [:set [:group :oscs :group :3] :frequency 220]
            [:set [:group :oscs :group :3] :type "square"]
            [:connect [:group :oscs :group :3] [:group :oscs :group :mix]]
            [:add-node [:group :oscs :group :mix] :gain []]
            [:connect [:group :oscs :group :mix] [:group :oscs :group :vca :group :cljs-audio.updates/in]]
            [:add-node [:group :oscs :group :vca :group :cljs-audio.updates/in] :gain []]
            [:connect [:group :oscs :group :vca :group :cljs-audio.updates/in] [:group :oscs :group :vca :group :io]]
            [:add-node [:group :oscs :group :vca :group :cljs-audio.updates/out] :gain []]
            [:connect [:group :oscs :group :vca :group :io] [:group :oscs :group :vca :group :cljs-audio.updates/out]]
            [:add-node [:group :oscs :group :vca :group :io] :gain []]
            [:set [:group :oscs :group :vca :group :io] :gain 0.5]
            [:add-node [:group :fx :group :cljs-audio.updates/in] :gain []]
            [:connect [:group :fx :group :cljs-audio.updates/in] [:group :fx :group :io]]
            [:add-node [:group :fx :group :cljs-audio.updates/out] :gain []]
            [:connect [:group :fx :group :io] [:group :fx :group :cljs-audio.updates/out]]
            [:add-node [:group :fx :group :io] :delay [5]]
            [:set [:group :fx :group :io] :time 0.5]
            [:connect [:group :fx :group :cljs-audio.updates/out] [:ctx]]
            [:connect [:group :oscs :group :cljs-audio.updates/out] [:group :fx :group :cljs-audio.updates/in]]])))
  (testing "remove complex synth"
    (is (= (run-update->commands [delayed-waveforms-instance empty-patch])
           [[:disconnect [:group :oscs :group :cljs-audio.updates/in]]
            [:remove-node [:group :oscs :group :cljs-audio.updates/in]]
            [:disconnect [:group :oscs :group :cljs-audio.updates/out]]
            [:remove-node [:group :oscs :group :cljs-audio.updates/out]]
            [:disconnect [:group :oscs :group :1]]
            [:remove-node [:group :oscs :group :1]]
            [:disconnect [:group :oscs :group :2]]
            [:remove-node [:group :oscs :group :2]]
            [:disconnect [:group :oscs :group :3]]
            [:remove-node [:group :oscs :group :3]]
            [:disconnect [:group :oscs :group :mix]]
            [:remove-node [:group :oscs :group :mix]]
            [:disconnect [:group :oscs :group :vca :group :cljs-audio.updates/in]]
            [:remove-node [:group :oscs :group :vca :group :cljs-audio.updates/in]]
            [:disconnect [:group :oscs :group :vca :group :cljs-audio.updates/out]]
            [:remove-node [:group :oscs :group :vca :group :cljs-audio.updates/out]]
            [:disconnect [:group :oscs :group :vca :group :io]]
            [:remove-node [:group :oscs :group :vca :group :io]]
            [:disconnect [:group :fx :group :cljs-audio.updates/in]]
            [:remove-node [:group :fx :group :cljs-audio.updates/in]]
            [:disconnect [:group :fx :group :cljs-audio.updates/out]]
            [:remove-node [:group :fx :group :cljs-audio.updates/out]]
            [:disconnect [:group :fx :group :io]]
            [:remove-node [:group :fx :group :io]]
            [:disconnect [:group :fx :group :cljs-audio.updates/out] [:ctx]]
            [:disconnect [:group :oscs :group :cljs-audio.updates/out] [:group :fx :group :cljs-audio.updates/in]]]
           )))
  (testing "change complex synth parameters"
    (is (= (run-update->commands [delayed-waveforms-instance (tu/delayed-waveforms {:frequency 880 :time 3 :gain 0.5})])
           [[:set [:group :oscs :group :1] :frequency 880]
            [:set [:group :oscs :group :2] :frequency 880]
            [:set [:group :oscs :group :3] :frequency 880]])))
  (testing "add mixed synth"
    (is (= (run-update->commands [empty-patch [{:waveforms (m/simple-voice {:frequency 666})
                                                :osc       [:oscillator {:frequency 220
                                                                         :detune    1
                                                                         :type      "triangle"} [1 2]]
                                                :vca3      [:gain {:gain 0.5}]}
                                               #{[:waveforms :vca3]
                                                 [:osc :waveforms]
                                                 [:vca3 :>]}]])
           [[:add-node [:group :waveforms :group :cljs-audio.updates/in] :gain []]
            [:add-node [:group :waveforms :group :cljs-audio.updates/out] :gain []]
            [:connect [:group :waveforms :group :vca] [:group :waveforms :group :cljs-audio.updates/out]]
            [:add-node [:group :waveforms :group :osc] :oscillator [1 2]]
            [:set [:group :waveforms :group :osc] :frequency 666]
            [:set [:group :waveforms :group :osc] :detune 0]
            [:set [:group :waveforms :group :osc] :type "triangle"]
            [:connect [:group :waveforms :group :osc] [:group :waveforms :group :vca]]
            [:add-node [:group :waveforms :group :vca] :gain []]
            [:set [:group :waveforms :group :vca] :gain 1]
            [:add-node [:group :osc] :oscillator [1 2]]
            [:set [:group :osc] :frequency 220]
            [:set [:group :osc] :detune 1]
            [:set [:group :osc] :type "triangle"]
            [:connect [:group :osc] [:group :waveforms :group :cljs-audio.updates/in]]
            [:add-node [:group :vca3] :gain []]
            [:set [:group :vca3] :gain 0.5]
            [:connect [:group :vca3] [:ctx]]
            [:connect [:group :waveforms :group :cljs-audio.updates/out] [:group :vca3]]]
           ))))

(def add-connection-simple
  [[{:osc [:osc]
     :vca [:osc]}
    {:vca :>}]
   [{:osc [:osc]
     :vca [:osc]}
    {:osc :vca
     :vca :>}]])

(def remove-connection-simple
  [[{:osc [:osc]
     :vca [:osc]}
    {:osc :vca
     :vca :>}]
   [{:osc [:osc]
     :vca [:osc]}
    {:vca :>}]])

(def add-output-connection-nested [[{:waveforms [{:oscs [{
                                                          :out [{:io [:gain {:gain nil}]}
                                                                {:> :io}]}
                                                         {:out :>}],
                                                  }
                                                 {:oscs :>}]
                                     :vca       [:gain {}]
                                     }
                                    {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]
                                   [{:waveforms [{:oscs [{
                                                          :out [{:io [:gain {:gain nil}]}
                                                                {:io :>,
                                                                 :>  :io}]}
                                                         {:out :>}],
                                                  }
                                                 {:oscs :>}]
                                     :vca       [:gain {}]
                                     }
                                    {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]])
(def remove-output-connection-nested [[{:waveforms [{:oscs [{
                                                             :out [{:io [:gain {:gain nil}]} {:io :>, :> :io}]}
                                                            {:out :>}],
                                                     }
                                                    #{[:oscs :>]
                                                      [:> :oscs]}]
                                        :vca       [:gain {}]
                                        }
                                       {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]
                                      [{:waveforms [{:oscs [{
                                                             :out [{:io [:gain {:gain nil}]} {:> :io}]}
                                                            {:out :>}],
                                                     }
                                                    #{[:oscs :>]
                                                      [:> :oscs]}]
                                        :vca       [:gain {}]
                                        }
                                       {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]])

(def add-input-connection-nested [[{:waveforms [{:oscs [{
                                                         :out [{:io [:gain {:gain nil}]}
                                                               {:io :>}]}
                                                        {:out :>
                                                         :>   :out}],
                                                 }
                                                #{[:oscs :>]
                                                  [:> :oscs]}]
                                    :vca       [:gain {}]
                                    :simple    [:gain {}]
                                    }
                                   {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]
                                  [{:waveforms [{:oscs [{
                                                         :out [{:io [:gain {:gain nil}]}
                                                               {:io :>
                                                                :>  :io}]}
                                                        {:out :>
                                                         :>   :out}],
                                                 }
                                                {:oscs :>
                                                 :>    :oscs}]
                                    :vca       [:gain {}]
                                    :simple    [:gain {}]
                                    }
                                   #{
                                     [:waveforms :vca]
                                     [:simple :waveforms]
                                     [:osc :vca]
                                     [:vca :>]}]])

(def reconnect-simple
  [[{:osc  [:osc]
     :vca  [:osc]
     :osc2 [:osc]
     :vca2 [:osc]}
    {:osc :vca
     :vca :>}]
   [{:osc  [:osc]
     :vca  [:osc]
     :osc2 [:osc]
     :vca2 [:osc]}
    {:osc2 :vca2
     :vca  :>}]])

(def remove-all-connections
  [[{:osc [:osc]
     :vca [:osc]}
    {:osc :vca
     :vca :>}]
   [{:osc [:osc]
     :vca [:osc]}
    {}]])

(def replace-all-connections
  [[{:a   [:osc]
     :b   [:osc]
     :osc [:osc]
     :vca [:osc]}
    {:a :b}]
   [{:a   [:osc]
     :b   [:osc]
     :osc [:osc]
     :vca [:osc]}
    {:osc :vca
     :vca :>}]])

(def add-remove-all-connections
  [[{:osc [:osc]
     :vca [:osc]
     :a   [:osc]
     :b   [:osc]}
    {:a :b}]
   [{:osc [:osc]
     :vca [:osc]
     :a   [:osc]
     :b   [:osc]}
    {:osc :vca
     :vca :>}]])

(def replace-all-connections-nested [[{:waveforms [{:oscs [{
                                                            :out [{:io [:gain {:gain nil}]} {:io :>
                                                                                             :>  :io}]}
                                                           {:out :>
                                                            :>   :out}],
                                                    }
                                                   {}]
                                       :vca       [:gain {}]
                                       }
                                      {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]
                                     [{:waveforms [{:oscs [{
                                                            :out [{:io [:gain {:gain nil}]} {:io :>
                                                                                             :>  :io}]}
                                                           {:out :>
                                                            :>   :out}],
                                                    }
                                                   {:oscs :>
                                                    :>    :oscs}]
                                       :vca       [:gain {}]
                                       }
                                      {:waveforms :vca, :simple :waveforms, :osc :vca, :vca :>}]])

(def connect-to-param
  [[{:osc  [:osc]
     :osc2 [:osc]
     :vca  [:osc]}
    {}]
   [{:osc  [:osc]
     :osc2 [:osc]
     :vca  [:osc]}
    {:osc2 [:vca :gain]}]])

(def node-connect
  [{}
   #{[:osc :vca] [:osc :vca :gain]}])

(deftest update->commands-test
  (testing ":add-connection simple"
    (is (= (run-update->commands add-connection-simple) [[:connect [:group :osc] [:group :vca]]])))
  #_(testing ":add-connection output nested"
      (is (= (run-update->commands add-output-connection-nested)
             [[:connect
               [:group :waveforms :group :oscs :group :out :group :io]
               [:group :waveforms :group :oscs :group :out :group :cljs-audio.updates/out]]])))
  #_(testing ":remove-connection output nested"
      (is (= (run-update->commands remove-output-connection-nested)
             [[:disconnect
               [:group :waveforms :group :oscs :group :out :group :io]
               [:group :waveforms :group :oscs :group :out :group :cljs-audio.updates/out]]])))
  (testing ":remove-connection simple"
    (is (= (run-update->commands remove-connection-simple) [[:disconnect [:group :osc] [:group :vca]]])))
  #_(testing ":add-connection input nested"
      (is (= (run-update->commands add-input-connection-nested)
             [[:connect
               [:group :waveforms :group :oscs :group :out :group :cljs-audio.updates/out]
               [:group :waveforms :group :oscs :group :out :group :io]]])))
  (testing ":replace-connection simple"
    (is (= (run-update->commands reconnect-simple) [[:disconnect [:group :osc] [:group :vca]]
                                                    [:connect [:group :osc2] [:group :vca2]]])))
  (testing ":remove-all-connections"
    (is (= (run-update->commands remove-all-connections) [[:disconnect [:group :osc] [:group :vca]]
                                                          [:disconnect [:group :vca] [:ctx]]])))
  (testing ":replace-all-connections"
    (is (= (run-update->commands replace-all-connections) [[:disconnect [:group :a] [:group :b]]
                                                           [:connect [:group :osc] [:group :vca]]
                                                           [:connect [:group :vca] [:ctx]]])))
  #_(testing ":replace-all-connections nested"
      (is (= (run-update->commands replace-all-connections-nested)
             [[:connect [:group :waveforms :group :oscs :group :out :group :io] [:group :waveforms :group :cljs-audio.updates/out]]
              [:connect [:group :waveforms :group :cljs-audio.updates/out] [:group :waveforms :group :oscs :group :out :group :io]]])))
  (testing ":add-connection to parameter"
    (is (= (run-update->commands connect-to-param) [[:connect-parameter [:group :osc2] [:group :vca] :gain]]))))


(def nested-patch (->patch-ast [{:osc [:oscillator {} [1 2]]
                                 :vca [{:io [:gain {:gain 1}]}
                                       #{[:io :>]}]}
                                {:osc :vca
                                 :vca :>}]))

(deftest resolve-from-test
  (testing ":node"
    (is (= (resolve-from [:group :osc] nested-patch) [:group :osc])))
  (testing ":patch"
    (is (= (resolve-from [:group :vca] nested-patch) [:group :vca :group :cljs-audio.updates/out])))
  (testing "top level :>"
    (is (= (resolve-from [:group :>] nested-patch)) [:ctx]))
  (testing "non-existent thing resolves to nil"
    (is (= (resolve-from [:group :abc] nested-patch) nil)))
  (testing "non-existent nested thing resolves to nil"
    (is (= (resolve-from [:group :vca :group :aaa] nested-patch) nil)))
  (testing "non-existent thing resolves to nil"
    (is (= (resolve-from [:group :simple] replace-all-connections-nested) nil))))

(def nested-patch-to (->patch-ast [{:osc [:oscillator {} [1 2]]
                                    :vca [{:io [:gain {:gain 1}]}
                                          #{[:> :io]}]}
                                   {:vca :osc}]))

(def nested-patch-to-parameter (->patch-ast [{:osc [:oscillator {} [1 2]]
                                              :vca [{:io [:gain {:gain 1}]}
                                                    #{[:> [:io :gain]]}]}
                                             {:vca :osc}]))

(deftest resolve-to-test
  (testing ":node"
    (is (= (resolve-to [:group :osc] nested-patch-to) [:group :osc])))
  (testing ":parameter"
    (is (= (resolve-to [:group :vca :group [:io :gain]] nested-patch-to) [:group :vca :group [:io :gain]])))
  (testing ":patch"
    (is (= (resolve-to [:group :vca] nested-patch-to) [:group :vca :group :cljs-audio.updates/in])))
  (testing "top level :>"
    (is (= (resolve-to [:group :cljs-audio.updates/out] nested-patch-to) [:ctx])))
  (testing "non-existent thing resolves to nil"
    (is (= (resolve-to [:group :abc] nested-patch-to) nil)))
  (testing "non-existent nested thing resolves to nil"
    (is (= (resolve-to [:group :vca :group :aaa] nested-patch) nil)))
  (testing "shouldn't resolve to []"
    (is (not (= (resolve-to [:group :fx]
                            {:group       {:osc {:type :oscillator, :parameters {}, :create-args nil},
                                           :fx  {:group       {:fx {:type :delay, :parameters {:delay-time 0.5}, :create-args [5]}},
                                                 :connections #{[:> :fx] [:fx :>]}}},
                             :connections #{[:osc :fx] [:fx :>]}})
                []))))
  (testing "shouldn't resolve to nil"
    (is (= (resolve-to [:group :cljs-audio.updates/out]
                       {:group       {:osc {:type :oscillator, :parameters {}, :create-args nil},
                                      :fx  {:group       {:fx {:type :delay, :parameters {:delay-time 0.5}, :create-args [5]}},
                                            :connections #{[:cljs-audio.updates/in :fx]
                                                           [:fx :cljs-audio.updates/out]}}},
                        :connections #{[:osc :fx] [:fx :cljs-audio.updates/out]}})
           [:ctx]))))

#_(path-type [:group :cljs-audio.updates/out]
             {:group {:osc {:type :oscillator, :parameters {}, :create-args nil}, :fx {:group       {:fx {:type :delay, :parameters {:delay-time 0.5}, :create-args [5]}},
                                                                                       :connections #{[:cljs-audio.updates/in :fx] [:fx :cljs-audio.updates/out]}}}, :connections #{[:osc :fx] [:fx :cljs-audio.updates/out]}})



#_(run-update->commands [empty-patch [{:io [:gain {:gain 1}]}
                                      #{[:io :>]
                                        [:> :io]}]])

#_(run-update->commands [empty-patch delayed-waveforms-instance])

(defn graph [{:keys [frequency]} time]
  [{
    :voice (m/simple-voice {:frequency (at-time! frequency
                                                 time)
                            :gain      (adsr! 0.03 0.15 0.6 0.3 0.2 1 time)
                            :type      "sawtooth"})
    :fx    (m/multi-tap-delay {:times (mapv m/at-start [0.1 0.2 0.4 0.8]) :gains (mapv m/at-start [0.8 0.5 0.25 0.1])})
    :out   [:gain {:gain 1}]
    }
   #{#_[:voice :out]
     [:voice :fx]
     [:fx :out]
     [:out :>]}])

(def super-complex-synth [{:voice [{:osc  [:oscillator
                                           {:frequency [[:cancel-scheduled-values 1]
                                                        [:set-value-at-time 220 1]
                                                        [:linear-ramp-to-value-at-time 440 2]],
                                            :detune    0,
                                            :type      "sawtooth"}
                                           [1 2]],
                                    :vca2 [:gain
                                           {:gain [[:cancel-scheduled-values 1]
                                                   [:set-value-at-time 0 1]
                                                   [:linear-ramp-to-value-at-time 1 1.03]
                                                   [:linear-ramp-to-value-at-time 0.6 1.18]
                                                   [:linear-ramp-to-value-at-time 0.6 1.38]
                                                   [:linear-ramp-to-value-at-time 0 1.68]]}]}
                                   #{[:vca2 :>] [:> :osc] [:osc :vca2]}],
                           :fx    [{:out [:gain {}],
                                    :in  [:gain {}],
                                    :0   [{:fx [:delay {:delay-time [:set-value-at-time 0.1 0]} [5]], :out [:gain {:gain [:set-value-at-time 0.8 0]}]}
                                          {:> :fx, :fx :out, :out :>}],
                                    :1   [{:fx [:delay {:delay-time [:set-value-at-time 0.2 0]} [5]], :out [:gain {:gain [:set-value-at-time 0.5 0]}]}
                                          {:> :fx, :fx :out, :out :>}],
                                    :2   [{:fx  [:delay {:delay-time [:set-value-at-time 0.4 0]} [5]],
                                           :out [:gain {:gain [:set-value-at-time 0.25 0]}]}
                                          {:> :fx, :fx :out, :out :>}],
                                    :3   [{:fx [:delay {:delay-time [:set-value-at-time 0.8 0]} [5]], :out [:gain {:gain [:set-value-at-time 0.1 0]}]}
                                          {:> :fx, :fx :out, :out :>}]}
                                   #{[:in :0] [:in :out] [:> :in] [:out :>] [:in :1] [:in :3] [:in :2]}],
                           :out   [:gain {:gain 1}]}
                          #{[:voice :fx] [:fx :out] [:out :>]}]
  )

(run-update->commands [empty-patch super-complex-synth])

(defn one-shot-sample [{:keys [buffer start-time rate] :or {buffer nil start-time nil rate 1}}]
  (println "start-time" start-time)
  [{:player [:buffer-source (merge {:buffer buffer :playback-rate rate} (when start-time {:start start-time}))]}
   #{[:player :>]}])

(defn top-level []
  (let [kick nil
        time 0
        bpm 120
        double-kick nil
        ch nil
        ir nil]
    [{
      :comp          [:dynamics-compressor {:threshold -50 :knee 0 :ratio 20 :attack 0.005 :release 0.050}]
      :sampled-kick  (one-shot-sample {:buffer kick :start-time time})
      :sampled-kick2 [:buffer-source {:playback-rate 0.7 :buffer kick :start (if double-kick (+ time (/ 60 (* 4 bpm))) 0)}]
      :sampled-ch    [:buffer-source {:buffer ch :start (+ time (/ 60 (* 2 bpm)))}]
      :reverb        [:convolver {:buffer ir}]
      }
     #{
       [:sampled-ch :reverb]
       [:sampled-ch :comp]
       [:sampled-kick :comp]
       [:sampled-kick2 :comp]
       [:reverb :>]
       [:comp :>]
       }]))

(sort-updates-by-priority
  (run-update->commands [empty-patch (top-level)]))