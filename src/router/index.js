import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingIndex from "@/components/landing/LandingIndex";
import GameSelector from "@/js/GameSelector";
import GuideSelector from "../js/GuideSelector";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingIndex,
    },
    {
        path: '/:game',
        name: 'game',
        component: GameSelector,
        props: (route) => ({game: route.params.game}),
        children: [
            {
                path: 'guides',
                name: 'guides',
                component: GuideSelector,
                props: (route) => ({game: route.params.game}),
            },
            {
                path: 'guides/:id',
                name: 'guide',
                props: (route) => ({game: route.params.game}),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
