<template>
<div>
  <span id="cs"></span>
    <h1 id="h3" class="titreSec">Lieux incontournables</h1>

<div class="container">

  <div class="colonne1"></div>
  

  <div  class="colonne6">
    <img src="./../../assets/shibuya/shibuya5.jpg" class="image_left"/>
    <div id="text4">Le parc Yoyogi, situé près de la station d'Harajuku et du sanctuaire Meiji, est un endroit apprecié des habitants de la ville pour passer un moment agréable en pleine nature. Avec ses 54 hectares de terrain, le parc était utilisé autrefois pour héberger le village olympique lors des JO de Tokyo en 1964.</div></div>

  <div class="colonne7">
    <div id="text4bis">Shibuya est connu mondialement pour posséder le carrefour le plus célébre du monde. Pendant 55 secondes, la foule s'empare de ce passage piéton et on peut admirer les 2 500 personnes (environ) qui le traversent à chaque fois que le feu piéton passe au vert ! Vous ne pourrez pas le louper à la sortie de la gare de Shibuya</div>
    <img class="image_right" src="./../../assets/shibuya/shibuya6.jpg"/>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>
</template>




<script>
export default {
  name : 'FourthScreenShibuya',
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
  background-position: center center;
  background-size:contain;
  background-repeat: no-repeat;
  margin-top: 5vh;
}

#text4{
  text-align: center;
  margin-top: 2vh;
}

.colonne7{
  width: 37%;
  margin-top: -1vh;
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
