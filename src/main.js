import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vGallery from 'v-gallery';
Vue.use(vGallery);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
