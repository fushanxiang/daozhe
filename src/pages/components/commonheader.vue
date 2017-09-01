<template>
	<header class="commonheader">
		<span class="header-left iconfont">&#xe600;</span>
		<h1 class="summer-title">{{message}}</h1>
		<div class="header-right">
			<span class="icon_scenic iconfont">&#xe63e;</span>
			 <router-link to="/">
				<span class="home">首页</span>
			</router-link>
		</div>
	</header>	
</template>
<script>
export default {
	data () {
		return {}
	},
	props: ["message"]
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.commonheader{
		display:flex;
		justify-content:space-between;
		align-items:center;
		width:100%;
		height:0.88rem;
		background:#1ba9ba;
		color:#fff;
	}
	.header-left{
		display:inline-block;
		width:0.88rem;
		height:0.88rem;
		font-size:0.36rem;
		line-height:0.88rem;
		text-align:center;
		color:#fff;
	}
	.summer-title{
		width:5.5rem;
		height:0.88rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align:center;
		line-height:0.88rem;
	}
	.header-right{
		display:flex;
		flex-flow:column;
		align-items:center;
		width:0.88rem;
		height:0.88rem;
		color:#fff;
	}
	.icon_scenic{
		width:0.88rem;
		height:0.5rem;
		font-size:0.4rem;
		line-height:0.58rem;
		text-align:center;
	}
	.home{
		width:0.88rem;
		height:0.38rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size:0.24rem;
		text-align:center;
		line-height:0.38rem;
	}
</style>