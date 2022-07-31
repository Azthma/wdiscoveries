import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import admin from "./modules/admin";
import philippines from "./modules/philippines";
import views from "./modules/views";
Vue.use(Vuex);

const debug = process.env.VUE_APP_SERVER_ENV !== "prod";

export default new Vuex.Store({
  modules: {
    user,
    admin,
    philippines,
    views
  },
  strict: debug,
});
