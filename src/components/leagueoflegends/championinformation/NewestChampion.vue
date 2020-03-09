<template>
    <div class="white--text" style="max-width: 100%;">
        <img
                v-if="getChampionData !== undefined"
                :src="'http://localhost:3000/lol/img/champion/splash/' + getChampionData.name + '_0.jpg'"
                class="newest-champion"
        />
    </div>
</template>

<script>
    export default {
        name: "NewestChampion",
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
    height: 250px;
}
</style>