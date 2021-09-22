goog.provide('editscript.diff.quick');
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,opts){
return null;
});
editscript.diff.quick.diff_map = (function editscript$diff$quick$diff_map(script,path,a,b,opts){
cljs.core.reduce_kv((function (_,ka,va){
var path_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ka);
if(cljs.core.contains_QMARK_(b,ka)){
var G__50923 = script;
var G__50924 = path_SINGLEQUOTE_;
var G__50925 = va;
var G__50926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ka);
var G__50927 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50923,G__50924,G__50925,G__50926,G__50927) : editscript.diff.quick.diff_STAR_.call(null,G__50923,G__50924,G__50925,G__50926,G__50927));
} else {
var G__50928 = script;
var G__50929 = path_SINGLEQUOTE_;
var G__50930 = va;
var G__50931 = editscript.edit.nada();
var G__50933 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50928,G__50929,G__50930,G__50931,G__50933) : editscript.diff.quick.diff_STAR_.call(null,G__50928,G__50929,G__50930,G__50931,G__50933));
}
}),null,a);

return cljs.core.reduce_kv((function (_,kb,vb){
if(cljs.core.contains_QMARK_(a,kb)){
return null;
} else {
var G__50936 = script;
var G__50937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,kb);
var G__50938 = editscript.edit.nada();
var G__50939 = vb;
var G__50940 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50936,G__50937,G__50938,G__50939,G__50940) : editscript.diff.quick.diff_STAR_.call(null,G__50936,G__50937,G__50938,G__50939,G__50940));
}
}),null,b);
});
/**
 * Adjust the indices to have a correct editscript
 */
editscript.diff.quick.diff_vec = (function editscript$diff$quick$diff_vec(script,path,a,b,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50947,op){
var vec__50949 = p__50947;
var ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50949,(0),null);
var ia_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50949,(1),null);
var ib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50949,(2),null);
var G__50952 = op;
var G__50952__$1 = (((G__50952 instanceof cljs.core.Keyword))?G__50952.fqn:null);
switch (G__50952__$1) {
case "-":
var G__50953_51222 = script;
var G__50954_51223 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__50955_51224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__50956_51225 = editscript.edit.nada();
var G__50957_51226 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50953_51222,G__50954_51223,G__50955_51224,G__50956_51225,G__50957_51226) : editscript.diff.quick.diff_STAR_.call(null,G__50953_51222,G__50954_51223,G__50955_51224,G__50956_51225,G__50957_51226));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),ia_SINGLEQUOTE_,ib], null);

break;
case "+":
var G__50962_51231 = script;
var G__50963_51232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__50964_51233 = editscript.edit.nada();
var G__50965_51234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__50966_51235 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50962_51231,G__50963_51232,G__50964_51233,G__50965_51234,G__50966_51235) : editscript.diff.quick.diff_STAR_.call(null,G__50962_51231,G__50963_51232,G__50964_51233,G__50965_51234,G__50966_51235));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ia,(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
case "r":
var G__50969_51242 = script;
var G__50970_51243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__50971_51244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__50972_51245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__50973_51246 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50969_51242,G__50970_51243,G__50971_51244,G__50972_51245,G__50973_51246) : editscript.diff.quick.diff_STAR_.call(null,G__50969_51242,G__50970_51243,G__50971_51244,G__50972_51245,G__50973_51246));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + op),(ia_SINGLEQUOTE_ + op),(ib + op)], null);

}
}),cljs.core.transient$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),editscript.util.common.vec_edits(a,b));
});
editscript.diff.quick.diff_set = (function editscript$diff$quick$diff_set(script,path,a,b,opts){
var seq__50977_51258 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b));
var chunk__50978_51260 = null;
var count__50979_51261 = (0);
var i__50980_51262 = (0);
while(true){
if((i__50980_51262 < count__50979_51261)){
var va_51269 = chunk__50978_51260.cljs$core$IIndexed$_nth$arity$2(null,i__50980_51262);
var G__50999_51272 = script;
var G__51000_51273 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_51269);
var G__51001_51274 = va_51269;
var G__51002_51275 = editscript.edit.nada();
var G__51003_51276 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50999_51272,G__51000_51273,G__51001_51274,G__51002_51275,G__51003_51276) : editscript.diff.quick.diff_STAR_.call(null,G__50999_51272,G__51000_51273,G__51001_51274,G__51002_51275,G__51003_51276));


