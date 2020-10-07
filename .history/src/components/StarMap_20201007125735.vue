<template>
  <div class="okvir">
    <div :class="{'star-map': true, [selected_type]: true, [color_mapped]: true, smallFont: smallFont}">
      <div :class='{"circle": extra_design == "krog", "circle2": extra_design == "krog2", "square": extra_design == "kvadrat"}'>
      </div>
      <div :class='{"map": true, "circle": extra_design == "krog", "circle2": extra_design == "krog2", "square": extra_design == "kvadrat"}'>
       
        <div id="celestial-map" v-show="selected_type === 'normal'"></div>
        <img src="../assets/images/design.png" alt="" v-show="selected_type === 'extra'" class="fancy">
        <img :src="genereatedConstelations" v-show="selected_type === 'extra'" class="fancy"  alt="">
        <img :class="['design', [extra_design]]" :src="images[extra_design]" alt="">
       
      </div>
      <div class="text-area">
          <div class="text" :style="{'font-family': font1 || 'Quattrocento Sans', 'font-size': smallFont ? '21px' : font1_size}" ref="posvetilo">
            {{text1 || ""}}
          </div>

          <div class="text" :style="{'font-family': font2 || 'Quattrocento Sans', 'font-size': smallFont ? '21px' : font2_size}" ref="malo">
            {{text2}}
          </div>
          <div class="datum">
          {{dateText || "KRAJ, 01.01.2020"}} 
          {{smallFont}}
          </div>
      </div>
    </div>
    <div id="output"></div>
     <svg id="svg"></svg>
      <div id="img-foo"></div>
  </div>

</template>

<script>
import krog from "../assets/images/circle.png";
import krog2 from "../assets/images/circle2.png";
import kvadrat from "../assets/images/square.png";
const { parse, stringify } = require('svgson')
import {RenderMode, Svg2Roughjs} from 'svg2roughjs'
import svgFile from "@/assets/images/map.svg";
import starMap from "@/components/StarMap.vue";

