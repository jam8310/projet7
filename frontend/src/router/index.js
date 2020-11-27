import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create')
  },
  {
    path: '/membre',
    name: 'Membre',
    component: () => import('../views/Membre'),
    props: true
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil'),
    props: true
  },
  {
    path: '/error',
    name: 'Error404',
    component: () => import('../views/Error404')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
