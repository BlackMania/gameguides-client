<template>
    <router-link class="no-link" :to="{name: 'guide', params: { id: this.uuid }}">
        <div v-if="this.championData !== undefined" class="d-flex pa-1 ma-2 guide"
             :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].secondary}">
            <VImg max-width="8%" :src="loadSquare">
                <div class="lane"> {{ lane }}</div>
                <div class="patch-version pa-0">{{ patchversion }}</div>
            </VImg>
            <div class="ml-5 flex-fill" style="height: auto">
                <h1>
                    {{ title}}
                </h1>
                <span>Created by {{ madeby }}</span>
            </div>
            <div class="pa-4 justify-center align-center stats">
                <div>
                    <v-icon color="#347c33">mdi-thumb-up</v-icon>
                    {{ upvotes }}
                </div>
                <div>
                    <v-icon class="mr-4" color="white">mdi-eye</v-icon>
                    {{ views }}
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "GuideListItem",
        props: {
            title: String,
            content: String,
            champion: String,
            uuid: String,
            madeby: String,
            patchversion: String,
            lane: String,
            created: Date,
            lastUpdate: Date,
            upvotes: Number,
            views: Number
        },
        computed: {

            loadSquare() {
                return require(`@/assets/lol/10.6.1/img/champion/${this.champion}.png`);
            },
            ...mapState({
                championData: function (state) {
                    let self = this;
                    return state.lol.championData[self.champion];
                },
            }),
        }
    }
</script>

<style scoped>

    .guide:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    .lane {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .patch-version {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: black;
        opacity: 0.8;
        text-align: center;
    }

    .no-link {
        color: white;
        text-decoration: none;
    }
</style>