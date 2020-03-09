<template>
    <div class="news-feed-lol" :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
    borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">

        <NewestChampion/>
        <FreeChampionRotation/>
    </div>
</template>

<script>
    import FreeChampionRotation from "./FreeChampionRotation";
    import NewestChampion from "@/components/leagueoflegends/championinformation/NewestChampion";
    export default {
        name: "NewsFeed",
        components: {NewestChampion, FreeChampionRotation},
        data() {
            return {

            };
        },
    }
</script>

<style scoped>
.news-feed-lol {
    max-width:60%;
    padding: 3px;
}
</style>