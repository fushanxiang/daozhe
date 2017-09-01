<template>
	<div class="header-container">
		<div class="mask" v-if="show">
		<div class="close iconfont" @click="handleClick">&#58935;</div>
			<swiper :options="swiperOption" class="swiper-box">
			    <swiper-slide class="swiper-item">
			    	<img :src="goodsInfo.src" class="swiper-img">
			    </swiper-slide>
			    <swiper-slide class="swiper-item">
			    	<img :src="goodsInfo.src" class="swiper-img">
			    </swiper-slide>
			    <swiper-slide class="swiper-item">
			    	<img :src="goodsInfo.src" class="swiper-img">
			    </swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>  
		  	</swiper>
		  	<div class="swiper-button-prev swiper-button "><span class="button iconfont">&#xe60b;</span></div>
    		<div class="swiper-button-next swiper-button "><span class="button button-right iconfont">&#xe60b;</span></div>
		 
		</div>
		<div class="img-container">
			<router-link to="/weekendtour/index" class="back-btn iconfont">&#59031;</router-link>
			<img :src="goodsInfo.src" @click="handleClick"class="header-img" />
			<div class="show-images">
				<span class="pic-iconh iconfont">&#59180;</span>
				<span>1</span>
				<span>/</span>
				<span >{{goodsInfo.imgsSrc ? goodsInfo.imgsSrc.length : 3}}</span>
			</div>
		</div>
		<div class="header-content">
			<h3 class="place-title">{{goodsInfo.title}}</h3>
			<div class="place-price-content">
				<span class="place-price-header">&yen;</span>
				<span class="place-price-selling">{{goodsInfo.sellPrice}}</span>
				<span class="place-price-footer">起/张</span>
				<span class="place-price-market">&yen;{{goodsInfo.marketPrice}}/张</span>
			</div>
			<div class="comment">
				<div class="starlevel">
					<span class="star-icon iconfont" v-for="item in goodsInfo.starLevel">
						<span>&#58955;</span>
					</span>
					
					<span class="comment-score">{{goodsInfo.starLevel}}分</span>
					<router-link :to="'/weekendtour/comment/id='+goodsInfo.id">
						<span class="comment-totalnum">{{goodsInfo.comments ? goodsInfo.comments : 0}}评论</span>
						<span class="next-icon iconfont">&#58918;</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	data () {
		return {
				show: false,
				swiperOption: {
				direction : 'horizontal',
				autoHeight: true,
				paginationType: "fraction",
				pagination : '.swiper-pagination',
				paginationClickable :true,
				observeParents:true,
				prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
			
        	}
			
		}
	},

	props:["goodsInfo"],
	methods: {
		handleClick () {
			this.show = !this.show;

		}
	},
	components:{
		"swiper": swiper,
		"swiper-slide": swiperSlide
	}
}
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	@import '~swiper/dist/css/swiper.css';
	.img-container {
		position: relative;
	}
	.back-btn {
		position: absolute;
		top: .1rem;
		left: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		color: #fff;
		font-size: .60rem;
		text-align: center;
		font-weight: 900;
	}
	.header-img {
		width: 100%;
	}
	.show-images {
		position: absolute;
		right: .2rem;
		bottom: .3rem;
		min-width: 1rem;
		padding: 0 .15rem;
		line-height: .4rem;
		background: rgba(0,0,0,.3);
		color: #fff;
		border-radius: .3rem;
		font-size: .24rem;
		text-align: center;
	}
	.pic-icon {
		font-size: .26rem;
	}
	.header-content {
		position: relative;
		padding: .3rem .2rem 0 .2rem;
		border-bottom: .02rem solid #ccc;
	}
	.place-title {
		font-size: .32rem;
		line-height: .38rem;
	}
	.place-price-content {
		margin: .3rem 0 .1rem 0;
	}
	.place-price-header {
		color: #ff8300;
		font-size: .24rem;
	}
	.place-price-selling {
		color: #ff8300;
		font-size: .36rem;
	}
	.place-price-footer {
		color: #9e9e9e;
		font-size: .24rem;
	}
	.place-price-market {
		color: #9e9e9e;
		font-size: .24rem;
		text-decoration: line-through;
	}
	.comment {
		position: relative;
		line-height: .9rem;
	}
	.comment:before {
	    content: ' ';
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: 100%;
	    height: 0;
	    border-top: .02rem dashed #ccc;
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
	.star-icon {
		color: #00bcd4;
	}
	.comment-score {
		margin-left: .1rem;
    	color: #616161
	}
	.comment-totalnum {
		float: right;
	    padding-right: .3rem;
	    color: #616161;
	    font-size: .28rem;
	}
	.next-icon {
		position: absolute;
		top: 0;
		right: .06rem;
		width: .2rem;
		height: .9rem;
		color: #9e9e9e;
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		z-index: 30;
	}
	.swiper-box {
	    width: 100%;
	    height: 100%;
	    margin: 0 auto;
	}
	
	.swiper-img{
		position: absolute;
		width: 100%;
		top: 4.8rem;
	}
	.swiper-button {
		
		background: transparent;
		
	}
	.swiper-pagination {
		color: white;
	}
	.button {
		position: absolute;
		top: 5rem;
		font-size: .8rem;
		color: white;
	}
	.button-right {
		transform: rotateZ(180deg);
		right: .07rem;
	}
	.close {
		position: absolute;
		font-size: .6rem;
		color: white;
		top: .4rem;
		right: .4rem;
		z-index: 20;
	}
	.swiper-pagination {
		padding-bottom: .7rem;
	}
	
		

</style>