import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from "./router"
import Vuex from 'vuex'
import VueCookies from "vue-cookies-reactive"
import store from "./store"
import { serverApi } from "./api"
import authentication from "./plugins/auth";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCookies);
Vue.use(authentication);

Vue.prototype.$serverApi = serverApi;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
