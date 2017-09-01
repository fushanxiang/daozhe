<template>
	<div class="top-container">
		<router-link :to="'/weekendtour/detail/id=' + goodsInfo.id" class="back-icon iconfont">&#59031;</router-link>
		<h1 class="top-title">订单填写</h1>
		<router-link to="#" class="login-btn">登录</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:['goodsInfo']
	}
</script>

<style scoped>
	.top-container {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		background: #00bcd4;
		height: .88rem;
		color: #fff;
	}
	.back-icon {
		position: absolute;
		left: .1rem;
		top: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		color: #fff;
		font-size: .60rem;
	}
	.top-title {
		margin: 0 1rem;
		font-size: .32rem;
		line-height: .88rem;
		text-align: center;
	}
	.login-btn {
		position: absolute;
		right: 0;
		top: 0;
		line-height: .88rem;
		width: 1rem;
		font-size: .28rem;
		color: #fff;
	}
</style>