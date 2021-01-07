<template>
  <div class="home">
    <EpisodeGallery v-bind:episodeList="episodeList" v-bind:searchText="searchText" />
  </div>
</template>

<script>
import EpisodeGallery from '../components/EpisodeGallery'
import episodeList from '../assets/episodesList.json'
import store from '../store'

export default {
  name: 'Home',
  components: {
    EpisodeGallery
  },
  created() {
    console.log(store.state.searchQuery);
  },
  data () {
    return {
      episodeList,
      searchText: ''
    }
  }
}
</script>
