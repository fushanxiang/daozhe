import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Onedaytour from '@/pages/onedaytour/index'
import OnedayList from '@/pages/onedaylist/onedaylist'
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
        path: '/onedaytour',
        name: 'onedaytour',
        component: Onedaytour
    },{
      path: '/onedaylist',
      name: 'onedaylist',
      component: OnedayList
    },{
      path: '/weekend',
      name: 'weekend',
      component: Weekend
    },{
      path:'/seckill',
      name:'seckill',
      component:SecKill
    },{
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})