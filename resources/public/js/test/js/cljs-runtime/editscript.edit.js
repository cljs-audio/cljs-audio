goog.provide('editscript.edit');

/**
 * @interface
 */
editscript.edit.IEdit = function(){};

var editscript$edit$IEdit$auto_sizing$dyn_49973 = (function (this$,path,value){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.auto_sizing[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4510__auto__.call(null,this$,path,value));
} else {
var m__4508__auto__ = (editscript.edit.auto_sizing["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4508__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.auto-sizing",this$);
}
}
});
editscript.edit.auto_sizing = (function editscript$edit$auto_sizing(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$auto_sizing$arity$3 == null)))))){
return this$.editscript$edit$IEdit$auto_sizing$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$auto_sizing$dyn_49973(this$,path,value);
}
});

var editscript$edit$IEdit$add_data$dyn_49974 = (function (this$,path,value){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.add_data[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4510__auto__.call(null,this$,path,value));
} else {
var m__4508__auto__ = (editscript.edit.add_data["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4508__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.add-data",this$);
}
}
});
editscript.edit.add_data = (function editscript$edit$add_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$add_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$add_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$add_data$dyn_49974(this$,path,value);
}
});

var editscript$edit$IEdit$delete_data$dyn_49976 = (function (this$,path){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.delete_data[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4510__auto__.call(null,this$,path));
} else {
var m__4508__auto__ = (editscript.edit.delete_data["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4508__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("IEdit.delete-data",this$);
}
}
});
editscript.edit.delete_data = (function editscript$edit$delete_data(this$,path){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$delete_data$arity$2 == null)))))){
return this$.editscript$edit$IEdit$delete_data$arity$2(this$,path);
} else {
return editscript$edit$IEdit$delete_data$dyn_49976(this$,path);
}
});

var editscript$edit$IEdit$replace_data$dyn_49978 = (function (this$,path,value){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.replace_data[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4510__auto__.call(null,this$,path,value));
} else {
var m__4508__auto__ = (editscript.edit.replace_data["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4508__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.replace-data",this$);
}
}
});
editscript.edit.replace_data = (function editscript$edit$replace_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$replace_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$replace_data$dyn_49978(this$,path,value);
}
});

var editscript$edit$IEdit$replace_str$dyn_49983 = (function (this$,path,ops){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.replace_str[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,ops) : m__4510__auto__.call(null,this$,path,ops));
} else {
var m__4508__auto__ = (editscript.edit.replace_str["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,ops) : m__4508__auto__.call(null,this$,path,ops));
} else {
throw cljs.core.missing_protocol("IEdit.replace-str",this$);
}
}
});
editscript.edit.replace_str = (function editscript$edit$replace_str(this$,path,ops){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_str$arity$3 == null)))))){
return this$.editscript$edit$IEdit$replace_str$arity$3(this$,path,ops);
} else {
return editscript$edit$IEdit$replace_str$dyn_49983(this$,path,ops);
}
});


/**
 * @interface
 */
editscript.edit.IEditScript = function(){};

var editscript$edit$IEditScript$combine$dyn_49984 = (function (this$,that){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.combine[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4510__auto__.call(null,this$,that));
} else {
var m__4508__auto__ = (editscript.edit.combine["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4508__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("IEditScript.combine",this$);
}
}
});
/**
 * Concate that editscript onto this editscript, return the new editscript
 */
editscript.edit.combine = (function editscript$edit$combine(this$,that){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$combine$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$combine$arity$2(this$,that);
} else {
return editscript$edit$IEditScript$combine$dyn_49984(this$,that);
}
});

var editscript$edit$IEditScript$get_size$dyn_49985 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.get_size[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.get_size["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-size",this$);
}
}
});
/**
 * Report the size of the editscript
 */
editscript.edit.get_size = (function editscript$edit$get_size(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_size$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_size$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_size$dyn_49985(this$);
}
});

var editscript$edit$IEditScript$set_size$dyn_49988 = (function (this$,size){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.set_size[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__4510__auto__.call(null,this$,size));
} else {
var m__4508__auto__ = (editscript.edit.set_size["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__4508__auto__.call(null,this$,size));
} else {
throw cljs.core.missing_protocol("IEditScript.set-size",this$);
}
}
});
/**
 * Set the size, return the script
 */
editscript.edit.set_size = (function editscript$edit$set_size(this$,size){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$set_size$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$set_size$arity$2(this$,size);
} else {
return editscript$edit$IEditScript$set_size$dyn_49988(this$,size);
}
});

