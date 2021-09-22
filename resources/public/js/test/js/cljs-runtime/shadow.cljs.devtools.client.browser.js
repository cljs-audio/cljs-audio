goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___53106 = arguments.length;
var i__4819__auto___53107 = (0);
while(true){
if((i__4819__auto___53107 < len__4818__auto___53106)){
args__4824__auto__.push((arguments[i__4819__auto___53107]));

var G__53108 = (i__4819__auto___53107 + (1));
i__4819__auto___53107 = G__53108;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52878){
var G__52879 = cljs.core.first(seq52878);
var seq52878__$1 = cljs.core.next(seq52878);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52879,seq52878__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52885 = cljs.core.seq(sources);
var chunk__52886 = null;
var count__52887 = (0);
var i__52888 = (0);
while(true){
if((i__52888 < count__52887)){
var map__52899 = chunk__52886.cljs$core$IIndexed$_nth$arity$2(null,i__52888);
var map__52899__$1 = cljs.core.__destructure_map(map__52899);
var src = map__52899__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52900){var e_53109 = e52900;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53109);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53109.message)].join('')));
}

var G__53110 = seq__52885;
var G__53111 = chunk__52886;
var G__53112 = count__52887;
var G__53113 = (i__52888 + (1));
seq__52885 = G__53110;
chunk__52886 = G__53111;
count__52887 = G__53112;
i__52888 = G__53113;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52885);
if(temp__5753__auto__){
var seq__52885__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52885__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52885__$1);
var G__53114 = cljs.core.chunk_rest(seq__52885__$1);
var G__53115 = c__4638__auto__;
var G__53116 = cljs.core.count(c__4638__auto__);
var G__53117 = (0);
seq__52885 = G__53114;
chunk__52886 = G__53115;
count__52887 = G__53116;
i__52888 = G__53117;
continue;
} else {
var map__52901 = cljs.core.first(seq__52885__$1);
var map__52901__$1 = cljs.core.__destructure_map(map__52901);
var src = map__52901__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52902){var e_53122 = e52902;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53122);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53122.message)].join('')));
}

var G__53123 = cljs.core.next(seq__52885__$1);
var G__53124 = null;
var G__53125 = (0);
var G__53126 = (0);
seq__52885 = G__53123;
chunk__52886 = G__53124;
count__52887 = G__53125;
i__52888 = G__53126;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52906 = cljs.core.seq(js_requires);
var chunk__52907 = null;
var count__52908 = (0);
var i__52909 = (0);
while(true){
if((i__52909 < count__52908)){
var js_ns = chunk__52907.cljs$core$IIndexed$_nth$arity$2(null,i__52909);
var require_str_53128 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53128);


var G__53129 = seq__52906;
var G__53130 = chunk__52907;
var G__53131 = count__52908;
var G__53132 = (i__52909 + (1));
seq__52906 = G__53129;
chunk__52907 = G__53130;
count__52908 = G__53131;
i__52909 = G__53132;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52906);
if(temp__5753__auto__){
var seq__52906__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52906__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52906__$1);
var G__53133 = cljs.core.chunk_rest(seq__52906__$1);
var G__53134 = c__4638__auto__;
var G__53135 = cljs.core.count(c__4638__auto__);
var G__53136 = (0);
seq__52906 = G__53133;
chunk__52907 = G__53134;
count__52908 = G__53135;
i__52909 = G__53136;
continue;
} else {
var js_ns = cljs.core.first(seq__52906__$1);
var require_str_53137 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53137);


