<template>
<div class="site-pusher">
  <div class="site-cache">
    <div id="app">
    <NavBar/>
    <router-view />

    <Footer/>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body{
  margin: 0;
}
</style>
