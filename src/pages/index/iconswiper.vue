<template>
<div>
	<swiper :options="swiperOption" >
	    <swiper-slide v-for="page in pages">
	    	<ul class="icon-list">
	    		<li class="icon-item" v-for="item in page" :key='item.id'>
	    			<img class="icon-img" :src="item.imgUrl" />
	    			<h1 class="icon-title">{{item.title}}</h1>
	    		</li>
	    	</ul>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
   <div @click="handleButton">button</div>
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
				pagination : '.swiper-pagination',
				paginationClickable :true,
				observeParents:true
			}
    	}
	},
	props:["iconsInfo"],
	methods: {
		handleButton: function(){
			this.iconsInfo.push({
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			})
		}
	},
	computed: {
		pages: function() {
			const pages = [];
			for (var i = 0; i < this.iconsInfo.length; i++) {
				let page = Math.floor(i/8);
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
	.icon-list {
		overflow: hidden;
		height: 3.7rem;
		background: #fff;
		padding-top:.1rem;
	}
	.icon-item {
		display: block;
		width: 25%;
		float: left;
		height: 1.3rem;
		padding-top:.3rem;
		text-align: center;
	}
	.icon-img {
		display: block;
		width: .66rem;
		height: .66rem;
		margin: 0 auto;
	}
	.icon-title{
		margin-top:.2rem;
		font-size: .28rem;
		color:#212121;

	}
</style>
