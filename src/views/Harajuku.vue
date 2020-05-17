<template>
<div>
    <FirstScreen/>
    <SecondScreen/>
</div>
</template>


<script>

import FirstScreen from './../components/harajuku/FirstScreen.vue'
import SecondScreen from './../components/harajuku/SecondScreen.vue'

export default {
  name : 'Harajuku',
  components:{
    FirstScreen,
    SecondScreen
    },
  
};
</script>

<style scoped>
 
</style>