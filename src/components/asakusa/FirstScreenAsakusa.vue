<template>

<div class="wrapper">
  <div class="flexContainer">
    <h1 class="titre">Asakusa</h1>
    <img class="kanji" src="./../../assets/asakusa.svg">
  </div>
    <span v-on:click="scroll" class="icone"></span>

</div>

</template>




<script>
export default {
  name : 'FirstScreenAsakusa',
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
  background:linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url("./../../assets/asakusa/asakusa.jpg" ) ;
  background-repeat: no-repeat;
  background-position: center;
  position:relative;
  background-size: cover;
  }

.flexContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color:white;
  font-size: 6em;
  line-height: 100px;
}

.kanji{
  width: 30vw;
}

.titre {
  font-size: 10vw;
  margin-top: 200px;
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


@media screen and (max-width: 900px){
.wrapper {
  width: 100%; 
  background-size:cover;
  }
}
</style>
