<template>
  <div class="okvir">
      {{map}}
  </div>
</template>

<script>
import map from "../assets/images/map.svg";

export default {
  name: 'MapMaker',
  data() {
    return {
        map: map
    }
  },
  methods: {
     
  },
  mounted() {
    const rc = rough.svg(map);
    let node = rc.rectangle(10, 10, 200, 200, {fill: red}); // x, y, width, height
    map.appendChild(node);
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
