import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import TicketSale from '@/pages/ticketSale/index'
import Ticketdetailsale from '@/pages/ticketdetailsale/index'
import SecKill from '@/pages/seckill/index'
import Productdetail from '@/pages/productdetail/index'
import search from '@/search/search'
import List from '@/pages/list/index'
import ParkDetail from '@/pages/parkdetail/index'
import Ticketdetail from '@/pages/ticketdetail/index'
import Logined from '@/pages/parkdetail/logined'
import WaterPark from '@/pages/parkdetail/waterpark'
import Discussall from '@/pages/parkdetail/discussall'
import Commentariesall from '@/pages/ticketdetail/commentariesall'
import uaCheckout from '@/pages/parkdetail/uaCheckout'
import Weekend from '@/pages/weekend/index'
import Map from '@/pages/parkdetail/map'
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
		path: '/ticketSale',
		name: 'ticketSale',
		component: TicketSale
	},{
		path: '/ticketdetailsale/:id',
		name: 'ticketdetailsale',
		component: Ticketdetailsale
	},{
		path: '/productdetail',
		name: 'productdetail',
		component: Productdetail
	},{
		path: '/list',
		name: 'list',
		component: List
	},{
		path: '/search',
		name: 'search',
		component: search
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
	}]
})
