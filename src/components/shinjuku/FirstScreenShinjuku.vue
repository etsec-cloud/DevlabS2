<template>

<div class="wrapper">

    <div class="flexContainer">
      <h1>Shinjuku</h1>
      <img class="kanji" src="./../../assets/shibuya.svg">
    </div>
      <span v-on:click="scroll" class="icone"></span>

</div>

</template>




<script>
export default {
  name : 'FirstScreen',
  methods: {
    scroll: function() {

      window.scrollTo({ 
      top: window.innerHeight, // could be negative value
      left: 0, 
      behavior: 'smooth' 
      });

    }
  }
};
</script>





<style scoped>
 
.wrapper {

  height:92vh;

  background:linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url("./../../assets/shinjuku/bg.jpg" ) ;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  background-size: cover;
  transition-duration: 1s;

  }


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
cursor: pointer ;

}

</style>
