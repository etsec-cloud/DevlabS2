import Vue from 'vue'

import Router from 'vue-router'
import HomePage from './../views/HomePage.vue'
import Quartier from './../views/Quartier.vue'




Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/Shinjuku', component: Quartier },
     


    
    ]
})