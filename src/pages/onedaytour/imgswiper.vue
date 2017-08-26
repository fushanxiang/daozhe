<template>
	<swiper :options="swiperOption" >
		<slot></slot>

	    <swiper-slide v-for="item in imgsInfo" :key="item.id">
	    	<div class="img-container">
	    		<img class="swiper-img" :src="item.imgUrl" />
	    	</div>
	    </swiper-slide>
	    
	    <div class="swiper-pagination"  slot="pagination"></div>
	
	</swiper>
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
			imgsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1708/ab/877bdbdc81af5702.jpg_640x170_41499db9.jpg",
				"link": "/detail"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1708/fe/8e9fb9b5f4ec402.jpg_640x170_64d0a065.jpg",
				"link": "/detail"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1707/6c/9802ce8fe9f4602.jpg_640x170_c5d882a0.jpg",
				"link": "/detail"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1706/61/ccb2ab2bcfa58302.jpg_640x170_af9c3368.jpg",
				"link": "/detail"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1708/62/760badfeefe67902.jpg_640x170_3cf38e76.jpg",
				"link": "/detail"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1708/e2/596aa2193fe1ae02.jpg_640x170_500b7eb2.jpg",
				"link": "/detail"
			}]
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
	.img-container {
		background: #eee;
		overflow: hidden;
		width: 100%;
		padding-bottom: 31.25%;
		height: 0;
	}
	.swiper-img {
		width:100%;
	}
</style>
