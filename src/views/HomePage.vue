<template>
  <div id="map">
    <MglMap 
        :accessToken="accessToken" 
        :mapStyle="mapStyle"
        :center= "center"
        :zoom= "zoom"
        :pitch="pitch"
        @mapbox-ready='setMap'
      >

      <MglMarker class="popup" v-on:click="shinjuku"  :coordinates="coordinates" color="#3FB1CE"/>

        <VueMapboxFeature
                :map='map'
                :uid='"line-example"'
                :layer-type='"line"'
                :feature='lineGeom'
                :paint='linePaint'
        ></VueMapboxFeature>
      
      </MglMap>
     <div v-if='map'>
       
     </div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap,  MglMarker  } from "vue-mapbox";
import VueMapboxFeature from 'vue-mapbox-feature';


export default {
  name : 'HomePage',
  components: {
    MglMap,
    MglMarker ,
    VueMapboxFeature
  },

  methods: {
    shinjuku: function(){
      this.$router.push("Shinjuku")
    },
     setMap (map) {
        this.MglMap = map
    },
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
      linePaint: {
          'line-opacity': 1,
          'line-color': '#29434e',
          'line-width': 4,
          'line-dasharray': [1, 2],
          'line-blur': 0
        },
    };
  },
  
  computed: {
    lineGeom() {
      return{
        type: 'Feature',
          geometry: {
            type: 'fill',
            coordinates: [

                [139.791974, 35.711463 ],
                [ 139.792124, 35.719825],
                [139.792510, 35.720013],
                [35.720210, 139.793126],
                [35.723351, 139.798335],
                [35.720824, 139.800171],
                [35.716685, 139.804875],
                [35.714614, 139.802764],
                [35.715814, 139.798645],
                [35.710739, 139.797694]
            ]
          }
        }
      }
    },
  

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    let ckeditor = document.createElement('script');   
    ckeditor.setAttribute('src',"https://unpkg.com/es6-tween@latest/bundled/Tween.min.js");
    document.head.appendChild(ckeditor);


    let feature = document.createElement('script');   
    feature.setAttribute('src',"https://unpkg.com/es6-tween@latest/bundled/Tween.min.js");
    document.head.appendChild(feature);
    
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    height: 100vh;
  }
</style>
