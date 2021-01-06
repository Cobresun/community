<template>
  <div class="home">
    <p>Super-charge your next Community rewatch with every reference from every episode of our favourite NBC sitcom!</p>

    <SearchBar v-model="searchText"/>
    <EpisodeGallery v-bind:episodeList="episodeList" v-bind:searchText="searchText" />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import EpisodeGallery from '../components/EpisodeGallery'

import episodeList from '../assets/episodesList.json'

export default {
  name: 'Home',
  components: {
    EpisodeGallery,
    SearchBar
  },
  data () {
    return {
      // episodeList: episodeList.concat(episodeList).concat(episodeList).concat(episodeList),
      episodeList,
      searchText: ''
    }
  }
}
</script>
