<template>
<div>
	<swiper :options="swiperOption" >
	    <swiper-slide v-for="page in pages">
	    	<ul class="icon-list">
	    		<li class="icon-item" v-for="item in page">
	    			<img class="icon-img" :src="item.imgUrl" />
	    		</li>
	    	</ul>
	    </swiper-slide>
		<slot></slot>
	   <swiper-slide v-for='page in pages' :key='page.index'>
		   	
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
			},
			iconsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "7",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "8",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			}]
    	}
	},
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
	.icon-list {
		overflow: hidden;
		padding-bottom: .6rem;
	}
	.icon-item {
		display: block;
		width: 25%;
		float: left;
		padding: .2rem 0;
	}
	.icon-img {
		display: block;
		width: .66rem;
		height: .66rem;
		margin: 0 auto;
	}
</style>
