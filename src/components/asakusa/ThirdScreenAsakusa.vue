<template>
<div>
  <h1  id="dota" class="titreSec"> Nourriture </h1>
<div class="container">

  <div class="colonne1"></div>

    <div class="colonne4">
      
      <div id="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <img class="image_left" src="./../../assets/nourriture_asakusa1.jpg"/>
    </div>

  <div class="colonne5">
   
    <img class="image_right" src="./../../assets/nourriture_asakusa2.jpg"/>
    <div id="text3bis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>


</template>




<script>
export default {
  name : 'ThirdScreenAsakusa',
  methods: {
    scroll: function() {
      var scrollIci = document.querySelector(".scrollIci");
      scrollIci.scrollTop= scrollIci.scrollHeight; 
    },
  }
};


</script>


<style>

.colonne4{
  width: 37%;
}
#text3{
  text-align: center;
}
.colonne5{
  width: 37%;
}
#text3bis{
  text-align: center;
}
@media screen and (max-width: 900px) {

  .colonne4{
    width: 90%;
  }
  .colonne5{
    width: 90%;
  }
}
</style>
