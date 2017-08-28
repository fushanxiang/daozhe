<template>
	<div class="toggle">
		<ul class="toggle-list">
			<li class="toggle-li one">玩法分类</li>
			<li class="toggle-li two">冲浪漂流</li>
			<li class="toggle-li">玩法分类</li>
			<li class="toggle-li">玩法分类</li>
			<li class="toggle-li">玩法</li>
		</ul>
		<ul class="toggle-list">
			<li class="toggle-li one">玩法分类</li>
			<li class="toggle-li two">冲浪漂流</li>
			<li class="toggle-li">玩法分类</li>
			<li class="toggle-li">玩法分类</li>
			<li class="toggle-li">玩法</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
	.toggle{
		overflow: hidden;
		width: 100%;
		padding-bottom:.2rem;
		background-color: #23a4e5;
		box-shadow: 0 0 0.2rem #000;
	}
	.toggle-list{
       float: left;
       margin: 0 .2rem;
       height: .44rem;
       padding: .13rem;
       padding-right: 1rem;
       background: #0b68e6;
       position: relative;
       border-radius: .08rem .7rem .7rem 0;
	}
	.toggle-li{
		float: left;
		height: .44rem;
	    padding: 0 .08rem 0 .14rem;
	    color: #fff;
	    font-size: .26rem;
	    line-height: .44rem;
	    text-align: center;
	}
	.one{
		width: 1.24rem;
		height: .44rem;
		padding-right: .06rem;
		background: #4f9aff;
		color: #fff;
		font-style: italic;
		font-size: .26rem;
		line-height: .44rem;
		text-align: center;
		border-radius: 0 .44rem .44rem 0;
	}
	.two{
		height: .44rem;
		padding: 0 .08rem 0 .14rem;
		color: #ffe800;
		font-size: .26rem;
	    line-height: .44rem;
	    text-align: center;
	}
</style>