<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
          <div class="col-8">
           <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'trenutek'}]" @click="e.preventDefault()" id="trenutek-tab" data-toggle="tab" href="#trenutek" role="tab" aria-controls="home" aria-selected="true">Izberi Trenutek</a>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'posvetilo'}]"  @click="selected_tab = 'trenutek'"  id="posvetilo-tab" data-toggle="tab" href="#posvetilo" role="tab" aria-controls="profile" aria-selected="false">Vpiši posvetilo</a>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'izgled'}]" id="izgled-tab" data-toggle="tab" href="#izgled" role="tab" aria-controls="contact" aria-selected="false">Izberi Izgled</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="trenutek" role="tabpanel" aria-labelledby="trenutek-tab">...</div>
              <div class="tab-pane fade" id="posvetilo" role="tabpanel" aria-labelledby="posvetilo-tab">...</div>
              <div class="tab-pane fade" id="izgled" role="tabpanel" aria-labelledby="izgled-tab">...</div>
            </div>
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
  data() {  
    return {
      selected_tab: "trenutek"
    }
  },
  components: {
    StarMap
  }
}
</script>
