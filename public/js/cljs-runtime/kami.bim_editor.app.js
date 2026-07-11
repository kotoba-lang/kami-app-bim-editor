goog.provide('kami.bim_editor.app');
kami.bim_editor.app.wall = (function kami$bim_editor$app$wall(id,a,b){
return bim.wall(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),["Wall ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"start","start",-355208981),a,new cljs.core.Keyword(null,"end","end",-268185958),b,new cljs.core.Keyword(null,"thickness","thickness",-940175454),0.25,new cljs.core.Keyword(null,"height","height",1025178622),3.2,new cljs.core.Keyword(null,"material","material",460118677),"Concrete"], null));
});
kami.bim_editor.app.initial_project = (function kami$bim_editor$app$initial_project(){
var st = bim.storey(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Ground Floor",new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(0),new cljs.core.Keyword(null,"height","height",1025178622),3.2,new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentVector.EMPTY], null));
var p = cljs.core.update.cljs$core$IFn$_invoke$arity$4(bim.project("Lodge"),new cljs.core.Keyword(null,"sites","sites",-842069881),cljs.core.conj,bim.site(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Site",new cljs.core.Keyword(null,"geo","geo",-2054400503),null,new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bim.building(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Lodge",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"reference-elevation","reference-elevation",-567054888),(0),new cljs.core.Keyword(null,"storeys","storeys",1712161297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [st], null)], null))], null)], null)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19990_SHARP_,p2__19991_SHARP_){
return bim.add_element(p1__19990_SHARP_,(3),p2__19991_SHARP_);
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19992_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19992_SHARP_));
}),kami.bim_editor.app.elements()));
});
kami.bim_editor.app.mesh = (function kami$bim_editor$app$mesh(){
return bim.merge_meshes(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(bim.element_mesh,kami.bim_editor.app.all_elements()));
});
kami.bim_editor.app.element_rows = (function kami$bim_editor$app$element_rows(){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (storey){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (element){
var q = new cljs.core.Keyword(null,"quantities","quantities",1986214024).cljs$core$IFn$_invoke$arity$1(element);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gross-area","gross-area",-552084703),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"net-volume","net-volume",-974999508),new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"gross-volume","gross-volume",2123570640),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"storey","storey",-348210183),new cljs.core.Keyword(null,"net-area","net-area",1189703709)],[new cljs.core.Keyword(null,"gross-area-m2","gross-area-m2",-673196038).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"net-volume-m3","net-volume-m3",-875804916).cljs$core$IFn$_invoke$arity$1(q),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"code","code",1586293142)], null),""),new cljs.core.Keyword(null,"gross-volume-m3","gross-volume-m3",593457476).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element),cljs.core.name(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(element)),new cljs.core.Keyword(null,"length-m","length-m",-661956059).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(storey),new cljs.core.Keyword(null,"net-area-m2","net-area-m2",-36127542).cljs$core$IFn$_invoke$arity$1(q)]);
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(storey));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.bim_editor.app.storeys()], 0));
});
kami.bim_editor.app.format_quantity = (function kami$bim_editor$app$format_quantity(value){
if(typeof value === 'number'){
return value.toFixed((3));
} else {
return "\u2014";
}
});
kami.bim_editor.app.refresh_schedule_BANG_ = (function kami$bim_editor$app$refresh_schedule_BANG_(){
var container = document.getElementById("quantity-schedule");
var rows = kami.bim_editor.app.element_rows();
(container.innerHTML = "");

var seq__19993 = cljs.core.seq(rows);
var chunk__19994 = null;
var count__19995 = (0);
var i__19996 = (0);
while(true){
if((i__19996 < count__19995)){
var row = chunk__19994.cljs$core$IIndexed$_nth$arity$2(null, i__19996);
var line_20081 = document.createElement("button");
(line_20081.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"storey","storey",-348210183).cljs$core$IFn$_invoke$arity$1(row))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(row))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))," \u00B7 L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kami.bim_editor.app.format_quantity(new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(row)))," \u00B7 A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kami.bim_editor.app.format_quantity(new cljs.core.Keyword(null,"net-area","net-area",1189703709).cljs$core$IFn$_invoke$arity$1(row)))," \u00B7 V ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kami.bim_editor.app.format_quantity(new cljs.core.Keyword(null,"net-volume","net-volume",-974999508).cljs$core$IFn$_invoke$arity$1(row)))].join(''));

