<template>
	<div>
		<div id="sumselect-img" class="sumselect-play">
			<img class="toggle-img" src="//s.qunarzz.com/piao_topic/image/touch/custom/2016/1772travel10/170710/caption2.jpg">
		</div>
		<div id="toggle" class="toggle">

			<ul class="toggle-list">
				<li class="toggle-item one">玩发达啊法分类</li>
				<li class="toggle-item two">冲浪漂流</li>
				<li class="toggle-item">玩法分类</li>
				<li class="toggle-item">玩法分类</li>
				<li class="toggle-item">玩法</li>
			</ul>
			<ul class="toggle-list">
				<li class="toggle-item one">玩法分类</li>
				<li class="toggle-item two">冲浪漂流</li>
				<li class="toggle-item">玩法分类</li>
				<li class="toggle-item">玩法分类</li>
				<li class="toggle-item">玩法</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
	.toggle{
		position: relative;
		overflow: hidden;
		padding-bottom:.2rem;
		padding-right: .2rem;
		background-color: #23a4e5;
		box-shadow: 0 0 0.2rem #000;
		padding:.2rem;
		padding-top:0;
	}
	.sumselect-play{
	overflow: hidden;
    min-height: .88rem;
	}
	.sumselect-play .toggle-img{
    width: 100%;
    vertical-align: top;
}
	.toggle-fixed{
		z-index: 10;
		padding-top:.2rem;
		padding-bottom:.2rem;
		padding-right: .2rem;
		background-color: #23a4e5;
		box-shadow: 0 0 0.2rem #000;
		padding:.2rem;
		position: fixed;
		top:0;
	}
	.toggle-list{
	   float: left;
       background: #0b68e6;
       width: 96%;
       padding:.13rem;
       border-radius: 0 .7rem .7rem 0;
	}
	.toggle-item{
		float: left;
		width: 20%;
		line-height: .44rem;
		color: #fff;
	    font-size: .2rem;
	    text-align: center;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.one{
		background: #4f9aff;
		color: #fff;
		font-style: italic;
		font-size: .26rem;
		text-align: center;
		border-radius: 0 .44rem .44rem 0; 
	}
	.two{
		color: #ffe800;
		font-size: .26rem;
	    line-height: .44rem;
	}

</style>