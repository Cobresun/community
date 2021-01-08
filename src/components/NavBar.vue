<template>
    <div class="navbar">
        <transition name="grow-text">
          <h1 
            id="home-button"
            v-show="displayTitle"
            class="title-size"
            @click="push('/')"
          >Community: Required Reading</h1>
        </transition>
        <div id="bottom-row">
            <SearchBar id="search"/>
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
    data() {
      return {
        displayTitle: true
      }
    },
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
            this.displayTitle = !(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
        }
    }
}
</script>

<style scoped>
#search {
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
  font-weight: bold;
}
#home-button:hover {
  cursor: pointer;
}

.title-size {
  font-size: 50px
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

@media only screen and (max-width: 600px) {
  .title-size {
    font-size: 25px;
  }
}

.grow-text-enter-active, .grow-text-leave-active {
  transition: 0.3s;
}
.grow-text-enter-from, .grow-text-leave-to {
  font-size: 0px;
}
</style>
