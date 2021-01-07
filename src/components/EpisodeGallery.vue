<template>
<div>
    <div class="cards">
        <EpisodeFrame
            v-for="episode in filteredEpisodes"
            v-bind:key="episode.episodeGlobally"
            v-bind:episode="episode"/>
    </div>
    <p v-if="filteredEpisodes.length == 0">No matches found 😢</p>
</div>
</template>

<script>
import EpisodeFrame from '../components/EpisodeFrame.vue'

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
        filteredEpisodes() {
            return this.episodeList.filter(episode =>
                episode.title.toLowerCase().includes(this.searchText.toLowerCase())
                || episode.references.some(ref => ref.name.toLowerCase().includes(this.searchText.toLowerCase()))
            )
        }
    }
}
</script>

<style scoped>
    .cards {
        padding-top: 50px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
</style>
