<template>
<div>
  <span id="dota"></span>
  <h1  id="h2" class="titreSec"> Nourriture </h1>

<div class="container">

  <div class="colonne1"></div>

    <div class="colonne4">
      
      <div id="text3">Le barbecue coréen propose bien souvent des morceaux plus épais que dans les yaki-niku japonais. La poitrine de porc est un incontournable. Aussi vous pourrez apprécier les pickles à la coréenne et les salades servies avec le repas. Vous cuirez la viande sur le grill de votre table. En fonction des restaurants, le serveur peut cuire votre viande pour vous.</div>
      <img class="image_left" src="./../../assets/shinjuku/planchaShinjuku.jpg"/>
    </div>

  <div class="colonne5">
   
    <img class="image_right" src="./../../assets/shinjuku/galetteShinjuku.jpg"/>
    <div id="text3bis">Reprenant la recette traditionnelle du oyakodon, un bol de riz surmonté d’œuf et de poulet, ce menu s'inscrit pourtant parfaitement dans la ligne directrice de l'établissement qui est de proposer des produits de qualité. Et pour cause, ce oyakodon bon marché est réalisé à base de poulet de premier choix.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>


</template>




<script>
export default {
  name : 'ThirdScreenAsakusa',
created () {
    window.addEventListener('scroll', this.oui);
  },
  destroyed () {
    window.removeEventListener('scroll', this.oui);
  },


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