var G__53138 = cljs.core.next(seq__52906__$1);
var G__53139 = null;
var G__53140 = (0);
var G__53141 = (0);
seq__52906 = G__53138;
chunk__52907 = G__53139;
count__52908 = G__53140;
i__52909 = G__53141;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52912){
var map__52913 = p__52912;
var map__52913__$1 = cljs.core.__destructure_map(map__52913);
var msg = map__52913__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52913__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52913__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52914(s__52915){
return (new cljs.core.LazySeq(null,(function (){
var s__52915__$1 = s__52915;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52915__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52920 = cljs.core.first(xs__6308__auto__);
var map__52920__$1 = cljs.core.__destructure_map(map__52920);
var src = map__52920__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52915__$1,map__52920,map__52920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52913,map__52913__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52914_$_iter__52916(s__52917){
return (new cljs.core.LazySeq(null,((function (s__52915__$1,map__52920,map__52920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52913,map__52913__$1,msg,info,reload_info){
return (function (){
var s__52917__$1 = s__52917;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52917__$1);
if(temp__5753__auto____$1){
var s__52917__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52917__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52917__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52919 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52918 = (0);
while(true){
if((i__52918 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52918);
cljs.core.chunk_append(b__52919,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53142 = (i__52918 + (1));
i__52918 = G__53142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52919),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52914_$_iter__52916(cljs.core.chunk_rest(s__52917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52919),null);
}
} else {
var warning = cljs.core.first(s__52917__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52914_$_iter__52916(cljs.core.rest(s__52917__$2)));
}
} else {
return null;
}
break;
}
});})(s__52915__$1,map__52920,map__52920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52913,map__52913__$1,msg,info,reload_info))
,null,null));
});})(s__52915__$1,map__52920,map__52920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52913,map__52913__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52914(cljs.core.rest(s__52915__$1)));
} else {
var G__53149 = cljs.core.rest(s__52915__$1);
s__52915__$1 = G__53149;
continue;
}
} else {
var G__53150 = cljs.core.rest(s__52915__$1);
s__52915__$1 = G__53150;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52925_53151 = cljs.core.seq(warnings);
var chunk__52926_53152 = null;
var count__52927_53153 = (0);
var i__52928_53154 = (0);
while(true){
if((i__52928_53154 < count__52927_53153)){
var map__52935_53155 = chunk__52926_53152.cljs$core$IIndexed$_nth$arity$2(null,i__52928_53154);
var map__52935_53156__$1 = cljs.core.__destructure_map(map__52935_53155);
var w_53157 = map__52935_53156__$1;
var msg_53158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935_53156__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935_53156__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935_53156__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935_53156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53161)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53159),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53160),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53158__$1)].join(''));


var G__53165 = seq__52925_53151;
var G__53166 = chunk__52926_53152;
var G__53167 = count__52927_53153;
var G__53168 = (i__52928_53154 + (1));
seq__52925_53151 = G__53165;
chunk__52926_53152 = G__53166;
count__52927_53153 = G__53167;
i__52928_53154 = G__53168;
continue;
} else {
var temp__5753__auto___53169 = cljs.core.seq(seq__52925_53151);
if(temp__5753__auto___53169){
var seq__52925_53170__$1 = temp__5753__auto___53169;
if(cljs.core.chunked_seq_QMARK_(seq__52925_53170__$1)){
var c__4638__auto___53171 = cljs.core.chunk_first(seq__52925_53170__$1);
var G__53172 = cljs.core.chunk_rest(seq__52925_53170__$1);
var G__53173 = c__4638__auto___53171;
var G__53174 = cljs.core.count(c__4638__auto___53171);
var G__53175 = (0);
seq__52925_53151 = G__53172;
chunk__52926_53152 = G__53173;
count__52927_53153 = G__53174;
i__52928_53154 = G__53175;
continue;
} else {
var map__52936_53176 = cljs.core.first(seq__52925_53170__$1);
var map__52936_53177__$1 = cljs.core.__destructure_map(map__52936_53176);
var w_53178 = map__52936_53177__$1;
var msg_53179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936_53177__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936_53177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936_53177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936_53177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53182)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53180),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53181),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53179__$1)].join(''));