line_20081.addEventListener("click",((function (seq__19993,chunk__19994,count__19995,i__19996,line_20081,row,container,rows){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__19993,chunk__19994,count__19995,i__19996,line_20081,row,container,rows){
return (function (s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"storey","storey",-348210183).cljs$core$IFn$_invoke$arity$1(row));
});})(seq__19993,chunk__19994,count__19995,i__19996,line_20081,row,container,rows))
,kami.bim_editor.app.storeys()))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], 0));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__19993,chunk__19994,count__19995,i__19996,line_20081,row,container,rows))
);

container.appendChild(line_20081);


var G__20082 = seq__19993;
var G__20083 = chunk__19994;
var G__20084 = count__19995;
var G__20085 = (i__19996 + (1));
seq__19993 = G__20082;
chunk__19994 = G__20083;
count__19995 = G__20084;
i__19996 = G__20085;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__19993);
if(temp__5825__auto__){
var seq__19993__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19993__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19993__$1);
var G__20086 = cljs.core.chunk_rest(seq__19993__$1);
var G__20087 = c__5525__auto__;
var G__20088 = cljs.core.count(c__5525__auto__);
var G__20089 = (0);
seq__19993 = G__20086;
chunk__19994 = G__20087;
count__19995 = G__20088;
i__19996 = G__20089;
continue;
} else {
var row = cljs.core.first(seq__19993__$1);
var line_20090 = document.createElement("button");
(line_20090.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"storey","storey",-348210183).cljs$core$IFn$_invoke$arity$1(row))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(row))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row))," \u00B7 L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kami.bim_editor.app.format_quantity(new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(row)))," \u00B7 A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kami.bim_editor.app.format_quantity(new cljs.core.Keyword(null,"net-area","net-area",1189703709).cljs$core$IFn$_invoke$arity$1(row)))," \u00B7 V ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kami.bim_editor.app.format_quantity(new cljs.core.Keyword(null,"net-volume","net-volume",-974999508).cljs$core$IFn$_invoke$arity$1(row)))].join(''));

line_20090.addEventListener("click",((function (seq__19993,chunk__19994,count__19995,i__19996,line_20090,row,seq__19993__$1,temp__5825__auto__,container,rows){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__19993,chunk__19994,count__19995,i__19996,line_20090,row,seq__19993__$1,temp__5825__auto__,container,rows){
return (function (s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"storey","storey",-348210183).cljs$core$IFn$_invoke$arity$1(row));
});})(seq__19993,chunk__19994,count__19995,i__19996,line_20090,row,seq__19993__$1,temp__5825__auto__,container,rows))
,kami.bim_editor.app.storeys()))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], 0));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__19993,chunk__19994,count__19995,i__19996,line_20090,row,seq__19993__$1,temp__5825__auto__,container,rows))
);

container.appendChild(line_20090);


