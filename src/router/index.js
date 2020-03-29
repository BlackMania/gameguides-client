import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingIndex from "@/components/landing/LandingIndex";
import GameSelector from "@/js/GameSelector";
import GuideListSelector from "../js/GuideListSelector";
import GuideSelector from "../js/GuideSelector";
import CreateGuideSelector from "../js/CreateGuideSelector";

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
                component: GuideListSelector,
                props: (route) => ({game: route.params.game}),
            },
            {
                path: 'guides/:id',
                name: 'guide',
                component: GuideSelector,
                props: (route) => ({game: route.params.game}),
            },
            {
                path: 'createguide',
                name: 'createguide',
                component: CreateGuideSelector,
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
