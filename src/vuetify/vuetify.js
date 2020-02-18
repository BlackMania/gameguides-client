import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#143145',
                secondary: '#1d4059',
                accent: '#8c9eff',
                error: '#b51209',
                background: '#1b262c',
                text: '#FFFFFF'
            },
        },
    }
})

export default vuetify