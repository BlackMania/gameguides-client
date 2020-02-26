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
        <div class="d-flex flex-wrap-reverse info-row">
            <InfoColumn v-for="(item, index) in info"
                        :key="index"
                        :icon="item.icon"
                        :text="item.text"/>
        </div>
    </div>
</template>

<script>
    import GameCarousel from "@/components/landing/GameCarousel";
    import InfoColumn from "./InfoColumn";

    export default {
        name: "LandingIndex",
        components: {InfoColumn, GameCarousel},
        data() {
            return {
                info: [{ icon: "mdi-television-guide", text: "Watch and create guides for your specific game!"},
                    { icon: "mdi-help", text: "Watch and keep track of your progress of quests for your specific game!" },
                    { icon: "mdi-forum", text: "Have conversations about specific game parts on our forums!" }]
            }
        },
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
        min-height: 800px;
        background-size: cover;
    }

    .carr {
        margin-left: 5%;
        margin-right: 5%;
    }

    .info-row {
        width: 60%;
        margin: auto;
        align-items: center;
        text-align: center;
        padding: 2%;
        justify-content: space-around;
    }
</style>