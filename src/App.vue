<template>
  <div id="app">
    <div v-on:click="overlayOut" class="site-pusher">
      <div class="site-cache">
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
  created () {
    window.addEventListener('scroll', this.oui);
  },
  destroyed () {
    window.removeEventListener('scroll', this.oui);
  },

  methods: {
    oui : function(){
       var prevScrollpos = window.pageYOffset;
        
        window.onscroll = function() {

        var currentScrollpos = window.pageYOffset;
          if(prevScrollpos > currentScrollpos) {
            console.log('top')
                document.getElementById("navbar").style.top = "0";
          } 

          else {
            console.log('bot')

                document.getElementById("navbar").style.top = "-100px";
          }

        prevScrollpos = currentScrollpos;

      }
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
}
body{
  margin: 0;
}
</style>
