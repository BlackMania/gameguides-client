<template>
    <div
            :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}"
            class="pa-2">
        <div v-if="editable" class="d-flex flex-row justify-center">
            <Rune v-for="(rune, index) in runeJson"
                  :key="index"
                  :title="rune.key"
                  :top-rune="true"
                  :parent-rune="rune.name"
                  :index="0"
            />
        </div>
        <div class="d-flex flex-row justify-center container" :style="{width: this.width + '% !important' }">
            <div class="d-flex flex-column main-rune-order">
                <Rune v-for="(runeSpot, index) in this.$store.getters.guide.runeset.mainset"
                      :key="index"
                      :title="runeSpot"
                      :index="index"
                      :parent-rune="self.$store.getters.guide.runeset.mainset[0]"
                      :main-path="true"
                />
            </div>
            <div class="d-flex flex-column">
                <Rune v-for="(runeSpot, index) in this.$store.getters.guide.runeset.secondset"
                      :key="index"
                      :title="runeSpot"
                      :index="index"
                      :parent-rune="self.$store.getters.guide.runeset.secondset[0]"
                      :main-path="false"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Rune from "./Rune";

    export default {
        name: "RuneOrder",
        components: {Rune},
        props: {
            editable: Boolean,
            width: Number
        },
        data() {
            return {
                runeJson: {},
                self: this,
                disabledSecondset: null
            }
        },
        created() {
            this.runeJson = this.$store.getters.runeInfo;
        },
    }
</script>

<style scoped>
    .container {
        margin: auto;
    }

    .main-rune-order {
        flex-basis: 70%;
    }
</style>