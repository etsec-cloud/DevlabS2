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
    name:'NavBar',
        data(){
            return{
                links: [
                    {
                        id: 0,
                        text: 'Accueil',
                        page:'/'
                    },
                    {
                        id: 1,
                        text: 'Harajuku',
                        page:'/Harajuku'
                    },
                    {
                        id: 2,
                        text: 'Shinjuku',
                        page:'/Shinjuku'
                    },
                    {
                        id: 3,
                        text: 'Asakusa',
                        page:'/Asakusa'
                    },
                    {
                        id: 4,
                        text: 'Shibuya',
                        page:'/Shibuya'
                    }
                ]

            }
        }
}
     
</script>
<style>
nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 5vh;
}

</style>