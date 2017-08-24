import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import ListPage from '@/pages/listPage/index'

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
    },
    {
      path: '/listPage',
      name: 'listPage',
      component: ListPage
    }
  ]
})