var G__20091 = cljs.core.next(seq__19993__$1);
var G__20092 = null;
var G__20093 = (0);
var G__20094 = (0);
seq__19993 = G__20091;
chunk__19994 = G__20092;
count__19995 = G__20093;
i__19996 = G__20094;
continue;
}
} else {
return null;
}
}
break;
}
});
kami.bim_editor.app.csv_cell = (function kami$bim_editor$app$csv_cell(value){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = value;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()).replaceAll("\"","\"\"")),"\""].join('');
});
kami.bim_editor.app.schedule_csv = (function kami$bim_editor$app$schedule_csv(){
var columns = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storey","storey",-348210183),"Storey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),"Kind"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classification","classification",150369615),"Classification"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"length","length",588987862),"Length m"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gross-area","gross-area",-552084703),"Gross area m2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-area","net-area",1189703709),"Net area m2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gross-volume","gross-volume",2123570640),"Gross volume m3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-volume","net-volume",-974999508),"Net volume m3"], null)], null);
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(kami.bim_editor.app.csv_cell,cljs.core.second),columns)),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19997_SHARP_){
return kami.bim_editor.app.csv_cell(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,cljs.core.first(p1__19997_SHARP_)));
}),columns));
}),kami.bim_editor.app.element_rows()))].join('');
});
kami.bim_editor.app.download_schedule_BANG_ = (function kami$bim_editor$app$download_schedule_BANG_(){
var a = document.createElement("a");
var url = URL.createObjectURL((new Blob([kami.bim_editor.app.schedule_csv()],({"type": "text/csv;charset=utf-8"}))));
(a.href = url);

(a.download = "bim-quantity-schedule.csv");

a.click();

return setTimeout((function (){
return URL.revokeObjectURL(url);
}),(0));
});
kami.bim_editor.app.refresh_BANG_ = (function kami$bim_editor$app$refresh_BANG_(){
var temp__5825__auto___20095 = cljs.core.deref(kami.bim_editor.app.viewport);
if(cljs.core.truth_(temp__5825__auto___20095)){
var v_20096 = temp__5825__auto___20095;
var m_20097 = kami.bim_editor.app.mesh();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.viewport,cljs.core.assoc,new cljs.core.Keyword(null,"buffers","buffers",471409492),kami.webgpu.mesh.upload_mesh_BANG_(new cljs.core.Keyword(null,"mesh-context","mesh-context",832369712).cljs$core$IFn$_invoke$arity$1(v_20096),m_20097));

(document.getElementById("stats").textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kami.bim_editor.app.storeys()))," storeys \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kami.bim_editor.app.all_elements()))," elements \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(m_20097)) / (3)))," triangles"].join(''));

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"slabCount","slabCount",-940768725),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"wallCount","wallCount",1835556237),new cljs.core.Keyword(null,"grossVolume","grossVolume",-49747185),new cljs.core.Keyword(null,"storeyCount","storeyCount",1208830064),new cljs.core.Keyword(null,"openingCount","openingCount",235745848),new cljs.core.Keyword(null,"scheduleRows","scheduleRows",882638969),new cljs.core.Keyword(null,"shortcutBuffer","shortcutBuffer",1317694555),new cljs.core.Keyword(null,"elementCount","elementCount",952977148),new cljs.core.Keyword(null,"activeStorey","activeStorey",-634717315),new cljs.core.Keyword(null,"profile","profile",-545963874)],[kami.bim_editor.project.current_version,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"revision","revision",-1350113114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19999_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slab","slab",-565094848),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__19999_SHARP_));
}),kami.bim_editor.app.all_elements())),cljs.core.name(new cljs.core.Keyword(null,"save-status","save-status",-2046612873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state))),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19998_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__19998_SHARP_));
}),kami.bim_editor.app.all_elements())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__20002_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__20002_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"gross-volume-m3","gross-volume-m3",593457476)], null));
}),kami.bim_editor.app.all_elements())),cljs.core.count(kami.bim_editor.app.storeys()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20000_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(p1__20000_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20001_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__20001_SHARP_));
}),kami.bim_editor.app.all_elements()))),cljs.core.count(kami.bim_editor.app.element_rows()),new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),cljs.core.count(kami.bim_editor.app.all_elements()),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))]))));
} else {
}

var levels_20098 = document.getElementById("levels");
(levels_20098.innerHTML = "");

var seq__20003_20099 = cljs.core.seq(kami.bim_editor.app.storeys());
var chunk__20004_20100 = null;
var count__20005_20101 = (0);
var i__20006_20102 = (0);
while(true){
if((i__20006_20102 < count__20005_20101)){
var storey_20103 = chunk__20004_20100.cljs$core$IIndexed$_nth$arity$2(null, i__20006_20102);
var b_20104 = document.createElement("button");
(b_20104.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(storey_20103))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(storey_20103).toFixed((2)))," m"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_20103),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_20104.classList.add("selected");
} else {
}

