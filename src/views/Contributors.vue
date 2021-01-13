<template>
    <div id="contributors">
        <h1>Reference Contributors</h1>
        <ul class="content-text">
          <li><a href="https://community-sitcom.fandom.com/wiki/Community_Wiki">Community Fandom Wiki</a></li>
          <li><a href="https://www.reddit.com/r/community/comments/kuuwck/check_out_this_searchable_index_of_every/gj2426t?utm_source=share&utm_medium=web2x&context=3">
            thecoma3</a> pointed out <router-link to="/ep/106">Season 6 Episode 10</router-link> references Breaking Bad</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Contributors'
}
</script>

<style scoped>
#contributors {
    padding-top: 12rem;
}

.content-text{
    text-align: left;
    width: 50%;
    margin: auto;
}

@media only screen and (max-width: 750px) {
    #contributors {
        padding-top: 9rem;
    }
    .content-text {
        width: 95%;
    }
}
</style>
