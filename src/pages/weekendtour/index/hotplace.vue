<template>
	<div class="chosen">
		<h2 class="hot-top"><span class="hot-title">周末精选</span></h2>
		<ul class="hot-list">
			<li class="hot-item"><img src="http://img1.qunarzz.com/piao/fusion/1708/fe/8e9fb9b5f4ec402.jpg_640x200_7830ed65.jpg" class="hot-img"></li>
			<li class="hot-item"><img src="http://img1.qunarzz.com/piao/fusion/1708/e2/596aa2193fe1ae02.jpg_640x200_c63c7bb9.jpg" class="hot-img"></li>
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
	.chosen {
		background: #fff;
		margin-top: .2rem;
	}
	.chosen:before{
		content:"";
		position: absolute;
		left: 0;
		width: 100%;
		height: .02rem;
		background: #c9cccd;
	} 
	.chosen:after{
		content: "";
		width: 100%;
		height: .02rem;
		background: #c9cccd; 
		position: absolute;
		left: 0;
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
	.hot-title:before{
	    content: " ";
	    overflow: hidden;
	    position: absolute;
	    top: .32rem;
	    left: 0;
	    height: .25rem;
	    width: .06rem;
	    background: #1ba9ba;
	    border-radius: .04rem;
	}
	.hot-list{
		padding: 0 .2rem .11rem;
	}
	.hot-item{
		background: #eee;
		overflow: hidden;
		width: 100%;
		margin-bottom: .2rem;
	}
	.hot-img{
		width: 100%;
		min-height: 2rem;
	}

</style>
