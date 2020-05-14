<template>

<div class="container">
  <div class="colonne1">
    <div id="menu" >
      <div  
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
       >
         

        <img class="imageMap" src="./../../assets/asakusaMap.jpg" /> 
      </div>
      <div class="trait"></div>
      <div class="text1" v-scroll-to="'#text2bis'">Culture/Evènement </div> 
      <div class="trait"></div>
      <div class="text1" v-scroll-to="'#text3'">Nourriture</div>
      <div class="trait"></div>
      <div class="text1" v-scroll-to="'#text4bis'">Lieux incontournables</div>
      <div class="trait"></div>
      <div class="text1" v-scroll-to="'#text5'">Spécialité</div>
      <div class="trait"></div>
  </div>

  </div>

  <div id="lol" class="colonne2">
    <h1  >Culture/Evènement</h1>
    <div class="image_left"></div>
    <div id="text2">Lorem  ici alll ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div class="colonne3">
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

      var colonne1 = document.getElementById("lol");
      var coul = document.querySelector('.text1');
      var bold = colonne1.offsetHeight;
      
      if (window.pageYOffset >= bold) {
        coul.classList.add("text1maj");
      }

      else if (window.pageYOffset < bold){
        coul.classList.remove("text1maj");
      }

    },

    stickymenu: function(){

      var colonne1 = document.getElementById("menu");
      var coul = document.getElementById("lol");
      var sticky = colonne1.offsetHeight;

      var lo = 250;
      
      if (window.pageYOffset - lo > sticky) {
        console.log(coul.offsetHeight)
        
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
