<template>
    <v-card tile width="100%">
        <v-toolbar height="25px" color="primary">
            <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn class="pl-2 pr-2 grey--text"
                           tile
                           v-on="on"
                           height="inherit"
                           width="auto"
                           icon
                    >
                        <v-icon>mdi-gamepad-variant-outline</v-icon>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-card tile>
                    <v-list tile>
                        <v-list-item v-for="game in this.$store.getters.supportedGames"
                                     v-bind:key="game.name"
                                     v-text="game.name"
                                     />
                    </v-list>
                </v-card>
            </v-menu>
            <div>
                {{ this.$store.getters.selectedGame }}
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    import APIService from "../../js/APIService"
    export default {
        name: "TopBar",
        created() {
            if(this.$store.getters.supportedGames.length <= 0)
            {
                APIService.get("/gg/supportedgames")
                    .then(response => {
                        this.$store.dispatch('setSupportedGames', response.data);
                    })
                    .catch(error => {
                        window.console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>
    .v-menu__content {
        border-radius: 0 !important;
        left: 0 !important;
    }
</style>