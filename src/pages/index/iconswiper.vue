<template>
<div>
	<swiper :options="swiperOption" > 
	    <swiper-slide v-for="page in pages" :key='page.key'>
	        <router-link to="/summervacation">
		    	<ul class="icon-list">
		    		<li class="icon-item" v-for="item in page" :key='item.id'>
		    			<img class="icon-img" :src="item.imgUrl" />
		    			<h1 class="icon-title">{{item.title}}</h1>
		    		</li>
		    	</ul>
	    	</router-link>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
	<div class="position-sale">
	    <div class="position">
	    	<div class="position-directon">
	    	    <span class="position-left iconfont">&#xe615;</span>
			    定位失败
			</div>
			<div class="position-directon">
			    <span class="position-right iconfont">&#xe629;</span>
				九元门票
			</div>
	    </div>
        <div class="sale"></div>
	</div>
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
			}
			
    	}
	},
	props:["iconsInfo"],
	methods: {
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
			for(var j = 0;j < pages.length;j++){
				pages[j].key = (new Date()).getTime()
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
		width:100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .28rem;
		color:#212121;
	}
	.position-sale{
    	overflow: hidden;
    	background-color: #f5f5f5;
    }
    .position{
    	width: 100%; 	
    	border-top:1px solid #e0e0e0;
    	overflow: hidden;
    	margin-bottom: .24rem;
    }
    .position-directon{  
    	float: left;
    	width: 50%;
    	line-height: .98rem;
    	font-size:.28rem;
    	color:#212121;
    	overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
    	font-size:.28rem;
    	color:#212121;
    	line-height: .98rem;
    	text-align: center;
        box-sizing: border-box;
    	background-color: #fff; 
    }
    .position-directon:nth-child(1){
    	border-right: 1px solid #e0e0e0;
    }
    .position-left{
    	font-size: .32rem;
    	margin-right: .05rem;
    	color:#616161;
    }
    .position-right{
    	font-size: .32rem;
    	margin-right: .05rem;
    	color:#616161;
    }
    .sale{
    	width: 100%;
    	height: 1.4rem;
    	text-align: center;
    	border:1px solid #e0e0e0;
    	background:#fff url(http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png) center center no-repeat;
    	background-size:auto 100%;
    }
</style>