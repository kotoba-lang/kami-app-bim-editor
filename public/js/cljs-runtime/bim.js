goog.provide('bim');
bim.space_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"residential","residential",-1525842688),null,new cljs.core.Keyword(null,"service","service",-1963054559),null,new cljs.core.Keyword(null,"circulation","circulation",247704579),null,new cljs.core.Keyword(null,"mechanical-room","mechanical-room",1730885767),null,new cljs.core.Keyword(null,"other","other",995793544),null,new cljs.core.Keyword(null,"external","external",-1833995989),null,new cljs.core.Keyword(null,"outdoor-covered","outdoor-covered",932409713),null,new cljs.core.Keyword(null,"office","office",-733494767),null], null), null);
bim.unit_system = (function bim$unit_system(var_args){
var G__21628 = arguments.length;
switch (G__21628) {
case 0:
return bim.unit_system.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bim.unit_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bim.unit_system.cljs$core$IFn$_invoke$arity$0 = (function (){
return bim.unit_system.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(bim.unit_system.cljs$core$IFn$_invoke$arity$1 = (function (p__21642){
var map__21643 = p__21642;
var map__21643__$1 = cljs.core.__destructure_map(map__21643);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21643__$1,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"metre","metre",1661912576));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21643__$1,new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"radian","radian",-1613634577));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21643__$1,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"second","second",-444702010));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),length,new cljs.core.Keyword(null,"angle","angle",1622094254),angle,new cljs.core.Keyword(null,"time","time",1385887882),time], null);
}));

(bim.unit_system.cljs$lang$maxFixedArity = 1);

/**
 * A fresh, empty BIM project.
 */
bim.project = (function bim$project(name){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"units","units",-533089095),bim.unit_system.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"world-origin","world-origin",271657127),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null),new cljs.core.Keyword(null,"true-north-rad","true-north-rad",-1110825765),0.0,new cljs.core.Keyword(null,"sites","sites",-842069881),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"psets","psets",1137235995),cljs.core.PersistentArrayMap.EMPTY], null);
});
bim.geo_ref = (function bim$geo_ref(latitude_deg,longitude_deg,elevation_m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"latitude-deg","latitude-deg",-888268241),latitude_deg,new cljs.core.Keyword(null,"longitude-deg","longitude-deg",1147979683),longitude_deg,new cljs.core.Keyword(null,"elevation-m","elevation-m",1300014807),elevation_m], null);
});
bim.site = (function bim$site(p__21646){
var map__21647 = p__21646;
var map__21647__$1 = cljs.core.__destructure_map(map__21647);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var geo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,new cljs.core.Keyword(null,"geo","geo",-2054400503));
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var buildings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,new cljs.core.Keyword(null,"buildings","buildings",-308691065));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"geo","geo",-2054400503),geo,new cljs.core.Keyword(null,"placement","placement",768366651),placement,new cljs.core.Keyword(null,"buildings","buildings",-308691065),cljs.core.vec(buildings)], null);
});
bim.building = (function bim$building(p__21648){
var map__21649 = p__21648;
var map__21649__$1 = cljs.core.__destructure_map(map__21649);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var reference_elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"reference-elevation","reference-elevation",-567054888));
var storeys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"storeys","storeys",1712161297));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"placement","placement",768366651),placement,new cljs.core.Keyword(null,"reference-elevation","reference-elevation",-567054888),reference_elevation,new cljs.core.Keyword(null,"storeys","storeys",1712161297),cljs.core.vec(storeys)], null);
});
bim.storey = (function bim$storey(p__21650){
var map__21651 = p__21650;
var map__21651__$1 = cljs.core.__destructure_map(map__21651);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var spaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"spaces","spaces",365984563));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placement","placement",768366651),placement,new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.vec(spaces),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.vec(elements)], null);
});
bim.space = (function bim$space(p__21652){
var map__21653 = p__21652;
var map__21653__$1 = cljs.core.__destructure_map(map__21653);
var psets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"psets","psets",1137235995));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var quantities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"quantities","quantities",1986214024));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var boundary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"boundary","boundary",-2000996754));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var long_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"long-name","long-name",184126232));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"long-name","long-name",184126232),new cljs.core.Keyword(null,"psets","psets",1137235995),new cljs.core.Keyword(null,"height","height",1025178622)],[category,quantities,name,boundary,label,id,long_name,(function (){var or__5002__auto__ = psets;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),height]);
});
bim.element_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"slab","slab",-565094848),null,new cljs.core.Keyword(null,"furniture","furniture",1232678627),null,new cljs.core.Keyword(null,"other","other",995793544),null,new cljs.core.Keyword(null,"wall","wall",-787661558),null,new cljs.core.Keyword(null,"opening","opening",450993708),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"door","door",-956406127),null,new cljs.core.Keyword(null,"mep-segment","mep-segment",690938545),null,new cljs.core.Keyword(null,"stair","stair",-820120046),null,new cljs.core.Keyword(null,"railing","railing",1834177812),null,new cljs.core.Keyword(null,"roof","roof",222360918),null,new cljs.core.Keyword(null,"beam","beam",-1611040870),null,new cljs.core.Keyword(null,"curtain","curtain",243029789),null], null), null);
bim.sqrt = (function bim$sqrt(x){
return Math.sqrt(x);
});
bim.element = (function bim$element(p__21658){
var map__21659 = p__21658;
var map__21659__$1 = cljs.core.__destructure_map(map__21659);
var openings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"openings","openings",801340570));
var psets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"psets","psets",1137235995));
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var global_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"global-id","global-id",-2019114757));
var quantities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"quantities","quantities",1986214024));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var geometry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var classification = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"classification","classification",150369615));
var material_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"material-layers","material-layers",1790764786));
var connected_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),new cljs.core.Keyword(null,"material-layers","material-layers",1790764786),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.Keyword(null,"psets","psets",1137235995),new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"global-id","global-id",-2019114757)],[(function (){var or__5002__auto__ = quantities;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),name,geometry,classification,cljs.core.vec(connected_to),cljs.core.vec(material_layers),id,kind,cljs.core.vec(openings),(function (){var or__5002__auto__ = psets;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),placement,global_id]);
});
bim.brep_geometry = (function bim$brep_geometry(brep_solid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"brep","brep",240255791),new cljs.core.Keyword(null,"solid","solid",-2023773691),brep_solid], null);
});
bim.axis_sweep_geometry = (function bim$axis_sweep_geometry(axis,profile){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"axis-sweep","axis-sweep",713486921),new cljs.core.Keyword(null,"axis","axis",-1215390822),axis,new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null);
});
bim.mesh_ref_geometry = (function bim$mesh_ref_geometry(blob_key,triangle_count){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"mesh-ref","mesh-ref",2126657601),new cljs.core.Keyword(null,"blob-key","blob-key",-776092820),blob_key,new cljs.core.Keyword(null,"triangle-count","triangle-count",1058921859),triangle_count], null);
});
bim.no_geometry = (function bim$no_geometry(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"none","none",1333468478)], null);
});
bim.rectangle_profile = (function bim$rectangle_profile(thickness,height){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"thickness","thickness",-940175454),thickness,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
});
bim.circle_profile = (function bim$circle_profile(diameter){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"diameter","diameter",1560913323),diameter], null);
});
bim.i_shape_profile = (function bim$i_shape_profile(height,flange_width,flange_thickness,web_thickness){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"i-shape","i-shape",1507659000),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"flange-width","flange-width",-164684829),flange_width,new cljs.core.Keyword(null,"flange-thickness","flange-thickness",-2106414413),flange_thickness,new cljs.core.Keyword(null,"web-thickness","web-thickness",-439875607),web_thickness], null);
});
bim.polygon_profile = (function bim$polygon_profile(points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"points","points",-1486596883),points], null);
});
bim.opening = (function bim$opening(p__21661){
var map__21662 = p__21661;
var map__21662__$1 = cljs.core.__destructure_map(map__21662);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var filled_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword(null,"filled-by","filled-by",447494747));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"placement","placement",768366651),placement,new cljs.core.Keyword(null,"profile","profile",-545963874),profile,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"filled-by","filled-by",447494747),filled_by], null);
});
bim.rectangular_opening = (function bim$rectangular_opening(p__21663){
var map__21664 = p__21663;
var map__21664__$1 = cljs.core.__destructure_map(map__21664);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var sill = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21664__$1,new cljs.core.Keyword(null,"sill","sill",-957549638),0.0);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21664__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),0.3);
var filled_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"filled-by","filled-by",447494747));
if((((offset < (0))) || ((((sill < (0))) || ((((!((width > (0))))) || ((!((height > (0))))))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("opening dimensions and placement are invalid",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"sill","sill",-957549638),sill,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
} else {
}

return bim.opening(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"sill","sill",-957549638),sill], null),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"filled-by","filled-by",447494747),filled_by], null));
});





