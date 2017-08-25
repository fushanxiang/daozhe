import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Weekend from '@/pages/weekend/index/index'
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
                path: '/',
                name: 'index',
                component: Index
            },
            {
                path: '/city',
                name: 'city',
                component: City
            }
        ]
    },
    {
        path: '/weekend/index',
        name: 'weekend',
        component: Weekend
    }
  ]
})
