import Vue from "vue";
import VueRouter from "vue-router";

//landing page
const LandingPage = () => import("../pages/LandingPage.vue");

//philippines
const Philippines = () => import("../pages/Philippines.vue");
const Cities = () => import("../pages/philippines/Cities.vue");
const Destinations = () => import("../pages/philippines/Destinations.vue");
const Activities = () => import("../pages/philippines/Activities.vue");
const Delicacies = () => import("../pages/philippines/Delicacies.vue");
//cities
const City = () => import("../pages/philippines/city/City.vue");
const CityDelicacies = () => import("../pages/philippines/city/Delicacies.vue");

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
        path: "/philippines/destinations",
        name: "Destinations",
        component: Destinations
    },
    {
        path: "/philippines/things-to-do",
        name: "Activities",
        component: Activities
    },
    {
        path: "/philippines/delicacies",
        name: "Delicacies",
        component: Delicacies
    },
    {
        path: "/philippines/:city/:id",
        name: "City",
        component: City
    },
    {
        path: "/philippines/:city/delicacies/:id",
        name: "CityDelicacies",
        component: CityDelicacies
    },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
