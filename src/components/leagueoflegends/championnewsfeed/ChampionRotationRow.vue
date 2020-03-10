<template>
    <div class="white--text pa-1" >
        <div class="weekly-champ-rot-text">
            Weekly free champions
        </div>
        <div class="d-flex flex-row" style="flex-flow: row wrap; align-content: start;">
            <ChampionSquare
                          v-for="champion in this.$store.getters.freeChampionRotation"
                          :key="champion.key"
                          :champion="champion.name"
                          :image="champion.image.full"/>
        </div>
    </div>
</template>

<script>
    import APIService from "../../../js/APIService"
    import ChampionSquare from "./ChampionSquare";

    export default {
        name: "ChampionRotationRow",
        components: {ChampionSquare},
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
.weekly-champ-rot-text {
    line-height: 11px;
    font-size: 14px;
    color: #bdbdbd;
    font-family: "Candara";
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
}
</style>