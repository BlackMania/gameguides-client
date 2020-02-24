<template>
    <v-carousel
            cycle
            height="400"
            show-arrows-on-hover
    >
        <GameCarouselItem v-for="game in this.$store.getters.supportedGames"
                          :key="game.name"
                          :game-name="game.name"
                          :shorthand="game.shorthand"
                          ></GameCarouselItem>
    </v-carousel>
</template>

<script>
    import GameCarouselItem from "@/components/landing/GameCarouselItem";
    export default {
        name: "GameCarousel",
        components: {GameCarouselItem},
        data () {
            return {
            }
        },
    }
</script>

<style scoped>

</style>