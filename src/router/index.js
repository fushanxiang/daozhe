import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Productdetail from '@/pages/productdetail/index'
import List from '@/pages/list/index'
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
      path: '/productdetail',
      name: 'productdetail',
      component: Productdetail
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