var G__53183 = cljs.core.next(seq__52925_53170__$1);
var G__53184 = null;
var G__53185 = (0);
var G__53186 = (0);
seq__52925_53151 = G__53183;
chunk__52926_53152 = G__53184;
count__52927_53153 = G__53185;
i__52928_53154 = G__53186;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52911_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52911_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52937){
var map__52938 = p__52937;
var map__52938__$1 = cljs.core.__destructure_map(map__52938);
var msg = map__52938__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52938__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52939 = cljs.core.seq(updates);
var chunk__52942 = null;
var count__52943 = (0);
var i__52944 = (0);
while(true){
if((i__52944 < count__52943)){
var path = chunk__52942.cljs$core$IIndexed$_nth$arity$2(null,i__52944);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53007_53189 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53011_53190 = null;
var count__53012_53191 = (0);
var i__53013_53192 = (0);
while(true){
if((i__53013_53192 < count__53012_53191)){
var node_53193 = chunk__53011_53190.cljs$core$IIndexed$_nth$arity$2(null,i__53013_53192);
if(cljs.core.not(node_53193.shadow$old)){
var path_match_53194 = shadow.cljs.devtools.client.browser.match_paths(node_53193.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53194)){
var new_link_53195 = (function (){var G__53026 = node_53193.cloneNode(true);
G__53026.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53194),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53026;
})();
(node_53193.shadow$old = true);

(new_link_53195.onload = ((function (seq__53007_53189,chunk__53011_53190,count__53012_53191,i__53013_53192,seq__52939,chunk__52942,count__52943,i__52944,new_link_53195,path_match_53194,node_53193,path,map__52938,map__52938__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53193);
});})(seq__53007_53189,chunk__53011_53190,count__53012_53191,i__53013_53192,seq__52939,chunk__52942,count__52943,i__52944,new_link_53195,path_match_53194,node_53193,path,map__52938,map__52938__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53194], 0));

goog.dom.insertSiblingAfter(new_link_53195,node_53193);


var G__53197 = seq__53007_53189;
var G__53198 = chunk__53011_53190;
var G__53199 = count__53012_53191;
var G__53200 = (i__53013_53192 + (1));
seq__53007_53189 = G__53197;
chunk__53011_53190 = G__53198;
count__53012_53191 = G__53199;
i__53013_53192 = G__53200;
continue;
} else {
var G__53201 = seq__53007_53189;
var G__53202 = chunk__53011_53190;
var G__53203 = count__53012_53191;
var G__53204 = (i__53013_53192 + (1));
seq__53007_53189 = G__53201;
chunk__53011_53190 = G__53202;
count__53012_53191 = G__53203;
i__53013_53192 = G__53204;
continue;
}
} else {
var G__53206 = seq__53007_53189;
var G__53207 = chunk__53011_53190;
var G__53208 = count__53012_53191;
var G__53209 = (i__53013_53192 + (1));
seq__53007_53189 = G__53206;
chunk__53011_53190 = G__53207;
count__53012_53191 = G__53208;
i__53013_53192 = G__53209;
continue;
}
} else {
var temp__5753__auto___53210 = cljs.core.seq(seq__53007_53189);
if(temp__5753__auto___53210){
var seq__53007_53211__$1 = temp__5753__auto___53210;
if(cljs.core.chunked_seq_QMARK_(seq__53007_53211__$1)){
var c__4638__auto___53212 = cljs.core.chunk_first(seq__53007_53211__$1);
var G__53213 = cljs.core.chunk_rest(seq__53007_53211__$1);
var G__53214 = c__4638__auto___53212;
var G__53215 = cljs.core.count(c__4638__auto___53212);
var G__53216 = (0);
seq__53007_53189 = G__53213;
chunk__53011_53190 = G__53214;
count__53012_53191 = G__53215;
i__53013_53192 = G__53216;
continue;
} else {
var node_53217 = cljs.core.first(seq__53007_53211__$1);
if(cljs.core.not(node_53217.shadow$old)){
var path_match_53218 = shadow.cljs.devtools.client.browser.match_paths(node_53217.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53218)){
var new_link_53219 = (function (){var G__53028 = node_53217.cloneNode(true);
G__53028.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53218),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53028;
})();
(node_53217.shadow$old = true);

(new_link_53219.onload = ((function (seq__53007_53189,chunk__53011_53190,count__53012_53191,i__53013_53192,seq__52939,chunk__52942,count__52943,i__52944,new_link_53219,path_match_53218,node_53217,seq__53007_53211__$1,temp__5753__auto___53210,path,map__52938,map__52938__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53217);
});})(seq__53007_53189,chunk__53011_53190,count__53012_53191,i__53013_53192,seq__52939,chunk__52942,count__52943,i__52944,new_link_53219,path_match_53218,node_53217,seq__53007_53211__$1,temp__5753__auto___53210,path,map__52938,map__52938__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53218], 0));

goog.dom.insertSiblingAfter(new_link_53219,node_53217);


var G__53220 = cljs.core.next(seq__53007_53211__$1);
var G__53221 = null;
var G__53222 = (0);
var G__53223 = (0);
seq__53007_53189 = G__53220;
chunk__53011_53190 = G__53221;
count__53012_53191 = G__53222;
i__53013_53192 = G__53223;
continue;
} else {
var G__53224 = cljs.core.next(seq__53007_53211__$1);
var G__53225 = null;
var G__53226 = (0);
var G__53227 = (0);
seq__53007_53189 = G__53224;
chunk__53011_53190 = G__53225;
count__53012_53191 = G__53226;
i__53013_53192 = G__53227;
continue;
}
} else {
var G__53228 = cljs.core.next(seq__53007_53211__$1);
var G__53229 = null;
var G__53230 = (0);
var G__53231 = (0);
seq__53007_53189 = G__53228;
chunk__53011_53190 = G__53229;
count__53012_53191 = G__53230;
i__53013_53192 = G__53231;
continue;
}
}
} else {
}
}
break;
}


