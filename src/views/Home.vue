<template>
  <div class="home">
    <h1>Community References</h1>
    <p>Super-charge your next Community rewatch with every reference from every episode of our favourite NBC sitcom!</p>

    <SearchBar v-model="searchText"/>
    
    <div class="cards">
      <EpisodeFrame
        v-for="episode in filteredEpisodes"
        v-bind:key="episode.episodeGlobally"
        v-bind:episode="episode"/>
    </div>
  </div>
</template>

<script>
import EpisodeFrame from '../components/EpisodeFrame.vue'
import SearchBar from '../components/SearchBar.vue'

import episodeList from '../assets/episodesList.json'

export default {
  name: 'Home',
  components: {
    EpisodeFrame,
    SearchBar
  },
  data () {
    return {
      // episodes: episodeList.concat(episodeList).concat(episodeList).concat(episodeList),
      episodes: episodeList,
      searchText: ''
    }
  },
  computed: {
    filteredEpisodes() {
      return this.episodes.filter(episode => episode.title.toLowerCase().includes(this.searchText.toLowerCase()))
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