bim.door = (function bim$door(p__21669){
var map__21670 = p__21669;
var map__21670__$1 = cljs.core.__destructure_map(map__21670);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21670__$1,new cljs.core.Keyword(null,"name","name",1843675177),"Door");
var host_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,new cljs.core.Keyword(null,"host-id","host-id",742376279));
var opening_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,new cljs.core.Keyword(null,"opening-id","opening-id",977222774));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21670__$1,new cljs.core.Keyword(null,"width","width",-384071477),0.9);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21670__$1,new cljs.core.Keyword(null,"height","height",1025178622),2.1);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21670__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"single-swing-left","single-swing-left",-1509312029));
return bim.element(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.Keyword(null,"psets","psets",1137235995),new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"global-id","global-id",-2019114757)],[(function (){var G__21671 = cljs.core.PersistentArrayMap.EMPTY;
return (bim.quantities.cljs$core$IFn$_invoke$arity$1 ? bim.quantities.cljs$core$IFn$_invoke$arity$1(G__21671) : bim.quantities.call(null, G__21671));
})(),name,bim.no_geometry(),(bim.classification_ref.cljs$core$IFn$_invoke$arity$3 ? bim.classification_ref.cljs$core$IFn$_invoke$arity$3("Uniclass","Pr_30_59_24","Doors") : bim.classification_ref.call(null, "Uniclass","Pr_30_59_24","Doors")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [host_id,opening_id], null),id,new cljs.core.Keyword(null,"door","door",-956406127),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, ["Pset_DoorCommon",(function (){var G__21675 = "Pset_DoorCommon";
var G__21676 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"OperationType","OperationType",-1997710148),(function (){var G__21677 = operation;
var G__21678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"single-swing-left","single-swing-left",-1509312029),null,new cljs.core.Keyword(null,"double-swing","double-swing",2124001648),null,new cljs.core.Keyword(null,"single-swing-right","single-swing-right",26368217),null], null), null);
return (bim.enum_value.cljs$core$IFn$_invoke$arity$2 ? bim.enum_value.cljs$core$IFn$_invoke$arity$2(G__21677,G__21678) : bim.enum_value.call(null, G__21677,G__21678));
})(),new cljs.core.Keyword(null,"OverallWidth","OverallWidth",-2056644232),(bim.measured_value.cljs$core$IFn$_invoke$arity$2 ? bim.measured_value.cljs$core$IFn$_invoke$arity$2(width,new cljs.core.Keyword(null,"metre","metre",1661912576)) : bim.measured_value.call(null, width,new cljs.core.Keyword(null,"metre","metre",1661912576))),new cljs.core.Keyword(null,"OverallHeight","OverallHeight",-2045217451),(bim.measured_value.cljs$core$IFn$_invoke$arity$2 ? bim.measured_value.cljs$core$IFn$_invoke$arity$2(height,new cljs.core.Keyword(null,"metre","metre",1661912576)) : bim.measured_value.call(null, height,new cljs.core.Keyword(null,"metre","metre",1661912576)))], null);
return (bim.property_set.cljs$core$IFn$_invoke$arity$2 ? bim.property_set.cljs$core$IFn$_invoke$arity$2(G__21675,G__21676) : bim.property_set.call(null, G__21675,G__21676));
})()], null),new cljs.core.Keyword(null,"hosted","hosted",-956146407),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)]));
});
bim.window = (function bim$window(p__21679){
var map__21680 = p__21679;
var map__21680__$1 = cljs.core.__destructure_map(map__21680);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21680__$1,new cljs.core.Keyword(null,"name","name",1843675177),"Window");
var host_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21680__$1,new cljs.core.Keyword(null,"host-id","host-id",742376279));
var opening_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21680__$1,new cljs.core.Keyword(null,"opening-id","opening-id",977222774));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21680__$1,new cljs.core.Keyword(null,"width","width",-384071477),1.2);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21680__$1,new cljs.core.Keyword(null,"height","height",1025178622),1.2);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21680__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"fixed","fixed",-562004358));
return bim.element(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.Keyword(null,"psets","psets",1137235995),new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"global-id","global-id",-2019114757)],[(function (){var G__21681 = cljs.core.PersistentArrayMap.EMPTY;
return (bim.quantities.cljs$core$IFn$_invoke$arity$1 ? bim.quantities.cljs$core$IFn$_invoke$arity$1(G__21681) : bim.quantities.call(null, G__21681));
})(),name,bim.no_geometry(),(bim.classification_ref.cljs$core$IFn$_invoke$arity$3 ? bim.classification_ref.cljs$core$IFn$_invoke$arity$3("Uniclass","Pr_30_59_98","Windows") : bim.classification_ref.call(null, "Uniclass","Pr_30_59_98","Windows")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [host_id,opening_id], null),id,new cljs.core.Keyword(null,"window","window",724519534),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, ["Pset_WindowCommon",(function (){var G__21685 = "Pset_WindowCommon";
var G__21686 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"OperationType","OperationType",-1997710148),(function (){var G__21687 = operation;
var G__21688 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"casement","casement",728058983),null,new cljs.core.Keyword(null,"sliding","sliding",1380642697),null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null], null), null);
return (bim.enum_value.cljs$core$IFn$_invoke$arity$2 ? bim.enum_value.cljs$core$IFn$_invoke$arity$2(G__21687,G__21688) : bim.enum_value.call(null, G__21687,G__21688));
})(),new cljs.core.Keyword(null,"OverallWidth","OverallWidth",-2056644232),(bim.measured_value.cljs$core$IFn$_invoke$arity$2 ? bim.measured_value.cljs$core$IFn$_invoke$arity$2(width,new cljs.core.Keyword(null,"metre","metre",1661912576)) : bim.measured_value.call(null, width,new cljs.core.Keyword(null,"metre","metre",1661912576))),new cljs.core.Keyword(null,"OverallHeight","OverallHeight",-2045217451),(bim.measured_value.cljs$core$IFn$_invoke$arity$2 ? bim.measured_value.cljs$core$IFn$_invoke$arity$2(height,new cljs.core.Keyword(null,"metre","metre",1661912576)) : bim.measured_value.call(null, height,new cljs.core.Keyword(null,"metre","metre",1661912576)))], null);
return (bim.property_set.cljs$core$IFn$_invoke$arity$2 ? bim.property_set.cljs$core$IFn$_invoke$arity$2(G__21685,G__21686) : bim.property_set.call(null, G__21685,G__21686));
})()], null),new cljs.core.Keyword(null,"hosted","hosted",-956146407),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)]));
});
bim.material_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"gypsum","gypsum",-1030419552),null,new cljs.core.Keyword(null,"timber","timber",336397283),null,new cljs.core.Keyword(null,"other","other",995793544),null,new cljs.core.Keyword(null,"glass","glass",1652756718),null,new cljs.core.Keyword(null,"finish","finish",-586688046),null,new cljs.core.Keyword(null,"insulation","insulation",941018489),null,new cljs.core.Keyword(null,"steel","steel",-1478378148),null,new cljs.core.Keyword(null,"concrete","concrete",-5661571),null,new cljs.core.Keyword(null,"masonry","masonry",-1374407553),null], null), null);
bim.material_layer = (function bim$material_layer(material,thickness,is_ventilated,category){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"thickness","thickness",-940175454),thickness,new cljs.core.Keyword(null,"is-ventilated","is-ventilated",1069665043),is_ventilated,new cljs.core.Keyword(null,"category","category",-593092832),category], null);
});
bim.classification_ref = (function bim$classification_ref(source,code,description){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
});
bim.property_set = (function bim$property_set(var_args){
var G__21694 = arguments.length;
switch (G__21694) {
case 1:
return bim.property_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bim.property_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bim.property_set.cljs$core$IFn$_invoke$arity$1 = (function (name){
return bim.property_set.cljs$core$IFn$_invoke$arity$2(name,cljs.core.PersistentArrayMap.EMPTY);
}));

(bim.property_set.cljs$core$IFn$_invoke$arity$2 = (function (name,props){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"props","props",453281727),props], null);
}));

