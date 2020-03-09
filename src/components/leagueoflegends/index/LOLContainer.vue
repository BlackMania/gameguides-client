<template>
    <div>
        <TopBar/>
        <NavBar/>
        <v-container class="index-container">
            <NewsFeed></NewsFeed>
        </v-container>
    </div>
</template>

<script>
    import TopBar from "@/components/general/TopBar";
    import NavBar from "@/components/general/NavBar";
    import NewsFeed from "@/components/leagueoflegends/championinformation/ChampionInformation";
    import axios from 'axios'
    export default {
        name: "LOLContainer",
        components: {NewsFeed, NavBar, TopBar},
        methods: {
            getChampData: function () {
                axios.get('http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json')
                    .then(response => { this.$store.dispatch('setChampionData', response.data.data)  })
                    .catch((error) => { throw error });
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