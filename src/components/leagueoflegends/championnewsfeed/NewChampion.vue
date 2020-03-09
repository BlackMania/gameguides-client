<template>
    <div
            v-if="getChampionData !== undefined"
            class="white--text img-box"
    >
        <img
                :src="'http://localhost:3000/lol/img/champion/splash/' + getChampionData.name + '_0.jpg'"
                class="newest-champion"
        />
        <div class="champ-name">
            {{ getChampionData.name }}
            <span class="champ-tag"> {{ getChampionData.tags[0] }} </span>
        </div>
        <div class="champ-title">
            {{ getChampionData.title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewChampion",
        computed: {
            getChampionData() {
                let newChamp = undefined;
                for(const champion in this.$store.getters.championData)
                {
                    let d = this.$store.getters.championData[champion];
                    if(newChamp === undefined)
                    {
                        newChamp = d;
                    }
                    if(parseInt(newChamp.key) < parseInt(d.key))
                    {
                        newChamp = d;
                    }
                }
                return newChamp;
            }
        }
    }
</script>

<style scoped>
.newest-champion {
    object-fit: cover;
    object-position: 1px 5px;
    width: 100%;
    height: 150px;
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
        top: 10px;
        left: 50px;
        font-family: "Palatino Linotype";
        font-size: 60px;
        text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    }

    .champ-title {
        text-transform: uppercase;
        position: absolute;
        top: 80px;
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