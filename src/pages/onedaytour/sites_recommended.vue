<template>
	<div class="sites">
		<div class="sites-title">
			<h3 class="s-title"><span class="iconfont sites-iconfont">&#xe6ad;</span>必游景点推荐</h3>
		</div>
		<div class="sites-content">
	    	<ul class="sites-list">
	    		<li class="sites-item" v-for="item in sitesImgsInfo" :key="item.id">
	    			<div class="sites-inner">
			    		<div class="img-content">
			    				<img class="sites-img" v-lazy="item.imgUrl" />
			    		</div>
		    			<span class="img-title">{{item.title}}</span>
		    			<p class="sitea-route">有<span class="sites-path">{{item.num}}</span>条路线</p>
		    		</div>
	    		</li>
	    	</ul>
	    </div>	
	    <router-link :to="{name:'onedaylist'}">
		    <div class="all">
		    	北京全部一日游
		    </div>
	    </router-link>    
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: ["sitesImgsInfo"]	
}
</script>

<style scoped>
	.sites {
		position: relative;
		top: .88rem;
		margin: .2rem 0;
		padding-bottom: .2rem;
		background: #fff;	
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
		overflow: hidden;
		padding: 0 .2rem;
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
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 71.78%;
		background: #ccc;
	}
	.sites-img {
		width: 100%;
	}
	.img-title {
		display: block;
		overflow: hidden;
		height: .36rem;
		line-height: .36rem;
		text-align: center;
		margin: 0 .04rem;
		color: #212121;
		font-size: .24rem;
		padding-top: .16rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sitea-route {
		overflow: hidden;
		height: .36rem;		
		line-height: .36rem;
		text-align: center;
		margin: 0 .04rem;
		padding-bottom: .16rem;
		font-size: .24rem;
		color: #9e9e9e;	
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
		color: #212121;
	}
</style>