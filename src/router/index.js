import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/pages/order/index'
import Comment from '@/pages/order/comment'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'
import Purchaseorder from '@/pages/order/purchaseorder'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'
import Introduce from '@/pages/order/introduce'
Vue.use(Router)
export default new Router({
  routes: [
     {
       path: '/',
       name: 'index',
       component: Index
     },  
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
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    }

  ]
})
