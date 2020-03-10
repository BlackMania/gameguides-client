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
                    <v-list tile class="pa-0">
                        <v-list-item class="link" v-for="data in this.$store.getters.supportedGames"
                                     v-bind:key="data.name"
                        >
                            <router-link class="link" :to="{name: 'game', params: { game: data.shorthand } }">
                                {{ data.name }}
                            </router-link>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
            <div class="grey--text">
                {{ getSelectedGame }}
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    import APIService from "../../js/APIService"
    export default {
        name: "TopBar",
        computed: {
            getSelectedGame() {
                let selectedGame =  this.$store.getters.supportedGames.find(x => x.shorthand === this.$route.params.game);
                if(selectedGame === undefined)
                {
                    return "";
                }
                else return selectedGame.name;
            }
        },
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

    .link {
        text-decoration: none;
        transition: 0.5s ease-in;
    }
    .link:hover {
        background-color: lightgray;
    }
</style>