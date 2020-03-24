<template>
    <div :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}" class="pa-1 ability-order"
        style="margin-top: 1%"
    >
        <PassiveRow :passive-image="passive.image.full" :passive-description="passive.description" :passive-name="passive.name" />
        <AbilityRow v-for="(ability, index) in this.abilities"
                    :key="index"
                    :spell-image="ability.image.full"
                    :spell-name="ability.name"
                    :skill-key="getKey(index)"
                    :skill-order="self.$store.getters.guide.skills.split(',')"
        ></AbilityRow>
    </div>
</template>

<script>
    import AbilityRow from "./AbilityRow";
    import PassiveRow from "./PassiveRow";
    export default {
        name: "AbilityOrder",
        components: {PassiveRow, AbilityRow},
        props: {
            abilities: Array,
            passive: Object,
        },
        data() {
            return {
                self: this,
                edit: false
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
    .ability-order {
        width: 52%;
    }
</style>