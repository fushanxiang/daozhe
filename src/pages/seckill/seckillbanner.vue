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
				<li class="list-type"><a href='#' class="type-choice active">1元秒</a></li>
				<li class="list-type"><a href='#' class="type-choice">热门TOP</a></li>
				<li class="list-type"><a href='#' class="type-choice">玩水</a></li>
				<li class="list-type"><a href='#' class="type-choice">一日游</a></li>
			</ul>
		</div>
			<div class="seckill-img">
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
		data(){
			return {
				cheapInfo:[{
					"id":"0",
					"img":"//img1.qunarzz.com/sight/p0/1412/54/bd1854520fc67767e8df8c8f89c547eb.water.jpg_292x181_a33a23df.jpg",
					"title":"【限量大促】仙女湖水上嘉年华门票",
					"nowprice":"1",
					"oldprice":"60"
				},{
					"id":"1",
					"img":"//img1.qunarzz.com/sight/p0/1609/31/3116c0c6deaaf099a3.img.jpg_292x181_5ca214ab.jpg",
					"title":"【限量大促】仙女湖水上嘉年华门票",
					"nowprice":"1",
					"oldprice":"60"
				},{
					"id":"2",
					"img":"//img1.qunarzz.com/sight/p0/1706/45/45d5fb9688e2420ba3.img.jpg_292x181_e3f8d833.jpg",
					"title":"【限量大促】仙女湖水上嘉年华门票",
					"nowprice":"1",
					"oldprice":"60"
				},{
					"id":"3",
					"img":"//img1.qunarzz.com/sight/p0/1706/45/45d5fb9688e2420ba3.img.jpg_292x181_e3f8d833.jpg",
					"title":"【限量大促】仙女湖水上嘉年华门票",
					"nowprice":"1",
					"oldprice":"60"
				},{
					"id":"4",
					"img":"//img1.qunarzz.com/sight/p0/1607/10/10df450f178aef96b4.img.jpg_292x181_44ee5d0e.jpg",
					"title":"【限量大促】仙女湖水上haahhaha嘉年华门票",
					"nowprice":"1",
					"oldprice":"60"
				},{
					"id":"5",
					"img":"//img1.qunarzz.com/sight/p0/201401/27/0310113c1bb74fe6bf3c4a0fad7059c1.jpg_292x181_7873583f.jpg",
					"title":"【限量大促】仙女湖水上嘉年华门票",
					"nowprice":"1",
					"oldprice":"60"
				}]
			}
		}
	}
</script>
<style>
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
		line-height: .26rem;
		padding: .1rem;
		text-align: center;
		color: #fff;
	}
	.cheap-activity{
		height:3.8rem;
		margin: .4rem 0;
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
		width:13.5%;
		height: 90%;
		background: #fff;
		margin: .14rem;
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
    	line-clamp: 2;
    	text-overflow: ellipsis;
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
</style>