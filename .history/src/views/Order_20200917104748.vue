<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
          <div class="col-8">
            <div class="tabs">
               <label for="location">Naslov (test)</label>
                <br>
                <br>
                <div class="location">
                  <autocomplete @model="naslov" :search="search" @submit="submit" :debounceTime="500"></autocomplete>
                </div>
              
                <br>
                <br>
                <a href='https://locationiq.com'>Search by LocationIQ.com</a>
                <br>
                <br>
            </div>
          </div>
          <div class="col-4">
              <StarMap msg="Welcome to Your Vue.js App"/>
          </div>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import StarMap from '@/components/StarMap.vue'

export default {
  name: 'Home',
  components: {
    StarMap
  }
}
</script>
