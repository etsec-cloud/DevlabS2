<template>
<div>
    <FirstScreenAsakusa/>
    <SecondScreenAsakusa/>
</div>
</template>


<script>

import FirstScreenAsakusa from './../components/assakusa/FirstScreenAsakusa'
import SecondScreenAsakusa from './../components/assakusa/SecondScreenAsakusa.vue'

export default {
  name : 'Asakusa',
  components:{
    FirstScreenAsakusa,
    SecondScreenAsakusa
    },
  
};
</script>

<style scoped>
 
</style>