var G__51278 = seq__50977_51258;
var G__51279 = chunk__50978_51260;
var G__51280 = count__50979_51261;
var G__51281 = (i__50980_51262 + (1));
seq__50977_51258 = G__51278;
chunk__50978_51260 = G__51279;
count__50979_51261 = G__51280;
i__50980_51262 = G__51281;
continue;
} else {
var temp__5753__auto___51285 = cljs.core.seq(seq__50977_51258);
if(temp__5753__auto___51285){
var seq__50977_51287__$1 = temp__5753__auto___51285;
if(cljs.core.chunked_seq_QMARK_(seq__50977_51287__$1)){
var c__4638__auto___51290 = cljs.core.chunk_first(seq__50977_51287__$1);
var G__51291 = cljs.core.chunk_rest(seq__50977_51287__$1);
var G__51292 = c__4638__auto___51290;
var G__51293 = cljs.core.count(c__4638__auto___51290);
var G__51294 = (0);
seq__50977_51258 = G__51291;
chunk__50978_51260 = G__51292;
count__50979_51261 = G__51293;
i__50980_51262 = G__51294;
continue;
} else {
var va_51296 = cljs.core.first(seq__50977_51287__$1);
var G__51012_51298 = script;
var G__51013_51299 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_51296);
var G__51014_51300 = va_51296;
var G__51015_51301 = editscript.edit.nada();
var G__51016_51302 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51012_51298,G__51013_51299,G__51014_51300,G__51015_51301,G__51016_51302) : editscript.diff.quick.diff_STAR_.call(null,G__51012_51298,G__51013_51299,G__51014_51300,G__51015_51301,G__51016_51302));


var G__51304 = cljs.core.next(seq__50977_51287__$1);
var G__51305 = null;
var G__51306 = (0);
var G__51307 = (0);
seq__50977_51258 = G__51304;
chunk__50978_51260 = G__51305;
count__50979_51261 = G__51306;
i__50980_51262 = G__51307;
continue;
}
} else {
}
}
break;
}

var seq__51023 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a));
var chunk__51024 = null;
var count__51025 = (0);
var i__51026 = (0);
while(true){
if((i__51026 < count__51025)){
var vb = chunk__51024.cljs$core$IIndexed$_nth$arity$2(null,i__51026);
var G__51065_51315 = script;
var G__51066_51316 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__51067_51317 = editscript.edit.nada();
var G__51068_51318 = vb;
var G__51069_51319 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51065_51315,G__51066_51316,G__51067_51317,G__51068_51318,G__51069_51319) : editscript.diff.quick.diff_STAR_.call(null,G__51065_51315,G__51066_51316,G__51067_51317,G__51068_51318,G__51069_51319));


var G__51324 = seq__51023;
var G__51325 = chunk__51024;
var G__51326 = count__51025;
var G__51327 = (i__51026 + (1));
seq__51023 = G__51324;
chunk__51024 = G__51325;
count__51025 = G__51326;
i__51026 = G__51327;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51023);
if(temp__5753__auto__){
var seq__51023__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51023__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51023__$1);
var G__51331 = cljs.core.chunk_rest(seq__51023__$1);
var G__51332 = c__4638__auto__;
var G__51333 = cljs.core.count(c__4638__auto__);
var G__51334 = (0);
seq__51023 = G__51331;
chunk__51024 = G__51332;
count__51025 = G__51333;
i__51026 = G__51334;
continue;
} else {
var vb = cljs.core.first(seq__51023__$1);
var G__51078_51339 = script;
var G__51079_51340 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__51080_51341 = editscript.edit.nada();
var G__51081_51342 = vb;
var G__51082_51343 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51078_51339,G__51079_51340,G__51080_51341,G__51081_51342,G__51082_51343) : editscript.diff.quick.diff_STAR_.call(null,G__51078_51339,G__51079_51340,G__51080_51341,G__51081_51342,G__51082_51343));


