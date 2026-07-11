goog.provide('kami.webgl');
kami.webgl.webgpu_available_QMARK_ = (function kami$webgl$webgpu_available_QMARK_(){
return cljs.core.boolean$((function (){var and__5000__auto__ = navigator;
if(cljs.core.truth_(and__5000__auto__)){
return navigator.gpu;
} else {
return and__5000__auto__;
}
})());
});

/**
 * A WebGL2 rendering context for the canvas (premultiplied alpha, antialias), or nil.
 */
kami.webgl.webgl2_context = (function kami$webgl$webgl2_context(canvas){
return canvas.getContext("webgl2",({"antialias": true, "premultipliedAlpha": true}));
});

/**
 * The best available GPU backend for this browser: :webgpu if WebGPU is present, else :webgl2.
 * Both consume the same render-IR; the caller routes to kami.webgpu or kami.webgl accordingly.
 */
kami.webgl.pick_backend = (function kami$webgl$pick_backend(){
if(kami.webgl.webgpu_available_QMARK_()){
return new cljs.core.Keyword(null,"webgpu","webgpu",-1928709720);
} else {
return new cljs.core.Keyword(null,"webgl2","webgl2",111927467);
}
});

/**
 * The kami.gpu capability tier for a running WebGL2 context (no compute / no storage, instancing
 * via ANGLE_instanced_arrays core in WebGL2).
 */
kami.webgl.caps = (function kami$webgl$caps(_gl){
return kami.gpu.caps_from_device(new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compute","compute",1555393130),false,new cljs.core.Keyword(null,"storage","storage",1867247511),false,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null));
});

kami.webgl.compile_shader = (function kami$webgl$compile_shader(gl,kind,src){
var s = gl.createShader(kind);
gl.shaderSource(s,src);

gl.compileShader(s);

if(cljs.core.truth_(gl.getShaderParameter(s,gl.COMPILE_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL compile error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getShaderInfoLog(s))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null));
}

return s;
});

/**
 * Compile + link a GLSL ES 3.00 program from vertex/fragment source (as produced by bb gen-glsl).
 * Throws with the info log on failure.
 */
kami.webgl.program = (function kami$webgl$program(gl,vsrc,fsrc){
var p = gl.createProgram();
var vs = kami.webgl.compile_shader(gl,gl.VERTEX_SHADER,vsrc);
var fs = kami.webgl.compile_shader(gl,gl.FRAGMENT_SHADER,fsrc);
gl.attachShader(p,vs);

gl.attachShader(p,fs);

gl.linkProgram(p);

if(cljs.core.truth_(gl.getProgramParameter(p,gl.LINK_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL link error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(p))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return p;
});

kami.webgl.mesh_vertex_shader = "#version 300 es\nprecision highp float;\nlayout(location=0) in vec3 a_position;\nlayout(location=1) in vec3 a_normal;\nuniform mat4 u_mvp;\nout vec3 v_normal;\nvoid main(){ gl_Position=u_mvp*vec4(a_position,1.0); v_normal=a_normal; }";

kami.webgl.mesh_fragment_shader = "#version 300 es\nprecision highp float;\nin vec3 v_normal;\nuniform vec3 u_color;\nout vec4 out_color;\nvoid main(){ float l=0.25+0.75*max(dot(normalize(v_normal),normalize(vec3(0.4,0.8,0.6))),0.0); out_color=vec4(u_color*l,1.0); }";

/**
 * Initialize the canonical arbitrary-mesh WebGL2 fallback for a canvas.
 */
kami.webgl.init_mesh_viewport_BANG_ = (function kami$webgl$init_mesh_viewport_BANG_(canvas){
var temp__5825__auto__ = kami.webgl.webgl2_context(canvas);
if(cljs.core.truth_(temp__5825__auto__)){
var gl = temp__5825__auto__;
var width = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientWidth;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var height = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientHeight;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var prog = kami.webgl.program(gl,kami.webgl.mesh_vertex_shader,kami.webgl.mesh_fragment_shader);
(canvas.width = width);

(canvas.height = height);

gl.enable(gl.DEPTH_TEST);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"program","program",781564284),prog,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
return null;
}
});

/**
 * Upload {:positions :normals :indices} to a fallback viewport.
 */
kami.webgl.upload_mesh_BANG_ = (function kami$webgl$upload_mesh_BANG_(p__22147,p__22148){
var map__22149 = p__22147;
var map__22149__$1 = cljs.core.__destructure_map(map__22149);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22149__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__22150 = p__22148;
var map__22150__$1 = cljs.core.__destructure_map(map__22150);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var indices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var vao = gl.createVertexArray();
var vertex_buffer = gl.createBuffer();
var index_buffer = gl.createBuffer();
var vertices = (new Float32Array(cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,positions,normals)], 0)))));
var index_data = (new Uint32Array(cljs.core.clj__GT_js(indices)));
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vertex_buffer);

gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

var seq__22154_22385 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22155_22386 = null;
var count__22156_22387 = (0);
var i__22157_22388 = (0);
while(true){
if((i__22157_22388 < count__22156_22387)){
var vec__22166_22389 = chunk__22155_22386.cljs$core$IIndexed$_nth$arity$2(null, i__22157_22388);
var location_22390__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166_22389,(0),null);
var offset_22391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166_22389,(1),null);
gl.enableVertexAttribArray(location_22390__$1);

gl.vertexAttribPointer(location_22390__$1,(3),gl.FLOAT,false,(24),offset_22391);


var G__22393 = seq__22154_22385;
var G__22394 = chunk__22155_22386;
var G__22395 = count__22156_22387;
var G__22396 = (i__22157_22388 + (1));
seq__22154_22385 = G__22393;
chunk__22155_22386 = G__22394;
count__22156_22387 = G__22395;
i__22157_22388 = G__22396;
continue;
} else {
var temp__5825__auto___22397 = cljs.core.seq(seq__22154_22385);
if(temp__5825__auto___22397){
var seq__22154_22398__$1 = temp__5825__auto___22397;
if(cljs.core.chunked_seq_QMARK_(seq__22154_22398__$1)){
var c__5525__auto___22399 = cljs.core.chunk_first(seq__22154_22398__$1);
var G__22400 = cljs.core.chunk_rest(seq__22154_22398__$1);
var G__22401 = c__5525__auto___22399;
var G__22402 = cljs.core.count(c__5525__auto___22399);
var G__22403 = (0);
seq__22154_22385 = G__22400;
chunk__22155_22386 = G__22401;
count__22156_22387 = G__22402;
i__22157_22388 = G__22403;
continue;
} else {
var vec__22171_22404 = cljs.core.first(seq__22154_22398__$1);
var location_22405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171_22404,(0),null);
var offset_22406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171_22404,(1),null);
gl.enableVertexAttribArray(location_22405__$1);

gl.vertexAttribPointer(location_22405__$1,(3),gl.FLOAT,false,(24),offset_22406);


var G__22407 = cljs.core.next(seq__22154_22398__$1);
var G__22408 = null;
var G__22409 = (0);
var G__22410 = (0);
seq__22154_22385 = G__22407;
chunk__22155_22386 = G__22408;
count__22156_22387 = G__22409;
i__22157_22388 = G__22410;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,index_buffer);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,index_data,gl.STATIC_DRAW);

gl.bindVertexArray(null);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vao","vao",-896395446),vao,new cljs.core.Keyword(null,"vertex-buffer","vertex-buffer",-1711520881),vertex_buffer,new cljs.core.Keyword(null,"index-buffer","index-buffer",2003635709),index_buffer,new cljs.core.Keyword(null,"index-count","index-count",-907351532),cljs.core.count(indices)], null);
});

/**
 * Render several fallback mesh draws after one color/depth clear. Each draw
 *   is {:buffers :mvp :color}; MVP is a column-major Float32Array.
 */
