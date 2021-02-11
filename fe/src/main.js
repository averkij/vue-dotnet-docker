import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store";

import ApiService from "@/common/api.service";

Vue.config.productionTip = false;

ApiService.init();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
