<template>
	<div class="icon">
		<swiper :options="swiperOption" >	    
		    <swiper-slide v-for="page in pages" :key='page.key'>
		    	<ul class="icon-list">
		    		<li class="icon-item" v-for="item in page">
		    			<img class="icon-img" v-lazy="item.imgUrl" />
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
	data() {
		return {
			swiperOption: {
				direction : 'horizontal',
				autoHeight: true,
				paginationClickable: true,
				observeParents: true
			}
    	}
	},
	props: ["iconsInfo"],
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
	components: {
		"swiper": swiper,
		"swiper-slide": swiperSlide
	}
}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
	.icon {
		position: relative;
		top: .88rem;
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
		line-height: .54rem;
		text-align: center;
		margin: 0 .04rem;
		font-size: .24rem;
		color: #212121;
	}	
</style>