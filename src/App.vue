<template>
  <div>
    <h1>Community References</h1>
    <p>Super-charge your next Community rewatch with every reference from every episode of our favourite NBC sitcom!</p>

    <SearchBar v-model="searchText"/>

    <EpisodeFrame
      v-for="episode in filteredEpisodes"
      v-bind:key="episode.episodeGlobally"
      v-bind:title="episode.title" />
  </div>
</template>

<script>
import EpisodeFrame from './components/EpisodeFrame.vue'
import SearchBar from './components/SearchBar.vue'

import episodeList from './assets/episodesList.json'

export default {
  name: 'App',
  components: {
    EpisodeFrame,
    SearchBar
  },
  data () {
    return {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
