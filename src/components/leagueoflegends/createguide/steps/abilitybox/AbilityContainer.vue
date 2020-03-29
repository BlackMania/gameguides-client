<template>
    <div  v-if="championData != null"
            :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}"
         class="pa-2 ability-order d-flex flex-column justify-center"
    >
        <ability-row-creation v-for="(spell, index) in championData.spells"
                              :key="index"
                              :spell-image="spell.image.full"
                              :spell-name="spell.name"
                              :skill-order="self.$parent.$parent.$parent.$parent.$parent.skillOrder"
                              :skill-key="getKey(index)"
        />
    </div>
</template>

<script>
    import AbilityRowCreation from "./AbilityRowCreation";
    export default {
        name: "AbilityContainer",
        components: {AbilityRowCreation},
        props: {
            championData: Object
        },
        data() {
            return {
                self: this
            }
        },
        methods: {
            getKey: function(index) {
                const value = {
                    0: "Q",
                    1: "W",
                    2: "E",
                    3: "R"
                }
                return value[index];
            }
        }
    }
</script>

<style scoped>

</style>