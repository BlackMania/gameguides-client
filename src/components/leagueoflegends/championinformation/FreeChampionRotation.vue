<template>
    <div class="white--text">
        Weekly free champions
        <div class="d-flex flex-shrink-0 justify-start" style="flex-flow: row wrap;">
            <FreeChampion class="flex-shrink-1"
                          v-for="champion in this.$store.getters.freeChampionRotation"
                          :key="champion.key"
                          :champion="champion.name"
                          :image="champion.image.full"/>
        </div>
    </div>
</template>

<script>
    import APIService from "../../../js/APIService"
    import FreeChampion from "./FreeChampion";

    export default {
        name: "FreeChampionRotation",
        components: {FreeChampion},
        data() {
            return {}
        },
        methods: {
            getFreeChampRotation: function () {
                APIService.get("/lol/champion-rotations")
                    .then(response => {
                        this.$store.dispatch('setFreeChampionRotation', response.data)
                    })
                    .catch(error => {
                        window.console.log(error)
                    })
            }
        },
        created() {
            this.getFreeChampRotation();
        }
    }
</script>

<style scoped>

</style>