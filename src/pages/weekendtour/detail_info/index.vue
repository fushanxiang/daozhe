<template>
	<div>
		<header-fixed :goodsInfo="goodsInfo"></header-fixed>
		<detail-info :goodsInfo="goodsInfo"></detail-info>
	</div>
</template>

<script>

import HeaderFixed from './header_fixed.vue'
import DetailInfo from './detail_info.vue'

export default {
  	data () {
    	return {
    		goodsInfo : []
   		}
     
	},
	created() {
		this.$http.get('/static/weekendtour.json').then(response => {
			var data = response.body.data;
			this.goodsInfo = data.goods[this.$route.params.id.split("=")[1]-1];
		}, response => {
			console.log("ajax error");
  		});
	},
	components: {
		'header-fixed' : HeaderFixed,
		'detail-info': DetailInfo
	}
}
</script>

<style scoped>
	
</style>