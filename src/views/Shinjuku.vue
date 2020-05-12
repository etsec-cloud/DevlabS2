<template>
<div>
    <FirstScreen/>
    <SecondScreen/>
</div>
</template>


<script>

import FirstScreen from './../components/shinjuku/FirstScreen.vue'
import SecondScreen from './../components/shinjuku/SecondScreen.vue'

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
