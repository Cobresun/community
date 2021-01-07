<template>
  <div>
    <NavBar v-model="searchText"/>
    <router-view/>
    <footer>
      <b>Created with 💛 by <a href="https://www.cobresun.com">Cobresun.</a></b>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  margin-top: 10%;
  margin-bottom: 5%;
}
</style>
