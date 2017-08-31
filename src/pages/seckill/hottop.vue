<template>
	<div>
		<div v-for="item in hot" ref='hottop' :id="'anchor-'+item.id" :key="item.id" :class="item.class" class="hot">
			<div class="city-hot">
	 			<div id="city-hot-title" class="city-hot-title">
	 				<img class="hot-title-img" v-lazy='item.titleImg' />
	 			</div>
	 			<div class="hot-content">
	 				<ul class="hot-list">
	 					<li class="hot-item" v-for="article in item.hotInfo" :key="article.id">
	 						<div class="hot-item-imgbox">
	 							<img class="hot-item-img" v-lazy='article.imgUrl' />
	 							<div class="scenic-name-box">
	 								<span class="scenic-name">{{article.name}}</span>
	 							</div>
	 						</div>
	 						<div class="scenic-title">{{article.title}}</div>
	 						<div class="scenic-price">
	 							<span class="scenic-price-sale">￥<span class="scenic-price-num">{{article.price}}</span></span>
	 							<span class="scenic-price-del">{{article.priceDel}}</span>
	 						</div>
	 						<div class="scenic-btn">立即抢购</div>
	 					</li>
	 				</ul>
	 			</div>
	 		</div>
		</div>
 		
	</div>
	
</template>

<script>
export default {
	props:["hot"],
	data () {
		return {
			
    	}
	}
}
</script>

<style scoped>
	
	@import "../../assets/font/iconfont.css";
	
	.hot-color {
		background: #fa2d4b;
	}
	.topic-color {
		background: #0391ff;
	}
	.tour-color {
		background: #71c148;
	}
	.city-hot {
		padding-top: .2rem;
		width: 100%;
	}
	.city-hot-title {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 26.8%;
	}
	.hot-title-img {
		width: 100%;
	}
	.hot-content {
		width: 100%;
		overflow: hidden;
	}
	.hot-list {
		overflow: hidden;
		margin: 0 .12rem;
    	padding-bottom: .6rem;
	}
	.hot-item {
		float: left;
		width: 48%;
		margin: 0 1%;
		margin-bottom: .16rem;
    	padding-bottom: .15rem;
		background: #FFF;
	}
	.hot-item-imgbox {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 61.8%;
	}
	.hot-item-img {
		width: 100%;
	}
	.scenic-name-box {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
    	padding: 0 .1rem;
    	background-color: rgba(0,0,0,.5);
	}
	.scenic-name {
		display: block;
    	color: #fff;
    	width: 80%;
    	overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
    	line-height: .4rem;
    	font-size: .24rem;
	}
	.scenic-title {
		height: .72rem;
		margin: .12rem .15rem 0;
		width: 90%;
		overflow: hidden;
		display: -webkit-box; 
		-webkit-line-clamp: 2; 
		-webkit-box-orient: vertical;
	    color: #222;
	    font-size: .28rem;
	    line-height: .36rem;
	}
	.scenic-price {
		overflow: hidden;
	    height: .76rem;
	    text-indent: .15rem;
	    line-height: .8rem
	}
	.scenic-price-sale {
		color: #ff5a00;
    	font-size: .28rem;
	}
	.scenic-price-sale .scenic-price-num {
		font-size: .4rem;
	}
	.scenic-price-del {
		color: #999;
    	text-decoration: line-through;
	}
	.scenic-btn {
		margin: 0 .15rem;
	    background: #ff5a00;
	    color: #fff;
	    font-size: .3rem;
	    line-height: .6rem;
	    text-align: center;
	    border-radius: .08rem;
	}
</style>
