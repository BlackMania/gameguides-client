<template>
    <div style="width: 42%">
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
        props: {
            champion: String
        },
        data() {
            return {
                skills: [],
                championData: null
            }
        },
        methods: {
            getChampionData(val) {
                let data = require("@/assets/lol/10.6.1/data/en_US/championFull.json").data;
                for(const champ in data)
                {
                    if(data[champ].id === val)
                    {
                        this.championData = data[champ];
                    }
                }
            }
        },
        watch: {
            champion: function(val) {
               this.getChampionData(val);
            }
        },
        created() {
            this.getChampionData(this.champion);
        }
    }
</script>

<style scoped>

</style>