b_20104.addEventListener("click",((function (seq__20003_20099,chunk__20004_20100,count__20005_20101,i__20006_20102,b_20104,storey_20103,levels_20098){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_20103),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__20009 = cljs.core.first(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(storey_20103));
if((G__20009 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__20009);
}
})()], 0));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__20003_20099,chunk__20004_20100,count__20005_20101,i__20006_20102,b_20104,storey_20103,levels_20098))
);

levels_20098.appendChild(b_20104);


var G__20105 = seq__20003_20099;
var G__20106 = chunk__20004_20100;
var G__20107 = count__20005_20101;
var G__20108 = (i__20006_20102 + (1));
seq__20003_20099 = G__20105;
chunk__20004_20100 = G__20106;
count__20005_20101 = G__20107;
i__20006_20102 = G__20108;
continue;
} else {
var temp__5825__auto___20109 = cljs.core.seq(seq__20003_20099);
if(temp__5825__auto___20109){
var seq__20003_20110__$1 = temp__5825__auto___20109;
if(cljs.core.chunked_seq_QMARK_(seq__20003_20110__$1)){
var c__5525__auto___20111 = cljs.core.chunk_first(seq__20003_20110__$1);
var G__20112 = cljs.core.chunk_rest(seq__20003_20110__$1);
var G__20113 = c__5525__auto___20111;
var G__20114 = cljs.core.count(c__5525__auto___20111);
var G__20115 = (0);
seq__20003_20099 = G__20112;
chunk__20004_20100 = G__20113;
count__20005_20101 = G__20114;
i__20006_20102 = G__20115;
continue;
} else {
var storey_20116 = cljs.core.first(seq__20003_20110__$1);
var b_20117 = document.createElement("button");
(b_20117.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(storey_20116))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(storey_20116).toFixed((2)))," m"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_20116),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_20117.classList.add("selected");
} else {
}

b_20117.addEventListener("click",((function (seq__20003_20099,chunk__20004_20100,count__20005_20101,i__20006_20102,b_20117,storey_20116,seq__20003_20110__$1,temp__5825__auto___20109,levels_20098){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-storey","active-storey",15108217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(storey_20116),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__20010 = cljs.core.first(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(storey_20116));
if((G__20010 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__20010);
}
})()], 0));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__20003_20099,chunk__20004_20100,count__20005_20101,i__20006_20102,b_20117,storey_20116,seq__20003_20110__$1,temp__5825__auto___20109,levels_20098))
);

levels_20098.appendChild(b_20117);


var G__20118 = cljs.core.next(seq__20003_20110__$1);
var G__20119 = null;
var G__20120 = (0);
var G__20121 = (0);
seq__20003_20099 = G__20118;
chunk__20004_20100 = G__20119;
count__20005_20101 = G__20120;
i__20006_20102 = G__20121;
continue;
}
} else {
}
}
break;
}

var tree_20122 = document.getElementById("tree");
(tree_20122.innerHTML = "");

var seq__20011_20123 = cljs.core.seq(kami.bim_editor.app.elements());
var chunk__20012_20124 = null;
var count__20013_20125 = (0);
var i__20014_20126 = (0);
while(true){
if((i__20014_20126 < count__20013_20125)){
var e_20127 = chunk__20012_20124.cljs$core$IIndexed$_nth$arity$2(null, i__20014_20126);
var b_20128 = document.createElement("button");
var icon_20129 = (function (){var G__20022 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e_20127);
var G__20023 = "\u25C7";
var fexpr__20021 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wall","wall",-787661558),"\u25B1",new cljs.core.Keyword(null,"door","door",-956406127),"\u25AF",new cljs.core.Keyword(null,"window","window",724519534),"\u25A6"], null);
return (fexpr__20021.cljs$core$IFn$_invoke$arity$2 ? fexpr__20021.cljs$core$IFn$_invoke$arity$2(G__20022,G__20023) : fexpr__20021.call(null, G__20022,G__20023));
})();
(b_20128.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_20129)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e_20127))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_20127),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_20128.classList.add("selected");
} else {
}

