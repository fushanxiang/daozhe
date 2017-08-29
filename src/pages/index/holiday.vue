<template>
	<div class="holiday-trip">
		<h2 class="ht-modtitle">周末去哪儿</h2>
		
			<div class="ht-product-item">
				<a href="#" class="ht-fulllink" v-for="item in holidayInfo" :key="item.id">
					<div class="product-item-img" >
						<img v-lazy="item.imgUrl" class="img-info">
					</div>
					<div class="product-item-text" >
						<p class="product-name">{{item.title}}</p>
						<p class="product-descript">{{item.text}}</p>
					</div>
				</a>
			</div>
		<div class="price-info">
			<span class="type-icon iconfont">&#xe6ed;</span>
			<span class="type">票面价</span>
			<span class="type-info">是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
		</div>
	</div>
	
</template>

<script>
	export default {
		props:["holidayInfo"],
		data () {
			return {

	    	}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	body {
	    font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
	    color: #333;
	    font-size: .28em;
	    line-height: 1;
	}
	a {
		text-decoration: none;
		color: #000;
	}
	.ht-modtitle {
	    height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    color: #212121;
	}
	.ht-product-item {
		position: relative;
		background: #fff;
		margin-bottom: .1rem;
		background: #fff;
	}
	.ht-fulllink {
	    display: block;
	    width: 100%;
	    height: 100%;
	}
	.product-item-img {

		overflow: hidden;
	    height: 0;
	    padding-bottom: 37.4375%;
	}
	.img-info{
		vertical-align: bottom;
    	width: 100%;
	}
	.product-item-text {
		position: relative;
   		padding: .14rem .2rem .2rem .2rem;
	}
	.product-item-text .product-name {
	    overflow: hidden;
	    padding-right: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .48rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.product-item-text .product-descript {
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .42rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.type-icon{
		font-size: .14rem;
	}
	.type{
		font-weight: bold;
	}
	.price-info{
		background: #fff;
		line-height: .32rem;
		color: #616161;
		padding:.14rem .1rem; 
		font-size: .24rem;
	}
</style>
