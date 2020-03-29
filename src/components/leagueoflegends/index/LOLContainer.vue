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
    import TopSection from "@/components/leagueoflegends/index/TopSection";
    import MidSection from "@/components/leagueoflegends/index/MidSection";
    import APIService from "../../../js/APIService";

    export default {
        name: "LOLContainer",
        components: {MidSection, TopSection, NavBar, TopBar},
        methods: {

        },
        async created() {
            await APIService.loadLolVersions();
            await this.$store.dispatch('setChampionData', require('@/assets/lol/' + this.$store.getters.versions[0] + '/data/en_US/champion.json').data);
            await this.$store.dispatch('setRuneInfo', require('@/assets/lol/' + this.$store.getters.versions[0] + '/data/en_US/runesReforged.json'));
        }
    }
</script>

<style scoped>
    .index-container {

    }
</style>