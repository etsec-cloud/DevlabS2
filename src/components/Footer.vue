<template>
    <footer class="cl-effect-21">
      
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
                        text: 'À propos',
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

@media screen and (min-width: 981px){
footer{
    background-color: rgb(31, 31, 31);
    margin: auto;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 9vh;
}

footer .menu-item  {
    color: inherit;
    text-decoration: none;
}
}

@media screen and (max-width: 980px){
footer{
    background-color: rgb(31, 31, 31);
    margin: auto;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 9vh;
}

footer .menu-item  {
    color: inherit;
    text-decoration: none;
}
}

</style>