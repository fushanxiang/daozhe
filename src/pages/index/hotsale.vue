<template>
	<div>
		<h3 class="hotsale-title">热销推荐</h3>
		<ul class="hotsale-list">
			<li class="hotsale-item border-bottom" v-for="item in itemsInfo" :key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<p class="item-title">{{item.title}}</p>
				<p class="item-content">{{item.content}}</p>
				<p class="item-price"><span class="price-yuan">&yen;</span>{{item.price}}<span class="price-font">起</span></p>
			</li>
		</ul>
		<p class="item-all">查看所有产品</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			itemsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"title": "故宫",
				"content": "东方宫殿建筑代表，世界宫殿建筑典范",
				"price": "20"
			},{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
				"title": "颐和园",
				"content": "保存完整的一座皇家行宫御苑",
				"price": "65"
			},{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1604/1b/1b6778deafaf208f90.img.jpg_140x140_75f5d504.jpg",
				"title": "八达岭长城",
				"content": "不到长城非好汉",
				"price": "39.9"
			},{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
				"title": "北京欢乐谷",
				"content": "七大主题园区带你畅享北京欢乐谷",
				"price": "29.5"
			},{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/201306/13/bdf22f69fab0ee4ec8d65eac.jpg_140x140_355f4fb6.jpg",
				"title": "八达岭长城缆车",
				"content": "巍峨雄伟尽收眼底",
				"price": "155"
			}]
    	}
	}
}
</script>

<style scoped>
	@import '../../assets/css/common/border.css';
	.hotsale-title {
		background: #f5f5f5;
		padding-left: .28rem;
		line-height: .8rem;
		font-size: .28rem;
		color: #212121;
	}
	.hotsale-item {
		padding: .24rem .36rem .24rem .24rem;
		height: 1.4rem;
	}
	.hotsale-item::before {
		border-color: #e0e0e0;
	}
	.item-img {
		margin-right: .2rem;
		float: left;
		height: 1.4rem;
		width: 1.4rem;
	}
	.item-title {
		margin-top: .04rem;
		font-size: .3rem;
		color: #212121;
	}
	.item-content {
		overflow: hidden;
		margin: .16rem 0 .2rem 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .28rem;
		color: #9e9e9e;
	}
	.item-price {
		font-size: .36rem;
		color: #ff8300;
	}
	.price-yuan {
		margin-right: .04rem;
		font-size: .26rem;
	}
	.price-font {
		margin-left: .04rem;
		font-size: .24rem;
		color: #9e9e9e;
	}
	.item-all {
		line-height: .86rem;
		text-align: center;
		font-size: .28rem;
		color: #00b7d7;
	}
</style>
