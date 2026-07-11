goog.provide('kami.bim_editor.app');
kami.bim_editor.app.wall = (function kami$bim_editor$app$wall(id,a,b){
return bim.wall(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),["Wall ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"start","start",-355208981),a,new cljs.core.Keyword(null,"end","end",-268185958),b,new cljs.core.Keyword(null,"thickness","thickness",-940175454),0.25,new cljs.core.Keyword(null,"height","height",1025178622),3.2,new cljs.core.Keyword(null,"material","material",460118677),"Concrete"], null));
});
kami.bim_editor.app.initial_project = (function kami$bim_editor$app$initial_project(){
var st = bim.storey(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Ground Floor",new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(0),new cljs.core.Keyword(null,"height","height",1025178622),3.2,new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentVector.EMPTY], null));
var p = cljs.core.update.cljs$core$IFn$_invoke$arity$4(bim.project("Lodge"),new cljs.core.Keyword(null,"sites","sites",-842069881),cljs.core.conj,bim.site(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Site",new cljs.core.Keyword(null,"geo","geo",-2054400503),null,new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bim.building(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Lodge",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"reference-elevation","reference-elevation",-567054888),(0),new cljs.core.Keyword(null,"storeys","storeys",1712161297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [st], null)], null))], null)], null)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22834_SHARP_,p2__22835_SHARP_){
return bim.add_element(p1__22834_SHARP_,(3),p2__22835_SHARP_);
}),p,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.bim_editor.app.wall((10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0),(0)], null)),kami.bim_editor.app.wall((11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(6),(0)], null)),kami.bim_editor.app.wall((12),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(6),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6),(0)], null)),kami.bim_editor.app.wall((13),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))], null));
});
if((typeof kami !== 'undefined') && (typeof kami.bim_editor !== 'undefined') && (typeof kami.bim_editor.app !== 'undefined') && (typeof kami.bim_editor.app.state !== 'undefined')){
} else {
kami.bim_editor.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"next-id","next-id",-224240762),new cljs.core.Keyword(null,"next-storey-id","next-storey-id",-1446152152),new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"profile","profile",-545963874)],["Untitled BIM",0.5,(10),cljs.core.PersistentVector.EMPTY,(0),(14),(4),"",cljs.core.PersistentVector.EMPTY,0.75,kami.bim_editor.app.initial_project(),new cljs.core.Keyword(null,"clean","clean",41534079),(3),"untitled-bim",new cljs.core.Keyword(null,"revit","revit",-585685059)]));
}
if((typeof kami !== 'undefined') && (typeof kami.bim_editor !== 'undefined') && (typeof kami.bim_editor.app !== 'undefined') && (typeof kami.bim_editor.app.viewport !== 'undefined')){
} else {
kami.bim_editor.app.viewport = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
kami.bim_editor.app.storeys = (function kami$bim_editor$app$storeys(){
return new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(bim.find_building(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),(2)));
});
kami.bim_editor.app.elements = (function kami$bim_editor$app$elements(){
return new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(bim.find_storey(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state))));
});
kami.bim_editor.app.all_elements = (function kami$bim_editor$app$all_elements(){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.bim_editor.app.storeys()], 0));
});
kami.bim_editor.app.selected = (function kami$bim_editor$app$selected(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22838_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22838_SHARP_));
}),kami.bim_editor.app.elements()));
});
kami.bim_editor.app.mesh = (function kami$bim_editor$app$mesh(){
return bim.merge_meshes(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(bim.element_mesh,kami.bim_editor.app.all_elements()));
});
kami.bim_editor.app.refresh_BANG_ = (function kami$bim_editor$app$refresh_BANG_(){
var temp__5825__auto___23290 = cljs.core.deref(kami.bim_editor.app.viewport);
if(cljs.core.truth_(temp__5825__auto___23290)){
var v_23291 = temp__5825__auto___23290;
var m_23292 = kami.bim_editor.app.mesh();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.viewport,cljs.core.assoc,new cljs.core.Keyword(null,"buffers","buffers",471409492),kami.webgpu.mesh.upload_mesh_BANG_(new cljs.core.Keyword(null,"mesh-context","mesh-context",832369712).cljs$core$IFn$_invoke$arity$1(v_23291),m_23292));

(document.getElementById("stats").textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kami.bim_editor.app.storeys()))," storeys \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kami.bim_editor.app.all_elements()))," elements \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(m_23292)) / (3)))," triangles"].join(''));

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"slabCount","slabCount",-940768725),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"wallCount","wallCount",1835556237),new cljs.core.Keyword(null,"storeyCount","storeyCount",1208830064),new cljs.core.Keyword(null,"openingCount","openingCount",235745848),new cljs.core.Keyword(null,"shortcutBuffer","shortcutBuffer",1317694555),new cljs.core.Keyword(null,"elementCount","elementCount",952977148),new cljs.core.Keyword(null,"activeStorey","activeStorey",-634717315),new cljs.core.Keyword(null,"profile","profile",-545963874)],[kami.bim_editor.project.current_version,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"revision","revision",-1350113114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22841_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slab","slab",-565094848),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__22841_SHARP_));
}),kami.bim_editor.app.all_elements())),cljs.core.name(new cljs.core.Keyword(null,"save-status","save-status",-2046612873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state))),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22840_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__22840_SHARP_));
}),kami.bim_editor.app.all_elements())),cljs.core.count(kami.bim_editor.app.storeys()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22842_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(p1__22842_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22843_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__22843_SHARP_));
}),kami.bim_editor.app.all_elements()))),new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),cljs.core.count(kami.bim_editor.app.all_elements()),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))]))));
} else {
}

