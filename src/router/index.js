import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/hello'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import OnedayTour from '@/pages/onedayTour/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/index',
      name: 'index',
      component: Index
    },

    {
      path: '/city',
      name: 'city',
      component: City
    },

    {
      path: '/onedayTour',
      name: 'OnedayTour',
      component: OnedayTour
    }
  ]
})
