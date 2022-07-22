import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import admin from "./modules/admin";
Vue.use(Vuex);

const debug = process.env.VUE_APP_SERVER_ENV !== "prod";

export default new Vuex.Store({
  modules: {
    user,
    admin
  },
  strict: debug,
});
