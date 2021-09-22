goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49284 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49284(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49285 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49285(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47573 = coll;
var G__47574 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47573,G__47574) : shadow.dom.lazy_native_coll_seq.call(null,G__47573,G__47574));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47641 = arguments.length;
switch (G__47641) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47664 = arguments.length;
switch (G__47664) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47683 = arguments.length;
switch (G__47683) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47702 = arguments.length;
switch (G__47702) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47731 = arguments.length;
switch (G__47731) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47755 = arguments.length;
switch (G__47755) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47779){if((e47779 instanceof Object)){
var e = e47779;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47779;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47813 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47817 = null;
var count__47818 = (0);
var i__47819 = (0);
while(true){
if((i__47819 < count__47818)){
var el = chunk__47817.cljs$core$IIndexed$_nth$arity$2(null,i__47819);
var handler_49313__$1 = ((function (seq__47813,chunk__47817,count__47818,i__47819,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47813,chunk__47817,count__47818,i__47819,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49313__$1);


var G__49314 = seq__47813;
var G__49315 = chunk__47817;
var G__49316 = count__47818;
var G__49317 = (i__47819 + (1));
seq__47813 = G__49314;
chunk__47817 = G__49315;
count__47818 = G__49316;
i__47819 = G__49317;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47813);
if(temp__5753__auto__){
var seq__47813__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47813__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47813__$1);
var G__49320 = cljs.core.chunk_rest(seq__47813__$1);
var G__49321 = c__4638__auto__;
var G__49322 = cljs.core.count(c__4638__auto__);
var G__49323 = (0);
seq__47813 = G__49320;
chunk__47817 = G__49321;
count__47818 = G__49322;
i__47819 = G__49323;
continue;
} else {
var el = cljs.core.first(seq__47813__$1);
var handler_49326__$1 = ((function (seq__47813,chunk__47817,count__47818,i__47819,el,seq__47813__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47813,chunk__47817,count__47818,i__47819,el,seq__47813__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49326__$1);


var G__49327 = cljs.core.next(seq__47813__$1);
var G__49328 = null;
var G__49329 = (0);
var G__49330 = (0);
seq__47813 = G__49327;
chunk__47817 = G__49328;
count__47818 = G__49329;
i__47819 = G__49330;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47889 = arguments.length;
switch (G__47889) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47914 = cljs.core.seq(events);
var chunk__47915 = null;
var count__47916 = (0);
var i__47917 = (0);
while(true){
if((i__47917 < count__47916)){
var vec__47949 = chunk__47915.cljs$core$IIndexed$_nth$arity$2(null,i__47917);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47949,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49348 = seq__47914;
var G__49349 = chunk__47915;
var G__49350 = count__47916;
var G__49351 = (i__47917 + (1));
seq__47914 = G__49348;
chunk__47915 = G__49349;
count__47916 = G__49350;
i__47917 = G__49351;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47914);
if(temp__5753__auto__){
var seq__47914__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47914__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47914__$1);
var G__49353 = cljs.core.chunk_rest(seq__47914__$1);
var G__49354 = c__4638__auto__;
var G__49355 = cljs.core.count(c__4638__auto__);
var G__49356 = (0);
seq__47914 = G__49353;
chunk__47915 = G__49354;
count__47916 = G__49355;
i__47917 = G__49356;
continue;
} else {
var vec__47962 = cljs.core.first(seq__47914__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49360 = cljs.core.next(seq__47914__$1);
var G__49361 = null;
var G__49362 = (0);
var G__49363 = (0);
seq__47914 = G__49360;
chunk__47915 = G__49361;
count__47916 = G__49362;
i__47917 = G__49363;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47970 = cljs.core.seq(styles);
var chunk__47971 = null;
var count__47972 = (0);
var i__47973 = (0);
while(true){
if((i__47973 < count__47972)){
var vec__47992 = chunk__47971.cljs$core$IIndexed$_nth$arity$2(null,i__47973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49367 = seq__47970;
var G__49368 = chunk__47971;
var G__49369 = count__47972;
var G__49370 = (i__47973 + (1));
seq__47970 = G__49367;
chunk__47971 = G__49368;
count__47972 = G__49369;
i__47973 = G__49370;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47970);
if(temp__5753__auto__){
var seq__47970__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47970__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47970__$1);
var G__49372 = cljs.core.chunk_rest(seq__47970__$1);
var G__49373 = c__4638__auto__;
var G__49374 = cljs.core.count(c__4638__auto__);
var G__49375 = (0);
seq__47970 = G__49372;
chunk__47971 = G__49373;
count__47972 = G__49374;
i__47973 = G__49375;
continue;
} else {
var vec__48004 = cljs.core.first(seq__47970__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48004,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49381 = cljs.core.next(seq__47970__$1);
var G__49382 = null;
var G__49383 = (0);
var G__49384 = (0);
seq__47970 = G__49381;
chunk__47971 = G__49382;
count__47972 = G__49383;
i__47973 = G__49384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48016_49385 = key;
var G__48016_49386__$1 = (((G__48016_49385 instanceof cljs.core.Keyword))?G__48016_49385.fqn:null);
switch (G__48016_49386__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49401 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_49401,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_49401,"aria-");
}
})())){
el.setAttribute(ks_49401,value);
} else {
(el[ks_49401] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48062){
var map__48063 = p__48062;
var map__48063__$1 = cljs.core.__destructure_map(map__48063);
var props = map__48063__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48063__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48066 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48066,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48066,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48066,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48075 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48075,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48075;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48082 = arguments.length;
switch (G__48082) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48102){
var vec__48107 = p__48102;
var seq__48109 = cljs.core.seq(vec__48107);
var first__48110 = cljs.core.first(seq__48109);
var seq__48109__$1 = cljs.core.next(seq__48109);
var nn = first__48110;
var first__48110__$1 = cljs.core.first(seq__48109__$1);
var seq__48109__$2 = cljs.core.next(seq__48109__$1);
var np = first__48110__$1;
var nc = seq__48109__$2;
var node = vec__48107;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48113 = nn;
var G__48114 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48113,G__48114) : create_fn.call(null,G__48113,G__48114));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48118 = nn;
var G__48119 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48118,G__48119) : create_fn.call(null,G__48118,G__48119));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48122 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(1),null);
var seq__48125_49433 = cljs.core.seq(node_children);
var chunk__48126_49434 = null;
var count__48127_49435 = (0);
var i__48128_49436 = (0);
while(true){
if((i__48128_49436 < count__48127_49435)){
var child_struct_49437 = chunk__48126_49434.cljs$core$IIndexed$_nth$arity$2(null,i__48128_49436);
var children_49438 = shadow.dom.dom_node(child_struct_49437);
if(cljs.core.seq_QMARK_(children_49438)){
var seq__48211_49439 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49438));
var chunk__48213_49440 = null;
var count__48214_49441 = (0);
var i__48215_49442 = (0);
while(true){
if((i__48215_49442 < count__48214_49441)){
var child_49443 = chunk__48213_49440.cljs$core$IIndexed$_nth$arity$2(null,i__48215_49442);
if(cljs.core.truth_(child_49443)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49443);


var G__49444 = seq__48211_49439;
var G__49445 = chunk__48213_49440;
var G__49446 = count__48214_49441;
var G__49447 = (i__48215_49442 + (1));
seq__48211_49439 = G__49444;
chunk__48213_49440 = G__49445;
count__48214_49441 = G__49446;
i__48215_49442 = G__49447;
continue;
} else {
var G__49451 = seq__48211_49439;
var G__49452 = chunk__48213_49440;
var G__49453 = count__48214_49441;
var G__49454 = (i__48215_49442 + (1));
seq__48211_49439 = G__49451;
chunk__48213_49440 = G__49452;
count__48214_49441 = G__49453;
i__48215_49442 = G__49454;
continue;
}
} else {
var temp__5753__auto___49456 = cljs.core.seq(seq__48211_49439);
if(temp__5753__auto___49456){
var seq__48211_49457__$1 = temp__5753__auto___49456;
if(cljs.core.chunked_seq_QMARK_(seq__48211_49457__$1)){
var c__4638__auto___49458 = cljs.core.chunk_first(seq__48211_49457__$1);
var G__49459 = cljs.core.chunk_rest(seq__48211_49457__$1);
var G__49460 = c__4638__auto___49458;
var G__49461 = cljs.core.count(c__4638__auto___49458);
var G__49462 = (0);
seq__48211_49439 = G__49459;
chunk__48213_49440 = G__49460;
count__48214_49441 = G__49461;
i__48215_49442 = G__49462;
continue;
} else {
var child_49463 = cljs.core.first(seq__48211_49457__$1);
if(cljs.core.truth_(child_49463)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49463);


var G__49464 = cljs.core.next(seq__48211_49457__$1);
var G__49465 = null;
var G__49466 = (0);
var G__49467 = (0);
seq__48211_49439 = G__49464;
chunk__48213_49440 = G__49465;
count__48214_49441 = G__49466;
i__48215_49442 = G__49467;
continue;
} else {
var G__49468 = cljs.core.next(seq__48211_49457__$1);
var G__49469 = null;
var G__49470 = (0);
var G__49471 = (0);
seq__48211_49439 = G__49468;
chunk__48213_49440 = G__49469;
count__48214_49441 = G__49470;
i__48215_49442 = G__49471;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49438);
}


var G__49472 = seq__48125_49433;
var G__49473 = chunk__48126_49434;
var G__49474 = count__48127_49435;
var G__49475 = (i__48128_49436 + (1));
seq__48125_49433 = G__49472;
chunk__48126_49434 = G__49473;
count__48127_49435 = G__49474;
i__48128_49436 = G__49475;
continue;
} else {
var temp__5753__auto___49476 = cljs.core.seq(seq__48125_49433);
if(temp__5753__auto___49476){
var seq__48125_49477__$1 = temp__5753__auto___49476;
if(cljs.core.chunked_seq_QMARK_(seq__48125_49477__$1)){
var c__4638__auto___49478 = cljs.core.chunk_first(seq__48125_49477__$1);
var G__49479 = cljs.core.chunk_rest(seq__48125_49477__$1);
var G__49480 = c__4638__auto___49478;
var G__49481 = cljs.core.count(c__4638__auto___49478);
var G__49482 = (0);
seq__48125_49433 = G__49479;
chunk__48126_49434 = G__49480;
count__48127_49435 = G__49481;
i__48128_49436 = G__49482;
continue;
} else {
var child_struct_49483 = cljs.core.first(seq__48125_49477__$1);
var children_49484 = shadow.dom.dom_node(child_struct_49483);
if(cljs.core.seq_QMARK_(children_49484)){
var seq__48251_49485 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49484));
var chunk__48253_49486 = null;
var count__48254_49487 = (0);
var i__48255_49488 = (0);
while(true){
if((i__48255_49488 < count__48254_49487)){
var child_49489 = chunk__48253_49486.cljs$core$IIndexed$_nth$arity$2(null,i__48255_49488);
if(cljs.core.truth_(child_49489)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49489);


var G__49490 = seq__48251_49485;
var G__49491 = chunk__48253_49486;
var G__49492 = count__48254_49487;
var G__49493 = (i__48255_49488 + (1));
seq__48251_49485 = G__49490;
chunk__48253_49486 = G__49491;
count__48254_49487 = G__49492;
i__48255_49488 = G__49493;
continue;
} else {
var G__49494 = seq__48251_49485;
var G__49495 = chunk__48253_49486;
var G__49496 = count__48254_49487;
var G__49497 = (i__48255_49488 + (1));
seq__48251_49485 = G__49494;
chunk__48253_49486 = G__49495;
count__48254_49487 = G__49496;
i__48255_49488 = G__49497;
continue;
}
} else {
var temp__5753__auto___49498__$1 = cljs.core.seq(seq__48251_49485);
if(temp__5753__auto___49498__$1){
var seq__48251_49499__$1 = temp__5753__auto___49498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48251_49499__$1)){
var c__4638__auto___49500 = cljs.core.chunk_first(seq__48251_49499__$1);
var G__49501 = cljs.core.chunk_rest(seq__48251_49499__$1);
var G__49502 = c__4638__auto___49500;
var G__49503 = cljs.core.count(c__4638__auto___49500);
var G__49504 = (0);
seq__48251_49485 = G__49501;
chunk__48253_49486 = G__49502;
count__48254_49487 = G__49503;
i__48255_49488 = G__49504;
continue;
} else {
var child_49505 = cljs.core.first(seq__48251_49499__$1);
if(cljs.core.truth_(child_49505)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49505);


var G__49506 = cljs.core.next(seq__48251_49499__$1);
var G__49507 = null;
var G__49508 = (0);
var G__49509 = (0);
seq__48251_49485 = G__49506;
chunk__48253_49486 = G__49507;
count__48254_49487 = G__49508;
i__48255_49488 = G__49509;
continue;
} else {
var G__49510 = cljs.core.next(seq__48251_49499__$1);
var G__49511 = null;
var G__49512 = (0);
var G__49513 = (0);
seq__48251_49485 = G__49510;
chunk__48253_49486 = G__49511;
count__48254_49487 = G__49512;
i__48255_49488 = G__49513;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49484);
}


var G__49514 = cljs.core.next(seq__48125_49477__$1);
var G__49515 = null;
var G__49516 = (0);
var G__49517 = (0);
seq__48125_49433 = G__49514;
chunk__48126_49434 = G__49515;
count__48127_49435 = G__49516;
i__48128_49436 = G__49517;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48335 = cljs.core.seq(node);
var chunk__48336 = null;
var count__48337 = (0);
var i__48338 = (0);
while(true){
if((i__48338 < count__48337)){
var n = chunk__48336.cljs$core$IIndexed$_nth$arity$2(null,i__48338);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49531 = seq__48335;
var G__49532 = chunk__48336;
var G__49533 = count__48337;
var G__49534 = (i__48338 + (1));
seq__48335 = G__49531;
chunk__48336 = G__49532;
count__48337 = G__49533;
i__48338 = G__49534;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48335);
if(temp__5753__auto__){
var seq__48335__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48335__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48335__$1);
var G__49535 = cljs.core.chunk_rest(seq__48335__$1);
var G__49536 = c__4638__auto__;
var G__49537 = cljs.core.count(c__4638__auto__);
var G__49538 = (0);
seq__48335 = G__49535;
chunk__48336 = G__49536;
count__48337 = G__49537;
i__48338 = G__49538;
continue;
} else {
var n = cljs.core.first(seq__48335__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49539 = cljs.core.next(seq__48335__$1);
var G__49540 = null;
var G__49541 = (0);
var G__49542 = (0);
seq__48335 = G__49539;
chunk__48336 = G__49540;
count__48337 = G__49541;
i__48338 = G__49542;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48395 = arguments.length;
switch (G__48395) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48415 = arguments.length;
switch (G__48415) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48478 = arguments.length;
switch (G__48478) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49549 = arguments.length;
var i__4819__auto___49550 = (0);
while(true){
if((i__4819__auto___49550 < len__4818__auto___49549)){
args__4824__auto__.push((arguments[i__4819__auto___49550]));

var G__49551 = (i__4819__auto___49550 + (1));
i__4819__auto___49550 = G__49551;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48548_49552 = cljs.core.seq(nodes);
var chunk__48549_49553 = null;
var count__48550_49554 = (0);
var i__48551_49555 = (0);
while(true){
if((i__48551_49555 < count__48550_49554)){
var node_49557 = chunk__48549_49553.cljs$core$IIndexed$_nth$arity$2(null,i__48551_49555);
fragment.appendChild(shadow.dom._to_dom(node_49557));


var G__49559 = seq__48548_49552;
var G__49560 = chunk__48549_49553;
var G__49561 = count__48550_49554;
var G__49562 = (i__48551_49555 + (1));
seq__48548_49552 = G__49559;
chunk__48549_49553 = G__49560;
count__48550_49554 = G__49561;
i__48551_49555 = G__49562;
continue;
} else {
var temp__5753__auto___49563 = cljs.core.seq(seq__48548_49552);
if(temp__5753__auto___49563){
var seq__48548_49564__$1 = temp__5753__auto___49563;
if(cljs.core.chunked_seq_QMARK_(seq__48548_49564__$1)){
var c__4638__auto___49565 = cljs.core.chunk_first(seq__48548_49564__$1);
var G__49566 = cljs.core.chunk_rest(seq__48548_49564__$1);
var G__49567 = c__4638__auto___49565;
var G__49568 = cljs.core.count(c__4638__auto___49565);
var G__49569 = (0);
seq__48548_49552 = G__49566;
chunk__48549_49553 = G__49567;
count__48550_49554 = G__49568;
i__48551_49555 = G__49569;
continue;
} else {
var node_49570 = cljs.core.first(seq__48548_49564__$1);
fragment.appendChild(shadow.dom._to_dom(node_49570));


var G__49571 = cljs.core.next(seq__48548_49564__$1);
var G__49572 = null;
var G__49573 = (0);
var G__49574 = (0);
seq__48548_49552 = G__49571;
chunk__48549_49553 = G__49572;
count__48550_49554 = G__49573;
i__48551_49555 = G__49574;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48531){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48531));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48581_49577 = cljs.core.seq(scripts);
var chunk__48583_49578 = null;
var count__48584_49579 = (0);
var i__48585_49580 = (0);
while(true){
if((i__48585_49580 < count__48584_49579)){
var vec__48611_49581 = chunk__48583_49578.cljs$core$IIndexed$_nth$arity$2(null,i__48585_49580);
var script_tag_49582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48611_49581,(0),null);
var script_body_49583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48611_49581,(1),null);
eval(script_body_49583);


var G__49585 = seq__48581_49577;
var G__49586 = chunk__48583_49578;
var G__49587 = count__48584_49579;
var G__49588 = (i__48585_49580 + (1));
seq__48581_49577 = G__49585;
chunk__48583_49578 = G__49586;
count__48584_49579 = G__49587;
i__48585_49580 = G__49588;
continue;
} else {
var temp__5753__auto___49589 = cljs.core.seq(seq__48581_49577);
if(temp__5753__auto___49589){
var seq__48581_49590__$1 = temp__5753__auto___49589;
if(cljs.core.chunked_seq_QMARK_(seq__48581_49590__$1)){
var c__4638__auto___49591 = cljs.core.chunk_first(seq__48581_49590__$1);
var G__49592 = cljs.core.chunk_rest(seq__48581_49590__$1);
var G__49593 = c__4638__auto___49591;
var G__49594 = cljs.core.count(c__4638__auto___49591);
var G__49595 = (0);
seq__48581_49577 = G__49592;
chunk__48583_49578 = G__49593;
count__48584_49579 = G__49594;
i__48585_49580 = G__49595;
continue;
} else {
var vec__48618_49596 = cljs.core.first(seq__48581_49590__$1);
var script_tag_49597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48618_49596,(0),null);
var script_body_49598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48618_49596,(1),null);
eval(script_body_49598);


var G__49599 = cljs.core.next(seq__48581_49590__$1);
var G__49600 = null;
var G__49601 = (0);
var G__49602 = (0);
seq__48581_49577 = G__49599;
chunk__48583_49578 = G__49600;
count__48584_49579 = G__49601;
i__48585_49580 = G__49602;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48624){
var vec__48627 = p__48624;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48627,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48627,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48641 = arguments.length;
switch (G__48641) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48715 = cljs.core.seq(style_keys);
var chunk__48716 = null;
var count__48717 = (0);
var i__48718 = (0);
while(true){
if((i__48718 < count__48717)){
var it = chunk__48716.cljs$core$IIndexed$_nth$arity$2(null,i__48718);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49605 = seq__48715;
var G__49606 = chunk__48716;
var G__49607 = count__48717;
var G__49608 = (i__48718 + (1));
seq__48715 = G__49605;
chunk__48716 = G__49606;
count__48717 = G__49607;
i__48718 = G__49608;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48715);
if(temp__5753__auto__){
var seq__48715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48715__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48715__$1);
var G__49612 = cljs.core.chunk_rest(seq__48715__$1);
var G__49613 = c__4638__auto__;
var G__49614 = cljs.core.count(c__4638__auto__);
var G__49615 = (0);
seq__48715 = G__49612;
chunk__48716 = G__49613;
count__48717 = G__49614;
i__48718 = G__49615;
continue;
} else {
var it = cljs.core.first(seq__48715__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49616 = cljs.core.next(seq__48715__$1);
var G__49617 = null;
var G__49618 = (0);
var G__49619 = (0);
seq__48715 = G__49616;
chunk__48716 = G__49617;
count__48717 = G__49618;
i__48718 = G__49619;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48768,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48783 = k48768;
var G__48783__$1 = (((G__48783 instanceof cljs.core.Keyword))?G__48783.fqn:null);
switch (G__48783__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48768,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48790){
var vec__48791 = p__48790;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48767){
var self__ = this;
var G__48767__$1 = this;
return (new cljs.core.RecordIter((0),G__48767__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48769,other48770){
var self__ = this;
var this48769__$1 = this;
return (((!((other48770 == null)))) && ((((this48769__$1.constructor === other48770.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48769__$1.x,other48770.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48769__$1.y,other48770.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48769__$1.__extmap,other48770.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48768){
var self__ = this;
var this__4468__auto____$1 = this;
var G__48847 = k48768;
var G__48847__$1 = (((G__48847 instanceof cljs.core.Keyword))?G__48847.fqn:null);
switch (G__48847__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48768);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48767){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__48861 = cljs.core.keyword_identical_QMARK_;
var expr__48862 = k__4470__auto__;
if(cljs.core.truth_((pred__48861.cljs$core$IFn$_invoke$arity$2 ? pred__48861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48862) : pred__48861.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48862)))){
return (new shadow.dom.Coordinate(G__48767,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48861.cljs$core$IFn$_invoke$arity$2 ? pred__48861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48862) : pred__48861.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48862)))){
return (new shadow.dom.Coordinate(self__.x,G__48767,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48767),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48767){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48767,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48773){
var extmap__4501__auto__ = (function (){var G__48886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48773,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48886);
} else {
return G__48886;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48773),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48773),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48944,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48986 = k48944;
var G__48986__$1 = (((G__48986 instanceof cljs.core.Keyword))?G__48986.fqn:null);
switch (G__48986__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48944,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48996){
var vec__49000 = p__48996;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49000,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49000,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48943){
var self__ = this;
var G__48943__$1 = this;
return (new cljs.core.RecordIter((0),G__48943__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48945,other48946){
var self__ = this;
var this48945__$1 = this;
return (((!((other48946 == null)))) && ((((this48945__$1.constructor === other48946.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48945__$1.w,other48946.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48945__$1.h,other48946.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48945__$1.__extmap,other48946.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48944){
var self__ = this;
var this__4468__auto____$1 = this;
var G__49038 = k48944;
var G__49038__$1 = (((G__49038 instanceof cljs.core.Keyword))?G__49038.fqn:null);
switch (G__49038__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48944);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48943){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__49041 = cljs.core.keyword_identical_QMARK_;
var expr__49042 = k__4470__auto__;
if(cljs.core.truth_((pred__49041.cljs$core$IFn$_invoke$arity$2 ? pred__49041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49042) : pred__49041.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49042)))){
return (new shadow.dom.Size(G__48943,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49041.cljs$core$IFn$_invoke$arity$2 ? pred__49041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49042) : pred__49041.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49042)))){
return (new shadow.dom.Size(self__.w,G__48943,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48943),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48943){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48943,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48959){
var extmap__4501__auto__ = (function (){var G__49057 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48959,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48959)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49057);
} else {
return G__49057;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48959),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48959),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__49648 = (i + (1));
var G__49649 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49648;
ret = G__49649;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49080){
var vec__49082 = p__49080;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49086 = arguments.length;
switch (G__49086) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49652 = ps;
var G__49653 = (i + (1));
el__$1 = G__49652;
i = G__49653;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49101 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49106_49661 = cljs.core.seq(props);
var chunk__49107_49662 = null;
var count__49108_49663 = (0);
var i__49109_49664 = (0);
while(true){
if((i__49109_49664 < count__49108_49663)){
var vec__49124_49665 = chunk__49107_49662.cljs$core$IIndexed$_nth$arity$2(null,i__49109_49664);
var k_49666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49124_49665,(0),null);
var v_49667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49124_49665,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_49666);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49666),v_49667);


var G__49671 = seq__49106_49661;
var G__49672 = chunk__49107_49662;
var G__49673 = count__49108_49663;
var G__49674 = (i__49109_49664 + (1));
seq__49106_49661 = G__49671;
chunk__49107_49662 = G__49672;
count__49108_49663 = G__49673;
i__49109_49664 = G__49674;
continue;
} else {
var temp__5753__auto___49677 = cljs.core.seq(seq__49106_49661);
if(temp__5753__auto___49677){
var seq__49106_49678__$1 = temp__5753__auto___49677;
if(cljs.core.chunked_seq_QMARK_(seq__49106_49678__$1)){
var c__4638__auto___49681 = cljs.core.chunk_first(seq__49106_49678__$1);
var G__49682 = cljs.core.chunk_rest(seq__49106_49678__$1);
var G__49683 = c__4638__auto___49681;
var G__49684 = cljs.core.count(c__4638__auto___49681);
var G__49685 = (0);
seq__49106_49661 = G__49682;
chunk__49107_49662 = G__49683;
count__49108_49663 = G__49684;
i__49109_49664 = G__49685;
continue;
} else {
var vec__49131_49688 = cljs.core.first(seq__49106_49678__$1);
var k_49689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131_49688,(0),null);
var v_49690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131_49688,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_49689);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49689),v_49690);


var G__49692 = cljs.core.next(seq__49106_49678__$1);
var G__49693 = null;
var G__49694 = (0);
var G__49695 = (0);
seq__49106_49661 = G__49692;
chunk__49107_49662 = G__49693;
count__49108_49663 = G__49694;
i__49109_49664 = G__49695;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49142 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49142,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49142,(1),null);
var seq__49147_49698 = cljs.core.seq(node_children);
var chunk__49149_49700 = null;
var count__49150_49701 = (0);
var i__49151_49702 = (0);
while(true){
if((i__49151_49702 < count__49150_49701)){
var child_struct_49703 = chunk__49149_49700.cljs$core$IIndexed$_nth$arity$2(null,i__49151_49702);
if((!((child_struct_49703 == null)))){
if(typeof child_struct_49703 === 'string'){
var text_49705 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49705),child_struct_49703].join(''));
} else {
var children_49706 = shadow.dom.svg_node(child_struct_49703);
if(cljs.core.seq_QMARK_(children_49706)){
var seq__49179_49707 = cljs.core.seq(children_49706);
var chunk__49181_49708 = null;
var count__49182_49709 = (0);
var i__49183_49710 = (0);
while(true){
if((i__49183_49710 < count__49182_49709)){
var child_49711 = chunk__49181_49708.cljs$core$IIndexed$_nth$arity$2(null,i__49183_49710);
if(cljs.core.truth_(child_49711)){
node.appendChild(child_49711);


var G__49713 = seq__49179_49707;
var G__49714 = chunk__49181_49708;
var G__49715 = count__49182_49709;
var G__49716 = (i__49183_49710 + (1));
seq__49179_49707 = G__49713;
chunk__49181_49708 = G__49714;
count__49182_49709 = G__49715;
i__49183_49710 = G__49716;
continue;
} else {
var G__49717 = seq__49179_49707;
var G__49718 = chunk__49181_49708;
var G__49719 = count__49182_49709;
var G__49720 = (i__49183_49710 + (1));
seq__49179_49707 = G__49717;
chunk__49181_49708 = G__49718;
count__49182_49709 = G__49719;
i__49183_49710 = G__49720;
continue;
}
} else {
var temp__5753__auto___49721 = cljs.core.seq(seq__49179_49707);
if(temp__5753__auto___49721){
var seq__49179_49722__$1 = temp__5753__auto___49721;
if(cljs.core.chunked_seq_QMARK_(seq__49179_49722__$1)){
var c__4638__auto___49724 = cljs.core.chunk_first(seq__49179_49722__$1);
var G__49725 = cljs.core.chunk_rest(seq__49179_49722__$1);
var G__49726 = c__4638__auto___49724;
var G__49727 = cljs.core.count(c__4638__auto___49724);
var G__49728 = (0);
seq__49179_49707 = G__49725;
chunk__49181_49708 = G__49726;
count__49182_49709 = G__49727;
i__49183_49710 = G__49728;
continue;
} else {
var child_49729 = cljs.core.first(seq__49179_49722__$1);
if(cljs.core.truth_(child_49729)){
node.appendChild(child_49729);


var G__49730 = cljs.core.next(seq__49179_49722__$1);
var G__49731 = null;
var G__49732 = (0);
var G__49733 = (0);
seq__49179_49707 = G__49730;
chunk__49181_49708 = G__49731;
count__49182_49709 = G__49732;
i__49183_49710 = G__49733;
continue;
} else {
var G__49734 = cljs.core.next(seq__49179_49722__$1);
var G__49735 = null;
var G__49736 = (0);
var G__49737 = (0);
seq__49179_49707 = G__49734;
chunk__49181_49708 = G__49735;
count__49182_49709 = G__49736;
i__49183_49710 = G__49737;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49706);
}
}


var G__49738 = seq__49147_49698;
var G__49739 = chunk__49149_49700;
var G__49740 = count__49150_49701;
var G__49741 = (i__49151_49702 + (1));
seq__49147_49698 = G__49738;
chunk__49149_49700 = G__49739;
count__49150_49701 = G__49740;
i__49151_49702 = G__49741;
continue;
} else {
var G__49742 = seq__49147_49698;
var G__49743 = chunk__49149_49700;
var G__49744 = count__49150_49701;
var G__49745 = (i__49151_49702 + (1));
seq__49147_49698 = G__49742;
chunk__49149_49700 = G__49743;
count__49150_49701 = G__49744;
i__49151_49702 = G__49745;
continue;
}
} else {
var temp__5753__auto___49746 = cljs.core.seq(seq__49147_49698);
if(temp__5753__auto___49746){
var seq__49147_49747__$1 = temp__5753__auto___49746;
if(cljs.core.chunked_seq_QMARK_(seq__49147_49747__$1)){
var c__4638__auto___49748 = cljs.core.chunk_first(seq__49147_49747__$1);
var G__49749 = cljs.core.chunk_rest(seq__49147_49747__$1);
var G__49750 = c__4638__auto___49748;
var G__49751 = cljs.core.count(c__4638__auto___49748);
var G__49752 = (0);
seq__49147_49698 = G__49749;
chunk__49149_49700 = G__49750;
count__49150_49701 = G__49751;
i__49151_49702 = G__49752;
continue;
} else {
var child_struct_49753 = cljs.core.first(seq__49147_49747__$1);
if((!((child_struct_49753 == null)))){
if(typeof child_struct_49753 === 'string'){
var text_49754 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49754),child_struct_49753].join(''));
} else {
var children_49756 = shadow.dom.svg_node(child_struct_49753);
if(cljs.core.seq_QMARK_(children_49756)){
var seq__49197_49757 = cljs.core.seq(children_49756);
var chunk__49199_49758 = null;
var count__49200_49759 = (0);
var i__49201_49760 = (0);
while(true){
if((i__49201_49760 < count__49200_49759)){
var child_49761 = chunk__49199_49758.cljs$core$IIndexed$_nth$arity$2(null,i__49201_49760);
if(cljs.core.truth_(child_49761)){
node.appendChild(child_49761);


var G__49766 = seq__49197_49757;
var G__49767 = chunk__49199_49758;
var G__49768 = count__49200_49759;
var G__49769 = (i__49201_49760 + (1));
seq__49197_49757 = G__49766;
chunk__49199_49758 = G__49767;
count__49200_49759 = G__49768;
i__49201_49760 = G__49769;
continue;
} else {
var G__49770 = seq__49197_49757;
var G__49771 = chunk__49199_49758;
var G__49772 = count__49200_49759;
var G__49773 = (i__49201_49760 + (1));
seq__49197_49757 = G__49770;
chunk__49199_49758 = G__49771;
count__49200_49759 = G__49772;
i__49201_49760 = G__49773;
continue;
}
} else {
var temp__5753__auto___49774__$1 = cljs.core.seq(seq__49197_49757);
if(temp__5753__auto___49774__$1){
var seq__49197_49775__$1 = temp__5753__auto___49774__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49197_49775__$1)){
var c__4638__auto___49776 = cljs.core.chunk_first(seq__49197_49775__$1);
var G__49777 = cljs.core.chunk_rest(seq__49197_49775__$1);
var G__49778 = c__4638__auto___49776;
var G__49779 = cljs.core.count(c__4638__auto___49776);
var G__49780 = (0);
seq__49197_49757 = G__49777;
chunk__49199_49758 = G__49778;
count__49200_49759 = G__49779;
i__49201_49760 = G__49780;
continue;
} else {
var child_49784 = cljs.core.first(seq__49197_49775__$1);
if(cljs.core.truth_(child_49784)){
node.appendChild(child_49784);


var G__49785 = cljs.core.next(seq__49197_49775__$1);
var G__49786 = null;
var G__49787 = (0);
var G__49788 = (0);
seq__49197_49757 = G__49785;
chunk__49199_49758 = G__49786;
count__49200_49759 = G__49787;
i__49201_49760 = G__49788;
continue;
} else {
var G__49789 = cljs.core.next(seq__49197_49775__$1);
var G__49790 = null;
var G__49791 = (0);
var G__49792 = (0);
seq__49197_49757 = G__49789;
chunk__49199_49758 = G__49790;
count__49200_49759 = G__49791;
i__49201_49760 = G__49792;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49756);
}
}


var G__49793 = cljs.core.next(seq__49147_49747__$1);
var G__49794 = null;
var G__49795 = (0);
var G__49796 = (0);
seq__49147_49698 = G__49793;
chunk__49149_49700 = G__49794;
count__49150_49701 = G__49795;
i__49151_49702 = G__49796;
continue;
} else {
var G__49797 = cljs.core.next(seq__49147_49747__$1);
var G__49798 = null;
var G__49799 = (0);
var G__49800 = (0);
seq__49147_49698 = G__49797;
chunk__49149_49700 = G__49798;
count__49150_49701 = G__49799;
i__49151_49702 = G__49800;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49803 = arguments.length;
var i__4819__auto___49804 = (0);
while(true){
if((i__4819__auto___49804 < len__4818__auto___49803)){
args__4824__auto__.push((arguments[i__4819__auto___49804]));

var G__49805 = (i__4819__auto___49804 + (1));
i__4819__auto___49804 = G__49805;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49219){
var G__49220 = cljs.core.first(seq49219);
var seq49219__$1 = cljs.core.next(seq49219);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49220,seq49219__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49234 = arguments.length;
switch (G__49234) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__43375__auto___49814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43376__auto__ = (function (){var switch__42835__auto__ = (function (state_49249){
var state_val_49250 = (state_49249[(1)]);
if((state_val_49250 === (1))){
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49249__$1,(2),once_or_cleanup);
} else {
if((state_val_49250 === (2))){
var inst_49246 = (state_49249[(2)]);
var inst_49247 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49249__$1 = (function (){var statearr_49257 = state_49249;
(statearr_49257[(7)] = inst_49246);

return statearr_49257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49249__$1,inst_49247);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42837__auto__ = null;
var shadow$dom$state_machine__42837__auto____0 = (function (){
var statearr_49259 = [null,null,null,null,null,null,null,null];
(statearr_49259[(0)] = shadow$dom$state_machine__42837__auto__);

(statearr_49259[(1)] = (1));

return statearr_49259;
});
var shadow$dom$state_machine__42837__auto____1 = (function (state_49249){
while(true){
var ret_value__42838__auto__ = (function (){try{while(true){
var result__42839__auto__ = switch__42835__auto__(state_49249);
if(cljs.core.keyword_identical_QMARK_(result__42839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42839__auto__;
}
break;
}
}catch (e49262){var ex__42840__auto__ = e49262;
var statearr_49263_49817 = state_49249;
(statearr_49263_49817[(2)] = ex__42840__auto__);


if(cljs.core.seq((state_49249[(4)]))){
var statearr_49264_49818 = state_49249;
(statearr_49264_49818[(1)] = cljs.core.first((state_49249[(4)])));

} else {
throw ex__42840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49822 = state_49249;
state_49249 = G__49822;
continue;
} else {
return ret_value__42838__auto__;
}
break;
}
});
shadow$dom$state_machine__42837__auto__ = function(state_49249){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42837__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42837__auto____1.call(this,state_49249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42837__auto____0;
shadow$dom$state_machine__42837__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42837__auto____1;
return shadow$dom$state_machine__42837__auto__;
})()
})();
var state__43377__auto__ = (function (){var statearr_49271 = f__43376__auto__();
(statearr_49271[(6)] = c__43375__auto___49814);

return statearr_49271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43377__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
