<template>
    <div class="d-flex pa-1 white--text">
        <div class="mr-1 justify-center align-center d-flex">
            <VImg :src="loadPassive"/>
        </div>
        <div class="flex-fill">
            <h3 class="ml-1">{{ passiveName }}</h3>
            <p class="passive-description ml-1">
                {{ sanitize(passiveDescription) }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PassiveRow",
        props: {
            passiveImage: String,
            passiveName: String,
            passiveDescription: String,
        },
        computed: {
            loadPassive(){
                return require(`@/assets/lol/10.6.1/img/passive/${this.passiveImage}`);
            },
        },
        methods: {
            sanitize(html) {
                return html.replace(/<[^>]*>/g, '');
            }
        },
    }
</script>

<style scoped>
.passive-description {
    font-size: 11px !important;
}
</style>