import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import TicketSale from '@/pages/ticketSale/index'
import TicketDetail from '@/pages/ticketDetail/index'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'
import Productdetail from '@/pages/productdetail/index'
import search from '@/search/search'
import List from '@/pages/list/index'

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
		path: '/ticketDetail/:id',
		name: 'ticketDetail',
		component: TicketDetail
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
	}]
})
