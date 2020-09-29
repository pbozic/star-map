<template>
  <div class="okvir">
     {{svgFile}}
      {{map}}
      <div id="output"></div>
      <starMap></starMap>
  </div>
</template>

<script>
const { parse, stringify } = require('svgson')
import {Svg2Roughjs} from 'svg2roughjs'
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
    let a = Celestial.exportSVG();
    console.log( a);
    const svg2roughjs = new Svg2Roughjs('#output')
    const svg = document.getElementById('celestial-map')
    svg2roughjs.svg = require("@/assets/images/map.svg");

    
  },
  components: {
    starMap
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
<style lang="scss" scoped>

</style>
