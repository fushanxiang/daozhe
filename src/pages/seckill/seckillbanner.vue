<template>
	<div class="seckill-content">
		<div class="banner">
			<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/banner.jpg" class="banner-img">
		</div>
		<div class="list">
			<div class="img-item">
				<img src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/anchor.jpg" class="list-img">
			</div>
			<ul class="list-info">
				<li class="list-type">
					<a href="javascript:void(0)" @click="goAnchor('#anchor')" class="type-choice active">1元秒</a></li>
				<li class="list-type" @click="handleClickA">
					<a a href="javascript:void(0)"  class="type-choice" >热门TOP</a></li>
				<li class="list-type" @click="handleClickB">
					<a href="javascript:void(0)" class="type-choice">玩水</a>
				</li>
				<li class="list-type" @click="handleClickC">
					<a href="javascript:void(0)" class="type-choice">一日游</a>
				</li>
			</ul>
		</div>
			<div class="seckill-img" id="anchor">
				<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/caption_0.jpg" class="ad-img">
				<p class="activity">8.24-9.10，每天10点准时开抢！</p> 
			</div>
			<div class="cheap-activity">	
        	 	<ul class="cheap-activity-list">
        	 		<li v-for="item in cheapInfo" :key="item.id" class="cheap-activity-item">
        	 			<div class="cheap-img">
        	 				<img :src="item.img" class="cheap-img-info">
        	 			</div>
        	 			<div class="cheap-title">{{item.title}}</div>
        	 			<div class="price">
	        	 			<div class="now-price">
	        	 				&yen;<span class="cheap-price">{{item.nowprice}}</span>
	        	 			</div>
	        	 			<div class="old-price">
	        	 				票面价&yen;{{item.oldprice}}
	        	 			</div>
        	 			</div>
        	 			<div class="buy">
        	 				立即购买
        	 			</div>
        	 		</li>     
        	 	</ul>
			</div>
	</div>
</template>
<script>
	export default{
		name:'banner',
		props:["cheapInfo"],
		methods: {
		    goAnchor(selector) {
		    	console.log(selector)
		        var anchor = this.$el.querySelector(selector)
		        document.body.scrollTop = anchor.offsetTop
		    },
		    handleClickA(){
		    	this.$emit('changeA')
		    },
		    handleClickB(){
		    	this.$emit('changeB')
		    },
		    handleClickC(){
		    	this.$emit('changeC')
		    }
		},
		data(){
			return {
				
			}
		}
	}
</script>
<style scoped>
	@import '../../assets/css/common/border.css';
	.banner{
		width:100%;
		height:0;
		padding-bottom: 71.2%;
		background: #ff8106;
	}
	.banner-img{
		width: 100%;
	}
	.list{
		position: relative;
	}
	.img-item{
		width: 100%;
		height:0;
		padding-bottom: 15.9%;
	}
	.list-img,.ad-img{
		width: 100%;
		display: block;
	}
	.list-info{
		width: 92%;
		padding: 0 4%;
		position: absolute;
		top:50%;
		left:0;
		margin-top: -.3rem;	
	}
	.list-type{
		float: left;
		width: 25%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .6rem;
		text-align: center;
	}
	.seckill-img{
		width: 100%;
		height:0;
		padding-bottom: 26.875%;
	}
	.type-choice{
		text-shadow: 0 0 0.1rem #418aff, 0 0.08rem 0 rgba(103,0,133,.9);
		color: #fff;
    	font-size: .28rem;
	}
	.active{
		color: #ffe400;
    	text-shadow: 0 0 0.1rem #ff0003, 0 0.08rem 0 rgba(103,0,133,.9);
	}
	.activity{
		background: linear-gradient(to bottom,#9003b7,#8e03ba);
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .26rem;
		padding: .1rem;
		text-align: center;
		color: #fff;
	}
	.cheap-activity{
		height:4rem;
		margin-top: .4rem;
		box-sizing: border-box;
		overflow-x: auto;
		background: #8d03ba;
	}
	.cheap-activity-list{
		width:18rem;
		height: 98%;
		overflow-x: auto; 
		box-sizing: border-box;
		border-top: 2px solid #f062ff;
	}
	.cheap-activity-item{
		float:left;
		width:14.2%;
		height: 90%;
		background: #fff;
		margin: .2rem;
	}
	.cheap-img{
		height:0;
		width:100%;
		padding-bottom:61.76%;
	}
	.cheap-img-info{
		width: 100%;
	}
	.cheap-title{
    	width:94%;
    	overflow: hidden;
    	display: -webkit-box; 
		-webkit-line-clamp: 2; 
		-webkit-box-orient: vertical;
		height: .72rem;
		line-height: .36rem;
	    color: #222;
	    font-size: .28rem; 
	}
	.price{
		overflow: hidden;
	}
	.now-price{
		float: left;
		padding-left: .15rem;
		line-height: .48rem;
		color: #ff5a00;
		font-size: .24rem;
	}
	.cheap-price{
		font-size: .4rem;
	}
	.old-price{
		float: right;
		padding-right: .15rem;
    	line-height: .48rem;
    	color: #999;
    	font-size: .24rem;
    	text-decoration: line-through;
	}
	.buy{
		margin: 0 .2rem;
	    background: #ff5a00;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .5rem;
	    text-align: center;
	}
	.page{
		width:100%;
		height: 30rem;
	}
	.activity{
		background: linear-gradient(to bottom,#9003b7,#8e03ba);
		border-bottom: 1px solid #f062ff;
		text-align: center;
		color: #e064ed;
	}
</style>