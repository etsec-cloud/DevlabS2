<template>
  <div class="black-body">
  <div class="central-box">
  <div class="text">
      <h1>A Propos ||
について</h1><br>
  </div>
      <div class="dev">
          <ul><img src="../assets/apropos/etienne.png" width="100px" height="100px"><br>
          Etienne <br> Secondini</ul>
          <ul><img src="../assets/apropos/alexandre.png" width="100px" height="100px"><br>
          Alexandre <br> Duval</ul>
          <ul><img src="../assets/apropos/noa.png" width="100px" height="100px"><br>
          Noa <br> Devillers</ul>
      </div> 
    <div class="text">   
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat dictum vulputate. Mauris vitae dolor id sem lacinia scelerisque. Mauris quis dui id mi euismod posuere. Praesent eu magna mauris. Vivamus sed tristique risus, in maximus dui. Maecenas non ligula maximus, luctus ex sit amet, porta enim. Nam vitae rutrum sapien, sit amet consequat justo. Nunc molestie est id neque vulputate feugiat. Vestibulum tristique efficitur quam, a facilisis lacus pellentesque a. Pellentesque et ligula sed augue tempus viverra in nec lectus. Donec nec scelerisque augue. Maecenas a consectetur dui. Vestibulum leo orci, dictum vel nibh blandit, pretium malesuada ipsum. Mauris id fermentum urna, congue tempus elit. Ut quis eros eu tellus suscipit blandit quis id leo.

Fusce posuere tortor eu odio ornare, a elementum felis vulputate. Nulla facilisi. Sed vel molestie nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis vitae metus eu pharetra. Pellentesque non tortor mauris. Praesent varius nisl vel est fringilla fermentum nec eu tellus. Morbi vel dolor venenatis, sollicitudin lectus id, blandit metus. Curabitur lacus magna, maximus non tincidunt vel, ultrices ac risus. Duis volutpat mattis porta. Sed sed neque eget elit malesuada molestie lobortis sit amet urna. Suspendisse rhoncus euismod nunc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut fermentum orci. Fusce lacinia libero sapien, ut lobortis quam fringilla sed. Vivamus tristique, nibh a volutpat vestibulum, sapien purus scelerisque felis, vestibulum dignissim nulla ante at lacus. Vivamus vel libero rhoncus odio pharetra posuere. Duis interdum porttitor tellus, vel aliquet turpis sagittis a. Vivamus vitae libero mauris.

Pellentesque commodo leo eget dui interdum, vehicula imperdiet lectus bibendum. Vivamus non sapien nec enim sodales fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris interdum blandit eros, quis dignissim nisl tempor vitae. Fusce eu felis et metus ullamcorper porttitor. Nulla mattis quam ac fermentum porta. Ut mollis ultricies tristique. Praesent enim orci, ullamcorper ut tortor quis, vehicula accumsan sapien. Nunc vel semper purus. Nunc vel ligula dui.

Mauris pulvinar et felis in sollicitudin. Mauris ultricies orci et ante dictum hendrerit. In non ante lorem. Quisque pretium purus a arcu consequat mollis. Ut et massa imperdiet, pharetra lacus eget, viverra diam. Ut eu mauris blandit, rutrum dui at, euismod nulla. Cras ultrices ornare massa at venenatis. Nam est elit, posuere ut quam at, viverra venenatis mi. Nullam malesuada congue nunc, interdum pellentesque massa ornare et. Etiam ac hendrerit turpis. Praesent facilisis at nisi eu vulputate.</p>
    <router-view/>
  </div>
  </div>
  </div>
</template>


<style scoped>

@media screen and (min-width: 981px){

.black-body{
  background-color: black;
  padding: 10%;
}

.dev{
  margin: 0% 10%;
  display: flex;
}

ul{
  padding: 0 8%;
  text-align: center;
}

.central-box{
    margin: 0% 10%; 
    color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 6px;
    border-color: #000000 #000000 #000000 white;
}

.text{
  margin: 5%;
  text-align: justify;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:justify;
  color: #ffffff;
}
}



@media screen and (max-width: 981px){

.black-body{
  background-color: black;
  padding: 10% 0;
}

.dev{
  display: inline-flex;
}

ul{
  text-align: center;
}

.central-box{
    color: rgb(255, 255, 255);
}

.text{
  margin: 5%;
  text-align: justify;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:justify;
  color: #ffffff;
}
}


</style>