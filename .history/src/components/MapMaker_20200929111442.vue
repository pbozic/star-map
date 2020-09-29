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
        svgFile
    }
  },
  methods: {
     
  },
  mounted() {
    const svg2roughjs = new Svg2Roughjs('#output')
    const svg = document.getElementById('celestial-map')
    svg2roughjs.svg=svg;
    console.log(this.svgFile);
    readFile(this.svgFile).then((file) => {
      console.log(file);
    }); // or maybe use the DOMParser to load an SVG file instead

    
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
