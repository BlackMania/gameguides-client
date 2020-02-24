<template>
    <div>
        <v-layout
                :style="{backgroundImage: `url(${headerImage})`}"
                class="header-image"
                align-center
                justify-center
        >
            <v-flex
                    xs12
                    sm8
                    md4
            >
                <div class="carr">
                    <h1 class="carousel-text text-center white--text">Select a game</h1>
                    <GameCarousel/>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import GameCarousel from "@/components/landing/GameCarousel";

    export default {
        name: "LandingIndex",
        components: {GameCarousel},
        computed: {

            headerImage() {
                return require("../../assets/images/headerimage.png");
            }
        }
    }
</script>

<style scoped>

    .carousel-text {
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    }

    .header-image {
        width: 100%;
        height: 60%;
        min-height: 660px;
        background-size: cover;
        position: absolute;
    }

    .carr {
        margin-left: 5%;
        margin-right: 5%;
    }
</style>