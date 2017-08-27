<template>
	<div class="sites">
		<div class="sites-title">
			<h3 class="s-title"><span class="iconfont sites-iconfont">&#xe6ad;</span>必游景点推荐</h3>
		</div>
		<div class="sites-content">
	    	<ul class="sites-list">
	    		<li class="sites-item" v-for="item in imgsInfo" :key="item.id">
	    			<div class="sites-inner">
			    		<div class="img-content">
			    				<img class="sites-img" :src="item.imgUrl" />
			    		</div>
		    			<span class="img-title">{{item.title}}</span>
		    			<p class="sitea-route">有<span class="sites-path">{{item.num}}</span>条路线</p>
		    		</div>
	    		</li>
	    	</ul>
	    </div>	
	    <div class="all">
	    	北京全部一日游
	    </div>    
	</div>
</template>

<script>
export default {
	data () {
		return {
			imgsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1604/1b/1b6778deafaf208f90.img.jpg_195x140_0566a2f1.jpg",
				"link": "/detail",
				"title":"八达岭长城",
				"num": "63"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
				"link": "/detail",
				"title":"水立方",
				"num": "20"
			},{
				"id": "3",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/201306/13/bdf22f69fab0ee4ec8d65eac.jpg_195x140_fed88c5f.jpg",
				"link": "/detail",
				"title":"八达岭长城缆车",
				"num": "5"
			},{
				"id": "4",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_195x140_267be79a.jpg",
				"link": "/detail",
				"title":"故宫",
				"num": "35"
			},{
				"id": "5",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1707/2a/2a0adbeebf6d18bba3.water.jpg_195x140_9aa53c01.jpg",
				"link": "/detail",
				"title":"北京杜莎夫人蜡像馆",
				"num": "4"
			},{
				"id": "6",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_195x140_8eb43458.jpg",
				"link": "/detail",
				"title":"北京动物园",
				"num": "9"
			}]
    	}
	}	
}
</script>

<style scoped>
	.sites {
		margin: .2rem 0;
		background: #fff;
		padding-bottom: .2rem;
	}
	.sites-title {
		width: 100%;
		height: .84rem;
		text-align: left;
	}
	.s-title{
		line-height: .84rem;
		font-size: .32rem;
	}
	.sites-iconfont{
		color: #1cc3d9;
		font-size: .35rem;
		padding: 0 .1rem 0 .24rem;
	}
	.sites-content {
		padding: 0 .2rem;
		overflow: hidden;
	}
	.sites-list{
		overflow: hidden;
		margin-left: -.1rem;
	}
	.sites-item {
		width: 33.33%;
		float: left;
	}
	.sites-inner {
		margin-left: .1rem;
	}
	.img-content {
		background: #ccc;
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 71.78%;
	}
	.sites-img {
		width: 100%;
	}
	.img-title {
		display: block;
		overflow: hidden;
		height: .36rem;
		margin: 0 .04rem;
		font-size: .24rem;
		line-height: .36rem;
		text-align: center;
		color: #212121;
		padding-top: .16rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sitea-route {
		overflow: hidden;
		height: .36rem;
		margin: 0 .04rem;
		font-size: .24rem;
		line-height: .36rem;
		text-align: center;
		color: #9e9e9e;
		padding-bottom: .16rem;
	}
	.sites-path {
		color: #00afd1;
	}
	.all {
		width: 2.6rem;
		height: .64rem;
		line-height: .64rem;
		text-align: center;
		margin: .2rem auto .2rem auto;
		border: .02rem solid #bdbdbd;
		border-radius: .2rem;
	}
</style>
