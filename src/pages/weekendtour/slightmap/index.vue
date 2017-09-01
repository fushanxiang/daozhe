<template>
	<div>
		<header-fixed :goodsInfo="goodsInfo"></header-fixed>
		<slight-map :goodsInfo="goodsInfo"></slight-map>
		<footer-fixed :goodsInfo="goodsInfo"></footer-fixed>
	</div>
</template>

<script>

import HeaderFixed from './header_fixed.vue'
import SlightMap from './slightmap.vue'
import FooterFixed from './footer_fixed.vue'


export default {
  	data () {
    	return {
    		goodsInfo : []
   		}
	},
	created() {
		this.$http.get('/static/weekendtour.json').then(response => {
			var id = this.$route.params.id.split("=")[1];
			this.id = id;
			var data = response.body.data;
			for(var i in data.goods){
				if(data.goods[i].id == this.id){
					this.goodsInfo = data.goods[i];
				}
			}
		}, response => {
			console.log("ajax error");
  		});
	},
	components: {
		'header-fixed' : HeaderFixed,
		'slight-map': SlightMap,
		'footer-fixed' : FooterFixed
	}
}
</script>

<style scoped>
	body,html {
		overflow: hidden;
		background: #f1f1f1 !important;
	}
</style>