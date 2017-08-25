import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
<<<<<<< HEAD
import Weekend from '@/pages/Weekend/index'
=======
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'
>>>>>>> origin/master

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
<<<<<<< HEAD
      component: City
    },
    {
      path: '/weekend',
      name: 'weekend',
      component: Weekend
=======
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
>>>>>>> origin/master
    }
  ]
})
