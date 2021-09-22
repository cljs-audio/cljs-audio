goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46147,res){
var map__46148 = p__46147;
var map__46148__$1 = cljs.core.__destructure_map(map__46148);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46151 = res;
var G__46151__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46151,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46151);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46151__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46151__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46162 = arguments.length;
switch (G__46162) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46171,msg,handlers,timeout_after_ms){
var map__46172 = p__46171;
var map__46172__$1 = cljs.core.__destructure_map(map__46172);
var runtime = map__46172__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46172__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46432 = arguments.length;
var i__4819__auto___46433 = (0);
while(true){
if((i__4819__auto___46433 < len__4818__auto___46432)){
args__4824__auto__.push((arguments[i__4819__auto___46433]));

var G__46434 = (i__4819__auto___46433 + (1));
i__4819__auto___46433 = G__46434;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46199,ev,args){
var map__46205 = p__46199;
var map__46205__$1 = cljs.core.__destructure_map(map__46205);
var runtime = map__46205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46213 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46216 = null;
var count__46217 = (0);
var i__46218 = (0);
while(true){
if((i__46218 < count__46217)){
var ext = chunk__46216.cljs$core$IIndexed$_nth$arity$2(null,i__46218);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46450 = seq__46213;
var G__46451 = chunk__46216;
var G__46452 = count__46217;
var G__46453 = (i__46218 + (1));
seq__46213 = G__46450;
chunk__46216 = G__46451;
count__46217 = G__46452;
i__46218 = G__46453;
continue;
} else {
var G__46454 = seq__46213;
var G__46455 = chunk__46216;
var G__46456 = count__46217;
var G__46457 = (i__46218 + (1));
seq__46213 = G__46454;
chunk__46216 = G__46455;
count__46217 = G__46456;
i__46218 = G__46457;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46213);
if(temp__5753__auto__){
var seq__46213__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46213__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46213__$1);
var G__46464 = cljs.core.chunk_rest(seq__46213__$1);
var G__46465 = c__4638__auto__;
var G__46466 = cljs.core.count(c__4638__auto__);
var G__46467 = (0);
seq__46213 = G__46464;
chunk__46216 = G__46465;
count__46217 = G__46466;
i__46218 = G__46467;
continue;
} else {
var ext = cljs.core.first(seq__46213__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46468 = cljs.core.next(seq__46213__$1);
var G__46469 = null;
var G__46470 = (0);
var G__46471 = (0);
seq__46213 = G__46468;
chunk__46216 = G__46469;
count__46217 = G__46470;
i__46218 = G__46471;
continue;
} else {
var G__46472 = cljs.core.next(seq__46213__$1);
var G__46473 = null;
var G__46474 = (0);
var G__46475 = (0);
seq__46213 = G__46472;
chunk__46216 = G__46473;
count__46217 = G__46474;
i__46218 = G__46475;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46177){
var G__46178 = cljs.core.first(seq46177);
var seq46177__$1 = cljs.core.next(seq46177);
var G__46179 = cljs.core.first(seq46177__$1);
var seq46177__$2 = cljs.core.next(seq46177__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46178,G__46179,seq46177__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46241,p__46242){
var map__46244 = p__46241;
var map__46244__$1 = cljs.core.__destructure_map(map__46244);
var runtime = map__46244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46245 = p__46242;
var map__46245__$1 = cljs.core.__destructure_map(map__46245);
var msg = map__46245__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46245__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46248 = cljs.core.deref(state_ref);
var map__46248__$1 = cljs.core.__destructure_map(map__46248);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46254){
var map__46256 = p__46254;
var map__46256__$1 = cljs.core.__destructure_map(map__46256);
var runtime = map__46256__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46256__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46270,msg){
var map__46273 = p__46270;
var map__46273__$1 = cljs.core.__destructure_map(map__46273);
var runtime = map__46273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46286,key,p__46287){
var map__46288 = p__46286;
var map__46288__$1 = cljs.core.__destructure_map(map__46288);
var state = map__46288__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46288__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46289 = p__46287;
var map__46289__$1 = cljs.core.__destructure_map(map__46289);
var spec = map__46289__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46289__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46296,key,spec){
var map__46297 = p__46296;
var map__46297__$1 = cljs.core.__destructure_map(map__46297);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46300_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46300_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46303_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46303_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46304_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46304_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46305_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46305_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46306_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46306_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46341,key){
var map__46344 = p__46341;
var map__46344__$1 = cljs.core.__destructure_map(map__46344);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46358,msg){
var map__46359 = p__46358;
var map__46359__$1 = cljs.core.__destructure_map(map__46359);
var runtime = map__46359__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46359__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46370,p__46371){
var map__46372 = p__46370;
var map__46372__$1 = cljs.core.__destructure_map(map__46372);
var runtime = map__46372__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46373 = p__46371;
var map__46373__$1 = cljs.core.__destructure_map(map__46373);
var msg = map__46373__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46384 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46386 = null;
var count__46387 = (0);
var i__46388 = (0);
while(true){
if((i__46388 < count__46387)){
var map__46408 = chunk__46386.cljs$core$IIndexed$_nth$arity$2(null,i__46388);
var map__46408__$1 = cljs.core.__destructure_map(map__46408);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46408__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46563 = seq__46384;
var G__46564 = chunk__46386;
var G__46565 = count__46387;
var G__46566 = (i__46388 + (1));
seq__46384 = G__46563;
chunk__46386 = G__46564;
count__46387 = G__46565;
i__46388 = G__46566;
continue;
} else {
var G__46568 = seq__46384;
var G__46569 = chunk__46386;
var G__46570 = count__46387;
var G__46571 = (i__46388 + (1));
seq__46384 = G__46568;
chunk__46386 = G__46569;
count__46387 = G__46570;
i__46388 = G__46571;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46384);
if(temp__5753__auto__){
var seq__46384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46384__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46384__$1);
var G__46573 = cljs.core.chunk_rest(seq__46384__$1);
var G__46574 = c__4638__auto__;
var G__46575 = cljs.core.count(c__4638__auto__);
var G__46576 = (0);
seq__46384 = G__46573;
chunk__46386 = G__46574;
count__46387 = G__46575;
i__46388 = G__46576;
continue;
} else {
var map__46412 = cljs.core.first(seq__46384__$1);
var map__46412__$1 = cljs.core.__destructure_map(map__46412);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46579 = cljs.core.next(seq__46384__$1);
var G__46580 = null;
var G__46581 = (0);
var G__46582 = (0);
seq__46384 = G__46579;
chunk__46386 = G__46580;
count__46387 = G__46581;
i__46388 = G__46582;
continue;
} else {
var G__46583 = cljs.core.next(seq__46384__$1);
var G__46584 = null;
var G__46585 = (0);
var G__46586 = (0);
seq__46384 = G__46583;
chunk__46386 = G__46584;
count__46387 = G__46585;
i__46388 = G__46586;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
