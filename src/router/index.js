import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import ParkDetail from '@/pages/parkdetail/index'
import Ticketdetail from '@/pages/ticketdetail/index'
import Logined from '@/pages/parkdetail/logined'
import BigCity from '@/pages/city/big_city'
import SmallCity from '@/pages/city/small_city'
import WaterPark from '@/pages/parkdetail/waterpark'
import Discussall from '@/pages/parkdetail/discussall'
import Commentariesall from '@/pages/ticketdetail/commentariesall'
import uaCheckout from '@/pages/parkdetail/uaCheckout'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'

Vue.use(Router)

export default new Router({
	  routes: [
		    {
		      path: '/',
		      name: 'index',
		      component: Index
		    },{
		      path: '/weekend',
		      name: 'weekend',
		      component: Weekend
		    },{
		      path:'/seckill',
		      name:'seckill',
		      component:SecKill
		    },{
		      path: '/city/:id',
		      name: 'city',
		      component: City
		    },{
		      path: '/parkdetail',
		      name: 'parkdetail',
		      component: ParkDetail
		    },{
		      path: '/ticketdetail',
		      name: 'ticketdetail',
		      component: Ticketdetail
		    },{
		      path: '/uacheckout',
		      name: 'uacheckout',
		      component: uaCheckout
		    },{
		      path: '/discussall',
		      name: 'discussall',
		      component: Discussall
		    },{
		      path: '/commentariesall',
		      name: 'commentariesall',
		      component: Commentariesall
		    },{
		      path: '/waterpark',
		      name: 'waterpark',
		      component: WaterPark
		    },{
		    	path: '/logined',
		      name: 'logined',
		      component: Logined
		    }],
		     
		    children:[
		      {
		        path: 'bigCity',
		        component: BigCity
		      },
		      {
		        path: 'smallCity',
		        component: SmallCity
		      }
		    ]
})