var levels_23293 = document.getElementById("levels");
(levels_23293.innerHTML = "");

var seq__22849_23294 = cljs.core.seq(kami.bim_editor.app.storeys());
var chunk__22850_23295 = null;
var count__22851_23296 = (0);
var i__22852_23297 = (0);
while(true){
if((i__22852_23297 < count__22851_23296)){
var storey_23298 = chunk__22850_23295.cljs$core$IIndexed$_nth$arity$2(null, i__22852_23297);
var b_23299 = document.createElement("button");
(b_23299.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(storey_23298))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(storey_23298).toFixed((2)))," m"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_23298),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_23299.classList.add("selected");
} else {
}

b_23299.addEventListener("click",((function (seq__22849_23294,chunk__22850_23295,count__22851_23296,i__22852_23297,b_23299,storey_23298,levels_23293){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_23298),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__22856 = cljs.core.first(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(storey_23298));
if((G__22856 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22856);
}
})()], 0));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__22849_23294,chunk__22850_23295,count__22851_23296,i__22852_23297,b_23299,storey_23298,levels_23293))
);

levels_23293.appendChild(b_23299);


var G__23300 = seq__22849_23294;
var G__23301 = chunk__22850_23295;
var G__23302 = count__22851_23296;
var G__23303 = (i__22852_23297 + (1));
seq__22849_23294 = G__23300;
chunk__22850_23295 = G__23301;
count__22851_23296 = G__23302;
i__22852_23297 = G__23303;
continue;
} else {
var temp__5825__auto___23304 = cljs.core.seq(seq__22849_23294);
if(temp__5825__auto___23304){
var seq__22849_23305__$1 = temp__5825__auto___23304;
if(cljs.core.chunked_seq_QMARK_(seq__22849_23305__$1)){
var c__5525__auto___23306 = cljs.core.chunk_first(seq__22849_23305__$1);
var G__23307 = cljs.core.chunk_rest(seq__22849_23305__$1);
var G__23308 = c__5525__auto___23306;
var G__23309 = cljs.core.count(c__5525__auto___23306);
var G__23310 = (0);
seq__22849_23294 = G__23307;
chunk__22850_23295 = G__23308;
count__22851_23296 = G__23309;
i__22852_23297 = G__23310;
continue;
} else {
var storey_23311 = cljs.core.first(seq__22849_23305__$1);
var b_23312 = document.createElement("button");
(b_23312.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(storey_23311))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(storey_23311).toFixed((2)))," m"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_23311),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_23312.classList.add("selected");
} else {
}

b_23312.addEventListener("click",((function (seq__22849_23294,chunk__22850_23295,count__22851_23296,i__22852_23297,b_23312,storey_23311,seq__22849_23305__$1,temp__5825__auto___23304,levels_23293){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_23311),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__22861 = cljs.core.first(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(storey_23311));
if((G__22861 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22861);
}
})()], 0));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__22849_23294,chunk__22850_23295,count__22851_23296,i__22852_23297,b_23312,storey_23311,seq__22849_23305__$1,temp__5825__auto___23304,levels_23293))
);

levels_23293.appendChild(b_23312);


var G__23313 = cljs.core.next(seq__22849_23305__$1);
var G__23314 = null;
var G__23315 = (0);
var G__23316 = (0);
seq__22849_23294 = G__23313;
chunk__22850_23295 = G__23314;
count__22851_23296 = G__23315;
i__22852_23297 = G__23316;
continue;
}
} else {
}
}
break;
}

var tree_23317 = document.getElementById("tree");
(tree_23317.innerHTML = "");

