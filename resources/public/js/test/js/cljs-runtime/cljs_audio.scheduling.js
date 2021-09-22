goog.provide('cljs_audio.scheduling');
cljs_audio.scheduling.schedule_parameters = (function cljs_audio$scheduling$schedule_parameters(schedulers,events){
var schedulers_keys = cljs.core.keys(schedulers);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,event){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res__$1,scheduler_key){
var curr_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(res__$1,scheduler_key,cljs.core.PersistentVector.EMPTY);
var scheduler = (scheduler_key.cljs$core$IFn$_invoke$arity$1 ? scheduler_key.cljs$core$IFn$_invoke$arity$1(schedulers) : scheduler_key.call(null,schedulers));
var new_value = (function (){var G__49163 = (scheduler_key.cljs$core$IFn$_invoke$arity$1 ? scheduler_key.cljs$core$IFn$_invoke$arity$1(event) : scheduler_key.call(null,event));
var G__49164 = new cljs.core.Keyword("cljs-audio.scheduling","time","cljs-audio.scheduling/time",-1725715215).cljs$core$IFn$_invoke$arity$1(event);
return (scheduler.cljs$core$IFn$_invoke$arity$2 ? scheduler.cljs$core$IFn$_invoke$arity$2(G__49163,G__49164) : scheduler.call(null,G__49163,G__49164));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$1,scheduler_key,cljs.core.into.cljs$core$IFn$_invoke$arity$2(curr_value,new_value));
}),res,schedulers_keys);
}),cljs.core.PersistentArrayMap.EMPTY,events);
});

//# sourceMappingURL=cljs_audio.scheduling.js.map
