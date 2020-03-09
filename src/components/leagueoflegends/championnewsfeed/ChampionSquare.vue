<template>
    <div class="flex-fill white--text">
        <VImg class="square-champ" max-width="50px" :src="'http://localhost:3000/lol/img/champion/' + this.image"></VImg>
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