var editscript$edit$IEditScript$edit_distance$dyn_49991 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.edit_distance[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.edit_distance["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.edit-distance",this$);
}
}
});
/**
 * Report the edit distance, i.e number of operations
 */
editscript.edit.edit_distance = (function editscript$edit$edit_distance(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$edit_distance$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$edit_distance$arity$1(this$);
} else {
return editscript$edit$IEditScript$edit_distance$dyn_49991(this$);
}
});

var editscript$edit$IEditScript$get_edits$dyn_49998 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.get_edits[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.get_edits["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-edits",this$);
}
}
});
/**
 * Report the edits as a vector
 */
editscript.edit.get_edits = (function editscript$edit$get_edits(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_edits$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_edits$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_edits$dyn_49998(this$);
}
});

var editscript$edit$IEditScript$get_adds_num$dyn_50000 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.get_adds_num[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.get_adds_num["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-adds-num",this$);
}
}
});
/**
 * Report the number of additions
 */
editscript.edit.get_adds_num = (function editscript$edit$get_adds_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_adds_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_adds_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_adds_num$dyn_50000(this$);
}
});

var editscript$edit$IEditScript$get_dels_num$dyn_50001 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.get_dels_num[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.get_dels_num["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-dels-num",this$);
}
}
});
/**
 * Report the number of deletions
 */
editscript.edit.get_dels_num = (function editscript$edit$get_dels_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_dels_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_dels_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_dels_num$dyn_50001(this$);
}
});

var editscript$edit$IEditScript$get_reps_num$dyn_50003 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.get_reps_num[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.get_reps_num["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-reps-num",this$);
}
}
});
/**
 * Report the number of replacements
 */
editscript.edit.get_reps_num = (function editscript$edit$get_reps_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_reps_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_reps_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_reps_num$dyn_50003(this$);
}
});


/**
 * @interface
 */
editscript.edit.IType = function(){};

var editscript$edit$IType$get_type$dyn_50004 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (editscript.edit.get_type[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (editscript.edit.get_type["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IType.get-type",this$);
}
}
});
/**
 * Return a type keyword, :val, :map, :lst, etc.
 */
editscript.edit.get_type = (function editscript$edit$get_type(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IType$get_type$arity$1 == null)))))){
return this$.editscript$edit$IType$get_type$arity$1(this$);
} else {
return editscript$edit$IType$get_type$dyn_50004(this$);
}
});

/**
 * A special type means 'not present'
 */
editscript.edit.nada = (function editscript$edit$nada(){
if((typeof editscript !== 'undefined') && (typeof editscript.edit !== 'undefined') && (typeof editscript.edit.t_editscript$edit49668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {editscript.edit.IType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
editscript.edit.t_editscript$edit49668 = (function (meta49669){
this.meta49669 = meta49669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(editscript.edit.t_editscript$edit49668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49670,meta49669__$1){
var self__ = this;
var _49670__$1 = this;
return (new editscript.edit.t_editscript$edit49668(meta49669__$1));
}));

(editscript.edit.t_editscript$edit49668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49670){
var self__ = this;
var _49670__$1 = this;
return self__.meta49669;
}));

(editscript.edit.t_editscript$edit49668.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.t_editscript$edit49668.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));

(editscript.edit.t_editscript$edit49668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49669","meta49669",-1246127316,null)], null);
}));

(editscript.edit.t_editscript$edit49668.cljs$lang$type = true);

(editscript.edit.t_editscript$edit49668.cljs$lang$ctorStr = "editscript.edit/t_editscript$edit49668");

(editscript.edit.t_editscript$edit49668.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"editscript.edit/t_editscript$edit49668");
}));

/**
 * Positional factory function for editscript.edit/t_editscript$edit49668.
 */
editscript.edit.__GT_t_editscript$edit49668 = (function editscript$edit$nada_$___GT_t_editscript$edit49668(meta49669){
return (new editscript.edit.t_editscript$edit49668(meta49669));
});

}

