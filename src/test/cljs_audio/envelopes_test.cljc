(ns cljs-audio.envelopes-test
  (:require [clojure.test :refer [deftest is testing]]
            [cljs-audio.envelopes :refer [at-time cancel-at-time! adsr adsr! at-time!]]))

(deftest envelopes-test
  (testing "at-time"
    (is (= (at-time 1 0) [[:set-target-at-time 1.0001 0 0.0001]])))
  (testing "cancel-at-time!"
    (is (= (cancel-at-time! 1) [[:cancel-and-hold-at-time 1]])))
  (testing "adsr"
    (is (= (adsr 1 2 3 4 5 1 0) [[:set-target-at-time 0.0001 0 0.0001]
                                 [:exponential-ramp-to-value-at-time 1.0001 1]
                                 [:exponential-ramp-to-value-at-time 3.0001 3]
                                 [:exponential-ramp-to-value-at-time 3.0001 8]
                                 [:exponential-ramp-to-value-at-time 0.0001 12]] ))))

