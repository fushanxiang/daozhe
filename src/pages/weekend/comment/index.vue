<template>
	<div>
		<header-fixed :goodsInfo="goodsInfo"></header-fixed>
		<!-- <comment :goodsInfo="goodsInfo"></comment> -->
	</div>
</template>

<script>

import HeaderFixed from './header_fixed.vue'
import Comment from './comment.vue'

export default {
  	data () {
    	return {
    		goodsInfo : []
   		}
     
	},
	created() {
		this.$http.get('/static/weekend.json').then(response => {
			var data = response.body.data;
			this.goodsInfo = data.goods[this.$route.params.id.split("=")[1]-1];
		}, response => {
			console.log("ajax error");
  		});
	},
	components: {
		'header-fixed' : HeaderFixed,
		'comment': Comment
	}
}
</script>

<style scoped>
	body,html {
		overflow: hidden;
		background: #f1f1f1 !important;
	}
</style>