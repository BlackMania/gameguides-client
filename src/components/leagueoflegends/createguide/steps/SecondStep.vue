<template>
    <div v-if="getChampionData" style="width: 42%">
        <AbilityOrder
                v-if="championData != null"
                :editable="true"
                :abilities="this.championData.spells"
                :passive="this.championData.passive"/>
    </div>
</template>

<script>
    import AbilityOrder from "../../guide/abilitybox/AbilityOrder";
    export default {
        name: "SecondStep",
        components: {AbilityOrder},
        data() {
            return {
                skills: [],
                championData: null
            }
        },
        methods: {

        },
        computed: {
            getChampionData() {
                let data = require("@/assets/lol/10.6.1/data/en_US/championFull.json").data;
                for(const champ in data)
                {
                    if(data[champ].id === this.$store.getters.guide.champion)
                    {
                        return data[champ];
                    }
                } return false;
            }
        },
        watch: {
            getChampionData: {
                deep: true,
                immediate: true,
                handler: function (newVal) {
                    this.championData = newVal;
                }
            }
        },
    }
</script>

<style scoped>

</style>