<template>
    <div v-if="getNewChampion" class="news-feed-lol"
         :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
                          borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <NewChampion
            :champion-name="getNewChampion.name"
            :champion-tags="getNewChampion.tags"
            :champion-title="getNewChampion.title"
        />
        <ChampionRotationRow/>
    </div>
</template>

<script>
    import NewChampion from "./NewChampion";
    import ChampionRotationRow from "./ChampionRotationRow";
    export default {
        name: "ChampionFeed",
        components: {ChampionRotationRow, NewChampion},
        computed: {
            getNewChampion() {
                let newChamp = undefined;
                for (const champion in this.$store.getters.championData) {
                    let nextChampion = this.$store.getters.championData[champion];
                    if (newChamp === undefined) {
                        newChamp = nextChampion;
                    }
                    if (parseInt(newChamp.key) < parseInt(nextChampion.key)) {
                        newChamp = nextChampion;
                    }
                }
                return newChamp;
            }
        }
    }
</script>

<style scoped>
    .news-feed-lol {
        height: 100%;
    }
</style>