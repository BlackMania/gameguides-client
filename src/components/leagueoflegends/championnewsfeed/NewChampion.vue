<template>
    <div
            class="white--text img-box d-flex"
    >
        <img
                :src="loadSplash"
                class="newest-champion flex-fill"
        />
        <div class="champ-name">
            {{ championName}}
            <span v-for="(tag, index) in championTags" :key="index" class="champ-tag">{{ tag }}
                <span v-if="index !== championTags.length - 1"> / </span>
            </span>
        </div>
        <div class="champ-title">
            {{ championTitle }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewChampion",
        props: {
            championName: String,
            championTags: Array,
            championTitle: String
        },
        computed: {
            loadSplash() {
                return require(`@/assets/lol/img/champion/splash/${this.championName}_0.jpg`);
            },

        },
        created() {
            this.champion = this.getChampion;
        }
    }
</script>

<style scoped>
    .newest-champion {
        object-fit: cover;
        object-position: 0px 0px;
        width: 100%;
        height: 180px;
        user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .img-box {
        position: relative;
        cursor: pointer;
    }

    .champ-name {
        position: absolute;
        top: 40px;
        left: 50px;
        font-family: "Palatino Linotype";
        font-size: 60px;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    }

    .champ-title {
        text-transform: uppercase;
        position: absolute;
        top: 120px;
        left: 50px;
        font-family: "Palatino Linotype";
        font-size: 30px;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    }

    .champ-tag {
        font-size: 15px;
        font-family: "Candara";
        text-transform: uppercase;
        color: #bdbdbd;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    }
</style>