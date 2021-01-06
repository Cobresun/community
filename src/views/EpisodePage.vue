<template>
    <div>
        <h1>References in {{ episodeTitle }}</h1>
        <p v-for="reference in references" v-bind:key="reference" >{{ reference }} </p>
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
            episodeTitle: episodes[this.id]["title"]
        }
    },
    computed: {
        references() {
            if (episodes[this.id]["references"].length > 0) {
                return episodes[this.id]["references"]
            } else {
                return ["No references"]
            }
        }
    }
}
</script>