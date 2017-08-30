<template>
	<swiper :options="swiperOption" >
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
			}
    	}
	},
	props:["imgsInfo"],
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
