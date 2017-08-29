import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'

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
    },{
      path:'/seckill',
      name:'seckill',
      component:SecKill
    },{
      path: '/city/:id',
      name: 'city',
      component: City
    }
  ]
})
