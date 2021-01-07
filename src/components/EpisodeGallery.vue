<template>
<div class="gallery">
    <h1 v-if="filteredEpisodesSeason1.length !== 0">Season 1</h1>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodesSeason1"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>

    <h1 v-if="filteredEpisodesSeason2.length !== 0">Season 2</h1>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodesSeason2"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>

    <h1 v-if="filteredEpisodesSeason3.length !== 0">Season 3</h1>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodesSeason3"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>

    <h1 v-if="filteredEpisodesSeason4.length !== 0">Season 4</h1>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodesSeason4"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>

    <h1 v-if="filteredEpisodesSeason5.length !== 0">Season 5</h1>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodesSeason5"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>

    <h1 v-if="filteredEpisodesSeason6.length !== 0">Season 6</h1>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodesSeason6"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>

    <p v-if="filteredEpisodesCount === 0">No matches found 😢</p>
</div>
</template>

<script>
import EpisodeFrame from '../components/EpisodeFrame.vue'
import store from '../store'

export default {
    name: 'EpisodeGallery',
    props: {
        episodeList: Object,
        searchText: String
    },
    components: {
        EpisodeFrame
    },
    computed: {
        filteredEpisodesCount() {
            return this.episodeList.filter(episode =>
                episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
            ).length
        },
        filteredEpisodesSeason1() {
            return this.episodeList.filter(episode =>
                (
                    episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                    || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
                ) && episode.season === 1
            )
        },
        filteredEpisodesSeason2() {
            return this.episodeList.filter(episode =>
                (
                    episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                    || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
                ) && episode.season === 2
            )
        },
        filteredEpisodesSeason3() {
            return this.episodeList.filter(episode =>
                (
                    episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                    || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
                ) && episode.season === 3
            )
        },
        filteredEpisodesSeason4() {
            return this.episodeList.filter(episode =>
                (
                    episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                    || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
                ) && episode.season === 4
            )
        },
        filteredEpisodesSeason5() {
            return this.episodeList.filter(episode =>
                (
                    episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                    || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
                ) && episode.season === 5
            )
        },
        filteredEpisodesSeason6() {
            return this.episodeList.filter(episode =>
                (
                    episode.title.toLowerCase().includes(store.state.searchQuery.toLowerCase())
                    || episode.references.some(ref => ref.name.toLowerCase().includes(store.state.searchQuery.toLowerCase()))
                ) && episode.season === 6
            )
        }
    }
}
</script>

<style scoped>
.cards {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    width: 90%;
    justify-content: center;
}

.gallery {
    padding-top: 200px;
}
</style>
