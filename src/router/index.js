import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Order from '@/pages/order/index'
import City from '@/pages/city/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },{
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
