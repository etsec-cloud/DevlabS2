<template>
<div>
  <span id="cs"></span>
    <h1 id="h3" class="titreSec">Lieux incontournables</h1>

<div class="container">

  <div class="colonne1"></div>
  

  <div  class="colonne6">
    <img src="./../../assets/asakusaMagasin.jpg" class="image_left"/>
    <div id="text4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div class="colonne7">
    <div id="text4bis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <img class="image_right" src="./../../assets/asakusaPorte.jpg"/>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>
</template>




<script>
export default {
  name : 'FourthScreenAsakusa',
  methods: {
    scroll: function() {
      var scrollIci = document.querySelector(".scrollIci");
      scrollIci.scrollTop= scrollIci.scrollHeight; 
    },

    mouseOver: function() {
      document.getElementById("text1").style.color = "red";
    },
  }
};


</script>


<style>
.colonne6{
  width: 37%;
}
.image_left3{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusaMagasin.jpg");
  background-position: center center;
  background-size:contain;
  background-repeat: no-repeat;
  margin-top: 5vh;
}

#text4{
  text-align: center;
}

.colonne7{
  width: 37%;
  margin-top: 6vh;
}

#text4bis{
  text-align: center;
}

@media screen and (max-width: 900px) {
  .colonne6,
  .colonne7{
    width: 90%;
  }
}


</style>
