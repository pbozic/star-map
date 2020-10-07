<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col d-none d-sm-block"></div>
         <div class="col-sm-8">
           <div class="background">
             <StarMap v-bind:font1="font1" v-bind:font2="font2" v-bind:text1="text1"  v-bind:text2="text2" v-bind:dateText="dateText" v-bind:extra_design="extra_design" v-bind:selected_type="selected_type" v-bind:color="selected_color"/>
           </div>
           
          </div>
          <div class="col d-none d-sm-block"></div>
      </div>
      <div class="row">
        <div class="col">
           <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': (selected_tab === 'trenutek' || selected_tab === 'posvetilo' || selected_tab === 'izgled' || selected_tab === 'izgled2')}]" @click=" e => e.preventDefault()" id="trenutek-tab">Izberi Trenutek</a>
                <span class="arrow"></span>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': (selected_tab === 'posvetilo' || selected_tab === 'izgled' || selected_tab === 'izgled2')}]"  @click=" e => e.preventDefault()" id="posvetilo-tab" >Vpiši posvetilo</a>
                <span class="arrow"></span>
              </li>
              <li class="nav-item" role="presentation">
                <a :class="['nav-link', {'active': (selected_tab === 'izgled' || selected_tab === 'izgled2')}]" @click=" e => e.preventDefault()" id="izgled-tab">Izberi Izgled</a>
              </li>
            </ul>
        </div>
      </div>
      <div class="row">
          <div class="col">
            <div class="tab-content" id="myTabContent">
              <div :class='["tab-pane fade", {"show active": selected_tab === "trenutek"}]' id="trenutek" role="tabpanel" aria-labelledby="trenutek-tab">
                <div class="row">
                  <div class="col">                 
                    <h1 class="h1 text-center">KRAJ IN DATUM</h1>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-9">
   
                    <br />
                    <label for="location">Vpiši <b>kraj</b> posebnega trenutka</label>
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
                <label for="datum">Vpiši <b class="important">datum</b> posebnega trenutka</label>
                <div class="datum1">
                 <div class="row">
                    <div class="col-sm-3">
                      <input class="" type="number" placeholder="Dan"  v-model="day">
                    </div>
                    <div class="col-sm-3">
                        <select class="" id="exampleFormControlSelect1"  v-model="month">
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
                    <div class="col-sm-3">
                      <input type="number" placeholder="Leto" v-model="year">
                    </div>
                 </div>
                </div>
                <br>
                 <label for="datum">Vpiši <b class="important">uro</b> posebnega trenutka (ni obvezno)</label>
                <div class="datum1">
                 <div class="row">
                    <div class="col-sm-3">
                      <input class="" type="time" placeholder="Ura"  v-model="time">
                    </div>
                 </div>
                </div>
             
                  <br />
                  <br />
                  <div class="controlls">
                     
                    <button :class="['next-button', {'disabled': this.location == null}, 'float-right']" @click="nextTab('posvetilo')">Nadaljuj</button>
                  </div>
               
                <br />
                  <br />
                <a href='https://locationiq.com'>Search by LocationIQ.com</a>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "posvetilo"}]' id="posvetilo" role="tabpanel" aria-labelledby="posvetilo-tab">
                <div class="row">
                  <div class="col">                 
                    <h1 class="h1 text-center">POSVETILA</h1>
                  </div>
                </div>
                 <div class="row">
                    <div class="col-sm-6">
                      <label for="">Dodaj <b class="important">posvetilo 1</b></label>
                      <textarea class="" type="text"  v-model="text1"></textarea>
                    </div>
                </div>
                 <br />
                 <div class="row">
                    <div class="col-sm-6">
                      <label for="">Izberi pisavo posvetilo 1 </label>
                         <select class="" id="exampleFormControlSelect1"  :style="{'font-family': font1}" v-model="font1">
                          <option style="font-family: 'Sophia Ronald'" value="Sophia Ronald">Pisava 1</option>
                          <option style="font-family: 'Bodoni'" value="Bodoni">Pisava 2</option>
                          <option style="font-family: 'Queen Xylophia'" value="Queen Xylophia">Pisava 3</option>
                          <option style="font-family: 'Kiss Me or Not'" value="Kiss Me or Not">Pisava 4</option>
                          <option style="font-family: 'I Love Glitter'" value="I Love Glitter">Pisava 5</option>
                        </select>
                    </div>
                </div>
                 <br />
                 <div class="row">
                    <div class="col-sm-6">
                      <label for="">Dodaj <b class="important">posvetilo 1</b></label>
                      <textarea class="" type="text"  v-model="text2"></textarea>
                    </div>
                </div>
                 <br />
                 <div class="row">
                    <div class="col-sm-6">
                      <label for="">Izberi pisavo posvetilo 2</label>
                       <select class="" id="exampleFormControlSelect1"  :style="{'font-family': font2}" v-model="font2">
                          <option style="font-family: 'Sophia Ronald'" value="Sophia Ronald">Pisava 1</option>
                          <option style="font-family: 'Bodoni'" value="Bodoni">Pisava 2</option>
                          <option style="font-family: 'Queen Xylophia'" value="Queen Xylophia">Pisava 3</option>
                          <option style="font-family: 'Kiss Me or Not'" value="Kiss Me or Not">Pisava 4</option>
                          <option style="font-family: 'I Love Glitter'" value="I Love Glitter">Pisava 5</option>
                        </select>
                    </div>
                </div>
                <br />
                   <div class="row">
                    <div class="col-sm-6">
                      <label for="coment">Komentar</label>
                      <br />
                      <textarea name="coment" id="coment" rows="3" v-model="comment"></textarea>
                    </div>
                </div>

                  <br />
                  <br />
                  <div class="controlls">
                    <button :class="['next-button', 'float-left']" @click="nextTab('trenutek')">Nazaj</button>
                    <button :class="['next-button', {'disabled': this.location == null}, 'float-right']" @click="nextTab('izgled')">Nadaljuj</button>
                  </div>
              </div>
              <div :class='["tab-pane fade", {"show active": selected_tab === "izgled"}]' id="izgled" role="tabpanel" aria-labelledby="izgled-tab">
                <div class="row">
                  <div class="col">                 
                    <h1 class="h1 text-center">STIL</h1>
                  </div>
                </div>

                    <div class="row justify-content-md-center">
                      <div :class="{'col-sm-3 col-4 vrsta': true, 'active': selected_product ? selected_product.id === product.id ? true : false : false }" v-for="product of products" :key="product.id" @click="selectProduct(product)">
                        <img :src="product.selectedImage" alt="">
                        <div class="overlay d-none d-sm-block">
                          <span>{{product.title}}</span>
                        </div>
                        <div class="d-block d-sm-none text-center">
                           <span>{{product.title.length > 0 ? product.title.replace("zvezdna mapa", "") : product.title}}</span>
                        </div>
                      </div>
                    </div>

                 <br />
                  <br />
                <div class="row" v-if="selected_product != null">
                 
                  <div class="col">                 
                    <h1 class="h1 text-center">IZGLED</h1>
                  </div>
                </div>
                <div class="row" v-if="selected_product != null">
                  <!-- BARVE -->
                  <div class="col">
                    <div class="row justify-content-md-center">
                      <div :class="{'col-sm-3 col-4 barva': true, 'active': selected_color === color }" v-for="(color) of selected_product_variations.colors" :key="color" @click="selectVariant(color)">
                        <img :src="selected_product_variations.map[color].image" alt="">
                        <div class="overlay d-none d-sm-block">
                          <span>{{color}}</span>
                        </div>
                        <div class="d-block d-sm-none text-center">
                           <span>{{color}}</span>
                        </div>
                      </div>
                    </div>
                     <div class="row" v-if="selected_product.title == 'Umetniška zvezdna mapa' || selected_product.title == 'Razlita zvezdna mapa'">
                        <div class="col">
                          <h4 class="h4">Detajli</h4> 
                          <div class="form-check">
                            <input type="radio" value="krog" class="form-check-input" id="krog" v-model="extra_design">
                            <label class="form-check-label" for="krog">Krog</label>
                          </div>
                          <div class="form-check">
                            <input type="radio" value="krog2" class="form-check-input" id="krog2" v-model="extra_design">
                            <label class="form-check-label" for="krog2">Več krogov</label>
                          </div>
                          <div class="form-check">
                              <input type="radio" value="kvadrat" class="form-check-input" id="kvadrat" v-model="extra_design">
                              <label class="form-check-label" for="kvadrat">Kvadrat</label>
                            </div>
                            <div class="form-check">
                              <input type="radio" value="none" class="form-check-input" id="none" v-model="extra_design">
                              <label class="form-check-label" for="none">Brez</label>
                            </div>
                        </div>
                      </div>
                      <br />
                       <div class="row">
                        <div class="col-sm-3">
                          <h4 class="h4">Velikost</h4> 
                        </div>
                      </div>
                      <div class="row">
                          <div :class="{'col-sm-3 col-4 velikost': true, 'active': selected_size === size }" v-for="(size, i) of selected_product_variations.sizes" :key="size" @click="selected_size = size">
                                <span>{{size}}</span>
                            </div>
                      </div>
                  </div>
                  <!-- DETAJLI -->
                 
                  <!-- VELIKOST -->




                  </div>
                  <br/>
                  {{example_text}}
                  <br />
                  <div class="controlls">
                     <button :class="['next-button', 'float-left']" @click="selected_product == null ? nextTab('posvetilo') : selected_product = null">Nazaj</button>
                     <button :class="['next-button', 'float-right']" @click="getSelectedProductVariant()">Poglej Ceno</button>
                  </div>
                
              </div>
            </div>
            <div class="tabs">
            </div>
          </div>
      </div>
    </div>
    <div class="toasta" @click="scrollTop()" v-if="changes === true">
        Poglej spremembe
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StarMap from '@/components/StarMap.vue'
import ShopifyClient from '@/lib/shopify.js'
import config from "../config.js";