(bim.property_set.cljs$lang$maxFixedArity = 2);

bim.bool_value = (function bim$bool_value(v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"value","value",305978217),v], null);
});
bim.int_value = (function bim$int_value(v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"value","value",305978217),v], null);
});
bim.real_value = (function bim$real_value(v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"real","real",388296937),new cljs.core.Keyword(null,"value","value",305978217),v], null);
});
bim.text_value = (function bim$text_value(v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),v], null);
});
bim.measured_value = (function bim$measured_value(value,unit){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"measured","measured",566232064),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
});
bim.enum_value = (function bim$enum_value(value,allowed){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"allowed","allowed",1436019743),allowed], null);
});
bim.quantities = (function bim$quantities(var_args){
var G__21705 = arguments.length;
switch (G__21705) {
case 0:
return bim.quantities.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bim.quantities.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bim.quantities.cljs$core$IFn$_invoke$arity$0 = (function (){
return bim.quantities.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(bim.quantities.cljs$core$IFn$_invoke$arity$1 = (function (p__21707){
var map__21708 = p__21707;
var map__21708__$1 = cljs.core.__destructure_map(map__21708);
var gross_area_m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"gross-area-m2","gross-area-m2",-673196038));
var net_area_m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"net-area-m2","net-area-m2",-36127542));
var gross_volume_m3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"gross-volume-m3","gross-volume-m3",593457476));
var net_volume_m3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"net-volume-m3","net-volume-m3",-875804916));
var weight_kg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"weight-kg","weight-kg",-160603302));
var length_m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"length-m","length-m",-661956059));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"gross-area-m2","gross-area-m2",-673196038),gross_area_m2,new cljs.core.Keyword(null,"net-area-m2","net-area-m2",-36127542),net_area_m2,new cljs.core.Keyword(null,"gross-volume-m3","gross-volume-m3",593457476),gross_volume_m3,new cljs.core.Keyword(null,"net-volume-m3","net-volume-m3",-875804916),net_volume_m3,new cljs.core.Keyword(null,"weight-kg","weight-kg",-160603302),weight_kg,new cljs.core.Keyword(null,"length-m","length-m",-661956059),length_m], null);
}));

(bim.quantities.cljs$lang$maxFixedArity = 1);

bim.storey_scene = (function bim$storey_scene(p__21709){
var map__21710 = p__21709;
var map__21710__$1 = cljs.core.__destructure_map(map__21710);
var storey_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"storey-id","storey-id",825842690));
var storey_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"storey-name","storey-name",1425891269));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var bounds_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"bounds-min","bounds-min",-1794974857));
var bounds_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"bounds-max","bounds-max",256407894));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"storey-id","storey-id",825842690),storey_id,new cljs.core.Keyword(null,"storey-name","storey-name",1425891269),storey_name,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.vec(items),new cljs.core.Keyword(null,"bounds-min","bounds-min",-1794974857),bounds_min,new cljs.core.Keyword(null,"bounds-max","bounds-max",256407894),bounds_max], null);
});
bim.scene_item = (function bim$scene_item(p__21714){
var map__21715 = p__21714;
var map__21715__$1 = cljs.core.__destructure_map(map__21715);
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"element-id","element-id",798606230));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var world_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"world-transform","world-transform",-193164705));
var geom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var base_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"base-color","base-color",-1117474436));
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"element-id","element-id",798606230),element_id,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"world-transform","world-transform",-193164705),world_transform,new cljs.core.Keyword(null,"geom","geom",1207084371),geom,new cljs.core.Keyword(null,"base-color","base-color",-1117474436),base_color,new cljs.core.Keyword(null,"highlight","highlight",-800930873),highlight], null);
});
bim.triangles_geom = (function bim$triangles_geom(positions,indices,normals){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"indices","indices",-1218138343),indices,new cljs.core.Keyword(null,"normals","normals",-1508109067),normals], null);
});
bim.axis_geom = (function bim$axis_geom(points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.Keyword(null,"points","points",-1486596883),points], null);
});
bim.mesh_ref_geom = (function bim$mesh_ref_geom(blob_key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"mesh-ref","mesh-ref",2126657601),new cljs.core.Keyword(null,"blob-key","blob-key",-776092820),blob_key], null);
});
bim.highlights = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),null,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"has-issue","has-issue",503295706),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null);
/**
 * Call `f` on every element in `proj`, walking site -> building -> storey.
 */
bim.for_each_element = (function bim$for_each_element(proj,f){
var seq__21718 = cljs.core.seq(new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(proj));
var chunk__21747 = null;
var count__21748 = (0);
var i__21749 = (0);
while(true){
if((i__21749 < count__21748)){
var s = chunk__21747.cljs$core$IIndexed$_nth$arity$2(null, i__21749);
var seq__21750_22888 = cljs.core.seq(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(s));
var chunk__21763_22889 = null;
var count__21764_22890 = (0);
var i__21765_22891 = (0);
while(true){
if((i__21765_22891 < count__21764_22890)){
var b_22892 = chunk__21763_22889.cljs$core$IIndexed$_nth$arity$2(null, i__21765_22891);
var seq__21766_22893 = cljs.core.seq(new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(b_22892));
var chunk__21771_22894 = null;
var count__21772_22895 = (0);
var i__21773_22896 = (0);
while(true){
if((i__21773_22896 < count__21772_22895)){
var st_22897 = chunk__21771_22894.cljs$core$IIndexed$_nth$arity$2(null, i__21773_22896);
var seq__21774_22902 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_22897));
var chunk__21775_22903 = null;
var count__21776_22904 = (0);
var i__21777_22905 = (0);
while(true){
if((i__21777_22905 < count__21776_22904)){
var e_22906 = chunk__21775_22903.cljs$core$IIndexed$_nth$arity$2(null, i__21777_22905);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_22906) : f.call(null, e_22906));


var G__22907 = seq__21774_22902;
var G__22908 = chunk__21775_22903;
var G__22909 = count__21776_22904;
var G__22910 = (i__21777_22905 + (1));
seq__21774_22902 = G__22907;
chunk__21775_22903 = G__22908;
count__21776_22904 = G__22909;
i__21777_22905 = G__22910;
continue;
} else {
var temp__5825__auto___22911 = cljs.core.seq(seq__21774_22902);
if(temp__5825__auto___22911){
var seq__21774_22912__$1 = temp__5825__auto___22911;
if(cljs.core.chunked_seq_QMARK_(seq__21774_22912__$1)){
var c__5525__auto___22913 = cljs.core.chunk_first(seq__21774_22912__$1);
var G__22914 = cljs.core.chunk_rest(seq__21774_22912__$1);
var G__22915 = c__5525__auto___22913;
var G__22916 = cljs.core.count(c__5525__auto___22913);
var G__22917 = (0);
seq__21774_22902 = G__22914;
chunk__21775_22903 = G__22915;
count__21776_22904 = G__22916;
i__21777_22905 = G__22917;
continue;
} else {
var e_22918 = cljs.core.first(seq__21774_22912__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_22918) : f.call(null, e_22918));


var G__22919 = cljs.core.next(seq__21774_22912__$1);
var G__22920 = null;
var G__22921 = (0);
var G__22922 = (0);
seq__21774_22902 = G__22919;
chunk__21775_22903 = G__22920;
count__21776_22904 = G__22921;
i__21777_22905 = G__22922;
continue;
}
} else {
}
}
break;
}

var G__22923 = seq__21766_22893;
var G__22924 = chunk__21771_22894;
var G__22925 = count__21772_22895;
var G__22926 = (i__21773_22896 + (1));
seq__21766_22893 = G__22923;
chunk__21771_22894 = G__22924;
count__21772_22895 = G__22925;
i__21773_22896 = G__22926;
continue;
} else {
var temp__5825__auto___22928 = cljs.core.seq(seq__21766_22893);
if(temp__5825__auto___22928){
var seq__21766_22929__$1 = temp__5825__auto___22928;
if(cljs.core.chunked_seq_QMARK_(seq__21766_22929__$1)){
var c__5525__auto___22930 = cljs.core.chunk_first(seq__21766_22929__$1);
var G__22931 = cljs.core.chunk_rest(seq__21766_22929__$1);
var G__22932 = c__5525__auto___22930;
var G__22933 = cljs.core.count(c__5525__auto___22930);
var G__22934 = (0);
seq__21766_22893 = G__22931;
chunk__21771_22894 = G__22932;
count__21772_22895 = G__22933;
i__21773_22896 = G__22934;
continue;
} else {
var st_22935 = cljs.core.first(seq__21766_22929__$1);
var seq__21767_22936 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_22935));
var chunk__21768_22937 = null;
var count__21769_22938 = (0);
var i__21770_22939 = (0);
while(true){
if((i__21770_22939 < count__21769_22938)){
var e_22940 = chunk__21768_22937.cljs$core$IIndexed$_nth$arity$2(null, i__21770_22939);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_22940) : f.call(null, e_22940));


var G__22941 = seq__21767_22936;
var G__22942 = chunk__21768_22937;
var G__22943 = count__21769_22938;
var G__22944 = (i__21770_22939 + (1));
seq__21767_22936 = G__22941;
chunk__21768_22937 = G__22942;
count__21769_22938 = G__22943;
i__21770_22939 = G__22944;
continue;
} else {
var temp__5825__auto___22945__$1 = cljs.core.seq(seq__21767_22936);
if(temp__5825__auto___22945__$1){
var seq__21767_22946__$1 = temp__5825__auto___22945__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21767_22946__$1)){
var c__5525__auto___22948 = cljs.core.chunk_first(seq__21767_22946__$1);
var G__22949 = cljs.core.chunk_rest(seq__21767_22946__$1);
var G__22950 = c__5525__auto___22948;
var G__22951 = cljs.core.count(c__5525__auto___22948);
var G__22952 = (0);
seq__21767_22936 = G__22949;
chunk__21768_22937 = G__22950;
count__21769_22938 = G__22951;
i__21770_22939 = G__22952;
continue;
} else {
var e_22954 = cljs.core.first(seq__21767_22946__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_22954) : f.call(null, e_22954));


var G__22955 = cljs.core.next(seq__21767_22946__$1);
var G__22956 = null;
var G__22957 = (0);
var G__22958 = (0);
seq__21767_22936 = G__22955;
chunk__21768_22937 = G__22956;
count__21769_22938 = G__22957;
i__21770_22939 = G__22958;
continue;
}
} else {
}
}
break;
}

