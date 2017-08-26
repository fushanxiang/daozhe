import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Onedaytour from '@/pages/onedaytour/index'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'

Vue.use(Router)  

export default new Router({
  routes: [
    {
        path: '/',
        name: 'index',
        component: Index
    },{
        path: '/onedaytour',
        name: 'onedaytour',
        component: Onedaytour
    },{
        path: '/city/:id',
        name: 'city',
        component: City,
        children: [
        {
            path: 'bigCity',
            component: BigCity
        },{
            path: 'smallCity',
            component: SmallCity
        }
      ]
    }
  ]
})