var G__53232 = seq__52939;
var G__53233 = chunk__52942;
var G__53234 = count__52943;
var G__53235 = (i__52944 + (1));
seq__52939 = G__53232;
chunk__52942 = G__53233;
count__52943 = G__53234;
i__52944 = G__53235;
continue;
} else {
var G__53236 = seq__52939;
var G__53237 = chunk__52942;
var G__53238 = count__52943;
var G__53239 = (i__52944 + (1));
seq__52939 = G__53236;
chunk__52942 = G__53237;
count__52943 = G__53238;
i__52944 = G__53239;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52939);
if(temp__5753__auto__){
var seq__52939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52939__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52939__$1);
var G__53240 = cljs.core.chunk_rest(seq__52939__$1);
var G__53241 = c__4638__auto__;
var G__53242 = cljs.core.count(c__4638__auto__);
var G__53243 = (0);
seq__52939 = G__53240;
chunk__52942 = G__53241;
count__52943 = G__53242;
i__52944 = G__53243;
continue;
} else {
var path = cljs.core.first(seq__52939__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53029_53244 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53033_53245 = null;
var count__53034_53246 = (0);
var i__53035_53247 = (0);
while(true){
if((i__53035_53247 < count__53034_53246)){
var node_53248 = chunk__53033_53245.cljs$core$IIndexed$_nth$arity$2(null,i__53035_53247);
if(cljs.core.not(node_53248.shadow$old)){
var path_match_53249 = shadow.cljs.devtools.client.browser.match_paths(node_53248.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53249)){
var new_link_53250 = (function (){var G__53053 = node_53248.cloneNode(true);
G__53053.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53249),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53053;
})();
(node_53248.shadow$old = true);

(new_link_53250.onload = ((function (seq__53029_53244,chunk__53033_53245,count__53034_53246,i__53035_53247,seq__52939,chunk__52942,count__52943,i__52944,new_link_53250,path_match_53249,node_53248,path,seq__52939__$1,temp__5753__auto__,map__52938,map__52938__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53248);
});})(seq__53029_53244,chunk__53033_53245,count__53034_53246,i__53035_53247,seq__52939,chunk__52942,count__52943,i__52944,new_link_53250,path_match_53249,node_53248,path,seq__52939__$1,temp__5753__auto__,map__52938,map__52938__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53249], 0));

goog.dom.insertSiblingAfter(new_link_53250,node_53248);


var G__53251 = seq__53029_53244;
var G__53252 = chunk__53033_53245;
var G__53253 = count__53034_53246;
var G__53254 = (i__53035_53247 + (1));
seq__53029_53244 = G__53251;
chunk__53033_53245 = G__53252;
count__53034_53246 = G__53253;
i__53035_53247 = G__53254;
continue;
} else {
var G__53255 = seq__53029_53244;
var G__53256 = chunk__53033_53245;
var G__53257 = count__53034_53246;
var G__53258 = (i__53035_53247 + (1));
seq__53029_53244 = G__53255;
chunk__53033_53245 = G__53256;
count__53034_53246 = G__53257;
i__53035_53247 = G__53258;
continue;
}
} else {
var G__53259 = seq__53029_53244;
var G__53260 = chunk__53033_53245;
var G__53261 = count__53034_53246;
var G__53262 = (i__53035_53247 + (1));
seq__53029_53244 = G__53259;
chunk__53033_53245 = G__53260;
count__53034_53246 = G__53261;
i__53035_53247 = G__53262;
continue;
}
} else {
var temp__5753__auto___53263__$1 = cljs.core.seq(seq__53029_53244);
if(temp__5753__auto___53263__$1){
var seq__53029_53264__$1 = temp__5753__auto___53263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53029_53264__$1)){
var c__4638__auto___53265 = cljs.core.chunk_first(seq__53029_53264__$1);
var G__53266 = cljs.core.chunk_rest(seq__53029_53264__$1);
var G__53267 = c__4638__auto___53265;
var G__53268 = cljs.core.count(c__4638__auto___53265);
var G__53269 = (0);
seq__53029_53244 = G__53266;
chunk__53033_53245 = G__53267;
count__53034_53246 = G__53268;
i__53035_53247 = G__53269;
continue;
} else {
var node_53270 = cljs.core.first(seq__53029_53264__$1);
if(cljs.core.not(node_53270.shadow$old)){
var path_match_53271 = shadow.cljs.devtools.client.browser.match_paths(node_53270.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53271)){
var new_link_53272 = (function (){var G__53064 = node_53270.cloneNode(true);
G__53064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53271),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53064;
})();
(node_53270.shadow$old = true);

(new_link_53272.onload = ((function (seq__53029_53244,chunk__53033_53245,count__53034_53246,i__53035_53247,seq__52939,chunk__52942,count__52943,i__52944,new_link_53272,path_match_53271,node_53270,seq__53029_53264__$1,temp__5753__auto___53263__$1,path,seq__52939__$1,temp__5753__auto__,map__52938,map__52938__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53270);
});})(seq__53029_53244,chunk__53033_53245,count__53034_53246,i__53035_53247,seq__52939,chunk__52942,count__52943,i__52944,new_link_53272,path_match_53271,node_53270,seq__53029_53264__$1,temp__5753__auto___53263__$1,path,seq__52939__$1,temp__5753__auto__,map__52938,map__52938__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53271], 0));

