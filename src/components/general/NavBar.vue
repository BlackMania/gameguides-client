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
            <router-link class="app-title" :to="{name: 'game', params: { game: this.$route.params.game }}">
                <v-toolbar-title class="white--text">{{ appTitle }}</v-toolbar-title>
            </router-link>
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
                <v-btn v-if="!sessionExists" class="pl-2 pr-2 text-capitalize"
                       elevation="0"
                       color="secondary"
                       height="inherit"
                       width="auto"
                       @click.stop="showLogin = !showLogin"
                >
                    Sign In
                </v-btn>
                <div class="d-flex align-center" v-else>
                    <div class="white--text pa-3">
                        {{getUnencodedUsername.sub}}
                    </div>
                    <v-btn elevation="0" icon @click="logout">
                        <v-icon color="white">mdi-logout</v-icon>
                    </v-btn>
                </div>
            </v-toolbar-items>
        </v-toolbar>
        <v-dialog v-model="showLogin" width="30%">
            <v-card color="secondary" class="pa-2">
                <v-card-title class="white--text justify-center">
                    Login
                </v-card-title>
                <v-card-actions>
                    <v-form class="login-form" ref="loginForm">
                        <v-text-field
                                filled
                                id="username"
                                class="text-input"
                                label="Username"
                                color="#b4b8c0"
                                autofocus
                                autocomplete="off"
                        />
                        <v-text-field
                                filled
                                id="password"
                                class="text-input"
                                label="Password"
                                type="password"
                                color="#b4b8c0"
                                autofocus
                                autocomplete="off"
                        />
                        <div class="d-flex justify-center" style="width: 100%">
                            <v-btn
                                    class="text-capitalize"
                                    color="primary"
                                    @click="login"
                            >
                                Register
                            </v-btn>
                            <v-btn
                                    class="text-capitalize"
                                    color="primary"
                                    @click="login"
                            >
                                Login
                            </v-btn>
                        </div>
                    </v-form>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    import apiAdapter from '../../js/APIAdapter'

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
        methods: {
            login() {
                let self = this;
                let body = {
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                };
                let api = new apiAdapter({"Content-Type": "application/json"});

                api.post("/gg/auth/login", body)
                    .then(response => {
                        if (response.data !== "Invalid login attempt") {
                            self.$session.start();
                            self.$session.set("token", response.data);
                            self.showLogin = false;
                        } else {
                            alert("Wrong credentials")
                        }
                    });
            },
            logout() {
                this.$session.destroy();
            }
        },
        computed: {
            getUnencodedUsername() {
                let token = this.$session.get('token');
                let payload = token.split('.')[1];
                let unencoded = atob(payload);
                console.log(token);
                return JSON.parse(unencoded);
            },
            sessionExists() {
                if (this.$session.exists()) {
                    return this.$session.get('token') != null;
                }
                return false;
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

    .app-title {
        text-decoration: none;
    }

    >>> .v-text-field * {
        color: #b4b8c0 !important;
    }

    >>> .text-input .mdi-menu-down::before {
        color: #b4b8c0 !important;
    }

    .login-form {
        width: 60%;
        margin: auto;
    }
</style>