b_20128.addEventListener("click",((function (seq__20011_20123,chunk__20012_20124,count__20013_20125,i__20014_20126,b_20128,icon_20129,e_20127,tree_20122){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_20127));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__20011_20123,chunk__20012_20124,count__20013_20125,i__20014_20126,b_20128,icon_20129,e_20127,tree_20122))
);

tree_20122.appendChild(b_20128);


var G__20130 = seq__20011_20123;
var G__20131 = chunk__20012_20124;
var G__20132 = count__20013_20125;
var G__20133 = (i__20014_20126 + (1));
seq__20011_20123 = G__20130;
chunk__20012_20124 = G__20131;
count__20013_20125 = G__20132;
i__20014_20126 = G__20133;
continue;
} else {
var temp__5825__auto___20134 = cljs.core.seq(seq__20011_20123);
if(temp__5825__auto___20134){
var seq__20011_20135__$1 = temp__5825__auto___20134;
if(cljs.core.chunked_seq_QMARK_(seq__20011_20135__$1)){
var c__5525__auto___20136 = cljs.core.chunk_first(seq__20011_20135__$1);
var G__20137 = cljs.core.chunk_rest(seq__20011_20135__$1);
var G__20138 = c__5525__auto___20136;
var G__20139 = cljs.core.count(c__5525__auto___20136);
var G__20140 = (0);
seq__20011_20123 = G__20137;
chunk__20012_20124 = G__20138;
count__20013_20125 = G__20139;
i__20014_20126 = G__20140;
continue;
} else {
var e_20141 = cljs.core.first(seq__20011_20135__$1);
var b_20142 = document.createElement("button");
var icon_20143 = (function (){var G__20025 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e_20141);
var G__20026 = "\u25C7";
var fexpr__20024 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wall","wall",-787661558),"\u25B1",new cljs.core.Keyword(null,"door","door",-956406127),"\u25AF",new cljs.core.Keyword(null,"window","window",724519534),"\u25A6"], null);
return (fexpr__20024.cljs$core$IFn$_invoke$arity$2 ? fexpr__20024.cljs$core$IFn$_invoke$arity$2(G__20025,G__20026) : fexpr__20024.call(null, G__20025,G__20026));
})();
(b_20142.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_20143)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e_20141))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_20141),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)))){
b_20142.classList.add("selected");
} else {
}

b_20142.addEventListener("click",((function (seq__20011_20123,chunk__20012_20124,count__20013_20125,i__20014_20126,b_20142,icon_20143,e_20141,seq__20011_20135__$1,temp__5825__auto___20134,tree_20122){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e_20141));

return (kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.bim_editor.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.bim_editor.app.refresh_BANG_.call(null, ));
});})(seq__20011_20123,chunk__20012_20124,count__20013_20125,i__20014_20126,b_20142,icon_20143,e_20141,seq__20011_20135__$1,temp__5825__auto___20134,tree_20122))
);

tree_20122.appendChild(b_20142);


var G__20144 = cljs.core.next(seq__20011_20135__$1);
var G__20145 = null;
var G__20146 = (0);
var G__20147 = (0);
seq__20011_20123 = G__20144;
chunk__20012_20124 = G__20145;
count__20013_20125 = G__20146;
i__20014_20126 = G__20147;
continue;
}
} else {
}
}
break;
}

kami.bim_editor.app.refresh_schedule_BANG_();

var temp__5825__auto__ = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var wall_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e));
(document.getElementById("inspector-title").textContent = ["Selected ",cljs.core.name(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e))].join(''));

(document.getElementById("name").value = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e));

(document.getElementById("apply").disabled = (!(wall_QMARK_)));

