<template>
<div>
	<swiper :options="swiperOption" >
	    
	    <swiper-slide v-for="page in pages">
	    	<ul class="icon-list">
	    		<li class="icon-item" v-for="item in page">
	    			<img class="icon-img" :src="item.imgUrl" />
	    			<div class="keywords" :title="item.title">{{item.title}}</div>
	    			
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
			},
			iconsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				"link": "/detail",
				"title":"景点门票"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
				"link": "/detail",
				"title":"一日游"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
				"link": "/detail",
				"title":"文化古迹"
			},{
				"id": "5",
				"imgUrl": "https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png",
				"link": "/detail",
				"title":"厦门观音山"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/12/a16a3980aec17602.png",
				"link": "/detail",
				"title":"展馆"
			},{
				"id": "7",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
				"link": "/detail",
				"title":"自然风光"
			}
			,{
				"id": "8",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/ea/10024e1e382b7e02.png",
				"link": "/detail",
				"title":"泡温泉"
			},{
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
				"link": "/detail",
				"title":"全部"
			},{
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
				"link": "/detail",
				"title":"自然风光"
			},{
				"id": "7",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
				"link": "/detail",
				"title":"自然风光"
			}
			]
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
.keywords {
    margin-top: .2rem;
    color: #212121;
    font-size: .28rem;
   text-align: center;
}
.icon-list{
	overflow: hidden;
	width: 100%;
	padding-bottom: 48%;
	height:0;
	background: #eee;
}
</style>
