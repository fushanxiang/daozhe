import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/pages/order/index'
Vue.use(Router)
export default new Router({
  routes: [   
    {
      path: '/order',
      name: 'order',
      component: Order
    } 
  ]
})