kami.webgl.render_mesh_scene_BANG_ = (function kami$webgl$render_mesh_scene_BANG_(p__22175,draws){
var map__22176 = p__22175;
var map__22176__$1 = cljs.core.__destructure_map(map__22176);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22176__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22176__$1,new cljs.core.Keyword(null,"program","program",781564284));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22176__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22176__$1,new cljs.core.Keyword(null,"height","height",1025178622));
gl.viewport((0),(0),width,height);

gl.clearColor(0.035,0.055,0.1,1.0);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(program);

var seq__22178_22413 = cljs.core.seq(draws);
var chunk__22179_22414 = null;
var count__22180_22415 = (0);
var i__22181_22416 = (0);
while(true){
if((i__22181_22416 < count__22180_22415)){
var map__22200_22417 = chunk__22179_22414.cljs$core$IIndexed$_nth$arity$2(null, i__22181_22416);
var map__22200_22418__$1 = cljs.core.__destructure_map(map__22200_22417);
var buffers_22419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22200_22418__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22200_22418__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22200_22418__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__22202_22422 = buffers_22419;
var map__22202_22423__$1 = cljs.core.__destructure_map(map__22202_22422);
var vao_22424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202_22423__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202_22423__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__22203_22426 = color_22421;
var r_22427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203_22426,(0),null);
var g_22428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203_22426,(1),null);
var b_22429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203_22426,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22420);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22427,g_22428,b_22429);

gl.bindVertexArray(vao_22424);

gl.drawElements(gl.TRIANGLES,index_count_22425,gl.UNSIGNED_INT,(0));


var G__22430 = seq__22178_22413;
var G__22431 = chunk__22179_22414;
var G__22432 = count__22180_22415;
var G__22433 = (i__22181_22416 + (1));
seq__22178_22413 = G__22430;
chunk__22179_22414 = G__22431;
count__22180_22415 = G__22432;
i__22181_22416 = G__22433;
continue;
} else {
var temp__5825__auto___22434 = cljs.core.seq(seq__22178_22413);
if(temp__5825__auto___22434){
var seq__22178_22435__$1 = temp__5825__auto___22434;
if(cljs.core.chunked_seq_QMARK_(seq__22178_22435__$1)){
var c__5525__auto___22436 = cljs.core.chunk_first(seq__22178_22435__$1);
var G__22437 = cljs.core.chunk_rest(seq__22178_22435__$1);
var G__22438 = c__5525__auto___22436;
var G__22439 = cljs.core.count(c__5525__auto___22436);
var G__22440 = (0);
seq__22178_22413 = G__22437;
chunk__22179_22414 = G__22438;
count__22180_22415 = G__22439;
i__22181_22416 = G__22440;
continue;
} else {
var map__22208_22442 = cljs.core.first(seq__22178_22435__$1);
var map__22208_22443__$1 = cljs.core.__destructure_map(map__22208_22442);
var buffers_22444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208_22443__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208_22443__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208_22443__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__22210_22457 = buffers_22444;
var map__22210_22458__$1 = cljs.core.__destructure_map(map__22210_22457);
var vao_22459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210_22458__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210_22458__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__22211_22461 = color_22446;
var r_22462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211_22461,(0),null);
var g_22463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211_22461,(1),null);
var b_22464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211_22461,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22445);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22462,g_22463,b_22464);

gl.bindVertexArray(vao_22459);

gl.drawElements(gl.TRIANGLES,index_count_22460,gl.UNSIGNED_INT,(0));


var G__22471 = cljs.core.next(seq__22178_22435__$1);
var G__22472 = null;
var G__22473 = (0);
var G__22474 = (0);
seq__22178_22413 = G__22471;
chunk__22179_22414 = G__22472;
count__22180_22415 = G__22473;
i__22181_22416 = G__22474;
continue;
}
} else {
}
}
break;
}

return gl.bindVertexArray(null);
});

/**
 * Render one fallback mesh frame.
 */
