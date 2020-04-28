import Vue from 'vue'

import Router from 'vue-router'
import HomePage from './../views/HomePage.vue'
import Shinjuku from './../views/Shinjuku.vue'
import Asakusa from './../views/Asakusa.vue'




Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/Shinjuku', component: Shinjuku },
      { path: '/Asakusa', component: Asakusa },
    
    ]
})