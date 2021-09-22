goog.provide('editscript.patch');
editscript.patch.vget = (function editscript$patch$vget(x,p){
var G__49975 = editscript.edit.get_type(x);
var G__49975__$1 = (((G__49975 instanceof cljs.core.Keyword))?G__49975.fqn:null);
switch (G__49975__$1) {
case "map":
case "vec":
case "set":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,p);

break;
case "lst":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,p);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49975__$1)].join('')));

}
});
editscript.patch.vdelete = (function editscript$patch$vdelete(x,p){
var G__49981 = editscript.edit.get_type(x);
var G__49981__$1 = (((G__49981 instanceof cljs.core.Keyword))?G__49981.fqn:null);
switch (G__49981__$1) {
case "map":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,p);

break;
case "vec":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),p),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,(p + (1))));

break;
case "set":
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentHashSet.createAsIfByAssoc([p]));

break;
case "lst":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (p1__49979_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__49979_SHARP_),cljs.core.next(cljs.core.second(p1__49979_SHARP_)));
})(cljs.core.split_at(p,x)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49981__$1)].join('')));

}
});
editscript.patch.vadd = (function editscript$patch$vadd(x,p,v){
var G__49987 = editscript.edit.get_type(x);
var G__49987__$1 = (((G__49987 instanceof cljs.core.Keyword))?G__49987.fqn:null);
switch (G__49987__$1) {
case "map":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,p,v);

break;
case "vec":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),p),v),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,p));

break;
case "set":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,v);

break;
case "lst":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (p1__49986_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__49986_SHARP_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__49986_SHARP_),v));
})(cljs.core.split_at(p,x)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49987__$1)].join('')));

}
});
editscript.patch.sreplace = (function editscript$patch$sreplace(x,edits){
var i = cljs.core.volatile_BANG_((0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ss,e){
if(cljs.core.integer_QMARK_(e)){
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,cljs.core.deref(i),(cljs.core.deref(i) + e));
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,e)(i.cljs$core$IDeref$_deref$arity$1(null)));

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ss,s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(e),new cljs.core.Keyword(null,"-","-",-2112348439))){
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.second(e))(i.cljs$core$IDeref$_deref$arity$1(null)));

return ss;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(e),new cljs.core.Keyword(null,"r","r",-471384190))){
var s = cljs.core.second(e);
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.count(s))(i.cljs$core$IDeref$_deref$arity$1(null)));

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ss,s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(e),new cljs.core.Keyword(null,"+","+",1913524883))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ss,cljs.core.second(e));
} else {
return null;
}
}
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),edits)));
});
editscript.patch.vreplace = (function editscript$patch$vreplace(x,p,v){
var G__50010 = editscript.edit.get_type(x);
var G__50010__$1 = (((G__50010 instanceof cljs.core.Keyword))?G__50010.fqn:null);
switch (G__50010__$1) {
case "map":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,p,v);

break;
case "vec":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),p),v),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,(p + (1))));

break;
case "set":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentHashSet.createAsIfByAssoc([p])),v);

break;
case "lst":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (p1__50005_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__50005_SHARP_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.second(p1__50005_SHARP_)),v));
})(cljs.core.split_at(p,x)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50010__$1)].join('')));

}
});
editscript.patch.valter = (function editscript$patch$valter(x,p,o,v){
var G__50018 = o;
var G__50018__$1 = (((G__50018 instanceof cljs.core.Keyword))?G__50018.fqn:null);
switch (G__50018__$1) {
case "-":
return editscript.patch.vdelete(x,p);

break;
case "+":
return editscript.patch.vadd(x,p,v);

break;
case "r":
return editscript.patch.vreplace(x,p,v);

break;
case "s":
return editscript.patch.vreplace(x,p,editscript.patch.sreplace(editscript.patch.vget(x,p),v));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50018__$1)].join('')));

}
});
editscript.patch.patch_STAR_ = (function editscript$patch$patch_STAR_(old,p__50031){
var vec__50032 = p__50031;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032,(2),null);
var up = (function editscript$patch$patch_STAR__$_up(x,p,o,v){
var vec__50050 = p;
var seq__50051 = cljs.core.seq(vec__50050);
var first__50052 = cljs.core.first(seq__50051);
var seq__50051__$1 = cljs.core.next(seq__50051);
var f = first__50052;
var r = seq__50051__$1;
if(r){
return editscript.patch.valter(x,f,new cljs.core.Keyword(null,"r","r",-471384190),editscript$patch$patch_STAR__$_up(editscript.patch.vget(x,f),r,o,v));
} else {
if(cljs.core.seq(p)){
return editscript.patch.valter(x,f,o,v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"s","s",1705939918))){
return editscript.patch.sreplace(x,v);
} else {
return v;
}
}
}
});
return up(old,path,op,value);
});

//# sourceMappingURL=editscript.patch.js.map
