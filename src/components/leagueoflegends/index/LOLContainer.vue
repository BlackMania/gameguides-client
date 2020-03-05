<template>
    <div>
        <TopBar/>
        <NavBar/>
        <v-container class="index-container">
            <NewsFeed></NewsFeed>
        </v-container>
    </div>
</template>

<script>
    import TopBar from "@/components/general/TopBar";
    import NavBar from "@/components/general/NavBar";
    import NewsFeed from "@/components/leagueoflegends/newsfeed/NewsFeed";
    export default {
        name: "LOLContainer",
        components: {NewsFeed, NavBar, TopBar},
    }
</script>

<style scoped>
    .index-container {
        margin-left: 20%;
        margin-right: 20%;
        width: auto;
    }
</style>