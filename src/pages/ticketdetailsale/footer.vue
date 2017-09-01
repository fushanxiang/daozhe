<template>
	<div class="footerbar">
		<div class="fixed-price">
			<span class="priceitem ">
				价格<em class="priceicon">¥</em><span class="showprice">1</span>
			</span>
		</div>
		<div class="fixed-reserve">
			<span class="reserveitem ">
				立即预定
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			
		}
	}

</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.footerbar {
		position: fixed;  
		z-index: 101;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		background: yellow;
	}
	.fixed-price {
		float: left;
		height: .88rem;
		width: 56%;
		background: #fff;
		color: #ff8300;
		text-indent: .2rem;
	}
	.fixed-reserve {
		overflow: hidden;
		width: 44%;
		height: .88rem;
		background: #ff9800;
		font-size: .36rem;
		text-align: center;
	}
	.priceitem {
		color: #616161;
		line-height: .88rem;
		font-size: .28rem;
	}
	.priceicon {
		color:#ff8300;
		margin:0 .05rem;
	}
	.showprice {
		color:#ff8300;
		font-size: .4rem;
	}
	.reserveitem {
		color:#fff;
	}
</style>
