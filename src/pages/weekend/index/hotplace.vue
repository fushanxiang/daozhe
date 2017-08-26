<template>
	<div class="chosen">
		<h2 class="hot-top"><span class="hot-title">周末精选</span></h2>
		<ul class="hot-list">
			<li class="hot-item"><img src="../../../assets/images/item1.jpg" class="hot-img"></li>
			<li class="hot-item"><img src="../../../assets/images/item2.jpg" class="hot-img"></li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
    	return {

    	}
	}
}
</script>

<style scoped>
	.chosen{
		margin-top: .2rem;
	}
	.hot-top{
		overflow: hidden;
		position: relative;
		height: .88rem;
		margin-left: .2rem;
		font-size: .28rem;
		line-height: .88rem;
		text-indent: .15rem
	}
	.hot-top:before{
		width: 100%;
		height: .02rem;
		background: #c9cccd;
	}
	.hot-title:before{
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
	.hot-list{
		padding: 0 .2rem .11rem;
	}
	.hot-item{
		background: #eee;
		overflow: hidden;
		width: 300px;
		padding-bottom: 33.3%;
		height: 0;
		margin-bottom: .2rem;
	}
	.hot-img{
		width: 300px;
		height: 100px;
	}

</style>
