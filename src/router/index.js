import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import WeekendIndex from '@/pages/weekend/index/index'
import WeekendDetail from '@/pages/weekend/detail/index'
import City from '@/pages/city/index'
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

        path: '/city/:id',
        name: 'city',
        component: City,
        children: [
            {
                path: 'bigCity',
                name: 'BigCity'
            },
            {
                path: 'smallCity',
                name: 'SmallCity'
            }
        ]
    },{
        path: '/weekend/index',
        name: 'weekend',
        component: WeekendIndex
    },{
        path: '/weekend/detail/:id',
        name: 'weekend',
        component: WeekendDetail
    }
  ]
})