goog.dom.insertSiblingAfter(new_link_53272,node_53270);


var G__53273 = cljs.core.next(seq__53029_53264__$1);
var G__53274 = null;
var G__53275 = (0);
var G__53276 = (0);
seq__53029_53244 = G__53273;
chunk__53033_53245 = G__53274;
count__53034_53246 = G__53275;
i__53035_53247 = G__53276;
continue;
} else {
var G__53277 = cljs.core.next(seq__53029_53264__$1);
var G__53278 = null;
var G__53279 = (0);
var G__53280 = (0);
seq__53029_53244 = G__53277;
chunk__53033_53245 = G__53278;
count__53034_53246 = G__53279;
i__53035_53247 = G__53280;
continue;
}
} else {
var G__53281 = cljs.core.next(seq__53029_53264__$1);
var G__53282 = null;
var G__53283 = (0);
var G__53284 = (0);
seq__53029_53244 = G__53281;
chunk__53033_53245 = G__53282;
count__53034_53246 = G__53283;
i__53035_53247 = G__53284;
continue;
}
}
} else {
}
}
break;
}


var G__53285 = cljs.core.next(seq__52939__$1);
var G__53286 = null;
var G__53287 = (0);
var G__53288 = (0);
seq__52939 = G__53285;
chunk__52942 = G__53286;
count__52943 = G__53287;
i__52944 = G__53288;
continue;
} else {
var G__53289 = cljs.core.next(seq__52939__$1);
var G__53290 = null;
var G__53291 = (0);
var G__53292 = (0);
seq__52939 = G__53289;
chunk__52942 = G__53290;
count__52943 = G__53291;
i__52944 = G__53292;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53066){
var map__53067 = p__53066;
var map__53067__$1 = cljs.core.__destructure_map(map__53067);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53067__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53073){
var map__53074 = p__53073;
var map__53074__$1 = cljs.core.__destructure_map(map__53074);
var _ = map__53074__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53074__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53075,done,error){
var map__53076 = p__53075;
var map__53076__$1 = cljs.core.__destructure_map(map__53076);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53076__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53077,done,error){
var map__53078 = p__53077;
var map__53078__$1 = cljs.core.__destructure_map(map__53078);
var msg = map__53078__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53079){
var map__53080 = p__53079;
var map__53080__$1 = cljs.core.__destructure_map(map__53080);
var src = map__53080__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53080__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53082 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53082) : done.call(null,G__53082));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53083){
var map__53084 = p__53083;
var map__53084__$1 = cljs.core.__destructure_map(map__53084);
var msg__$1 = map__53084__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53084__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53085){var ex = e53085;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53086){
var map__53087 = p__53086;
var map__53087__$1 = cljs.core.__destructure_map(map__53087);
var env = map__53087__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53087__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53093){
var map__53094 = p__53093;
var map__53094__$1 = cljs.core.__destructure_map(map__53094);
var msg = map__53094__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53094__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53097){
var map__53098 = p__53097;
var map__53098__$1 = cljs.core.__destructure_map(map__53098);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53098__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53098__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53103){
var map__53104 = p__53103;
var map__53104__$1 = cljs.core.__destructure_map(map__53104);
var svc = map__53104__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53104__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
