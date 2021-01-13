<template>
  <div>
    <NavBar/>
    <router-view/>
    <footer>
      <div class="created">
        <b>Created with 💛 by <a href="https://twitter.com/cobresun" target="_blank">Cobresun.</a></b>
      </div>
      <div>
        <a href='https://ko-fi.com/D1D437D52' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </div>
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
body{
    margin: 0px;
    padding: 0px;
}

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
  display: flex;
  align-items: center;
  justify-content: center;
}

.created {
  padding-right: 16px
}

@media only screen and (max-width: 750px) {
    footer {
      flex-direction: column;
    }
    .created {
      padding-right: 0px;
      padding-bottom: 16px;
    }
}
</style>
