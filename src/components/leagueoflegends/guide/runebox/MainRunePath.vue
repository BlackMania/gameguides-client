<template>
    <div v-if="this.$store.getters.getRuneInfo(this.runePerk)" class="d-flex flex-column">
        <div class="d-flex flex-row">
            <div :style="{ border: '2px solid ' + getColor, borderRadius: '50px' }">
                <VImg width="80" :src="inRuneImg"/>
            </div>
            <div class=" d-flex justify-center align-center ml-2">
                <h1 :style="{  color: getColor }">{{ runePerk.toUpperCase() }}</h1>
            </div>
        </div>


        <div class="d-flex flex-row mt-3" v-for="(rune, index) in childRunes" :key="index">
            <div>
                <VImg v-if="index === 0" :style="{ border: '2px solid ' + getColor, borderRadius: '50px' }" width="60"
                      :src="getFirstSubRune"/>
                <VImg v-else-if="index === 1" :style="{ border: '2px solid ' + getColor, borderRadius: '50px' }"
                      width="60" :src="getSecondSubRune"/>
                <VImg v-else-if="index === 2" :style="{ border: '2px solid ' + getColor, borderRadius: '50px' }"
                      width="60" :src="getThirdSubRune"/>
                <VImg v-else-if="index === 3" :style="{ border: '2px solid ' + getColor, borderRadius: '50px' }"
                      width="60" :src="getFourthSubRune"/>
                <div v-else>We couldnt load the images</div>
            </div>
            <div class="flex-fill pl-3" :style="{  color: getColor }">
                {{ rune.replace(/([A-Z])/g, ' $1').trim().toUpperCase() }}
                <p class="rune-description">{{ loadRune(rune) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainRunePath",
        props: {
            runePerk: String,
            childRunes: Array
        },
        data() {
            return {
                subRunes: 4,
                self: this
            }
        },
        methods: {
            sanitize(html) {
                return html.replace(/<[^>]*>/g, '');
            },
            loadRune(rune) {
                let final = null;
                this.$store.getters.getRuneInfo(this.runePerk)[0].slots.filter(r => r.runes.filter(v => { if(v.key === rune.replace(" ", "")) final = v }))
                return final.shortDesc.replace(/<[^>]*>/g, '');
            }
        },
        computed: {
            inRuneImg() {
                return require(`@/assets/lol/img/perk-images/Styles/${this.runePerk}.png`)
            },
            getFirstSubRune() {
                return require(`@/assets/lol/img/perk-images/Styles/${this.childRunes[0].replace(" ", "")}.png`)
            },
            getSecondSubRune() {
                return require(`@/assets/lol/img/perk-images/Styles/${this.childRunes[1].replace(" ", "")}.png`)
            },
            getThirdSubRune() {
                return require(`@/assets/lol/img/perk-images/Styles/${this.childRunes[2].replace(" ", "")}.png`)
            },
            getFourthSubRune() {
                return require(`@/assets/lol/img/perk-images/Styles/${this.childRunes[3].replace(" ", "")}.png`)
            },
            getColor() {
                switch (this.runePerk) {
                    case "Domination":
                        return "#79474d";
                    case "Inspiration":
                        return "#4e7b88";
                    case "Precision":
                        return "#a37c50";
                    case "Sorcery":
                        return "#745ad9";
                    case "Resolve":
                        return "#4a8546";
                }
                return "white";
            }
        },
    }
</script>

<style scoped>
    .rune-description {
        line-height: 10px;
        font-size: 12px;
        color: grey;
    }
</style>