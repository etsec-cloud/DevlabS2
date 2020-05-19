<template>
    <nav class="cl-effect-21">
        <router-link class="menu-item"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
            >{{ routes.text }}</router-link
          >
    </nav>
</template>


<script>
export default {
    name:'NavBar',
        data(){
            return{
                /*showNavbar: true,
                lastScrollPosition: 0,*/
                links: [
                    {
                        id: 0,
                        text: 'Accueil',
                        page:'/'
                    },  
                    {
                        id: 2,
                        text: 'Shinjuku',
                        page:'/Shinjuku'
                    },
                    {
                        id: 3,
                        text: 'Asakusa',
                        page:'/Asakusa'
                    },
                    {
                        id: 4,
                        text: 'Shibuya',
                        page:'/Shibuya'
                    }
                ]

            }
        },
  };
  
  /* methods: {
  onScroll ();{
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    this.showNavbar = currentScrollPosition < this.lastScrollPosition
    this.lastScrollPosition = currentScrollPosition
  } 
}*/
     
</script>
<style>
nav{
  position:fixed;
  left:0;
  top:0;
  width:100vw;
  z-index:200; 
  height:100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  background-color: white;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

nav .menu-item {
    color: #000;
    padding: 10px 0;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;   
    display: flex;
    transition: 0,4s;
}
nav .menu-item  {
    color: inherit;
    text-decoration: none;
}
</style>