var G__22960 = cljs.core.next(seq__21766_22929__$1);
var G__22961 = null;
var G__22962 = (0);
var G__22963 = (0);
seq__21766_22893 = G__22960;
chunk__21771_22894 = G__22961;
count__21772_22895 = G__22962;
i__21773_22896 = G__22963;
continue;
}
} else {
}
}
break;
}

var G__22964 = seq__21750_22888;
var G__22965 = chunk__21763_22889;
var G__22966 = count__21764_22890;
var G__22967 = (i__21765_22891 + (1));
seq__21750_22888 = G__22964;
chunk__21763_22889 = G__22965;
count__21764_22890 = G__22966;
i__21765_22891 = G__22967;
continue;
} else {
var temp__5825__auto___22968 = cljs.core.seq(seq__21750_22888);
if(temp__5825__auto___22968){
var seq__21750_22969__$1 = temp__5825__auto___22968;
if(cljs.core.chunked_seq_QMARK_(seq__21750_22969__$1)){
var c__5525__auto___22970 = cljs.core.chunk_first(seq__21750_22969__$1);
var G__22972 = cljs.core.chunk_rest(seq__21750_22969__$1);
var G__22973 = c__5525__auto___22970;
var G__22974 = cljs.core.count(c__5525__auto___22970);
var G__22975 = (0);
seq__21750_22888 = G__22972;
chunk__21763_22889 = G__22973;
count__21764_22890 = G__22974;
i__21765_22891 = G__22975;
continue;
} else {
var b_22977 = cljs.core.first(seq__21750_22969__$1);
var seq__21751_22978 = cljs.core.seq(new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(b_22977));
var chunk__21756_22979 = null;
var count__21757_22980 = (0);
var i__21758_22981 = (0);
while(true){
if((i__21758_22981 < count__21757_22980)){
var st_22985 = chunk__21756_22979.cljs$core$IIndexed$_nth$arity$2(null, i__21758_22981);
var seq__21759_22987 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_22985));
var chunk__21760_22988 = null;
var count__21761_22989 = (0);
var i__21762_22990 = (0);
while(true){
if((i__21762_22990 < count__21761_22989)){
var e_22991 = chunk__21760_22988.cljs$core$IIndexed$_nth$arity$2(null, i__21762_22990);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_22991) : f.call(null, e_22991));


var G__22993 = seq__21759_22987;
var G__22994 = chunk__21760_22988;
var G__22995 = count__21761_22989;
var G__22996 = (i__21762_22990 + (1));
seq__21759_22987 = G__22993;
chunk__21760_22988 = G__22994;
count__21761_22989 = G__22995;
i__21762_22990 = G__22996;
continue;
} else {
var temp__5825__auto___22997__$1 = cljs.core.seq(seq__21759_22987);
if(temp__5825__auto___22997__$1){
var seq__21759_22998__$1 = temp__5825__auto___22997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21759_22998__$1)){
var c__5525__auto___23002 = cljs.core.chunk_first(seq__21759_22998__$1);
var G__23003 = cljs.core.chunk_rest(seq__21759_22998__$1);
var G__23004 = c__5525__auto___23002;
var G__23005 = cljs.core.count(c__5525__auto___23002);
var G__23006 = (0);
seq__21759_22987 = G__23003;
chunk__21760_22988 = G__23004;
count__21761_22989 = G__23005;
i__21762_22990 = G__23006;
continue;
} else {
var e_23007 = cljs.core.first(seq__21759_22998__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23007) : f.call(null, e_23007));


var G__23008 = cljs.core.next(seq__21759_22998__$1);
var G__23009 = null;
var G__23010 = (0);
var G__23011 = (0);
seq__21759_22987 = G__23008;
chunk__21760_22988 = G__23009;
count__21761_22989 = G__23010;
i__21762_22990 = G__23011;
continue;
}
} else {
}
}
break;
}

var G__23012 = seq__21751_22978;
var G__23013 = chunk__21756_22979;
var G__23014 = count__21757_22980;
var G__23015 = (i__21758_22981 + (1));
seq__21751_22978 = G__23012;
chunk__21756_22979 = G__23013;
count__21757_22980 = G__23014;
i__21758_22981 = G__23015;
continue;
} else {
var temp__5825__auto___23017__$1 = cljs.core.seq(seq__21751_22978);
if(temp__5825__auto___23017__$1){
var seq__21751_23018__$1 = temp__5825__auto___23017__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21751_23018__$1)){
var c__5525__auto___23019 = cljs.core.chunk_first(seq__21751_23018__$1);
var G__23020 = cljs.core.chunk_rest(seq__21751_23018__$1);
var G__23021 = c__5525__auto___23019;
var G__23022 = cljs.core.count(c__5525__auto___23019);
var G__23023 = (0);
seq__21751_22978 = G__23020;
chunk__21756_22979 = G__23021;
count__21757_22980 = G__23022;
i__21758_22981 = G__23023;
continue;
} else {
var st_23026 = cljs.core.first(seq__21751_23018__$1);
var seq__21752_23028 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_23026));
var chunk__21753_23029 = null;
var count__21754_23030 = (0);
var i__21755_23031 = (0);
while(true){
if((i__21755_23031 < count__21754_23030)){
var e_23032 = chunk__21753_23029.cljs$core$IIndexed$_nth$arity$2(null, i__21755_23031);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23032) : f.call(null, e_23032));


var G__23033 = seq__21752_23028;
var G__23034 = chunk__21753_23029;
var G__23035 = count__21754_23030;
var G__23036 = (i__21755_23031 + (1));
seq__21752_23028 = G__23033;
chunk__21753_23029 = G__23034;
count__21754_23030 = G__23035;
i__21755_23031 = G__23036;
continue;
} else {
var temp__5825__auto___23037__$2 = cljs.core.seq(seq__21752_23028);
if(temp__5825__auto___23037__$2){
var seq__21752_23040__$1 = temp__5825__auto___23037__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21752_23040__$1)){
var c__5525__auto___23041 = cljs.core.chunk_first(seq__21752_23040__$1);
var G__23045 = cljs.core.chunk_rest(seq__21752_23040__$1);
var G__23046 = c__5525__auto___23041;
var G__23047 = cljs.core.count(c__5525__auto___23041);
var G__23048 = (0);
seq__21752_23028 = G__23045;
chunk__21753_23029 = G__23046;
count__21754_23030 = G__23047;
i__21755_23031 = G__23048;
continue;
} else {
var e_23049 = cljs.core.first(seq__21752_23040__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23049) : f.call(null, e_23049));


