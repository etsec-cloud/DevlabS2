<template>
<div>
    <FirstScreenShibuya/>
    <SecondScreenShibuya/>
    <ThirdScreenShibuya/>
    <FourthScreenShibuya/>
    <FifthScreenShibuya/>
</div>
</template>


<script>


import FirstScreenShibuya from './../components/shibuya/FirstScreenShibuya.vue'
import SecondScreenShibuya from './../components/shibuya/SecondScreenShibuya.vue'
import ThirdScreenShibuya from './../components/shibuya/ThirdScreenShibuya.vue'
import FourthScreenShibuya from './../components/shibuya/FourthScreenShibuya.vue'
import FifthScreenShibuya from './../components/shibuya/FifthScreenShibuya.vue'



export default {
  name : 'Shibuya',
  components:{
    FirstScreenShibuya,
    SecondScreenShibuya,
    ThirdScreenShibuya,
    FourthScreenShibuya,
    FifthScreenShibuya
    },
  
};
</script>

<style scoped>
 
</style>
