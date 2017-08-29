import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/pages/order/index'
import Comment from '@/pages/order/comment'
import map from '@/pages/order/detailsMap'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component: Order
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
    }
  ]
})
