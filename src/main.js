import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './vuetify/vuetify';
import VueSession from 'vue-session'

Vue.config.productionTip = false;

let options = {
  persist: true
}

Vue.use(VueSession, options);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
}).$mount('#app')
