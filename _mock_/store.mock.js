import Vue from 'vue'
import Vuex from 'vuex'
import generalStore from '../src/store/generalstore'
import lolStore from "./lolstore.mock";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        lol: lolStore,
        general: generalStore
    }
})
