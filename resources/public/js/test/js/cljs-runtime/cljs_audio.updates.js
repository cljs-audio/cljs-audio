goog.provide('cljs_audio.updates');
cljs_audio.updates.path_type = (function cljs_audio$updates$path_type(path,patch){
var G__53338 = path;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword("cljs-audio.updates","out","cljs-audio.updates/out",-1875005142)], null),G__53338)){
return new cljs.core.Keyword(null,"top","top",-1856271961);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword("cljs-audio.updates","in","cljs-audio.updates/in",-1657244520)], null),G__53338)){
return null;
} else {
var id = cljs.core.last(path);
if(cljs.core.vector_QMARK_(id)){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id)], null))))){
return new cljs.core.Keyword(null,"parameter","parameter",1978789597);
} else {
return null;
}
} else {
var thing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,path);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"connections","connections",-2064090887).cljs$core$IFn$_invoke$arity$1(thing))){
return new cljs.core.Keyword(null,"patch","patch",380775109);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't parse ",thing,path,patch], 0));

}
}
}

}
}
});
if((typeof cljs_audio !== 'undefined') && (typeof cljs_audio.updates !== 'undefined') && (typeof cljs_audio.updates.resolve_from !== 'undefined')){
} else {
cljs_audio.updates.resolve_from = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53345 = cljs.core.get_global_hierarchy;
return (fexpr__53345.cljs$core$IFn$_invoke$arity$0 ? fexpr__53345.cljs$core$IFn$_invoke$arity$0() : fexpr__53345.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-audio.updates","resolve-from"),cljs_audio.updates.path_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs_audio.updates.resolve_from.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (path){
return null;
}));
cljs_audio.updates.resolve_from.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"node","node",581201198),(function (path){
return path;
}));
cljs_audio.updates.resolve_from.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"top","top",-1856271961),(function (path){
return null;
}));
cljs_audio.updates.resolve_from.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"patch","patch",380775109),(function (path,root_patch){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword("cljs-audio.updates","out","cljs-audio.updates/out",-1875005142)], null));
}));
if((typeof cljs_audio !== 'undefined') && (typeof cljs_audio.updates !== 'undefined') && (typeof cljs_audio.updates.resolve_to !== 'undefined')){
} else {
cljs_audio.updates.resolve_to = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53348 = cljs.core.get_global_hierarchy;
return (fexpr__53348.cljs$core$IFn$_invoke$arity$0 ? fexpr__53348.cljs$core$IFn$_invoke$arity$0() : fexpr__53348.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-audio.updates","resolve-to"),cljs_audio.updates.path_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs_audio.updates.resolve_to.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (path){
return null;
}));
cljs_audio.updates.resolve_to.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"node","node",581201198),(function (path){
return path;
}));
cljs_audio.updates.resolve_to.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"top","top",-1856271961),(function (path){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null);
}));
cljs_audio.updates.resolve_to.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"parameter","parameter",1978789597),(function (path){
return path;
}));
cljs_audio.updates.resolve_to.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"patch","patch",380775109),(function (path,root_patch){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword("cljs-audio.updates","in","cljs-audio.updates/in",-1657244520)], null));
}));
cljs_audio.updates.schedule = (function cljs_audio$updates$schedule(path,name,p__53351){
var vec__53353 = p__53351;
var seq__53354 = cljs.core.seq(vec__53353);
var first__53355 = cljs.core.first(seq__53354);
var seq__53354__$1 = cljs.core.next(seq__53354);
var command = first__53355;
var args = seq__53354__$1;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schedule","schedule",349275266),path,name,command,cljs.core.vec(args)], null);
});
cljs_audio.updates.set_parameter = (function cljs_audio$updates$set_parameter(path,name,value){
if(cljs.core.vector_QMARK_(value)){
if(cljs.core.vector_QMARK_(cljs.core.first(value))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value__$1){
return cljs_audio.updates.schedule(path,name,value__$1);
}),value));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_audio.updates.schedule(path,name,cljs.core.vec(value))], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),path,name,value], null)], null);
}
});
cljs_audio.updates.make_set_params = (function cljs_audio$updates$make_set_params(path,params){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__53359){
var vec__53360 = p__53359;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53360,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53360,(1),null);
return cljs_audio.updates.set_parameter(path,name,value);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(params)], 0)));
});
cljs_audio.updates.make_add_node = (function cljs_audio$updates$make_add_node(path,type,create_args){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-node","add-node",-2069253988),path,type,(function (){var or__4212__auto__ = create_args;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null)], null);
});
cljs_audio.updates.get_parameters = cljs.core.second;
cljs_audio.updates.indices = (function cljs_audio$updates$indices(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__53365_SHARP_,p2__53364_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__53364_SHARP_) : pred.call(null,p2__53364_SHARP_)))){
return p1__53365_SHARP_;
} else {
return null;
}
}),coll);
});
cljs_audio.updates.find_from = (function cljs_audio$updates$find_from(val,p__53366){
var map__53368 = p__53366;
var map__53368__$1 = cljs.core.__destructure_map(map__53368);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53368__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,val);
});
cljs_audio.updates.find_to = (function cljs_audio$updates$find_to(val,p__53370){
var map__53371 = p__53370;
var map__53371__$1 = cljs.core.__destructure_map(map__53371);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53371__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,val);
});
cljs_audio.updates.find_first = (function cljs_audio$updates$find_first(f,coll){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(f),coll));
});
cljs_audio.updates.find_connection_id_by_to = (function cljs_audio$updates$find_connection_id_by_to(connections,to_id){
var first_connection = cljs_audio.updates.find_first((function (p__53372){
var vec__53373 = p__53372;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53373,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53373,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,to_id);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,connections));
return cljs.core.first(first_connection);
});
cljs_audio.updates.make_connect = (function cljs_audio$updates$make_connect(connection_path,patch){
var parent_patch_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),connection_path));
var vec__53376 = cljs.core.last(connection_path);
var from_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53376,(0),null);
var to_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53376,(1),null);
var from_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(parent_patch_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),from_id], null));
var from = cljs_audio.updates.resolve_from.cljs$core$IFn$_invoke$arity$2(from_path,patch);
if(cljs.core.vector_QMARK_(to_id)){
var vec__53379 = to_id;
var to_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53379,(0),null);
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53379,(1),null);
var to_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(parent_patch_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),to_id__$1], null));
var to = cljs_audio.updates.resolve_to.cljs$core$IFn$_invoke$arity$2(to_path,patch);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect-parameter","connect-parameter",324721922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to,parameter_name], null))], null);
} else {
var to_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(parent_patch_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),to_id], null));
var to = cljs_audio.updates.resolve_to.cljs$core$IFn$_invoke$arity$2(to_path,patch);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect","connect",1232828233)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null))], null);
}
});
cljs_audio.updates.find_node_connections = (function cljs_audio$updates$find_node_connections(node_path,patch){
var node_id = cljs.core.last(node_path);
var all_connections = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),node_path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887)], null)));
var node_connections = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53383){
var vec__53384 = p__53383;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53384,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53384,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,node_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,node_id)));
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,all_connections));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),node_path)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887),id], null));
}),node_connections);
});
cljs_audio.updates.add_node = (function cljs_audio$updates$add_node(path,patch){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,path);
var map__53388 = node;
var map__53388__$1 = cljs.core.__destructure_map(map__53388);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53388__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53388__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var create_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53388__$1,new cljs.core.Keyword(null,"create-args","create-args",541331657));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.make_add_node(path,type,create_args),cljs_audio.updates.make_set_params(path,parameters)),(function (){var node_connections_paths = cljs_audio.updates.find_node_connections(path,patch);
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (path__$1){
return cljs_audio.updates.make_connect(path__$1,patch);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_connections_paths], 0)));
})());
});
cljs_audio.updates.replace_input_id = (function cljs_audio$updates$replace_input_id(id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-input-id","replace-input-id",1861785226),id], null)], null);
});
cljs_audio.updates.replace_output_id = (function cljs_audio$updates$replace_output_id(id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-output-id","replace-output-id",-790168564),id], null)], null);
});
cljs_audio.updates.make_remove_node = (function cljs_audio$updates$make_remove_node(path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disconnect","disconnect",-132009289),path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-node","remove-node",-1450759511),path], null)], null);
});
cljs_audio.updates.add_group = (function cljs_audio$updates$add_group(path,patch){
var group = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,path);
var in_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-audio.updates","in","cljs-audio.updates/in",-1657244520)], null));
var out_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-audio.updates","out","cljs-audio.updates/out",-1875005142)], null));
var patch__$1 = cljs.core.assoc_in(cljs.core.assoc_in(patch,in_path,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create-args","create-args",541331657),cljs.core.PersistentVector.EMPTY], null)),out_path,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create-args","create-args",541331657),cljs.core.PersistentVector.EMPTY], null));
var create_in_out_commands = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null)))?cljs.core.PersistentVector.EMPTY:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.add_node(in_path,patch__$1),cljs_audio.updates.add_node(out_path,patch__$1)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(create_in_out_commands,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__53410){
var vec__53411 = p__53410;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53411,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53411,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return cljs_audio.updates.add_node(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)),patch__$1);
} else {
var G__53414 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"group","group",582596132)], null));
var G__53415 = patch__$1;
return (cljs_audio.updates.add_group.cljs$core$IFn$_invoke$arity$2 ? cljs_audio.updates.add_group.cljs$core$IFn$_invoke$arity$2(G__53414,G__53415) : cljs_audio.updates.add_group.call(null,G__53414,G__53415));

}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,group)], 0)));
});
cljs_audio.updates.remove_group = (function cljs_audio$updates$remove_group(path,patch){
var group = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,path);
var make_remove_in_out = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null)))?cljs.core.PersistentVector.EMPTY:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.make_remove_node(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-audio.updates","in","cljs-audio.updates/in",-1657244520)], null))),cljs_audio.updates.make_remove_node(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-audio.updates","out","cljs-audio.updates/out",-1875005142)], null)))));
if(cljs.core.empty_QMARK_(group)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(make_remove_in_out,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__53421){
var vec__53422 = p__53421;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53422,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53422,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return cljs_audio.updates.make_remove_node(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(node))){
var G__53425 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"group","group",582596132)], null));
var G__53426 = patch;
return (cljs_audio.updates.remove_group.cljs$core$IFn$_invoke$arity$2 ? cljs_audio.updates.remove_group.cljs$core$IFn$_invoke$arity$2(G__53425,G__53426) : cljs_audio.updates.remove_group.call(null,G__53425,G__53426));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR",path,node], 0));

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$1(group)], 0)));
}
});
cljs_audio.updates.edit__GT_update = (function cljs_audio$updates$edit__GT_update(p__53430){
var vec__53432 = p__53430;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53432,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53432,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53432,(2),null);
var ocr_53441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(path)),op,v], null);
try{if(((cljs.core.vector_QMARK_(ocr_53441)) && ((cljs.core.count(ocr_53441) === 3)))){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (1))))){
try{var ocr_53441_0__53455_left__53458 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(1));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53458)) && ((cljs.core.count(ocr_53441_0__53455_left__53458) === (1))))){
try{var ocr_53441_0__53455_left__53458_0__53460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53458,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53458_0__53460,new cljs.core.Keyword(null,"connections","connections",-2064090887))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,cljs.core.PersistentHashSet.EMPTY)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-all-connections","remove-all-connections",866513653),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53549){if((e53549 instanceof Error)){
var e__51850__auto__ = e53549;
if((e__51850__auto__ === cljs.core.match.backtrack)){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-all-connections","replace-all-connections",-807888043),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53550){if((e53550 instanceof Error)){
var e__51850__auto____$1 = e53550;
if((e__51850__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$1;
}
} else {
throw e53550;

}
}} else {
throw e__51850__auto__;
}
} else {
throw e53549;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53548){if((e53548 instanceof Error)){
var e__51850__auto__ = e53548;
if((e__51850__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto__;
}
} else {
throw e53548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53547){if((e53547 instanceof Error)){
var e__51850__auto__ = e53547;
if((e__51850__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto__;
}
} else {
throw e53547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53546){if((e53546 instanceof Error)){
var e__51850__auto__ = e53546;
if((e__51850__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto__;
}
} else {
throw e53546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53488){if((e53488 instanceof Error)){
var e__51850__auto__ = e53488;
if((e__51850__auto__ === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (2))))){
try{var ocr_53441_0__53455_left__53461 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(2));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53461)) && ((cljs.core.count(ocr_53441_0__53455_left__53461) === (2))))){
try{var ocr_53441_0__53455_left__53461_1__53464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53461,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53461_1__53464,new cljs.core.Keyword(null,"connections","connections",-2064090887))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-connection","add-connection",1087533663),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53545){if((e53545 instanceof Error)){
var e__51850__auto____$1 = e53545;
if((e__51850__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$1;
}
} else {
throw e53545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53542){if((e53542 instanceof Error)){
var e__51850__auto____$1 = e53542;
if((e__51850__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"-","-",-2112348439))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-connection","remove-connection",-2088862469),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53544){if((e53544 instanceof Error)){
var e__51850__auto____$2 = e53544;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53543){if((e53543 instanceof Error)){
var e__51850__auto____$2 = e53543;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53543;

}
}} else {
throw e__51850__auto____$1;
}
} else {
throw e53542;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53526){if((e53526 instanceof Error)){
var e__51850__auto____$1 = e53526;
if((e__51850__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455_left__53461_1__53464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53461,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53461_1__53464,new cljs.core.Keyword(null,"parameters","parameters",-1229919748))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_0__53455_left__53461_0__53463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53461,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53461_0__53463,new cljs.core.Keyword(null,"start","start",-355208981))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53541){if((e53541 instanceof Error)){
var e__51850__auto____$2 = e53541;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53540){if((e53540 instanceof Error)){
var e__51850__auto____$2 = e53540;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53540;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53528){if((e53528 instanceof Error)){
var e__51850__auto____$2 = e53528;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var ocr_53441_0__53455_left__53461_0__53463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53461,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53461_0__53463,new cljs.core.Keyword(null,"start","start",-355208981))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53539){if((e53539 instanceof Error)){
var e__51850__auto____$3 = e53539;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$3;
}
} else {
throw e53539;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53538){if((e53538 instanceof Error)){
var e__51850__auto____$3 = e53538;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$3;
}
} else {
throw e53538;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53529){if((e53529 instanceof Error)){
var e__51850__auto____$3 = e53529;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_0__53455_left__53461_0__53463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53461,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53461_0__53463,new cljs.core.Keyword(null,"stop","stop",-2140911342))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53537){if((e53537 instanceof Error)){
var e__51850__auto____$4 = e53537;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$4;
}
} else {
throw e53537;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53536){if((e53536 instanceof Error)){
var e__51850__auto____$4 = e53536;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$4;
}
} else {
throw e53536;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53530){if((e53530 instanceof Error)){
var e__51850__auto____$4 = e53530;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var ocr_53441_0__53455_left__53461_0__53463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53461,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53461_0__53463,new cljs.core.Keyword(null,"stop","stop",-2140911342))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53535){if((e53535 instanceof Error)){
var e__51850__auto____$5 = e53535;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53535;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53534){if((e53534 instanceof Error)){
var e__51850__auto____$5 = e53534;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53531){if((e53531 instanceof Error)){
var e__51850__auto____$5 = e53531;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-parameter","replace-parameter",-804777470),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53533){if((e53533 instanceof Error)){
var e__51850__auto____$6 = e53533;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53532){if((e53532 instanceof Error)){
var e__51850__auto____$6 = e53532;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53532;

}
}} else {
throw e__51850__auto____$5;
}
} else {
throw e53531;

}
}} else {
throw e__51850__auto____$4;
}
} else {
throw e53530;

}
}} else {
throw e__51850__auto____$3;
}
} else {
throw e53529;

}
}} else {
throw e__51850__auto____$2;
}
} else {
throw e53528;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53527){if((e53527 instanceof Error)){
var e__51850__auto____$2 = e53527;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53527;

}
}} else {
throw e__51850__auto____$1;
}
} else {
throw e53526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53525){if((e53525 instanceof Error)){
var e__51850__auto____$1 = e53525;
if((e__51850__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$1;
}
} else {
throw e53525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53489){if((e53489 instanceof Error)){
var e__51850__auto____$1 = e53489;
if((e__51850__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (3))))){
try{var ocr_53441_0__53455_left__53465 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(3));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53465)) && ((cljs.core.count(ocr_53441_0__53455_left__53465) === (3))))){
try{var ocr_53441_0__53455_left__53465_2__53469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53465,(2));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53465_2__53469,new cljs.core.Keyword(null,"parameters","parameters",-1229919748))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(3));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-parameter","replace-parameter",-804777470),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),path)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53524){if((e53524 instanceof Error)){
var e__51850__auto____$2 = e53524;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53524;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53523){if((e53523 instanceof Error)){
var e__51850__auto____$2 = e53523;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53523;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53522){if((e53522 instanceof Error)){
var e__51850__auto____$2 = e53522;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53522;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53521){if((e53521 instanceof Error)){
var e__51850__auto____$2 = e53521;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$2;
}
} else {
throw e53521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53490){if((e53490 instanceof Error)){
var e__51850__auto____$2 = e53490;
if((e__51850__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (4))))){
try{var ocr_53441_0__53455_left__53470 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(4));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53470)) && ((cljs.core.count(ocr_53441_0__53455_left__53470) === (4))))){
try{var ocr_53441_0__53455_left__53470_3__53475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53470,(3));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53470_3__53475,new cljs.core.Keyword(null,"parameters","parameters",-1229919748))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(4));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-parameter","replace-parameter",-804777470),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),path)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53520){if((e53520 instanceof Error)){
var e__51850__auto____$3 = e53520;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$3;
}
} else {
throw e53520;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53519){if((e53519 instanceof Error)){
var e__51850__auto____$3 = e53519;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$3;
}
} else {
throw e53519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53518){if((e53518 instanceof Error)){
var e__51850__auto____$3 = e53518;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$3;
}
} else {
throw e53518;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53517){if((e53517 instanceof Error)){
var e__51850__auto____$3 = e53517;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$3;
}
} else {
throw e53517;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53491){if((e53491 instanceof Error)){
var e__51850__auto____$3 = e53491;
if((e__51850__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (2))))){
try{var ocr_53441_0__53455_left__53476 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(2));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53476)) && ((cljs.core.count(ocr_53441_0__53455_left__53476) === (2))))){
try{var ocr_53441_0__53455_left__53476_1__53479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53476,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53476_1__53479,new cljs.core.Keyword(null,"parameters","parameters",-1229919748))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-parameter","set-parameter",1238340072),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53516){if((e53516 instanceof Error)){
var e__51850__auto____$4 = e53516;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$4;
}
} else {
throw e53516;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53513){if((e53513 instanceof Error)){
var e__51850__auto____$4 = e53513;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"-","-",-2112348439))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53515){if((e53515 instanceof Error)){
var e__51850__auto____$5 = e53515;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53515;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53514){if((e53514 instanceof Error)){
var e__51850__auto____$5 = e53514;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53514;

}
}} else {
throw e__51850__auto____$4;
}
} else {
throw e53513;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53512){if((e53512 instanceof Error)){
var e__51850__auto____$4 = e53512;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$4;
}
} else {
throw e53512;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53511){if((e53511 instanceof Error)){
var e__51850__auto____$4 = e53511;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$4;
}
} else {
throw e53511;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53492){if((e53492 instanceof Error)){
var e__51850__auto____$4 = e53492;
if((e__51850__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (1))))){
try{var ocr_53441_0__53455_left__53480 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(1));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53480)) && ((cljs.core.count(ocr_53441_0__53455_left__53480) === (1))))){
try{var ocr_53441_0__53455_left__53480_0__53482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53480,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53480_0__53482,new cljs.core.Keyword(null,"group","group",582596132))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-group","replace-group",-842393146),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53510){if((e53510 instanceof Error)){
var e__51850__auto____$5 = e53510;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53507){if((e53507 instanceof Error)){
var e__51850__auto____$5 = e53507;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-group","replace-group",-842393146),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53509){if((e53509 instanceof Error)){
var e__51850__auto____$6 = e53509;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53509;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53508){if((e53508 instanceof Error)){
var e__51850__auto____$6 = e53508;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53508;

}
}} else {
throw e__51850__auto____$5;
}
} else {
throw e53507;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53506){if((e53506 instanceof Error)){
var e__51850__auto____$5 = e53506;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53506;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53505){if((e53505 instanceof Error)){
var e__51850__auto____$5 = e53505;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$5;
}
} else {
throw e53505;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53493){if((e53493 instanceof Error)){
var e__51850__auto____$5 = e53493;
if((e__51850__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_53441_0__53455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(0));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455)) && ((cljs.core.count(ocr_53441_0__53455) >= (2))))){
try{var ocr_53441_0__53455_left__53483 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_53441_0__53455,(0),(2));
if(((cljs.core.vector_QMARK_(ocr_53441_0__53455_left__53483)) && ((cljs.core.count(ocr_53441_0__53455_left__53483) === (2))))){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_0__53455_left__53483_1__53486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53483,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53483_1__53486,new cljs.core.Keyword(null,"group","group",582596132))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-node","replace-node",388366967),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53504){if((e53504 instanceof Error)){
var e__51850__auto____$6 = e53504;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53504;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53503){if((e53503 instanceof Error)){
var e__51850__auto____$6 = e53503;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53503;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53496){if((e53496 instanceof Error)){
var e__51850__auto____$6 = e53496;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var ocr_53441_0__53455_left__53483_1__53486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53483,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53483_1__53486,new cljs.core.Keyword(null,"group","group",582596132))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-node","add-node",-2069253988),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53502){if((e53502 instanceof Error)){
var e__51850__auto____$7 = e53502;
if((e__51850__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$7;
}
} else {
throw e53502;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53501){if((e53501 instanceof Error)){
var e__51850__auto____$7 = e53501;
if((e__51850__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$7;
}
} else {
throw e53501;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53497){if((e53497 instanceof Error)){
var e__51850__auto____$7 = e53497;
if((e__51850__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_53441_1__53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(1));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_1__53456,new cljs.core.Keyword(null,"r","r",-471384190))){
try{var ocr_53441_0__53455_left__53483_0__53485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53483,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_53441_0__53455_left__53483_0__53485,new cljs.core.Keyword(null,"create-args","create-args",541331657))){
try{var ocr_53441_2__53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_53441_2__53457,v)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455_left__53483,(1));
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_53441_0__53455,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recreate-node","recreate-node",49698937),path], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53500){if((e53500 instanceof Error)){
var e__51850__auto____$8 = e53500;
if((e__51850__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$8;
}
} else {
throw e53500;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53499){if((e53499 instanceof Error)){
var e__51850__auto____$8 = e53499;
if((e__51850__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$8;
}
} else {
throw e53499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53498){if((e53498 instanceof Error)){
var e__51850__auto____$8 = e53498;
if((e__51850__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$8;
}
} else {
throw e53498;

}
}} else {
throw e__51850__auto____$7;
}
} else {
throw e53497;

}
}} else {
throw e__51850__auto____$6;
}
} else {
throw e53496;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53495){if((e53495 instanceof Error)){
var e__51850__auto____$6 = e53495;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53495;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53494){if((e53494 instanceof Error)){
var e__51850__auto____$6 = e53494;
if((e__51850__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__51850__auto____$6;
}
} else {
throw e53494;

}
}} else {
throw e__51850__auto____$5;
}
} else {
throw e53493;

}
}} else {
throw e__51850__auto____$4;
}
} else {
throw e53492;

}
}} else {
throw e__51850__auto____$3;
}
} else {
throw e53491;

}
}} else {
throw e__51850__auto____$2;
}
} else {
throw e53490;

}
}} else {
throw e__51850__auto____$1;
}
} else {
throw e53489;

}
}} else {
throw e__51850__auto__;
}
} else {
throw e53488;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53487){if((e53487 instanceof Error)){
var e__51850__auto__ = e53487;
if((e__51850__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_53441)].join('')));
} else {
throw e__51850__auto__;
}
} else {
throw e53487;

}
}});
cljs_audio.updates.make_updates = (function cljs_audio$updates$make_updates(a,b){
var edits = (function (){var G__53551 = editscript.core.diff.cljs$core$IFn$_invoke$arity$2(a,b);
var G__53552 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"algo","algo",1472048382),new cljs.core.Keyword(null,"quick","quick",841581564)], null);
return (editscript.core.get_edits.cljs$core$IFn$_invoke$arity$2 ? editscript.core.get_edits.cljs$core$IFn$_invoke$arity$2(G__53551,G__53552) : editscript.core.get_edits.call(null,G__53551,G__53552));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (edit){
return cljs_audio.updates.edit__GT_update(edit);
}),edits);
});
if((typeof cljs_audio !== 'undefined') && (typeof cljs_audio.updates !== 'undefined') && (typeof cljs_audio.updates.update__GT_commands !== 'undefined')){
} else {
cljs_audio.updates.update__GT_commands = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53553 = cljs.core.get_global_hierarchy;
return (fexpr__53553.cljs$core$IFn$_invoke$arity$0 ? fexpr__53553.cljs$core$IFn$_invoke$arity$0() : fexpr__53553.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-audio.updates","update->commands"),(function (p__53554){
var vec__53555 = p__53554;
var update_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53555,(0),null);
return update_name;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-connection","add-connection",1087533663),(function (p__53558,_,patch){
var vec__53559 = p__53558;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53559,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53559,(1),null);
return cljs_audio.updates.make_connect(path,patch);
}));
cljs_audio.updates.make_disconnect = (function cljs_audio$updates$make_disconnect(connection_path,patch){
var parent_patch_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),connection_path));
var nodes = cljs.core.last(connection_path);
var vec__53562 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(parent_patch_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),node], null));
}),nodes);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53562,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53562,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disconnect","disconnect",-132009289)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_audio.updates.resolve_from.cljs$core$IFn$_invoke$arity$2(from,patch),cljs_audio.updates.resolve_to.cljs$core$IFn$_invoke$arity$2(to,patch)], null))], null);
});
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"remove-connection","remove-connection",-2088862469),(function (p__53565,patch,_){
var vec__53566 = p__53565;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53566,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53566,(1),null);
return cljs_audio.updates.make_disconnect(path,patch);
}));
cljs_audio.updates.remove_all_connections = (function cljs_audio$updates$remove_all_connections(path,patch){
var connections_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path));
var connections = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (connection){
return cljs_audio.updates.make_disconnect(cljs.core.into.cljs$core$IFn$_invoke$arity$2(connections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connection], null)),patch);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([connections], 0)));
});
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"remove-all-connections","remove-all-connections",866513653),(function (p__53569,old_patch){
var vec__53570 = p__53569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53570,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53570,(1),null);
return cljs_audio.updates.remove_all_connections(path,old_patch);
}));
cljs_audio.updates.add_all_connections = (function cljs_audio$updates$add_all_connections(path,patch){
var connections_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path));
var connections = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (connection){
return cljs_audio.updates.make_connect(cljs.core.into.cljs$core$IFn$_invoke$arity$2(connections_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887),connection], null)),patch);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([connections], 0)));
});
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replace-all-connections","replace-all-connections",-807888043),(function (p__53573,old_patch,new_patch){
var vec__53574 = p__53573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53574,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53574,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.remove_all_connections(path,old_patch),cljs_audio.updates.add_all_connections(path,new_patch));
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-parameters","set-parameters",-2146679072),(function (p__53577,_,new_patch){
var vec__53578 = p__53577;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53578,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53578,(1),null);
var node_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),path));
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (name,value){
return cljs_audio.updates.set_parameter(node_path,name,value);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path)], 0)));
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-parameter","set-parameter",1238340072),(function (p__53581,_,new_patch){
var vec__53582 = p__53581;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path);
var parameter_name = cljs.core.last(path);
var node_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),path));
return cljs_audio.updates.set_parameter(node_path,parameter_name,value);
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replace-parameter","replace-parameter",-804777470),(function (p__53585,_,new_patch){
var vec__53586 = p__53585;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53586,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53586,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path);
var parameter_name = cljs.core.last(path);
var node_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),path));
return cljs_audio.updates.set_parameter(node_path,parameter_name,value);
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replace-group","replace-group",-842393146),(function (p__53589,old_patch,new_patch){
var vec__53590 = p__53589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53590,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53590,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.remove_group(path,old_patch),cljs_audio.updates.add_group(path,new_patch));
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-node","add-node",-2069253988),(function (p__53593,old_patch,new_patch){
var vec__53594 = p__53593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53594,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53594,(1),null);
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return cljs_audio.updates.add_node(path,new_patch);
} else {
return cljs_audio.updates.add_group(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null)),new_patch);

}
}));
cljs_audio.updates.replace_node = (function cljs_audio$updates$replace_node(path,old_patch,new_patch){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_patch,path);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return cljs_audio.updates.make_remove_node(path);
} else {
return cljs_audio.updates.remove_group(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null)),old_patch);

}
})(),(function (){var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return cljs_audio.updates.add_node(path,new_patch);
} else {
return cljs_audio.updates.add_group(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null)),new_patch);

}
})());
});
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replace-node","replace-node",388366967),(function (p__53597,old_patch,new_patch){
var vec__53598 = p__53597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53598,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53598,(1),null);
return cljs_audio.updates.replace_node(path,old_patch,new_patch);
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start","start",-355208981),(function (p__53601,old_patch,new_patch){
var vec__53602 = p__53601;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53602,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53602,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path);
var node_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),path));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node-path","node-path",1808294118),node_path,new cljs.core.Keyword(null,"old","old",-1825222690),old_patch], 0));

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.replace_node(node_path,old_patch,new_patch),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),node_path,value], null)], null));
}));
cljs_audio.updates.update__GT_commands.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (p__53605,_,new_patch){
var vec__53606 = p__53605;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53606,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53606,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_patch,path);
var node_path = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),path));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),node_path,value], null)], null);
}));
cljs_audio.updates.__GT_node_ast = (function cljs_audio$updates$__GT_node_ast(p__53609){
var vec__53610 = p__53609;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53610,(0),null);
var parameters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53610,(1),null);
var create_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53610,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters,new cljs.core.Keyword(null,"create-args","create-args",541331657),create_args], null);
});
cljs_audio.updates.__GT_group_ast = (function cljs_audio$updates$__GT_group_ast(group){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__53613){
var vec__53614 = p__53613;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53614,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53614,(1),null);
if((cljs.core.first(node) instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs_audio.updates.__GT_node_ast(node)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(cljs_audio.updates.__GT_patch_ast.cljs$core$IFn$_invoke$arity$1 ? cljs_audio.updates.__GT_patch_ast.cljs$core$IFn$_invoke$arity$1(node) : cljs_audio.updates.__GT_patch_ast.call(null,node))], null);
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,group)));
});
cljs_audio.updates.__GT_connections_ast = (function cljs_audio$updates$__GT_connections_ast(connections){
return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__53617){
var vec__53618 = p__53617;
var from_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53618,(0),null);
var to_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53618,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_id,new cljs.core.Keyword(null,">",">",-555517146)))?new cljs.core.Keyword("cljs-audio.updates","in","cljs-audio.updates/in",-1657244520):from_id),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to_id,new cljs.core.Keyword(null,">",">",-555517146)))?new cljs.core.Keyword("cljs-audio.updates","out","cljs-audio.updates/out",-1875005142):to_id)], null);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,connections)));
});
cljs_audio.updates.__GT_patch_ast = (function cljs_audio$updates$__GT_patch_ast(patch){
var vec__53621 = patch;
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53621,(0),null);
var connections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53621,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),cljs_audio.updates.__GT_group_ast(group),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs_audio.updates.__GT_connections_ast(connections)], null);
});
cljs_audio.updates.cleanup_meaningless_ops = (function cljs_audio$updates$cleanup_meaningless_ops(p__53624){
var vec__53625 = p__53624;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(0),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(1),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(2),null);
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"connect","connect",1232828233))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,cljs.core.PersistentVector.EMPTY)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a2,cljs.core.PersistentVector.EMPTY)))))));
});
cljs_audio.updates.patches__GT_commands = (function cljs_audio$updates$patches__GT_commands(old,new$){
var a = cljs_audio.updates.__GT_patch_ast(old);
var b = cljs_audio.updates.__GT_patch_ast(new$);
var updates = cljs_audio.updates.make_updates(a,b);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs_audio.updates.cleanup_meaningless_ops,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__53628_SHARP_){
return cljs_audio.updates.update__GT_commands.cljs$core$IFn$_invoke$arity$3(p1__53628_SHARP_,a,b);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([updates], 0)))));
});

//# sourceMappingURL=cljs_audio.updates.js.map
