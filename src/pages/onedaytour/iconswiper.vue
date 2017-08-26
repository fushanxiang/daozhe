<template>
	<div class="icon">
		<swiper :options="swiperOption" >	    
		    <swiper-slide v-for="page in pages">
		    	<ul class="icon-list">
		    		<li class="icon-item" v-for="item in page">
		    			<img class="icon-img" :src="item.imgUrl" />
		    			<span class="icon-title">{{item.title}}</span>
		    		</li>
		    	</ul>
		    </swiper-slide>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data () {
		return {
			swiperOption: {
				direction : 'horizontal',
				autoHeight: true,
				paginationClickable :true,
				observeParents:true
			},
			iconsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png",
				"link": "/detail",
				"title":"周边游"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1604/aa/b08918c566c859f7.png",
				"link": "/detail",
				"title":"海滨海岛"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1606/46/613a55bf025859a.png",
				"link": "/detail",
				"title":"文化古迹"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1706/2a/57d3853e9aa66202.png",
				"link": "/detail",
				"title":"草原"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1511/ec/df937460fd8e72f7.png",
				"link": "/detail",
				"title":"亲子游"
			}]
    	}
	},
	computed: {
		pages: function() {
			const pages = [];
			for (var i = 0; i < this.iconsInfo.length; i++) {
				let page = Math.floor(i/5);
				if (!pages[page]) {
					pages[page] = [];
				}
				pages[page].push(this.iconsInfo[i])
			}
			return pages;
		}
	},
	components:{
		"swiper": swiper,
		"swiper-slide": swiperSlide
	}
}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
	.icon {
		height: 1.76rem;
		background: #fff;
	}
	.icon-list {
		overflow: hidden;
		height: 1.76rem;
	}
	.icon-item {
		display: block;
		width: 20%;
		float: left;
		padding: .24rem 0;
	}
	.icon-img {
		display: block;
		width: .744rem;
		height: .744rem;
		margin: 0 auto;
	}
	.icon-title {
		display: block;
		overflow: hidden;
		height: .54rem;
		margin: 0 .04rem;
		font-size: .24rem;
		line-height: .54rem;
		text-align: center;
		color: #212121;
	}
	
</style>
