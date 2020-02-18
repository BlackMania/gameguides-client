<template>
    <v-app :style="{background: $vuetify.theme.themes[theme].background}">
        <TopBar/>
        <NavBar/>
    </v-app>
</template>

<script>

    import TopBar from "@/components/navbar/TopBar";
    import NavBar from "@/components/navbar/NavBar";
    export default {
        name: "App",
        components: {NavBar, TopBar},
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
