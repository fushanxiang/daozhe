<template>
	<div>
		<header-fixed :goodsInfo="goodsInfo"></header-fixed>
		<index-header></index-header>
		<light-spot></light-spot>
		<combo-detail></combo-detail>
		<related-place></related-place>
		<index-footer></index-footer>
		<footer-fixed></footer-fixed>
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
		this.$http.get('/static/weekend.json').then(response => {
		var data = response.body.data;
		this.goodsInfo = data.goods;
		//console.log(this.goodsInfo[0].title);
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
