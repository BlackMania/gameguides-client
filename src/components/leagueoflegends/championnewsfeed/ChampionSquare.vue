<template>
    <div class="white--text" style="width: 6.666666666666667%">
        <VImg class="square-champ"  width="100%" :src="'http://localhost:3000/lol/img/champion/' + this.image"></VImg>
    </div>
</template>

<script>
    export default {
        name: "ChampionSquare",
        props: {
            image: String,
            champion: String,
        }
    }
</script>

<style scoped>
.square-champ:hover {
    cursor: pointer;
}
</style>