<template>
    <div class="d-flex flex-shrink-0 justify-start">
        <FreeChampion v-for="champion in this.$store.getters.freeChampionRotation"
                      :key="champion.key"
                      :champion="champion.name"
                      :image="champion.image.full"/>
    </div>
</template>

<script>
    import APIService from "../../../js/APIService"
    import FreeChampion from "./FreeChampion";
    export default {
        name: "FreeChampionRotation",
        components: {FreeChampion},
        data() {
            return {

            }
        },
        methods: {
            getFreeChampRotation: async function() {
                await APIService.get("/lol/champion-rotations")
                    .then(response => { this.$store.dispatch('setFreeChampionRotation', response.data) })
                    .catch(error => { window.console.log(error) })
            }
        },
        created() {
            this.getFreeChampRotation();
        }
    }
</script>

<style scoped>

</style>