<template>
    <div style="width: 42%">
        <AbilityContainer :champion-data="championData"/>
    </div>
</template>

<script>
    import AbilityContainer from "./abilitybox/AbilityContainer";
    export default {
        name: "SecondStep",
        components: {AbilityContainer},
        props: {
            champion: String
        },
        data() {
            return {
                skills: [],
                championData: null
            }
        },
        watch: {
            champion: function(val) {
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
        created() {

        }
    }
</script>

<style scoped>

</style>