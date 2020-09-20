<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
          <div class="col-8">
           <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'trenutek'}]" @click=" e => e.preventDefault()" id="trenutek-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Izberi Trenutek</a>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'posvetilo'}]"  @click=" e => e.preventDefault()" id="posvetilo-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Vpiši posvetilo</a>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'izgled'}]" @click=" e => e.preventDefault()" id="izgled-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Izberi Izgled</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div :class='["tab-pane fade", {"show active": selected_tab === "trenutek"}]' id="trenutek" role="tabpanel" aria-labelledby="trenutek-tab">
                <button @click="selected_tab = 'posvetilo'">Next</button>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "posvetilo"}]' id="posvetilo" role="tabpanel" aria-labelledby="posvetilo-tab">
                 <button @click="selected_tab = 'izgled'">Next</button>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "izgled"}]' id="izgled" role="tabpanel" aria-labelledby="izgled-tab">
                 <button @click="selected_tab = 'izgled'">Next</button>
              </div>
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
      selected_tab: "trenutek",
       api_key: "pk.4648c2b6ecdd58446110e10f87dcfbd6",
      naslov: "Ulica Bratov Učakar 84",
      test: "test",
    }
  },
  components: {
    StarMap
  },
  methods: {

  }
}
</script>
