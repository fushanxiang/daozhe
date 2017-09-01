<template>
	<div>
		<header-fixed :goodsInfo="goodsInfo"></header-fixed>
		<index-header :goodsInfo="goodsInfo"></index-header>
		<light-spot :goodsInfo="goodsInfo"></light-spot>
		<combo-detail :goodsInfo="goodsInfo"></combo-detail>
		<related-place :goodsInfo="goodsInfo"></related-place>
		<index-footer></index-footer>
		<footer-fixed :goodsInfo="goodsInfo"></footer-fixed>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import IndexCategory from './light_spot.vue'
import ComboDetail from './combo_detail.vue'
import RelatedPlace from './related_place.vue'
import IndexFooter from './footer.vue'
import FooterFixed from './footer_fixed.vue'
import HeaderFixed from './header_fixed.vue'

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
		'index-header' : IndexHeader,
		'light-spot' : IndexCategory,
		'combo-detail' : ComboDetail,
		'related-place' : RelatedPlace,
		'index-footer' : IndexFooter,
		'footer-fixed' : FooterFixed,
		'header-fixed' : HeaderFixed
	}
}
</script>

<style scoped>
	body,html {
		overflow: hidden;
		background: #f1f1f1 !important;
	}
</style>
