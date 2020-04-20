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
            <router-link class="app-title" :to="{name: 'game', params: { game: this.$route.params.game }}"><v-toolbar-title class="white--text">{{ appTitle }}</v-toolbar-title></router-link>
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
                <v-btn class="pl-2 pr-2 text-capitalize"
                       elevation="0"
                       color="secondary"
                       height="inherit"
                       width="auto"
                       @click.stop="showLogin = !showLogin"
                >
                    Sign In
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-dialog v-model="showLogin" width="50%">
            <v-card>
                <v-card-title>
                    Login
                </v-card-title>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                appTitle: 'Game Guides',
                menuItems: [
                    {title: 'Builds & Guides', path: '/lol/guides'},
                    {title: 'Create Guide', path: '/lol/createguide'},
                ],
                showLogin: false
            }
        },
    }
</script>

<style scoped>
.v-menu__content {
    border-radius: 0;
}

    .text-field {
        height: 15px;
    }

    .app-title {
        text-decoration: none;
    }
</style>