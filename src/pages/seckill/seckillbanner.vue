<template>
	<div class="seckill-content">
		<div class="banner">
			<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/banner.jpg" class="banner-img">
		</div>
		<div class="list">
			<img src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/anchor.jpg" class="list-img">
			<ul class="list-info">
				<li class="list-type"><a href='#' class="type-choice active">1元秒</a></li>
				<li class="list-type"><a href='#' class="type-choice">热门TOP</a></li>
				<li class="list-type"><a href='#' class="type-choice">玩水</a></li>
				<li class="list-type"><a href='#' class="type-choice">一日游</a></li>
			</ul>
		</div>
		<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/caption_0.jpg" class="ad-img">
		<div class="inner">
			<ul class="seckill-list">
				li
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'banner',
		data(){
			return {

			}
		}
	}
</script>
<style>
	.banner{
		width:100%;
		height:0;
		padding-bottom: 71.2%;
	}
	.banner-img{
		width: 100%;
	}
	.list{
		position: relative;
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
	.type-choice{
		text-shadow: 0 0 0.1rem #418aff, 0 0.08rem 0 rgba(103,0,133,.9);
		color: #fff;
    	font-size: .28rem;
	}
	.active{
		color: #ffe400;
    	text-shadow: 0 0 0.1rem #ff0003, 0 0.08rem 0 rgba(103,0,133,.9);
	}
	.inner{
		width:100%;
		height:3.96rem;
		overflow: hidden;
		margin-bottom: .2rem;
	}
</style>