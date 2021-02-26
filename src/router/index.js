import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cities from "@/views/Cities";
import Weather from "@/views/Weather";
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cities',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/weather/:id',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
