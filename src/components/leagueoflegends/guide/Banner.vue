<template>
    <div class="banner-container"
         :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
                          borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <div class="content">
            <img height="200px" width="100%" class="banner-img"
                 :src="'http://localhost:3000/lol/img/champion/splash/' + image.split('.')[0] + '_0.jpg'"/>
            <div class="champ-name">
                {{ championName }}
                <span v-for="(tag, index) in championTag" :key="index" class="champ-tag">{{ tag }}
                <span v-if="index !== championTag.length - 1"> / </span>
            </span>
            </div>
            <div class="champ-title">
                {{championTitle}}
            </div>
            <div class="stat-bar">
                <div class="d-flex justify-center" style="flex-flow: row wrap;">
                    <div class="pr-4 pl-4 stat-content">
                        {{ votes }} VOTES
                    </div>
                    <div class="pr-4 pl-4 stat-content">
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
        background-color: black;
        opacity: 0.5;
        width: 20%;
    }

    .content {
        position: relative;
        height: 200px;
        width: 100%;
    }

    .stat-content {
        opacity: 1;
        color: white;
    }
</style>