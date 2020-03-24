<template>
    <div v-if="championData != null || championData !== undefined" class="white--text">
        <Banner
                :champion-name="championData.name"
                :champion-tag="championData.tags"
                :champion-title="championData.title"
                :image="championData.image.full"
                :votes="this.$store.getters.guide.upvotes"
                :views="this.$store.getters.guide.views"

        />
    </div>
</template>

<script>
    import APIService from "@/js/APIService";
    import { mapState } from 'vuex'
    import Banner from "@/components/leagueoflegends/guide/Banner";
    export default {
        name: "GuideContainer",
        components: {Banner},
        created() {
            APIService.loadSelectedGuide(this.$route.params.id);
        },
        beforeDestroy() {
            this.$store.dispatch('resetSelectedGuide');
        },
        computed: mapState({
            championData: function (state) {
                return state.lol.championData[state.lol.guide.champion];
            }
        }),
    }
</script>

<style scoped>

</style>