<template>
	<div class="footer-content">
		<div class="footer-left">
			<span class="price-title">产品价格</span>
			<em class="price-symbol">
				&yen;
				<em class="price-num">127</em>
				<span class="arrows-icon iconfont">&#59045;</span>
			</em>
		</div>
		<router-link to="#" class="submit-order">提交订单</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.footer-content {
		position: fixed;
		z-index: 10;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 1rem;
		background: #fff;
	}
	.footer-content:before {
		content: "";
		position: absolute;
		width: 100%;
		height: .02rem;
		background: #c9cccd;
	}
	.footer-left {
		position: relative;
		float: left;
		width: 50%;
		line-height: 1rem;
		text-indent: .2rem;
		font-size: .24rem;
	}
	.price-title {
		color: #ff8300;
	}
	.price-symbol {
		color: #ff8300;
	}
	.price-num {
		font-size: .48rem;
	}
	.arrows-icon {
		font-size: .36rem;
		color: #666;
	}
	.submit-order {
		float: left;
		background: #ff9800;
		color: #fff;
		text-align: center;
		width: 50%;
		line-height: 1rem;
		font-size: .36rem;
	}
</style>