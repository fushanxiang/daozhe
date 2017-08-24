import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
<<<<<<< HEAD
import Productdetail from '@/pages/productdetail/index'
import List from '@/pages/list/index'
=======
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
      path: '/city',
      name: 'city',
      component: City
<<<<<<< HEAD
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
=======
>>>>>>> origin/master
    }
  ]
})
