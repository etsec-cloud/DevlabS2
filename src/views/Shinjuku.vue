<template>
<div>
    <FirstScreen/>
    <SecondScreen/>
    <ThirdScreen/>
    <FourthScreen/>
    <FifthScreen/>



</div>
</template>


<script>

import FirstScreen from './../components/shinjuku/FirstScreen.vue'
import SecondScreen from './../components/shinjuku/SecondScreen.vue'
import ThirdScreen from './../components/shinjuku/ThirdScreen.vue'
import FourthScreen from './../components/shinjuku/FourthScreen.vue'
import FifthScreen from './../components/shinjuku/FifthScreen.vue'


export default {
  name : 'Shinjuku',
  components:{
    FirstScreen,
    SecondScreen,
    ThirdScreen,
    FourthScreen,
    FifthScreen
    },
  
};
</script>

<style scoped>
 
</style>
