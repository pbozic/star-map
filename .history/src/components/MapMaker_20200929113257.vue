<template>
  <div class="okvir">
     {{svgFile}}
      {{map}}
      <div id="output"></div>
      <starMap></starMap>
      <svg></svg>
  </div>
</template>

<script>
const { parse, stringify } = require('svgson')
import {RenderMode, Svg2Roughjs} from 'svg2roughjs'
import { readFile } from 'fs-web';
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
    setTimeout(()=> {
      Celestial.exportSVG((e) => {
        console.log(e);
        const svg2roughjs = new Svg2Roughjs('#output', RenderMode.SVG, {
            bowing: parseInt(1),
            roughness: parseInt(2),
            fillStyle: "solid"
        })
        const svg = document.getElementById('celestial-map')
        svg2roughjs.svg = loadSvgString(e);
      });
    }, 5000)
   
    

    
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

function loadSvgString(svg2roughjs, fileContent) {

  const parser = new DOMParser()
  const doc = parser.parseFromString(fileContent, 'image/svg+xml')
  const svg = doc.querySelector('svg')

  if (!svg) {
    console.error('Could not load SVG file')
    return
  }

  const svgSize = getSvgSize(svg)
  if (svgSize) {
    inputElement.style.width = `${svgSize.width}px`
    inputElement.style.height = `${svgSize.height}px`
  }
  inputElement.appendChild(svg)

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
