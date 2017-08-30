import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/pages/order/index'
import Comment from '@/pages/order/comment'
import map from '@/pages/order/detailsMap'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'
import Purchaseorder from '@/pages/order/purchaseorder'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'
Vue.use(Router)
export default new Router({
  routes: [   
    {
      path: '/order',
      name: 'order',
      component: Order

    },
      {
      path: '/purchaseorder',
      name: 'purchaseorder',
      component: Purchaseorder
    },
    {
      path: "/order/comments",
      name: 'comment',
      component: Comment
    },
    {
      path: '/order/detail',
      name: 'detail',
      component: map
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
