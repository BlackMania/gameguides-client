<template>
    <div :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary}">
        <FreeChampionRotation/>
    </div>
</template>

<script>
    import axios from 'axios'
    import FreeChampionRotation from "./FreeChampionRotation";
    export default {
        name: "NewsFeed",
        components: {FreeChampionRotation},
        data() {
            return {

            };
        },
        methods: {
            getChampData: async function () {
                await axios.get('http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json')
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

</style>