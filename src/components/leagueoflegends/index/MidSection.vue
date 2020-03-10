<template>
    <div class="mid-section white--text" :style="{ backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary,
             borderWidth: '5px', borderColor: $vuetify.theme.themes[this.$root.theme].secondary, borderStyle: 'solid'}">
        <span style="font-size: 40px">News goes here</span>
    </div>
</template>

<script>
    export default {
        name: "MidSection"
    }
</script>

<style scoped>
.mid-section {
    margin-top: 1%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>