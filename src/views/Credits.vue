<template>
  <div class="black-body">
  <div class="central-box">
  <div class="text">
      <h1>Crédits ||
クレジット</h1>
      <p>Création du site web : Etienne Secondini, Alexandre Duval, Noa Devillers.<br><br>

Site réalisé sous Vue JS et mapbox.<br><br>   

Hébergement<br>
OVH, 2 rue Kellermann. 59100 Roubaix – France<br><br>

Déclaration à la CNIL<br>
Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, le site www.copieprivee.org a fait l’objet d’une déclaration à la Commission nationale de l’informatique et des libertés (CNIL).<br><br>

Photographies<br>
© Marc Chesneau<br>
© James Thew<br>
© Julie Carrere<br>
© Robert Przybysz<br>
© Ermolaev Alexandrovich<br><br>
Vidéos</p>
    <router-view/>
  </div>
  </div>
  </div>
</template>


<style scoped>

@media screen and (min-width: 981px){

.black-body{
  background-color: black;
  padding: 10%;
}

.central-box{
    margin: 0% 10%; 
    color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 6px;
    border-color: #000000 #000000 #000000 white;
}

.text{
  margin: 5%;
  text-align: justify;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:justify;
  color: #ffffff;
}
}

@media screen and (max-width: 981px){

.black-body{
  background-color: black;
  padding: 10%;
}

.central-box{
    color: rgb(255, 255, 255);
}

.text{
  margin: 5%;
  text-align: justify;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:justify;
  color: #ffffff;
}
}

</style>