import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Hello from '@/components/Hello'
import OnedayTour from '@/components/OnedayTour'
=======
import Index from '@/pages/index/index'
import City from '@/pages/city/index'

>>>>>>> origin/master
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
      path: '/OnedayTour',
      name: 'OnedayTour',
      component: OnedayTour
=======
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
>>>>>>> origin/master
    }
  ]
})
