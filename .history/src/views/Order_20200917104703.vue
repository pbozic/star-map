<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
              <StarMap msg="Welcome to Your Vue.js App"/>
          </div>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import StarMap from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    StarMap
  }
}
</script>
