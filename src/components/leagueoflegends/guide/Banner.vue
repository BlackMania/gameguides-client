<template>
    <div class="banner-container"
         :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
                          borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <div class="content">
            <img height="200px" width="100%" class="banner-img"
                 :src="loadSplash"/>
            <div class="champ-name">
                {{ championName }}
                <span v-for="(tag, index) in championTag" :key="index" class="champ-tag">{{ tag }}
                <span v-if="index !== championTag.length - 1"> / </span>
            </span>
            </div>
            <div class="champ-title">
                {{championTitle}}
            </div>

            <div class="guide-name pa-1">
                {{ this.$store.getters.guide.title }}
                <span class="made-by">By {{this.$store.getters.guide.madeby.username}}</span>
            </div>
            <div class="stat-bar">
                <div class="d-flex justify-center" style="flex-flow: row wrap;">
                    <div class="pa-1 stat-content">
                        <v-icon color="grey" class="pr-2 pl-2 vote-btn">mdi-thumb-up</v-icon>
                        {{ votes }} VOTES
                    </div>
                    <div class="pa-1 stat-content">
                        <v-icon color="grey" class="pr-2 pl-2">mdi-eye</v-icon>
                        {{ views }} VIEWS
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props: {
            image: String,
            championName: String,
            championTitle: String,
            championTag: Array,
            votes: Number,
            views: Number
        },
        computed: {
            loadSplash() {
                return require(`@/assets/lol/img/champion/splash/${this.image.replace(".png", "_0.jpg")}`);
            }
        }
    }
</script>

<style scoped>
    .banner-container {
        position: relative;
    }

    .banner-img {
        position: absolute;
        object-fit: cover;
        object-position: 0px 3%;
        user-drag: none;
        -webkit-user-drag: none;
    }

    .champ-name {
        position: absolute;
        top: 40px;
        left: 50px;
        font-family: "Palatino Linotype";
        font-size: 60px;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .vote-btn:hover {
        color: green !important;
    }

    .champ-title {
        text-transform: uppercase;
        position: absolute;
        top: 120px;
        left: 50px;
        font-family: "Palatino Linotype";
        font-size: 30px;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .made-by {
        font-size: 15px;
        color: grey;
    }

    .champ-tag {
        font-size: 15px;
        font-family: "Candara";
        text-transform: uppercase;
        color: #bdbdbd;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .stat-bar {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 20%;
    }

    .stat-bar::after {
        content: '';
        position: absolute;
        right: 100%;
        top: 0;
        width: 20px;
        height: 0;
        border-width: 0 0 40px 60px;
        border-style: solid;
        border-color: transparent rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) transparent;
    }

    .content {
        position: relative;
        height: 200px;
        width: 100%;
        overflow: hidden;
    }

    .stat-content {
        opacity: 1;
        color: white;
    }

    .guide-name {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 30px;
        font-family: "Candara";
        width: auto;
        min-width: 20%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .guide-name::after {
        transform: scaleY(-1);
        content: '';
        position: absolute;
        right: 100%;
        top: 0;
        width: 50px;
        height: 0;
        border-width: 0 0 52.89px 90px;
        border-style: solid;
        border-color: transparent rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) transparent;
    }
</style>