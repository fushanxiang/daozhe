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
	data () {
		return {
			addressInfo: [{
				"id": "1",
				"link": "/detail",
				"name":"天津"
			},{
				"id": "2",
				"link": "/detail",
				"name":"葫芦岛"
			},{
				"id": "3",
				"link": "/detail",
				"name":"秦皇岛"
			},{
				"id": "4",
				"link": "/detail",
				"name":"济南"
			},{
				"id": "5",
				"link": "/detail",
				"name":"成都"
			},{
				"id": "6",
				"link": "/detail",
				"name":"三亚"
			},{
				"id": "7",
				"link": "/detail",
				"name":"丽江"
			},{
				"id": "8",
				"link": "/detail",
				"name":"西安"
			}]
    	}
	}	
}
</script>

<style scoped>
	.hot-city {
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
		font-size: .26rem;
		margin-right: .3rem;
	}
	.city-iconfont{
		color: #1cc3d9;
		font-size: .35rem;
		padding: 0 .1rem 0 .24rem;
	}
	.city-list{
		overflow: hidden;
		margin: .04rem .08rem;
	}
	.city-item {
		width: 25%;
		float: left;
		margin-bottom: .2rem;
	}
	.city-name {
		margin: 0 .1rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		font-size: .28rem;
		border-radius: .04rem;
		background: #f0fbfd;
		
	}
	
</style>
