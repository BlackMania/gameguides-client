<template>
    <v-card color="secondary" flat tile max-height="inherit" height="100%">
        <v-window v-model="onboarding" reverse >
            <v-window-item
                    v-for="n in length"
                    :key="`card-${n}`"
            >
                <v-card
                        color="tertiary"
                        height="220"
                        tile
                        outlined
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                            tag="v-card-text"
                    >
                        <h1 style="font-size: 300%;" class="white--text">Slide {{ n }}</h1>
                    </v-row>
                </v-card>
            </v-window-item>
        </v-window>

        <v-card-actions class="justify-end">
            <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
            >
                <v-item
                        v-for="n in length"
                        :key="`btn-${n}`"
                        v-slot:default="{ active, toggle }"
                >
                    <v-btn
                            :input-value="active"
                            icon
                            tile
                            @click="toggle"
                    >
                        <v-icon class="outlined">mdi-square</v-icon>
                    </v-btn>
                </v-item>
            </v-item-group>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "GeneralNewsFeed",
        data: () => ({
            length: 4,
            onboarding: 0,
            autorun: true,
        }),
        created () {
            setInterval(() => {
                if (!this.autorun) return;
                this.onboarding = this.onboarding + 1 === this.length
                    ? 0
                    : this.onboarding + 1
            }, 5000)
        },
    }
</script>

<style scoped>
.window {
    height: 200px;
}

>>>.v-btn--active {
    color: gray !important;
}
    >>>.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
        opacity: 0 !important;
    }
</style>