<template>
<div>
  <span id="cs"></span>
    <h1 id="h3" class="titreSec">Lieux incontournables</h1>

<div class="container">

  <div class="colonne1"></div>
  

  <div  class="colonne6">
    <img src="./../../assets/asakusaMagasin.jpg" class="image_left"/>
    <div id="text4">C'est ici qu'il faut se rendre pour visiter les boutiques d'ustensiles de cuisine, fréquentées à la fois par les professionnels de la restauration et les badauds désireux de ramener un souvenir typique du Japon : céramiques, bols, baguettes, théière, verres etc. C'est également dans cette rue que se trouvent les boutiques de faux aliments en cire. Ces représentations impérissables et très réalistes sont cependant bien plus chers que leurs originaux périssables.</div>
  </div>

  <div class="colonne7">
    <div id="text4bis">Sur le toit d'un gratte-ciel situé de l'autre côté du fleuve Sumida, se trouve la flamme de l'immeuble de la brasserie Asahi conçue par Philippe Starck. Bien qu'elle fût censée à l'origine représenter à la fois une bulle de bière qui s'élève et une flèche pointée vers l'avenir, les japonais la voient en général comme une grande crotte de chien... : la ville n'a pas autorisé son positionnement vertical, considérant que l'ensemble dépassait les hauteurs autorisées de l'époque, la statue est restée ainsi couchée depuis.</div>
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
