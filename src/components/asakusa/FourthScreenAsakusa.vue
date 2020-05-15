<template>

<div class="container">

  <div class="colonne1"></div>

  <div id="cs" class="colonne2">
<<<<<<< HEAD
=======
    <h1>Lieux incontournables</h1>
>>>>>>> e81574c43458fce62c0227d7af77c63d39068d20
    <div class="image_left3"></div>
    <div id="text4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div class="colonne3">
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

.trait{
  background-color: black;
  height: 3px;
  width: 80%;
  margin-left: 10%;
  margin-top: 12%;
  margin-bottom: 12%;
}

.text1maj{
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  }

.text1{
  text-align: center;
  font-size: 20px;
}



.colonne2{
  width: 37%;
}

.image_left3{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusaMagasin.jpg");
  background-position: center center;
  background-size:contain;
  background-repeat: no-repeat;
}

.text4{
  text-align: center;
}

.colonne3{
  width: 37%;
}

.text4bis{
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
