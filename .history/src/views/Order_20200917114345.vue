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
                <label for="location">Vpiši kraj posebnega trenutka</label>
                <br>
                <div class="location">
                  <autocomplete @model="naslov" :search="search" @submit="submit" :debounceTime="500"></autocomplete>
                </div>
                <label for="datum">Vpiši datum posebnega trenutka</label>
                <br>
                <br>
                <br>
                <div class="datum1">
                 <div class="row">
                    <div class="col">
                      <input type="text" placeholder="Dan">
                    </div>
                    <div class="col">
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>Januar</option>
                          <option>Februar</option>
                          <option>Marec</option>
                          <option>April</option>
                          <option>Junij</option>
                          <option>Julij</option>
                          <option>Avgust</option>
                          <option>September</option>
                          <option>Oktober</option>
                          <option>Novmeber</option>
                          <option>December</option>
                        </select>
                    </div>
                    <div class="col">
                      <input type="text" placeholder="Leto">
                    </div>
                 </div>
               
                </div>
                
             
                  <br />
                  <br />
                <button class="next-button" @click="selected_tab = 'posvetilo'">Next</button>
                <br />
                  <br />
                <a href='https://locationiq.com'>Search by LocationIQ.com</a>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "posvetilo"}]' id="posvetilo" role="tabpanel" aria-labelledby="posvetilo-tab">
                 <button @click="selected_tab = 'izgled'">Next</button>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "izgled"}]' id="izgled" role="tabpanel" aria-labelledby="izgled-tab">
                 <button @click="selected_tab = 'izgled'">Next</button>
              </div>
            </div>
            <div class="tabs">
               
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
import axios from "axios";
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
  methods: {
    async getLocation() {
      let resp = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=${this.naslov}&format=json`);
      console.log(resp.data);
      Celestial.location([resp.data[0].lat, resp.data[0].lon])
     // https://us1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=Ulica%20bratov%20u%C4%8Dakar%2084&format=json
    },
    async getAutocomplete() {
      let resp = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=${this.naslov}&format=json`);
      this.autocomplete = resp.data;
     // https://us1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=Ulica%20bratov%20u%C4%8Dakar%2084&format=json
    },
    async search(input) {
      let resp = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=${input}&format=json`);
      return resp.data.map(l => l.display_name);

    },
    submit(result) {
      this.naslov = result;
      this.getLocation();
    }
  },
  watch: {
    naslov: function (val) {
      this.getLocation();
    },
     config: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler() {
          //Celestial.reload(this.config);
      }
     }
  },
}
</script>
