<template>
  <div class="home">
    <p>Super-charge your next Community rewatch (or first-time watch) with every reference from every episode of our favourite NBC sitcom!</p>
    <EpisodeGallery v-bind:episodeList="episodeList" v-bind:searchText="searchText" />
  </div>
</template>

<script>
import EpisodeGallery from '../components/EpisodeGallery'
import episodeList from '../assets/episodesList.json'

export default {
  name: 'Home',
  components: {
    EpisodeGallery
  },
  data () {
    return {
      episodeList,
      searchText: ''
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 15rem;
  margin-left: 5%;
  margin-right: 5%;
}

@media only screen and (max-width: 750px) {
  .home {
    margin-top: 10rem;
  }
}
</style>