<template>
    <div id="about">
        <h1>About</h1>
        <div class="contentText">
            <blockquote>"<em>Community will likely always be a cult classic for those who can catch even a fraction of its references,</em>" - <a href="https://www.denofgeek.com/tv/community-series-review-and-appreciation/">David Crow, 2013</a></blockquote>

            <blockquote>"<em>Intoxicated with all things pop-cultural and self-referential, this smartly smart-alecky show long ago moved beyond its seemingly simple premise of Cheers in a community-college study group.</em>" - <a href="https://www.tvguide.com/news/roush-review-community-1026571/">Matt Roush, 2010</a></blockquote>

            <blockquote>"<em>That's as self-referential as you can get from a show built on pop culture-driven meta humor,</em>" - <a href="https://www.nbclosangeles.com/news/national-international/a-new-community-timeline-joel-mchale-dan-harmon-donald-glover/2054985/">Jere Hester, 2013</a></blockquote>

            <p>Oh boy does Community have a lot of references. Super-charge your next Community rewatch (or first-time watch) with every reference from every episode of our favourite NBC sitcom! We included movies, shows, books, plays, and songs either referenced or parodied in each episode, without including any spoilers for the episodes themselves.</p>

            <p>Most of the references were sourced from the <a href="https://community-sitcom.fandom.com/wiki/Community_Wiki">fandom's Wiki</a>, where you can find spoiler-filled explanations of each reference/parody, including when and how they appear in the episodes. See our full list of reference sources <router-link to="/contributors">here</router-link>.</p>

            <p>Chances are, we probably missed a couple (there are 110 episodes). If you know of a reference or parody we missed, please let us know so we can add it! Thanks 😃</p>

            <b>#SixSeasonsAndAMovie</b>

            <br>
            <br>

            <p style="font-size:0.8em;">We are not affiliated with, nor endorsed by NBC or Community. All images are property of their respective owners and are sourced from the <a href="https://community-sitcom.fandom.com/wiki/Community_Wiki">fandom's Wiki</a>.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
#about {
    padding-top: 12rem;
}

.contentText{
    text-align: left;
    width: 50%;
    margin: auto;
}

@media only screen and (max-width: 750px) {
    #about {
        padding-top: 9rem;
    }
    .contentText {
        width: 95%;
    }
}
</style>