var seq__22870_23318 = cljs.core.seq(kami.bim_editor.app.elements());
var chunk__22871_23319 = null;
var count__22872_23320 = (0);
var i__22873_23321 = (0);
while(true){
if((i__22873_23321 < count__22872_23320)){
var e_23322 = chunk__22871_23319.cljs$core$IIndexed$_nth$arity$2(null, i__22873_23321);
var b_23323 = document.createElement("button");
var icon_23324 = (function (){var G__22883 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e_23322);
var G__22884 = "\u25C7";
var fexpr__22882 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wall","wall",-787661558),"\u25B1",new cljs.core.Keyword(null,"door","door",-956406127),"\u25AF",new cljs.core.Keyword(null,"window","window",724519534),"\u25A6"], null);
return (fexpr__22882.cljs$core$IFn$_invoke$arity$2 ? fexpr__22882.cljs$core$IFn$_invoke$arity$2(G__22883,G__22884) : fexpr__22882.call(null, G__22883,G__22884));
})();
(b_23323.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_23324)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e_23322))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_23322),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_23323.classList.add("selected");
} else {
}

b_23323.addEventListener("click",((function (seq__22870_23318,chunk__22871_23319,count__22872_23320,i__22873_23321,b_23323,icon_23324,e_23322,tree_23317){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_23322));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__22870_23318,chunk__22871_23319,count__22872_23320,i__22873_23321,b_23323,icon_23324,e_23322,tree_23317))
);

tree_23317.appendChild(b_23323);


var G__23325 = seq__22870_23318;
var G__23326 = chunk__22871_23319;
var G__23327 = count__22872_23320;
var G__23328 = (i__22873_23321 + (1));
seq__22870_23318 = G__23325;
chunk__22871_23319 = G__23326;
count__22872_23320 = G__23327;
i__22873_23321 = G__23328;
continue;
} else {
var temp__5825__auto___23329 = cljs.core.seq(seq__22870_23318);
if(temp__5825__auto___23329){
var seq__22870_23330__$1 = temp__5825__auto___23329;
if(cljs.core.chunked_seq_QMARK_(seq__22870_23330__$1)){
var c__5525__auto___23331 = cljs.core.chunk_first(seq__22870_23330__$1);
var G__23332 = cljs.core.chunk_rest(seq__22870_23330__$1);
var G__23333 = c__5525__auto___23331;
var G__23334 = cljs.core.count(c__5525__auto___23331);
var G__23335 = (0);
seq__22870_23318 = G__23332;
chunk__22871_23319 = G__23333;
count__22872_23320 = G__23334;
i__22873_23321 = G__23335;
continue;
} else {
var e_23336 = cljs.core.first(seq__22870_23330__$1);
var b_23337 = document.createElement("button");
var icon_23338 = (function (){var G__22886 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e_23336);
var G__22887 = "\u25C7";
var fexpr__22885 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wall","wall",-787661558),"\u25B1",new cljs.core.Keyword(null,"door","door",-956406127),"\u25AF",new cljs.core.Keyword(null,"window","window",724519534),"\u25A6"], null);
return (fexpr__22885.cljs$core$IFn$_invoke$arity$2 ? fexpr__22885.cljs$core$IFn$_invoke$arity$2(G__22886,G__22887) : fexpr__22885.call(null, G__22886,G__22887));
})();
(b_23337.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_23338)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e_23336))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_23336),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_23337.classList.add("selected");
} else {
}

b_23337.addEventListener("click",((function (seq__22870_23318,chunk__22871_23319,count__22872_23320,i__22873_23321,b_23337,icon_23338,e_23336,seq__22870_23330__$1,temp__5825__auto___23329,tree_23317){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_23336));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__22870_23318,chunk__22871_23319,count__22872_23320,i__22873_23321,b_23337,icon_23338,e_23336,seq__22870_23330__$1,temp__5825__auto___23329,tree_23317))
);

tree_23317.appendChild(b_23337);


var G__23339 = cljs.core.next(seq__22870_23330__$1);
var G__23340 = null;
var G__23341 = (0);
var G__23342 = (0);
seq__22870_23318 = G__23339;
chunk__22871_23319 = G__23340;
count__22872_23320 = G__23341;
i__22873_23321 = G__23342;
continue;
}
} else {
}
}
break;
}

var temp__5825__auto__ = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var wall_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e));
(document.getElementById("inspector-title").textContent = ["Selected ",cljs.core.name(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e))].join(''));

(document.getElementById("name").value = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e));

(document.getElementById("apply").disabled = (!(wall_QMARK_)));

