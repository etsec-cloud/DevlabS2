<template>
    <footer>
      
          <router-link class="menu-item"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
            >{{ routes.text }}</router-link
          >
        
    </footer>
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
    background-color: rgb(158, 158, 158);
    color: rgb(0, 0, 0);
    position:absolute;
    bottom:auto;
    width:100%;
    padding-top:20px;
    height:30px;
}

footer .menu-item  {
    color: inherit;
    padding: 20px 30px;
    text-decoration: none;
}

</style>