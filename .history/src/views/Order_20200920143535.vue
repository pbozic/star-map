<template>
  <div class="home">
    <div class="container">
      <div class="row">
         <div class="col"><StarMap v-bind:text1="text1"  v-bind:text2="text2" v-bind:dateText="dateText" /></div>
      </div>
      <div class="row">
          <div class="col">
           <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'trenutek'}]" @click=" e => e.preventDefault()" id="trenutek-tab">1. Izberi Trenutek</a>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'posvetilo'}]"  @click=" e => e.preventDefault()" id="posvetilo-tab" >2. Vpiši posvetilo</a>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': selected_tab === 'izgled'}]" @click=" e => e.preventDefault()" id="izgled-tab">3. Izberi Izgled</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div :class='["tab-pane fade", {"show active": selected_tab === "trenutek"}]' id="trenutek" role="tabpanel" aria-labelledby="trenutek-tab">
                <div class="row">
                  <div class="col-9">
                    <label for="location">Vpiši kraj posebnega trenutka</label>
                    <br>
                    <div class="location">
                      <autocomplete @model="naslov" :search="search" @submit="submit" :debounceTime="500"></autocomplete>
                      <div class="err">
                        {{errorMsg}}
                      </div>
                    </div>
                  </div>
                </div>
                
                <br>
                <label for="datum">Vpiši datum posebnega trenutka</label>
                <div class="datum1">
                 <div class="row">
                    <div class="col-3">
                      <input class="form-control" type="number" placeholder="Dan"  v-model="day">
                    </div>
                    <div class="col-3">
                        <select class="form-control" id="exampleFormControlSelect1"  v-model="month">
                          <option value="Januar">Januar</option>
                          <option value="Februar">Februar</option>
                          <option value="Marec">Marec</option>
                          <option value="April">April</option>
                          <option value="Junij">Junij</option>
                          <option value="Julij">Julij</option>
                          <option value="Avgust">Avgust</option>
                          <option value="September">September</option>
                          <option value="Oktober">Oktober</option>
                          <option value="Novmeber">Novmeber</option>
                          <option value="December">December</option>
                        </select>
                    </div>
                    <div class="col-3">
                      <input class="form-control" type="number" placeholder="Leto" v-model="year">
                    </div>
                 </div>
                </div>
                <br>
                 <label for="datum">Vpiši uro posebnega trenutka <b class="important">(ni obvezno)</b></label>
                <div class="datum1">
                 <div class="row">
                    <div class="col-3">
                      <input class="form-control" type="time" placeholder="Ura"  v-model="time">
                    </div>
                 </div>
                </div>
             
                  <br />
                  <br />
                <button :class="['next-button', {'disabled': this.location == null}]" @click="nextTab('posvetilo')">Nadaljuj</button>
                <br />
                  <br />
                <a href='https://locationiq.com'>Search by LocationIQ.com</a>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "posvetilo"}]' id="posvetilo" role="tabpanel" aria-labelledby="posvetilo-tab">

                 <div class="row">
                    <div class="col-6">
                      <label for="">Dodaj napis/posvetilo 1</label>
                      <input class="form-control" type="text" placeholder="Posvetilo 1"  v-model="text1">
                    </div>
                </div>
                 <br />
                 <div class="row">
                    <div class="col-6">
                      <label for="">Pisava napis/posvetilo 1</label>
                      <input class="form-control" type="text" placeholder="Pisava napis/posvetilo 1"  v-model="font1">
                    </div>
                </div>
                 <br />
                 <div class="row">
                    <div class="col-6">
                      <label for="">Dodaj napis/posvetilo 2 (ni obvezno)</label>
                      <input class="form-control" type="text" placeholder="Posvetilo 2"  v-model="text2">
                    </div>
                </div>
                 <br />
                 <div class="row" v-show="text2 != null">
                    <div class="col-6">
                      <label for="">Pisava napis/posvetilo 2</label>
                      <input class="form-control" type="text" placeholder="Pisava napis/posvetilo 2"  v-model="font2">
                    </div>
                </div>
                 <br />
                  <br />
                <button class="next-button" @click="nextTab('izgled')">Nadaljuj</button>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "izgled"}]' id="izgled" role="tabpanel" aria-labelledby="izgled-tab">
                 <button @click="selected_tab = 'izgled'">Next</button>
              </div>
            </div>
            <div class="tabs">
               
            </div>
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
      day: 1,
      month: "Januar",
      year: 2020,
      hour: 12,
      minute: "00",
      time: "12:00",
      text1: null,
      text2: null,
      dateText: "",
      errorMsg: null,
    }
  },
  components: {
    StarMap
  },
  methods: {
    async getLocation() {
      let resp = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.4648c2b6ecdd58446110e10f87dcfbd6&q=${this.naslov}&format=json`);
      console.log(resp.data);
      this.location = [resp.data[0].lat, resp.data[0].lon];
      this.location_name = resp.data[0].display_name;
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
    },
    nextTab(tab) {
      if (tab.startsWith("posvetilo")) {
        if (this.location == null) {
          this.errorMsg = "Izberi lokacijo!"
          return;
        } else {
          this.errorMsg = "";
        }
        Celestial.location(this.location);
        Celestial.date(this.getDate());
        this.dateText = this.getDateLocationText();
      }
    
      this.selected_tab = tab;
    },
    getDate() {
          let dt = new Date(this.day + ", " + this.month + " " + this.year + " " + this.time);
          console.log(dt)
          return dt;
    },
    getDateLocationText() {
      let loc = this.location_name.split(",")[0];
      let d = this.getDate();
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      console.log(`${da}-${mo}-${ye}`);
      return `${loc}, ${da}.${mo}.${ye}`;
    }
  },
  computed: {
    dateObj: {
       cache: false,
        get() {
         
        }
     
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
<style lang="scss">
.tab-pane {
  padding: 25px;
  padding-left: 0px;
}
button {
  list-style: none;
  font: inherit;
  margin: 0;
  touch-action: manipulation;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  appearance: none;
  display: inline-block;
  position: relative;
  border-radius: 0;
  border: 2px solid #852b23;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 30px;
  line-height: 2.2;
  vertical-align: middle;
  transition: outline 0.1s linear;
  box-sizing: border-box;
  background-color: transparent;
  color: #852b23;
  cursor: pointer;
  &:hover {
    outline: 2px solid #852b23;
  }
}
input {

list-style: none;
visibility: visible;
box-sizing: border-box;
font: inherit;
touch-action: manipulation;
font-family: "Quattrocento Sans",sans-serif;
font-style: normal;
font-weight: 400;
-webkit-font-smoothing: antialiased;
font-size: 1.4rem;
line-height: 1.71429;
display: inline;
background: white;
color: black;
border: 1px solid #A0A0A0;
border-radius: 4px;
padding: 10px 4px;
margin: 0;
&:hover {
  border-color: black;
}
}
input.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
.err {
  color: red;
}
.important {

}
.nav-tabs {
  border: none !important;
}
.nav-item {
  border: none;
  a {
    height: 85px;
        line-height: 65px;
    color: black !important;
    border: none !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
   
  }
}
.nav-link.active {
background-color: rgba(133,43,35, 0.3) !important;
}
.autocomplete {
  input {
    background-color: white !important;
    border: 1px solid #ced4da;
    &:hover {
          border: 1px solid black;
    }
  }
}
</style>