<template>
    <div class="card" @click="push('/ep/', episode.episodeGlobally)">
        <img :src="require(`../assets/images/${episode.imageUrl}`)" alt="Avatar" style="width:100%">
        <h3><b>{{ episode.title }}</b></h3>
        <p>{{"Season " + episode.season + " Episode "+ episode.episodeInSeason}}</p>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'EpisodeFrame',
    props: {
        episode: Object
    },
    methods: {
        push: function (path, query) {
            router.push({
                path: path + (query-1)
            });
        }
    }
}
</script>

<style scoped>
    .card {
        border: 2px solid #e7e7e7;
        border-radius: 4px;
        transition: 0.5s ease;
    }
    .card:hover {
        -webkit-transform:scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.5s ease;
        cursor: pointer;
    }
</style>