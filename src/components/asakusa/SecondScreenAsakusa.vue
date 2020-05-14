<template>

<div class="container">
  <ul id="list" class="colonne1">
    <div id="menu">
    
      <li
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
       >   
       
        <img class="imageMap" src="./../../assets/asakusaMap.jpg"/> 
      </li>

      <li        class="trait"></li>
      <li id="1" class="text1" v-scroll-to="'#text2bis'">Culture/Evènement </li> 
      <li        class="trait"></li>
      <li id="2" class="text1" v-scroll-to="'#text3'">Nourriture</li>
      <li        class="trait"></li>
      <li id="3" class="text1" v-scroll-to="'#text4bis'">Lieux incontournables</li>
      <li        class="trait"></li>
      <li id="4" class="text1" v-scroll-to="'#text5'">Spécialité</li>
      <li        class="trait"></li>
    </div>
  </ul>
  

<span id="lol"></span>
  <div  class="colonne2">
    <h1>Culture/Evènement</h1>
    <div class="image_left"></div>
    <div id="text2">Lorem  ici alll ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div  class="colonne3">
   
    <div id="text2bis">Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="image_right"></div>
  </div>


</div>

</template>

<script>
export default {
  data() {
    return{
      hover: false,
    }
  },
  name : 'SecondScreenAsakusa',
  created () {
    window.addEventListener('scroll', this.stickymenu);
    window.addEventListener('scroll', this.bold);


  },
  destroyed () {
    window.removeEventListener('scroll', this.stickymenu);
    window.removeEventListener('scroll', this.bold);


  },

  methods: {

   bold: function(){

     //element dans le container

      var colonne1 = document.getElementById("lol");
      var colonne2 = document.getElementById("dota");
      var colonne3 = document.getElementById("cs");
      var colonne4 = document.getElementById("vcs");

      //element dans le menu
      var id1 = document.getElementById('1');
      var id2 = document.getElementById('2');
      var id3 = document.getElementById('3');
      var id4 = document.getElementById('4');


      



      
      if (window.pageYOffset > (colonne1.offsetTop))  { 
          id1.classList.add("text1maj");
      }

      if (window.pageYOffset > (colonne2.offsetTop)) {
          id1.classList.remove("text1maj");
          id2.classList.add("text1maj");
      }

      if (window.pageYOffset > (colonne3.offsetTop )){
        id2.classList.remove("text1maj");
        id3.classList.add("text1maj");
      }
      if (window.pageYOffset > (colonne4.offsetTop )){
        id3.classList.remove("text1maj");
        id4.classList.add("text1maj");
      }

      if (window.pageYOffset < (colonne4.offsetTop )){
        id4.classList.remove("text1maj");

      }
      if (window.pageYOffset < (colonne3.offsetTop )){
        id3.classList.remove("text1maj");

      }
      if (window.pageYOffset < (colonne2.offsetTop )){
        id2.classList.remove("text1maj");

      }
      if (window.pageYOffset < (colonne1.offsetTop )){
        id1.classList.remove("text1maj");

      }
    
    },

    stickymenu: function(){

      var colonne1 = document.getElementById("menu");
      var sticky = colonne1.offsetHeight;

      var lo = 250;
      
      if (window.pageYOffset - lo > sticky) {
        colonne1.classList.add("sticky");
      }

      else{
        colonne1.classList.remove("sticky");
      }

    },
  }
};

</script>


<style>
li{
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}

.active {
  position:absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 100vw;
}
.container{
  height:100vh;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
}

.sticky {
  position: fixed;
  top: 0;
  width: 20%;
  margin-top: 50px;
}

.colonne1{
  width: 20%;
  margin-top: 50px;
  justify-content: center;
  transition-duration:1s,

}

.trait{
  background-color: black;
  height: 3px;
  width: 80%;
  margin-left: 10%;
  margin-top: 12%;
  margin-bottom: 12%;
}

.text1maj{
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  }

.text1{
  text-align: center;
  font-size: 20px;
}

.imageMap{
  width: 50%;
  
}

.colonne2{
  width: 37%;
}

.image_left{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusa2.jpg");
  background-position: center center;
  background-size:contain;
  background-repeat: no-repeat;
}

.text2{
  text-align: center;
  margin-top: 30px;
}

.colonne3{
  width: 37%;
  margin-top: 50px;
}

.text2bis{
  text-align: center;
}

.image_right{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusa3.jpg");
  background-position: center center;
  background-size:cover;
  margin-top: 50px;
}
@media screen and (max-width: 900px) {

  .container{
  flex-direction: column ;
  justify-content: center;
  align-items: center;

  }
  #menu{
  display: flex;
  flex-direction: row;
  }
}

</style>
