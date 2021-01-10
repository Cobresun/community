<template>
    <div class="page">
        <h2>References in S{{ episode["season"] }}E{{ episode["episodeInSeason"] }}: {{ episode["title"] }}</h2>
        <div v-if="references.length > 0">
            <p v-for="reference in references" v-bind:key="reference">{{ reference.name }} ({{ reference.type }})</p>
        </div>
        <div v-if="references.length === 0">
            <p>No references for this episode 😢</p>
        </div>
    </div>
</template>

<script>
import episodes from '../assets/episodesList.json';

export default {
    name: 'EpisodePage',
    props: {
        id: String
    },
    data() {
        return {
            episode: episodes[this.id],
            references: episodes[this.id]["references"]
        }
    }
}
</script>

<style scoped>
.page {
  margin-top: 12rem;
  margin-left: 5%;
  margin-right: 5%;
}

@media only screen and (max-width: 750px) {
  .page {
    margin-top: 9rem;
  }
}
</style>
