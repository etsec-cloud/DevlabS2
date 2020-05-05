<template>
    <nav>
      
          <router-link class="menu-item"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
            >{{ routes.text }}</router-link
          >
        
    </nav>
</template>


<script>
export default {
    name:'Footer',
        data(){
            return{
                links: [
                    {
                        id: 0,
                        text: 'A propos',
                        page:'/APropos'
                    },
                    {
                        id: 1,
                        text: 'Mentions Légales',
                        page:'/mentionslegales'
                    },
                    {
                        id: 2,
                        text: 'Crédits',
                        page:'/credits'
                    }
                ]

            }
        }
}
     
</script>
<style>
footer{
    background-color: rgb(192, 192, 192);
    color: rgb(0, 0, 0);
    position:absolute;
    bottom:auto;
    width:100%;
    padding-top:50px;
    height:50px;
}

</style>