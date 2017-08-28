<template>
	<div>
		<h2 class="product-title">周末去哪儿</h2>
		<div class="index-product" v-for="item in product" :id="item.id">
			<a class="product-a" href="">
					<div class="product-img-box">
						<img class="product-img" :src="item.src">
					</div>
				<div class="product-info">
					<p class="product-name">
						{{item.name}}
					</p>
					<p class="product-desc">
						{{item.desc}}
					</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			
    	}
	},
	props:["product"]
}
</script>

<style scoped>
.product-title {
	height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    background: #f8f8f8;
}
.product-img {
	position: relative;
    margin-bottom: .1rem;
    background: #fff;
}
.product-a {
	display: block;
	width: 100%;
	height: 100%;
}
.product-img-box{
	overflow: hidden;
	height: 0;
	padding-bottom: 37.07%;
}
.product-img{
	width: 100%;
}
.product-info{
	position: relative;
    padding: .14rem .2rem .2rem .2rem;
}
.product-name {
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
}
.product-desc {
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
}
</style>
