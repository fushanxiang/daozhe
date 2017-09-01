<template>
<div>
	<div class="discrip-mat"></div>
	<div class="discrip">
		<h3 class="address">{{headerTitle.headerTitle}}</h3>
		<ul class="price">
			<li class="li-left"><span class="marroy">￥</span><span class="math">45</span><span class="word">起</span> </li>
			<li class="li-middle">可定明日</li>
			<li class="li-right">已售：2765</li>
		</ul>
		<ol class="note">
			<li class="note-content"><span class="iconfont font-color">&#xe627;</span>条件退</li>
			<li class="note-content"><span class="iconfont font-color">&#xe627;</span>铁定成团</li>
			<li class="note-content"><span class="iconfont font-color">&#xe627;</span>无自费</li>
			<li class="note-content"><span class="iconfont font-color">&#xe627;</span>无购物</li>
		</ol>
		<div class="favourable">
			<span class="present">赠送</span> <span class="cash">登录购买产品反代金券￥1</span>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props:["headerTitle"]
	}
</script>
<style scoped>
	.address{
		padding: 0.1rem;
		font-size: 0.4rem;
	}
	.discrip-mat{
		width: 100%;
		height: 3.5rem;
		background: #edf8f4;
	}
	.discrip{
		position: absolute;
		top: 3.8rem;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 3.8rem;
		background: white;
		box-sizing: border-box;
		border: 1px solid white;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;		
	}
	.price{
		width: 100%;
		height: 0.6rem;
	}
	.li-left, .li-middle{
		float: left;
		margin-right: 0.3rem;
		font-size: 0.3rem;
	}
	.li-right{
		float: right;
		margin-right: 0.2rem;
		margin-top: 0.2rem;
		font-size: 0.3rem;
	}
	.marroy, .math{
		color: #ff9801;
	}
	.math{
		font-size: 27px;		
	}
	.word{
		color: #a5aaa4;
	}
	.li-middle{
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		font-size: 0.3rem;
	}
	.note{
		width: 100%;
		height: 0.6rem;
		border-bottom:1px solid #dadada;
		margin-top: 0.2rem;
	}
	.note-content{
		margin-left: 0.1rem;
		float: left;
		color: #4e4e4e;
		font-size: 0.3rem;
	}
	.font-color{
		color: #68c0d8;
	}
	.favourable{
		width: 100%;
		height: 1rem;
	}
	.present{
		line-height: 0.6rem;
		border-radius: 0.05rem;
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		display: block;
		width: 1.4rem;
		height: 0.6rem;
		float: left;
		overflow: hidden;
		border: 1px solid red;
		font-size: 0.3rem;
		color: red;
		text-align: center;
	}
	.cash{
		float: left;
		font-size: 0.3rem;
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		line-height: 0.6rem;
	}
</style>