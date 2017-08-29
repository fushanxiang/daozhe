<template>
	<div>
		<header class="header">
			<a class="header-left iconfont">&#xe624;</a>
			<div class="header-title">
				门票9元琪
			</div>
			<div class="header-right">
				<p class="iconfont">&#xe601;</p>
				首页
			</div>
		</header>
		<div class="topic">
			<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/banner_v3.jpg" alt="">
			<p class="imgcamel">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/camel_normal.png" alt="" width="100%" height="100%">
			</p>	
			<p class="imgcamel">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/camel_eye.png" alt="" width="100%" height="100%">
			</p>
		</div>
		<div class="topic">
		<ul>
			<li class="itemsList" v-for="item in itemshotcity">{{item.text}}</li>
			<li class="itemsList iconfont">&#xe62d;</li>
		</ul>
			<a href="#">
				<img class="lmgtop" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/caption_1.jpg" alt="" width="100%">
			</a>
	</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

    	}

	},
	props:['itemshotcity'],
}
</script>

<style scoped>
	
	@import "../../assets/font/iconfont.css";
	.topic{position:relative}
	.topic img{height:35.625%;width:100%;}
	.header{
		position: relative;
		overflow: hidden;
		background: #1ba9ba;
		height: 44px;
		text-align: center;
		color: white;
	}
	.header-left{
		float: left;
		color: white;
		margin: .3rem 0 0 .1rem;
	}
	.header-right{
		float: right;
		margin: 0.19rem .1rem 0 0;
		font-size: 10px;
	}
	.header-title{
		position: absolute;
		margin: .3rem 0 0 2.8rem;
	}
	ul li ol{list-style:none;}
	.itemsList{
		line-height: 5.93vh;
		text-align: center;
		color: #fff;
		font-size: 0.28rem;
		background: #fd551e;
		float:left;
		width:20%;
		height: 5.93vh;
	}
	li:last-child{
		background: #ff2d0a;
	}
	.imgtop{
		position: relative;
	}
	.imgcamel{
		width: 100px;
		position: absolute;
		bottom: 0;
		right: 10px;
	}
</style>