return (new editscript.edit.t_editscript$edit49668(cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(editscript.edit.IType,"null",true);

goog.object.set(editscript.edit.get_type,"null",(function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.MapEntry.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.Cons.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.Subvec.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

goog.object.set(editscript.edit.IType,"_",true);

goog.object.set(editscript.edit.get_type,"_",(function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.PersistentVector.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

goog.object.set(editscript.edit.IType,"string",true);

goog.object.set(editscript.edit.get_type,"string",(function (_){
return new cljs.core.Keyword(null,"str","str",1089608819);
}));

(cljs.core.EmptyList.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.List.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));
editscript.edit.sizing_STAR_ = (function editscript$edit$sizing_STAR_(data,size){
var up = (function (s){
return (s + (1));
});
if(cljs.core.truth_((function (){var G__49843 = editscript.edit.get_type(data);
var fexpr__49842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__49842.cljs$core$IFn$_invoke$arity$1 ? fexpr__49842.cljs$core$IFn$_invoke$arity$1(G__49843) : fexpr__49842.call(null,G__49843));
})())){
cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));

var seq__49844 = cljs.core.seq(data);
var chunk__49845 = null;
var count__49846 = (0);
var i__49847 = (0);
while(true){
if((i__49847 < count__49846)){
var child = chunk__49845.cljs$core$IIndexed$_nth$arity$2(null,i__49847);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__50019 = seq__49844;
var G__50020 = chunk__49845;
var G__50021 = count__49846;
var G__50022 = (i__49847 + (1));
seq__49844 = G__50019;
chunk__49845 = G__50020;
count__49846 = G__50021;
i__49847 = G__50022;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49844);
if(temp__5753__auto__){
var seq__49844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49844__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49844__$1);
var G__50023 = cljs.core.chunk_rest(seq__49844__$1);
var G__50024 = c__4638__auto__;
var G__50025 = cljs.core.count(c__4638__auto__);
var G__50026 = (0);
seq__49844 = G__50023;
chunk__49845 = G__50024;
count__49846 = G__50025;
i__49847 = G__50026;
continue;
} else {
var child = cljs.core.first(seq__49844__$1);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__50027 = cljs.core.next(seq__49844__$1);
var G__50028 = null;
var G__50029 = (0);
var G__50030 = (0);
seq__49844 = G__50027;
chunk__49845 = G__50028;
count__49846 = G__50029;
i__49847 = G__50030;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));
}
});
editscript.edit.sizing = (function editscript$edit$sizing(data){
var size = cljs.core.volatile_BANG_((0));
editscript.edit.sizing_STAR_(data,size);

return cljs.core.deref(size);
});

/**
* @constructor
 * @implements {editscript.edit.IEditScript}
 * @implements {editscript.edit.IEdit}
*/
editscript.edit.EditScript = (function (edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
this.edits = edits;
this.auto_sizing_QMARK_ = auto_sizing_QMARK_;
this.size = size;
this.adds_num = adds_num;
this.dels_num = dels_num;
this.reps_num = reps_num;
});
(editscript.edit.EditScript.prototype.editscript$edit$IEdit$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$auto_sizing$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
if(self__.auto_sizing_QMARK_){
(self__.size = cljs.core.long$(((((2) + self__.size) + editscript.edit.sizing(path)) + (cljs.core.truth_(value)?editscript.edit.sizing(value):(0)))));
} else {
}

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$add_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.adds_num = (self__.adds_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"+","+",1913524883),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$delete_data$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
(self__.dels_num = (self__.dels_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"-","-",-2112348439)], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,null);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"r","r",-471384190),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_str$arity$3 = (function (this$,path,ops){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"s","s",1705939918),ops], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,"");
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$combine$arity$2 = (function (_,that){
var self__ = this;
var ___$1 = this;
return (new editscript.edit.EditScript(cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.edits,editscript.edit.get_edits(that)),self__.auto_sizing_QMARK_,(self__.size + editscript.edit.get_size(that)),(self__.adds_num + editscript.edit.get_adds_num(that)),(self__.dels_num + editscript.edit.get_dels_num(that)),(self__.reps_num + editscript.edit.get_reps_num(that))));
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$set_size$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
(self__.size = cljs.core.long$(s));

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_edits$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.edits;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_adds_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.adds_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_dels_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.dels_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_reps_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.reps_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$edit_distance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.adds_num + self__.dels_num) + self__.reps_num);
}));

(editscript.edit.EditScript.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edits","edits",-599366147,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-sizing?","auto-sizing?",-1705546383,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"adds-num","adds-num",-1467287693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dels-num","dels-num",819513451,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"reps-num","reps-num",582946575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.edit.EditScript.cljs$lang$type = true);

(editscript.edit.EditScript.cljs$lang$ctorStr = "editscript.edit/EditScript");

(editscript.edit.EditScript.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"editscript.edit/EditScript");
}));

/**
 * Positional factory function for editscript.edit/EditScript.
 */
editscript.edit.__GT_EditScript = (function editscript$edit$__GT_EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
return (new editscript.edit.EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num));
});