kami.webgl.render_mesh_frame_BANG_ = (function kami$webgl$render_mesh_frame_BANG_(viewport,buffers,mvp,color){
return kami.webgl.render_mesh_scene_BANG_(viewport,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffers,new cljs.core.Keyword(null,"mvp","mvp",-493676132),mvp,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
});

kami.webgl.F4 = (4);

/**
 * Build a 2D-sprite draw fn for this WebGL2 context from the generated GLSL (sprite.vert/.frag).
 * The returned `(draw! quad-instances [w h])` packs + uploads the instances and issues one
 * instanced draw — the whole 2D frame in a single call, rendering the SDF shapes on the GPU.
 */
kami.webgl.sprite_renderer = (function kami$webgl$sprite_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22475 = arguments.length;
var i__5727__auto___22476 = (0);
while(true){
if((i__5727__auto___22476 < len__5726__auto___22475)){
args__5732__auto__.push((arguments[i__5727__auto___22476]));

var G__22477 = (i__5727__auto___22476 + (1));
i__5727__auto___22476 = G__22477;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,p__22224){
var vec__22225 = p__22224;
var map__22228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22225,(0),null);
var map__22228__$1 = cljs.core.__destructure_map(map__22228);
var vert = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22228__$1,new cljs.core.Keyword(null,"vert","vert",-360932977),kami.webgl.glsl.sprite_vert);
var frag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22228__$1,new cljs.core.Keyword(null,"frag","frag",1474317943),kami.webgl.glsl.sprite_frag);
var prog = kami.webgl.program(gl,vert,frag);
var vao = gl.createVertexArray();
var ibuf = gl.createBuffer();
var ublk = gl.getUniformBlockIndex(prog,"U_block_0Vertex");
var ubuf = gl.createBuffer();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

var stride_22480 = (48);
var attrs_22481 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(24)], null)], null);
var seq__22230_22499 = cljs.core.seq(attrs_22481);
var chunk__22231_22500 = null;
var count__22232_22501 = (0);
var i__22233_22502 = (0);
while(true){
if((i__22233_22502 < count__22232_22501)){
var vec__22240_22508 = chunk__22231_22500.cljs$core$IIndexed$_nth$arity$2(null, i__22233_22502);
var loc_22509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22240_22508,(0),null);
var n_22510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22240_22508,(1),null);
var off_22511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22240_22508,(2),null);
gl.enableVertexAttribArray(loc_22509);

gl.vertexAttribPointer(loc_22509,n_22510,gl.FLOAT,false,stride_22480,off_22511);

gl.vertexAttribDivisor(loc_22509,(1));


var G__22513 = seq__22230_22499;
var G__22514 = chunk__22231_22500;
var G__22515 = count__22232_22501;
var G__22516 = (i__22233_22502 + (1));
seq__22230_22499 = G__22513;
chunk__22231_22500 = G__22514;
count__22232_22501 = G__22515;
i__22233_22502 = G__22516;
continue;
} else {
var temp__5825__auto___22517 = cljs.core.seq(seq__22230_22499);
if(temp__5825__auto___22517){
var seq__22230_22518__$1 = temp__5825__auto___22517;
if(cljs.core.chunked_seq_QMARK_(seq__22230_22518__$1)){
var c__5525__auto___22519 = cljs.core.chunk_first(seq__22230_22518__$1);
var G__22520 = cljs.core.chunk_rest(seq__22230_22518__$1);
var G__22521 = c__5525__auto___22519;
var G__22522 = cljs.core.count(c__5525__auto___22519);
var G__22523 = (0);
seq__22230_22499 = G__22520;
chunk__22231_22500 = G__22521;
count__22232_22501 = G__22522;
i__22233_22502 = G__22523;
continue;
} else {
var vec__22243_22524 = cljs.core.first(seq__22230_22518__$1);
var loc_22525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243_22524,(0),null);
var n_22526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243_22524,(1),null);
var off_22527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243_22524,(2),null);
gl.enableVertexAttribArray(loc_22525);

gl.vertexAttribPointer(loc_22525,n_22526,gl.FLOAT,false,stride_22480,off_22527);

gl.vertexAttribDivisor(loc_22525,(1));


