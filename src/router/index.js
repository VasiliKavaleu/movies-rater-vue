import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../components/Movies.vue'
import Auth from '../components/Auth.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // },

  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }

  ]

  const router = new VueRouter({
    routes
  })

  export default router