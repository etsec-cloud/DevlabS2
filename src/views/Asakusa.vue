<template>
<div>
    <FirstScreenAsakusa/>
    <SecondScreenAsakusa/>
    <ThirdScreenAsakusa/>
    <FourthScreenAsakusa/>
    <FifthScreenAsakusa/>
</div>
</template>


<script>

import FirstScreenAsakusa from './../components/asakusa/FirstScreenAsakusa'
import SecondScreenAsakusa from './../components/asakusa/SecondScreenAsakusa.vue'
import ThirdScreenAsakusa from './../components/asakusa/ThirdScreenAsakusa.vue'
import FourthScreenAsakusa from './../components/asakusa/FourthScreenAsakusa.vue'
import FifthScreenAsakusa from './../components/asakusa/FifthScreenAsakusa.vue'


export default {
  name : 'Asakusa',
  components:{
    FirstScreenAsakusa,
    SecondScreenAsakusa,
    ThirdScreenAsakusa,
    FourthScreenAsakusa,
    FifthScreenAsakusa
    },
  
};
</script>

<style scoped>
 
</style>
