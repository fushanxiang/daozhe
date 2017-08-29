<template>
	<scroller :on-refresh="refresh" :on-infinite="infinite">
		<div class="bg">
			<index-herder></index-herder>
			<index-category></index-category>
			<hotplace :goods="goods"></hotplace>
			<recommendplace :goods="goods"></recommendplace>
		</div>
	</scroller>
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
	    	this.goods = data.goods.splice(0,2);
	    }, response => {
	    	console.log("ajax error");
	    });
	},
	components: {
		'index-herder' : IndexHeader,
		'index-category' : IndexCategory,
		'hotplace' : Hotplace,
		'recommendplace' : Recommendplace
	},
	methods: {
	    refresh: function (done) {
	    	var this_ = this;
	    	setTimeout(function () {
		        
		        done();
	    	}, 1500)
	    },

	    infinite: function (done) {
	    	var this_ = this;
	    	var length = this.goods.length;
	    	setTimeout(function () {
		        this_.$http.get('/static/weekend.json').then(response => {
        	    	var data1 = response.body.data.goods;
        	    	var data2 = data1.splice(length,2);
        	    	this_.goods = this_.goods.concat(data2);
        	    }, response => {
        	    	console.log("ajax error");
        	    });
			    done();
	    	}, 1500)
	    }
	}    
}
</script>

<style scoped>

	.bg{
		background: #f1f5f6;
	}
</style>
