import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import router from './router/index.js'
import i18n from '@/plugins/i18n';

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vGallery from 'v-gallery';
Vue.use(vGallery);

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;



new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app')


