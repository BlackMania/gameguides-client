<template>
    <v-carousel-item class="carousel-item">
        <router-link :to="{name: 'game', params: { game: this.shorthand}}">
            <v-sheet
                    :style="{backgroundImage: `url('${getImg}')`}"
                    style="background-size: cover;"
                    height="100%"
            >
                <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                >
                    <div class="mr-3 ml-3 display-1 carousel-text">{{ gameName }}</div>
                </v-row>
            </v-sheet>
        </router-link>
    </v-carousel-item>
</template>

<script>
    export default {
        name: "GameCarouselItem",
        props: {
            gameName: String,
            shorthand: String
        },
        computed: {
            getImg() {
                return require('@/assets/images/carousel/' + this.shorthand + '.jpg');
            }
        }
    }
</script>

<style scoped>
.carousel-text {
    position: absolute;
    bottom: 60px;
    font-size: 50%;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
}

    .carousel-item:hover {
        cursor: pointer;
    }
</style>