<template>
<div>
  <span id="vcs"></span>
    <h1 id="h4" class="titreSec" >Spécialités</h1>
<div class="container">
  <div class="colonne1"></div>

  <div  class="colonne8">
    <div id="text5">Vous pouvez y voir la boutique Yatsume qui vend des accessoires pour les cheveux et les coiffures traditionnelles. Depuis 90 ans, les fillettes et jeunes filles vont y faire leurs emplettes en vue d’une fête traditionnelle où elles porteront un kimono et seront coiffées "à l'ancienne" : la fête du shichigosan, la cérémonie pour la fête de la majorité , à 20 ans, un ou leur mariage… Le magasin vend également des Edo Oshie Hagoita, ces objets typiques que l’on achète à la fin de l’année. Il s’agit d’une petite planche de bois en forme de raquette décorée de collages de textiles représentant des acteurs de Kabuki, des lutteurs de sumo ou de jolies femmes.</div>
    <img  class="image_left" src="./../../assets/asakusaPots.jpg" />
  </div>

  <div class="colonne9">
    <img  class="image_right" src="./../../assets/asakusaFood.jpg"/>
    <div id="text5bis">Après l’avoir traversée, vous serez plongé dans la rue animée de Nakamise. Celle-ci est bordée d’une myriade de petites boutiques qui rivalisent les unes avec les autres pour attirer l’attention des badauds. Vous y trouverez des magasins proposant des produits issus de l’artisanat traditionnel ainsi que des stands de Dorayaki, de petits pains  manju frits, ou de boulettes dango.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
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
  margin-bottom: 2vh; 
}

.colonne9{
  width: 37%;
  margin-top: 1vh;
  margin-bottom: 10vh; 
}

#text5bis{
  text-align: center;
  margin-top: 2vh; 
}

@media screen and (max-width: 900px) {
  .colonne8,
  .colonne9{
    width: 90%;
  }
}
</style>
