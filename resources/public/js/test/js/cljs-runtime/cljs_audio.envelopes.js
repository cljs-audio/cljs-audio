goog.provide('cljs_audio.envelopes');
cljs_audio.envelopes.at_time = (function cljs_audio$envelopes$at_time(v,time){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-target-at-time","set-target-at-time",1882271623),v,time,0.001], null)], null);
});
cljs_audio.envelopes.cancel_at_time_BANG_ = (function cljs_audio$envelopes$cancel_at_time_BANG_(time){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-scheduled-values","cancel-scheduled-values",1877787239),time], null)], null);
});
cljs_audio.envelopes.at_time_BANG_ = (function cljs_audio$envelopes$at_time_BANG_(v,time){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.envelopes.cancel_at_time_BANG_(time),cljs_audio.envelopes.at_time(v,time));
});
cljs_audio.envelopes.adsr = (function cljs_audio$envelopes$adsr(a,d,s,r,s_length,value,time){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.envelopes.at_time((0),time),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear-ramp-to-value-at-time","linear-ramp-to-value-at-time",-1648880941),value,(time + a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear-ramp-to-value-at-time","linear-ramp-to-value-at-time",-1648880941),(s * value),((time + a) + d)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear-ramp-to-value-at-time","linear-ramp-to-value-at-time",-1648880941),(s * value),(((time + a) + d) + s_length)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear-ramp-to-value-at-time","linear-ramp-to-value-at-time",-1648880941),(0),((((time + a) + d) + s_length) + r)], null)], null));
});
cljs_audio.envelopes.adsr_BANG_ = (function cljs_audio$envelopes$adsr_BANG_(a,d,s,r,s_length,value,time){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.envelopes.cancel_at_time_BANG_(time),cljs_audio.envelopes.adsr(a,d,s,r,s_length,value,time));
});

//# sourceMappingURL=cljs_audio.envelopes.js.map
