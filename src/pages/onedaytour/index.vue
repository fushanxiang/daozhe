<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    	<icon-swiper></icon-swiper>
    	<sites-recommended></sites-recommended>
    	<hot-city></hot-city>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import SitesRecommended from './sites_recommended.vue'
import HotCity from './hot_city.vue'

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
		"sites-recommended": SitesRecommended,
		"hot-city": HotCity
	}
}
</script>

<style>
	body {
		background: #f5f5f5;
	}
</style>
