<template>
    <div class="flex-fill white--text">
        <VImg max-width="50px" :src="'http://localhost:3000/lol/img/champion/' + this.image"></VImg>
    </div>
</template>

<script>
    export default {
        name: "FreeChampion",
        props: {
            image: String,
            champion: String,
        }
    }
</script>

<style scoped>

</style>