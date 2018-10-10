import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Cinema from '@/views/Cinema'
import Me from '@/views/Me'
import MovieDetail from '@/views/MovieDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },{
      path: '/movieDetail',
      name: 'movieDetail',
      component: MovieDetail
    }
  ]
})
