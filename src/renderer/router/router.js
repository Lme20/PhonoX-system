import Vue from 'vue'
import VueRouter from 'vue-router'

// import your Vue components
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

Vue.use(VueRouter)

// define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

// create a new router instance
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router
