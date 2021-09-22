goog.provide('editscript.util.common');
/**
 * Szudzik's paring function
 */
editscript.util.common.szudzik = (function editscript$util$common$szudzik(x,y){
if((y > x)){
return (x + (y * y));
} else {
return ((x + y) + (x * x));
}
});
/**
 * Based on 'Wu, S. et al., 1990, An O(NP) Sequence Comparison Algorithm,
 *   Information Processing Letters, 35:6, p317-23.'
 * 
 *   A greedy algorithm, attempting to get to the furthest points with a given
 *   number of edits. Very fast. However, it does not have replacement operations,
 *   so it is not very useful for nested trees. It can also only do unit cost for
 *   addition and deletion. 
 */
editscript.util.common.vec_edits_STAR_ = (function editscript$util$common$vec_edits_STAR_(a,b,n,m){
var delta = (n - m);
var snake = (function (k,x){
var x__$1 = x;
var y = (x__$1 - k);
while(true){
var ax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,x__$1);
var by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y);
if((((x__$1 < n)) && ((((y < m)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(ax),cljs.core.type(by))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ax,by)))))))){
var G__50120 = (x__$1 + (1));
var G__50121 = (y + (1));
x__$1 = G__50120;
y = G__50121;
continue;
} else {
return x__$1;
}
break;
}
});
var fp_fn = (function (fp,k){
var vec__49992 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(k - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),cljs.core.PersistentVector.EMPTY], null));
var dk_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49992,(0),null);
var vk_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49992,(1),null);
var dk_1__$1 = (dk_1 + (1));
var vec__49995 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(k + (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),cljs.core.PersistentVector.EMPTY], null));
var dk_PLUS_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49995,(0),null);
var vk_PLUS_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49995,(1),null);
var x = (function (){var x__4295__auto__ = dk_1__$1;
var y__4296__auto__ = dk_PLUS_1;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var sk = snake(k,x);
var ops = (function (){var es = (((dk_1__$1 > dk_PLUS_1))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vk_1,new cljs.core.Keyword(null,"-","-",-2112348439)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vk_PLUS_1,new cljs.core.Keyword(null,"+","+",1913524883)));
if((sk > x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,(sk - x));
} else {
return es;
}
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(fp,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sk,ops], null));
});
var fp = (function (){var p = (0);
var fp = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var fp__$1 = (function (){var k = ((-1) * p);
var fp__$1 = fp;
while(true){
if((k < delta)){
var G__50139 = (k + (1));
var G__50140 = fp_fn(fp__$1,k);
k = G__50139;
fp__$1 = G__50140;
continue;
} else {
return fp__$1;
}
break;
}
})();
var fp__$2 = (function (){var k = (delta + p);
var fp__$2 = fp__$1;
while(true){
if((delta < k)){
var G__50141 = (k - (1));
var G__50142 = fp_fn(fp__$2,k);
k = G__50141;
fp__$2 = G__50142;
continue;
} else {
return fp__$2;
}
break;
}
})();
var fp__$3 = fp_fn(fp__$2,delta);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fp__$3,delta)))))){
var G__50143 = (p + (1));
var G__50144 = fp__$3;
p = G__50143;
fp = G__50144;
continue;
} else {
return cljs.core.persistent_BANG_(fp__$3);
}
break;
}
})();
return cljs.core.rest(cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fp,delta)));
});
editscript.util.common.swap_ops = (function editscript$util$common$swap_ops(edits){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (op){
var G__50006 = op;
var G__50006__$1 = (((G__50006 instanceof cljs.core.Keyword))?G__50006.fqn:null);
switch (G__50006__$1) {
case "+":
return new cljs.core.Keyword(null,"-","-",-2112348439);

break;
case "-":
return new cljs.core.Keyword(null,"+","+",1913524883);

break;
default:
return op;

}
}),edits);
});
/**
 * Aggressively turn :- and :+ into replacements.
 */
editscript.util.common.min_PLUS_plus__GT_replace = (function editscript$util$common$min_PLUS_plus__GT_replace(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (coll){
var m = cljs.core.first(coll);
if(((cljs.core.integer_QMARK_(m)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coll))))){
return coll;
} else {
var p = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"-","-",-2112348439)))?new cljs.core.Keyword(null,"+","+",1913524883):new cljs.core.Keyword(null,"-","-",-2112348439));
var vec__50015 = cljs.core.split_with((function (p1__50011_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50011_SHARP_,m);
}),coll);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50015,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50015,(1),null);
var mc = cljs.core.count(ms);
var pc = cljs.core.count(ps);
var delta = Math.abs((mc - pc));
var rs = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var x__4295__auto__ = mc;
var y__4296__auto__ = pc;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})() - delta),new cljs.core.Keyword(null,"r","r",-471384190));
if((mc < pc)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(delta,p));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mc,pc)){
return rs;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(delta,m),rs);

}
}
}
}))),v);
});
editscript.util.common.vec_edits = (function editscript$util$common$vec_edits(a,b){
var n = cljs.core.count(a);
var m = cljs.core.count(b);
return editscript.util.common.min_PLUS_plus__GT_replace((((n < m))?editscript.util.common.swap_ops(editscript.util.common.vec_edits_STAR_(b,a,m,n)):editscript.util.common.vec_edits_STAR_(a,b,n,m)));
});
editscript.util.common.group_str = (function editscript$util$common$group_str(edits,b){
var i = cljs.core.volatile_BANG_((0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (coll){
var x = cljs.core.first(coll);
var c = cljs.core.count(coll);
if(cljs.core.integer_QMARK_(x)){
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,x)(i.cljs$core$IDeref$_deref$arity$1(null)));

return coll;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,c], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"r","r",-471384190),x)){
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(b,cljs.core.deref(i),(cljs.core.deref(i) + c));
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,c)(i.cljs$core$IDeref$_deref$arity$1(null)));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,s], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),x)){
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(b,cljs.core.deref(i),(cljs.core.deref(i) + c));
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,c)(i.cljs$core$IDeref$_deref$arity$1(null)));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,s], null)], null);
} else {
return null;
}
}
}
}
}))),edits);
});
editscript.util.common.diff_str = (function editscript$util$common$diff_str(script,path,a,b,_){
var edits = editscript.util.common.vec_edits(a,b);
var cb = cljs.core.count(b);
var unchanged = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_),cljs.core._PLUS_,edits);
if(((cb * 0.7) < unchanged)){
var edits_SINGLEQUOTE_ = editscript.util.common.group_str(edits,b);
return editscript.edit.replace_str(script,path,edits_SINGLEQUOTE_);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
if((typeof editscript !== 'undefined') && (typeof editscript.util !== 'undefined') && (typeof editscript.util.common !== 'undefined') && (typeof editscript.util.common.diff_algo !== 'undefined')){
} else {
editscript.util.common.diff_algo = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50081 = cljs.core.get_global_hierarchy;
return (fexpr__50081.cljs$core$IFn$_invoke$arity$0 ? fexpr__50081.cljs$core$IFn$_invoke$arity$0() : fexpr__50081.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("editscript.util.common","diff-algo"),(function (_,___$1,opts){
return new cljs.core.Keyword(null,"algo","algo",1472048382).cljs$core$IFn$_invoke$arity$1(opts);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

//# sourceMappingURL=editscript.util.common.js.map
