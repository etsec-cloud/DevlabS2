<template>
    <nav>
        <div class="menu-item"><a href="#">Accueil</a></div>
        <div class="menu-item"><a href="#">Harajuku</a></div>
        <div class="menu-item"><a href="#">Shinjuku</a></div>
        <div class="menu-item"><a href="#">Asakusa</a></div>
        <div class="menu-item"><a href="#">Shibuya</a></div>
    </nav>
</template>


<script>
export default {
        name:'NavBar'
    }
</script>
<style>
nav{
    display: flex;
    align-items: center;
    justify-content: center;
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
nav .menu-item a {
    color: inherit;
    text-decoration: none;
}
</style>