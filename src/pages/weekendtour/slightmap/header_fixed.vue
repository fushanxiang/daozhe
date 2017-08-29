<template>
	<div class="top-container">
		<router-link :to="'/weekendtour/detail/id='+goodsInfo.id" class="back-icon iconfont">&#59031;</router-link>
		<div class="box">
			<h1 class="top-title">景点地图</h1>
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
	.top-container {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		background: #00bcd4;
		height: .88rem;
		color: #fff;
	}
	.back-icon {
		position: absolute;
		left: .1rem;
		top: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		color: #fff;
		font-size: .5rem;
		font-weight: bold;
	}
	.box{
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.top-title {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0 1rem;
		font-size: .32rem;
		line-height: .88rem
	}
</style>