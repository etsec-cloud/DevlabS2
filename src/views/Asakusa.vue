<template>
<div>
    <FirstScreenAsakusa/>
    <SecondScreenAsakusa/>
    <ThridScreenAsakusa/>
</div>
</template>


<script>


import FirstScreenAsakusa from './../components/asakusa/FirstScreenAsakusa'
import SecondScreenAsakusa from './../components/asakusa/SecondScreenAsakusa.vue'
import ThridScreenAsakusa from './../components/asakusa/ThirdScreenAsakusa.vue'



export default {
  name : 'Asakusa',
  components:{
    FirstScreenAsakusa,
    SecondScreenAsakusa,
    ThridScreenAsakusa
    },
  
};
</script>

<style scoped>
 
</style>