var seq__22898_23343 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["length","height","thickness","material"], null));
var chunk__22899_23344 = null;
var count__22900_23345 = (0);
var i__22901_23346 = (0);
while(true){
if((i__22901_23346 < count__22900_23345)){
var id_23347 = chunk__22899_23344.cljs$core$IIndexed$_nth$arity$2(null, i__22901_23346);
(document.getElementById(id_23347).disabled = (!(wall_QMARK_)));


var G__23348 = seq__22898_23343;
var G__23349 = chunk__22899_23344;
var G__23350 = count__22900_23345;
var G__23351 = (i__22901_23346 + (1));
seq__22898_23343 = G__23348;
chunk__22899_23344 = G__23349;
count__22900_23345 = G__23350;
i__22901_23346 = G__23351;
continue;
} else {
var temp__5825__auto___23352__$1 = cljs.core.seq(seq__22898_23343);
if(temp__5825__auto___23352__$1){
var seq__22898_23353__$1 = temp__5825__auto___23352__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22898_23353__$1)){
var c__5525__auto___23354 = cljs.core.chunk_first(seq__22898_23353__$1);
var G__23355 = cljs.core.chunk_rest(seq__22898_23353__$1);
var G__23356 = c__5525__auto___23354;
var G__23357 = cljs.core.count(c__5525__auto___23354);
var G__23358 = (0);
seq__22898_23343 = G__23355;
chunk__22899_23344 = G__23356;
count__22900_23345 = G__23357;
i__22901_23346 = G__23358;
continue;
} else {
var id_23359 = cljs.core.first(seq__22898_23353__$1);
(document.getElementById(id_23359).disabled = (!(wall_QMARK_)));


var G__23360 = cljs.core.next(seq__22898_23353__$1);
var G__23361 = null;
var G__23362 = (0);
var G__23363 = (0);
seq__22898_23343 = G__23360;
chunk__22899_23344 = G__23361;
count__22900_23345 = G__23362;
i__22901_23346 = G__23363;
continue;
}
} else {
}
}
break;
}

if(wall_QMARK_){
(document.getElementById("length").value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null)));

(document.getElementById("height").value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"height","height",1025178622)], null)));

return (document.getElementById("thickness").value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"thickness","thickness",-940175454)], null)));
} else {
return null;
}
} else {
return null;
}
});
kami.bim_editor.app.commit_BANG_ = (function kami$bim_editor$app$commit_BANG_(p){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.app.state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"project","project",1124394579),p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0)),new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.inc);
}));

return kami.bim_editor.app.refresh_BANG_();
});
kami.bim_editor.app.draw_BANG_ = (function kami$bim_editor$app$draw_BANG_(){
var temp__5825__auto___23364 = cljs.core.deref(kami.bim_editor.app.viewport);
if(cljs.core.truth_(temp__5825__auto___23364)){
var map__22947_23365 = temp__5825__auto___23364;
var map__22947_23366__$1 = cljs.core.__destructure_map(map__22947_23365);
var v_23367 = map__22947_23366__$1;
var buffers_23368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947_23366__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
if(cljs.core.truth_(buffers_23368)){
var map__22953_23369 = cljs.core.deref(kami.bim_editor.app.state);
var map__22953_23370__$1 = cljs.core.__destructure_map(map__22953_23369);
var azimuth_23371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953_23370__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var elevation_23372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953_23370__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var d_23373 = (14);
var eye_23374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((4) + ((d_23373 * Math.cos(elevation_23372)) * Math.cos(azimuth_23371))),((3) + (d_23373 * Math.sin(elevation_23372))),((3) + ((d_23373 * Math.cos(elevation_23372)) * Math.sin(azimuth_23371)))], null);
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$5(v_23367,buffers_23368,eye_23374,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),1.5,(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.55,0.7,0.95], null));
} else {
}
} else {
}

