<template>
  <div>
    <h1>Community References</h1>
    <p>Super-charge your next Community rewatch with every reference from every episode of our favourite NBC sitcom!</p>
    <SearchBar />
    <EpisodeFrame 
      v-for="episode in episodes" 
      v-bind:key="episode.id" 
      v-bind:title="episode.title" />
  </div>
</template>

<script>
import EpisodeFrame from './components/EpisodeFrame.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    EpisodeFrame,
    SearchBar
  },
  data () {
    return {
      episodes: [
        { id: 0, title: 'Episode 1: Pilot' },
        { id: 1, title: 'Episode 2: Spanish 101' },
        { id: 2, title: 'Episode 3: Introduction to Film' }
      ]
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
