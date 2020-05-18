<template>
<div>
  <h1  id="lol" class="titreSec">Culture/Evènement</h1>
  <div class="container">
    <ul id="list" class="colonne1">
      <div id="menu">
      
        <li
          v-on:mouseover="yo"
          v-on:mouseleave="ya"

          @mouseover="hover = true"
          @mouseleave="hover = false"
          :class="{ active: hover}"
        >   
        
          <img  class="imageMap" src="./../../assets/asakusaMap.jpg"/> 
        </li>

        <li        class="trait"></li>
        <li id="1" class="text1" v-scroll-to="'#h1'">Culture/Evènement </li> 
        <li        class="trait"></li>
        <li id="2" class="text1" v-scroll-to="'#h2'">Nourriture</li>
        <li        class="trait"></li>
        <li id="3" class="text1" v-scroll-to="'#h3'">Lieux incontournables</li>
        <li        class="trait"></li>
        <li id="4" class="text1" v-scroll-to="'#h4'">Spécialité</li>
        <li        class="trait"></li>
      </div>
    </ul>

  <div  class="colonne2">
    
    <img class="image_left" src="./../../assets/asakusa2.jpg"/>
    <div id="text2">Lorem  ici all ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem  ici alll ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>

  <div  class="colonne3">
   
    <div id="text2bis">Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem  ici alll ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <img class="image_right" src="./../../assets/asakusa3.jpg"/>
  </div>


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
    yo:function(){
      var body = document.querySelector('#app');
        body.classList.add("bgcol");
    },
    ya:function(){
      var body = document.querySelector('#app');
        body.classList.remove("bgcol");
    },

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
.bgcol{
  background-color: rgb(4, 4, 56);
}


li{
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}
.active {
  position:static;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 90vw;
  margin-left: 52vw;
  margin-top: 45vh;
}
.container{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
}
.sticky {
  position: fixed;
  top: 0;
  width: 20%;
  margin-top: 16vh;
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

.titreSec{
  font-size:5vw;
  margin-left: 20vw;
}
.imageMap{
  width: 50%; 
} 
.colonne2{
  width: 37%;
  margin-bottom: 20vh;
}
.image_left{
  width: 100%;
  
}
#text2{
  text-align: center;
  margin-top: 40px;
  }
.colonne3{
  width: 37%;
  margin-top: 15vh;
}
#text2bis{
  text-align: center;
}
.image_right{
  width: 100%;
  margin-top: 50px;
}
@media screen and (max-width: 900px) {
.container{
    width: 100%;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
}
.colonne1{
  display: none;
}
.titreSec{
  margin-left: 0;
}

.colonne2{
  width: 90%;
}
.colonne3{
  width: 90%;
}

.colonne6{
  width: 90%;
}
.colonne7{
  width: 90%;
}
.colonne9{
  width: 90%;
}




}
</style>