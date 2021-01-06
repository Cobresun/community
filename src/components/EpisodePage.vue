<template>
    <div>
        <h3>{{ episodes[id] }}</h3>
    </div>
</template>

<script>

import episodes from '../assets/episodesList.json';
export default{
    name: 'EpisodePage',
    props: {
        id:{
            type: String,
            required: false
        }
    },
    data(){
        return {
            episodes: episodes
        }
    }
}
</script>