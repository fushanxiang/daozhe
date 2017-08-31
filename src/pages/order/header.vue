<template>
	<div class="order-info-outer">
		<div class="order-info-main">
			<h2 class="order-info-title">{{goodsInfo.title}}</h2>
			<ul class="order-info-taglist">
				<li class="order-info-item">
					<span class="item-icon iconfont">&#58919;</span>
					随心退
				</li>
			</ul>
		</div>
		<div class="order-info-right">
			<div class="order-info-price">
				<span class="order-price">
					&yen;
					<span class="order-price-num">{{goodsInfo.sellPrice}}</span>
				</span>
				<span class="order-role">起</span>
				/张
			</div>
			<div class="order-info-note">预订须知</div>
		</div>
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
	.order-info-outer {
		margin-top:1rem;
		position: relative;
		overflow: hidden;
		min-height: 1.1rem;
		padding: .2rem .2rem .1rem .2rem;
		background: #fff;
	}
	.order-info-main {
		margin-right: 1.9rem;
		float: left;
	}
	.order-info-title {
		line-height: .44rem;
		margin-bottom: .04rem;
		color: #212121;
		font-size: .32rem;
	}
	.order-info-taglist {
		margin-left: -.2rem;
	}
	.order-info-item {
		float: left;
		line-height: .44rem;
		margin-left: .2rem;
		font-size: .24rem;
		color: #616161;
	}
	.item-icon {
		color: #00bcd4;
		font-size: .24rem;
	}
	.order-info-right {
		position: absolute;
		right: .2rem;
		top:.2rem;
		width: 1.8rem;
		text-align: right;
	}
	.order-info-price {
		height: .44rem;
		line-height: .44rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.order-price {
		color: #ff8300;
	}
	.order-price-num {
		font-size: .38rem;
	}
	.order-info-note {
		margin-top: .12rem;
		line-height: .32rem;
		color: #00bcd4;
		font-size: .28rem;
	}
</style>