<template>
  <div class="okvir">
      <svg ref="svg"></svg>
      {{map}}
      <div id="output"></div>
  </div>
</template>

<script>
const { parse, stringify } = require('svgson')
import {Svg2Roughjs} from 'svg2roughjs'
import { readFile } from 'fs-web';

export default {
  name: 'MapMaker',
  data() {
    return {
        parsed: null,
        map: null
    }
  },
  methods: {
     
  },
  mounted() {
    const svg2roughjs = new Svg2Roughjs('#output')
    const svg = document.getElementById('some-svg-element')
    readFile("../assets/images/map.svg").then((file) => {
      console.log(file);
    }); // or maybe use the DOMParser to load an SVG file instead

    
  },
  components: {

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
