<template>

    <nav id="navbar" class="cl-effect-21">
        <span v-on:click="burgerAnime" id="toggler"> clique burger</span>
        <router-link id="bigmenu" class="menu-item"
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
    methods:{
        burgerAnime: function(){
            let pusher = document.querySelector('.site-pusher');
            let image = document.querySelectorAll('.image_left');
            pusher.classList.toggle('activate');

            let overlay = document.querySelector('.site-cache');
            overlay.classList.add('overlay');


            image.classList.add('overlay');

            if(overlay.classList.contains('true')){
                console.log('treu')

            }
        }
    }
   
    
};
  

     
</script>
<style>


#nav-icon1 {
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 18px;
}

#nav-icon1 span:nth-child(3) {
  top: 36px;
}

#nav-icon1.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}





.site-pusher{
    height: 100%;
    transition-duration: 0.3s;
    transform: translateX(0px); 
    overflow: hidden;
}

#toggler{
    display: none;
}
.activate{
    transform: translateX(50vw); 
}

.overlay{
    z-index: 300;
    height: 100%;
    opacity: 1;
    z-index: 10000;
    background-color:black !important;
    background-repeat: repeat;
}


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
  transition: top 0.5s;
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
@media only screen and (max-width: 750px) {
    #toggler{
        display:block;
        margin-left: 2vw;
    }
    nav{
        justify-content: flex-start !important;
    }
    #bigmenu{
        display: none;
    }
}
</style>