var G__23053 = cljs.core.next(seq__21752_23040__$1);
var G__23054 = null;
var G__23055 = (0);
var G__23056 = (0);
seq__21752_23028 = G__23053;
chunk__21753_23029 = G__23054;
count__21754_23030 = G__23055;
i__21755_23031 = G__23056;
continue;
}
} else {
}
}
break;
}

var G__23058 = cljs.core.next(seq__21751_23018__$1);
var G__23059 = null;
var G__23060 = (0);
var G__23061 = (0);
seq__21751_22978 = G__23058;
chunk__21756_22979 = G__23059;
count__21757_22980 = G__23060;
i__21758_22981 = G__23061;
continue;
}
} else {
}
}
break;
}

var G__23062 = cljs.core.next(seq__21750_22969__$1);
var G__23063 = null;
var G__23064 = (0);
var G__23065 = (0);
seq__21750_22888 = G__23062;
chunk__21763_22889 = G__23063;
count__21764_22890 = G__23064;
i__21765_22891 = G__23065;
continue;
}
} else {
}
}
break;
}

var G__23066 = seq__21718;
var G__23067 = chunk__21747;
var G__23068 = count__21748;
var G__23069 = (i__21749 + (1));
seq__21718 = G__23066;
chunk__21747 = G__23067;
count__21748 = G__23068;
i__21749 = G__23069;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21718);
if(temp__5825__auto__){
var seq__21718__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21718__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21718__$1);
var G__23070 = cljs.core.chunk_rest(seq__21718__$1);
var G__23071 = c__5525__auto__;
var G__23072 = cljs.core.count(c__5525__auto__);
var G__23073 = (0);
seq__21718 = G__23070;
chunk__21747 = G__23071;
count__21748 = G__23072;
i__21749 = G__23073;
continue;
} else {
var s = cljs.core.first(seq__21718__$1);
var seq__21719_23076 = cljs.core.seq(new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(s));
var chunk__21732_23077 = null;
var count__21733_23078 = (0);
var i__21734_23079 = (0);
while(true){
if((i__21734_23079 < count__21733_23078)){
var b_23081 = chunk__21732_23077.cljs$core$IIndexed$_nth$arity$2(null, i__21734_23079);
var seq__21735_23082 = cljs.core.seq(new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(b_23081));
var chunk__21740_23083 = null;
var count__21741_23085 = (0);
var i__21742_23086 = (0);
while(true){
if((i__21742_23086 < count__21741_23085)){
var st_23087 = chunk__21740_23083.cljs$core$IIndexed$_nth$arity$2(null, i__21742_23086);
var seq__21743_23088 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_23087));
var chunk__21744_23089 = null;
var count__21745_23090 = (0);
var i__21746_23091 = (0);
while(true){
if((i__21746_23091 < count__21745_23090)){
var e_23092 = chunk__21744_23089.cljs$core$IIndexed$_nth$arity$2(null, i__21746_23091);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23092) : f.call(null, e_23092));


var G__23093 = seq__21743_23088;
var G__23094 = chunk__21744_23089;
var G__23095 = count__21745_23090;
var G__23096 = (i__21746_23091 + (1));
seq__21743_23088 = G__23093;
chunk__21744_23089 = G__23094;
count__21745_23090 = G__23095;
i__21746_23091 = G__23096;
continue;
} else {
var temp__5825__auto___23099__$1 = cljs.core.seq(seq__21743_23088);
if(temp__5825__auto___23099__$1){
var seq__21743_23100__$1 = temp__5825__auto___23099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21743_23100__$1)){
var c__5525__auto___23102 = cljs.core.chunk_first(seq__21743_23100__$1);
var G__23103 = cljs.core.chunk_rest(seq__21743_23100__$1);
var G__23104 = c__5525__auto___23102;
var G__23105 = cljs.core.count(c__5525__auto___23102);
var G__23106 = (0);
seq__21743_23088 = G__23103;
chunk__21744_23089 = G__23104;
count__21745_23090 = G__23105;
i__21746_23091 = G__23106;
continue;
} else {
var e_23111 = cljs.core.first(seq__21743_23100__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23111) : f.call(null, e_23111));


var G__23115 = cljs.core.next(seq__21743_23100__$1);
var G__23116 = null;
var G__23117 = (0);
var G__23118 = (0);
seq__21743_23088 = G__23115;
chunk__21744_23089 = G__23116;
count__21745_23090 = G__23117;
i__21746_23091 = G__23118;
continue;
}
} else {
}
}
break;
}

var G__23119 = seq__21735_23082;
var G__23120 = chunk__21740_23083;
var G__23121 = count__21741_23085;
var G__23122 = (i__21742_23086 + (1));
seq__21735_23082 = G__23119;
chunk__21740_23083 = G__23120;
count__21741_23085 = G__23121;
i__21742_23086 = G__23122;
continue;
} else {
var temp__5825__auto___23123__$1 = cljs.core.seq(seq__21735_23082);
if(temp__5825__auto___23123__$1){
var seq__21735_23124__$1 = temp__5825__auto___23123__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21735_23124__$1)){
var c__5525__auto___23125 = cljs.core.chunk_first(seq__21735_23124__$1);
var G__23126 = cljs.core.chunk_rest(seq__21735_23124__$1);
var G__23127 = c__5525__auto___23125;
var G__23128 = cljs.core.count(c__5525__auto___23125);
var G__23129 = (0);
seq__21735_23082 = G__23126;
chunk__21740_23083 = G__23127;
count__21741_23085 = G__23128;
i__21742_23086 = G__23129;
continue;
} else {
var st_23132 = cljs.core.first(seq__21735_23124__$1);
var seq__21736_23133 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_23132));
var chunk__21737_23134 = null;
var count__21738_23135 = (0);
var i__21739_23136 = (0);
while(true){
if((i__21739_23136 < count__21738_23135)){
var e_23137 = chunk__21737_23134.cljs$core$IIndexed$_nth$arity$2(null, i__21739_23136);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23137) : f.call(null, e_23137));


var G__23141 = seq__21736_23133;
var G__23142 = chunk__21737_23134;
var G__23143 = count__21738_23135;
var G__23144 = (i__21739_23136 + (1));
seq__21736_23133 = G__23141;
chunk__21737_23134 = G__23142;
count__21738_23135 = G__23143;
i__21739_23136 = G__23144;
continue;
} else {
var temp__5825__auto___23145__$2 = cljs.core.seq(seq__21736_23133);
if(temp__5825__auto___23145__$2){
var seq__21736_23146__$1 = temp__5825__auto___23145__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21736_23146__$1)){
var c__5525__auto___23147 = cljs.core.chunk_first(seq__21736_23146__$1);
var G__23148 = cljs.core.chunk_rest(seq__21736_23146__$1);
var G__23149 = c__5525__auto___23147;
var G__23150 = cljs.core.count(c__5525__auto___23147);
var G__23151 = (0);
seq__21736_23133 = G__23148;
chunk__21737_23134 = G__23149;
count__21738_23135 = G__23150;
i__21739_23136 = G__23151;
continue;
} else {
var e_23155 = cljs.core.first(seq__21736_23146__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23155) : f.call(null, e_23155));


var G__23158 = cljs.core.next(seq__21736_23146__$1);
var G__23159 = null;
var G__23160 = (0);
var G__23161 = (0);
seq__21736_23133 = G__23158;
chunk__21737_23134 = G__23159;
count__21738_23135 = G__23160;
i__21739_23136 = G__23161;
continue;
}
} else {
}
}
break;
}

var G__23172 = cljs.core.next(seq__21735_23124__$1);
var G__23173 = null;
var G__23174 = (0);
var G__23175 = (0);
seq__21735_23082 = G__23172;
chunk__21740_23083 = G__23173;
count__21741_23085 = G__23174;
i__21742_23086 = G__23175;
continue;
}
} else {
}
}
break;
}

