<template>

<div class="wrapper">
  <div class="flexContainer">
    <h1>Shinjuku</h1>
    <img class="kanji" src="./../assets/shinju.svg">
    <span class="lol"></span>
  </div>
</div>
</template>




<script>
export default {
  name : 'Quartier',
};
</script>





<style scoped>
 
.wrapper {
  height:100vh;
  background:linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url("./../assets/bg.jpg" ) ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;}

.flexContainer{
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  color:white;
  font-size: 8em;
  line-height: 100px;
}
.kanji{
  width: 50vw;
}

.lol {
width: 0;
height: 0;
border-style: solid;
border-width: 103.9px 60px 0 60px;
border-color: #ffffff transparent transparent transparent;

}

</style>