editscript.edit.valid_str_edits_QMARK_ = (function editscript$edit$valid_str_edits_QMARK_(data){
return ((cljs.core.vector_QMARK_(data)) && (cljs.core.every_QMARK_((function (x){
var or__4212__auto__ = cljs.core.nat_int_QMARK_(x);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto____$1 = cljs.core.vector_QMARK_(x);
if(and__4210__auto____$1){
var and__4210__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x));
if(and__4210__auto____$2){
var vec__49874 = x;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49874,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49874,(1),null);
var and__4210__auto____$3 = (function (){var fexpr__49877 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null);
return (fexpr__49877.cljs$core$IFn$_invoke$arity$1 ? fexpr__49877.cljs$core$IFn$_invoke$arity$1(op) : fexpr__49877.call(null,op));
})();
if(cljs.core.truth_(and__4210__auto____$3)){
var G__49878 = op;
var G__49878__$1 = (((G__49878 instanceof cljs.core.Keyword))?G__49878.fqn:null);
switch (G__49878__$1) {
case "-":
return cljs.core.nat_int_QMARK_(y);

break;
case "+":
case "r":
return typeof y === 'string';

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49878__$1)].join('')));

}
} else {
return and__4210__auto____$3;
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
}
}),data)));
});
editscript.edit.valid_edit_QMARK_ = (function editscript$edit$valid_edit_QMARK_(edit){
if(cljs.core.vector_QMARK_(edit)){
var c = cljs.core.count(edit);
if(((((1) < c)) && ((c < (4))))){
var vec__49880 = edit;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49880,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49880,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49880,(2),null);
var and__4210__auto__ = cljs.core.vector_QMARK_(path);
if(and__4210__auto__){
var and__4210__auto____$1 = (function (){var fexpr__49885 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null);
return (fexpr__49885.cljs$core$IFn$_invoke$arity$1 ? fexpr__49885.cljs$core$IFn$_invoke$arity$1(op) : fexpr__49885.call(null,op));
})();
if(cljs.core.truth_(and__4210__auto____$1)){
var and__4210__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),op))?(data == null):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3)));
if(and__4210__auto____$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),op)){
return editscript.edit.valid_str_edits_QMARK_(data);
} else {
return true;
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
editscript.edit.valid_edits_QMARK_ = (function editscript$edit$valid_edits_QMARK_(edits){
if(cljs.core.vector_QMARK_(edits)){
if(cljs.core.seq(edits)){
return cljs.core.every_QMARK_(editscript.edit.valid_edit_QMARK_,edits);
} else {
return true;
}
} else {
return null;
}
});
editscript.edit.count_str_ops = (function editscript$edit$count_str_ops(data,adds,dels,reps){
var seq__49890 = cljs.core.seq(data);
var chunk__49892 = null;
var count__49893 = (0);
var i__49894 = (0);
while(true){
if((i__49894 < count__49893)){
var d = chunk__49892.cljs$core$IIndexed$_nth$arity$2(null,i__49894);
if(cljs.core.vector_QMARK_(d)){
var G__49906_50066 = cljs.core.first(d);
var G__49906_50067__$1 = (((G__49906_50066 instanceof cljs.core.Keyword))?G__49906_50066.fqn:null);
switch (G__49906_50067__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49906_50067__$1)].join('')));

}


var G__50073 = seq__49890;
var G__50074 = chunk__49892;
var G__50075 = count__49893;
var G__50076 = (i__49894 + (1));
seq__49890 = G__50073;
chunk__49892 = G__50074;
count__49893 = G__50075;
i__49894 = G__50076;
continue;
} else {
var G__50077 = seq__49890;
var G__50078 = chunk__49892;
var G__50079 = count__49893;
var G__50080 = (i__49894 + (1));
seq__49890 = G__50077;
chunk__49892 = G__50078;
count__49893 = G__50079;
i__49894 = G__50080;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49890);
if(temp__5753__auto__){
var seq__49890__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49890__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49890__$1);
var G__50082 = cljs.core.chunk_rest(seq__49890__$1);
var G__50083 = c__4638__auto__;
var G__50084 = cljs.core.count(c__4638__auto__);
var G__50085 = (0);
seq__49890 = G__50082;
chunk__49892 = G__50083;
count__49893 = G__50084;
i__49894 = G__50085;
continue;
} else {
var d = cljs.core.first(seq__49890__$1);
if(cljs.core.vector_QMARK_(d)){
var G__49914_50088 = cljs.core.first(d);
var G__49914_50089__$1 = (((G__49914_50088 instanceof cljs.core.Keyword))?G__49914_50088.fqn:null);
switch (G__49914_50089__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49914_50089__$1)].join('')));

}


