<template>
	<swiper :options="swiperOption" class="carousel">
		<slot></slot>
	    <swiper-slide v-for="item in imgsInfo" :key="item.id">
	    	<div class="img-container">
	    		<img class="swiper-img" :src="item.imgUrl" />
	    	</div>
	    </swiper-slide>	    
	    <div class="swiper-pagination swiper-btn"  slot="pagination"></div>	
	</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data() {
		return {
			swiperOption: {
				direction: 'horizontal',
				autoHeight: true,
				autoplay: 3000,
				loop: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observeParents:true
			}
		}
	},
	props: ["imgsInfo"],
	components:{
		"swiper": swiper,
		"swiper-slide": swiperSlide
	}
}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
	.carousel {
		position: relative;
		top: .88rem;
		background: #fff;
	}
	.img-container {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 26.56%;
		background: #eee;
	}
	.swiper-img {
		width: 100%;
	}
</style>
