import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import SummerVacation from '@/pages/summervacation/index'

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
      path: '/summervacation',
      name: 'vacation',
      component: SummerVacation
    }

  ]
})
