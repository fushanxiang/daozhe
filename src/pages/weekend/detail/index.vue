<template>
	<div>
		<index-header></index-header>
		<light-sport></light-sport>
		<combo-detail></combo-detail>
		<related-place></related-place>
		<index-footer></index-footer>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import IndexCategory from './light_sport.vue'
import Combodetail from './combo_detail.vue'
import Relatedplace from './related_place.vue'
import Indexfooter from './footer.vue'

export default {
  	data () {
    	return {
    	
   		}
     
	},
	components: {
		'index-header' : IndexHeader,
		'light-sport' : IndexCategory,
		'combo-detail' : Combodetail,
		'related-place' : Relatedplace,
		'index-footer' : Indexfooter
	}
}
</script>

<style scoped>
	
</style>
