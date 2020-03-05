<template>
    <v-card tile>
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
                        <v-list-item>League of Legends</v-list-item>
                        <v-list-item>League of Legends</v-list-item>
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
    export default {
        name: "TopBar"
    }
</script>

<style scoped>
    .v-menu__content {
        border-radius: 0 !important;
        left: 0 !important;
    }
</style>