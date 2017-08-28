<template>
	<div>
		<index-herder></index-herder>
		<index-category></index-category>
		<hotplace :goods="goods"></hotplace>
		<recommendplace :goods="goods"></recommendplace>
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
    		goods: []
   		}
     
	},
	created() {
	    this.$http.get('/static/weekend.json').then(response => {
	      var data = response.body.data;
	      this.goods = data.goods
	    }, response => {
	      console.log("ajax error");
	    });
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
