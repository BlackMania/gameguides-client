<template>
    <div v-if="this.individualChampionData" class="white--text">
        <Banner
                :champion-name="this.individualChampionData.name"
                :champion-tag="this.individualChampionData.tags"
                :champion-title="this.individualChampionData.title"
                :image="this.individualChampionData.image.full"
                :votes="this.$store.getters.guide.upvotes"
                :views="this.$store.getters.guide.views"
        />
        <div class="d-flex ability-rune-box">
            <AbilityOrder
                    :editable="false"
                    :abilities="this.individualChampionData.spells"
                    :passive="this.individualChampionData.passive"
                    style="width: 52%; min-width: 52%; margin-right: 1%;"/>
            <RuneOrder :editable="false" class="flex-fill"/>
        </div>

    </div>
    <div v-else class="loading">
        <v-progress-circular
                indeterminate
                color="black"
                size="100"
                width="10"
        ></v-progress-circular>
    </div>
</template>

<script>
    import APIService from "@/js/APIService";
    import {mapState} from 'vuex'
    import Banner from "@/components/leagueoflegends/guide/Banner";
    import AbilityOrder from "./abilitybox/AbilityOrder";
    import RuneOrder from "./runebox/RuneOrder";

    export default {
        name: "GuideContainer",
        components: {RuneOrder, AbilityOrder, Banner},
        async created() {
            await APIService.loadSelectedGuide(this.$route.params.id);
            APIService.loadIndividualChampion(this.$store.getters.guide.champion)
        },
        beforeDestroy() {
            this.$store.dispatch('resetIndividualChampion');
        },
        computed: mapState({
            individualChampionData: function (state) {
                return state.lol.individualChampionData;
            }
        }),
    }
</script>

<style scoped>
    .loading {
        margin-top: 1%;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ability-rune-box {
        margin-top: 1%;
    }
</style>