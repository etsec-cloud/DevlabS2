<template>
<div>
    <FirstScreenShinjuku/>
    <SecondScreenShinjuku/>
    <ThirdScreenShinjuku/>
    <FourthScreenShinjuku/>
    <FifthScreenShinjuku/>



</div>
</template>


<script>

import FirstScreenShinjuku from './../components/shinjuku/FirstScreenShinjuku.vue'
import SecondScreenShinjuku from './../components/shinjuku/SecondScreenShinjuku.vue'
import ThirdScreenShinjuku from './../components/shinjuku/ThirdScreenShinjuku.vue'
import FourthScreenShinjuku from './../components/shinjuku/FourthScreenShinjuku.vue'
import FifthScreenShinjuku from './../components/shinjuku/FifthScreenShinjuku.vue'


export default {
  name : 'Shinjuku',
  components:{
    FirstScreenShinjuku,
    SecondScreenShinjuku,
    ThirdScreenShinjuku,
    FourthScreenShinjuku,
    FifthScreenShinjuku
    },
  
};
</script>

<style scoped>
 
</style>
