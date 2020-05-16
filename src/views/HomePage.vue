<template>
<div id="app">
    <mapbox
      access-token= "pk.eyJ1IjoiZXQtc2VjIiwiYSI6ImNrOG9nZjJ0dDA0aXgzbXBzcjlzdnh2MDQifQ.VApXtOITuEEVc3pcjaUYxw"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v10',
        center: [139.7594549, 35.6828387],
        zoom: 11,
        pitch: 45,
      }"
      @map-load="loaded"
      
    />
  </div>

 
</template>
<script src="vue-mapbox-gl.min.js"></script>

 
<script>
import Mapbox from 'mapbox-gl-vue'
 
export default {
  components: { Mapbox },
  methods: {
   
    loaded(map) {
       map.addLayer({
        id: 'maine',
        type: 'fill',
        paint: {
          'fill-color': '#46637B',
          'fill-opacity': 0.7,
        },
        source: {
        type: 'geojson',
          data : {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates : [
                  [
                    [139.791974, 35.711463],
                    [139.792124, 35.719825],
                    [139.792510, 35.720013],
                    [139.793126, 35.720210],
                    [139.798335, 35.723351],
                    [139.800171, 35.720824],
                    [139.804875, 35.716685],
                    [139.802764, 35.714614],
                    [139.798645, 35.715814],
                    [139.797694, 35.710739]
                  ],
                ]
              },
            },
          
        }
      })
      map.addLayer({
        id: 'lop',
        type: 'fill',
        paint: {
          'fill-color': '#46637B',
          'fill-opacity': 0.7,
        },
        source: {
        type: 'geojson',
          data : {
           
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates : [
                  [
                    [139.661762, 35.675468],
                    [139.661459, 35.674364],
                    [139.661780, 35.673648],
                    [139.661461, 35.672846],
                    [139.661444, 35.671992],
                    [139.661743, 35.671522],
                    [139.672755, 35.672116],
                    [139.675247, 35.663946],
                    [139.687324, 35.661453],
                    [139.696346, 35.650907],
                    [139.706799, 35.643519],
                    [139.715095, 35.642324],
                    [139.719241, 35.641969],
                    [139.723827, 35.646802],
                    [139.722905, 35.656155],
                    [139.713236, 35.658161],
                    [139.713935, 35.659700],
                    [139.708695, 35.664072],
                    [139.714856, 35.672820],
                    [139.716437, 35.672152],
                    [139.716091, 35.673909],
                    [139.713559, 35.674493],
                    [139.712701, 35.674476],
                    [139.714581, 35.680675],
                    [139.707077, 35.684669],
                    [139.705285, 35.688009],
                    [139.702689, 35.687870],
                    [139.702066, 35.689153],
                    [139.687459, 35.681751],
                    [139.684712, 35.686368],
                    [139.683341, 35.689283],
                    [139.684866, 35.691389],      
                    [139.683499 , 35.692084] ,       
                    [139.674891 , 35.684479] ,       
                  ],
                ]
              },
          }
        }
      })
      
      map.on('click', 'maine', function(e) {
          console.log("hasaku")
        });
      map.on('click', 'lop', function(e) {
        console.log("shinjju")
      });
    },
  
  },
}
</script>
 
<style>
#map {
  height: 100vh;
}
</style>