return requestAnimationFrame(kami.bim_editor.app.draw_BANG_);
});
kami.bim_editor.app.num = (function kami$bim_editor$app$num(id){
return parseFloat(document.getElementById(id).value);
});
kami.bim_editor.app.editable_target_QMARK_ = (function kami$bim_editor$app$editable_target_QMARK_(event){
var target = event.target;
var tag = (function (){var G__22976 = target;
var G__22976__$1 = (((G__22976 == null))?null:G__22976.tagName);
if((G__22976__$1 == null)){
return null;
} else {
return G__22976__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__22982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__22982.cljs$core$IFn$_invoke$arity$1 ? fexpr__22982.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__22982.call(null, tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return target.isContentEditable;
}
});
kami.bim_editor.app.revit_shortcuts = new cljs.core.PersistentArrayMap(null, 5, ["wa","add-wall","dr","add-door","wn","add-window","ll","add-level","fl","add-slab"], null);
kami.bim_editor.app.profile_shortcuts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"archicad","archicad",-458708142),new cljs.core.PersistentArrayMap(null, 5, ["w","add-wall","d","add-door","n","add-window","l","add-level","f","add-slab"], null),new cljs.core.Keyword(null,"vectorworks","vectorworks",1696722757),new cljs.core.PersistentArrayMap(null, 5, ["2","add-wall","d","add-door","w","add-window","l","add-level","f","add-slab"], null)], null);
kami.bim_editor.app.storage_key = "kami.bim-editor.project.v2";
kami.bim_editor.app.backup_key = "kami.bim-editor.project.backup";
kami.bim_editor.app.project_document = (function kami$bim_editor$app$project_document(){
var map__22992 = cljs.core.deref(kami.bim_editor.app.state);
var map__22992__$1 = cljs.core.__destructure_map(map__22992);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var active_storey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"active-storey","active-storey",15108217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var azimuth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return kami.bim_editor.project.document(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id,new cljs.core.Keyword(null,"name","name",1843675177),project_name,new cljs.core.Keyword(null,"building-model","building-model",509688498),project,new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-storey","active-storey",15108217),active_storey,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),azimuth,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation], null),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null)], null));
});
kami.bim_editor.app.save_project_BANG_ = (function kami$bim_editor$app$save_project_BANG_(){
var data = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.bim_editor.app.project_document()], 0));
var old = localStorage.getItem(kami.bim_editor.app.storage_key);
if(cljs.core.truth_(old)){
localStorage.setItem(kami.bim_editor.app.backup_key,old);
} else {
}

localStorage.setItem(kami.bim_editor.app.storage_key,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660));

return kami.bim_editor.app.refresh_BANG_();
});
kami.bim_editor.app.apply_project_BANG_ = (function kami$bim_editor$app$apply_project_BANG_(value){
var p = kami.bim_editor.project.open(value);
var model = new cljs.core.Keyword("project","building-model","project/building-model",-1863247543).cljs$core$IFn$_invoke$arity$1(p);
var editor = new cljs.core.Keyword("project","editor","project/editor",-1449754765).cljs$core$IFn$_invoke$arity$1(p);
var camera = new cljs.core.Keyword("project","camera","project/camera",-1501758414).cljs$core$IFn$_invoke$arity$1(p);
var interaction = new cljs.core.Keyword("project","interaction","project/interaction",-1316543261).cljs$core$IFn$_invoke$arity$1(p);
var element_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"storeys","storeys",1712161297),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buildings","buildings",-308691065),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(model)], 0))], 0))], 0)));
var storey_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"storeys","storeys",1712161297),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buildings","buildings",-308691065),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(model)], 0))], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"project","project",1124394579),model,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(editor),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(editor),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535).cljs$core$IFn$_invoke$arity$1(camera),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(camera),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(13),element_ids) + (1)),new cljs.core.Keyword(null,"next-storey-id","next-storey-id",-1446152152),(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(3),storey_ids) + (1)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),"",new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660)], 0));

(document.getElementById("profile").value = cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(interaction)));

return kami.bim_editor.app.refresh_BANG_();
});
kami.bim_editor.app.load_project_BANG_ = (function kami$bim_editor$app$load_project_BANG_(){
var temp__5825__auto__ = localStorage.getItem(kami.bim_editor.app.storage_key);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
try{return kami.bim_editor.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}catch (e23027){var _ = e23027;
var temp__5825__auto____$1 = localStorage.getItem(kami.bim_editor.app.backup_key);
if(cljs.core.truth_(temp__5825__auto____$1)){
var backup = temp__5825__auto____$1;
return kami.bim_editor.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(backup));
} else {
return null;
}
}} else {
return null;
}
});
kami.bim_editor.app.download_project_BANG_ = (function kami$bim_editor$app$download_project_BANG_(){
var a = document.createElement("a");
var url = URL.createObjectURL((new Blob([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.bim_editor.app.project_document()], 0))],({"type": "application/edn"}))));
(a.href = url);

(a.download = "building.kami-bim.edn");

a.click();

