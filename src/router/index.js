import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingIndex from "@/components/landing/LandingIndex";
import GameSelector from "@/js/GameSelector";
import GuideListSelector from "../js/GuideListSelector";
import GuideSelector from "../js/GuideSelector";
import CreateGuideSelector from "../js/CreateGuideSelector";
import store from '../store/index'

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
                beforeEnter(to, from, next) {
                    if(router.app.$session.exists())
                    {
                        if(router.app.$session.get('token') != null)
                        {
                            let token = router.app.$session.get('token');
                            let payload = token.split('.')[1];
                            let unencoded = atob(payload);
                            let parsedToken =  JSON.parse(unencoded);
                            let newGuideObject = {
                                uuid: "",
                                patchversion: "",
                                skills: new Array(18),
                                runeset: {
                                    mainset: new Array(5),
                                    secondset: new Array(3),
                                    statmods: new Array(3),
                                },
                                title: "",
                                content: "",
                                champion: "Aatrox",
                                lane: "",
                                madeby: {
                                    uuid: parsedToken.clientid,
                                    username: parsedToken.sub,
                                },
                                views: 0,
                                upvotes: 0,
                                created: "",
                                updates: "",
                            };
                            store.dispatch('setSelectedGuide', newGuideObject);
                            next();
                        }
                    } else {
                        alert('You must be logged in to perform this action');
                    }
                }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
