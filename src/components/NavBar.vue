<template>
    <nav id="navbar" class="cl-effect-21">
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
                showNavbar: true,
                lastScrollPosition: 0,
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
.hide{
    top: -80px;
}
.cl-effect-21 a {
	padding: 10px;
	color: #000000;
	font-weight: 700;
	text-shadow: none;
	-webkit-transition: color 0.3s;
	-moz-transition: color 0.3s;
	transition: color 0.3s;
}
.cl-effect-21 a::before,
.cl-effect-21 a::after {
	position: absolute;
	left: 0;
	width: 100%;
	height: 2px;
	background: rgba(2, 2, 2, 0.521);
	content: '';
	opacity: 0;
	-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
	-moz-transition: opacity 0.3s, -moz-transform 0.3s;
	transition: opacity 0.3s, transform 0.3s;
	-webkit-transform: translateY(-10px);
	-moz-transform: translateY(-10px);
	transform: translateY(-10px);
}
.cl-effect-21 a::before {
	top: 0;
	-webkit-transform: translateY(-10px);
	-moz-transform: translateY(-10px);
	transform: translateY(-10px);
}
.cl-effect-21 a::after {
	bottom: 0;
	-webkit-transform: translateY(10px);
	-moz-transform: translateY(10px);
	transform: translateY(10px);
}
.cl-effect-21 a:hover,
.cl-effect-21 a:focus {
	color: rgba(2, 2, 2, 0.521);
}
.cl-effect-21 a:hover::before,
.cl-effect-21 a:focus::before,
.cl-effect-21 a:hover::after,
.cl-effect-21 a:focus::after {
	opacity: 1;
	-webkit-transform: translateY(0px);
	-moz-transform: translateY(0px);
	transform: translateY(0px);
}

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