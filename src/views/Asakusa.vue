<template>
<div>
    <FirstScreenAsakusa/>
    <SecondScreenAsakusa/>
    <ThridScreenAsakusa/>
</div>
</template>


<script>

import FirstScreenAsakusa from './../components/assakusa/FirstScreenAsakusa'
import SecondScreenAsakusa from './../components/assakusa/SecondScreenAsakusa.vue'
import ThridScreenAsakusa from './../components/assakusa/ThirdScreenAsakusa.vue'


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
