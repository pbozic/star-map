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
                            let node = rc.path(c.attributes.d, { roughness: 0.9, stroke: "red", bowing: .4, strokeWidth: 0.5});
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
       
          for (let con of consts) {
            group.appendChild(con);
          }
          console.log(svgEl.innerHTML);
          parse(svgEl).then(res=>{
              console.log("consts", res)  
          })
          
          let b = a;
          console.log();
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
