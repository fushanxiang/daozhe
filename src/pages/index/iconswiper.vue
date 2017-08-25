<template>
	<swiper :options="swiperOption" >
		<slot></slot>
	   <swiper-slide v-for='page in pages'>
		   	<div class="category-list-item" v-for='item in page' :key='item.id'>
		   		<img class="category-list-img" :src="item.imgsUrl">
		   		<p class="category-list-title">{{item.title}}</p>
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
				console.log(pages[page])
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
	.category-list{
		width:100%;
		height:0;
		overflow: hidden;
		padding-bottom: 50%;
	}
	.category-list-item{
		width:25%;
		float: left;
		height:1.3rem;
		padding-top: .3rem;
		text-align: center;
	}
	.category-list-img{
		width:.66rem;
		height:.66rem;
	}
	.category-list-title{
		font-size: .28rem;
		margin-top: .2rem;
	}
	.swiper-slide{
		height:3.8rem;
	}
</style>
