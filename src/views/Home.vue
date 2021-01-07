<template>
  <div class="home">
    <p>Super-charge your next Community rewatch with every reference from every episode of our favourite NBC sitcom!</p>

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
      // episodeList: episodeList.concat(episodeList).concat(episodeList).concat(episodeList),
      episodeList,
      searchText: ''
    }
  }
}
</script>
