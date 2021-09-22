goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__50917){
var vec__50918 = p__50917;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__50935 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__50935__$1 = (((G__50935 instanceof cljs.core.Keyword))?G__50935.fqn:null);
switch (G__50935__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__50942 = (function (){
var seq__50943 = cljs.core.seq(vars__$1);
var chunk__50944 = null;
var count__50945 = (0);
var i__50946 = (0);
while(true){
if((i__50946 < count__50945)){
var v = chunk__50944.cljs$core$IIndexed$_nth$arity$2(null,i__50946);
var temp__5753__auto___51228 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___51228)){
var t_51229 = temp__5753__auto___51228;
var G__50975_51230 = ((function (seq__50943,chunk__50944,count__50945,i__50946,t_51229,temp__5753__auto___51228,v,each_fixture_fn,G__50935,G__50935__$1,env,once_fixtures,each_fixtures,vec__50918,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_51229)));
});})(seq__50943,chunk__50944,count__50945,i__50946,t_51229,temp__5753__auto___51228,v,each_fixture_fn,G__50935,G__50935__$1,env,once_fixtures,each_fixtures,vec__50918,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__50975_51230) : each_fixture_fn.call(null,G__50975_51230));
} else {
}


var G__51238 = seq__50943;
var G__51239 = chunk__50944;
var G__51240 = count__50945;
var G__51241 = (i__50946 + (1));
seq__50943 = G__51238;
chunk__50944 = G__51239;
count__50945 = G__51240;
i__50946 = G__51241;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50943);
if(temp__5753__auto__){
var seq__50943__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50943__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50943__$1);
var G__51247 = cljs.core.chunk_rest(seq__50943__$1);
var G__51248 = c__4638__auto__;
var G__51249 = cljs.core.count(c__4638__auto__);
var G__51250 = (0);
seq__50943 = G__51247;
chunk__50944 = G__51248;
count__50945 = G__51249;
i__50946 = G__51250;
continue;
} else {
var v = cljs.core.first(seq__50943__$1);
var temp__5753__auto___51252__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___51252__$1)){
var t_51253 = temp__5753__auto___51252__$1;
var G__50976_51254 = ((function (seq__50943,chunk__50944,count__50945,i__50946,t_51253,temp__5753__auto___51252__$1,v,seq__50943__$1,temp__5753__auto__,each_fixture_fn,G__50935,G__50935__$1,env,once_fixtures,each_fixtures,vec__50918,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_51253)));
});})(seq__50943,chunk__50944,count__50945,i__50946,t_51253,temp__5753__auto___51252__$1,v,seq__50943__$1,temp__5753__auto__,each_fixture_fn,G__50935,G__50935__$1,env,once_fixtures,each_fixtures,vec__50918,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__50976_51254) : each_fixture_fn.call(null,G__50976_51254));
} else {
}


var G__51265 = cljs.core.next(seq__50943__$1);
var G__51266 = null;
var G__51267 = (0);
var G__51268 = (0);
seq__50943 = G__51265;
chunk__50944 = G__51266;
count__50945 = G__51267;
i__50946 = G__51268;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__50941 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__50941.cljs$core$IFn$_invoke$arity$1 ? fexpr__50941.cljs$core$IFn$_invoke$arity$1(G__50942) : fexpr__50941.call(null,G__50942));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50935__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__50913_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__50913_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__51007 = shadow.test.env.get_test_ns_info(ns);
var map__51007__$1 = cljs.core.__destructure_map(map__51007);
var test_ns = map__51007__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51007__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__51028,vars){
var map__51035 = p__51028;
var map__51035__$1 = cljs.core.__destructure_map(map__51035);
var env = map__51035__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51035__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__51038_51308 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__51040_51309 = null;
var count__51041_51310 = (0);
var i__51042_51311 = (0);
while(true){
if((i__51042_51311 < count__51041_51310)){
var vec__51093_51312 = chunk__51040_51309.cljs$core$IIndexed$_nth$arity$2(null,i__51042_51311);
var test_ns_51313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51093_51312,(0),null);
var ns_info_51314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51093_51312,(1),null);
var map__51096_51320 = ns_info_51314;
var map__51096_51321__$1 = cljs.core.__destructure_map(map__51096_51320);
var fixtures_51322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51096_51321__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___51323 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_51322);
if(cljs.core.truth_(temp__5753__auto___51323)){
var fix_51328 = temp__5753__auto___51323;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51313,fix_51328], 0));
} else {
}

var temp__5753__auto___51329 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_51322);
if(cljs.core.truth_(temp__5753__auto___51329)){
var fix_51330 = temp__5753__auto___51329;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51313,fix_51330], 0));
} else {
}


var G__51335 = seq__51038_51308;
var G__51336 = chunk__51040_51309;
var G__51337 = count__51041_51310;
var G__51338 = (i__51042_51311 + (1));
seq__51038_51308 = G__51335;
chunk__51040_51309 = G__51336;
count__51041_51310 = G__51337;
i__51042_51311 = G__51338;
continue;
} else {
var temp__5753__auto___51344 = cljs.core.seq(seq__51038_51308);
if(temp__5753__auto___51344){
var seq__51038_51345__$1 = temp__5753__auto___51344;
if(cljs.core.chunked_seq_QMARK_(seq__51038_51345__$1)){
var c__4638__auto___51347 = cljs.core.chunk_first(seq__51038_51345__$1);
var G__51349 = cljs.core.chunk_rest(seq__51038_51345__$1);
var G__51350 = c__4638__auto___51347;
var G__51351 = cljs.core.count(c__4638__auto___51347);
var G__51352 = (0);
seq__51038_51308 = G__51349;
chunk__51040_51309 = G__51350;
count__51041_51310 = G__51351;
i__51042_51311 = G__51352;
continue;
} else {
var vec__51111_51357 = cljs.core.first(seq__51038_51345__$1);
var test_ns_51358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51111_51357,(0),null);
var ns_info_51359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51111_51357,(1),null);
var map__51116_51360 = ns_info_51359;
var map__51116_51361__$1 = cljs.core.__destructure_map(map__51116_51360);
var fixtures_51362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116_51361__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___51363__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_51362);
if(cljs.core.truth_(temp__5753__auto___51363__$1)){
var fix_51364 = temp__5753__auto___51363__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51358,fix_51364], 0));
} else {
}

var temp__5753__auto___51367__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_51362);
if(cljs.core.truth_(temp__5753__auto___51367__$1)){
var fix_51368 = temp__5753__auto___51367__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51358,fix_51368], 0));
} else {
}


var G__51370 = cljs.core.next(seq__51038_51345__$1);
var G__51371 = null;
var G__51372 = (0);
var G__51373 = (0);
seq__51038_51308 = G__51370;
chunk__51040_51309 = G__51371;
count__51041_51310 = G__51372;
i__51042_51311 = G__51373;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51022_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__51022_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__51127 = cljs.test.get_current_env();
var map__51127__$1 = cljs.core.__destructure_map(map__51127);
var env = map__51127__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51127__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51127__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__51135 = arguments.length;
switch (G__51135) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__51148 = arguments.length;
switch (G__51148) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__51167 = shadow.test.env.get_test_ns_info(ns);
var map__51167__$1 = cljs.core.__destructure_map(map__51167);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51167__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__51174 = arguments.length;
switch (G__51174) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51170_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__51170_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__51201 = arguments.length;
switch (G__51201) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51194_SHARP_){
var or__4212__auto__ = (re == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51194_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