return setTimeout((function (){
return URL.revokeObjectURL(url);
}),(0));
});
kami.bim_editor.app.import_project_BANG_ = (function kami$bim_editor$app$import_project_BANG_(event){
var temp__5825__auto__ = (event.target.files[(0)]);
if(cljs.core.truth_(temp__5825__auto__)){
var file = temp__5825__auto__;
return file.text().then((function (p1__23039_SHARP_){
return kami.bim_editor.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__23039_SHARP_));
}));
} else {
return null;
}
});
kami.bim_editor.app.invoke_shortcut_BANG_ = (function kami$bim_editor$app$invoke_shortcut_BANG_(event){
if(cljs.core.truth_(kami.bim_editor.app.editable_target_QMARK_(event))){
return null;
} else {
var key = event.key.toLowerCase();
var ctrl = (function (){var or__5002__auto__ = event.ctrlKey;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return event.metaKey;
}
})();
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"z");
if(and__5000__auto____$1){
return event.shiftKey;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
event.preventDefault();

return document.getElementById("redo").click();
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"z");
} else {
return and__5000__auto__;
}
})())){
event.preventDefault();

return document.getElementById("undo").click();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"revit","revit",-585685059))){
if(cljs.core.truth_(cljs.core.re_matches(/[a-z]/,key))){
var buffer = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.app.revit_shortcuts,buffer);
var prefix_QMARK_ = cljs.core.some((function (p1__23044_SHARP_){
return p1__23044_SHARP_.startsWith(buffer);
}),cljs.core.keys(kami.bim_editor.app.revit_shortcuts));
event.preventDefault();

if(cljs.core.truth_(command)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),"");

return document.getElementById(command).click();
} else {
if(cljs.core.truth_(prefix_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),buffer);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),key);

}
}
} else {
return null;
}
} else {
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.app.profile_shortcuts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile,key], null));
if(cljs.core.truth_(temp__5825__auto__)){
var command = temp__5825__auto__;
event.preventDefault();

return document.getElementById(command).click();
} else {
return null;
}

}
}
}
}
});
kami.bim_editor.app.init_BANG_ = (function kami$bim_editor$app$init_BANG_(){
var canvas = document.getElementById("gpu-canvas");
var drag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kami.webgpu.mesh.init_canvas_BANG_(canvas).then((function (v){
cljs.core.reset_BANG_(kami.bim_editor.app.viewport,v);

kami.bim_editor.app.refresh_BANG_();

(document.getElementById("gpu-status").textContent = "");

return kami.bim_editor.app.draw_BANG_();
}));

document.getElementById("profile").addEventListener("change",(function (p1__23074_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__23074_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),""], 0));

(document.getElementById("profile-hint").textContent = (function (){var G__23084 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var G__23084__$1 = (((G__23084 instanceof cljs.core.Keyword))?G__23084.fqn:null);
switch (G__23084__$1) {
case "archicad":
return "W Wall \u00B7 D Door \u00B7 N Window \u00B7 L Level \u00B7 F Floor";

break;
case "vectorworks":
return "2 Wall \u00B7 D Door \u00B7 W Window \u00B7 L Layer \u00B7 F Floor";

break;
default:
return "WA Wall \u00B7 DR Door \u00B7 WN Window \u00B7 LL Level \u00B7 FL Floor";

}
})());

return kami.bim_editor.app.refresh_BANG_();
}));

window.addEventListener("keydown",kami.bim_editor.app.invoke_shortcut_BANG_);

document.getElementById("add-wall").addEventListener("click",(function (){
var id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var storey_id = new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var z = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(bim.find_storey(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),storey_id));
var y = ((7) + (id - (14)));
var w = kami.bim_editor.app.wall(id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),y,z], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.update,new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),id);

return kami.bim_editor.app.commit_BANG_(bim.add_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),storey_id,w));
}));

document.getElementById("add-level").addEventListener("click",(function (){
var id = new cljs.core.Keyword(null,"next-storey-id","next-storey-id",-1446152152).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var elevation = (3.2 + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elevation","elevation",-1609348796),kami.bim_editor.app.storeys())));
var level = bim.storey(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),["Level ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id - (1)))].join(''),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation,new cljs.core.Keyword(null,"height","height",1025178622),3.2,new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentVector.EMPTY], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"next-storey-id","next-storey-id",-1446152152),(id + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-storey","active-storey",15108217),id,new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.bim_editor.app.commit_BANG_(bim.add_storey(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),(2),level));
}));

document.getElementById("add-slab").addEventListener("click",(function (){
var id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var storey = bim.find_storey(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)));
var z = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(storey);
var slab = bim.slab(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),["Floor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(storey))].join(''),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(6),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6),z], null)], null),new cljs.core.Keyword(null,"thickness","thickness",-940175454),0.25], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(id + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),id], 0));

return kami.bim_editor.app.commit_BANG_(bim.add_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),slab));
}));

