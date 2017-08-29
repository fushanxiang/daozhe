import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'
import Order from '@/pages/order/purchaseorder'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
      {
      path: '/purchaseorder',
      name: 'order',
      component: Order
    },
   
    {
      path: '/city',
      name: 'city',
      component: City
     
      
    }
  ]
})
