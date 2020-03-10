<template>
    <div class="news-feed-lol"
         :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
                          borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <NewChampion/>
        <ChampionRotationRow/>
    </div>
</template>

<script>
    import NewChampion from "./NewChampion";
    import ChampionRotationRow from "./ChampionRotationRow";
    export default {
        name: "ChampionFeed",
        components: {ChampionRotationRow, NewChampion}
    }
</script>

<style scoped>
    .news-feed-lol {
        height: 100%;
    }
</style>