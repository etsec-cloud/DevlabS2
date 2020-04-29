import Vue from 'vue'

import Router from 'vue-router'
import HomePage from './../views/HomePage.vue'
import FirstScreen from './../components/FirstScreen.vue'
import MentionsLegales from './../views/MentionsLegales.vue'
import Credits from './../views/Credits.vue'
import APropos from './../views/APropos.vue'




Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/Shinjuku', component: FirstScreen },
      { path: '/MentionsLegales', component: MentionsLegales },
      { path: '/Credits', component: Credits },
      { path: '/APropos', component: APropos },
    
    ]
})  