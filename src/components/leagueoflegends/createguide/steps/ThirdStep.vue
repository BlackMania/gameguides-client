<template>
    <div v-if="this.$store.getters.guide.skills">
            <RuneOrder :editable="true" :width="50"/>
    </div>
</template>

<script>
    import RuneOrder from "../../guide/runebox/RuneOrder";

    export default {
        name: "ThirdStep",
        components: {RuneOrder},
    }
</script>

<style scoped>
</style>