var G__23176 = seq__21719_23076;
var G__23177 = chunk__21732_23077;
var G__23178 = count__21733_23078;
var G__23179 = (i__21734_23079 + (1));
seq__21719_23076 = G__23176;
chunk__21732_23077 = G__23177;
count__21733_23078 = G__23178;
i__21734_23079 = G__23179;
continue;
} else {
var temp__5825__auto___23183__$1 = cljs.core.seq(seq__21719_23076);
if(temp__5825__auto___23183__$1){
var seq__21719_23184__$1 = temp__5825__auto___23183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21719_23184__$1)){
var c__5525__auto___23185 = cljs.core.chunk_first(seq__21719_23184__$1);
var G__23189 = cljs.core.chunk_rest(seq__21719_23184__$1);
var G__23190 = c__5525__auto___23185;
var G__23191 = cljs.core.count(c__5525__auto___23185);
var G__23192 = (0);
seq__21719_23076 = G__23189;
chunk__21732_23077 = G__23190;
count__21733_23078 = G__23191;
i__21734_23079 = G__23192;
continue;
} else {
var b_23193 = cljs.core.first(seq__21719_23184__$1);
var seq__21720_23194 = cljs.core.seq(new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(b_23193));
var chunk__21725_23195 = null;
var count__21726_23196 = (0);
var i__21727_23197 = (0);
while(true){
if((i__21727_23197 < count__21726_23196)){
var st_23204 = chunk__21725_23195.cljs$core$IIndexed$_nth$arity$2(null, i__21727_23197);
var seq__21728_23205 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_23204));
var chunk__21729_23206 = null;
var count__21730_23207 = (0);
var i__21731_23208 = (0);
while(true){
if((i__21731_23208 < count__21730_23207)){
var e_23211 = chunk__21729_23206.cljs$core$IIndexed$_nth$arity$2(null, i__21731_23208);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23211) : f.call(null, e_23211));


var G__23213 = seq__21728_23205;
var G__23214 = chunk__21729_23206;
var G__23215 = count__21730_23207;
var G__23216 = (i__21731_23208 + (1));
seq__21728_23205 = G__23213;
chunk__21729_23206 = G__23214;
count__21730_23207 = G__23215;
i__21731_23208 = G__23216;
continue;
} else {
var temp__5825__auto___23219__$2 = cljs.core.seq(seq__21728_23205);
if(temp__5825__auto___23219__$2){
var seq__21728_23223__$1 = temp__5825__auto___23219__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21728_23223__$1)){
var c__5525__auto___23224 = cljs.core.chunk_first(seq__21728_23223__$1);
var G__23225 = cljs.core.chunk_rest(seq__21728_23223__$1);
var G__23226 = c__5525__auto___23224;
var G__23227 = cljs.core.count(c__5525__auto___23224);
var G__23228 = (0);
seq__21728_23205 = G__23225;
chunk__21729_23206 = G__23226;
count__21730_23207 = G__23227;
i__21731_23208 = G__23228;
continue;
} else {
var e_23229 = cljs.core.first(seq__21728_23223__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23229) : f.call(null, e_23229));


var G__23231 = cljs.core.next(seq__21728_23223__$1);
var G__23232 = null;
var G__23233 = (0);
var G__23234 = (0);
seq__21728_23205 = G__23231;
chunk__21729_23206 = G__23232;
count__21730_23207 = G__23233;
i__21731_23208 = G__23234;
continue;
}
} else {
}
}
break;
}

var G__23235 = seq__21720_23194;
var G__23236 = chunk__21725_23195;
var G__23237 = count__21726_23196;
var G__23238 = (i__21727_23197 + (1));
seq__21720_23194 = G__23235;
chunk__21725_23195 = G__23236;
count__21726_23196 = G__23237;
i__21727_23197 = G__23238;
continue;
} else {
var temp__5825__auto___23239__$2 = cljs.core.seq(seq__21720_23194);
if(temp__5825__auto___23239__$2){
var seq__21720_23240__$1 = temp__5825__auto___23239__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21720_23240__$1)){
var c__5525__auto___23241 = cljs.core.chunk_first(seq__21720_23240__$1);
var G__23242 = cljs.core.chunk_rest(seq__21720_23240__$1);
var G__23243 = c__5525__auto___23241;
var G__23244 = cljs.core.count(c__5525__auto___23241);
var G__23245 = (0);
seq__21720_23194 = G__23242;
chunk__21725_23195 = G__23243;
count__21726_23196 = G__23244;
i__21727_23197 = G__23245;
continue;
} else {
var st_23249 = cljs.core.first(seq__21720_23240__$1);
var seq__21721_23250 = cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(st_23249));
var chunk__21722_23251 = null;
var count__21723_23252 = (0);
var i__21724_23253 = (0);
while(true){
if((i__21724_23253 < count__21723_23252)){
var e_23254 = chunk__21722_23251.cljs$core$IIndexed$_nth$arity$2(null, i__21724_23253);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23254) : f.call(null, e_23254));


var G__23255 = seq__21721_23250;
var G__23256 = chunk__21722_23251;
var G__23257 = count__21723_23252;
var G__23258 = (i__21724_23253 + (1));
seq__21721_23250 = G__23255;
chunk__21722_23251 = G__23256;
count__21723_23252 = G__23257;
i__21724_23253 = G__23258;
continue;
} else {
var temp__5825__auto___23259__$3 = cljs.core.seq(seq__21721_23250);
if(temp__5825__auto___23259__$3){
var seq__21721_23263__$1 = temp__5825__auto___23259__$3;
if(cljs.core.chunked_seq_QMARK_(seq__21721_23263__$1)){
var c__5525__auto___23264 = cljs.core.chunk_first(seq__21721_23263__$1);
var G__23265 = cljs.core.chunk_rest(seq__21721_23263__$1);
var G__23266 = c__5525__auto___23264;
var G__23267 = cljs.core.count(c__5525__auto___23264);
var G__23268 = (0);
seq__21721_23250 = G__23265;
chunk__21722_23251 = G__23266;
count__21723_23252 = G__23267;
i__21724_23253 = G__23268;
continue;
} else {
var e_23269 = cljs.core.first(seq__21721_23263__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e_23269) : f.call(null, e_23269));


var G__23270 = cljs.core.next(seq__21721_23263__$1);
var G__23271 = null;
var G__23272 = (0);
var G__23273 = (0);
seq__21721_23250 = G__23270;
chunk__21722_23251 = G__23271;
count__21723_23252 = G__23272;
i__21724_23253 = G__23273;
continue;
}
} else {
}
}
break;
}

var G__23274 = cljs.core.next(seq__21720_23240__$1);
var G__23275 = null;
var G__23276 = (0);
var G__23277 = (0);
seq__21720_23194 = G__23274;
chunk__21725_23195 = G__23275;
count__21726_23196 = G__23276;
i__21727_23197 = G__23277;
continue;
}
} else {
}
}
break;
}

var G__23278 = cljs.core.next(seq__21719_23184__$1);
var G__23279 = null;
var G__23280 = (0);
var G__23281 = (0);
seq__21719_23076 = G__23278;
chunk__21732_23077 = G__23279;
count__21733_23078 = G__23280;
i__21734_23079 = G__23281;
continue;
}
} else {
}
}
break;
}

var G__23282 = cljs.core.next(seq__21718__$1);
var G__23283 = null;
var G__23284 = (0);
var G__23285 = (0);
seq__21718 = G__23282;
chunk__21747 = G__23283;
count__21748 = G__23284;
i__21749 = G__23285;
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
 * Find a storey by `id` (linear scan across the full hierarchy).
 */
