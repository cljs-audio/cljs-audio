goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4611__auto__ = (function shadow$test$env$get_test_vars_$_iter__47157(s__47158){
return (new cljs.core.LazySeq(null,(function (){
var s__47158__$1 = s__47158;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47158__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__47167 = cljs.core.first(xs__6308__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47167,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47167,(1),null);
var iterys__4607__auto__ = ((function (s__47158__$1,vec__47167,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function shadow$test$env$get_test_vars_$_iter__47157_$_iter__47159(s__47160){
return (new cljs.core.LazySeq(null,((function (s__47158__$1,vec__47167,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__47160__$1 = s__47160;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47160__$1);
if(temp__5753__auto____$1){
var s__47160__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47160__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47160__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47162 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47161 = (0);
while(true){
if((i__47161 < size__4610__auto__)){
var var$ = cljs.core._nth(c__4609__auto__,i__47161);
cljs.core.chunk_append(b__47162,var$);

var G__47265 = (i__47161 + (1));
i__47161 = G__47265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47162),shadow$test$env$get_test_vars_$_iter__47157_$_iter__47159(cljs.core.chunk_rest(s__47160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47162),null);
}
} else {
var var$ = cljs.core.first(s__47160__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__47157_$_iter__47159(cljs.core.rest(s__47160__$2)));
}
} else {
return null;
}
break;
}
});})(s__47158__$1,vec__47167,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__47158__$1,vec__47167,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$test$env$get_test_vars_$_iter__47157(cljs.core.rest(s__47158__$1)));
} else {
var G__47270 = cljs.core.rest(s__47158__$1);
s__47158__$1 = G__47270;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4611__auto__ = (function shadow$test$env$get_test_count_$_iter__47195(s__47196){
return (new cljs.core.LazySeq(null,(function (){
var s__47196__$1 = s__47196;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47196__$1);
if(temp__5753__auto__){
var s__47196__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47196__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47196__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47198 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47197 = (0);
while(true){
if((i__47197 < size__4610__auto__)){
var map__47205 = cljs.core._nth(c__4609__auto__,i__47197);
var map__47205__$1 = cljs.core.__destructure_map(map__47205);
var test_ns = map__47205__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__47198,cljs.core.count(vars));

var G__47274 = (i__47197 + (1));
i__47197 = G__47274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47198),shadow$test$env$get_test_count_$_iter__47195(cljs.core.chunk_rest(s__47196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47198),null);
}
} else {
var map__47215 = cljs.core.first(s__47196__$2);
var map__47215__$1 = cljs.core.__destructure_map(map__47215);
var test_ns = map__47215__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__47195(cljs.core.rest(s__47196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
