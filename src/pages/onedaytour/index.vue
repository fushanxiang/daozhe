<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    	<icon-swiper></icon-swiper>
    	<mid-item></mid-item>
    	<hot-routes></hot-routes>
    	<hot-view></hot-view>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import MidItem from './miditem.vue'
import HotRoutes from './hotroutes.vue'
import HotView from './hotview.vue'

export default {
	name: 'index',
	data () {
		return {
		}
	},
	components:{
		"index-header": IndexHeader,
		"img-swiper": ImgSwiper,
		"icon-swiper": IconSwiper,
		"mid-item": MidItem,
		"hot-routes": HotRoutes,
		"hot-view": HotView
	}
}
</script>

<style>
	body {
		background: #f5f5f5;
	}

</style>
