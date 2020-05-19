<template>
<div>
  <span id="vcs"></span>
    <h1 id="h4" class="titreSec" >Spécialités</h1>
<div class="container">
  <div class="colonne1"></div>

  <div  class="colonne8">
    <div id="text5">Shibuya regorge de "yakiniku" - des restaurants de barbecues japonais - à chaque coin de rue! Les plus célèbres sont Yoroniku, Kobe Yakiniku Kanteki et Marujyu Seiniku Mise Shibuya. On peut y déguster une excellente variété de viandes rouges, notamment le boeuf de Kobe.</div>
    <img  class="image_left" src="./../../assets/shibuya/shibuya7.jpg" />
  </div>

  <div class="colonne9">
    <img  class="image_right" src="./../../assets/shibuya/shibuya8.jpg"/>
    <div id="text5bis">Le boeuf de Kobe provient de la race bovine des "tajima", qui élevés dans la pure tradition dans la région de Hyogo (dont la capitale se nomme Kobe) au centre-ouest du Japon.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>

</template>

<script>
export default {
  name : 'FifthScreenShibuya',
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