var seq__20027_20148 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["length","height","thickness","material"], null));
var chunk__20028_20149 = null;
var count__20029_20150 = (0);
var i__20030_20151 = (0);
while(true){
if((i__20030_20151 < count__20029_20150)){
var id_20152 = chunk__20028_20149.cljs$core$IIndexed$_nth$arity$2(null, i__20030_20151);
(document.getElementById(id_20152).disabled = (!(wall_QMARK_)));


var G__20153 = seq__20027_20148;
var G__20154 = chunk__20028_20149;
var G__20155 = count__20029_20150;
var G__20156 = (i__20030_20151 + (1));
seq__20027_20148 = G__20153;
chunk__20028_20149 = G__20154;
count__20029_20150 = G__20155;
i__20030_20151 = G__20156;
continue;
} else {
var temp__5825__auto___20157__$1 = cljs.core.seq(seq__20027_20148);
if(temp__5825__auto___20157__$1){
var seq__20027_20158__$1 = temp__5825__auto___20157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20027_20158__$1)){
var c__5525__auto___20159 = cljs.core.chunk_first(seq__20027_20158__$1);
var G__20160 = cljs.core.chunk_rest(seq__20027_20158__$1);
var G__20161 = c__5525__auto___20159;
var G__20162 = cljs.core.count(c__5525__auto___20159);
var G__20163 = (0);
seq__20027_20148 = G__20160;
chunk__20028_20149 = G__20161;
count__20029_20150 = G__20162;
i__20030_20151 = G__20163;
continue;
} else {
var id_20164 = cljs.core.first(seq__20027_20158__$1);
(document.getElementById(id_20164).disabled = (!(wall_QMARK_)));


var G__20165 = cljs.core.next(seq__20027_20158__$1);
var G__20166 = null;
var G__20167 = (0);
var G__20168 = (0);
seq__20027_20148 = G__20165;
chunk__20028_20149 = G__20166;
count__20029_20150 = G__20167;
i__20030_20151 = G__20168;
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
var temp__5825__auto___20169 = cljs.core.deref(kami.bim_editor.app.viewport);
if(cljs.core.truth_(temp__5825__auto___20169)){
var map__20031_20170 = temp__5825__auto___20169;
var map__20031_20171__$1 = cljs.core.__destructure_map(map__20031_20170);
var v_20172 = map__20031_20171__$1;
var buffers_20173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20031_20171__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
if(cljs.core.truth_(buffers_20173)){
var map__20032_20174 = cljs.core.deref(kami.bim_editor.app.state);
var map__20032_20175__$1 = cljs.core.__destructure_map(map__20032_20174);
var azimuth_20176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20032_20175__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var elevation_20177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20032_20175__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var d_20178 = (14);
var eye_20179 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((4) + ((d_20178 * Math.cos(elevation_20177)) * Math.cos(azimuth_20176))),((3) + (d_20178 * Math.sin(elevation_20177))),((3) + ((d_20178 * Math.cos(elevation_20177)) * Math.sin(azimuth_20176)))], null);
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$5(v_20172,buffers_20173,eye_20179,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),1.5,(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.55,0.7,0.95], null));
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
var tag = (function (){var G__20033 = target;
var G__20033__$1 = (((G__20033 == null))?null:G__20033.tagName);
if((G__20033__$1 == null)){
return null;
} else {
return G__20033__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__20034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__20034.cljs$core$IFn$_invoke$arity$1 ? fexpr__20034.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20034.call(null, tag));
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
var map__20035 = cljs.core.deref(kami.bim_editor.app.state);
var map__20035__$1 = cljs.core.__destructure_map(map__20035);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var active_storey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"active-storey","active-storey",15108217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var azimuth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
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
}catch (e20036){var _ = e20036;
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
return file.text().then((function (p1__20037_SHARP_){
return kami.bim_editor.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__20037_SHARP_));
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
var prefix_QMARK_ = cljs.core.some((function (p1__20038_SHARP_){
return p1__20038_SHARP_.startsWith(buffer);
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

document.getElementById("profile").addEventListener("change",(function (p1__20039_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20039_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),""], 0));

(document.getElementById("profile-hint").textContent = (function (){var G__20041 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var G__20041__$1 = (((G__20041 instanceof cljs.core.Keyword))?G__20041.fqn:null);
switch (G__20041__$1) {
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

var seq__20042_20181 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-door",new cljs.core.Keyword(null,"door","door",-956406127)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-window",new cljs.core.Keyword(null,"window","window",724519534)], null)], null));
var chunk__20043_20182 = null;
var count__20044_20183 = (0);
var i__20045_20184 = (0);
while(true){
if((i__20045_20184 < count__20044_20183)){
var vec__20056_20185 = chunk__20043_20182.cljs$core$IIndexed$_nth$arity$2(null, i__20045_20184);
var button_id_20186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20056_20185,(0),null);
var kind_20187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20056_20185,(1),null);
document.getElementById(button_id_20186).addEventListener("click",((function (seq__20042_20181,chunk__20043_20182,count__20044_20183,i__20045_20184,vec__20056_20185,button_id_20186,kind_20187,canvas,drag){
return (function (){
var temp__5825__auto__ = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto__)){
var host = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(host))){
var id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var opening_id = ((10000) + id);
var width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20187,new cljs.core.Keyword(null,"door","door",-956406127)))?0.9:1.2);
var height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20187,new cljs.core.Keyword(null,"door","door",-956406127)))?2.1:1.2);
var sill = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20187,new cljs.core.Keyword(null,"door","door",-956406127)))?(0):0.9);
var length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(host,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null));
var offset = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = ((length - width) / (2));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var opening = bim.rectangular_opening(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),opening_id,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"sill","sill",-957549638),sill,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"filled-by","filled-by",447494747),id], null));
var hosted = bim.add_opening_to_wall(host,opening);
var fill = (function (){var G__20060 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"host-id","host-id",742376279),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(host),new cljs.core.Keyword(null,"opening-id","opening-id",977222774),opening_id], null);
var fexpr__20059 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20187,new cljs.core.Keyword(null,"door","door",-956406127)))?bim.door:bim.window);
return (fexpr__20059.cljs$core$IFn$_invoke$arity$1 ? fexpr__20059.cljs$core$IFn$_invoke$arity$1(G__20060) : fexpr__20059.call(null, G__20060));
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
});})(seq__20042_20181,chunk__20043_20182,count__20044_20183,i__20045_20184,vec__20056_20185,button_id_20186,kind_20187,canvas,drag))
);


