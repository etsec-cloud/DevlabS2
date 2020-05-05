<template>
<div>
    <FirstScreenAsakusa/>
    <ThridScreenAsakusa/>
</div>
</template>


<script>


import FirstScreenAsakusa from './../components/asakusa/FirstScreenAsakusa'
import ThridScreenAsakusa from './../components/asakusa/ThirdScreenAsakusa.vue'



export default {
  name : 'Asakusa',
  components:{
    FirstScreenAsakusa,
    ThridScreenAsakusa
    },
  
};
</script>

<style scoped>
 
</style>
