<template>

<div class="container">

  <div class="colonne1"></div>

  <div class="colonne2">
    <div class="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="image_left4"></div>
  </div>

  <div class="colonne3">
    <div class="image_right4"></div>
    <div class="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

<span v-on:mouseover="mouseOver" class="text1"></span>

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
  font-size: 25px;
}

.imageMap{
  height: 20%;
  width: 50%;
  background:url("./../../assets/asakusaMap.jpg");
  background-position: center center;
  background-size: cover;
  margin-left: 25%;
}

.colonne2{
  width: 37%;
}

.image_left4{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusaPots.jpg");
  background-position: center center;
  background-size:contain;
  background-repeat: no-repeat;
}

.text3{
  text-align: center;
}

.colonne3{
  width: 37%;
}

.text2{
  text-align: center;
}

.image_right4{
  height: 70%;
  width: 100%;
  background:url("./../../assets/asakusaFood.jpg");
  background-position: center center;
  background-size:cover;
}

</style>