import axios from "axios";
export default {
  name: 'Home',
  data() {  
    return {
      selected_tab: "trenutek",
      api_key: "AIzaSyCtxVFknQok0pUd8NKKmQbMPxO-1Uo-Hdg",
      naslov: "Ulica Bratov Učakar 84",
      test: "test",
      day: 1,
      month: "Januar",
      location: null,
      location_name: null,
      year: 2020,
      hour: 12,
      minute: "00",
      time: "12:00",
      text1: null,
      text2: null,
      font1: null,
      font2: null,
      dateText: "",
      errorMsg: null,
      products: null,
      selected_product: null,
      selected_product_variations: null,
      extra_design: "krog",
      comment: "",
      selected_color: "",
      selected_size: "",
      example_text: "",
      selected_type: "normal",
      changes: false,
    }
  },
  components: {
    StarMap
  },
  methods: {
     isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
},
    async scrollTop() {
      window.scrollTo({
        top: 0,
        left:0,
          behavior: 'smooth'
      });
      this.changes = false;
    },
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
    getFontSize(text, min = 18, max = 24) {
      let ln = text.length;

    },
    getProgress(){


      switch (this.selected_tab) {
        case "trenutek":
          return 33;
          break;
        case "posvetilo":
          return 67;
          break;
        case "izgled":
          return 100;
          break;
        default:
          return 0;
          break;
      }
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
        Celestial.exportSVG((data) => {
            console.log(data);
        });
       
      }

      this.selected_tab = tab;
     // this.scrollTo(document.body, 0, 300);
      window.scrollTo({
        top: 0,
        left:0,
          behavior: 'smooth'
      });
    },
    getSelectedProductVariant() {
      let seProd = this.selected_product;
      let foundProduct = null;
      for (let v of seProd.variants) {
        if (v.title === `${this.selected_size} / ${this.selected_color}`) {
          foundProduct = v;
        }
      }
      console.log(foundProduct);
      // this.shopifyClient.addToCart(foundProduct.id, this.checkoutId, (cart) => {
      //   console.log("cart", cart);
      // }, (e) => console.log(e))

      this.example_text = foundProduct.price + " " + seProd.title + " - " + foundProduct.title + " (" + foundProduct.id + ")"; 
      return foundProduct;
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
      return `${loc.toUpperCase()}, ${da}.${mo}.${ye}`;
    },
    selectProduct(product) {
        this.selected_product = product;
        if (window.scrollY > 300) {
          this.changes = true;
        }
        this.selected_type = product.title.includes("Umetniška") || product.title.includes("Razlita") ? "extra" : "normal"
        this.getVariantMap(product);
    },
    selectVariant(color) {
      this.selected_product_varaint = this.selected_product_variations.map[color]; 
      this.selected_color = color; 
      this.changes = true
     
    },
    getVariantMap(product) {
     
      let variants = product.variants;
      let colors = [];
      let sizes = [];
      let map = {};
      for (let v of variants) {
        console.log("v", v)
        let title = v.title;
        let t_split = title.split(" / ");
        sizes.push(t_split[0])
        colors.push(t_split[1])
        if (map[t_split[1]] == null) {
          map[t_split[1]] = v;
        }

      }
       console.log("map", {
       colors: [...new Set(colors)],
       sizes: [...new Set(sizes)],
       map: map
     })
     this.selected_product_variations = {
       colors: [...new Set(colors)],
       sizes: [...new Set(sizes)],
       map: map
     }
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
  mounted() {
    this.shopifyClient = new ShopifyClient(config.shopifyDomain, config.shopifyToken);
    this.shopifyClient.allProducts(products => {
      
        products = products.filter(p => p.availableForSale);
        this.products = products.filter(p => {
          if (p.title == "Mapa mesta") {
            return false
          }
          if (p.title == "Astrološko znamenje") {
            return false
          }
          if (p.title == "Jungle friends") {
            return false
          }
          if (p.title == "Dvojna zvezdna mapa") {
            return false
          }
          return true
        })
        console.log(this.products)
        this.$emit('hide-loader')
    }, (e) => console.log(e))
    this.shopifyClient.createCheckoutId(checkout => {
      this.checkoutId = checkout;
    }, (e) => console.log(e))
  }
}
</script>
<style lang="scss">
#myTabContent {
  min-height: 500px;
  transition: height 0.5 ease-in-out;
}
.controlls{
  margin-bottom: 45px;
}
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
textarea {
  width: 100%;
  min-height: 150px;
}