bim.find_storey = (function bim$find_storey(proj,id){
return cljs.core.some((function (s){
return cljs.core.some((function (b){
return cljs.core.some((function (st){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(st),id)){
return st;
} else {
return null;
}
}),new cljs.core.Keyword(null,"storeys","storeys",1712161297).cljs$core$IFn$_invoke$arity$1(b));
}),new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(s));
}),new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(proj));
});
bim.find_building = (function bim$find_building(proj,id){
return cljs.core.some((function (s){
return cljs.core.some((function (p1__22357_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22357_SHARP_))){
return p1__22357_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"buildings","buildings",-308691065).cljs$core$IFn$_invoke$arity$1(s));
}),new cljs.core.Keyword(null,"sites","sites",-842069881).cljs$core$IFn$_invoke$arity$1(proj));
});
bim.update_building_STAR_ = (function bim$update_building_STAR_(proj,building_id,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(proj,new cljs.core.Keyword(null,"sites","sites",-842069881),(function (p1__22358_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (site){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(site,new cljs.core.Keyword(null,"buildings","buildings",-308691065),(function (buildings){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(building_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null, b));
} else {
return b;
}
}),buildings);
}));
}),p1__22358_SHARP_);
}));
});
bim.add_storey = (function bim$add_storey(proj,building_id,new_storey){
if(cljs.core.truth_(bim.find_building(proj,building_id))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("building not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"building-id","building-id",1106108774),building_id], null));
}

if(cljs.core.truth_(bim.find_storey(proj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_storey)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("storey id already exists",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storey-id","storey-id",825842690),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_storey)], null));
} else {
}

return bim.update_building_STAR_(proj,building_id,(function (p1__22360_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__22360_SHARP_,new cljs.core.Keyword(null,"storeys","storeys",1712161297),cljs.core.conj,new_storey);
}));
});
bim.delete_storey = (function bim$delete_storey(proj,building_id,storey_id){
var target = bim.find_storey(proj,storey_id);
if(cljs.core.truth_(target)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("storey not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storey-id","storey-id",825842690),storey_id], null));
}

if(((cljs.core.seq(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(target))) || (cljs.core.seq(new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(target))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot delete non-empty storey",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storey-id","storey-id",825842690),storey_id], null));
} else {
}

return bim.update_building_STAR_(proj,building_id,(function (p1__22361_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__22361_SHARP_,new cljs.core.Keyword(null,"storeys","storeys",1712161297),(function (storeys){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(storey_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s));
}),storeys));
}));
}));
});
bim.update_storey_STAR_ = (function bim$update_storey_STAR_(proj,storey_id,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(proj,new cljs.core.Keyword(null,"sites","sites",-842069881),(function (sites){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"buildings","buildings",-308691065),(function (buildings){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"storeys","storeys",1712161297),(function (storeys){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22368_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(storey_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22368_SHARP_))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__22368_SHARP_) : f.call(null, p1__22368_SHARP_));
} else {
return p1__22368_SHARP_;
}
}),storeys);
}));
}),buildings);
}));
}),sites);
}));
});
bim.add_element = (function bim$add_element(proj,storey_id,elem){
if(cljs.core.truth_(bim.find_storey(proj,storey_id))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("storey not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storey-id","storey-id",825842690),storey_id], null));
}

return bim.update_storey_STAR_(proj,storey_id,(function (p1__22369_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__22369_SHARP_,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.conj,elem);
}));
});
bim.update_element = (function bim$update_element(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23287 = arguments.length;
var i__5727__auto___23288 = (0);
while(true){
if((i__5727__auto___23288 < len__5726__auto___23287)){
args__5732__auto__.push((arguments[i__5727__auto___23288]));

var G__23289 = (i__5727__auto___23288 + (1));
i__5727__auto___23288 = G__23289;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return bim.update_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(bim.update_element.cljs$core$IFn$_invoke$arity$variadic = (function (proj,storey_id,element_id,f,args){
return bim.update_storey_STAR_(proj,storey_id,(function (p1__22370_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__22370_SHARP_,new cljs.core.Keyword(null,"elements","elements",657646735),(function (elements){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,e,args);
} else {
return e;
}
}),elements);
}));
}));
}));

(bim.update_element.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(bim.update_element.cljs$lang$applyTo = (function (seq22371){
var G__22372 = cljs.core.first(seq22371);
var seq22371__$1 = cljs.core.next(seq22371);
var G__22373 = cljs.core.first(seq22371__$1);
var seq22371__$2 = cljs.core.next(seq22371__$1);
var G__22374 = cljs.core.first(seq22371__$2);
var seq22371__$3 = cljs.core.next(seq22371__$2);
var G__22375 = cljs.core.first(seq22371__$3);
var seq22371__$4 = cljs.core.next(seq22371__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22372,G__22373,G__22374,G__22375,seq22371__$4);
}));

bim.delete_element = (function bim$delete_element(proj,storey_id,element_id){
return bim.update_storey_STAR_(proj,storey_id,(function (p1__22376_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__22376_SHARP_,new cljs.core.Keyword(null,"elements","elements",657646735),(function (elements){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
}),elements));
}));
}));
});
bim.wall = (function bim$wall(p__22379){
var map__22380 = p__22379;
var map__22380__$1 = cljs.core.__destructure_map(map__22380);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22380__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22380__$1,new cljs.core.Keyword(null,"name","name",1843675177),"Wall");
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22380__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22380__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var thickness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22380__$1,new cljs.core.Keyword(null,"thickness","thickness",-940175454),0.2);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22380__$1,new cljs.core.Keyword(null,"height","height",1025178622),3.0);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22380__$1,new cljs.core.Keyword(null,"material","material",460118677),"Concrete");
return bim.element(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),new cljs.core.Keyword(null,"material-layers","material-layers",1790764786),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.Keyword(null,"psets","psets",1137235995),new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"global-id","global-id",-2019114757)],[bim.quantities.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"length-m","length-m",-661956059),bim.sqrt(((function (){var d = (cljs.core.first(end) - cljs.core.first(start));
return (d * d);
})() + (function (){var d = (cljs.core.second(end) - cljs.core.second(start));
return (d * d);
})()))], null)),name,bim.axis_sweep_geometry(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null),bim.rectangle_profile(thickness,height)),bim.classification_ref("Uniclass","Ss_25_10","Wall systems"),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bim.material_layer(material,thickness,false,new cljs.core.Keyword(null,"concrete","concrete",-5661571))], null),id,new cljs.core.Keyword(null,"wall","wall",-787661558),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, ["Pset_WallCommon",bim.property_set.cljs$core$IFn$_invoke$arity$2("Pset_WallCommon",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"IsExternal","IsExternal",-1719857296),bim.bool_value(true)], null))], null),new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)]));
});
bim.polygon_area = (function bim$polygon_area(points){
return Math.abs((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22447){
var vec__22448 = p__22447;
var vec__22451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,(2),null);
var vec__22454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454,(2),null);
return ((x1 * y2) - (x2 * y1));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(points),cljs.core.first(points))))) / (2)));
});
bim.slab = (function bim$slab(p__22469){
var map__22470 = p__22469;
var map__22470__$1 = cljs.core.__destructure_map(map__22470);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22470__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22470__$1,new cljs.core.Keyword(null,"name","name",1843675177),"Slab");
var boundary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22470__$1,new cljs.core.Keyword(null,"boundary","boundary",-2000996754));
var thickness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22470__$1,new cljs.core.Keyword(null,"thickness","thickness",-940175454),0.25);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22470__$1,new cljs.core.Keyword(null,"material","material",460118677),"Concrete");
if((cljs.core.count(boundary) < (3))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("slab boundary needs at least three points",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((thickness > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("slab thickness must be positive",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thickness","thickness",-940175454),thickness], null));
}

var area = bim.polygon_area(boundary);
return bim.element(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"classification","classification",150369615),new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),new cljs.core.Keyword(null,"material-layers","material-layers",1790764786),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.Keyword(null,"psets","psets",1137235995),new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"global-id","global-id",-2019114757)],[bim.quantities.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gross-area-m2","gross-area-m2",-673196038),area,new cljs.core.Keyword(null,"net-area-m2","net-area-m2",-36127542),area,new cljs.core.Keyword(null,"gross-volume-m3","gross-volume-m3",593457476),(area * thickness),new cljs.core.Keyword(null,"net-volume-m3","net-volume-m3",-875804916),(area * thickness)], null)),name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"slab-extrusion","slab-extrusion",-1440496664),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),cljs.core.vec(boundary),new cljs.core.Keyword(null,"thickness","thickness",-940175454),thickness], null),bim.classification_ref("Uniclass","Ss_20_30","Floor systems"),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bim.material_layer(material,thickness,false,new cljs.core.Keyword(null,"concrete","concrete",-5661571))], null),id,new cljs.core.Keyword(null,"slab","slab",-565094848),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, ["Pset_SlabCommon",bim.property_set.cljs$core$IFn$_invoke$arity$2("Pset_SlabCommon",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"IsExternal","IsExternal",-1719857296),bim.bool_value(false)], null))], null),new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)]));
});
bim.slab_mesh = (function bim$slab_mesh(p__22495){
var map__22496 = p__22495;
var map__22496__$1 = cljs.core.__destructure_map(map__22496);
var geometry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var boundary = new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(geometry);
var thickness = new cljs.core.Keyword(null,"thickness","thickness",-940175454).cljs$core$IFn$_invoke$arity$1(geometry);
var n = cljs.core.count(boundary);
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__22504){
var vec__22505 = p__22504;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22505,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22505,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22505,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + thickness)], null);
}),boundary);
var positions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(boundary),top);
var bottom_tris = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(i + (1)),i], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n - (1)))], 0));
var top_tris = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(n + i),(n + (i + (1)))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n - (1)))], 0));
var sides = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (i){
var j = cljs.core.mod((i + (1)),n);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,(n + i),j,(n + j),(n + i)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)], 0));
var indices = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bottom_tris,top_tris,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sides], 0)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"indices","indices",-1218138343),indices,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((2) * n),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)))], null);
});
bim.element_mesh = (function bim$element_mesh(element){
var G__22533 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(element);
var G__22533__$1 = (((G__22533 instanceof cljs.core.Keyword))?G__22533.fqn:null);
switch (G__22533__$1) {
case "wall":
return (bim.wall_with_openings_mesh.cljs$core$IFn$_invoke$arity$1 ? bim.wall_with_openings_mesh.cljs$core$IFn$_invoke$arity$1(element) : bim.wall_with_openings_mesh.call(null, element));

break;
case "slab":
return bim.slab_mesh(element);

break;
default:
return null;

}
});
bim.add_opening_to_wall = (function bim$add_opening_to_wall(wall,opening){
var length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wall,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null));
var wall_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wall,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"height","height",1025178622)], null));
var map__22545 = new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(opening);
var map__22545__$1 = cljs.core.__destructure_map(map__22545);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22545__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var sill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22545__$1,new cljs.core.Keyword(null,"sill","sill",-957549638));
var map__22546 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(opening);
var map__22546__$1 = cljs.core.__destructure_map(map__22546);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22546__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22546__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var overlaps_QMARK_ = (function (other){
var map__22579 = new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(other);
var map__22579__$1 = cljs.core.__destructure_map(map__22579);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,new cljs.core.Keyword(null,"sill","sill",-957549638));
var map__22580 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(other);
var map__22580__$1 = cljs.core.__destructure_map(map__22580);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (((offset < (o + w))) && ((((o < (offset + width))) && ((((sill < (s + h))) && ((s < (sill + height))))))));
});
if(((((offset + width) > length)) || (((sill + height) > wall_height)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("opening exceeds wall bounds",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wall-length","wall-length",1195086667),length,new cljs.core.Keyword(null,"wall-height","wall-height",1306414571),wall_height,new cljs.core.Keyword(null,"opening","opening",450993708),opening], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(overlaps_QMARK_,new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(wall)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("opening overlaps an existing opening",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opening-id","opening-id",977222774),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opening)], null));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(wall,new cljs.core.Keyword(null,"openings","openings",801340570),cljs.core.conj,opening);
});
bim.remove_opening_from_wall = (function bim$remove_opening_from_wall(wall,opening_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(wall,new cljs.core.Keyword(null,"openings","openings",801340570),(function (p1__22593_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (opening){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opening_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opening));
}),p1__22593_SHARP_));
}));
});
/**
 * Convert a horizontal axis-sweep rectangle wall into an indexed box mesh.
 */
