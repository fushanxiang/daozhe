<template>
	<dir class="foot">
		<ul class="foot-one">
			<li class="foot-li">
				<a href="#">
					<div class="iconfont">&#xe635;</div>
					<span class="foot-title">机票</span>
				</a>
			</li>
			<li class="foot-li">
				<a href="#">
					<div class="iconfont">&#xe609;</div>
					<span class="foot-title">酒店</span>
				</a>
			</li>
			<li class="foot-li">
				<a href="#">
					<div class="iconfont">&#xe698;</div>
					<span class="foot-title">公寓</span>
				</a>
			</li>
			<li class="foot-li">
				<a href="#" class="last">
					<div class="iconfont">&#xe608;</div>
					<span class="foot-title">更多</span>
				</a>
			</li>
		</ul>
		<ul class="foot-two">
			<li>登陆</li>
			<li>我的订单</li>
			<li>我的订单</li>
			<li>我的订单</li>
		</ul>
		<ul class="foot-three">
			<li class="touch">触屏版</li>
			<li class="telephone">手机版</li>
		</ul>
		<div class="foot-four">Qunar 京ICP备05021087<span>意见反馈</span></div>
	</dir>
</template>

<script>
	export default{
        data() {
        	return {

        	}
        }
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
	.foot{
		width: 100%;
		background: #f3f3f3;
		padding-left: 0;
		margin: 0;
	}
	.foot-one{
        width: 6rem;
	    height: .5rem;
	    padding: .2rem .1rem 0 .1rem;
	    margin-left: .7rem;
	    overflow: hidden;
	}
	.foot-li{
		padding-left: .2rem;
	    height: .62rem;
	    width: 1.3rem;
	    float: left;
	}
	.foot-li a{
		display: block;
	    height: .44rem;
	    width: 100%;
	    font-size: .24rem;
	}
	.foot-li a .iconfont{
		float: left;
	    width: .44rem;
	    height: .44rem;
	    color:#9e9e9e;
	    background-size: 175px 50px;
	}
	.foot-title{
		float: left;
	    display: inline-block;
	    color: #9e9e9e;
	    margin: .06rem 0 0 .1rem;
	    border-bottom: 1px solid #acacac;
	    font-size: .24rem;
	}
	.foot-one .last{
		border-left: 1px solid #acacac;
		padding-left: .3rem;
	}
	.foot-two{
		width: 100%;
		height:.78rem;
		border-bottom: 1px solid #cacaca;
	}
	.foot-two li{
		float: left;
		padding-left: .4rem;
		color: #25a4bb;
	    font-size: .28rem;
	    line-height: .78rem;
	}
	.foot-three{
		width: 100%;
		padding: .2rem 0 0 0;
        overflow: hidden;
	}
	.foot-three li{
		color: black;
		font-size: .28rem;
	}
	.foot-three .touch{
		float: left;
		margin-left: 2.44rem;
	}
	.foot-three .telephone{
		float: right;
		color:#25a4bb;
		margin-right: 2.44rem;
	}
	.foot-four{
		width: 100%;
		color: #9e9e9e;
	    text-align: center;
	    font-size: .28rem;
	    padding: .2rem;
	}
</style>