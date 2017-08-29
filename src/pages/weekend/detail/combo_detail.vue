<template>
	<div class="packages-box">
		<div class="packages">
			<div class="packages-content">
				<h3 class="title packages-title"><span class="word">套餐包括</span></h3>
				<div class="packages-des">
			        <p class="packages-des-content" v-html="goodsInfo.combo"></p>
			    </div>
			</div>
			
			<h3 class="title purchase-notes"><span class="word">购买须知</span><span class="next-icon iconfont">&#58918;</span></h3>
			<h3 class="title fun-around"><span class="word">周边好玩</span><span class="next-icon iconfont">&#58918;</span></h3>
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
	.packages-box{
		padding-top: .2rem;
		background: #f1f1f1;
	}
	.packages{
	    padding: 0 .2rem;
	    background-color: #fff;
	}
	.packages:before,.packages:after{
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
	.purchase-notes,.fun-around{
		border-top: .02rem dashed #efefef;
	}
	.next-icon {
		position: absolute;
		top: 0;
		right: 0;
		color: #9e9e9e;
	}
	.packages{
		padding: 0 .2rem;
	}
	.packages-des-content{
	    padding-bottom: .15rem;
	    line-height: .48rem;
	    color: #616161;
	}
</style>