<template>
	<div class="hot-city">
		<h3 class="city-title"><span class="iconfont city-iconfont">&#xe607;</span>热门城市 <span class="city-all">全部城市<span class="iconfont">&#xe626;</span></span></h3>
		<div class="city">
	    	<ul class="city-list">
	    		<li class="city-item" v-for="item in addressInfo" :key="item.id">
		    		<div class="city-name">{{item.name}}</div>
		    	</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: ["addressInfo"]	
}
</script>

<style scoped>
	.hot-city {
		position: relative;
		top: .88rem;
		background: #fff;
	}
	.city-title {
		width: 100%;
		height: .84rem;
		line-height: .84rem;
		text-align: left;
		font-size: .32rem;
	}
	.city-all {
		display: block;
		float: right;
		position: relative;
		font-size: .26rem;
		margin-right: .3rem;
	}
	.city-iconfont{
		padding: 0 .1rem 0 .24rem;
		color: #1cc3d9;
		font-size: .35rem;	
	}
	.city {
		overflow: hidden;
		padding: 0 .1rem;
	}
	.city-list{
		overflow: hidden;
		margin: .04rem .08rem;
	}
	.city-item {
		width: 25%;
		float: left;
		text-align: center;
		margin-bottom: .2rem;
	}
	.city-name {	
		height: .6rem;
		line-height: .6rem;
		margin: 0 .1rem;
		font-size: .28rem;
		border-radius: .04rem;
		color: #212121;
		background: #f0fbfd;
	}	
</style>