var G__20188 = seq__20042_20181;
var G__20189 = chunk__20043_20182;
var G__20190 = count__20044_20183;
var G__20191 = (i__20045_20184 + (1));
seq__20042_20181 = G__20188;
chunk__20043_20182 = G__20189;
count__20044_20183 = G__20190;
i__20045_20184 = G__20191;
continue;
} else {
var temp__5825__auto___20192 = cljs.core.seq(seq__20042_20181);
if(temp__5825__auto___20192){
var seq__20042_20193__$1 = temp__5825__auto___20192;
if(cljs.core.chunked_seq_QMARK_(seq__20042_20193__$1)){
var c__5525__auto___20194 = cljs.core.chunk_first(seq__20042_20193__$1);
var G__20195 = cljs.core.chunk_rest(seq__20042_20193__$1);
var G__20196 = c__5525__auto___20194;
var G__20197 = cljs.core.count(c__5525__auto___20194);
var G__20198 = (0);
seq__20042_20181 = G__20195;
chunk__20043_20182 = G__20196;
count__20044_20183 = G__20197;
i__20045_20184 = G__20198;
continue;
} else {
var vec__20061_20199 = cljs.core.first(seq__20042_20193__$1);
var button_id_20200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061_20199,(0),null);
var kind_20201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061_20199,(1),null);
document.getElementById(button_id_20200).addEventListener("click",((function (seq__20042_20181,chunk__20043_20182,count__20044_20183,i__20045_20184,vec__20061_20199,button_id_20200,kind_20201,seq__20042_20193__$1,temp__5825__auto___20192,canvas,drag){
return (function (){
var temp__5825__auto____$1 = kami.bim_editor.app.selected();
if(cljs.core.truth_(temp__5825__auto____$1)){
var host = temp__5825__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(host))){
var id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state));
var opening_id = ((10000) + id);
var width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20201,new cljs.core.Keyword(null,"door","door",-956406127)))?0.9:1.2);
var height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20201,new cljs.core.Keyword(null,"door","door",-956406127)))?2.1:1.2);
var sill = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20201,new cljs.core.Keyword(null,"door","door",-956406127)))?(0):0.9);
var length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(host,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null));
var offset = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = ((length - width) / (2));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var opening = bim.rectangular_opening(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),opening_id,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"sill","sill",-957549638),sill,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"filled-by","filled-by",447494747),id], null));
var hosted = bim.add_opening_to_wall(host,opening);
var fill = (function (){var G__20065 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"host-id","host-id",742376279),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(host),new cljs.core.Keyword(null,"opening-id","opening-id",977222774),opening_id], null);
var fexpr__20064 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_20201,new cljs.core.Keyword(null,"door","door",-956406127)))?bim.door:bim.window);
return (fexpr__20064.cljs$core$IFn$_invoke$arity$1 ? fexpr__20064.cljs$core$IFn$_invoke$arity$1(G__20065) : fexpr__20064.call(null, G__20065));
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
});})(seq__20042_20181,chunk__20043_20182,count__20044_20183,i__20045_20184,vec__20061_20199,button_id_20200,kind_20201,seq__20042_20193__$1,temp__5825__auto___20192,canvas,drag))
);


