<template>
<div>
  <span id="dota"></span>
  <h1  id="h2" class="titreSec"> Nourriture </h1>

<div class="container">

  <div class="colonne1"></div>

    <div class="colonne4">
      
      <div id="text3">Le menu est basé sur les recettes du grand-père du propriétaire. Ils ont une variété d'articles classiques parmi lesquels choisir, avec des prix inférieurs à 1 000 ¥. Si vous ne savez pas quoi obtenir, essayez leur menu signature «Omumaki», qui est des nouilles sautées enveloppées dans une omelette. Le restaurant sert également une délicieuse carte de desserts, ce qui en fait un endroit idéal pour passer une pause l'après-midi si vous êtes entre les repas.</div>
      <img class="image_left" src="./../../assets/nourriture_asakusa1.jpg"/>
    </div>

  <div class="colonne5">
   
    <img class="image_right" src="./../../assets/nourriture_asakusa2.jpg"/>
    <div id="text3bis">Il existe également l'un des meilleurs et des plus célèbres magasins de ramen d'Asakusa; Yoroiya. Asakusa est l'un des ramen mechas de Tokyo et Yoroiya est la boutique la plus célèbre du quartier. Le magasin est très proche de l'emblématique Sensoji, situé juste à côté de la rue commerçante animée de Nakamise. Vous pouvez toujours vous attendre à voir une ligne se former à l'extérieur, car la célèbre boutique est appréciée des Tokyoïtes et des touristes.
</div>
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

  methods: {
    oui : function(){
       var prevScrollpos = window.pageYOffset;
        
        window.onscroll = function() {

        var currentScrollpos = window.pageYOffset;
          if(prevScrollpos > currentScrollpos) {
            console.log('top')
                document.getElementById("navbar").style.top = "0";
          } 

          else {
            console.log('bot')

                document.getElementById("navbar").style.top = "-100px";
          }

        prevScrollpos = currentScrollpos;

      }
      }
      }


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