var G__22537 = cljs.core.next(seq__22230_22518__$1);
var G__22538 = null;
var G__22539 = (0);
var G__22540 = (0);
seq__22230_22499 = G__22537;
chunk__22231_22500 = G__22538;
count__22232_22501 = G__22539;
i__22233_22502 = G__22540;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ublk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(prog,ublk,(0));
} else {
}

gl.bindVertexArray(null);

return (function kami$webgl$draw_BANG_(quad_instances,p__22249){
var vec__22252 = p__22249;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22252,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22252,(1),null);
var data = (new Float32Array(cljs.core.clj__GT_js(kami.sprite_gpu.pack_instances(quad_instances))));
var n = cljs.core.count(quad_instances);
gl.useProgram(prog);

gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.UNIFORM_BUFFER,ubuf);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array([w,h,(0),(0)])),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),ubuf);

gl.enable(gl.BLEND);

gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);

gl.drawArraysInstanced(gl.TRIANGLES,(0),(6),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.sprite_renderer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kami.webgl.sprite_renderer.cljs$lang$applyTo = (function (seq22216){
var G__22217 = cljs.core.first(seq22216);
var seq22216__$1 = cljs.core.next(seq22216);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22217,seq22216__$1);
}));


/**
 * Render a 2D sprite frame on WebGL2: clear, then draw the quad instances (from
 * kami.sprite-gpu/draw-ops->quads) via the sprite pass. The :sprites pass has no kami.gpu
 * :requires, so it runs on this tier; compute passes in a richer graph are dropped by resolve.
 */
kami.webgl.render_2d_BANG_ = (function kami$webgl$render_2d_BANG_(gl,p__22262,quad_instances,p__22263){
var map__22264 = p__22262;
var map__22264__$1 = cljs.core.__destructure_map(map__22264);
var draw_sprites_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,new cljs.core.Keyword(null,"draw-sprites!","draw-sprites!",-408140749));
var clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var vec__22265 = p__22263;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22265,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22265,(1),null);
gl.viewport((0),(0),w,h);

var vec__22268_22585 = (function (){var or__5002__auto__ = clear;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.05,0.08,1.0], null);
}
})();
var r_22586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22268_22585,(0),null);
var g_22587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22268_22585,(1),null);
var b_22588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22268_22585,(2),null);
var a_22589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22268_22585,(3),null);
gl.clearColor(r_22586,g_22587,b_22588,a_22589);

gl.clear(gl.COLOR_BUFFER_BIT);

var G__22272 = quad_instances;
var G__22273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
return (draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2 ? draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2(G__22272,G__22273) : draw_sprites_BANG_.call(null, G__22272,G__22273));
});

kami.webgl.SHADOW_FS = "#version 300 es\nprecision highp float;\nvoid main() {}";

/**
 * Build a whole-2D-frame draw fn from the embedded GLSL: a sky gradient pass (fullscreen triangle)
 * then the instanced sprite/text quad pass. (render! {:sky {:zenith :ground} :quads [...]} [w h])
 * draws the full kami.scene2d frame on the GPU — the Canvas2D draw-2d! replacement.
 */
kami.webgl.scene_renderer = (function kami$webgl$scene_renderer(gl){
var sky_prog = kami.webgl.program(gl,kami.webgl.glsl.sky_vert,kami.webgl.glsl.sky_frag);
var sky_ub = gl.createBuffer();
var sky_blk = gl.getUniformBlockIndex(sky_prog,"SU_block_0Fragment");
var draw_BANG_ = kami.webgl.sprite_renderer(gl);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sky_blk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(sky_prog,sky_blk,(0));
} else {
}

return (function kami$webgl$scene_renderer_$_render_frame_BANG_(p__22277,p__22278){
var map__22279 = p__22277;
var map__22279__$1 = cljs.core.__destructure_map(map__22279);
var sky = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,new cljs.core.Keyword(null,"sky","sky",1271496862));
var quads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,new cljs.core.Keyword(null,"quads","quads",1347497505));
var vec__22280 = p__22278;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280,(1),null);
gl.viewport((0),(0),w,h);

