import Vue from 'vue'
import Router from 'vue-router'
import Index from './../pages/index/index.vue'
import Particulars from './../pages/topictickets/particulars.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
   {
      path: '/Particulars/:id',
      name: 'Particulars',
      component: Particulars
    }
  ]
})
