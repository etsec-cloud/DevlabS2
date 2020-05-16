<template>

<div class="container">

  <div class="colonne1"></div>

  <div id="cs" class="colonne6">
    <h1 id="h3"><FONT size="10pt"><U>Lieux incontournables</U></FONT></h1>
    <div class="image_left3"></div>
    <div id="text4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div class="colonne7">
    <div id="text4bis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="image_right3"></div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

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

.container{
  height:100vh;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
}

.colonne1{
  width: 20%;
  justify-content: center;
}

#h3{
  margin-left: 25vw;
  position:absolute;
}

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
}

.colonne7{
  width: 37%;
  margin-top: 13vh;
}

#text4bis{
  text-align: center;
}

.image_right3{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusaPorte.jpg");
  background-position: center center;
  background-size:cover;
  margin-top: 30px;
}

</style>