var seq__23107_23398 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-door",new cljs.core.Keyword(null,"door","door",-956406127)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-window",new cljs.core.Keyword(null,"window","window",724519534)], null)], null));
var chunk__23108_23399 = null;
var count__23109_23400 = (0);
var i__23110_23401 = (0);
while(true){
if((i__23110_23401 < count__23109_23400)){
var vec__23163_23402 = chunk__23108_23399.cljs$core$IIndexed$_nth$arity$2(null, i__23110_23401);
var button_id_23403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163_23402,(0),null);
var kind_23404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163_23402,(1),null);
document.getElementById(button_id_23403).addEventListener("click",((function (seq__23107_23398,chunk__23108_23399,count__23109_23400,i__23110_23401,vec__23163_23402,button_id_23403,kind_23404,canvas,drag){
return (function (){
var temp__5825__auto__ = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto__)){
var host = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(host))){
var id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var opening_id = ((10000) + id);
var width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23404,new cljs.core.Keyword(null,"door","door",-956406127)))?0.9:1.2);
var height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23404,new cljs.core.Keyword(null,"door","door",-956406127)))?2.1:1.2);
var sill = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23404,new cljs.core.Keyword(null,"door","door",-956406127)))?(0):0.9);
var length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(host,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null));
var offset = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = ((length - width) / (2));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var opening = bim.rectangular_opening(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),opening_id,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"sill","sill",-957549638),sill,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"filled-by","filled-by",447494747),id], null));
var hosted = bim.add_opening_to_wall(host,opening);
var fill = (function (){var G__23171 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"host-id","host-id",742376279),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(host),new cljs.core.Keyword(null,"opening-id","opening-id",977222774),opening_id], null);
var fexpr__23170 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23404,new cljs.core.Keyword(null,"door","door",-956406127)))?bim.door:bim.window);
return (fexpr__23170.cljs$core$IFn$_invoke$arity$1 ? fexpr__23170.cljs$core$IFn$_invoke$arity$1(G__23171) : fexpr__23170.call(null, G__23171));
})();
var storey_id = new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var p = bim.add_element(bim.update_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),storey_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(host),cljs.core.constantly(hosted)),storey_id,fill);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.update,new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),id);

return kami.bim_editor.app.commit_BANG_(p);
} else {
return null;
}
} else {
return null;
}
});})(seq__23107_23398,chunk__23108_23399,count__23109_23400,i__23110_23401,vec__23163_23402,button_id_23403,kind_23404,canvas,drag))
);


var G__23409 = seq__23107_23398;
var G__23410 = chunk__23108_23399;
var G__23411 = count__23109_23400;
var G__23412 = (i__23110_23401 + (1));
seq__23107_23398 = G__23409;
chunk__23108_23399 = G__23410;
count__23109_23400 = G__23411;
i__23110_23401 = G__23412;
continue;
} else {
var temp__5825__auto___23413 = cljs.core.seq(seq__23107_23398);
if(temp__5825__auto___23413){
var seq__23107_23414__$1 = temp__5825__auto___23413;
if(cljs.core.chunked_seq_QMARK_(seq__23107_23414__$1)){
var c__5525__auto___23415 = cljs.core.chunk_first(seq__23107_23414__$1);
var G__23416 = cljs.core.chunk_rest(seq__23107_23414__$1);
var G__23417 = c__5525__auto___23415;
var G__23418 = cljs.core.count(c__5525__auto___23415);
var G__23419 = (0);
seq__23107_23398 = G__23416;
chunk__23108_23399 = G__23417;
count__23109_23400 = G__23418;
i__23110_23401 = G__23419;
continue;
} else {
var vec__23180_23420 = cljs.core.first(seq__23107_23414__$1);
var button_id_23421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23180_23420,(0),null);
var kind_23422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23180_23420,(1),null);
document.getElementById(button_id_23421).addEventListener("click",((function (seq__23107_23398,chunk__23108_23399,count__23109_23400,i__23110_23401,vec__23180_23420,button_id_23421,kind_23422,seq__23107_23414__$1,temp__5825__auto___23413,canvas,drag){
return (function (){
var temp__5825__auto____$1 = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto____$1)){
var host = temp__5825__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(host))){
var id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var opening_id = ((10000) + id);
var width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23422,new cljs.core.Keyword(null,"door","door",-956406127)))?0.9:1.2);
var height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23422,new cljs.core.Keyword(null,"door","door",-956406127)))?2.1:1.2);
var sill = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23422,new cljs.core.Keyword(null,"door","door",-956406127)))?(0):0.9);
var length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(host,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null));
var offset = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = ((length - width) / (2));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var opening = bim.rectangular_opening(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),opening_id,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"sill","sill",-957549638),sill,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"filled-by","filled-by",447494747),id], null));
var hosted = bim.add_opening_to_wall(host,opening);
var fill = (function (){var G__23188 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"host-id","host-id",742376279),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(host),new cljs.core.Keyword(null,"opening-id","opening-id",977222774),opening_id], null);
var fexpr__23187 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_23422,new cljs.core.Keyword(null,"door","door",-956406127)))?bim.door:bim.window);
return (fexpr__23187.cljs$core$IFn$_invoke$arity$1 ? fexpr__23187.cljs$core$IFn$_invoke$arity$1(G__23188) : fexpr__23187.call(null, G__23188));
})();
var storey_id = new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var p = bim.add_element(bim.update_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),storey_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(host),cljs.core.constantly(hosted)),storey_id,fill);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.update,new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),id);

