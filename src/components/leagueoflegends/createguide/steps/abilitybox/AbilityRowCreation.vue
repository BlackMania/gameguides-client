<template>
    <div class="d-flex pa-1 flex-shrink-0">
        <div class="mr-1 justify-center align-center d-flex">
            <VImg  :src="loadSpell"/>
        </div>
        <div>
            <h3 class="ml-1 white--text">{{ spellName }}</h3>
            <span>
                <v-row class="no-gutters d-flex">
                    <v-col class="box white--text" v-for="(n, index) in boxes" :key="index"
                           :style="{backgroundColor: $vuetify.theme.themes[self.$root.theme].secondary}"
                           v-on:click="addSkill(n)"
                    >
                        <div v-if="isBoxSelected(n)" class="box-active pa-1"> {{ n }} </div>
                    </v-col>
                </v-row>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AbilityRowCreation",
        props: {
            spellName: String,
            spellImage: String,
            skillKey: String,
            skillOrder: Array
        },
        data() {
            return {
                self: this,
                boxes: 18
            }
        },
        methods: {
            isBoxSelected(index) {
                if(this.skillOrder[index -1] === undefined) return false;
                return this.skillOrder[index - 1].includes(this.skillKey)
            },
            addSkill(index) {
                let skillOrder = this.$parent.$parent.$parent.$parent.$parent.$parent.skillOrder;
                if(skillOrder.length !== 18) {
                    this.$parent.$parent.$parent.$parent.$parent.$parent.skillOrder.push(index+1 + this.skillKey)
                }
            }
        },
        computed: {
            loadSpell(){
                return require(`@/assets/lol/10.6.1/img/spell/${this.spellImage}`);
            },
        }
    }
</script>

<style scoped>
    .box {
        min-height: 35px;
        min-width: 30px;
        max-height: 35px;
        max-width: 30px;
        text-align: center;
        margin: 2px;
    }

    .box-active {
        height: 35px;
        width: 30px;
        background-color: green;
    }
</style>