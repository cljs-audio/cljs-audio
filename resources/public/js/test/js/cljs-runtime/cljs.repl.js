goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48479){
var map__48484 = p__48479;
var map__48484__$1 = cljs.core.__destructure_map(map__48484);
var m = map__48484__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48484__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48498_48888 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48499_48889 = null;
var count__48500_48890 = (0);
var i__48501_48891 = (0);
while(true){
if((i__48501_48891 < count__48500_48890)){
var f_48892 = chunk__48499_48889.cljs$core$IIndexed$_nth$arity$2(null,i__48501_48891);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48892], 0));


var G__48894 = seq__48498_48888;
var G__48895 = chunk__48499_48889;
var G__48896 = count__48500_48890;
var G__48897 = (i__48501_48891 + (1));
seq__48498_48888 = G__48894;
chunk__48499_48889 = G__48895;
count__48500_48890 = G__48896;
i__48501_48891 = G__48897;
continue;
} else {
var temp__5753__auto___48898 = cljs.core.seq(seq__48498_48888);
if(temp__5753__auto___48898){
var seq__48498_48899__$1 = temp__5753__auto___48898;
if(cljs.core.chunked_seq_QMARK_(seq__48498_48899__$1)){
var c__4638__auto___48900 = cljs.core.chunk_first(seq__48498_48899__$1);
var G__48901 = cljs.core.chunk_rest(seq__48498_48899__$1);
var G__48902 = c__4638__auto___48900;
var G__48903 = cljs.core.count(c__4638__auto___48900);
var G__48904 = (0);
seq__48498_48888 = G__48901;
chunk__48499_48889 = G__48902;
count__48500_48890 = G__48903;
i__48501_48891 = G__48904;
continue;
} else {
var f_48905 = cljs.core.first(seq__48498_48899__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48905], 0));


var G__48906 = cljs.core.next(seq__48498_48899__$1);
var G__48907 = null;
var G__48909 = (0);
var G__48910 = (0);
seq__48498_48888 = G__48906;
chunk__48499_48889 = G__48907;
count__48500_48890 = G__48909;
i__48501_48891 = G__48910;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48911 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48911], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48911)))?cljs.core.second(arglists_48911):arglists_48911)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48537_48915 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48538_48916 = null;
var count__48539_48917 = (0);
var i__48540_48918 = (0);
while(true){
if((i__48540_48918 < count__48539_48917)){
var vec__48565_48921 = chunk__48538_48916.cljs$core$IIndexed$_nth$arity$2(null,i__48540_48918);
var name_48922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48565_48921,(0),null);
var map__48568_48923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48565_48921,(1),null);
var map__48568_48924__$1 = cljs.core.__destructure_map(map__48568_48923);
var doc_48925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48568_48924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48568_48924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48922], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48926], 0));

if(cljs.core.truth_(doc_48925)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48925], 0));
} else {
}


var G__48930 = seq__48537_48915;
var G__48931 = chunk__48538_48916;
var G__48932 = count__48539_48917;
var G__48933 = (i__48540_48918 + (1));
seq__48537_48915 = G__48930;
chunk__48538_48916 = G__48931;
count__48539_48917 = G__48932;
i__48540_48918 = G__48933;
continue;
} else {
var temp__5753__auto___48935 = cljs.core.seq(seq__48537_48915);
if(temp__5753__auto___48935){
var seq__48537_48937__$1 = temp__5753__auto___48935;
if(cljs.core.chunked_seq_QMARK_(seq__48537_48937__$1)){
var c__4638__auto___48938 = cljs.core.chunk_first(seq__48537_48937__$1);
var G__48939 = cljs.core.chunk_rest(seq__48537_48937__$1);
var G__48940 = c__4638__auto___48938;
var G__48941 = cljs.core.count(c__4638__auto___48938);
var G__48942 = (0);
seq__48537_48915 = G__48939;
chunk__48538_48916 = G__48940;
count__48539_48917 = G__48941;
i__48540_48918 = G__48942;
continue;
} else {
var vec__48577_48947 = cljs.core.first(seq__48537_48937__$1);
var name_48948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48577_48947,(0),null);
var map__48580_48949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48577_48947,(1),null);
var map__48580_48950__$1 = cljs.core.__destructure_map(map__48580_48949);
var doc_48951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48580_48950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48580_48950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48948], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48952], 0));

if(cljs.core.truth_(doc_48951)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48951], 0));
} else {
}


var G__48958 = cljs.core.next(seq__48537_48937__$1);
var G__48960 = null;
var G__48961 = (0);
var G__48962 = (0);
seq__48537_48915 = G__48958;
chunk__48538_48916 = G__48960;
count__48539_48917 = G__48961;
i__48540_48918 = G__48962;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__48606 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48607 = null;
var count__48608 = (0);
var i__48609 = (0);
while(true){
if((i__48609 < count__48608)){
var role = chunk__48607.cljs$core$IIndexed$_nth$arity$2(null,i__48609);
var temp__5753__auto___48965__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___48965__$1)){
var spec_48966 = temp__5753__auto___48965__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48966)], 0));
} else {
}