return kami.bim_editor.app.commit_BANG_(p);
} else {
return null;
}
} else {
return null;
}
});})(seq__23107_23398,chunk__23108_23399,count__23109_23400,i__23110_23401,vec__23180_23420,button_id_23421,kind_23422,seq__23107_23414__$1,temp__5825__auto___23413,canvas,drag))
);


var G__23426 = cljs.core.next(seq__23107_23414__$1);
var G__23427 = null;
var G__23428 = (0);
var G__23429 = (0);
seq__23107_23398 = G__23426;
chunk__23108_23399 = G__23427;
count__23109_23400 = G__23428;
i__23110_23401 = G__23429;
continue;
}
} else {
}
}
break;
}

document.getElementById("apply").addEventListener("click",(function (){
var temp__5825__auto__ = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var vec__23198 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"axis","axis",-1215390822)], null));
var vec__23201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23201,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23201,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23201,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198,(1),null);
var len = kami.bim_editor.app.num("length");
var updated = bim.wall(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"name","name",1843675177),document.getElementById("name").value,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + len),y,z], null),new cljs.core.Keyword(null,"height","height",1025178622),kami.bim_editor.app.num("height"),new cljs.core.Keyword(null,"thickness","thickness",-940175454),kami.bim_editor.app.num("thickness"),new cljs.core.Keyword(null,"material","material",460118677),document.getElementById("material").value], null));
return kami.bim_editor.app.commit_BANG_(bim.update_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),cljs.core.constantly(updated)));
} else {
return null;
}
}));

document.getElementById("delete").addEventListener("click",(function (){
var temp__5825__auto__ = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var p = (cljs.core.truth_((function (){var G__23218 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e);
var fexpr__23217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"door","door",-956406127),null], null), null);
return (fexpr__23217.cljs$core$IFn$_invoke$arity$1 ? fexpr__23217.cljs$core$IFn$_invoke$arity$1(G__23218) : fexpr__23217.call(null, G__23218));
})())?(function (){var vec__23220 = new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150).cljs$core$IFn$_invoke$arity$1(e);
var host_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220,(0),null);
var opening_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220,(1),null);
return bim.delete_element(bim.update_element.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),host_id,bim.remove_opening_from_wall,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opening_id], 0)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
})():bim.delete_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)));
kami.bim_editor.app.commit_BANG_(p);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__23230 = cljs.core.first(kami.bim_editor.app.elements());
if((G__23230 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__23230);
}
})());

return kami.bim_editor.app.refresh_BANG_();
} else {
return null;
}
}));

document.getElementById("undo").addEventListener("click",(function (){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var p = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"project","project",1124394579),p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.bim_editor.app.refresh_BANG_();
} else {
return null;
}
}));

document.getElementById("redo").addEventListener("click",(function (){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var p = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"project","project",1124394579),p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.pop(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.bim_editor.app.refresh_BANG_();
} else {
return null;
}
}));

canvas.addEventListener("pointerdown",(function (p1__23080_SHARP_){
return cljs.core.reset_BANG_(drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23080_SHARP_.clientX,p1__23080_SHARP_.clientY], null));
}));

window.addEventListener("pointerup",(function (){
return cljs.core.reset_BANG_(drag,null);
}));

window.addEventListener("pointermove",(function (e){
var temp__5825__auto__ = cljs.core.deref(drag);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__23260 = temp__5825__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23260,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23260,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.update,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.008 * (e.clientX - x))], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.update,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(function (v){
var x__5087__auto__ = -1.2;
var y__5088__auto__ = (function (){var x__5090__auto__ = 1.2;
var y__5091__auto__ = (v + (0.008 * (e.clientY - y)));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}));

return cljs.core.reset_BANG_(drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
} else {
return null;
}
}));

document.getElementById("save-project").addEventListener("click",kami.bim_editor.app.save_project_BANG_);

document.getElementById("load-project").addEventListener("click",kami.bim_editor.app.load_project_BANG_);

document.getElementById("import").addEventListener("click",(function (){
return document.getElementById("import-file").click();
}));

document.getElementById("import-file").addEventListener("change",kami.bim_editor.app.import_project_BANG_);

return document.getElementById("export").addEventListener("click",kami.bim_editor.app.download_project_BANG_);
});
goog.exportSymbol('kami.bim_editor.app.init_BANG_', kami.bim_editor.app.init_BANG_);

//# sourceMappingURL=kami.bim_editor.app.js.map
