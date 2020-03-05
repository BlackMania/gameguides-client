<template>
    <div :style="{backgroundColor: $vuetify.theme.themes[this.$root.theme].tertiary}">
        Test
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "NewsFeed",
        data() {
            return {
                championData: []
            };
        },
        methods: {
            getChampData: async function () {
                this.championData = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json')
                    .then(response => { return response.data.data })
                    .catch((error) => { throw error });
            }
        },
        created() {
            this.getChampData()
        }
    }
</script>

<style scoped>

</style>