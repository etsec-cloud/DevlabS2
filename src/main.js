import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')


import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

Vue.use(VueMapbox, { mapboxgl: Mapbox });
