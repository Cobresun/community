<template>
<div class="gallery">
    <div 
        v-for="(collapse, index) in collapsed"
        :key="index"
    >
        <div class="cards">
            <div
                v-if="seasonHasResult(index+1)" 
                class="season-header"
            >
                <h1 class="title" >Season {{ index+1 }}</h1>
                <mdicon 
                    :name="collapse ? 'chevronDown': 'chevronUp'"
                    class="collapse-btn"
                    :width="32"
                    :height="32"
                    @click="toggleSeason(index)"
                />
            </div>
        </div>
        <transition-expand>
            <div v-if="!collapse" class="cards">
                <transition-group 
                    name="list"
                >
                    <episode-frame
                        class="list-item"
                        v-for="episode in filterBySeason(index+1)"
                        :key="episode.episodeGlobally"
                        :episode="episode"
                    />
                </transition-group>
            </div>
        </transition-expand>
    </div>
    <p v-if="filteredEpisodesCount === 0">No matches found 😢</p>
</div>
</template>

<script>
import EpisodeFrame from '../components/EpisodeFrame.vue'
import store from '../store'
import TransitionExpand from './animations/TransitionExpand.vue'

export default {
    name: 'EpisodeGallery',
    props: {
        episodeList: Object,
        searchText: String
    },
    data() {
        return {
            collapsed :[
                false,
                false,
                false,
                false,
                false,
                false
            ]
        }
    },
    components: {
        EpisodeFrame,
        TransitionExpand
    },
    methods: {
        includeEpisode(episode) {
            const searchQuery = store.state.searchQuery.toLowerCase();
            return episode.episodeInSeason.toString() === searchQuery
                || episode.title.toLowerCase().includes(searchQuery)
                || episode.references.some(ref => ref.name.toLowerCase().includes(searchQuery));
        },
        filterBySeason(season) {
            return this.filteredEpisodes.filter(episode => episode.season === season);
        },
        seasonHasResult(season) {
            return this.filteredEpisodes.some(episode => episode.season === season);
        },
        toggleSeason(season) {
            this.collapsed[season] = !this.collapsed[season];
        }
    },
    computed: {
        filteredEpisodes() {
            return this.episodeList.filter(episode => this.includeEpisode(episode));
        },
        filteredEpisodesCount() {
            return this.filteredEpisodes.length;
        },
    }
}
</script>

<style scoped>
.cards {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    width: 90%;
    justify-content: center;
}

.season-header {
    grid-column: 1/-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.collapse-btn {
    border-radius: 32px;
    transition: 0.2s;
}

.collapse-btn:hover {
  cursor: pointer;
  background-color: #bbb;
}

.list-item {
    transition: all 0.5s ease;
    display: inline-block;
}

.list-leave-active {
    position: absolute;
    display: none;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}
</style>
