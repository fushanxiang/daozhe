<template>
	<div class="hotroutes">
		<div class="hotroutes-title border-bottom">
			<h3 class="title-title iconfont">&#xe621; 北京热门景点门票 &#xe621;</h3>
		</div>
		<ul class="hotroutes-list">
			<li class="hotroutes-item border-bottom" v-for="item in hotViewInfo" :key="item.id">
				<img class="item-img" v-lazy="item.imgUrl"/>
				<span class="item-tomorrow" v-if="item.book == true">
					<span class="tomorrow">可订明日</span>
				</span>
				<span class="item-today" v-else="item.book == false">
					<span class="today">可订今日</span>
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
	data() {
		return {}
	},
	props: ["hotViewInfo"]
}
</script>

<style scoped>
	@import '../../assets/css/common/border.css';
	.hotroutes {
		position: relative;
		top: .88rem;
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
	    background: #00bcd4;
	    color: #fff;
	}
	.item-tomorrow::after {
	    content: "";
	    width: 0;
	    height: 0;
	    position: absolute;
	    top: 0;
	    right: -.18rem; 
	    border-top: .18rem solid #00bcd4;
	    border-bottom: .18rem solid #00bcd4;
	    border-right: .18rem solid transparent;
	}
	.tomorrow {
	    display: block;
	    font-size: .24rem;
	}
	.item-today {
	    position: absolute;
	    left: -.08rem;
	    top: .22rem;
	    height: .36rem;
	    line-height: .36rem;
	    padding: 0 .06rem 0 .1rem;
	    background: #ff9800;
	    color: #fff;
	}
	.item-today::after {
	    content: "";
	    width: 0;
	    height: 0;
	    position: absolute;
	    top: 0;
	    right: -.18rem; 
	    border-top: .18rem solid #ff9800;
	    border-bottom: .18rem solid #ff9800;
	    border-right: .18rem solid transparent;
	}
	.today {
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
