<template>
		<div class="wrapper">
			<div class="footer-content">
		
				<div class="footer-left" @click="handleclick">
				<span class="price-title">产品价格</span>
				<em class="price-symbol">
					&yen;
					<em class="price-num" >{{totalPrice ? totalPrice : goodsInfo.sellPrice}}</em>
					<span class="arrows-icon iconfont" v-if="!show">&#59045;</span>
					<span class="arrows-icon iconfont" v-if="show">&#xe6a6;</span>
				</em>
					</div>
					<router-link to="#" class="submit-order">提交订单</router-link>
			</div>
			<div class="mask" @click="handleclick"v-if="show"></div>
			<div class="booking-detail"v-if="show">
				<h2 class="booking-detail-title">温都水城两馆通票（温泉养生馆+H1水空间）</h2>
				<p class="booking-detail-price">&yen;{{goodsInfo.sellPrice}}&times;{{num}}</p>
			</div>
		</div>
		
</template>

<script>
	export default {
		data() {
			return {
				totalPrice: this.goodsInfo.sellPrice,
				num:1,
				show : false
			}
		},
		props:['goodsInfo'],
		mounted() {
			this.$bus.on('totalPriceChange', (props)=> {
				this.totalPrice = props*this.goodsInfo.sellPrice;
				this.num = props;
			})
		},
		methods: {
			handleclick () {
				this.show = !this.show;
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		width: 100%;
		height: 100%;
	}
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
	.mask {
		position: fixed;
		top: 0;
		bottom: 1rem;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.5);
		z-index: 10;
	}
	.booking-detail {
		position: fixed;
		bottom:1rem;
		width: 100%;
		height: 1.3rem;
		background: #fff;
		padding: .15rem .2rem;
		z-index: 11;

	}
	.booking-detail-title {
		width: 6rem;
		height: .88rem;
		color: #212121;
	    font-size: .32rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;

	}
	.booking-detail-price {
		height: .44rem;
	    line-height: .44rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	
</style>