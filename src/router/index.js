import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import ParkDetail from '@/pages/parkdetail/index'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city/:id',
      name: 'city',
      component: City
    },{
      path: '/parkdetail',
      name: 'parkdetail',
      component: ParkDetail
    }],
      children:[
        {
          path: 'bigCity',
          component: BigCity
        },
        {
          path: 'smallCity',
          component: SmallCity
        }
      ]
})