var G__51353 = cljs.core.next(seq__51023__$1);
var G__51354 = null;
var G__51355 = (0);
var G__51356 = (0);
seq__51023 = G__51353;
chunk__51024 = G__51354;
count__51025 = G__51355;
i__51026 = G__51356;
continue;
}
} else {
return null;
}
}
break;
}
});
editscript.diff.quick.diff_lst = (function editscript$diff$quick$diff_lst(script,path,a,b,opts){
return editscript.diff.quick.diff_vec(script,path,cljs.core.vec(a),cljs.core.vec(b),opts);
});
editscript.diff.quick.diff_val = (function editscript$diff$quick$diff_val(script,path,a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.edit.get_type(b),new cljs.core.Keyword(null,"nil","nil",99600501))){
return editscript.edit.delete_data(script,path);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,opts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
var G__51115 = editscript.edit.get_type(a);
var G__51115__$1 = (((G__51115 instanceof cljs.core.Keyword))?G__51115.fqn:null);
switch (G__51115__$1) {
case "nil":
return editscript.edit.add_data(script,path,b);

break;
case "map":
var G__51117 = editscript.edit.get_type(b);
var G__51117__$1 = (((G__51117 instanceof cljs.core.Keyword))?G__51117.fqn:null);
switch (G__51117__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "map":
var fexpr__51123 = new cljs.core.Var(function(){return editscript.diff.quick.diff_map;},new cljs.core.Symbol("editscript.diff.quick","diff-map","editscript.diff.quick/diff-map",1973051147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-map","diff-map",-711364586,null),"editscript/diff/quick.cljc",16,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_map)?editscript.diff.quick.diff_map.cljs$lang$test:null)]));
return (fexpr__51123.cljs$core$IFn$_invoke$arity$5 ? fexpr__51123.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51123.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "vec":
var G__51130 = editscript.edit.get_type(b);
var G__51130__$1 = (((G__51130 instanceof cljs.core.Keyword))?G__51130.fqn:null);
switch (G__51130__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "vec":
var fexpr__51136 = new cljs.core.Var(function(){return editscript.diff.quick.diff_vec;},new cljs.core.Symbol("editscript.diff.quick","diff-vec","editscript.diff.quick/diff-vec",-1781503036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-vec","diff-vec",-170849589,null),"editscript/diff/quick.cljc",16,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Adjust the indices to have a correct editscript",(cljs.core.truth_(editscript.diff.quick.diff_vec)?editscript.diff.quick.diff_vec.cljs$lang$test:null)]));
return (fexpr__51136.cljs$core$IFn$_invoke$arity$5 ? fexpr__51136.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51136.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "set":
var G__51139 = editscript.edit.get_type(b);
var G__51139__$1 = (((G__51139 instanceof cljs.core.Keyword))?G__51139.fqn:null);
switch (G__51139__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "set":
var fexpr__51142 = new cljs.core.Var(function(){return editscript.diff.quick.diff_set;},new cljs.core.Symbol("editscript.diff.quick","diff-set","editscript.diff.quick/diff-set",1246078730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-set","diff-set",-364591609,null),"editscript/diff/quick.cljc",16,1,55,55,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_set)?editscript.diff.quick.diff_set.cljs$lang$test:null)]));
return (fexpr__51142.cljs$core$IFn$_invoke$arity$5 ? fexpr__51142.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51142.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "lst":
var G__51154 = editscript.edit.get_type(b);
var G__51154__$1 = (((G__51154 instanceof cljs.core.Keyword))?G__51154.fqn:null);
switch (G__51154__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "lst":
var fexpr__51166 = new cljs.core.Var(function(){return editscript.diff.quick.diff_lst;},new cljs.core.Symbol("editscript.diff.quick","diff-lst","editscript.diff.quick/diff-lst",-1885319001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-lst","diff-lst",799109538,null),"editscript/diff/quick.cljc",16,1,62,62,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_lst)?editscript.diff.quick.diff_lst.cljs$lang$test:null)]));
return (fexpr__51166.cljs$core$IFn$_invoke$arity$5 ? fexpr__51166.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51166.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "str":
if(cljs.core.truth_(new cljs.core.Keyword(null,"str-diff?","str-diff?",865254760).cljs$core$IFn$_invoke$arity$1(opts))){
var G__51169 = editscript.edit.get_type(b);
var G__51169__$1 = (((G__51169 instanceof cljs.core.Keyword))?G__51169.fqn:null);
switch (G__51169__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "str":
var fexpr__51176 = new cljs.core.Var(function(){return editscript.util.common.diff_str;},new cljs.core.Symbol("editscript.util.common","diff-str","editscript.util.common/diff-str",283460236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"editscript.util.common","editscript.util.common",1209759084,null),new cljs.core.Symbol(null,"diff-str","diff-str",1255675210,null),"editscript/util/common.cljc",15,1,135,135,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)),null,(cljs.core.truth_(editscript.util.common.diff_str)?editscript.util.common.diff_str.cljs$lang$test:null)]));
return (fexpr__51176.cljs$core$IFn$_invoke$arity$5 ? fexpr__51176.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51176.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}
} else {
return editscript.diff.quick.diff_val(script,path,a,b);
}

break;
case "val":
return editscript.diff.quick.diff_val(script,path,a,b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51115__$1)].join('')));

}
}
});
/**
 * Create an EditScript that represents the difference between `b` and `a`
 *   This algorithm is fast, but it does not attempt to generate an EditScript
 *   that is minimal in size
 */
editscript.diff.quick.diff = (function editscript$diff$quick$diff(var_args){
var G__51191 = arguments.length;
switch (G__51191) {
case 2:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-diff?","str-diff?",865254760),false], null));
}));

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
editscript.diff.quick.diff_STAR_(script,cljs.core.PersistentVector.EMPTY,a,b,opts);

return script;
}));

(editscript.diff.quick.diff.cljs$lang$maxFixedArity = 3);

editscript.util.common.diff_algo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quick","quick",841581564),(function (a,b,opts){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,opts);
}));

//# sourceMappingURL=editscript.diff.quick.js.map
