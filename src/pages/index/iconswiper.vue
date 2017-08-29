<template>
	<swiper :options="swiperOption" >
		<slot></slot>
	    <swiper-slide>
	    	1222
	    </swiper-slide>
	    <swiper-slide>
	    	2333
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
			"iconsInfo":[{
				"id":"1",
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1707/90/2ab6fd356529aa02.jpg_640x200_5a7251a0.jpg",
				"link":"/detail",
				"title":"全部"
			},
			{
				"id":"2",
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1707/90/2ab6fd356529aa02.jpg_640x200_5a7251a0.jpg",
				"link":"/detail",
				"title":"全部"
			}
	    ]

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
	
</style>
