<template>
  <div class="okvir">
    <div :class="{'star-map': true, [selected_type]: true, [color_mapped]: true,}">
      <div :class='{"circle": extra_design == "krog", "circle2": extra_design == "krog2", "square": extra_design == "kvadrat"}'>
        
        
      </div>
      <div :class='{"map": true, "circle": extra_design == "krog", "circle2": extra_design == "krog2", "square": extra_design == "kvadrat"}'>
        <div id="celestial-map"></div>
      </div>
      <div class="text-area">
          <div v-resize-text class="text" :style="{'font-family': font1 || 'Quattrocento Sans'}" ref="posvetilo">
            {{text1 || "Primer posvetilo 1"}}
          </div>

          <div v-resize-text class="text" :style="{'font-family': font2 || 'Quattrocento Sans'}" ref="malo">
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
    }
  },
  methods: {
     
  },
  mounted() {
 
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
<style lang="scss" scoped>

</style>