gl.useProgram(sky_prog);

gl.bindBuffer(gl.UNIFORM_BUFFER,sky_ub);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zenith","zenith",1165769957).cljs$core$IFn$_invoke$arity$1(sky),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(sky))))),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),sky_ub);

gl.disable(gl.BLEND);

gl.drawArrays(gl.TRIANGLES,(0),(3));

return draw_BANG_(quads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
});
});

kami.webgl.mesh_vao = (function kami$webgl$mesh_vao(gl,vbuf,ibuf,inst){
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);

var seq__22286_22681 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22287_22682 = null;
var count__22288_22683 = (0);
var i__22289_22684 = (0);
while(true){
if((i__22289_22684 < count__22288_22683)){
var vec__22297_22687 = chunk__22287_22682.cljs$core$IIndexed$_nth$arity$2(null, i__22289_22684);
var loc_22688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22297_22687,(0),null);
var off_22689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22297_22687,(1),null);
gl.enableVertexAttribArray(loc_22688);

gl.vertexAttribPointer(loc_22688,(3),gl.FLOAT,false,(24),off_22689);


var G__22690 = seq__22286_22681;
var G__22691 = chunk__22287_22682;
var G__22692 = count__22288_22683;
var G__22693 = (i__22289_22684 + (1));
seq__22286_22681 = G__22690;
chunk__22287_22682 = G__22691;
count__22288_22683 = G__22692;
i__22289_22684 = G__22693;
continue;
} else {
var temp__5825__auto___22694 = cljs.core.seq(seq__22286_22681);
if(temp__5825__auto___22694){
var seq__22286_22695__$1 = temp__5825__auto___22694;
if(cljs.core.chunked_seq_QMARK_(seq__22286_22695__$1)){
var c__5525__auto___22696 = cljs.core.chunk_first(seq__22286_22695__$1);
var G__22697 = cljs.core.chunk_rest(seq__22286_22695__$1);
var G__22698 = c__5525__auto___22696;
var G__22699 = cljs.core.count(c__5525__auto___22696);
var G__22700 = (0);
seq__22286_22681 = G__22697;
chunk__22287_22682 = G__22698;
count__22288_22683 = G__22699;
i__22289_22684 = G__22700;
continue;
} else {
var vec__22301_22702 = cljs.core.first(seq__22286_22695__$1);
var loc_22703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22301_22702,(0),null);
var off_22704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22301_22702,(1),null);
gl.enableVertexAttribArray(loc_22703);

gl.vertexAttribPointer(loc_22703,(3),gl.FLOAT,false,(24),off_22704);


var G__22705 = cljs.core.next(seq__22286_22695__$1);
var G__22706 = null;
var G__22707 = (0);
var G__22708 = (0);
seq__22286_22681 = G__22705;
chunk__22287_22682 = G__22706;
count__22288_22683 = G__22707;
i__22289_22684 = G__22708;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibuf);

gl.bindBuffer(gl.ARRAY_BUFFER,inst);

var seq__22305_22709 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(80)], null)], null));
var chunk__22306_22710 = null;
var count__22307_22711 = (0);
var i__22308_22712 = (0);
while(true){
if((i__22308_22712 < count__22307_22711)){
var vec__22318_22713 = chunk__22306_22710.cljs$core$IIndexed$_nth$arity$2(null, i__22308_22712);
var loc_22714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22318_22713,(0),null);
var off_22715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22318_22713,(1),null);
gl.enableVertexAttribArray(loc_22714);

gl.vertexAttribPointer(loc_22714,(4),gl.FLOAT,false,(96),off_22715);

gl.vertexAttribDivisor(loc_22714,(1));


