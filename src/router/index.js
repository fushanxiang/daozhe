import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
//import City from '@/pages/city/index'
// import BigCity from '@/pages/city/big_city'
// import SmallCity from '@/pages/city/small_city'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'
import SummerVacation from '@/pages/summervacation/index'

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
      path: '/summervacation',
      name: 'summervacation',
      component: SummerVacation
    }
  ]
})
