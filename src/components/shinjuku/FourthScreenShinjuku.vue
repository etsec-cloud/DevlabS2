<template>
<div>
  <span id="cs"></span>
    <h1 id="h3" class="titreSec">Lieux incontournables</h1>

<div class="container">

  <div class="colonne1"></div>
  

  <div  class="colonne6">
    <img src="./../../assets/shinjuku/sanctuaireShinjuku.jpg" class="image_left"/>
    <div id="text4">Shinjuku n'est pas un lieu d'importance religieuse particulière, mais il y a ce sanctuaire appelé Hanazono qui se distingue dans le paysage en raison de sa beauté et du fait que ses locaux sont l'une des rares surfaces à Shinjuku qui ne sont pas couvertes de bâtiments en béton ou de grande hauteur. . Le sanctuaire remonte au 17ème siècle et est traditionnellement un endroit où les gens prient pour réussir. Il est situé très près des ruelles de Golden Gai, alors assurez-vous de visiter ce petit bijou aussi.</div>
  </div>

  <div class="colonne7">
    <div id="text4bis">Golden Gai est une petite zone abritant des bars populaires typiquement japonais au cœur du quartier de Kabukicho, situé dans l'arrondissement de Shinjuku à l'ouest de Tokyo. Les salariés nippons aiment à se retrouver dans l'un de ses établissements après le travail, où règne une atmosphère conviviale et décontractée.</div>
    <img class="image_right" src="./../../assets/shinjuku/goldenGaiShinjuku.jpg"/>
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