input,select {
  width: 100%;
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  border:none;
  border-bottom:1px solid #ccc;
  color: #aa9863;
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

.nav-item {
  border: none;
  position: relative;
  text-transform: uppercase;
  a {
    height: 85px;
        line-height: 65px;
    color: black !important;
    border: none !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
   
  }
}
.nav-link {
  background-color: rgb(194,182,150) !important;
}
.nav-link.active {
  background-color:  rgb(170,152,99) !important;
  color: white !important;
}
.autocomplete-input:focus, .autocomplete-input[aria-expanded=true] {
    border-color: black;
     border-bottom:1px solid #ccc;
    background-color: #fff;
    outline: none !important;
    box-shadow: none !important;
  }
.autocomplete {
  input {
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  border:none;
  border-bottom:1px solid #ccc;
  border-radius: 0;
  background-color: transparent;
  padding-left: 45px;
    // background-color: white !important;
    // border: 1px solid #ced4da;
    // &:hover {
    //       border: 1px solid black;
    // }
  }
}
#myTab {
    margin-top: 50px;

    margin-bottom: 25px;
}
@media (min-width: 340px) and (max-width: 532px) { 
    .nav-item a {
        line-height: 32px;
    }
    // .col-sm-3+ .col-sm-3 {
    //   margin-top: 15px;
    // }
}
</style>
<style lang="scss" scoped>

