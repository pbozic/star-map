import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueResizeText from 'vue-resize-text';



import './styles/custom.scss'
Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Autocomplete)
Vue.use(VueResizeText)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
