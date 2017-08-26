<template>
	<swiper :options="swiperOption" >
		<slot></slot>
	   <swiper-slide v-for='page in pages' :key='page.index'>
		   	
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
			optionInfo:[{
				"id":"1",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"2",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"3",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"4",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"5",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"6",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"7",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"8",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			},{
				"id":"8",
				"link":'/detail',
				"imgsUrl":"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"title":'景点门票'
			}]
    	}
	},
	computed:{
			pages(){
				var pages = [];
				for(var i = 0;i<this.optionInfo.length;i++){
				var page = Math.floor(i/8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(this.optionInfo[i])
			}
			return pages
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
