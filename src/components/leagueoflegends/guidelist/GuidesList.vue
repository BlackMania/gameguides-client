<template>
    <div class="white--text" :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <Guide v-for="guide in this.$store.getters.lolGuides"
               :key="guide.index"
               :title="guide.title"
               :champion="guide.champion"
               :content="guide.content"/>
    </div>
</template>

<script>
    import APIService from "../../../js/APIService"
    import Guide from "./Guide";
    export default {
        name: "GuidesList",
        components: {Guide},
        created() {
            APIService.get("/gg/lol/guides")
                .then(response => {
                    this.$store.dispatch('setGuides', response.data);
                })
                .catch(error => window.console.log(error));
        }
    }
</script>

<style scoped>

</style>