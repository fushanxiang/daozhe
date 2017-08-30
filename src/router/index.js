import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import WeekendIndex from '@/pages/weekendtour/index/index'
import WeekendDetail from '@/pages/weekendtour/detail/index'
import WeekendDetailInfo from '@/pages/weekendtour/detail_info/index'
import WeekendComment from '@/pages/weekendtour/comment/index'
import Slightmap from '@/pages/weekendtour/slightmap/index'
import City from '@/pages/city/index'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'
import Order from '@/pages/order/form'
import VueScroller from 'vue-scroller'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'

Vue.use(Router)
Vue.use(VueScroller)

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
      component: City,
      children: [
        {
          path: 'bigCity',
          component: BigCity
        },
        {
          path: 'smallCity',
          component: SmallCity
        }
      ] 
    },{
        path: '/weekendtour/index',
        name: 'weekendIndex',
        component: WeekendIndex
    },{
        path: '/weekendtour/detail/:id',
        name: 'weekendDetail',
        component: WeekendDetail
    },{
        path: '/weekendtour/detail_info/:id',
        name: 'weekendDetailInfo',
        component: WeekendDetailInfo
    },{
        path: '/weekendtour/comment/:id',
        name: 'weekendComment',
        component: WeekendComment
    },{
        path: '/order/:id',
        name: 'order',
        component: Order
    },{
        path: '/weekendtour/slightmap/:id',
        name: 'Slightmap',
        component: Slightmap
    }
  ]
})
