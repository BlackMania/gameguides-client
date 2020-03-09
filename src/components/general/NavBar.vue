<template>
    <v-card
            width="100%"
            flat
            tile
    >
        <v-toolbar
                elevation="0"
                tile
                color="secondary"
        >
            <v-toolbar-title class="white--text">{{ appTitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                        elevation="0"
                        class="text-capitalize white--text"
                        color="secondary"
                        tile
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.path"
                >{{ item.title }}
                </v-btn>
                <v-menu :close-on-content-click="false"  open-on-click :open-on-hover="false" bottom offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn class="pl-2 pr-2 text-capitalize"
                               elevation="0"
                               color="secondary"
                               v-on="on"
                               height="inherit"
                               width="auto"
                        >
                            Sign In
                        </v-btn>
                    </template>

                    <v-card tile class="pa-4" color="primary" :style="{color: $vuetify.theme.themes[this.$root.theme].text}">
                        <v-card-title  class="justify-center">
                            Sign In
                        </v-card-title>
                        <v-card-actions>
                            <v-text-field placeholder="Username"></v-text-field>
                        </v-card-actions>
                        <v-card-actions class="text-field">
                            <v-text-field placeholder="Password"></v-text-field>
                        </v-card-actions>
                        <v-card-actions class="mt-6 justify-center">
                            <v-btn color="secondary" tile class="text-capitalize">Sign In</v-btn>
                            <v-btn color="secondary" tile class="text-capitalize">Sign Up</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                appTitle: 'Game Guides',
                menuItems: [
                    {title: 'Builds & Guides', path: '/guides'},
                    {title: 'Create Guide', path: '/signup'},
                ],
            }
        }
    }
</script>

<style scoped>
.v-menu__content {
    border-radius: 0;
}

    .text-field {
        height: 15px;
    }
</style>