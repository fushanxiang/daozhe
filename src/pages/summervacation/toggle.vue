<template>
	<div id="toggle" class="toggle">
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
		position: relative;
		overflow: hidden;
		padding-bottom:.2rem;
		padding-right: .2rem;
		background-color: #23a4e5;
		box-shadow: 0 0 0.2rem #000;
		padding:.2rem;
		padding-top:0;
	}
	.toggle-fixed{
		z-index: 10;
		padding-top:.2rem;
		padding-bottom:.2rem;
		padding-right: .2rem;
		background-color: #23a4e5;
		box-shadow: 0 0 0.2rem #000;
		padding:.2rem;
		position: fixed;
		top:0;
	}
	.toggle-list{
	   float: left;
       background: #0b68e6;
       width: 96%;
       padding:.13rem;
       border-radius: 0 .7rem .7rem 0;
	}
	.toggle-li{
		float: left;
		width: 20%;
		line-height: .44rem;
		color: #fff;
	    font-size: .2rem;
	    text-align: center;
	}
	.one{
		background: #4f9aff;
		color: #fff;
		font-style: italic;
		font-size: .26rem;
		text-align: center;
		border-radius: 0 .44rem .44rem 0; 
	}
	.two{
		color: #ffe800;
		font-size: .26rem;
	    line-height: .44rem;
	}

</style>