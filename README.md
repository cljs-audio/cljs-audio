# cljs-audio
[![CircleCI](https://circleci.com/gh/cljs-audio/cljs-audio/tree/master.svg?style=svg)](https://circleci.com/gh/cljs-audio/cljs-audio/tree/master)

Convenient Web Audio for ClojureScript 

```[com.awayfrompeople/cljs-audio "0.1.7"]```

```com.awayfrompeople/cljs-audio {:mvn/version "0.1.7"}```

## Code Example

https://github.com/cljs-audio/cljs-audio/blob/master/src/example/cljs_audio/app.cljs

## Example Demo
https://zen-fermat-f79298.netlify.app/

## Rationale
It's tough to manage a complex audio graph with Web Audio API due to its imperative style.
This library aims to provide a declarative wrapper around it, akin to some popular libraries providing wrappers around imperative DOM manipulations.
The core of the library tries to be as minimal as possible and isolated from Web Audio intricacies. Hopefully, other backends would be possible in the future.

### Principles

- Declarative over imperative.
- Convenience over purity.
- Explicitness.
- Unambiguity. 

Also relevant [Dieter Rams' principles of good design applied to software engineering](https://github.com/zedr/dieter-rams-10-applied-to-software).
