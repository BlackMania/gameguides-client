<template>
    <form style="width: 50%">
        <v-text-field
                v-model="self.guideTitle"
                outlined
                class="text-input"
                :counter="255"
                label="Title"
                color="#b4b8c0"
                autofocus
                autocomplete="off"
        />
        <div class="d-flex">
            <div>
                <VImg width="100px" :src="loadSquare"/>
            </div>
            <div class="flex-fill ml-6 d-flex">
                <v-select
                        class="text-input d-flex align-end"
                        :value="getParentChamp"
                        :items="getChampionArray"
                        item-text="name"
                        item-value="id"
                        v-on:change="updateSelectedChampion"
                        outlined
                />
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "FirstStep",
        props: {
            champion: String
        },
        data() {
            return {
                self: this
            }
        },
        methods: {
            updateSelectedChampion(newValue) {
                this.$store.dispatch("updateChampion", newValue);
            }
        },
        computed: {
            loadSquare() {
                return require(`@/assets/lol/10.6.1/img/champion/${this.$store.getters.guide.champion}.png`);
            },
            getParentChamp() {
                return this.$store.getters.guide.champion;
            },
            getChampionArray() {
                let champions = require('@/assets/lol/10.6.1/data/en_US/champion.json');
                let array = [];
                for (const champ in champions.data) {
                    let object = {
                        id: champions.data[champ].id,
                        name: champions.data[champ].name
                    }
                    array.push(object)
                }
                return array;
            },
            guideTitle: {
                get: function() {
                    return this.$store.getters.guide.title;
                },
                set: function (newValue){
                    this.$store.dispatch("updateTitle", newValue);
                }
            }
        }
    }
</script>

<style scoped>
    >>> .v-text-field * {
        color: #b4b8c0 !important;
    }

    >>> .text-input .mdi-menu-down::before {
        color: #b4b8c0 !important;
    }

</style>