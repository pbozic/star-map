(function(e){function t(t){for(var l,i,c=t[0],r=t[1],s=t[2],f=0,u=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);p&&p(t);while(u.length)u.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],l=!0,i=1;i<o.length;i++){var r=o[i];0!==n[r]&&(l=!1)}l&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var l={},n={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f4d7f8f3"}[e]+".js"}function c(t){if(l[t])return l[t].exports;var o=l[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,l){o=n[e]=[t,l]}));t.push(o[2]=l);var a,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=i(e);var s=new Error;a=function(t){r.onerror=r.onload=null,clearTimeout(f);var o=n[e];if(0!==o){if(o){var l=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+l+": "+a+")",s.name="ChunkLoadError",s.type=l,s.request=a,o[1](s)}n[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:r})}),12e4);r.onerror=r.onload=a,document.head.appendChild(r)}return Promise.all(t)},c.m=e,c.c=l,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(o,l,function(t){return e[t]}.bind(null,l));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var f=0;f<r.length;f++)t(r[f]);var p=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1355:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var l=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],i=(o("5c0b"),o("2877")),c={},r=Object(i["a"])(c,n,a,!1,null,null,null),s=r.exports,f=(o("d3b7"),o("8c4f")),p=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"home"},[l("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),l("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[],d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("div",{attrs:{id:"celestial-map"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.naslov,expression:"naslov"}],attrs:{type:"text"},domProps:{value:e.naslov},on:{input:function(t){t.target.composing||(e.naslov=t.target.value)}}}),o("div",{attrs:{id:"celestial-form"}}),o("a",{attrs:{href:"https://locationiq.com"}},[e._v("Search by LocationIQ.com")])])},m=[],h=(o("96cf"),o("1da1")),b=o("bc3a"),y=o.n(b),g={name:"StarMap",props:{msg:String},data:function(){return{api_key:"pk.4648c2b6ecdd58446110e10f87dcfbd6",naslov:"asd",test:"test",config:{width:1024,projection:"aitoff",transform:"equatorial",zoomlevel:2,geopos:null,form:!0,formFields:{location:!0,general:!0,stars:!0,dsos:!0,constellations:!0,lines:!0,other:!1,download:!1},advanced:!1,daterange:[],controls:!0,lang:"",culture:"",stars:{show:!0,limit:4,colors:!0,style:{fill:"#ffffff",opacity:1},designation:!1,designationType:"desig",designationStyle:{fill:"#ddddbb",font:"11px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",align:"left",baseline:"top"},designationLimit:2.5,propername:!1,propernameType:"name",propernameStyle:{fill:"#ddddbb",font:"13px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",align:"right",baseline:"bottom"},propernameLimit:1.5,size:7,exponent:-.28,data:"stars.6.json"},dsos:{show:!1,limit:6,colors:!0,style:{fill:"#cccccc",stroke:"#cccccc",width:2,opacity:1},names:!0,namesType:"name",nameStyle:{fill:"#cccccc",font:"11px Helvetica, Arial, serif",align:"left",baseline:"top"},nameLimit:6,size:null,exponent:1.4,data:"dsos.bright.json",symbols:{gg:{shape:"circle",fill:"#ff0000"},g:{shape:"ellipse",fill:"#ff0000"},s:{shape:"ellipse",fill:"#ff0000"},s0:{shape:"ellipse",fill:"#ff0000"},sd:{shape:"ellipse",fill:"#ff0000"},e:{shape:"ellipse",fill:"#ff0000"},i:{shape:"ellipse",fill:"#ff0000"},oc:{shape:"circle",fill:"#ffcc00",stroke:"#ffcc00",width:1.5},gc:{shape:"circle",fill:"#ff9900"},en:{shape:"square",fill:"#ff00cc"},bn:{shape:"square",fill:"#ff00cc",stroke:"#ff00cc",width:2},sfr:{shape:"square",fill:"#cc00ff",stroke:"#cc00ff",width:2},rn:{shape:"square",fill:"#00ooff"},pn:{shape:"diamond",fill:"#00cccc"},snr:{shape:"diamond",fill:"#ff00cc"},dn:{shape:"square",fill:"#999999",stroke:"#999999",width:2},pos:{shape:"marker",fill:"#cccccc",stroke:"#cccccc",width:1.5}}},planets:{show:!1,which:["sol","mer","ven","ter","lun","mar","jup","sat","ura","nep"],symbols:{sol:{symbol:"☉",letter:"Su",fill:"#ffff00",size:""},mer:{symbol:"☿",letter:"Me",fill:"#cccccc"},ven:{symbol:"♀",letter:"V",fill:"#eeeecc"},ter:{symbol:"⊕",letter:"T",fill:"#00ccff"},lun:{symbol:"●",letter:"L",fill:"#ffffff",size:""},mar:{symbol:"♂",letter:"Ma",fill:"#ff6600"},cer:{symbol:"⚳",letter:"C",fill:"#cccccc"},ves:{symbol:"⚶",letter:"Ma",fill:"#cccccc"},jup:{symbol:"♃",letter:"J",fill:"#ffaa33"},sat:{symbol:"♄",letter:"Sa",fill:"#ffdd66"},ura:{symbol:"♅",letter:"U",fill:"#66ccff"},nep:{symbol:"♆",letter:"N",fill:"#6666ff"},plu:{symbol:"♇",letter:"P",fill:"#aaaaaa"},eri:{symbol:"⚪",letter:"E",fill:"#eeeeee"}},symbolStyle:{fill:"#00ccff",font:"bold 17px 'Lucida Sans Unicode', Consolas, sans-serif",align:"center",baseline:"middle"},symbolType:"symbol",names:!1,nameStyle:{fill:"#00ccff",font:"14px 'Lucida Sans Unicode', Consolas, sans-serif",align:"right",baseline:"top"},namesType:"desig"},constellations:{names:!1,namesType:"iau",nameStyle:{fill:"#cccc99",align:"center",baseline:"middle",font:["14px Helvetica, Arial, sans-serif","12px Helvetica, Arial, sans-serif","11px Helvetica, Arial, sans-serif"]},lines:!0,lineStyle:{stroke:"#cccccc",width:1,opacity:.6},bounds:!1,boundStyle:{stroke:"#cccc00",width:.5,opacity:.8,dash:[2,4]}},mw:{show:!1,style:{fill:"#ffffff",opacity:.15}},lines:{graticule:{show:!1,stroke:"#cccccc",width:.6,opacity:.8,lon:{pos:[""],fill:"#eee",font:"10px Helvetica, Arial, sans-serif"},lat:{pos:[""],fill:"#eee",font:"10px Helvetica, Arial, sans-serif"}},equatorial:{show:!1,stroke:"#aaaaaa",width:1.3,opacity:.7},ecliptic:{show:!1,stroke:"#66cc66",width:1.3,opacity:.7},galactic:{show:!1,stroke:"#cc6666",width:1.3,opacity:.7},supergalactic:{show:!1,stroke:"#cc66cc",width:1.3,opacity:.7}},background:{fill:"#000000",opacity:1,stroke:"#000000",width:1.5},horizon:{show:!1,stroke:"#cccccc",width:1,fill:"#000000",opacity:.5},daylight:{show:!1}}}},methods:{getLocation:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=".concat(e.naslov,"&format=json"));case 2:o=t.sent,e.config.geopos=[o.lat,o.lon];case 4:case"end":return t.stop()}}),t)})))()}},watch:{naslov:function(e){this.getLocation()},config:{deep:!0,handler:function(){Celestial.display(this.config)}}},mounted:function(){Celestial.display(this.config)}},v=g,w=(o("7d5b"),Object(i["a"])(v,d,m,!1,null,null,null)),k=w.exports,x={name:"Home",components:{HelloWorld:k}},j=x,S=Object(i["a"])(j,p,u,!1,null,null,null),T=S.exports;l["a"].use(f["a"]);var O=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],_=new f["a"]({mode:"history",base:"/",routes:O}),L=_;l["a"].config.productionTip=!1,new l["a"]({router:L,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var l=o("9c0c"),n=o.n(l);n.a},"7d5b":function(e,t,o){"use strict";var l=o("1355"),n=o.n(l);n.a},"9c0c":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.cfc1d95c.js.map