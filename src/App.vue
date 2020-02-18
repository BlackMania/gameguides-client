<template>
    <v-app :style="{background: $vuetify.theme.themes[theme].background}">
        <v-layout
                align-center
                justify-center
        >
            <v-flex
                    xs12
                    sm8
                    md4
            >
                <GameCarrousel/>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import GameCarrousel from "./components/landing/GameCarousel";

    export default {
        name: "App",
        components: {GameCarrousel},
        data() {
            return {

            }
        },
        computed:{
            theme(){
                return (this.$vuetify.theme.dark) ? 'dark' : 'light'
            }
        }
    };
</script>
<style scoped>
</style>
