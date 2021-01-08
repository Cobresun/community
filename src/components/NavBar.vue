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
            <div class="link" @click="push('/about')">About</div>
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
  width: 60%;
  margin-right: 1rem;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 8px;
}

.link {
  color: black;
  padding: 8px 8px;
  cursor: pointer;
}

.link:hover {
  background-color: #bbb;
}

@media only screen and (max-width: 750px) {
  #search {
    width: 100%;
  }
  #bottom-row {
    margin-left: 1rem;
    margin-right: 1rem;
  }
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
