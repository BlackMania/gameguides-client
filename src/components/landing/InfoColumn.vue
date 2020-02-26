<template>
    <div class="pa-1 info-container">
        <v-icon class="info-icon" size="500%" color="#c30101">{{ icon }}</v-icon>
        <p class="info-text">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: "InfoColumn",
        props: {
            icon: String,
            text: String
        }
    }
</script>

<style scoped>
.info-icon {
    border-radius: 200px;
    border: 5px solid #c30101;
    padding: 50px;
}

    .info-text {
        font-size: 100%;
        font-weight: bold;
        color: #4f4f4f;
        max-width: 70%;
        margin: 5% auto auto;
    }
</style>