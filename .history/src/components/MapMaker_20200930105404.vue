<template>
  <div class="okvir">
     {{svgFile}}
      {{map}}
      <div id="output"></div>
      <starMap></starMap>
      <svg id="svg"></svg>

      <img class="mask" src="@/assets/images/mask.png" alt="">
      <div id="img-foo"></div>
  </div>
</template>

<script>
const { parse, stringify } = require('svgson')
import {RenderMode, Svg2Roughjs} from 'svg2roughjs'
import svgFile from "@/assets/images/map.svg";
import starMap from "@/components/StarMap.vue";
import {main} from 'magica'


export default {
  name: 'MapMaker',
  data() {
    return {
        parsed: null,
        map: null,
        svgFile,
        svg: require("../assets/images/map.svg")
    }
  },
  methods: {
     
  },
  async mounted() {
    mergeImages(['/img/mask.png', '/img/ares.svg'])
   
  .then(b64 => {document.getElementById('img-foo').src = b64;  onsole.log(b64))};
    // const result = await main({
    //   debug: true,
    //   command: 'convert zvezde.signapps.io/img/mask.png zvezde.signapps.io/img/ares.svg -compose luminize  -composite',
    //   inputFiles: [ 'zvezde.signapps.io/img/mask.png', 'zvezde.signapps.io/img/ares.svg' ]
    // })
    // console.log("result", result);
      // const dataUrl = `data:image/png;base64,${btoa(String.fromCharCode(...result.outputFiles[0].content))}`
      // document.getElementById('img-foo').src = dataUrl

    const svg2roughjs = new Svg2Roughjs('#output', RenderMode.SVG, {
        bowing: parseInt(0),
        roughness: parseInt(2),
        fillStyle: "solid",
        pencilFilter: true
    });
    console.log(rough);
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

          result += '<defs><style type="text/css">.background {fill:rgba(0,0,0,0); }  .milkyWay {}  .milkyWayBg {}  .gridLines {}  .constBoundaries {}  .planesequatorial {}  .planesecliptic {}  .planesgalactic {}  .planessupergalactic {}  .constLines {}  .mapBorder {fill:none; stroke:#ffffff; stroke-width:1.5; stroke-opacity:1; stroke-dasharray:none; }  .stars {fill:#ffffff; fill-opacity:1; stroke:none; stroke-width:undefined; stroke-opacity:1; stroke-dasharray:none; font:null; }  .dsos {}  .planets {}  .gridvaluesLon {}  .gridvaluesLat {}  .constNames {}  .starDesignations {}  .starNames {}  .dsoNames {}  .planetNames {}  .horizon {}  .daylight {}  .constLines1 {fill:none; stroke:#ffffff; stroke-width:1; stroke-opacity:1; stroke-dasharray:none; }  .constLines2 {fill:none; stroke:#ffffff; stroke-width:1; stroke-opacity:1; stroke-dasharray:none; }  .constLines3 {fill:none; stroke:#ffffff; stroke-width:1; stroke-opacity:1; stroke-dasharray:none; }  .stars-3 {fill:#9bbcff; }  .stars-2 {fill:#a9c5ff; }  .stars-1 {fill:#bfd3ff; }  .stars0 {fill:#d7e2ff; }  .stars1 {fill:#dce5ff; }  .stars2 {fill:#e3e9ff; }  .stars3 {fill:#ebeeff; }  .stars4 {fill:#f6f4ff; }  .stars5 {fill:#fef9ff; }  .stars6 {fill:#fff5f5; }  .stars7 {fill:#fff0e9; }  .stars8 {fill:#ffebdc; }  .stars9 {fill:#ffe8d5; }  .stars10 {fill:#ffe1c6; }  .stars11 {fill:#ffdbba; }  .stars12 {fill:#ffd5ad; }  .stars13 {fill:#ffd1a3; }  .stars14 {fill:#ffc994; }  .stars15 {fill:#ffc489; }  .stars16 {fill:#ffbb78; }  .stars17 {fill:#ffb872; }  .stars18 {fill:#ffb165; }  .stars19 {fill:#ffa957; }  .stars20 {fill:#ffa34b; }  .stars21 {fill:#ff9d3f; }  .stars22 {fill:#ff9631; }  .stars23 {fill:#ff8e21; }  .stars24 {fill:#ff870a; }  .stars25 {fill:#ff8300; }  .stars26 {fill:#ff7c00; }  .stars27 {fill:#ff7500; }  .stars28 {fill:#ff7000; }  .stars29 {fill:#ff6900; }  .stars30 {fill:#ff6300; }  .stars31 {fill:#ff5b00; }  .stars32 {fill:#ff5600; } </style></defs>'
          for (let part of svgParts) {
            result += part;
          }
          
          result += svgEl.innerHTML;
          //console.log(svgEl.innerHTML);
          result += "</svg>";
        
          console.log(result);
        });
      });
    }, 1000)
   
    

    
  },
  components: {
    starMap
  },
  computed: {
  }
}
function getSvgSize(svg) {
  let width = parseInt(svg.getAttribute('width'))
  let height = parseInt(svg.getAttribute('height'))
  let viewBox = svg.getAttribute('viewBox')
  if (isNaN(width) || isNaN(height)) {
    return viewBox ? { width: svg.viewBox.baseVal.width, height: svg.viewBox.baseVal.height } : null
  }
  return { width, height }
}

function loadSvgString(fileContent) {

  const parser = new DOMParser()
  const doc = parser.parseFromString(fileContent, 'image/svg+xml');
  console.log(doc, doc.documentElement)
  return doc.documentElement;

  if (!svg) {
    console.error('Could not load SVG file')
    return
  }

  // make sure the SVG is part of the DOM and rendered, before it is converted by
  // Svg2Rough.js. Otherwise, CSS percentaged width/height might not be applied yet
  setTimeout(() => {
   return svg;
  }, 1000)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #output {
    width: 300px;
  }
  .mask {
    width: 300px;
    mask: url("#clipPath");
  }
</style>
<style lang="scss" scoped>

</style>
