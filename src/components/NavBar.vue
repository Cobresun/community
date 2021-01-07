<template>
    <div class="navbar">
        <h1 id="home-button" @click="push('/')">Community References</h1>
        <div id="bottom-row">
            <SearchBar id="search" v-model="searchText"/>
            <ul>
                <li><a @click="push('/about')">About</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import router from '../router'
import SearchBar from '../components/SearchBar.vue'

export default {
    name: 'NavBar',
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    components: {
        SearchBar
    },
    methods: {
        push(path) {
            router.push(path)
        },
        handleScroll() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("home-button").style.fontSize = "0px";
            } else {
                document.getElementById("home-button").style.fontSize = "50px";
            }
        }
    }
}
</script>

<style scoped>
body {margin:0;}

#search {
    display: inline-block;
    width: 80%;
    float: left;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 10%;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding-bottom: 5px;
  background-color: #eee;
  z-index: 1;
}

#home-button {
  font-size: 50px;
  font-weight: bold;
  transition: 0.4s;
}
#home-button:hover {
  cursor: pointer;
}

#bottom-row {
  padding-left: 15%;
  padding-right: 5%;
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}

li a:hover:not(.active) {
  background-color: #bbb;
}

.active {
  background-color: #4CAF50;
}
</style>
