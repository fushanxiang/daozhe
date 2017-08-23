import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

import Hello from '@/components/hello'
=======
<<<<<<< HEAD
import Hello from '@/components/Hello'
import OnedayTour from '@/components/OnedayTour'
=======
>>>>>>> cc8ac30c96bec629ad6f7e8c1d0a6108e0408ad3
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import OnedayTour from '@/pages/onedayTour/index'


<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> cc8ac30c96bec629ad6f7e8c1d0a6108e0408ad3
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      name: 'Hello',
      component: Hello
>>>>>>> cc8ac30c96bec629ad6f7e8c1d0a6108e0408ad3
    },

    {
      path: '/onedayTour',
      name: 'OnedayTour',
      component: OnedayTour
<<<<<<< HEAD
=======
=======
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
>>>>>>> origin/master
>>>>>>> cc8ac30c96bec629ad6f7e8c1d0a6108e0408ad3
    }
  ]
})
