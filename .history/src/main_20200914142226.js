import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.use(Autocomplete)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
