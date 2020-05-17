import Vue from 'vue'

import Router from 'vue-router'
import HomePage from './../views/HomePage.vue'

import MentionsLegales from './../views/MentionsLegales.vue'
import Credits from './../views/Credits.vue'
import APropos from './../views/APropos.vue'

import Shinjuku from './../views/Shinjuku.vue'
import Asakusa from './../views/Asakusa.vue'
import Harajuku from './../views/Harajuku.vue'



Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/MentionsLegales', component: MentionsLegales },
      { path: '/Credits', component: Credits },
      { path: '/APropos', component: APropos },
      { path: '/Shinjuku', component: Shinjuku },
      { path: '/Asakusa', component: Asakusa },
      { path: '/Harajuku', component: Harajuku },
    
    ]
})  