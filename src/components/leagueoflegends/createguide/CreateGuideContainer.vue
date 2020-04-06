<template>
    <div>
        <v-stepper alt-labels
                   :style="{ borderRadius: '0px !important', backgroundColor: $vuetify.theme.themes[this.$root.theme].primary + '!important'}"
                   v-model="e1">
            <v-stepper-header>
                <v-stepper-step color="secondary" :complete="e1 > 1" step="1">Select champion</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step color="secondary" :complete="e1 > 2" step="2">Select abilities</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step color="secondary" step="3" class="white--text">Select runes</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                            tile
                            class="mb-12 pa-5"
                            color="secondary"
                            height="auto"
                    >
                        <first-step :champion="champion" style="margin: auto"/>
                    </v-card>

                    <div class="d-flex justify-end">
                        <v-btn
                                class="text-capitalize"
                                color="secondary"
                                @click="e1 = 2"
                        >
                            Continue
                        </v-btn>
                    </div>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card
                            class="mb-12"
                            color="secondary"
                            height="auto"
                    >
                        <second-step :champion="champion" style="margin: auto"/>

                    </v-card>

                    <div class="d-flex justify-space-between">
                        <v-btn
                                class="text-capitalize"
                                @click="e1= 1"
                                color="secondary">
                            Back
                        </v-btn>
                        <v-btn
                                class="text-capitalize"
                                color="secondary"
                                @click="e1 = 3"
                        >
                            Continue
                        </v-btn>
                    </div>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                            class="mb-12"
                            color="secondary"
                            height="auto"
                    >

                        <third-step/>
                    </v-card>

                    <div class="d-flex justify-space-between">
                        <v-btn
                                class="text-capitalize"
                                @click="e1 = 2"
                                color="secondary">
                            Back
                        </v-btn>
                        <v-btn
                                class="text-capitalize"
                                color="secondary"
                                @click="e1 = 1"
                        >
                            Finish
                        </v-btn>
                    </div>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
    import FirstStep from "./steps/FirstStep";
    import SecondStep from "./steps/SecondStep";
    import ThirdStep from "./steps/ThirdStep";

    export default {
        name: "CreateGuideContainer",
        components: {ThirdStep, SecondStep, FirstStep},
        data() {
            return {
                e1: 1,
                title: "",
                champion: "Aatrox",
            }
        },
    }
</script>

<style scoped>
    >>> .theme--light.v-stepper .v-stepper__label {
        color: white !important;
    }

</style>