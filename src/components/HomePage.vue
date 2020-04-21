<template>
<div id="map">
 <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
</div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  name : 'HomePage',
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiZXQtc2VjIiwiYSI6ImNrOG9nZjJ0dDA0aXgzbXBzcjlzdnh2MDQifQ.VApXtOITuEEVc3pcjaUYxw', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v10', // your map style
     
    };
    
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    width: 100%;
    height: 500px;
  }
</style>
