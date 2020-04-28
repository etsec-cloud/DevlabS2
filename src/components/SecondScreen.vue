<template>

<div class="scrollIci wrapper">
  <div class="flexContainer">
    <h1>Shinjuku</h1>
    <img class="kanji" src="./../assets/shinju.svg">
  </div>
    <span class="icone"></span>

</div>


</template>



<script>
export default {
  name : 'SecondScreen',
};
</script>


<style scoped>
 
.wrapper {
  height:100vh;
  background:linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45));
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

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

.icone {
width: 0;
height: 0;
border-style: solid;
border-width: 40px 20px 0 20px;
border-color: #ffffff transparent transparent transparent;
position :absolute;
left: 50%;
bottom: 5%;
transform: translate(0%, -50%);
}

</style>
