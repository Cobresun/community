<template>
  <div>
    <h1 class="home-button" @click="push('/')">Community References</h1>
    <router-view/>
  </div>
</template>

<script>
import router from './router'

export default {
  methods: {
    push(path) {
      router.push(path)
    }
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

.home-button:hover {
  cursor: pointer;
}
</style>
