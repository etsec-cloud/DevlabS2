<template>
<div id="dota">
<div class="container">

  <div class="colonne1"></div>

  <div class="colonne4">
    <h1 id="h2"><FONT size="10pt"><U>Nourriture</U></FONT></h1>
    <div id="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="image_left2"></div>
  </div>

  <div class="colonne5">
   
    <div class="image_right2"></div>
    <div id="text3bis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

</div>
</div>
</template>




<script>
export default {
  name : 'ThirdScreenAsakusa',
  methods: {
    scroll: function() {
      var scrollIci = document.querySelector(".scrollIci");
      scrollIci.scrollTop= scrollIci.scrollHeight; 
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

#h2{
  margin-left: 31vw;
  padding-bottom: 3vh;
}

.colonne4{
  width: 37%;
}

.image_left2{
  height: 70%;
  width: 100%;
  background:url("./../../assets/nourriture_asakusa1.jpg");
  background-position: center center;
  background-size:contain;
  background-repeat: no-repeat;
}

#text3{
  text-align: center;
}

.colonne5{
  width: 37%;
  margin-top: 14vh;
}

#text3bis{
  text-align: center;
}

.image_right2{
  height: 70%;
  width: 100%;
  background:url("./../../assets/nourriture_asakusa2.jpg");
  background-position: center center;
  background-size:cover;
  margin-bottom: 30px;
}

</style>
