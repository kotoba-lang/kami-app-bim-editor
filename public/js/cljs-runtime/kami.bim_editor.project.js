goog.provide('kami.bim_editor.project');
kami.bim_editor.project.current_version = (2);
kami.bim_editor.project.document = (function kami$bim_editor$project$document(p__21701){
var map__21702 = p__21701;
var map__21702__$1 = cljs.core.__destructure_map(map__21702);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var building_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"building-model","building-model",509688498));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"interaction","interaction",-2143888916));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("kami","document","kami/document",-1333247185),new cljs.core.Keyword(null,"bim-editor-project","bim-editor-project",1891398523),new cljs.core.Keyword("kami","version","kami/version",428545552),kami.bim_editor.project.current_version,new cljs.core.Keyword("project","id","project/id",-791740645),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "untitled-bim";
}
})(),new cljs.core.Keyword("project","name","project/name",2022968152),(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Untitled BIM";
}
})(),new cljs.core.Keyword("project","building-model","project/building-model",-1863247543),building_model,new cljs.core.Keyword("project","editor","project/editor",-1449754765),editor,new cljs.core.Keyword("project","camera","project/camera",-1501758414),camera,new cljs.core.Keyword("project","interaction","project/interaction",-1316543261),interaction], null);
});
kami.bim_editor.project.migrate = (function kami$bim_editor$project$migrate(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bim-editor-project","bim-editor-project",1891398523),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(v))){
var G__21703 = new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(v);
switch (G__21703) {
case (2):
return v;

break;
case (1):
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword("kami","version","kami/version",428545552),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("project","interaction","project/interaction",-1316543261),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"revit","revit",-585685059)], null)], 0)),new cljs.core.Keyword("project","version","project/version",132630599));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported BIM project version",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(v)], null));

}
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(v))))){
var storey = (function (){var G__21706 = v;
var G__21706__$1 = (((G__21706 == null))?null:new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(G__21706));
var G__21706__$2 = (((G__21706__$1 == null))?null:cljs.core.first(G__21706__$1));
var G__21706__$3 = (((G__21706__$2 == null))?null:new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(G__21706__$2));
var G__21706__$4 = (((G__21706__$3 == null))?null:cljs.core.first(G__21706__$3));
var G__21706__$5 = (((G__21706__$4 == null))?null:new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(G__21706__$4));
if((G__21706__$5 == null)){
return null;
} else {
return cljs.core.first(G__21706__$5);
}
})();
return kami.bim_editor.project.document(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"building-model","building-model",509688498),v,new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__21787 = storey;
var G__21787__$1 = (((G__21787 == null))?null:new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__21787));
var G__21787__$2 = (((G__21787__$1 == null))?null:cljs.core.first(G__21787__$1));
if((G__21787__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__21787__$2);
}
})()], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),0.75,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),0.5], null),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"revit","revit",-585685059)], null)], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a BIM Editor project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null));

}
}
});
kami.bim_editor.project.valid_QMARK_ = (function kami$bim_editor$project$valid_QMARK_(p){
var model = new cljs.core.Keyword("project","building-model","project/building-model",-1863247543).cljs$core$IFn$_invoke$arity$1(p);
var storeys = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"storeys","storeys",1712161297),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buildings","buildings",-308691065),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(model)], 0))], 0));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bim-editor-project","bim-editor-project",1891398523),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.project.current_version,new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(p))) && (((typeof new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((typeof new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((cljs.core.seq(new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(model))) && (((cljs.core.seq(storeys)) && (((cljs.core.every_QMARK_((function (p1__21789_SHARP_){
return (((!((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21789_SHARP_) == null)))) && (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(p1__21789_SHARP_))));
}),storeys)) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","editor","project/editor",-1449754765).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","camera","project/camera",-1501758414).cljs$core$IFn$_invoke$arity$1(p))) && (cljs.core.map_QMARK_(new cljs.core.Keyword("project","interaction","project/interaction",-1316543261).cljs$core$IFn$_invoke$arity$1(p))))))))))))))))))));
});
kami.bim_editor.project.open = (function kami$bim_editor$project$open(v){
var p = kami.bim_editor.project.migrate(v);
if(kami.bim_editor.project.valid_QMARK_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid BIM Editor project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),p], null));
}

return p;
});

//# sourceMappingURL=kami.bim_editor.project.js.map
