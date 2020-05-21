<template>
    <div v-if="this.$parent.editable">
        <div v-if="topRune" class="ma-1"
             id="top-rune"
             @click.left="addRune"
             @click.right="removeRune"
             :style="{ border: '2px solid ' + getColor, borderRadius: '50px' }">
            <VImg width="100px" :src="loadImage"></VImg>
        </div>
        <div v-else class=" ma-1 d-flex flex-row align-center">
            <div id="empty-rune-box" @click.right="removeRune"
                 :style="{border: '2px solid ' + getColor, borderRadius: '50px'}"
                 class="empty-rune-box ">
                <VImg v-if="title" width="100px" :src="loadImage"></VImg>
            </div>
            <div v-if="title" class="flex-fill pl-3" :style="{  color: getColor }">
                <div>{{ title.replace(/([A-Z])/g, ' $1').trim().toUpperCase() }}</div>
                <div v-if="getDescription !== ''" class="rune-description">{{ sanitize(getDescription)}}</div>
            </div>
            <div v-else-if="parentRune && mainPath" class="d-flex pa-1 align-center">
                <div v-for="subRune in getSubRunes"
                     class="white--text d-flex flex-row align-center"
                     :key="subRune.id"
                >
                    <div v-for="rune in subRune.slots[index - 1].runes"
                         :key="rune.id"
                    >
                        <div class="empty-box ma-1" @click.left="addSubRune(rune.key)"
                             :style="{border: '2px solid ' + getColor, borderRadius: '50px'}">
                            <VImg width="70px" :src="loadSubRuneImage(rune.key)"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="parentRune && !mainPath">
                <div v-for="(rune, i) in getAllSubRunes"
                     :key="i"
                     class="d-flex ma-1"
                >
                    <div v-if="self.$parent.disabledSecondset !== i">
                        <div v-for="(r, index) in rune"
                             :key="index"
                             class="d-flex flex-row ma-1"
                        >
                            <div v-for="sub in r"
                                 :key="sub.id"
                            >
                                <div @click.left="addSubRune(sub.key, i)" class="ma-1"
                                     :style="{border: '2px solid ' + getColor, borderRadius: '50px'}">
                                    <VImg width="70px" :src="loadSubRuneImage(sub.key)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-for="(r, index) in rune"
                             :key="index"
                             class="d-flex flex-row ma-1"
                        >
                            <div v-for="sub in r"
                                 :key="sub.id"
                            >
                                <div class="ma-1"
                                     :style="{border: '2px solid ' + getColor, borderRadius: '50px', opacity: '0.3'}">
                                    <VImg class="disabled" disabled="true" width="70px"
                                          :src="loadSubRuneImage(sub.key)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class=" ma-1 d-flex flex-row align-center">
            <div :style="{border: '2px solid ' + getColor, borderRadius: '50px'}"
                 class="empty-rune-box ">
                <VImg v-if="title" width="100px" :src="loadImage"></VImg>
            </div>
            <div class="flex-fill pl-3" :style="{  color: getColor }">
                <div v-if="title">{{ title.replace(/([A-Z])/g, ' $1').trim().toUpperCase() }}</div>
                <div v-if="getDescription !== ''" class="rune-description">{{ sanitize(getDescription)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rune",
        props: {
            index: Number,
            topRune: Boolean,
            parentRune: String,
            title: String,
            mainPath: Boolean,
        },
        data() {
            return {
                self: this
            }
        },
        methods: {
            sanitize(html) {
                return html.replace(/<[^>]*>/g, '');
            },
            loadSubRuneImage(rune) {
                return require(`@/assets/lol/img/perk-images/Styles/${rune}.png`)
            },
            addRune() {
                this.$store.dispatch("setRune", {ind: this.index, title: this.title})
            },
            removeRune(event) {
                if (this.title === undefined) return;
                this.$store.dispatch("removeRune", {ind: this.index, title: this.title});
                if (!this.mainPath) {
                    loop: for (let i = 1; i < this.$store.getters.guide.runeset.secondset.length; i++) {
                        if (this.$store.getters.guide.runeset.secondset[i] === undefined) {
                            this.$parent.disabledSecondset = undefined;
                        } else {
                            let obj = this.$parent.runeJson.filter(slot => slot.name === this.parentRune)[0].slots.slice(1);
                            for (let scnLoop = 0; scnLoop < obj.length; scnLoop++) {
                                for (let thrdLoop = 0; thrdLoop < obj[scnLoop].runes.length; thrdLoop++) {
                                    if (obj[scnLoop].runes[thrdLoop].key === this.$store.getters.guide.runeset.secondset[i]) {
                                        this.$parent.disabledSecondset = scnLoop;
                                        break loop;
                                    }
                                }
                            }
                        }
                    }
                }
                event.preventDefault();
            },
            addSubRune(title, index) {
                if (index !== undefined) {
                    this.$parent.disabledSecondset = index;
                }
                this.$store.dispatch("addSubRune", {ind: this.index, title: title, parent: this.parentRune});
            },
        },
        computed: {
            getSubRunes() {
                return this.$parent.runeJson.filter(slot => slot.name === this.parentRune);
            },
            getAllSubRunes() {
                return this.$parent.runeJson.filter(slot => slot.name === this.parentRune)[0].slots.slice(1);
            },
            loadImage() {
                return require(`@/assets/lol/img/perk-images/Styles/${this.title}.png`)
            },
            getColor() {
                switch (this.parentRune) {
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
                return "grey";
            },
            getDescription() {
                if(this.$parent.runeJson.filter(slot => slot.name === this.parentRune)[0] !== undefined)
                {
                    let obj = this.$parent.runeJson.filter(slot => slot.name === this.parentRune)[0].slots;
                    for (let i = 0; i < obj.length; i++) {
                        for (let j = 0; j < obj[i].runes.length; j++) {
                            if (obj[i].runes[j].key === this.title) {
                                return obj[i].runes[j].shortDesc;
                            }
                        }
                    }
                }
                return "";
            },
        },
    }
</script>

<style scoped>
    .empty-rune-box {
        min-width: 100px;
        min-height: 100px;
        max-width: 100px;
        max-height: 100px;
    }

    .rune-description {
        line-height: 10px;
        font-size: 12px;
        color: grey;
    }

    .disabled {
        border-radius: 500px;
    }
</style>