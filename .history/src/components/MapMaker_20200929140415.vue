<template>
  <div class="okvir">
     {{svgFile}}
      {{map}}
      <div id="output"></div>
      <starMap></starMap>
      <svg id="svg"></svg>
  </div>
</template>

<script>
const { parse, stringify } = require('svgson')
import {RenderMode, Svg2Roughjs} from 'svg2roughjs'
import svgFile from "@/assets/images/map.svg";
import starMap from "@/components/StarMap.vue";


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
  mounted() {
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
          let a = JSON.parse(JSON.stringify(json));
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
                            let node = rc.path(c.attributes.d, { fill: 'purple', roughness: 0.3, stroke: "red", bowing: 6});
                             //  console.log(node);
                           parse("<svg>" + node + "</svg>").then(res => {
                            
                              grp.children[i] = res;
                           });
                            //svg.appendChild(node);
                          }
                        }
                      }
                  } 
                }
              }
            }
          }
          let b = stringify(a);
          console.log(b);
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
</style>
<style lang="scss" scoped>

</style>
