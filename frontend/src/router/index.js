import Vue from "vue";
import VueRouter from "vue-router";

//landing page
const LandingPage = () => import("../pages/LandingPage.vue");

//destinations
const Philippines = () => import("../pages/Philippines.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/philippines",
        name: "Philippines",
        component: Philippines
    }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
