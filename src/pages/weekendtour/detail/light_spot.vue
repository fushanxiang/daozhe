<template>
	<div class="highlight-box">
		<div class="highlight">
			<div class="highlight-content">
				<h3 class="title highlight-title"><span class="word">亮点先知道</span></h3>
				<div class="highlight-des">
					<h4 class="highlight-des-title">{{goodsInfo.lightSpot ? goodsInfo.lightSpot[0] : []}}</h4>
					<p class="highlight-des-content"><br>{{goodsInfo.lightSpot ? goodsInfo.lightSpot[1] : []}}<br>{{goodsInfo.lightSpot ? goodsInfo.lightSpot[2] : []}}</p>
				</div>
			</div>
			<router-link :to="'/weekendtour/detail_info/id=' + goodsInfo.id">
				<h3 class="title highlight-detail"><span class="word">详情介绍</span>
				<span class="next-icon iconfont">&#58918;</span></h3>
			</router-link>
			
		</div>
	</div>
</template>

<script>
export default {
	data () {
	    return {

	    } 
	},
	props : ["goodsInfo"]
}
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	.highlight-box{
		background: #f1f1f1;
		padding-top: .2rem;
	}
	.highlight{
	    padding: 0 .2rem;
	    background-color: #fff;
	}
	.highlight:before,.highlight:after{
		content:"";
		position: absolute;
		left: 0;
		width: 100%;
		height: .02rem;
		background: #c9cccd;
	}
	.title{
		overflow: hidden;
		position: relative;
		height: .88rem;
		font-size: .28rem;
		line-height: .88rem;
		text-indent: .15rem;
	}
	.word:before{
		content: " ";
		overflow: hidden;
		position: absolute;
		top: .32rem;
		left: 0;
		height: .25rem;
		width: .06rem;
		background: #1ba9ba;
		-webkit-border-radius: .04rem;
		-moz-border-radius: .04rem;
		border-radius: .04rem;
	}
	.word {
		color: #333;
	}
	.highlight-detail{
		border-top: .02rem dashed #efefef;
	}
	.next-icon {
		position: absolute;
		top: 0;
		right: 0;
		color: #9e9e9e;
	}
	.highlight-des-title{
		color: #212121;
	}
	.highlight-des-content{
	    padding-bottom: .15rem;
	    line-height: .48rem;
	    color: #616161;
	}
</style>