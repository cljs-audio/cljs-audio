(ns cljs-audio.envelopes-test
  (:require [clojure.test :refer [deftest is testing]]
            [cljs-audio.envelopes :refer [at-time cancel-at-time! adsr adsr! at-time!]]))

(deftest envelopes-test
  (testing "at-time"
    (is (= (at-time 1 0) [[:set-target-at-time 1 0 0.001]])))
  (testing "cancel-at-time!"
    (is (= (cancel-at-time! 1) [[:cancel-scheduled-values 1]])))
  (testing "cancel-at-time!"
    (is (= (adsr 1 2 3 4 5 1 0) [[:set-target-at-time 0 0 0.001]
                                 [:exponential-ramp-to-value-at-time 1.001 1]
                                 [:exponential-ramp-to-value-at-time 3.0029999999999997 3]
                                 [:exponential-ramp-to-value-at-time 3.0029999999999997 8]
                                 [:exponential-ramp-to-value-at-time 0.001 12]]))))

