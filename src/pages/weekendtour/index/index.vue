<template>
	<scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
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
	    this.$http.get('/static/weekendtour.json').then(response => {
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
	    	setTimeout(() => {
		        done();
	    	}, 1500)
	    },

	    infinite: function (done) {
	    	var length = this.goods.length;
	    	setTimeout(() => {
		        this.$http.get('/static/weekendtour.json').then(response => {
        	    	var newData = response.body.data.goods.splice(length,2);
        	    	this.goods = this.goods.concat(newData);
        	    	this.$refs.myscroller.finishInfinite(true);
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