var G__22717 = seq__22305_22709;
var G__22718 = chunk__22306_22710;
var G__22719 = count__22307_22711;
var G__22720 = (i__22308_22712 + (1));
seq__22305_22709 = G__22717;
chunk__22306_22710 = G__22718;
count__22307_22711 = G__22719;
i__22308_22712 = G__22720;
continue;
} else {
var temp__5825__auto___22722 = cljs.core.seq(seq__22305_22709);
if(temp__5825__auto___22722){
var seq__22305_22723__$1 = temp__5825__auto___22722;
if(cljs.core.chunked_seq_QMARK_(seq__22305_22723__$1)){
var c__5525__auto___22724 = cljs.core.chunk_first(seq__22305_22723__$1);
var G__22725 = cljs.core.chunk_rest(seq__22305_22723__$1);
var G__22726 = c__5525__auto___22724;
var G__22727 = cljs.core.count(c__5525__auto___22724);
var G__22728 = (0);
seq__22305_22709 = G__22725;
chunk__22306_22710 = G__22726;
count__22307_22711 = G__22727;
i__22308_22712 = G__22728;
continue;
} else {
var vec__22322_22729 = cljs.core.first(seq__22305_22723__$1);
var loc_22730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22322_22729,(0),null);
var off_22731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22322_22729,(1),null);
gl.enableVertexAttribArray(loc_22730);

gl.vertexAttribPointer(loc_22730,(4),gl.FLOAT,false,(96),off_22731);

gl.vertexAttribDivisor(loc_22730,(1));


var G__22732 = cljs.core.next(seq__22305_22723__$1);
var G__22733 = null;
var G__22734 = (0);
var G__22735 = (0);
seq__22305_22709 = G__22732;
chunk__22306_22710 = G__22733;
count__22307_22711 = G__22734;
i__22308_22712 = G__22735;
continue;
}
} else {
}
}
break;
}

gl.bindVertexArray(null);

return vao;
});

kami.webgl.depth_fbo = (function kami$webgl$depth_fbo(gl,size){
var tex = gl.createTexture();
var fbo = gl.createFramebuffer();
gl.bindTexture(gl.TEXTURE_2D,tex);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.DEPTH_COMPONENT32F,size,size,(0),gl.DEPTH_COMPONENT,gl.FLOAT,null);

var seq__22325_22736 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MIN_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MAG_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_MODE,gl.COMPARE_REF_TO_TEXTURE], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_FUNC,gl.LEQUAL], null)], null));
var chunk__22326_22737 = null;
var count__22327_22738 = (0);
var i__22328_22739 = (0);
while(true){
if((i__22328_22739 < count__22327_22738)){
var vec__22337_22742 = chunk__22326_22737.cljs$core$IIndexed$_nth$arity$2(null, i__22328_22739);
var k_22743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22337_22742,(0),null);
var v_22744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22337_22742,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22743,v_22744);


var G__22745 = seq__22325_22736;
var G__22746 = chunk__22326_22737;
var G__22747 = count__22327_22738;
var G__22748 = (i__22328_22739 + (1));
seq__22325_22736 = G__22745;
chunk__22326_22737 = G__22746;
count__22327_22738 = G__22747;
i__22328_22739 = G__22748;
continue;
} else {
var temp__5825__auto___22749 = cljs.core.seq(seq__22325_22736);
if(temp__5825__auto___22749){
var seq__22325_22750__$1 = temp__5825__auto___22749;
if(cljs.core.chunked_seq_QMARK_(seq__22325_22750__$1)){
var c__5525__auto___22751 = cljs.core.chunk_first(seq__22325_22750__$1);
var G__22752 = cljs.core.chunk_rest(seq__22325_22750__$1);
var G__22753 = c__5525__auto___22751;
var G__22754 = cljs.core.count(c__5525__auto___22751);
var G__22755 = (0);
seq__22325_22736 = G__22752;
chunk__22326_22737 = G__22753;
count__22327_22738 = G__22754;
i__22328_22739 = G__22755;
continue;
} else {
var vec__22340_22760 = cljs.core.first(seq__22325_22750__$1);
var k_22761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22340_22760,(0),null);
var v_22762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22340_22760,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22761,v_22762);


var G__22770 = cljs.core.next(seq__22325_22750__$1);
var G__22771 = null;
var G__22772 = (0);
var G__22773 = (0);
seq__22325_22736 = G__22770;
chunk__22326_22737 = G__22771;
count__22327_22738 = G__22772;
i__22328_22739 = G__22773;
continue;
}
} else {
}
}
break;
}

gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);

gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,tex,(0));

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tex","tex",1307057959),tex,new cljs.core.Keyword(null,"fbo","fbo",265702356),fbo,new cljs.core.Keyword(null,"size","size",1098693007),size], null);
});

/**
 * Build the 3D lit+shadow draw for this WebGL2 context. `shaders` {:lit {:vert :frag} :shadow {:vert}}
 * are the GLSL ES 3.00 from bb gen-glsl. Returns (draw! packed-G mesh instances [w h]) where mesh is
 * {:vbuf :ibuf :count}, instances a Float32Array (24 f32/instance) with metadata :count on the map
 * passed as the 3rd-arg wrapper {:buf :count}.
 */
kami.webgl.lit_renderer = (function kami$webgl$lit_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22788 = arguments.length;
var i__5727__auto___22794 = (0);
while(true){
if((i__5727__auto___22794 < len__5726__auto___22788)){
args__5732__auto__.push((arguments[i__5727__auto___22794]));

var G__22795 = (i__5727__auto___22794 + (1));
i__5727__auto___22794 = G__22795;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,shaders,p__22351){
var vec__22352 = p__22351;
var map__22355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22352,(0),null);
var map__22355__$1 = cljs.core.__destructure_map(map__22355);
var shadow_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22355__$1,new cljs.core.Keyword(null,"shadow-size","shadow-size",-1197814709),(2048));
var lit_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"frag","frag",1474317943)], null)));
var shd_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),kami.webgl.SHADOW_FS);
var sm = kami.webgl.depth_fbo(gl,shadow_size);
var gbuf = gl.createBuffer();
var ibuf = gl.createBuffer();
var bind_g = (function (prog,n){
var i = gl.getUniformBlockIndex(prog,n);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,gl.INVALID_INDEX)){
return gl.uniformBlockBinding(prog,i,(0));
} else {
return null;
}
});
bind_g(lit_p,"G_block_0Vertex");

bind_g(lit_p,"G_block_0Fragment");

bind_g(shd_p,"G_block_0Vertex");

return (function kami$webgl$draw_BANG_(packed_G,mesh,instances,p__22364){
var vec__22365 = p__22364;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365,(1),null);
gl.bindBuffer(gl.UNIFORM_BUFFER,gbuf);

gl.bufferData(gl.UNIFORM_BUFFER,packed_G,gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),gbuf);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(instances),gl.DYNAMIC_DRAW);

var vao = kami.webgl.mesh_vao(gl,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(mesh),ibuf);
var n = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(instances);
gl.enable(gl.DEPTH_TEST);

gl.bindFramebuffer(gl.FRAMEBUFFER,new cljs.core.Keyword(null,"fbo","fbo",265702356).cljs$core$IFn$_invoke$arity$1(sm));

gl.viewport((0),(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm));

gl.clear(gl.DEPTH_BUFFER_BIT);

gl.useProgram(shd_p);

gl.bindVertexArray(vao);

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

gl.viewport((0),(0),w,h);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(lit_p);

gl.activeTexture(gl.TEXTURE0);

gl.bindTexture(gl.TEXTURE_2D,new cljs.core.Keyword(null,"tex","tex",1307057959).cljs$core$IFn$_invoke$arity$1(sm));

gl.uniform1i(gl.getUniformLocation(lit_p,"_group_0_binding_1_fs"),(0));

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.lit_renderer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kami.webgl.lit_renderer.cljs$lang$applyTo = (function (seq22343){
var G__22344 = cljs.core.first(seq22343);
var seq22343__$1 = cljs.core.next(seq22343);
var G__22345 = cljs.core.first(seq22343__$1);
var seq22343__$2 = cljs.core.next(seq22343__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22344,G__22345,seq22343__$2);
}));


//# sourceMappingURL=kami.webgl.js.map
