<template>
	<div class="hotroutes">
		<div class="hotroutes-title border-bottom">
			<h3 class="title-title iconfont">&#xe621; 北京热门线路推荐 &#xe621;</h3>
			<p class="title-item iconfont"><span class="logo">&#xe663;</span>铁定成团</p>
			<p class="title-item title-item2 iconfont"><span class="logo">&#xe662;</span>无自费</p>
			<p class="title-item iconfont"><span class="logo">&#xe6d4;</span>无购物</p>
		</div>
		<ul class="hotroutes-list">
			<li class="hotroutes-item border-bottom" v-for="item in itemsInfo" :key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<span class="item-tomorrow">
					<span class="tommorrow">可订明日</span>
				</span>
				<p class="item-title">{{item.title}}</p>
				<p class="item-content">{{item.content}}</p>
				<div class="item-foot">
					<p class="item-from">{{item.from}}</p>
					<p class="item-price"><span class="price-yuan">&yen;</span>{{item.price}}<span class="price-font">起</span></p>
				</div>
			</li>
		</ul>
		<p class="item-all iconfont">查看全部一日游 &#xe626;</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			itemsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/p/tts0/1707/e3/d77d245a07ca4102.jpg_160x160_70811fa3.jpg",
				"title": "【爆款】北京八达岭长城+十三陵定陵含地宫鸟巢纯玩一日游",
				"content": "已售4227 | 4.8分",
				"price": "139",
				"from": "出发地：北京"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/p/tts2/1706/b9/68688c37bace6c02.jpg_160x160_6d2504b7.jpg",
				"title": "【爆款】北京八达岭长城+十三陵定陵含地宫鸟巢纯玩一日游",
				"content": "已售3116 | 4.7分",
				"price": "76",
				"from": "出发地：北京"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/p/tts4/1706/85/0520350c6a81c602.jpg_160x160_5cbc7f8e.jpg",
				"title": "【夏季游园-赠矿泉水】北京八达岭长城+颐和园+王府井1日游",
				"content": "已售1193 | 5.0分",
				"price": "116",
				"from": "出发地：北京"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/p/tts8/1707/7a/c6e435c7b0fa5802.jpg_160x160_2d359531.jpg",
				"title": "【赠杜莎门票】北京八达岭长城+十三陵定陵鸟巢，含地宫门票",
				"content": "已售1174 | 4.8分",
				"price": "179",
				"from": "出发地：北京"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/p/tts7/1707/e3/d77d245a07ca4102.jpg_160x160_7153c1e9.jpg",
				"title": "【12点整天天发】北京八达岭长城门票+往返直通车，送导游服务",
				"content": "已售313 | 4.9分",
				"price": "78",
				"from": "出发地：北京"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/p/tts3/1704/ce/7e52752773eb4802.jpg_160x160_e81099b1.jpg",
				"title": "【晚出发】北京古北水镇1-2日游，可选宿特色客栈",
				"content": "已售219 | 4.7分",
				"price": "238",
				"from": "出发地：北京"
			},{
				"id": "7",
				"imgUrl": "http://img1.qunarzz.com/p/tts8/1706/c7/2fabed9d487b0002.jpg_160x160_c18e2e32.jpg",
				"title": "【7-11点任选】八达岭长城门票+往返直通车*承诺不满意全退",
				"content": "已售5312 | 4.9分",
				"price": "78",
				"from": "出发地：北京"
			},{
				"id": "8",
				"imgUrl": "http://img1.qunarzz.com/p/tts3/1708/e0/9072ffc0ef322302.jpg_160x160_6299ed44.jpg",
				"title": "【9-12点天天发】八达岭长城+往返直通车+门票，自由可选！",
				"content": "已售3248 | 4.9分",
				"price": "39",
				"from": "出发地：北京"
			},{
				"id": "9",
				"imgUrl": "http://img1.qunarzz.com/p/tts2/1707/43/8250a273d1946502.jpg_160x160_001cce8d.jpg",
				"title": "[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游",
				"content": "已售906 | 4.9分",
				"price": "228",
				"from": "出发地：北京"
			},{
				"id": "10",
				"imgUrl": "http://img1.qunarzz.com/p/tts1/1611/34/ce613ef51240ad02.jpg_160x160_dc191e08.jpg",
				"title": "【5大景点】北京故宫+八达岭长城+鸟巢水立方一日游配无线讲解",
				"content": "已售2135 | 4.8分",
				"price": "158",
				"from": "出发地：北京"
			},{
				"id": "11",
				"imgUrl": "http://img1.qunarzz.com/p/tts9/1705/ee/145854a55426dd02.jpg_160x160_4b017e15.jpg",
				"title": "【10点晚出发，杜莎可选】北京八达岭长城+鸟巢水立方一日游",
				"content": "已售2045 | 4.9分",
				"price": "76",
				"from": "出发地：北京"
			},{
				"id": "12",
				"imgUrl": "http://img1.qunarzz.com/p/tts3/1706/fd/8b02524e750c9702.jpg_160x160_51fc06de.jpg",
				"title": "【赠听鹂馆茶歇】八达岭长城+颐和园+北大+王府井1日游",
				"content": "已售1019 | 4.9分",
				"price": "118",
				"from": "出发地：北京"
			},{
				"id": "13",
				"imgUrl": "http://img1.qunarzz.com/p/tts4/1703/29/3d3d29034018db02.jpg_160x160_a5c3c784.jpg",
				"title": "【赠杜莎】北京故宫+八达岭长城+鸟巢水立方一日游，无线讲解器",
				"content": "已售1358 | 4.7分",
				"price": "208",
				"from": "出发地：北京"
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
		font-size: .36rem;
		color: #212121;
		border-color: #f9f9f9;
	}
	.title-title {
		padding: .24rem 0;
	}
	.title-item {
		position: relative;
		display: inline-block;
		margin-bottom: .2rem;
		padding: .06rem .2rem;
		line-height: .34rem;
		border: 1px solid #e0e0e0;
		border-radius: .2rem;
		font-size: .24rem;
		color: #616161;
	}
	.logo{
		position: absolute;
		background: #fff;
		left: -.1rem;
		bottom: -.1rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.title-item2 {
		margin: 0 .28rem;
	}
	.hotroutes-item {
		padding: .14rem 0;
		margin-left: .14rem;
		height: 2rem;
	}
	.hotroutes-item::before {
		border-color: #e0e0e0;
	}
	.item-img {
		margin-right: .2rem;
		float: left;
		height: 2rem;
		width: 2rem;
	}
	.item-tomorrow {
	    position: absolute;
	    left: -.08rem;
	    top: .22rem;
	    height: .36rem;
	    line-height: .36rem;
	    padding: 0 .06rem 0 .1rem;
	    background: #00bcd4;
	    color: #fff;
	}
	.item-tomorrow::after {
	    content: "";
	    position: absolute;
	    top: 0;
	    right: -.18rem;
	    width: 0;
	    height: 0;
	    border-top: .18rem solid #00bcd4;
	    border-bottom: .18rem solid #00bcd4;
	    border-right: .18rem solid transparent;
	}
	.tomorrow {
	    display: block;
	    font-size: .24rem;
	}
	.item-title {
		overflow : hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
		line-height: .38rem;
		height: .76rem;
		margin-top: .04rem;
		font-size: .3rem;
		color: #212121;
	}
	.item-content {
	    margin-top: .08rem;
	    font-size: 0.26rem;
		color: #9e9e9e;
	}
	.item-foot {
		position: relative;
		margin-top: .5rem;
	}
	.item-from {
		font-size: .1rem;
		color: #212121;
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
