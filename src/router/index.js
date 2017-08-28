import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import ParkDetail from '@/pages/parkdetail/index'
import Discussall from '@/pages/parkdetail/discussall'
import Login from '@/pages/parkdetail/login'

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
      path: '/parkdetail',
      name: 'parkdetail',
      component: ParkDetail,
      children: [
	      {
	        path: '/',
	        name: 'login',
	        component: Login
	      }
	    ]
    },
    {
    	path: '/discussall',
      name: 'discussall',
      component: Discussall
    }
  ]
})
