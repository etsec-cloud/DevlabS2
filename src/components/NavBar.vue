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
    background-color: white;
}

nav .menu-item.active,
nav .menu-item:hover {
    
}
nav .menu-item {
    color: #000;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;   
    display: flex;
    transition: 0,4s;
}
nav .menu-item  {
    color: inherit;
    text-decoration: none;
}
</style>