var G__48967 = seq__48606;
var G__48968 = chunk__48607;
var G__48969 = count__48608;
var G__48970 = (i__48609 + (1));
seq__48606 = G__48967;
chunk__48607 = G__48968;
count__48608 = G__48969;
i__48609 = G__48970;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__48606);
if(temp__5753__auto____$1){
var seq__48606__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48606__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48606__$1);
var G__48973 = cljs.core.chunk_rest(seq__48606__$1);
var G__48974 = c__4638__auto__;
var G__48975 = cljs.core.count(c__4638__auto__);
var G__48976 = (0);
seq__48606 = G__48973;
chunk__48607 = G__48974;
count__48608 = G__48975;
i__48609 = G__48976;
continue;
} else {
var role = cljs.core.first(seq__48606__$1);
var temp__5753__auto___48978__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___48978__$2)){
var spec_48980 = temp__5753__auto___48978__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48980)], 0));
} else {
}


var G__48982 = cljs.core.next(seq__48606__$1);
var G__48983 = null;
var G__48984 = (0);
var G__48985 = (0);
seq__48606 = G__48982;
chunk__48607 = G__48983;
count__48608 = G__48984;
i__48609 = G__48985;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__48989 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__48990 = cljs.core.ex_cause(t);
via = G__48989;
t = G__48990;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__48699 = datafied_throwable;
var map__48699__$1 = cljs.core.__destructure_map(map__48699);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48699__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48699__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48699__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48703 = cljs.core.last(via);
var map__48703__$1 = cljs.core.__destructure_map(map__48703);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48703__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48703__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48703__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48704 = data;
var map__48704__$1 = cljs.core.__destructure_map(map__48704);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48704__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48704__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48704__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48705 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__48705__$1 = cljs.core.__destructure_map(map__48705);
var top_data = map__48705__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48705__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48713 = phase;
var G__48713__$1 = (((G__48713 instanceof cljs.core.Keyword))?G__48713.fqn:null);
switch (G__48713__$1) {
case "read-source":
var map__48719 = data;
var map__48719__$1 = cljs.core.__destructure_map(map__48719);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48725 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__48725__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48725,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48725);
var G__48725__$2 = (cljs.core.truth_((function (){var fexpr__48735 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48735.cljs$core$IFn$_invoke$arity$1 ? fexpr__48735.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48735.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48725__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48725__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48725__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48725__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48741 = top_data;
var G__48741__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48741,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48741);
var G__48741__$2 = (cljs.core.truth_((function (){var fexpr__48748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48748.cljs$core$IFn$_invoke$arity$1 ? fexpr__48748.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48748.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48741__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48741__$1);
var G__48741__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48741__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48741__$2);
var G__48741__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48741__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48741__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48741__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48741__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48760 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(3),null);
var G__48764 = top_data;
var G__48764__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48764,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48764);
var G__48764__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48764__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48764__$1);
var G__48764__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48764__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48764__$2);
var G__48764__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48764__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48764__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48764__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48764__$4;
}

break;
case "execution":
var vec__48775 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48775,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48775,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48775,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48775,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48677_SHARP_){
var or__4212__auto__ = (p1__48677_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__48779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48779.cljs$core$IFn$_invoke$arity$1 ? fexpr__48779.cljs$core$IFn$_invoke$arity$1(p1__48677_SHARP_) : fexpr__48779.call(null,p1__48677_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__48781 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48781__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48781,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48781);
var G__48781__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48781__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48781__$1);
var G__48781__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48781__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48781__$2);
var G__48781__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48781__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48781__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48781__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48781__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48713__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48802){
var map__48804 = p__48802;
var map__48804__$1 = cljs.core.__destructure_map(map__48804);
var triage_data = map__48804__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__48816 = phase;
var G__48816__$1 = (((G__48816 instanceof cljs.core.Keyword))?G__48816.fqn:null);
switch (G__48816__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__48817 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__48818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48819 = loc;
var G__48820 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48822_49047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48823_49048 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48824_49049 = true;
var _STAR_print_fn_STAR__temp_val__48825_49050 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48824_49049);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48825_49050);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48797_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48797_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48823_49048);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48822_49047);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48817,G__48818,G__48819,G__48820) : format.call(null,G__48817,G__48818,G__48819,G__48820));

break;
case "macroexpansion":
var G__48830 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__48831 = cause_type;
var G__48832 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48833 = loc;
var G__48834 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48830,G__48831,G__48832,G__48833,G__48834) : format.call(null,G__48830,G__48831,G__48832,G__48833,G__48834));

break;
case "compile-syntax-check":
var G__48836 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__48837 = cause_type;
var G__48838 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48839 = loc;
var G__48840 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48836,G__48837,G__48838,G__48839,G__48840) : format.call(null,G__48836,G__48837,G__48838,G__48839,G__48840));

break;
case "compilation":
var G__48841 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__48842 = cause_type;
var G__48843 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48844 = loc;
var G__48845 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48841,G__48842,G__48843,G__48844,G__48845) : format.call(null,G__48841,G__48842,G__48843,G__48844,G__48845));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__48848 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__48849 = symbol;
var G__48850 = loc;
var G__48851 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48856_49051 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48857_49052 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48858_49053 = true;
var _STAR_print_fn_STAR__temp_val__48859_49054 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48858_49053);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48859_49054);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48799_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48799_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48857_49052);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48856_49051);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48848,G__48849,G__48850,G__48851) : format.call(null,G__48848,G__48849,G__48850,G__48851));
} else {
var G__48871 = "Execution error%s at %s(%s).\n%s\n";
var G__48872 = cause_type;
var G__48873 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48874 = loc;
var G__48875 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48871,G__48872,G__48873,G__48874,G__48875) : format.call(null,G__48871,G__48872,G__48873,G__48874,G__48875));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48816__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
