<template>
    <div v-if="getMainRunePath.length !== 0 && getSecondaryRunePath.length !== 0 && getModStats.length !== 0"
         :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}"
         class="pa-2 d-flex justify-center">
        <MainRunePath  :rune-perk="getMainRunePath[0]"
                      :child-runes="getMainRunePath.slice(1)"
        />
        <div class="d-flex flex-column">
            <SecondaryRunePath :rune-perk="getSecondaryRunePath[0]"
                               :child-runes="getSecondaryRunePath.slice(1)"/>
            <StatMods :mods="getModStats"/>
        </div>
    </div>
    <div v-else :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}"
         class="d-flex"
    >
        <div class="d-flex flex-column justify-center align-center flex-fill">
            <div>
                <v-icon color="white" size="200px">mdi-alien-outline</v-icon>
            </div>
            <div>
                Looks like we couldn't find the runepage for this particularly guide.
            </div>
        </div>
    </div>
</template>

<script>
    import MainRunePath from "./MainRunePath";
    import SecondaryRunePath from "./SecondaryRunePath";
    import StatMods from "./StatMods";

    export default {
        name: "RuneOrder",
        components: {StatMods, SecondaryRunePath, MainRunePath},
        computed: {
            getMainRunePath() {
                let runeset = this.$store.getters.guide.runeset;
                let main = runeset.split('/');
                let returnset = main[0].split(',');
                returnset.shift();
                return returnset;
            },
            getSecondaryRunePath() {
                let runeset = this.$store.getters.guide.runeset;
                let main = runeset.split('/');
                let returnset = main[1].split(',');
                returnset.shift();
                return returnset;
            },
            getModStats() {
                let runeset = this.$store.getters.guide.runeset;
                let main = runeset.split('/');
                let returnset = main[2].split(',');
                returnset.shift();
                return returnset;
            }
        },
    }
</script>

<style scoped>
</style>