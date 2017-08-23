import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import ParkDetail from '@/pages/parkdetail/index'

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
      path: '/parkdetail',
      name: 'parkdetail',
      component: ParkDetail
    }
  ]
})
