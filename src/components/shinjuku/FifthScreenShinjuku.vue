<template>
<div>
  <span id="vcs"></span>
    <h1 id="h4" class="titreSec" >Spécialités</h1>
<div class="container">
  <div class="colonne1"></div>

  <div  class="colonne8">
    <div id="text5">. Acacia se présente comme un spécialiste des rouleaux de chou, et en effet, leurs rouleaux de chou, mijotés dans un ragoût blanc légèrement assaisonné, n'ont pas changé du tout en plus d'un demi-siècle. Ils ont injecté un peu de nos jours dans le menu avec de nouvelles offres telles que le curry "diaboliquement épicé", les jambons et les saucisses maison et d'autres plats qui complètent la bière allemande (Jever) en fût</div>
    <img  class="image_left" src="./../../assets/shinjuku/acaciaShinjuku.jpg" />
  </div>

  <div class="colonne9">
    <img  class="image_right" src="./../../assets/shinjuku/izakayaShinjuku.jpg"/>
    <div id="text5bis">Perdu au milieu des love hôtels, cet izakaya à la sobre façade vous transportera dans une atmosphère électrisante qui vous ferait presque oublier que vous êtes dans le pays du raffinement.</div>
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
