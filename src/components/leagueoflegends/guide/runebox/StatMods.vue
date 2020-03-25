<template>
    <div class="d-flex flex-row justify-space-between mt-10">
        <div v-for="(mod, index) in mods" :key="index" class="d-flex flex-column align-center mod">
            <div class="d-flex ">
                <VImg class="stat-icon" v-if="index === 0" :src="getFirstModImg"/>
                <VImg class="stat-icon" v-if="index === 1" :src="getSecondModImg"/>
                <VImg class="stat-icon" v-if="index === 2" :src="getThirdModImg"/>
            </div>
            <div >
                <p class="stat-name mt-3">{{mod.replace("StatMods", "").replace(/([A-Z])/g, ' $1').trim()}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatMods",
        props: {
            mods: Array
        },
        computed: {
            getFirstModImg() {
                return require(`@/assets/lol/img/perk-images/StatMods/${this.mods[0]}Icon.png`);
            },
            getSecondModImg() {
                return require(`@/assets/lol/img/perk-images/StatMods/${this.mods[1]}Icon.png`);
            },
            getThirdModImg() {
                return require(`@/assets/lol/img/perk-images/StatMods/${this.mods[2]}Icon.png`);
            }
        }
    }
</script>

<style scoped>
.stat-name {
    line-height: 10px;
    font-size: 12px;
    color: white;
}

    .stat-icon {
        border: 2px solid darkgoldenrod;
        border-radius: 50px;
    }

    .mod {
        margin: 5px;
    }
</style>