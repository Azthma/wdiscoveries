import Vue from "vue";
import VueRouter from "vue-router";

//landing page
const LandingPage = () => import("../pages/LandingPage.vue");

//philippines
const Philippines = () => import("../pages/Philippines.vue");
const Cities = () => import("../pages/philippines/Cities.vue");
//cities
const City = () => import("../pages/philippines/city/City.vue");
const Delicacies = () => import("../pages/philippines/city/Delicacies.vue");

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
    },
    {
        path: "/philippines/cities",
        name: "Cities",
        component: Cities
    },
    {
        path: "/philippines/:city/:id",
        name: "City",
        component: City
    },
    {
        path: "/philippines/:city/delicacies/:id",
        name: "Delicacies",
        component: Delicacies
    },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
