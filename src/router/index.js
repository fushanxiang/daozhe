import Vue from 'vue'
import Router from 'vue-router'
import Onedaydetail from '@/pages/onedaydetail/index'
import Comment from '@/pages/onedaydetail/comment'
import Index from '@/pages/index/index'
import WeekendIndex from '@/pages/weekendtour/index/index'
import WeekendDetail from '@/pages/weekendtour/detail/index'
import WeekendDetailInfo from '@/pages/weekendtour/detail_info/index'
import WeekendComment from '@/pages/weekendtour/comment/index'
import Slightmap from '@/pages/weekendtour/slightmap/index'
import City from '@/pages/city/index'
import Purchaseorder from '@/pages/onedaydetail/purchaseorder'
import Introduce from '@/pages/onedaydetail/introduce'
import Productdetail from '@/pages/productdetail/index'
import search from '@/search/search'
import List from '@/pages/list/index'
import SmallCity from '@/pages/city/small_city'
import Order from '@/pages/order/form'
import VueScroller from 'vue-scroller'
import ParkDetail from '@/pages/parkdetail/index'
import Ticketdetail from '@/pages/ticketdetail/index'
import Logined from '@/pages/parkdetail/logined'
import WaterPark from '@/pages/parkdetail/waterpark'
import Discussall from '@/pages/parkdetail/discussall'
import Commentariesall from '@/pages/ticketdetail/commentariesall'
import uaCheckout from '@/pages/parkdetail/uaCheckout'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'
import Map from '@/pages/parkdetail/map'
import Onedaytour from '@/pages/onedaytour/index'
import OnedayList from '@/pages/onedaylist/index'
import SummerVacation from'@/pages/summervacation/index'
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
	      path: '/city',
	      name: 'city',
	      component: City
	    },{
	      path: '/summervacation',
	      name: 'summervacation',
	      component: SummerVacation
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
	    },{
	    	path: '/map',
	      name: 'map',
	      component: Map
	    }, {
	      path: '/productdetail',
	      name: 'productdetail',
	      component: Productdetail
	    },
	    {
	      path: '/list',
	      name: 'list',
	      component: List
		},{
		  path: '/onedaytour',
		  name: 'onedaytour',
		  component: Onedaytour
   	    },{
     	  path: '/onedaylist',
          name: 'onedaylist',
          component: OnedayList
	    },{
	      path: '/search',
	      name: 'search',
	      component: search
	    },{
	        path: '/weekendtour/index',
	        name: 'weekendIndex',
	        component: WeekendIndex
	    },{
	        path: '/weekendtour/detail/:id',
	        name: 'weekendDetail',
	        component: WeekendDetail
	    },{
	        path: '/weekendtour/detail_info/:id',
	        name: 'weekendDetailInfo',
	        component: WeekendDetailInfo
	    },{
	        path: '/weekendtour/comment/:id',
	        name: 'weekendComment',
	        component: WeekendComment
	    },{
	        path: '/order/:id',
	        name: 'order',
	        component: Order
	    },{
	        path: '/weekendtour/slightmap/:id',
	        name: 'Slightmap',
	        component: Slightmap
	    },{
        path: '/onedaydetail',
        name: 'onedaydetail',
        component: Onedaydetail
      },{
        path: '/purchaseorder',
        name: 'purchaseorder',
        component: Purchaseorder
      },{
        path: "/onedaydetail/comments",
        name: 'comment',
        component: Comment
      },{
        path: '/introduce',
        name: 'introduce',
        component: Introduce
      }, 
      {
       path: '/purchaseorder',
       name: 'purchaseorder',
       component: Purchaseorder
      }
      ]
})
