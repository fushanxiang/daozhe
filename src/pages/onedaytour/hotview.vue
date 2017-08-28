<template>
	<div class="hotroutes">
		<div class="hotroutes-title border-bottom">
			<h3 class="title-title iconfont">&#xe621; 北京热门景点门票 &#xe621;</h3>
		</div>
		<ul class="hotroutes-list">
			<li class="hotroutes-item border-bottom" v-for="item in itemsInfo" :key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<span class="item-tomorrow">
					<span class="tommorrow">可订明日</span>
				</span>
				<p class="item-title">{{item.title}}</p>
				<p class="item-content iconfont"><span class="xingxing">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</span>{{item.content}}</p>
				<div class="item-foot"> 
					<p class="item-from">{{item.from}}</p>
					<p class="item-price"><span class="price-yuan">&yen;</span>{{item.price}}<span class="price-font">起</span></p>
				</div>
			</li>
		</ul>
		<p class="item-all iconfont">查看全部景点 &#xe626;</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			itemsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/p/tts0/1707/e3/d77d245a07ca4102.jpg_160x160_70811fa3.jpg",
				"title": "故宫门票",
				"content": "83010评论",
				"price": "20",
				"from": "北京东城区"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/p/tts2/1706/b9/68688c37bace6c02.jpg_160x160_6d2504b7.jpg",
				"title": "颐和园门票",
				"content": "13750评论",
				"price": "65",
				"from": "北京海淀区"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/p/tts4/1706/85/0520350c6a81c602.jpg_160x160_5cbc7f8e.jpg",
				"title": "八达岭长城门票",
				"content": "11330评论",
				"price": "39.7",
				"from": "北京延庆县"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/p/tts8/1707/7a/c6e435c7b0fa5802.jpg_160x160_2d359531.jpg",
				"title": "北京欢乐谷门票",
				"content": "41319评论",
				"price": "29.5",
				"from": "北京朝阳区"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/p/tts7/1707/e3/d77d245a07ca4102.jpg_160x160_7153c1e9.jpg",
				"title": "八达岭长城缆车门票",
				"content": "20933评论",
				"price": "158",
				"from": "北京八达岭长城"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/p/tts3/1704/ce/7e52752773eb4802.jpg_160x160_e81099b1.jpg",
				"title": "水立方门票",
				"content": "1348评论",
				"price": "14.5",
				"from": "北京奥林匹克公园"
			},{
				"id": "7",
				"imgUrl": "http://img1.qunarzz.com/p/tts8/1706/c7/2fabed9d487b0002.jpg_160x160_c18e2e32.jpg",
				"title": "北京杜莎夫人蜡像馆门票",
				"content": "4168评论",
				"price": "76",
				"from": "北京前门大街"
			},{
				"id": "8",
				"imgUrl": "http://img1.qunarzz.com/p/tts3/1708/e0/9072ffc0ef322302.jpg_160x160_6299ed44.jpg",
				"title": "恭王府门票",
				"content": "6080评论",
				"price": "1",
				"from": "北京西城区"
			},{
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/p/tts2/1707/43/8250a273d1946502.jpg_160x160_001cce8d.jpg",
				"title": "慕田峪长城门票",
				"content": "5089评论",
				"price": "38.4",
				"from": "北京怀柔区"
			},{
				"id": "10",
				"imgUrl": "http://img1.qunarzz.com/p/tts1/1611/34/ce613ef51240ad02.jpg_160x160_dc191e08.jpg",
				"title": "圆明园门票",
				"content": "8777评论",
				"price": "1.3",
				"from": "北京海淀区"
			}]
    	}
	}
}
</script>

<style scoped>
	@import '../../assets/css/common/border.css';
	.hotroutes {
		background: #fff;
		margin-top: .2rem;
	}
	.hotroutes-title {
		text-align: center;
		border-color: #f9f9f9;
		font-size: .36rem;
		color: #212121;	
	}
	.title-title {
		padding: .24rem 0;
	}
	.hotroutes-item {
		height: 2rem;
		padding: .14rem 0;
		margin-left: .14rem;	
	}
	.hotroutes-item::before {
		border-color: #e0e0e0;
	}
	.item-img {
		height: 2rem;
		width: 2rem;
		float: left;
		margin-right: .2rem;
	}
	.item-tomorrow {
	    position: absolute;
	    left: -.08rem;
	    top: .22rem;
	    height: .36rem;
	    line-height: .36rem;
	    padding: 0 .06rem 0 .1rem;
	    background: #ff9800;
	    color: #fff;
	}
	.item-tomorrow::after {
	    content: "";
	    position: absolute;
	    top: 0;
	    right: -.18rem;
	    width: 0;
	    height: 0;
	    border-top: .18rem solid #ff9800;
	    border-bottom: .18rem solid #ff9800;
	    border-right: .18rem solid transparent;
	}
	.tomorrow {
	    display: block;
	    font-size: .24rem;
	}
	.item-title {
		line-height: .38rem;
		height: .76rem;
		margin-top: .04rem;
		font-size: .3rem;
		color: #212121;
	}
	.item-content {
	    margin-top: .4rem;
	    font-size: 0.26rem;
		color: #9e9e9e;
	}
	.xingxing{
		color: #00bcd4;
		margin-right: .1rem;
	}
	.item-foot {
		position: relative;
		margin-top: .2rem;
	}
	.item-from {
		font-size: .1rem;
		color: #9e9e9e;
	}
	.item-price{
		position: absolute;
		bottom: 0;
		right: .2rem;
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
		line-height: .9rem;
		text-align: center;
		font-size: .3rem;
		color: #616161;
	}
</style>
