import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingIndex from "@/components/landing/LandingIndex";
import GameSelector from "@/js/GameSelector";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingIndex,
  },
  {
    path: '/games/:game',
    name: 'game',
    component: GameSelector,
    props: (route) => ({ game: route.params.game })
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
