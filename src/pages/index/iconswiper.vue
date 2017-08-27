<template>
<div>
	<swiper :options="swiperOption" >
	    <swiper-slide v-for="page in pages" :key='page.index'>
	    	<ul class="icon-list">
	    		<li class="icon-item" v-for="item in page" :key='item.id'>
	    			<img class="icon-img" :src="item.imgUrl" />
	    			<h1 class="icon-title">{{item.title}}</h1>
	    		</li>
	    	</ul>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
   <!--  <div @click="handleButton">button</div> -->
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
			},
			iconsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"link": "/detail",
				"title":"景点门票"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
				"link": "/detail",
				"title":"一日游"
			},{
				"id": "3",
				"imgUrl": "https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png",
				"link": "/detail",
				"title":"暑期大促"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
				"link": "/detail",
				"title":"必游榜单"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png",
				"link": "/detail",
				"title":"景点讲解"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/1a/261d4530330c202.png",
				"link": "/detail",
				"title":"水上玩乐"
			},{
				"id": "7",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
				"link": "/detail",
				"title":"故宫"
			},{
				"id": "8",
				"imgUrl": "https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png",
				"link": "/detail",
				"title":"周边游"
			},{
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png",
				"link": "/detail",
				"title":"玻璃栈道"
			},{
				"id": "10",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",
				"link": "/detail",
				"title":"古北水镇"
			},{
				"id": "11",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/aa/a4cc16ba5e66a702.png",
				"link": "/detail",
				"title":"亲子游"
			},{
				"id": "12",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
				"link": "/detail",
				"title":"游乐场"
			},{
				"id": "13",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/c3/133460666f6f9202.png",
				"link": "/detail",
				"title":"室内娱乐"
			},{
				"id": "14",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
				"link": "/detail",
				"title":"动植物园"
			},{
				"id": "15",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/4c/cb6f790552dc3002.png",
				"link": "/detail",
				"title":"农家度假"
			},{
				"id": "16",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			}]
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
