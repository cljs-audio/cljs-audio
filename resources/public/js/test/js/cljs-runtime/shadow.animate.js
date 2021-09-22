goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_51704 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_51704(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_51705 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_51705(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_51708 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_51708(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_51709 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_51709(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_51711 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_51711(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51008){
var vec__51009 = p__51008;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51009,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51009,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4210__auto__ = delay;
if(cljs.core.truth_(and__4210__auto__)){
return (delay > (0));
} else {
return and__4210__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_51713 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_51713(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_51714 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_51714(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_51717 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_51717(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_51718 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_51718(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4695__auto__ = self__.items.length;
var i__42965__auto__ = (0);
while(true){
if((i__42965__auto__ < n__4695__auto__)){
var map__51121_51722 = (self__.items[i__42965__auto__]);
var map__51121_51723__$1 = cljs.core.__destructure_map(map__51121_51722);
var el_51724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121_51723__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_51725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121_51723__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_51724,from_51725);

var G__51727 = (i__42965__auto__ + (1));
i__42965__auto__ = G__51727;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4695__auto__ = self__.items.length;
var i__42965__auto__ = (0);
while(true){
if((i__42965__auto__ < n__4695__auto__)){
var map__51131_51729 = (self__.items[i__42965__auto__]);
var map__51131_51730__$1 = cljs.core.__destructure_map(map__51131_51729);
var el_51731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131_51730__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_51732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131_51730__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_51733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131_51730__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_51732["transition"] = transition_51733);

goog.style.setStyle(el_51731,to_51732);

var G__51735 = (i__42965__auto__ + (1));
i__42965__auto__ = G__51735;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4695__auto__ = self__.items.length;
var i__42965__auto__ = (0);
while(true){
if((i__42965__auto__ < n__4695__auto__)){
var map__51140_51736 = (self__.items[i__42965__auto__]);
var map__51140_51737__$1 = cljs.core.__destructure_map(map__51140_51736);
var el_51738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51140_51737__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_51739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51140_51737__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_51739["transition"] = null);

goog.style.setStyle(el_51738,toggles_51739);

var G__51740 = (i__42965__auto__ + (1));
i__42965__auto__ = G__51740;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k51158,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__51178 = k51158;
var G__51178__$1 = (((G__51178 instanceof cljs.core.Keyword))?G__51178.fqn:null);
switch (G__51178__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51158,else__4464__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__51184){
var vec__51187 = p__51184;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51187,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51187,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51157){
var self__ = this;
var G__51157__$1 = this;
return (new cljs.core.RecordIter((0),G__51157__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51159,other51160){
var self__ = this;
var this51159__$1 = this;
return (((!((other51160 == null)))) && ((((this51159__$1.constructor === other51160.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51159__$1.el,other51160.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51159__$1.from,other51160.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51159__$1.to,other51160.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51159__$1.toggles,other51160.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51159__$1.transition,other51160.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51159__$1.__extmap,other51160.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k51158){
var self__ = this;
var this__4468__auto____$1 = this;
var G__51263 = k51158;
var G__51263__$1 = (((G__51263 instanceof cljs.core.Keyword))?G__51263.fqn:null);
switch (G__51263__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51158);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__51157){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__51282 = cljs.core.keyword_identical_QMARK_;
var expr__51283 = k__4470__auto__;
if(cljs.core.truth_((pred__51282.cljs$core$IFn$_invoke$arity$2 ? pred__51282.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__51283) : pred__51282.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__51283)))){
return (new shadow.animate.AnimationStep(G__51157,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51282.cljs$core$IFn$_invoke$arity$2 ? pred__51282.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__51283) : pred__51282.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__51283)))){
return (new shadow.animate.AnimationStep(self__.el,G__51157,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51282.cljs$core$IFn$_invoke$arity$2 ? pred__51282.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__51283) : pred__51282.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__51283)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__51157,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51282.cljs$core$IFn$_invoke$arity$2 ? pred__51282.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__51283) : pred__51282.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__51283)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__51157,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51282.cljs$core$IFn$_invoke$arity$2 ? pred__51282.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__51283) : pred__51282.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__51283)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__51157,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__51157),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__51157){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__51157,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__51168){
var extmap__4501__auto__ = (function (){var G__51393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51168,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__51168)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51393);
} else {
return G__51393;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__51168),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__51168),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__51168),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__51168),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__51168),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$animate$setup_$_iter__51411(s__51412){
return (new cljs.core.LazySeq(null,(function (){
var s__51412__$1 = s__51412;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51412__$1);
if(temp__5753__auto__){
var s__51412__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51412__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__51412__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__51414 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__51413 = (0);
while(true){
if((i__51413 < size__4610__auto__)){
var vec__51433 = cljs.core._nth(c__4609__auto__,i__51413);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433,(1),null);
cljs.core.chunk_append(b__51414,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__51777 = (i__51413 + (1));
i__51413 = G__51777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51414),shadow$animate$setup_$_iter__51411(cljs.core.chunk_rest(s__51412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51414),null);
}
} else {
var vec__51447 = cljs.core.first(s__51412__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51447,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51447,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__51411(cljs.core.rest(s__51412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__43375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_51464){
var state_val_51466 = (state_51464[(1)]);
if((state_val_51466 === (1))){
var inst_51457 = shadow.animate.get_duration(animator);
var inst_51458 = cljs.core.async.timeout(inst_51457);
var state_51464__$1 = state_51464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51464__$1,(2),inst_51458);
} else {
if((state_val_51466 === (2))){
var inst_51460 = (state_51464[(2)]);
var inst_51462 = shadow.animate.finish_BANG_(animator);
var state_51464__$1 = (function (){var statearr_51470 = state_51464;
(statearr_51470[(7)] = inst_51460);

(statearr_51470[(8)] = inst_51462);

return statearr_51470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51464__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__42837__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__42837__auto____0 = (function (){
var statearr_51474 = [null,null,null,null,null,null,null,null,null];
(statearr_51474[(0)] = shadow$animate$continue_BANG__$_state_machine__42837__auto__);

(statearr_51474[(1)] = (1));

return statearr_51474;
});
var shadow$animate$continue_BANG__$_state_machine__42837__auto____1 = (function (state_51464){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_51464);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e51475){var ex__42840__auto__ = e51475;
var statearr_51479_51784 = state_51464;
(statearr_51479_51784[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_51464[(4)]))){
var statearr_51482_51787 = state_51464;
(statearr_51482_51787[(1)] = cljs.core.first((state_51464[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51789 = state_51464;
state_51464 = G__51789;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__42837__auto__ = function(state_51464){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__42837__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__42837__auto____1.call(this,state_51464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__42837__auto____0;
shadow$animate$continue_BANG__$_state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__42837__auto____1;
return shadow$animate$continue_BANG__$_state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_51486 = f__43376__auto__();
(statearr_51486[(6)] = c__43375__auto__);

return statearr_51486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

return c__43375__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__51496 = arguments.length;
switch (G__51496) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51506 = (function (attr,from,to,timing,delay,meta51507){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta51507 = meta51507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51508,meta51507__$1){
var self__ = this;
var _51508__$1 = this;
return (new shadow.animate.t_shadow$animate51506(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta51507__$1));
}));

(shadow.animate.t_shadow$animate51506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51508){
var self__ = this;
var _51508__$1 = this;
return self__.meta51507;
}));

(shadow.animate.t_shadow$animate51506.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51506.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate51506.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate51506.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51506.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate51506.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate51506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta51507","meta51507",-333814433,null)], null);
}));

(shadow.animate.t_shadow$animate51506.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51506.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51506");

(shadow.animate.t_shadow$animate51506.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51506");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51506.
 */
shadow.animate.__GT_t_shadow$animate51506 = (function shadow$animate$__GT_t_shadow$animate51506(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta51507){
return (new shadow.animate.t_shadow$animate51506(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta51507));
});

}

return (new shadow.animate.t_shadow$animate51506(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51533 = (function (attr,from,to,meta51534){
this.attr = attr;
this.from = from;
this.to = to;
this.meta51534 = meta51534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51535,meta51534__$1){
var self__ = this;
var _51535__$1 = this;
return (new shadow.animate.t_shadow$animate51533(self__.attr,self__.from,self__.to,meta51534__$1));
}));

(shadow.animate.t_shadow$animate51533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51535){
var self__ = this;
var _51535__$1 = this;
return self__.meta51534;
}));

(shadow.animate.t_shadow$animate51533.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51533.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51533.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate51533.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate51533.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51533.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta51534","meta51534",1362920727,null)], null);
}));

(shadow.animate.t_shadow$animate51533.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51533.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51533");

(shadow.animate.t_shadow$animate51533.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51533");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51533.
 */
shadow.animate.__GT_t_shadow$animate51533 = (function shadow$animate$toggle_$___GT_t_shadow$animate51533(attr__$1,from__$1,to__$1,meta51534){
return (new shadow.animate.t_shadow$animate51533(attr__$1,from__$1,to__$1,meta51534));
});

}

return (new shadow.animate.t_shadow$animate51533(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__51547 = arguments.length;
switch (G__51547) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51553 = (function (attrs,meta51554){
this.attrs = attrs;
this.meta51554 = meta51554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51555,meta51554__$1){
var self__ = this;
var _51555__$1 = this;
return (new shadow.animate.t_shadow$animate51553(self__.attrs,meta51554__$1));
}));

(shadow.animate.t_shadow$animate51553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51555){
var self__ = this;
var _51555__$1 = this;
return self__.meta51554;
}));

(shadow.animate.t_shadow$animate51553.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51553.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51553.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate51553.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51553.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51553.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51554","meta51554",1357008480,null)], null);
}));

(shadow.animate.t_shadow$animate51553.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51553.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51553");

(shadow.animate.t_shadow$animate51553.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51553");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51553.
 */
shadow.animate.__GT_t_shadow$animate51553 = (function shadow$animate$__GT_t_shadow$animate51553(attrs__$1,meta51554){
return (new shadow.animate.t_shadow$animate51553(attrs__$1,meta51554));
});

}

return (new shadow.animate.t_shadow$animate51553(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51573 = (function (attr,meta51574){
this.attr = attr;
this.meta51574 = meta51574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51575,meta51574__$1){
var self__ = this;
var _51575__$1 = this;
return (new shadow.animate.t_shadow$animate51573(self__.attr,meta51574__$1));
}));

(shadow.animate.t_shadow$animate51573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51575){
var self__ = this;
var _51575__$1 = this;
return self__.meta51574;
}));

(shadow.animate.t_shadow$animate51573.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51573.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51573.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51573.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate51573.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51573.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta51574","meta51574",-1671601071,null)], null);
}));

(shadow.animate.t_shadow$animate51573.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51573.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51573");

(shadow.animate.t_shadow$animate51573.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51573");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51573.
 */
shadow.animate.__GT_t_shadow$animate51573 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate51573(attr__$1,meta51574){
return (new shadow.animate.t_shadow$animate51573(attr__$1,meta51574));
});

}

return (new shadow.animate.t_shadow$animate51573(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51810 = arguments.length;
var i__4819__auto___51811 = (0);
while(true){
if((i__4819__auto___51811 < len__4818__auto___51810)){
args__4824__auto__.push((arguments[i__4819__auto___51811]));

var G__51812 = (i__4819__auto___51811 + (1));
i__4819__auto___51811 = G__51812;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5751__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var adef = temp__5751__auto__;
var G__51813 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__51814 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__51815 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__51816 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__51817 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__51818 = cljs.core.rest(transitions__$1);
to = G__51813;
from = G__51814;
toggles = G__51815;
timings = G__51816;
delays = G__51817;
transitions__$1 = G__51818;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51624 = (function (transitions,to,from,toggles,timings,delays,temp__5751__auto__,meta51625){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5751__auto__ = temp__5751__auto__;
this.meta51625 = meta51625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_51626,meta51625__$1){
var self__ = this;
var _51626__$1 = this;
return (new shadow.animate.t_shadow$animate51624(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5751__auto__,meta51625__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_51626){
var self__ = this;
var _51626__$1 = this;
return self__.meta51625;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51624.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"meta51625","meta51625",-2019271482,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51624.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51624.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51624");

(shadow.animate.t_shadow$animate51624.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51624");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate51624.
 */
shadow.animate.__GT_t_shadow$animate51624 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function shadow$animate$__GT_t_shadow$animate51624(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta51625){
return (new shadow.animate.t_shadow$animate51624(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta51625));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
;

}

return (new shadow.animate.t_shadow$animate51624(transitions__$1,to,from,toggles,timings,delays,temp__5751__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq51600){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51600));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__51639 = arguments.length;
switch (G__51639) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__51646 = arguments.length;
switch (G__51646) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__51657 = arguments.length;
switch (G__51657) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51664 = (function (from,to,timing,delay,meta51665){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta51665 = meta51665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51666,meta51665__$1){
var self__ = this;
var _51666__$1 = this;
return (new shadow.animate.t_shadow$animate51664(self__.from,self__.to,self__.timing,self__.delay,meta51665__$1));
}));

(shadow.animate.t_shadow$animate51664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51666){
var self__ = this;
var _51666__$1 = this;
return self__.meta51665;
}));

(shadow.animate.t_shadow$animate51664.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51664.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51664.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51664.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate51664.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51664.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate51664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta51665","meta51665",1057976967,null)], null);
}));

(shadow.animate.t_shadow$animate51664.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51664.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51664");

(shadow.animate.t_shadow$animate51664.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51664");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51664.
 */
shadow.animate.__GT_t_shadow$animate51664 = (function shadow$animate$__GT_t_shadow$animate51664(from__$1,to__$1,timing__$1,delay__$1,meta51665){
return (new shadow.animate.t_shadow$animate51664(from__$1,to__$1,timing__$1,delay__$1,meta51665));
});

}

return (new shadow.animate.t_shadow$animate51664(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__51684 = arguments.length;
switch (G__51684) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51688 = (function (from,to,timing,delay,meta51689){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta51689 = meta51689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51690,meta51689__$1){
var self__ = this;
var _51690__$1 = this;
return (new shadow.animate.t_shadow$animate51688(self__.from,self__.to,self__.timing,self__.delay,meta51689__$1));
}));

(shadow.animate.t_shadow$animate51688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51690){
var self__ = this;
var _51690__$1 = this;
return self__.meta51689;
}));

(shadow.animate.t_shadow$animate51688.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51688.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51688.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51688.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate51688.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51688.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate51688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta51689","meta51689",-122244210,null)], null);
}));

(shadow.animate.t_shadow$animate51688.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51688.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51688");

(shadow.animate.t_shadow$animate51688.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51688");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51688.
 */
shadow.animate.__GT_t_shadow$animate51688 = (function shadow$animate$__GT_t_shadow$animate51688(from__$1,to__$1,timing__$1,delay__$1,meta51689){
return (new shadow.animate.t_shadow$animate51688(from__$1,to__$1,timing__$1,delay__$1,meta51689));
});

}

return (new shadow.animate.t_shadow$animate51688(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
