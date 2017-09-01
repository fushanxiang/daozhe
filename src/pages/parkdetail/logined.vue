<template>
	<div class="bigdiv">

		<div class="discussall-header" id="header">
			<router-link to="/discussall">
				<span class="iconfont css-icon-left">&#xe600;</span>
			</router-link>
			<h1 mp-role="title" class="discussall-header-title css-title">登录</h1>
		</div>
		
		<div class="conent">		
			我没写，你写吧！！！哈哈哈。。。
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}	
		},
		methods:{
        }
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	#header {
		position: fixed;
		width: 100%;
	}	
	.discussall-header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
		z-index: 91;
	}
	.css-icon-left {
		position: absolute;
		top: .24rem;
		padding-left: .15rem;
		font-size: .40rem;
		color: white;
	}	
	.discussall-header-title {
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	.conent {
		position: absolute;
		top: 6rem;
		left: 2rem;
		height: 100%;	
		font-size: 30px;	
	}
	
</style>