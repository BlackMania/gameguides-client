<template>
    <div class="white--text" :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <GuideListItem v-for="guide in this.$store.getters.lolGuides"
                       :key="guide.index"
                       :title="guide.title"
                       :champion="guide.champion"
                       :content="guide.content"
                       :uuid="guide.uuid"
                       :created="new Date(Date.parse(guide.created))"
                       :lane="guide.lane"
                       :last-update="new Date(Date.parse(guide.updates))"
                       :patchversion="guide.patchversion"
                       :upvotes="guide.upvotes"
                       :views="guide.views"
                       :madeby="guide.madeby.username"

        />
        <infinite-loading @infinite="infiniteHandler">
        </infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import APIService from "../../../js/APIService"
    import GuideListItem from "./GuideListItem";

    export default {
        name: "GuidesList",
        components: {GuideListItem, InfiniteLoading},
        data() {
            return {
                page: 0,
                size: 12
            }
        },
        methods: {
            infiniteHandler($state) {
                try {
                    APIService.loadLolGuides(this.page, this.size, $state)
                    this.page++;
                }catch(error) {
                    window.console.log(error)
                }
            }
        },
        beforeDestroy() {
            this.$store.dispatch('resetGuides');
        }
    }
</script>

<style scoped>

</style>