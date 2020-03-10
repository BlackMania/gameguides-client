<template>
    <div>
        <TopBar/>
        <NavBar/>
            <v-container class="index-container">
                <div v-if="this.$route.name === 'game'">
                    <TopSection/>
                    <MidSection/>
                </div>

                <div v-else-if="this.$route.name !== 'game'">
                    <router-view></router-view>
                </div>
            </v-container>
    </div>
</template>

<script>
    import TopBar from "@/components/general/TopBar";
    import NavBar from "@/components/general/NavBar";
    import axios from 'axios'
    import TopSection from "@/components/leagueoflegends/index/TopSection";
    import MidSection from "@/components/leagueoflegends/index/MidSection";

    export default {
        name: "LOLContainer",
        components: {MidSection, TopSection, NavBar, TopBar},
        methods: {
            getChampData: function () {
                axios.get('http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json')
                    .then(response => {
                        this.$store.dispatch('setChampionData', response.data.data)
                    })
                    .catch((error) => {
                        throw error
                    });
            }
        },
        created() {
            this.getChampData()
        }
    }
</script>

<style scoped>
    .index-container {
        margin-left: 20%;
        margin-right: 20%;
        width: 60%;
    }
</style>