(ns cljs-audio.scheduling-test
  (:require [clojure.test :refer [deftest is testing]]
            [cljs-audio.envelopes :refer [at-time cancel-at-time! adsr adsr! at-time!]]
            [cljs-audio.scheduling :as s :refer [schedule-parameters]]))

(deftest schedule-parameters-test
  #_(testing "schedule-parameters with nothing"
      (is (= (schedule-parameters {} [] 0) [])))
  (testing "schedule one parameter"
    (is (= (schedule-parameters {:gain at-time!} [{:gain 1 ::s/time 0}])
           {:gain (at-time! 1 0)})))
  (testing "schedule two parameters"
    (is (= (schedule-parameters {:gain at-time! :frequency at-time!} [{:gain 1 :frequency 220 ::s/time 0}])
           {:gain (at-time! 1 0) :frequency (at-time! 220 0)})))
  (testing "schedule two parameters with multiple values"
    (is (= (schedule-parameters {:gain at-time!
                                 :frequency at-time!}
                                [{:gain 1 :frequency 220 ::s/time 0}
                                 {:gain 0 :frequency 440 ::s/time 1}])
           {:gain (into (at-time! 1 0)
                        (at-time! 0 1)) :frequency (into (at-time! 220 0)
                                                         (at-time! 440 1))}))))

(schedule-parameters {:frequency (partial adsr! 0.1 0.15 0.6 0.3 0.2)
                      :gain      at-time!}
                     [{:frequency 220 :gain 1 ::s/time 0}])

(schedule-parameters {:gain at-time!} [{:gain 1 ::s/time 0}])


