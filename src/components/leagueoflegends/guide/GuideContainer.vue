<template>
    <div v-if="this.individualChampionData" class="white--text">
        <v-alert transition="scale-transition" type="error" :value="error">
            {{errorText}}
        </v-alert>
        <Banner
                :champion-name="this.individualChampionData.name"
                :champion-tag="this.individualChampionData.tags"
                :champion-title="this.individualChampionData.title"
                :image="this.individualChampionData.image.full"
                :votes="this.$store.getters.guide.upvotes"
                :views="this.$store.getters.guide.views"
        />
        <div class="d-flex ability-rune-box align-start">
            <AbilityOrder
                    :editable="editable"
                    :abilities="this.individualChampionData.spells"
                    :passive="this.individualChampionData.passive"
                    style="min-width: 41%; margin-right: 1%;"/>
            <RuneOrder :editable="editable" :width="100" class="flex-fill"/>
        </div>
        <div v-if="checkPermission">
            <v-tooltip top v-if="!editable">
                <template v-slot:activator="{ on }">
                    <v-btn @click="edit" v-on="on" class="btn-edit" color="primary" fab small>
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Edit</span>
            </v-tooltip>
            <div v-else>
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn @click="save" v-on="on" class="btn-save" color="primary" fab small>
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                    </template>
                    <span>Save</span>
                </v-tooltip>
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn @click="cancel" v-on="on" class="btn-cancel" color="grey darken-3" fab small>
                            <v-icon color="white">mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Cancel</span>
                </v-tooltip>
            </div>
        </div>
    </div>
    <div v-else class="loading">
        <v-progress-circular
                indeterminate
                color="black"
                size="100"
                width="10"
        ></v-progress-circular>
    </div>
</template>

<script>
    import APIService from "@/js/APIService";
    import {mapState} from 'vuex'
    import Banner from "@/components/leagueoflegends/guide/Banner";
    import AbilityOrder from "./abilitybox/AbilityOrder";
    import RuneOrder from "./runebox/RuneOrder";

    export default {
        name: "GuideContainer",
        components: {RuneOrder, AbilityOrder, Banner},
        data() {
            return {
                editable: false,
                tmpGuide: null,
                error: false,
                errorText: ""
            }
        },
        methods: {
            cancel() {
                this.$store.dispatch("setSelectedGuide", this.tmpGuide);
                this.error = false;
                this.editable = false;
            },
            save() {
                if (this.$store.getters.guide.runeset.mainset.includes(undefined) || this.$store.getters.guide.runeset.secondset.includes(undefined)) {
                    this.errorText = "Not all runes are selected. Please select all runes in order to save the guide"
                    this.error = true;
                } else {
                    this.error = false;
                    this.editable = false;
                }
            },
            edit() {
                this.tmpGuide = JSON.parse(JSON.stringify(this.$store.getters.guide));
                this.error = false;
                this.editable = true;
            },
        },
        async created() {
            this.tmpGuide = this.$store.getters.guide;
            await APIService.loadSelectedGuide(this.$route.params.id);
            APIService.loadIndividualChampion(this.$store.getters.guide.champion)
        },
        beforeDestroy() {
            this.$store.dispatch('resetIndividualChampion');
        },
        computed: {
            checkPermission() {
                let token = this.$session.get('token');
                if (token === "" || token === null || token === undefined) return false;
                let payload = token.split('.')[1];
                let unencoded = JSON.parse(atob(payload));
                return unencoded.guides.includes(this.$route.params.id);
            },
            ...mapState({
                individualChampionData: function (state) {
                    return state.lol.individualChampionData;
                }
            }),
        }
    }
</script>

<style scoped>
    .loading {
        margin-top: 1%;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ability-rune-box {
        margin-top: 1%;
    }

    .btn-edit {
        position: absolute;
        right: 30px;
        bottom: 30px;
    }

    .btn-save {
        position: absolute;
        right: 30px;
        bottom: 30px;
    }

    .btn-cancel {
        position: absolute;
        right: 80px;
        bottom: 30px;
    }
</style>