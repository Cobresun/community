<template>
    <div>
        <h3>References in {{ episodeTitle }}</h3>
        <div v-if="references.length > 0">
            <p v-for="reference in references" v-bind:key="reference">{{ reference.name }} ({{ reference.type }})</p>
        </div>
        <div v-if="references.length === 0">
            <p>No references for this episode!</p>
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
            episodeTitle: episodes[this.id]["title"],
            references: episodes[this.id]["references"]
        }
    }
}
</script>