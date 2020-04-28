<template>
<div>
    <FirstScreenAsakusa/>
    <SecondScreenAsakusa/>
</div>
</template>


<script>

import FirstScreenAsakusa from './../components/FirstScreenAsakusa.vue'
import SecondScreenAsakusa from './../components/SecondScreenAsakusa.vue'

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