var G__50091 = cljs.core.next(seq__49890__$1);
var G__50092 = null;
var G__50093 = (0);
var G__50094 = (0);
seq__49890 = G__50091;
chunk__49892 = G__50092;
count__49893 = G__50093;
i__49894 = G__50094;
continue;
} else {
var G__50095 = cljs.core.next(seq__49890__$1);
var G__50097 = null;
var G__50098 = (0);
var G__50099 = (0);
seq__49890 = G__50095;
chunk__49892 = G__50097;
count__49893 = G__50098;
i__49894 = G__50099;
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
editscript.edit.count_ops = (function editscript$edit$count_ops(edits){
var adds = cljs.core.volatile_BANG_((0));
var dels = cljs.core.volatile_BANG_((0));
var reps = cljs.core.volatile_BANG_((0));
var seq__49921_50100 = cljs.core.seq(edits);
var chunk__49923_50101 = null;
var count__49924_50102 = (0);
var i__49925_50103 = (0);
while(true){
if((i__49925_50103 < count__49924_50102)){
var vec__49939_50105 = chunk__49923_50101.cljs$core$IIndexed$_nth$arity$2(null,i__49925_50103);
var __50106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49939_50105,(0),null);
var op_50107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49939_50105,(1),null);
var data_50108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49939_50105,(2),null);
var G__49943_50110 = op_50107;
var G__49943_50111__$1 = (((G__49943_50110 instanceof cljs.core.Keyword))?G__49943_50110.fqn:null);
switch (G__49943_50111__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
editscript.edit.count_str_ops(data_50108,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49943_50111__$1)].join('')));

}


var G__50113 = seq__49921_50100;
var G__50114 = chunk__49923_50101;
var G__50115 = count__49924_50102;
var G__50116 = (i__49925_50103 + (1));
seq__49921_50100 = G__50113;
chunk__49923_50101 = G__50114;
count__49924_50102 = G__50115;
i__49925_50103 = G__50116;
continue;
} else {
var temp__5753__auto___50118 = cljs.core.seq(seq__49921_50100);
if(temp__5753__auto___50118){
var seq__49921_50119__$1 = temp__5753__auto___50118;
if(cljs.core.chunked_seq_QMARK_(seq__49921_50119__$1)){
var c__4638__auto___50122 = cljs.core.chunk_first(seq__49921_50119__$1);
var G__50123 = cljs.core.chunk_rest(seq__49921_50119__$1);
var G__50124 = c__4638__auto___50122;
var G__50125 = cljs.core.count(c__4638__auto___50122);
var G__50126 = (0);
seq__49921_50100 = G__50123;
chunk__49923_50101 = G__50124;
count__49924_50102 = G__50125;
i__49925_50103 = G__50126;
continue;
} else {
var vec__49949_50128 = cljs.core.first(seq__49921_50119__$1);
var __50129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949_50128,(0),null);
var op_50130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949_50128,(1),null);
var data_50131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949_50128,(2),null);
var G__49953_50132 = op_50130;
var G__49953_50133__$1 = (((G__49953_50132 instanceof cljs.core.Keyword))?G__49953_50132.fqn:null);
switch (G__49953_50133__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
editscript.edit.count_str_ops(data_50131,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49953_50133__$1)].join('')));

}


var G__50135 = cljs.core.next(seq__49921_50119__$1);
var G__50136 = null;
var G__50137 = (0);
var G__50138 = (0);
seq__49921_50100 = G__50135;
chunk__49923_50101 = G__50136;
count__49924_50102 = G__50137;
i__49925_50103 = G__50138;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(adds),cljs.core.deref(dels),cljs.core.deref(reps)], null);
});
/**
 * Create an EditScript instance from a vector of edits, like those obtained
 *   through calling `get-edits` on an EditScript
 */
editscript.edit.edits__GT_script = (function editscript$edit$edits__GT_script(edits){
if(cljs.core.truth_(editscript.edit.valid_edits_QMARK_(edits))){
} else {
throw (new Error(["Assert failed: ","Not a vector of valid edits","\n","(valid-edits? edits)"].join('')));
}

var vec__49961 = editscript.edit.count_ops(edits);
var adds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49961,(0),null);
var dels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49961,(1),null);
var reps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49961,(2),null);
return editscript.edit.__GT_EditScript(edits,true,editscript.edit.sizing(edits),adds,dels,reps);
});
(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,opts){
var o__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(o__$1.editscript$edit$IEditScript$get_edits$arity$1(null))], 0));
}));

//# sourceMappingURL=editscript.edit.js.map
