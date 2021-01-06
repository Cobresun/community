<template>
    <div>
        <h3 @click="push('/ep/'+(id-1))">{{ title }}</h3>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'EpisodeFrame',
    props: {
        title: String,
        id: Number
    },
    methods: {
        push: function (query) {
            router.push({
                path: query
            });
        }
    }
}
</script>

<style scoped>

</style>