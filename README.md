# cljs-audio
[![CircleCI](https://circleci.com/gh/cljs-audio/cljs-audio/tree/master.svg?style=svg)](https://circleci.com/gh/cljs-audio/cljs-audio/tree/master)

Convenient Web Audio for ClojureScript 
## Rationale
It's tough to manage a complex audio graph with Web Audio API due to its imperative style.
This library aims to provide a declarative wrapper around it, akin to some popular libraries providing wrappers around imperative DOM manipulations.
The core of the library tries to be as minimal as possible and isolated from Web Audio intricacies. Hopefully, other backends would be possible in the future.

### Principles

- Declarative over imperative.
- Convenience over purity.
- Explicitness.
- Unambiguity. 



## Code Example
```clojure
;; Top-level audio environment
[
  ;; nodes and patches
  {:vca [:gain {}]}  ;; single gain node named :vca
  ;; connections
  #{[:>   :vca]      ;; input to :vca
    [:vca :>]        ;; :vca to output
  }
]
```
