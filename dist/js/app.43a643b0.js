(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fb64ca12"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}o[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01d9":function(e,t,a){},"10cf":function(e,t,a){},1511:function(e,t,a){},2728:function(e,t,a){"use strict";var n=a("1511"),o=a.n(n);o.a},"3f84":function(e,t,a){"use strict";var n=a("10cf"),o=a.n(n);o.a},"4c6a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("5c0b"),a("2877")),r={},l=Object(s["a"])(r,o,i,!1,null,null,null),c=l.exports,u=(a("d3b7"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"}),a("div",{staticClass:"col"},[a("StarMap",{attrs:{font1:e.font1,font2:e.font2,text1:e.text1,text2:e.text2,dateText:e.dateText,extra_design:e.extra_design,selected_type:e.selected_type,color:e.selected_color}})],1),a("div",{staticClass:"col-sm-3"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("ul",{staticClass:"nav nav-tabs nav-justified",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{class:["nav-link",{active:"trenutek"===e.selected_tab}],attrs:{id:"trenutek-tab"},on:{click:function(e){return e.preventDefault()}}},[e._v("1. Izberi Trenutek")])]),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{class:["nav-link",{active:"posvetilo"===e.selected_tab}],attrs:{id:"posvetilo-tab"},on:{click:function(e){return e.preventDefault()}}},[e._v("2. Vpiši posvetilo")])]),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{class:["nav-link",{active:"izgled"===e.selected_tab||"izgled2"===e.selected_tab}],attrs:{id:"izgled-tab"},on:{click:function(e){return e.preventDefault()}}},[e._v("3. Izberi Izgled")])])]),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{class:["tab-pane fade",{"show active":"trenutek"===e.selected_tab}],attrs:{id:"trenutek",role:"tabpanel","aria-labelledby":"trenutek-tab"}},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-9"},[a("br"),a("label",{attrs:{for:"location"}},[e._v("Vpiši kraj posebnega trenutka")]),a("br"),a("div",{staticClass:"location"},[a("autocomplete",{attrs:{search:e.search,debounceTime:500},on:{model:e.naslov,submit:e.submit}}),a("div",{staticClass:"err"},[e._v(" "+e._s(e.errorMsg)+" ")])],1)])]),a("br"),a("label",{attrs:{for:"datum"}},[e._v("Vpiši datum posebnega trenutka")]),a("div",{staticClass:"datum1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Dan"},domProps:{value:e.day},on:{input:function(t){t.target.composing||(e.day=t.target.value)}}})]),a("div",{staticClass:"col-sm-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Januar"}},[e._v("Januar")]),a("option",{attrs:{value:"Februar"}},[e._v("Februar")]),a("option",{attrs:{value:"Marec"}},[e._v("Marec")]),a("option",{attrs:{value:"April"}},[e._v("April")]),a("option",{attrs:{value:"Junij"}},[e._v("Junij")]),a("option",{attrs:{value:"Julij"}},[e._v("Julij")]),a("option",{attrs:{value:"Avgust"}},[e._v("Avgust")]),a("option",{attrs:{value:"September"}},[e._v("September")]),a("option",{attrs:{value:"Oktober"}},[e._v("Oktober")]),a("option",{attrs:{value:"Novmeber"}},[e._v("Novmeber")]),a("option",{attrs:{value:"December"}},[e._v("December")])])]),a("div",{staticClass:"col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Leto"},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}})])])]),a("br"),e._m(1),a("div",{staticClass:"datum1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],staticClass:"form-control",attrs:{type:"time",placeholder:"Ura"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}})])])]),a("br"),a("br"),a("div",{staticClass:"controlls"},[a("button",{class:["next-button",{disabled:null==this.location},"float-right"],on:{click:function(t){return e.nextTab("posvetilo")}}},[e._v("Nadaljuj")])]),a("br"),a("br"),a("a",{attrs:{href:"https://locationiq.com"}},[e._v("Search by LocationIQ.com")])]),a("div",{class:["tab-pane fade",{"show active":"posvetilo"===e.selected_tab}],attrs:{id:"posvetilo",role:"tabpanel","aria-labelledby":"posvetilo-tab"}},[e._m(2),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("label",{attrs:{for:""}},[e._v("Dodaj napis/posvetilo 1")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.text1,expression:"text1"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Posvetilo 1"},domProps:{value:e.text1},on:{input:function(t){t.target.composing||(e.text1=t.target.value)}}})])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("label",{attrs:{for:""}},[e._v("Pisava napis/posvetilo 1")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.font1,expression:"font1"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.font1=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Arial"}},[e._v("Font1")]),a("option",{attrs:{value:"Helevetica"}},[e._v("Font2")]),a("option",{attrs:{value:"sans-serif"}},[e._v("Font3")]),a("option",{attrs:{value:"Times New Roman"}},[e._v("Font4")])])])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("label",{attrs:{for:""}},[e._v("Dodaj napis/posvetilo 2 (ni obvezno)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.text2,expression:"text2"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Posvetilo 2"},domProps:{value:e.text2},on:{input:function(t){t.target.composing||(e.text2=t.target.value)}}})])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("label",{attrs:{for:""}},[e._v("Pisava napis/posvetilo 2")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.font2,expression:"font2"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.font2=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Arial"}},[e._v("Font1")]),a("option",{attrs:{value:"Helevetica"}},[e._v("Font2")]),a("option",{attrs:{value:"sans-serif"}},[e._v("Font3")]),a("option",{attrs:{value:"Times New Roman"}},[e._v("Font5")])])])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("label",{attrs:{for:"coment"}},[e._v("Komentar")]),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],attrs:{name:"coment",id:"coment",rows:"3"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})])]),a("br"),a("br"),a("div",{staticClass:"controlls"},[a("button",{class:["next-button","float-left"],on:{click:function(t){return e.nextTab("trenutek")}}},[e._v("Nazaj")]),a("button",{class:["next-button",{disabled:null==this.location},"float-right"],on:{click:function(t){return e.nextTab("izgled")}}},[e._v("Nadaljuj")])])]),a("div",{class:["tab-pane fade",{"show active":"izgled"===e.selected_tab}],attrs:{id:"izgled",role:"tabpanel","aria-labelledby":"izgled-tab"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:null==e.selected_product,expression:"selected_product == null"}],staticClass:"row"},[e._m(3)]),a("div",{directives:[{name:"show",rawName:"v-show",value:null==e.selected_product,expression:"selected_product == null"}],staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},e._l(e.products,(function(t){return a("div",{key:t.id,class:{"col-3 vrsta":!0,active:!!e.selected_product&&e.selected_product.id===t.id},on:{click:function(a){return e.selectProduct(t)}}},[a("img",{attrs:{src:t.selectedImage,alt:""}}),a("div",{staticClass:"overlay"},[a("span",[e._v(e._s(t.title))])])])})),0)])]),null!=e.selected_product?a("div",{staticClass:"row"},[e._m(4)]):e._e(),null!=e.selected_product?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},e._l(e.selected_product_variations.colors,(function(t){return a("div",{key:t,class:{"col-3 barva":!0,active:e.selected_color===t},on:{click:function(a){e.selected_product_varaint=e.selected_product_variations.map[t],e.selected_color=t}}},[a("img",{attrs:{src:e.selected_product_variations.map[t].image,alt:""}}),a("div",{staticClass:"overlay"},[a("span",[e._v(e._s(t))])])])})),0),"Umetniška zvezdna mapa"==e.selected_product.title||"Razlita zvezdna mapa"==e.selected_product.title?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"h4"},[e._v("Detajli")]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.extra_design,expression:"extra_design"}],staticClass:"form-check-input",attrs:{type:"radio",value:"krog",id:"krog"},domProps:{checked:e._q(e.extra_design,"krog")},on:{change:function(t){e.extra_design="krog"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"krog"}},[e._v("Krog")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.extra_design,expression:"extra_design"}],staticClass:"form-check-input",attrs:{type:"radio",value:"krog2",id:"krog2"},domProps:{checked:e._q(e.extra_design,"krog2")},on:{change:function(t){e.extra_design="krog2"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"krog2"}},[e._v("Dva kroga")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.extra_design,expression:"extra_design"}],staticClass:"form-check-input",attrs:{type:"radio",value:"kvadrat",id:"kvadrat"},domProps:{checked:e._q(e.extra_design,"kvadrat")},on:{change:function(t){e.extra_design="kvadrat"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"kvadrat"}},[e._v("Kvadrat")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.extra_design,expression:"extra_design"}],staticClass:"form-check-input",attrs:{type:"radio",value:"none",id:"none"},domProps:{checked:e._q(e.extra_design,"none")},on:{change:function(t){e.extra_design="none"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"none"}},[e._v("Brez")])])])]):e._e(),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("h4",{staticClass:"h4"},[e._v("Velikost")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected_size,expression:"selected_size"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected_size=t.target.multiple?a:a[0]}}},[a("option",{attrs:{hidden:"",disabled:"",selected:"",value:""}},[e._v("Izberi velikost")]),e._l(e.selected_product_variations.sizes,(function(t,n){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)])])])]):e._e(),a("br"),e._v(" "+e._s(e.example_text)+" "),a("br"),a("div",{staticClass:"controlls"},[a("button",{class:["next-button","float-left"],on:{click:function(t){null==e.selected_product?e.nextTab("posvetilo"):e.selected_product=null}}},[e._v("Nazaj")]),a("button",{class:["next-button","float-right"],on:{click:function(t){return e.getSelectedProductVariant()}}},[e._v("Poglej Ceno")])])])]),a("div",{staticClass:"tabs"})])])])])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"h1 text-center"},[e._v("KRAJ IN DATUM")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"datum"}},[e._v("Vpiši uro posebnega trenutka "),a("b",{staticClass:"important"},[e._v("(ni obvezno)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"h1 text-center"},[e._v("POSVETILA")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("h1",{staticClass:"h1 text-center"},[e._v("STIL")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("h1",{staticClass:"h1 text-center"},[e._v("IZGLED")])])}],p=(a("99af"),a("4de4"),a("caad"),a("d81d"),a("ac1f"),a("6062"),a("2532"),a("3ca3"),a("1276"),a("2ca0"),a("ddb0"),a("2909")),v=a("b85c"),m=(a("96cf"),a("1da1")),h=function(){var e,t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"okvir"},[n("div",{class:(e={"star-map":!0},e[t.selected_type]=!0,e[t.color_mapped]=!0,e)},[n("div",{class:{circle:"krog"==t.extra_design,circle2:"krog2"==t.extra_design,square:"kvadrat"==t.extra_design}}),n("div",{class:{map:!0,circle:"krog"==t.extra_design,circle2:"krog2"==t.extra_design,square:"kvadrat"==t.extra_design}},[n("div",{attrs:{id:"celestial-map"}})]),n("div",{staticClass:"text-area"},[n("div",{directives:[{name:"resize-text",rawName:"v-resize-text"}],ref:"posvetilo",staticClass:"text",style:{"font-family":t.font1||"Quattrocento Sans"}},[t._v(" "+t._s(t.text1||"Primer posvetilo 1")+" ")]),n("div",{directives:[{name:"resize-text",rawName:"v-resize-text"}],ref:"malo",staticClass:"text",style:{"font-family":t.font2||"Quattrocento Sans"}},[t._v(" "+t._s(t.text2)+" ")]),n("div",{staticClass:"datum"},[t._v(" "+t._s(t.dateText||"Kraj, 01.01.2020")+" ")])])])])},g=[],b=(a("cb29"),{name:"StarMap",props:{text1:String,text2:String,font1:String,font2:String,dateText:String,extra_design:String,selected_type:String,color:String},data:function(){return{api_key:"pk.4648c2b6ecdd58446110e10f87dcfbd6",naslov:"Ulica Bratov Učakar 84",test:"test",font_size1:"50px",font_size2:"50px",canvas:null,color_mapped:"normal",config:{width:0,projection:"azimuthalEqualArea",transform:"equatorial",zoomlevel:1,geopos:null,form:!1,formFields:{location:!1,general:!1,stars:!1,dsos:!1,constellations:!1,lines:!1,other:!1,download:!1},advanced:!1,daterange:[],controls:!1,lang:"",interactive:!0,culture:"",stars:{show:!0,limit:4,colors:!0,style:{fill:"#ffffff",opacity:1},designation:!1,designationType:"desig",designationStyle:{fill:"#ddddbb",font:"11px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",align:"left",baseline:"top"},designationLimit:2.5,propername:!1,propernameType:"name",propernameStyle:{fill:"#ddddbb",font:"13px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",align:"right",baseline:"bottom"},propernameLimit:1.5,size:5,exponent:-.28,data:"stars.6.json"},dsos:{show:!1,limit:6,colors:!0,style:{fill:"#cccccc",stroke:"#cccccc",width:2,opacity:1},names:!0,namesType:"name",nameStyle:{fill:"#cccccc",font:"11px Helvetica, Arial, serif",align:"left",baseline:"top"},nameLimit:6,size:null,exponent:1.4,data:"dsos.bright.json",symbols:{gg:{shape:"circle",fill:"#ff0000"},g:{shape:"ellipse",fill:"#ff0000"},s:{shape:"ellipse",fill:"#ff0000"},s0:{shape:"ellipse",fill:"#ff0000"},sd:{shape:"ellipse",fill:"#ff0000"},e:{shape:"ellipse",fill:"#ff0000"},i:{shape:"ellipse",fill:"#ff0000"},oc:{shape:"circle",fill:"#ffcc00",stroke:"#ffcc00",width:1.5},gc:{shape:"circle",fill:"#ff9900"},en:{shape:"square",fill:"#ff00cc"},bn:{shape:"square",fill:"#ff00cc",stroke:"#ff00cc",width:2},sfr:{shape:"square",fill:"#cc00ff",stroke:"#cc00ff",width:2},rn:{shape:"square",fill:"#00ooff"},pn:{shape:"diamond",fill:"#00cccc"},snr:{shape:"diamond",fill:"#ff00cc"},dn:{shape:"square",fill:"#999999",stroke:"#999999",width:2},pos:{shape:"marker",fill:"#cccccc",stroke:"#cccccc",width:1.5}}},planets:{show:!1,which:["sol","mer","ven","ter","lun","mar","jup","sat","ura","nep"],symbols:{sol:{symbol:"☉",letter:"Su",fill:"#ffff00",size:""},mer:{symbol:"☿",letter:"Me",fill:"#cccccc"},ven:{symbol:"♀",letter:"V",fill:"#eeeecc"},ter:{symbol:"⊕",letter:"T",fill:"#00ccff"},lun:{symbol:"●",letter:"L",fill:"#ffffff",size:""},mar:{symbol:"♂",letter:"Ma",fill:"#ff6600"},cer:{symbol:"⚳",letter:"C",fill:"#cccccc"},ves:{symbol:"⚶",letter:"Ma",fill:"#cccccc"},jup:{symbol:"♃",letter:"J",fill:"#ffaa33"},sat:{symbol:"♄",letter:"Sa",fill:"#ffdd66"},ura:{symbol:"♅",letter:"U",fill:"#66ccff"},nep:{symbol:"♆",letter:"N",fill:"#6666ff"},plu:{symbol:"♇",letter:"P",fill:"#aaaaaa"},eri:{symbol:"⚪",letter:"E",fill:"#eeeeee"}},symbolStyle:{fill:"#00ccff",font:"bold 17px 'Lucida Sans Unicode', Consolas, sans-serif",align:"center",baseline:"middle"},symbolType:"symbol",names:!1,nameStyle:{fill:"#00ccff",font:"14px 'Lucida Sans Unicode', Consolas, sans-serif",align:"right",baseline:"top"},namesType:"desig"},constellations:{names:!1,namesType:"iau",nameStyle:{fill:"#cccc99",align:"center",baseline:"middle",font:["14px Helvetica, Arial, sans-serif","12px Helvetica, Arial, sans-serif","11px Helvetica, Arial, sans-serif"]},lines:!0,lineStyle:{stroke:"#cccccc",width:1,opacity:.6},bounds:!1,boundStyle:{stroke:"#cccc00",width:.5,opacity:.8,dash:[2,4]}},mw:{show:!1,style:{fill:"#ffffff",opacity:.15}},lines:{graticule:{show:!1,stroke:"#cccccc",width:.6,opacity:.8,lon:{pos:[""],fill:"#eee",font:"10px Helvetica, Arial, sans-serif"},lat:{pos:[""],fill:"#eee",font:"10px Helvetica, Arial, sans-serif"}},equatorial:{show:!1,stroke:"#aaaaaa",width:1.3,opacity:.7},ecliptic:{show:!1,stroke:"#66cc66",width:1.3,opacity:.7},galactic:{show:!1,stroke:"#cc6666",width:1.3,opacity:.7},supergalactic:{show:!1,stroke:"#cc66cc",width:1.3,opacity:.7}},background:{fill:"#000000",opacity:1,stroke:"#000000",width:1.5},horizon:{show:!1,stroke:"#cccccc",width:1,fill:"#000000",opacity:.5},daylight:{show:!1}}}},methods:{getTextWidth:function(e,t){this.canvas=this.canvas||(this.canvas=document.createElement("canvas"));var a=this.canvas.getContext("2d");a.font=t;var n=a.measureText(e);return n.width}},watch:{text1:function(e){var t=1,a=64;while(1==t){var n=this.$refs.posvetilo;n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth?(n.style.fontSize=parseInt(a)+"px",a--):t=0}},text2:function(e){var t=1,a=64;while(1==t){var n=this.$refs.malo;n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth?(n.style.fontSize=parseInt(a)+"px",a--):t=0}console.log(a)},color:{handler:function(){console.log("c",this.color),this.color.includes("SENČENA")&&(this.config.background.fill="#454955",this.config.background.stroke="#ffffff",this.color_mapped="lead_grey"),this.color.includes("ČRNA")&&(this.config.background.fill="#000000",this.config.background.stroke="#ffffff",this.color_mapped="black"),this.color.includes("BELA")&&(this.config.background.fill="#000000",this.config.background.stroke="#000000",this.color_mapped="normal"),Celestial.apply(this.config)}}},mounted:function(){var e=this;this.$nextTick((function(){})),setTimeout((function(){Celestial.display(e.config)}),1e3)},components:{}}),y=b,_=(a("e45f"),a("3f84"),Object(s["a"])(y,h,g,!1,null,"472bbcba",null)),k=_.exports,x=(a("a4d3"),a("e01a"),a("b680"),a("5319"),a("d4ec")),C=a("bee2"),w=a("bc3a"),P=a.n(w),I=(a("4d63"),a("25f0")," {\n    shop {\n    collections(first:20) {\n      edges{\n        node {\n          id\n          handle\n          title\n        }\n      }\n    }\n  }\n  }"),S='query {\n  shop {\n    name\n    description\n    collectionByHandle(handle: "$collectionHandle") {\n      products(first:20) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            id\n            title\n            description\n            availableForSale\n            options {\n              name\n              values\n            }\n            variants(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  title\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    src\n                  }\n                  price\n                }\n              }\n            }\n            images(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  src\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  }',T="query {\n    shop {\n      name\n      description\n      products(first:20) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            id\n            title\n            description\n            availableForSale\n            options {\n              name\n              values\n            }\n            variants(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  title\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    src\n                  }\n                  price\n                }\n              }\n            }\n            images(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  src\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }",j="mutation {\n    checkoutCreate(input: {}) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        id\n      }\n    }\n  }",q='mutation {\n    checkoutLineItemsAdd(lineItems: [{ variantId: "$variantId", quantity: 1 }], checkoutId: "$checkoutId") {,\n      checkout {\n         id\n         lineItems(first:2) {\n           edges {\n             node {\n               id\n               title\n               quantity\n             }\n           }\n         }\n      }\n    }\n  }',z='query {\n    node(id: "$productId") {\n      id\n      ... on Product {\n        id\n        title\n        description\n        options {\n          name\n          values\n        }\n        variants(first: 250) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          edges {\n            node {\n              id\n              title\n              availableForSale\n              selectedOptions {\n                name\n                value\n              }\n              image {\n                src\n              }\n              price\n            }\n          }\n        }\n        images(first: 250) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          edges {\n            node {\n              src\n            }\n          }\n        }\n      }\n    }\n  }',A='{\n  node(id: "$checkoutId") {\n    ... on Checkout {\n      webUrl\n      subtotalPrice\n      totalTax\n      totalPrice\n      lineItems (first:250) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            id\n            title\n            variant {\n              id\n              title\n              image {\n                src\n              }\n              price\n            }\n            quantity\n          }\n        }\n      }\n    }\n  }\n  }\n  ',O='mutation {\n  checkoutLineItemsRemove(lineItemIds: [$lineItemId], checkoutId: "$checkoutId") {,\n    userErrors {\n      message\n      field\n    }\n    checkout {\n      id\n    }\n  }\n  }',N=' mutation  {\n  checkoutLineItemsUpdate(checkoutId: "$checkoutId", lineItems: [{ id: "$lineItemId", variantId: "$variantId", quantity: $quantity }]) {\n    userErrors {\n      message\n      field\n    }\n    checkout {\n      id\n    }\n  }\n  }',$=function(){function e(){Object(x["a"])(this,e)}return Object(C["a"])(e,[{key:"construct",value:function(){}},{key:"replaceAll",value:function(e,t,a){return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g"),a)}},{key:"allProductsQuery",value:function(){return T}},{key:"productsFromCollectionQuery",value:function(e){var t=S;return t=this.replaceAll(t,"$collectionHandle",e),t}},{key:"addToCartQuery",value:function(e,t){var a=q;return a=this.replaceAll(a,"$variantId",e),a=this.replaceAll(a,"$checkoutId",t),a}},{key:"createCheckoutIdQuery",value:function(){return j}},{key:"productDetailsQuery",value:function(e){var t=z;return t=this.replaceAll(t,"$productId",e),t}},{key:"cartQuery",value:function(e){var t=A;return t=this.replaceAll(t,"$checkoutId",e),t}},{key:"removeFromCartQuery",value:function(e,t){var a=O;return a=this.replaceAll(a,"$lineItemId",e),a=this.replaceAll(a,"$checkoutId",t),a}},{key:"updateQuantityQuery",value:function(e,t,a,n){var o=N;return o=this.replaceAll(o,"$lineItemId",e),o=this.replaceAll(o,"$variantId",t),o=this.replaceAll(o,"$quantity",a),o=this.replaceAll(o,"$checkoutId",n),o}},{key:"allCollectionsQuery",value:function(){return I}}]),e}(),F=function(){function e(t,a){Object(x["a"])(this,e),this.shopifyDomain=t,this.shopifyToken=a,this.graphSql=new $}return Object(C["a"])(e,[{key:"query",value:function(e,t,a){var n={headers:{"X-Shopify-Storefront-Access-Token":this.shopifyToken,"content-Type":"application/graphql"}};P.a.post("https://"+this.shopifyDomain+"/api/graphql",e,n).then((function(e){t(e)})).catch((function(e){console.log("Error",e),a(e)}))}},{key:"createCheckoutId",value:function(e,t){var a=this.graphSql.createCheckoutIdQuery();this.query(a,(function(t){console.log(t);var a=t.data.data.checkoutCreate.checkout.id;e(a)}),(function(e){t(e)}))}},{key:"getCart",value:function(e,t,a){var n=this,o=this.graphSql.cartQuery(e);this.query(o,(function(e){console.log("success",e);var a,o=e.data.data.node.lineItems.edges,i=[],s=0,r=0,l=Object(v["a"])(o);try{for(l.s();!(a=l.n()).done;){var c=a.value;console.log("lineitem:",c);var u=parseFloat(c.node.variant.price)*parseInt(c.node.quantity),d=c.node.variant.image.src,f={id:c.node.id,variantId:c.node.variant.id,title:c.node.title,quantity:c.node.quantity,image:d,price:n._formatCurrency(c.node.variant.price),variantTitle:n._shortenVariantTitle(c.node.variant.title),description:c.node.description,totalPrice:n._formatCurrency(u)};s+=parseInt(c.node.quantity),r+=u,i.push(f)}}catch(m){l.e(m)}finally{l.f()}var p={count:s,lineItems:i,totalPrice:n._formatCurrency(r),checkoutUrl:e.data.data.node.webUrl};t(p)}),(function(e){a(e)}))}},{key:"removeFromCart",value:function(e,t,a,n){var o=this.graphSql.removeFromCartQuery(e,t);this.query(o,(function(e){a(e)}),(function(e){n(e)}))}},{key:"updateQuantity",value:function(e,t,a,n,o,i){var s=this.graphSql.updateQuantityQuery(e,t,a,n);this.query(s,(function(e){o(e)}),(function(e){i(e)}))}},{key:"_normalizeProduct",value:function(e){var t,a=[],n=Object(v["a"])(e.node.images.edges);try{for(n.s();!(t=n.n()).done;){var o=t.value;a.push(o.node.src)}}catch(f){n.e(f)}finally{n.f()}var i,s=[],r=Object(v["a"])(e.node.variants.edges);try{for(r.s();!(i=r.n()).done;){var l=i.value,c={id:l.node.id,image:l.node.image.src,price:l.node.price,title:this._shortenVariantTitle(l.node.title),availableForSale:l.node.availableForSale};s.push(c)}}catch(f){r.e(f)}finally{r.f()}var u=e.price?e.price:s[0].price;u=u.replace(".00","");var d={id:e.node.id,description:""!=e.node.description?e.node.description:null,title:e.node.title,price:u,images:a,selectedImage:a[0],variants:s,availableForSale:e.node.availableForSale};return d}},{key:"_formatCurrency",value:function(e){return parseFloat(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}},{key:"_shortenVariantTitle",value:function(e){switch(e=e.toUpperCase(),e){case"SMALL":return"S";case"MEDIUM":return"M";case"LARGE":return"L";case"X-LARGE":return"XL";case"XX-LARGE":return"XXL"}return e}},{key:"allProducts",value:function(e,t){var a=this,n=this.graphSql.allProductsQuery();this.query(n,(function(t){var n,o=t.data.data.shop.products.edges,i=[],s=Object(v["a"])(o);try{for(s.s();!(n=s.n()).done;){var r=n.value,l=a._normalizeProduct(r);i.push(l)}}catch(c){s.e(c)}finally{s.f()}e(i)}),(function(e){t(e)}))}},{key:"productsFromCollection",value:function(e,t,a){var n=this,o=this.graphSql.productsFromCollectionQuery(e);this.query(o,(function(e){var a,o=e.data.data.shop.collectionByHandle.products.edges,i=[],s=Object(v["a"])(o);try{for(s.s();!(a=s.n()).done;){var r=a.value,l=n._normalizeProduct(r);i.push(l)}}catch(c){s.e(c)}finally{s.f()}t(i)}),(function(e){a(e)}))}},{key:"productDetails",value:function(e,t,a){var n=this,o=this.graphSql.productDetailsQuery(e);this.query(o,(function(e){console.log("PRODUCT DETAIL",e);var a=n._normalizeProduct(e.data.data);t(a)}),(function(e){a(e)}))}},{key:"addToCart",value:function(e,t,a,n){var o=this.graphSql.addToCartQuery(e,t);this.query(o,(function(e){a(e)}),(function(e){n(e)}))}}]),e}(),L={shopifyDomain:"ndesign-studio.myshopify.com",shopifyToken:"94913f2baa80093ab16b3bd53a0778f6",collectionHandle:null,localStorageKey:"vue-shopify",showUnavailableProducts:!0,productListColumns:3,productListColumnsMobile:1,loadingColor:"#41b883",googleAnalyticsId:null},D={name:"Home",data:function(){return{selected_tab:"trenutek",api_key:"pk.4648c2b6ecdd58446110e10f87dcfbd6",naslov:"Ulica Bratov Učakar 84",test:"test",day:1,month:"Januar",location:null,location_name:null,year:2020,hour:12,minute:"00",time:"12:00",text1:null,text2:null,font1:null,font2:null,dateText:"",errorMsg:null,products:null,selected_product:null,selected_product_variations:null,extra_design:"krog",comment:"",selected_color:"",selected_size:"",example_text:"",selected_type:"normal"}},components:{StarMap:k},methods:{getLocation:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=".concat(e.naslov,"&format=json"));case 2:a=t.sent,console.log(a.data),e.location=[a.data[0].lat,a.data[0].lon],e.location_name=a.data[0].display_name;case 6:case"end":return t.stop()}}),t)})))()},getAutocomplete:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=".concat(e.naslov,"&format=json"));case 2:a=t.sent,e.autocomplete=a.data;case 4:case"end":return t.stop()}}),t)})))()},search:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=".concat(e,"&format=json"));case 2:return a=t.sent,t.abrupt("return",a.data.map((function(e){return e.display_name})));case 4:case"end":return t.stop()}}),t)})))()},submit:function(e){this.naslov=e,this.getLocation()},getFontSize:function(e){e.length},nextTab:function(e){if(e.startsWith("posvetilo")){if(null==this.location)return void(this.errorMsg="Izberi lokacijo!");this.errorMsg="",Celestial.location(this.location),Celestial.date(this.getDate()),this.dateText=this.getDateLocationText()}this.selected_tab=e,window.scrollTo({top:0,left:0,behavior:"smooth"})},getSelectedProductVariant:function(){var e,t=this.selected_product,a=null,n=Object(v["a"])(t.variants);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.title==="".concat(this.selected_size," / ").concat(this.selected_color)&&(a=o)}}catch(i){n.e(i)}finally{n.f()}return console.log(a),this.example_text=a.price+" "+t.title+" - "+a.title+" ("+a.id+")",a},getDate:function(){var e=new Date(this.day+", "+this.month+" "+this.year+" "+this.time);return console.log(e),e},getDateLocationText:function(){var e=this.location_name.split(",")[0],t=this.getDate(),a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),n=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(t),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return console.log("".concat(o,"-").concat(n,"-").concat(a)),"".concat(e,", ").concat(o,".").concat(n,".").concat(a)},selectProduct:function(e){this.selected_product=e,this.selected_type=e.title.includes("Umetniška")||e.title.includes("Razlita")?"extra":"normal",this.getVariantMap(e)},getVariantMap:function(e){var t,a=e.variants,n=[],o=[],i={},s=Object(v["a"])(a);try{for(s.s();!(t=s.n()).done;){var r=t.value;console.log("v",r);var l=r.title,c=l.split(" / ");o.push(c[0]),n.push(c[1]),null==i[c[1]]&&(i[c[1]]=r)}}catch(u){s.e(u)}finally{s.f()}console.log("map",{colors:Object(p["a"])(new Set(n)),sizes:Object(p["a"])(new Set(o)),map:i}),this.selected_product_variations={colors:Object(p["a"])(new Set(n)),sizes:Object(p["a"])(new Set(o)),map:i}}},computed:{dateObj:{cache:!1,get:function(){}}},watch:{naslov:function(e){this.getLocation()},config:{deep:!0,handler:function(){}}},mounted:function(){var e=this;this.shopifyClient=new F(L.shopifyDomain,L.shopifyToken),this.shopifyClient.allProducts((function(t){t=t.filter((function(e){return e.availableForSale})),e.products=t.filter((function(e){return"Mapa mesta"!=e.title&&("Astrološko znamenje"!=e.title&&("Jungle friends"!=e.title&&"Dvojna zvezdna mapa"!=e.title))})),console.log(e.products),e.$emit("hide-loader")}),(function(e){return console.log(e)})),this.shopifyClient.createCheckoutId((function(t){e.checkoutId=t}),(function(e){return console.log(e)}))}},E=D,M=(a("2728"),a("5df9"),Object(s["a"])(E,d,f,!1,null,"b72efb92",null)),Q=M.exports;n["default"].use(u["a"]);var R=[{path:"/",name:"Order",component:Q},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],U=new u["a"]({mode:"history",base:"/",routes:R}),H=U,V=a("95bf"),J=(a("8b78"),a("5f5b")),X=a("b1e0"),B=a("d3a2"),G=a.n(B);a("7361");n["default"].config.productionTip=!1,n["default"].use(J["a"]),n["default"].use(X["a"]),n["default"].use(V["a"]),n["default"].use(G.a),new n["default"]({router:H,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"5df9":function(e,t,a){"use strict";var n=a("4c6a"),o=a.n(n);o.a},7361:function(e,t,a){},"9c0c":function(e,t,a){},e45f:function(e,t,a){"use strict";var n=a("01d9"),o=a.n(n);o.a}});
//# sourceMappingURL=app.43a643b0.js.map