.vrsta{
    margin-bottom: 15px;
    margin-right: 30px;
    min-height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0px;
    background-origin: content-box;
    position: relative;
     @media (min-width: 340px) and (max-width: 532px) { 
      margin-right: 15px;
    }
    cursor: pointer;
    &.active {
      border: 2px solid #852b23;
       &:after {
        content: " ";
         display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #852b23 transparent transparent;
        position: absolute;
        right: 0;
        top: 0;
       }
        &:before {
        content: " ";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("/img/tick.svg");
        background-repeat: no-repeat;
        position: absolute;
        right: 4px;
        top: 4px;
        z-index: 10;
      }
    }
    img {
      max-width: 100%;
    }
    .overlay{
      opacity: 0;
      transition: opacity 0.2s ease-out;
      background-color: rgba(0,0,0, 0.4);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      span {
        top: 50%;
        transform: translateY(-50%);
        color: white;
        text-transform: uppercase;
        display: block;
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 24px;
      }
    }
    &:hover {
     .overlay{
        opacity: 1;
      }
    }
}
.barva{
    margin-bottom: 15px;
    margin-right: 30px;
    min-height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0px;
    background-origin: content-box;
    position: relative;
    @media (min-width: 340px) and (max-width: 532px) { 
      margin-right: 15px;
    }
    cursor: pointer;
    &.active {
      border: 2px solid #852b23;
      &:after {
        content: " ";
         display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #852b23 transparent transparent;
        position: absolute;
       right: 0;
        top: 0;

      }
       &:before {
        content: " ";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("/img/tick.svg");
        background-repeat: no-repeat;
        position: absolute;
        right: 4px;
        top: 4px;
        z-index: 10;
      }
    }
    img {
      max-width: 100%;
    }
    .overlay{
      opacity: 0;
      transition: opacity 0.2s ease-out;
      background-color: rgba(0,0,0, 0.4);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      span {
        top: 50%;
        transform: translateY(-50%);
        color: white;
        text-transform: uppercase;
        display: block;
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 24px;
      }
    }
    &:hover {
     .overlay{
        opacity: 1;
      }
    }
}
.velikost{
    margin-bottom: 15px;
    min-height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-origin: content-box;
    position: relative;
    cursor: pointer;
    padding-top: 25%;
    @media (min-width: 340px) and (max-width: 532px) { 
     padding-top: 33%;
    }
     &.active {
      border: 2px solid #852b23;
       &:after {
        content: " ";
         display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #852b23 transparent transparent;
        position: absolute;
        right: 0;
        top: 0;
       }
        &:before {
        content: " ";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("/img/tick.svg");
        background-repeat: no-repeat;
        position: absolute;
        right: 4px;
        top: 4px;
        z-index: 10;
      }
    }
    span {
        top: 50%;
      transform: translateY(-50%);
      color: black;
      text-transform: uppercase;
      display: block;
      position: absolute;
      width: 85%;
      text-align: center;
      font-size: 24px;
      @media (min-width: 340px) and (max-width: 532px) { 
        width: 75%;
      }


    }
}
.toasta {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 35px;
  color: white;
  background-color: #852b23;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}
.progress {
  height: 10px;
  width: 90%;
  margin-left: 5%;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(133,43,35, 0.3);
  .progress-bar {
    background-color: #852b23;
  }

}

.arrow{
  &:after {
    display: inline-block;
    content: " ";
    // border: 42px solid transparent;
    // border-left-color: #aa9863 !important;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 42.5px 0 42.5px 30px;
    border-color: transparent transparent transparent rgb(189,181,150);
    position: absolute;
    top: 0;
    right: -30px;
    z-index: 2;
  }
  &:before {
    display: inline-block;
    content: " ";
    border-style: solid;
    border-width: 42.5px 0 42.5px 30px;
    border-color: transparent transparent transparent #ffffff;
    position: absolute;
    top: 0;
    z-index: 1;
    right: -32px;
  }
}
.active + .arrow {
    &:after {
        border-color: transparent transparent transparent #aa9863;
    }
  }
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none !important;
}

