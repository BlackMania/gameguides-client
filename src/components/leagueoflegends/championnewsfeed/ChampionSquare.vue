<template>
    <div class="white--text" style="width: 6.666666666666667%">
        <VImg class="square-champ"  width="100%" :src="loadSquare"></VImg>
    </div>
</template>

<script>
    export default {
        name: "ChampionSquare",
        props: {
            image: String,
            champion: String,
        },
        computed: {
            loadSquare() {
                return require(`@/assets/lol/10.6.1/img/champion/${this.image}`);
            }
        }
    }
</script>

<style scoped>
.square-champ:hover {
    cursor: pointer;
}
</style>