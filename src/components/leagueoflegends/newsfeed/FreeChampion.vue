<template>
    <div class="flex-fill white--text">
        <VImg :src="'http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/' + this.image"></VImg>
    </div>
</template>

<script>
    export default {
        name: "FreeChampion",
        props: {
            image: String,
            champion: String,
        },

    }
</script>

<style scoped>

</style>