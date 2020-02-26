<template>
    <v-app>
        <div class="custom-container" :style="{ backgroundImage: `url('${image}')` }">
            <RouterView/>
        </div>
    </v-app>
</template>

<script>

    export default {
        name: "App",
        components: {},
        data() {
            return {

            }
        },
        computed:{
            image() {
                return require("@/assets/images/background.png");
            },
        }
    };
</script>
<style scoped>
    .custom-container {
        width: 100%;
        height: auto;
        min-height: 100vh;
        position: relative;
        background-repeat: repeat;
        background-color: #ebebeb;
    }
</style>
