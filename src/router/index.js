import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
<<<<<<< HEAD
import Weekend from '@/pages/Weekend/index'
=======
import Weekend from '@/pages/weekend/index/index'
>>>>>>> 177140a46cbe411a6d33cd01035a1ff05e79399d
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
<<<<<<< HEAD
      path: '/city/:id',
      name: 'city',
      component: City
    },
    {
      path: '/weekend',
      name: 'weekend',
      component: Weekend
    }],

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
  
=======
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
>>>>>>> 177140a46cbe411a6d33cd01035a1ff05e79399d
})
