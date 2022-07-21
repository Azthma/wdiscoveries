import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
Vue.use(Vuex);

const debug = process.env.VUE_APP_SERVER_ENV !== "prod";

export default new Vuex.Store({
  modules: {
    user,
  },
  strict: debug,
});
