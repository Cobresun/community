<template>
    <div class="card">
        <h3 @click="push('/ep/', episode.id)">{{ episode.title }}</h3>
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
        padding: .5rem;
    }
</style>