</style>

<style lang="scss">
.background {
  position: relative;
  background-image: url("/img/mock.jpg");
  width:100%;
  padding-top: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .okvir {
    position: absolute;
    
   
  }
}
 @media only screen and (max-width: 600px) {
   .okvir {
      position: absolute;
      bottom: 10%;
      transform: scale(0.3);
    }
  #celestial-map canvas {
    min-height: 150px;
    min-width: 150px;
  }
}

@media only screen and (min-width: 600px) {
    .okvir {
    position: absolute;
    bottom: 10%;
    transform: scale(0.3);
  }
   #celestial-map canvas {
    min-height: 200px;
    min-width: 200px;
  }
}
    /* Small devices (portrait tablets and large phones, 600px and up) */

    /* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .okvir {
    position: absolute;
    bottom: 10%;
    transform: scale(0.3);
  }
   #celestial-map canvas {
    min-height: 200px;
    min-width: 200px;
  }
}

    /* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .okvir {
    position: absolute;
    bottom: 10%;
    transform: scale(0.3);
  }
   #celestial-map canvas {
    min-height: 250px;
    min-width: 250px;
  }
}

    /* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .okvir {
    position: absolute;
    bottom: 25%;
    transform: scale(0.5);
  }
  #celestial-map canvas {
    min-height: 300px;
    min-width: 300px;
  }
}

</style>