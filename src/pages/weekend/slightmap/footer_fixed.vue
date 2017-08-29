<template>
	<div class="box">
		<div class="container">
			<div class="top">
				<span class="name">{{goodsInfo.title}}</span>
				<span class="jd">景点</span>
			</div>
			<div class="bot">
				<span class="icon">&yen;</span>
				<span class="price">{{goodsInfo.sellPrice}}</span>
				<span class="yq">元起</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
    	return {}
     
	},
	props:["goodsInfo"]

}
</script>

<style scoped>
	.box{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		overflow: hidden;
		box-shadow: 0 0 0.1rem #aaa;
	}
	.container{
	    line-height: 1;
	    max-height: 1.5rem;
		padding:.2rem;
		background: #fff;
		border-radius: .06rem;
	    color: #212121;
	    font-size: .28em;
	}
	.top{
	    display: inline-block;
	    padding: .06rem 0;
	    line-height: .32rem;
	}
	.bot{
	    font-size: .28rem;
    	line-height: .4rem;
	}
	.name{
		font-weight: bold;
  	  	font-size: .32rem;
	}
	.jd{
	    margin-left: .1rem;
	    padding: .02rem .1rem;
	    background: #00bcd4;
	    color: #fff;
	    font-size: .24rem;
	}
</style>