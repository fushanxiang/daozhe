<template>
	<div>
		<index-header></index-header>
		<light-sport></light-sport>
		<combo-detail></combo-detail>
		<related-place></related-place>
		<index-footer></index-footer>
		<footer-fixed></footer-fixed>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import IndexCategory from './light_sport.vue'
import ComboDetail from './combo_detail.vue'
import RelatedPlace from './related_place.vue'
import IndexFooter from './footer.vue'
import FooterFixed from './footer_fixed.vue'

export default {
  	data () {
    	return {
    	
   		}
     
	},
	components: {
		'index-header' : IndexHeader,
		'light-sport' : IndexCategory,
		'combo-detail' : ComboDetail,
		'related-place' : RelatedPlace,
		'index-footer' : IndexFooter,
		'footer-fixed' : FooterFixed
	}
}
</script>

<style scoped>
	body,html {
		background: #f1f1f1 !important;
	}
</style>
