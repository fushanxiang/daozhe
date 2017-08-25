import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Weekend from '@/pages/weekend/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/weekend',
      name: 'weekend',
      component: Weekend
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
