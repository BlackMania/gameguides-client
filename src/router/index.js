import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingIndex from "@/components/landing/LandingIndex";
import NavBar from "../components/navbar/NavBar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingIndex,
  },
  {
    path: '/lol',
    name: 'lol',
    component: NavBar
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
