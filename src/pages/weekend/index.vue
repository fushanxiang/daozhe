<template>
	<div>weekend index
		<index-herder></index-herder>
		<index-category></index-category>
		<hotplace></hotplace>
		<recommendplace></recommendplace>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import IndexCategory from './category.vue'
import Hotplace from './hotplace.vue'
import Recommendplace from './recommendplace.vue'

export default {
	name: 'weekend-index',
  	data () {
    	return {
    	
   		}
     
	},
	components: {
		'index-herder' : IndexHeader,
		'index-category' : IndexCategory,
		'hotplace' : Hotplace,
		'recommendplace' : Recommendplace
	}
}
</script>

<style scoped>
	
</style>
