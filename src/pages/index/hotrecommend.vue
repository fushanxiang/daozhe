<template>

	<div class="recommend">
		<h2 class="hot">热门推荐</h2>

		<div class="hotlist">
			<ul>
				<li class="recommendlist" v-for="item in recommendInfo" :key="item.id">
					<div class="imghot">
						<img class="hot-img" :src="item.imagesUrl">
					</div>
					<div class="texthot">
							<h3 class="texthot-title">{{item.title}}</h3>
							<span class="text">{{item.text}}</span>
							<div class="hotprice">&yen;<em class="price-hot">{{item.pricehot}}</em><span class="text-price">起</span></div>
					</div>
				</li>
			</ul>
		</div>
			<p class="all-product">查看所有产品</p>
	</div>
</template>

<script>


export default {
	data () {
		return {
			recommendInfo: [{
				"id": "1",
				"imagesUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"link": "./detail",
				"title": "故宫",
				"text": "东方宫殿建筑代表，世界宫殿建筑典范",
				"pricehot": "20"
		},{
				"id": "1",
				"imagesUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"link": "./detail",
				"title": "故宫",
				"text": "东方宫殿建筑代表，世界宫殿建筑典范",
				"pricehot": "20"
		},{
				"id": "1",
				"imagesUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"link": "./detail",
				"title": "故宫",
				"text": "东方宫殿建筑代表，世界宫殿建筑典范",
				"pricehot": "20"
		},{
				"id": "1",
				"imagesUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"link": "./detail",
				"title": "故宫",
				"text": "东方宫殿建筑代表，世界宫殿建筑典范",
				"pricehot": "20"
		},{
				"id": "1",
				"imagesUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"link": "./detail",
				"title": "故宫",
				"text": "东方宫殿建筑代表，世界宫殿建筑典范",
				"pricehot": "20"
		}]
			}
			
    	}
	}
	

</script>

<style scoped>
	.recommend {
		width:100%;
	}
	.hot {
		height:0.8rem;
		padding-left: 0.26rem;
		line-height:0.8rem;
		color:#212121;
	}
	.hotlist {
		width:7.5rem;
		background:#fff;
	}
	.recommendlist {
		display:flex;
		justify-content: space-between;
		height:1.4rem;
		padding:0.24rem;
	}
	.hot-img {
		width:1.4rem;
		height:1.4rem;
	}
	.texthot{
		width:5.42rem;
	}
	.texthot-title {
		height:0.3rem;
		margin-top:0.04rem;
		margin-bottom:0.1rem;
		font-size:0.3rem;
		font-weight: bold;
		color:#212121;
	}
	.text {
		display:block;
		height:0.4rem;
		margin-bottom:0.1rem;
		line-height:0.4rem;
		color:#9e9e9e;
	}
	.hotprice {
		height:0.44rem;
		line-height:0.44rem;
		color:#ff8300;
		font-size:0.24rem;

	}
	.price-hot {
		font-size:0.36rem;
		padding:0.04rem;
	}
	.text-price {
		color:#9e9e9e;
		font-size:0.24rem;
	}
	.all-product{
		background: #fff;
		color:#00afc7;
		border-top: 1px solid #f5f5f5;
		line-height: .88rem;
		text-align: center;
	}


	
</style>
