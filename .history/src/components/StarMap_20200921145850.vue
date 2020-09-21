<template>
  <div class="okvir">
    <div :class="{'star-map': true, [selected_type]: true, [color_mapped]: true,}">
      <div :class='{"circle": extra_design == "krog","circle2": extra_design == "krog2", "square": extra_design == "kvadrat"}'>
        
        
      </div>
      <div :class='{"map": true, "circle": extra_design == "krog", "circle2": extra_design == "krog2", "square": extra_design == "kvadrat"}'>
        <div id="celestial-map"></div>
      </div>
      <div class="text-area">
          <div v-resize-text class="text" :style="{'font-size': font_size1, 'font-family': font1 || 'Quattrocento Sans'}" ref="posvetilo">
            {{text1 || "Primer posvetilo 1"}}
          </div>

          <div v-resize-text class="text" :style="{'font-size': font_size2, 'font-family': font2 || 'Quattrocento Sans'}" ref="malo">
            {{text2}}
          </div>
          <div class="datum">
          {{dateText || "Kraj, 01.01.2020"}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  },
  data() {
    return {
      api_key: "pk.4648c2b6ecdd58446110e10f87dcfbd6",
      naslov: "Ulica Bratov Učakar 84",
      test: "test",
      font_size1: "50px",
      font_size2: "50px",
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
    colors: true,  // Show stars in spectral colors, if not use default color
    style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
    designation: false, // Show star names (Bayer, Flamsteed, Variable star, Gliese or designation, 
                       // i.e. whichever of the previous applies first); may vary with culture setting
    designationType: "desig",  // Which kind of name is displayed as designation (fieldname in starnames.json)
    designationStyle: { fill: "#ddddbb", font: "11px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
    designationLimit: 2.5,  // Show only names for stars brighter than nameLimit
    propername: false,   // Show proper name (if present)
    propernameType: "name", // Languge for proper name, default IAU name; may vary with culture setting 
                            // (see list below of languages codes available for stars)
    propernameStyle: { fill: "#ddddbb", font: "13px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif", align: "right", baseline: "bottom" },
    propernameLimit: 1.5,  // Show proper names for stars brighter than propernameLimit
    size: 5,       // Maximum size (radius) of star circle in pixels
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
    lineStyle: { stroke: "#cccccc", width: 1, opacity: 0.6 }, 
    bounds: false, // Show constellation boundaries, style below
    boundStyle: { stroke: "#cccc00", width: 0.5, opacity: 0.8, dash: [2, 4] }
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
     getTextWidth(text, font) {
        // re-use canvas object for better performance
        this.canvas = this.canvas || (this.canvas = document.createElement("canvas"));
        var context = this.canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    },
    fontSize1(el) {
      let minFontSize= "16px";
      let maxFontSize= "64px";
      let element = this.$refs.posvetilo.clientWidth;
        const size =
          Math.max(
            Math.min(
              element / (1 * 10),
              parseFloat(maxFontSize)
            ),
            parseFloat(minFontSize)
          ) + "px";
           this.font_size1 = size;
    },
     fontSize2(el) {
      let minFontSize= "16px";
      let maxFontSize= "64px";
      let element = this.$refs.malo.clientWidth;
        const size =
          Math.max(
            Math.min(
              element / (1 * 10),
              parseFloat(maxFontSize)
            ),
            parseFloat(minFontSize)
          ) + "px";
          this.font_size2 = size;
    }
  },
  watch: {
    text1: function (val) {
      let x= 1;
      let y = 50;
      while (x == 1) {
          var element = this.$refs.posvetilo;
          if ((element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth)) {
              element.style.fontSize = parseInt(y) + 'px';
              y--;
          } else {
              x = 0;
          }
      }
    },
    text2: function (val) {
      let x= 1;
      let y = 50;
      while (x == 1) {
          var element = this.$refs.malo;
          if ((element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth)) {
              element.style.fontSize = parseInt(y) + 'px';
              y--;
          } else {
              x = 0;
          }
      }
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
      this.text2 = "Primer malo daljšega posvetila, ki se mu pomanjša text";
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
    border-color: white;
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
}
.location {
  margin:0px auto;
  width: 50%;
}
.star-map {
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
  background-color: #ffffff;
background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png");
}
  -webkit-box-shadow: -5px 5px 22px -6px rgba(0,0,0,0.75);
-moz-box-shadow: -5px 5px 22px -6px rgba(0,0,0,0.75);
box-shadow: -5px 5px 22px -6px rgba(0,0,0,0.75);
  margin-top: 50px;
  position: relative;
  width: 90%;
  margin-left: 5%;
  height: 600px;
  background-color: white;
  border: 5px black solid;
  padding: 25px;
  .map {
    width: 70%;
    margin-left: 15%;
    &.square {
      border: 1px solid black;
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
    height: 270px;
    width: 90%;
    left: 5%;
    .text {
      position: relative;
      top: 0px;
      max-height: 150px;
      margin-bottom: 10px;
    }
}
.datum{
    bottom: 25px;
    position: absolute;
    left: 0px;
    right: 0px;
}
@media (max-width: 532px) { 
.star-map {
  height: 450px;
}
.text-area {
  height: 200px;
   .text {
      max-height: 100px;
    }
}
}
</style>
