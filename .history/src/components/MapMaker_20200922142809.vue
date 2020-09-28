<template>
  <div class="okvir">
      {{map}}
  </div>
</template>

<script>

export default {
  name: 'MapMaker',
  data() {
    return {
        map: import("../assets/images/map.svg"),
    }
  },
  methods: {
     
  },
  mounted() {
    // const rc = rough.svg(map);
    // let node = rc.rectangle(10, 10, 200, 200, {fill: "red"}); // x, y, width, height
    // map.appendChild(node);
  },
  components: {

  },
  computed: {
    map () {
      return () => import(
        /* webpackMode: "lazy-once" */ 
        `"../assets/images/map.svg"`
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
<style lang="scss" scoped>

</style>