var G__20202 = cljs.core.next(seq__20042_20193__$1);
var G__20203 = null;
var G__20204 = (0);
var G__20205 = (0);
seq__20042_20181 = G__20202;
chunk__20043_20182 = G__20203;
count__20044_20183 = G__20204;
i__20045_20184 = G__20205;
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
var vec__20066 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"axis","axis",-1215390822)], null));
var vec__20069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20069,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20069,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20069,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(1),null);
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
var p = (cljs.core.truth_((function (){var G__20073 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(e);
var fexpr__20072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"door","door",-956406127),null], null), null);
return (fexpr__20072.cljs$core$IFn$_invoke$arity$1 ? fexpr__20072.cljs$core$IFn$_invoke$arity$1(G__20073) : fexpr__20072.call(null, G__20073));
})())?(function (){var vec__20074 = new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150).cljs$core$IFn$_invoke$arity$1(e);
var host_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20074,(0),null);
var opening_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20074,(1),null);
return bim.delete_element(bim.update_element.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),host_id,bim.remove_opening_from_wall,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opening_id], 0)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
})():bim.delete_element(new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"active-storey","active-storey",15108217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.bim_editor.app.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)));
kami.bim_editor.app.commit_BANG_(p);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.bim_editor.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__20077 = cljs.core.first(kami.bim_editor.app.elements());
if((G__20077 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__20077);
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

canvas.addEventListener("pointerdown",(function (p1__20040_SHARP_){
return cljs.core.reset_BANG_(drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20040_SHARP_.clientX,p1__20040_SHARP_.clientY], null));
}));

window.addEventListener("pointerup",(function (){
return cljs.core.reset_BANG_(drag,null);
}));

window.addEventListener("pointermove",(function (e){
var temp__5825__auto__ = cljs.core.deref(drag);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__20078 = temp__5825__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(1),null);
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

document.getElementById("export-schedule").addEventListener("click",kami.bim_editor.app.download_schedule_BANG_);

return document.getElementById("export").addEventListener("click",kami.bim_editor.app.download_project_BANG_);
});
goog.exportSymbol('kami.bim_editor.app.init_BANG_', kami.bim_editor.app.init_BANG_);

//# sourceMappingURL=kami.bim_editor.app.js.map
