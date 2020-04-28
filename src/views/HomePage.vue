<template>
<div id="map">
  <MglMap 
      :accessToken="accessToken" 
      :mapStyle="mapStyle"
      :center= "center"
      :zoom= "zoom"
      :pitch="pitch"

    >
  
  <MglMarker class="popup" v-on:click="popup"  :coordinates="coordinates" color="#3FB1CE"/>
  </MglMap>



  
</div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap,  MglMarker  } from "vue-mapbox";

export default {
  name : 'HomePage',
  components: {
    MglMap,
    MglMarker 
  },

  methods: {

    popup: function(){
      console.log("oui")
    }

  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiZXQtc2VjIiwiYSI6ImNrOG9nZjJ0dDA0aXgzbXBzcjlzdnh2MDQifQ.VApXtOITuEEVc3pcjaUYxw', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v10', // your map style
      center: [139.7594549, 35.6828387],
      zoom: 11,
      pitch: 45,
      //shibuya coordonnées
      coordinates: [139.7054, 35.6593],
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
    height: 100vh;
  }
</style>
