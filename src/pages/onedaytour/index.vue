<template>
	<div>
		<index-header></index-header>
		<img-swiper :imgsInfo="imgsInfo"></img-swiper>
    	<icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
    	<sites-recommended :sitesImgsInfo="sitesImgsInfo"></sites-recommended>
    	<hot-city :addressInfo="addressInfo"></hot-city>
    	<mid-item :twoItemsInfo="twoItemsInfo"></mid-item>
    	<hot-routes :hotRouterInfo="hotRouterInfo"></hot-routes>
    	<hot-view :hotViewInfo="hotViewInfo"></hot-view>
	</div>
</template>

<script>
import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import SitesRecommended from './sites_recommended.vue'
import HotCity from './hot_city.vue'
import MidItem from './miditem.vue'
import HotRoutes from './hotroutes.vue'
import HotView from './hotview.vue'

export default {
	name: 'index',
	data() {
		return {
			imgsInfo:[],
			iconsInfo:[],
			sitesImgsInfo:[],
			addressInfo:[],
			hotRouterInfo:[],
			twoItemsInfo:[],
			hotViewInfo:[]
		} 
	},
	created() {
		this.$http.get('/static/onedaytour.json').then(response => {
			var data = response.body.data;
			this.iconsInfo = data.iconsInfo;
			this.imgsInfo = data.imgsInfo;
			this.sitesImgsInfo = data.sitesImgsInfo;
			this.addressInfo = data.addressInfo;
			this.hotRouterInfo = data.hotRouterInfo;
			this.twoItemsInfo = data.twoItemsInfo;
			this.hotViewInfo = data.hotViewInfo;
		}, response => {
			console.log("error")
		});
	},
	components: {
		"index-header": IndexHeader,
		"img-swiper": ImgSwiper,
		"icon-swiper": IconSwiper,
		"sites-recommended": SitesRecommended,
		"hot-city": HotCity,
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

