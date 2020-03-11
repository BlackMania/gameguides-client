<template>
    <div>
        <div>
            {{ title}}
        </div>
        <div>
            {{ content }}
        </div>
        <div>
            {{ champion }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Guide",
        props: {
            title: String,
            content: String,
            champion: String,
        }
    }
</script>

<style scoped>

</style>