import Vue from 'vue'
import Vuex from 'vuex'
import generalStore from './generalstore'
import lolStore from "./lolstore";

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
