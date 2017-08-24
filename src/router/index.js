import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
<<<<<<< HEAD
=======
import City from '@/pages/city/index'
>>>>>>> ff1a0449072d958f4726612d9f8bab6a48dc48ad

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
<<<<<<< HEAD
=======
    },
    {
      path: '/city',
      name: 'city',
      component: City
>>>>>>> ff1a0449072d958f4726612d9f8bab6a48dc48ad
    }
  ]
})
