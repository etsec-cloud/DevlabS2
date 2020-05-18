<template>

<div class="container">
  <div class="colonne1"></div>

  <div id="vcs" class="colonne8">
    <h1 class="titreSec" >Spécialités</h1>
    <div id="text5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <img  class="image_left" src="./../../assets/asakusaPots.jpg" />
  </div>

  <div class="colonne9">
    <img  class="image_right" src="./../../assets/asakusaFood.jpg"/>
    <div id="text5bis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>

</template>




<script>
export default {
  name : 'FifthScreenAsakusa',
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
.colonne1{
  width: 20%;
  justify-content: center;
}


#h4{
  margin-left: 30vw; 
}

.colonne8{
  width: 37%;
}


#text5{
  text-align: center;
  margin-top: 5vh; 
}

.colonne9{
  width: 37%;
  margin-top: 13vh; 
}

#text5bis{
  text-align: center;
}

@media screen and (max-width: 900px) {
  .colonne8,
  .colonne9{
    width: 90%;
  }
}
</style>