export default {
  name: 'StarMap',
  props: {
    text1: String,
    text2: String,
    font1: String,
    font2: String,
    dateText: String,
    extra_design: String,
    selected_type: String,
    color: String,
    smallFont: Boolean,
  },
  data() {
    return {
      genereatedConstelations: null,
      images: {
        krog,
        krog2,
        kvadrat,
      },
      api_key: "pk.4648c2b6ecdd58446110e10f87dcfbd6",
      naslov: "Ulica Bratov Učakar 84",
      test: "test",
      font1_size: "64px",
      font2_size: "50px",
      canvas: null,
      color_mapped: "normal",
      config: { 
  width: 0,           // Default width, 0 = full parent element width; 
                      // height is determined by projection
  //projection: "aitoff",    // Map projection used: see below
  projection: "azimuthalEqualArea",    // Map projection used: see below
  transform: "equatorial", // Coordinate transformation: equatorial (default),
                           // ecliptic, galactic, supergalactic
                      // [longitude, latitude, orientation] all in degrees 
                      // null = default center [0,0,0]
  zoomlevel: 1,
  geopos: null,       // optional initial geographic position [lat,lon] in degrees, 
  form: false,         // Display form for interactive settings. Needs a div with
  formFields: {"location": false,  // Set visiblity for each group of fields with the respective id
               "general": false,  
               "stars": false,  
               "dsos": false,  
               "constellations": false, 
               "lines": false,  
               "other": false,  
               "download": false},  
  advanced: false,     // Display fewer form fields if false 
  daterange: [],      // Calender date range; null: displaydate-+10; [n<100]: displaydate-+n; [yr]: yr-+10; 
                      // [yr, n<100]: [yr-n, yr+n]; [yr0, yr1]  
  controls: false,     // Display zoom controls
  lang: "",           // Global language override for names, any name setting that has the chosen language available
     interactive: true,                    // Default: desig or empty string for designations, other languages as used anywhere else
  culture: "",        // Source of constellations and star names, default "iau", other: "cn" Traditional Chinese
   stars: {
    show: true,    // Show stars
    limit: 4,      // Show only stars brighter than limit magnitude
    colors: false,  // Show stars in spectral colors, if not use default color
    style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
    designation: false, // Show star names (Bayer, Flamsteed, Variable star, Gliese or designation, 
                       // i.e. whichever of the previous applies first); may vary with culture setting
    designationType: "desig",  // Which kind of name is displayed as designation (fieldname in starnames.json)
    designationStyle: { fill: "#ffffff", font: "11px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
    designationLimit: 2.5,  // Show only names for stars brighter than nameLimit
    propername: false,   // Show proper name (if present)
    propernameType: "name", // Languge for proper name, default IAU name; may vary with culture setting 
                            // (see list below of languages codes available for stars)
    propernameStyle: { fill: "#ffffff", font: "13px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif", align: "right", baseline: "bottom" },
    propernameLimit: 1.5,  // Show proper names for stars brighter than propernameLimit
    size: 3,       // Maximum size (radius) of star circle in pixels
    exponent: -0.28, // Scale exponent for star size, larger = more linear
    data: 'stars.6.json' // Data source for stellar data, 
                         // number indicates limit magnitude
  },
  dsos: {
    show: false,    // Show Deep Space Objects 
    limit: 6,      // Show only DSOs brighter than limit magnitude
    colors: true,  // // Show DSOs in symbol colors if true, use style setting below if false
    style: { fill: "#cccccc", stroke: "#cccccc", width: 2, opacity: 1 }, // Default style for dsos
    names: true,   // Show DSO names
    namesType: "name",  // Type of DSO ('desig' or language) name shown
                        // (see list below for languages codes available for dsos)
    nameStyle: { fill: "#cccccc", font: "11px Helvetica, Arial, serif", 
                 align: "left", baseline: "top" }, // Style for DSO names
    nameLimit: 6,  // Show only names for DSOs brighter than namelimit
    size: null,    // Optional seperate scale size for DSOs, null = stars.size
    exponent: 1.4, // Scale exponent for DSO size, larger = more non-linear
    data: 'dsos.bright.json', // Data source for DSOs, 
                              // opt. number indicates limit magnitude
    symbols: {  //DSO symbol styles, 'stroke'-parameter present = outline
      gg: {shape: "circle", fill: "#ff0000"},          // Galaxy cluster
      g:  {shape: "ellipse", fill: "#ff0000"},         // Generic galaxy
      s:  {shape: "ellipse", fill: "#ff0000"},         // Spiral galaxy
      s0: {shape: "ellipse", fill: "#ff0000"},         // Lenticular galaxy
      sd: {shape: "ellipse", fill: "#ff0000"},         // Dwarf galaxy
      e:  {shape: "ellipse", fill: "#ff0000"},         // Elliptical galaxy
      i:  {shape: "ellipse", fill: "#ff0000"},         // Irregular galaxy
      oc: {shape: "circle", fill: "#ffcc00", 
           stroke: "#ffcc00", width: 1.5},             // Open cluster
      gc: {shape: "circle", fill: "#ff9900"},          // Globular cluster
      en: {shape: "square", fill: "#ff00cc"},          // Emission nebula
      bn: {shape: "square", fill: "#ff00cc", 
           stroke: "#ff00cc", width: 2},               // Generic bright nebula
      sfr:{shape: "square", fill: "#cc00ff", 
           stroke: "#cc00ff", width: 2},               // Star forming region
      rn: {shape: "square", fill: "#00ooff"},          // Reflection nebula
      pn: {shape: "diamond", fill: "#00cccc"},         // Planetary nebula 
      snr:{shape: "diamond", fill: "#ff00cc"},         // Supernova remnant
      dn: {shape: "square", fill: "#999999", 
           stroke: "#999999", width: 2},               // Dark nebula grey
      pos:{shape: "marker", fill: "#cccccc", 
           stroke: "#cccccc", width: 1.5}              // Generic marker
    }
  },
  planets: {  //Show planet locations, if date-time is set
    show: false,
    // List of all objects to show
    which: ["sol", "mer", "ven", "ter", "lun", "mar", "jup", "sat", "ura", "nep"],
    // Font styles for planetary symbols
    symbols: {  // Character and color for each symbol in 'which' above (simple circle: \u25cf), optional size override for Sun & Moon
      "sol": {symbol: "\u2609", letter:"Su", fill: "#ffff00", size:""},
      "mer": {symbol: "\u263f", letter:"Me", fill: "#cccccc"},
      "ven": {symbol: "\u2640", letter:"V", fill: "#eeeecc"},
      "ter": {symbol: "\u2295", letter:"T", fill: "#00ccff"},
      "lun": {symbol: "\u25cf", letter:"L", fill: "#ffffff", size:""}, // overridden by generated crecent, except letter & size
      "mar": {symbol: "\u2642", letter:"Ma", fill: "#ff6600"},
      "cer": {symbol: "\u26b3", letter:"C", fill: "#cccccc"},
      "ves": {symbol: "\u26b6", letter:"Ma", fill: "#cccccc"},
      "jup": {symbol: "\u2643", letter:"J", fill: "#ffaa33"},
      "sat": {symbol: "\u2644", letter:"Sa", fill: "#ffdd66"},
      "ura": {symbol: "\u2645", letter:"U", fill: "#66ccff"},
      "nep": {symbol: "\u2646", letter:"N", fill: "#6666ff"},
      "plu": {symbol: "\u2647", letter:"P", fill: "#aaaaaa"},
      "eri": {symbol: "\u26aa", letter:"E", fill: "#eeeeee"}
    },
    symbolStyle: { fill: "#00ccff", font: "bold 17px 'Lucida Sans Unicode', Consolas, sans-serif", 
             align: "center", baseline: "middle" },
    symbolType: "symbol",  // Type of planet symbol: 'symbol' graphic planet sign, 'disk' filled circle scaled by magnitude
                           // 'letter': 1 or 2 letters S Me V L Ma J S U N     
    names: false,          // Show name in nameType language next to symbol
    nameStyle: { fill: "#00ccff", font: "14px 'Lucida Sans Unicode', Consolas, sans-serif", align: "right", baseline: "top" },
    namesType: "desig"     // Language of planet name (see list below of language codes available for planets), 
                           // or desig = 3-letter designation
  },
  constellations: {
    names: false,      // Show constellation names 
    namesType: "iau", // Type of name Latin (iau, default), 3 letter designation (desig) or other language (see list below)
    nameStyle: { fill:"#cccc99", align: "center", baseline: "middle", 
                 font: ["14px Helvetica, Arial, sans-serif",  // Style for constellations
                        "12px Helvetica, Arial, sans-serif",  // Different fonts for diff.
                        "11px Helvetica, Arial, sans-serif"]},// ranked constellations
    lines: true,   // Show constellation lines, style below
    lineStyle: { stroke: "#ffffff", width: 0.5, opacity: 1, roughness: 0.6 }, 
    bounds: false, // Show constellation boundaries, style below
    boundStyle: { stroke: "#00ff00", width: 0.5, opacity: 0.8, dash: [2, 4] }
  },  
  mw: {
    show: false,     // Show Milky Way as filled multi-polygon outlines 
    style: { fill: "#ffffff", opacity: 0.15 }  // Style for MW layers
  },
  lines: {  // Display & styles for graticule & some planes
    graticule: { show: false, stroke: "#cccccc", width: 0.6, opacity: 0.8,   
      // grid values: "outline", "center", or [lat,...] specific position
      lon: {pos: [""], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"}, 
      // grid values: "outline", "center", or [lon,...] specific position
      lat: {pos: [""], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"}},    
    equatorial: { show: false, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 },  
    ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 },     
    galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },    
    supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 }
  },
  background: {        // Background style
    fill: "#000000",   // Area fill
    opacity: 1, 
    stroke: "#000000", // Outline
    width: 1.5
  }, 
  horizon: {  //Show horizon marker, if location is set and map projection is all-sky
    show: false, 
    stroke: "#cccccc", // Line
    width: 1.0, 
    fill: "#000000",   // Area below horizon
    opacity: 0.5
  },  
  daylight: {  //Show day sky as a gradient, if location is set and map projection is hemispheric
    show: false
  }
}
    }
  },
  methods: {
    //  getTextWidth(text, font) {
    //     // re-use canvas object for better performance
    //     this.canvas = this.canvas || (this.canvas = document.createElement("canvas"));
    //     var context = this.canvas.getContext("2d");
    //     context.font = font;
    //     var metrics = context.measureText(text);
    //     return metrics.width;
    // },
    generate: function() {
    const svg2roughjs = new Svg2Roughjs('#output', RenderMode.SVG, {
        bowing: parseInt(0),
        roughness: parseInt(2),
        fillStyle: "solid",
        pencilFilter: true
    });
    setTimeout(()=> {
      Celestial.exportSVG((e) => {
        
        let json = parse(e).then(json => {
         // console.log(json);
         let consts = [];
         let svgParts = [];
          let a = JSON.parse(JSON.stringify(json));
          console.log("a", a);
          for(let grp of a.children) {
            if (grp.children.length > 0) {
              if ("attributes" in grp) {
                if ("id" in grp.attributes) {
                  if (grp.attributes.id === "constLines") {
                      for (let [i, chld] of grp.children.entries()) {
                       
                        let c = chld;
                        if ("attributes" in c) {
                          if ("d" in c.attributes) {
                         
                            const rc = rough.svg(document.getElementById("svg"));
                            let node = rc.path(c.attributes.d, { roughness: .6, stroke: "red", bowing: 0, strokeWidth: 0.5});
                            for (let nod of node.childNodes) {
                              nod.classList.add(c.attributes.class ? c.attributes.class : "");
                              consts.push(nod);
                            }
                            svg.appendChild(node);
                          }
                        }
                      }
                  } else {
                     let a = stringify(grp);
                     svgParts.push(a);
                  }
                }
              }else {
                     let a = stringify(grp);
                     svgParts.push(a);
                  }
            }else {
                     let a = stringify(grp);
                     svgParts.push(a);
                  }
          }

          var svgEl = document.createElement("svg");
          let group = svgEl.appendChild(document.createElement("g"));
          group.setAttribute("id", "clipPath");
          for (let con of consts) {
            group.appendChild(con);
          }
          let result = '<svg title="D3-Celestial" version="1.1" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape">';

          result += '<defs><style type="text/css">.background {fill:rgba(0,0,0,0); }  .milkyWay {}  .milkyWayBg {}  .gridLines {}  .constBoundaries {}  .planesequatorial {}  .planesecliptic {}  .planesgalactic {}  .planessupergalactic {}  .constLines {}  .mapBorder {fill:none; stroke:rgba(0,0,0,0); stroke-width:1.5; stroke-opacity:1; stroke-dasharray:none; }  .stars {fill:#ffffff; fill-opacity:1; stroke:none; stroke-width:undefined; stroke-opacity:1; stroke-dasharray:none; font:null; }  .dsos {}  .planets {}  .gridvaluesLon {}  .gridvaluesLat {}  .constNames {}  .starDesignations {}  .starNames {}  .dsoNames {}  .planetNames {}  .horizon {}  .daylight {}  .constLines1 {fill:none; stroke:#ffffff; stroke-width:1; stroke-opacity:1; stroke-dasharray:none; }  .constLines2 {fill:none; stroke:#ffffff; stroke-width:1; stroke-opacity:1; stroke-dasharray:none; }  .constLines3 {fill:none; stroke:#ffffff; stroke-width:1; stroke-opacity:1; stroke-dasharray:none; }  .stars-3 {fill:#9bbcff; }  .stars-2 {fill:#a9c5ff; }  .stars-1 {fill:#bfd3ff; }  .stars0 {fill:#d7e2ff; }  .stars1 {fill:#dce5ff; }  .stars2 {fill:#e3e9ff; }  .stars3 {fill:#ebeeff; }  .stars4 {fill:#f6f4ff; }  .stars5 {fill:#fef9ff; }  .stars6 {fill:#fff5f5; }  .stars7 {fill:#fff0e9; }  .stars8 {fill:#ffebdc; }  .stars9 {fill:#ffe8d5; }  .stars10 {fill:#ffe1c6; }  .stars11 {fill:#ffdbba; }  .stars12 {fill:#ffd5ad; }  .stars13 {fill:#ffd1a3; }  .stars14 {fill:#ffc994; }  .stars15 {fill:#ffc489; }  .stars16 {fill:#ffbb78; }  .stars17 {fill:#ffb872; }  .stars18 {fill:#ffb165; }  .stars19 {fill:#ffa957; }  .stars20 {fill:#ffa34b; }  .stars21 {fill:#ff9d3f; }  .stars22 {fill:#ff9631; }  .stars23 {fill:#ff8e21; }  .stars24 {fill:#ff870a; }  .stars25 {fill:#ff8300; }  .stars26 {fill:#ff7c00; }  .stars27 {fill:#ff7500; }  .stars28 {fill:#ff7000; }  .stars29 {fill:#ff6900; }  .stars30 {fill:#ff6300; }  .stars31 {fill:#ff5b00; }  .stars32 {fill:#ff5600; } </style></defs>'
          for (let part of svgParts) {
            result += part;
          }
          
          result += svgEl.innerHTML;
          //console.log(svgEl.innerHTML);
          result += "</svg>";
          let tgtImage = document.querySelector('#img-foo'),      // Where to draw the result
          can      = document.createElement('canvas'), // Not shown on page
          ctx      = can.getContext('2d'),
          loader   = new Image;                        // Not shown on page
          loader.width  = can.width  = tgtImage.width;
          loader.height = can.height = tgtImage.height;
          let that = this;
          loader.onload = function(){
            ctx.drawImage( loader, 0, 0, loader.width, loader.height );
            tgtImage.src = can.toDataURL();
            console.log(tgtImage.src);
             that.genereatedConstelations = can.toDataURL();
          };
          var svgAsXML = (new XMLSerializer).serializeToString( svgEl );
         
          loader.src = 'data:image/svg+xml,' + encodeURIComponent( svgAsXML );
        });
      });
    }, 1000)
    }
  },
  watch: {
    text1: function (val) {
      let x= 1;
      let y = this.text1.length > 15 ? 21 : 32;
      var element = this.$refs.posvetilo;
       element.style.fontSize = parseInt(y) + 'px';
       console.log( element.offsetHeight, (60 < element.offsetHeight), (element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth));
      while (x == 1) {         
          if (( 60 < element.offsetHeight) || (element.offsetWidth < element.scrollWidth)) {
              y--;
               element.style.fontSize = parseInt(y) + 'px';
          } else {
              
              x = 0;
          }
      }
       this.font1_size = parseInt(y) + 'px';
         console.log(y);
    },
    text2: function (val) {
      let x= 1;
      let y = this.text1.length > 15 ? 21 : 32;
       var element = this.$refs.malo;
      while (x == 1) {
      
         
           element.style.fontSize = parseInt(y) + 'px';
          if ((60 < element.offsetHeight) || (element.offsetWidth < element.scrollWidth)) {
              y--;
          } else {
              x = 0;
          }
      }
       this.font2_size = parseInt(y) + 'px';
      console.log(y);
    },
    selected_type: function(val) {
      this.generate();
    },
     color: {
       handler() {
         console.log("c", this.color);
         if (this.color.includes("SENČENA")) {
           this.config.background.fill = "#454955";
            this.config.background.stroke = "#ffffff";
             this.color_mapped = "lead_grey";
         }
         if (this.color.includes("ČRNA")) {
           this.config.background.fill = "#000000";
            this.config.background.stroke = "#ffffff";
           this.color_mapped = "black";
         }
            if (this.color.includes("BELA")) {
           this.config.background.fill = "#000000";
            this.config.background.stroke = "#000000";
           this.color_mapped = "normal";
         }
         Celestial.apply(this.config);
       }
     }
  },
  mounted() {
    let that = this;
    
    this.$nextTick(() => {
    })
   setTimeout(() => {
      Celestial.display(that.config)
   }, 1000)
 
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#celestial-map canvas {
  position: relative;
  pointer-events: none;
  display: block;
  border-radius: 50%;
  margin: 0 auto;
  border-color: black;
  
}
.lead_grey {
    #celestial-map canvas {
    border-color: #454955 !important;
  }
}
.black {
  #celestial-map canvas {
    border-color: black !important;
  }
}
.circle {
  #celestial-map canvas {
    border: 1px solid;
  }
}
.circle2 {
  #celestial-map canvas {
    border: 1px solid;
    
  }
}
</style>
<style lang="scss" scoped>
.okvir {
  // border: double orange;
  // border-width:80px;
  // border-image: url("../assets/images/okvir.png") 12% 10% 10% 10% repeat;
  // background-image: url("../assets/images/mock.png");
  width: 100%;
  //height: 600px;
  background-size: cover;
}
.location {
  margin:0px auto;
  width: 50%;
}
.star-map {
  color: black;
  .circle {
    .fancy {
      position: relative;
      width: 95%;
      left: 2.5%;
      top: 11px;
    }
    .design {
   position: absolute;
    top: 8.5%;
    left: 11.4%;
    width: 76% !important;
    }
  }
  .circle2 {
    .fancy {
      position: relative;
      width: 95%;
      left: 2.5%;
      top: 11px;
    }
    .design {
      position: absolute;
      top: 6%;
      left: 7.5%;
      width: 84%!important;
    }
  }
  .square {
    .design {
      position: absolute;
      top: 8%;
      left: 12.5%;
      width: 75% !important;
    }
  }
  .fancy {
        width: 100%;
  }
  // top: 50%;
  // transform: translateY(-50%);
&.black {
  color: white;
  background-color: black;
  border-color: brown;
  
}
&.lead_grey{
   border-color: brown;
  background-color: rgb(69, 73, 85);
   color: white;
}
&.extra {
  background-color: #e6e6e6;
  background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png");
  color: black !important;
}
  -webkit-box-shadow: -5px 5px 22px -6px rgba(0,0,0,0.75);
-moz-box-shadow: -5px 5px 22px -6px rgba(0,0,0,0.75);
box-shadow: -5px 5px 22px -6px rgba(0,0,0,0.75);
  margin-top: 50px;
  position: relative;
  width: 440px;
  margin: 0 auto;
  height: 600px;
  padding-top: 75%;
  background-color: #e6e6e6;
  border: 5px black solid;
  padding: 35px;
   
  .normal {
    .map {
        width: 100%;

        &.square {
          border: 1px solid black;
        }
    }
  
  }
  .extra {
    .map {
        width: 100%;

        &.square {
          border: 0px solid black;
        }
    }
  
  }
  // .circle {
  //   display: block;
  //   position: absolute;
  //   overflow: hidden;
  //   width: 200px;
  //   height: 200px;
  //   margin-left: 0 auto;
  //   border-radius: 50%;
  //   #celestial-map {
  //     height: 100% !important;
  //   }
  // }
}

.text-area {
    bottom: 0px;
    position: absolute;
    text-align: center;
    right: 0px;
    height: 80px;
    width: 80%;
    left: 10%;
    .text {
      word-break: keep-all;
      position: relative;
      top: 0px;

      min-height: 60px;
      line-height: 30px;
    
      &:first-child {
        line-height: 30px;
        margin-bottom: 10px;
      }
      // line-height: 80px;
    }
}
.datum{
    bottom: 10px;
    
    position: absolute;
    font-size: 12px;
    left: 0px;
    right: 0px;
}
@media (max-width: 532px) { 
.star-map {
  height: 480px;
  width: 100%;
}
.text-area {
      height: 160px;
  
   .text {
      min-height: 60px;
      &:first-child {
        line-height: 30px;

      }
    
    }
}

}
.design {
  opacity: 1;
   position: absolute;
    top: 3%;
    left: 3%;
    width: 93% !important;
}
.normal {
  .design {
    display: none;
  }
}
.extra {
  .design {
    display: block !important;
  }
}
</style>
