<template>
<div>
  <span id="dota"></span>
  <h1  id="h2" class="titreSec"> Nourriture </h1>

<div class="container">

  <div class="colonne1"></div>

    <div class="colonne4">
      
      <div id="text3">Shibuya attire beaucoup de jeunes ainsi que de touristes du monde entier, alors au menu: des grandes enseignes internationales, de la nourriture kawaii (mignonne) à Harajuku et des plats typiques japonais (sushis, ramens...).</div>
      <img class="image_left" src="./../../assets/shibuya/shibuya3.jpg"/>
    </div>

  <div class="colonne5">
   
    <img class="image_right" src="./../../assets/shibuya/shibuya4.png"/>
    <div id="text3bis">On retrouve beaucoup de desserts sucrés kawaii, surtout dans le quartier coloré de Harajuku connu pour son "Kawaii Monster Café", un lieu incontournable pour déguster des desserts mignons ! On aura également beaucoup de restauration rapide, que ce soit des burgers américains ou des plats à emporter plus traditionnels japonais.
</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>


</template>




<script>
export default {
  name : 'ThirdScreenShibuya',
created () {
    window.addEventListener('scroll', this.oui);
  },
  destroyed () {
    window.removeEventListener('scroll', this.oui);
  },

};


</script>


<style>

#h2{
  margin-top: -5vh;
}
.colonne4{
  width: 37%;
}
#text3{
  text-align: center;
  margin-bottom: 2vh;
}
.colonne5{
  width: 37%;
  margin-top: -5vh;
}
#text3bis{
  text-align: center;
  margin-top: 2vh;
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
