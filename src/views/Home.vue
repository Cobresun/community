<template>
  <div class="home">
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
