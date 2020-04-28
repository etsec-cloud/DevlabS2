<template>
<div>
    <FirstScreen/>
    <SecondScreen/>
</div>
</template>


<script>

import FirstScreen from './../components/FirstScreen.vue'
import SecondScreen from './../components/SecondScreen.vue'

export default {
  name : 'Shinjuku',
  components:{
    FirstScreen,
    SecondScreen
    },
  
};
</script>

<style scoped>
 
</style>
