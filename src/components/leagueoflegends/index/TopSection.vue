<template>
    <div class="d-flex flex-shrink-0 justify-start" style="flex-flow: row wrap; display: flex">
        <div class="flex-fill champ-news-feed">
            <ChampionFeed/>
        </div>
        <div class="flex-fill general-news-feed">
            <GeneralNewsFeed/>
        </div>
    </div>
</template>

<script>
    import ChampionFeed from "@/components/leagueoflegends/championnewsfeed/ChampionFeed";
    import GeneralNewsFeed from "@/components/leagueoflegends/generalnewsfeed/GeneralNewsFeed";
    export default {
        name: "TopSection",
        components: {GeneralNewsFeed, ChampionFeed}
    }
</script>

<style scoped>
.champ-news-feed {
    width: 60%;
}

    .general-news-feed {
        max-width: 39%;
        width: 39%;
        margin-left: 1%;
    }
</style>