bim.wall_mesh = (function bim$wall_mesh(p__22594){
var map__22595 = p__22594;
var map__22595__$1 = cljs.core.__destructure_map(map__22595);
var geometry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22595__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var vec__22596 = new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(geometry);
var vec__22599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(0),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(1),null);
var z0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(2),null);
var vec__22602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(1),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(2),null);
var map__22605 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(geometry);
var map__22605__$1 = cljs.core.__destructure_map(map__22605);
var thickness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22605__$1,new cljs.core.Keyword(null,"thickness","thickness",-940175454));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22605__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dx = (x1 - x0);
var dy = (y1 - y0);
var len = bim.sqrt(((dx * dx) + (dy * dy)));
var px = (((- dy) / len) * (thickness / (2)));
var py = ((dx / len) * (thickness / (2)));
var positions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + px),(y0 + py),z0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 - px),(y0 - py),z0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + px),(y1 + py),z0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - px),(y1 - py),z0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + px),(y0 + py),(z0 + height)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 - px),(y0 - py),(z0 + height)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + px),(y1 + py),(z0 + height)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - px),(y1 - py),(z0 + height)], null)], null);
var indices = cljs.core.PersistentVector.fromArray([(0),(2),(1),(1),(2),(3),(4),(5),(6),(5),(7),(6),(0),(4),(2),(2),(4),(6),(1),(3),(5),(3),(7),(5),(0),(1),(4),(1),(5),(4),(2),(6),(3),(3),(6),(7)], true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"indices","indices",-1218138343),indices,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)))], null);
});
/**
 * Generate wall geometry with non-overlapping rectangular hosted openings.
 */
bim.wall_with_openings_mesh = (function bim$wall_with_openings_mesh(wall_element){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(wall_element))){
return bim.wall_mesh(wall_element);
} else {
var vec__22627 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wall_element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"axis","axis",-1215390822)], null));
var vec__22630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22627,(0),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22630,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22630,(1),null);
var z0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22630,(2),null);
var vec__22633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22627,(1),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(2),null);
var length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wall_element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"length-m","length-m",-661956059)], null));
var thickness = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wall_element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"thickness","thickness",-940175454)], null));
var wall_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wall_element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"height","height",1025178622)], null));
var point_at = (function (offset,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + ((offset / length) * (x1 - x0))),(y0 + ((offset / length) * (y1 - y0))),(z0 + z)], null);
});
var box = (function (from,to,bottom,height){
return bim.wall_mesh(bim.wall(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"opening-segment","opening-segment",-2023831682),new cljs.core.Keyword(null,"start","start",-355208981),point_at(from,bottom),new cljs.core.Keyword(null,"end","end",-268185958),point_at(to,bottom),new cljs.core.Keyword(null,"thickness","thickness",-940175454),thickness,new cljs.core.Keyword(null,"height","height",1025178622),height], null)));
});
var openings = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__22612_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__22612_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
}),new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(wall_element));
var vertical = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (o){
var map__22646 = new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(o);
var map__22646__$1 = cljs.core.__destructure_map(map__22646);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22646__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var sill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22646__$1,new cljs.core.Keyword(null,"sill","sill",-957549638));
var map__22647 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(o);
var map__22647__$1 = cljs.core.__destructure_map(map__22647);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22647__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22647__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__22648 = cljs.core.PersistentVector.EMPTY;
var G__22648__$1 = (((sill > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22648,box(offset,(offset + width),(0),sill)):G__22648);
if(((sill + height) < wall_height)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22648__$1,box(offset,(offset + width),(sill + height),((wall_height - sill) - height)));
} else {
return G__22648__$1;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([openings], 0));
var gaps = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.cons((0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22618_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__22618_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"offset","offset",296498311)], null)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__22618_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"width","width",-384071477)], null)));
}),openings)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22623_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__22623_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
}),openings),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [length], null)));
var full_height = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22651){
var vec__22652 = p__22651;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22652,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22652,(1),null);
return box(a,b,(0),wall_height);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__22673){
var vec__22677 = p__22673;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677,(1),null);
return (a < b);
}),gaps));
var G__22680 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(full_height,vertical);
return (bim.merge_meshes.cljs$core$IFn$_invoke$arity$1 ? bim.merge_meshes.cljs$core$IFn$_invoke$arity$1(G__22680) : bim.merge_meshes.call(null, G__22680));
}
});
bim.merge_meshes = (function bim$merge_meshes(meshes){
var remaining = meshes;
var positions = cljs.core.PersistentVector.EMPTY;
var normals = cljs.core.PersistentVector.EMPTY;
var indices = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(remaining);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var offset = cljs.core.count(positions);
var G__23394 = cljs.core.next(remaining);
var G__23395 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(m));
var G__23396 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(normals,new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(m));
var G__23397 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(indices,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,positions,normals,indices,offset,m,temp__5823__auto__){
return (function (p1__22685_SHARP_){
return (offset + p1__22685_SHARP_);
});})(remaining,positions,normals,indices,offset,m,temp__5823__auto__))
,new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(m)));
remaining = G__23394;
positions = G__23395;
normals = G__23396;
indices = G__23397;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.vec(positions),new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.vec(normals),new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.vec(indices)], null);
}
break;
}
});

//# sourceMappingURL=bim.js.map
