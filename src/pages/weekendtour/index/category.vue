<template>
	<div>
		<div class="category-container">
			<div class="category-item">
				<a href="javascript:;">
					<img src="http://img1.qunarzz.com/piao/fusion/1511/ac/cea9a29c2524c4f7.png" alt="周边度假" class="category-img">
					<p class="category-item-title">周边度假</p>
				</a>
			</div>
			<div class="category-item">
				<a href="javascript:;">
					<img src="http://img1.qunarzz.com/piao/fusion/1511/bd/49ec5e1d94c677f7.png" alt="城市好玩" class="category-img">
					<p class="category-item-title">城市好玩</p>
				</a>
			</div>
			<div class="category-item">
				<a href="javascript:;">
					<img src="http://img1.qunarzz.com/piao/fusion/1603/69/aafef9983dcd6ef7.png" alt="踏青赏花" class="category-img">
					<p class="category-item-title">踏青赏花</p>
				</a>
			</div>
			<div class="category-item">
				<a href="javascript:;">
					<img src="http://img1.qunarzz.com/piao/fusion/1603/88/3690c3682c3e8bf7.png" alt="周末活动" class="category-img">
					<p class="category-item-title">周末活动</p>
				</a>
			</div>
		</div>
		<div class="nearplace-container">
			<a class="nearplace-item" href="javascript:;">北京野生动物园</a>
			<a class="nearplace-item" href="javascript:;">慕田峪长城</a>
			<a class="nearplace-item" href="javascript:;">九华山庄</a>
			<a class="nearplace-item" href="javascript:;">北京园博园</a>
			<a class="nearplace-item" href="javascript:;">世界花卉大观园</a>
			<a class="nearplace-item" href="javascript:;">颐和园</a>
		</div>
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
	.category-container {
		width: 100%;
		overflow: hidden;
		background: #fff;
	}
	.category-item {
		width: 25%;
		float: left;
		text-align: center;
		padding: .4rem 0 .5rem 0;
	}
	.category-img {
		width: 56.25%;
		min-height: .9rem;
	}
	.category-item-title {
		margin-top: .16rem;
		color: #212121;
		font-size: .26rem;
	}
	.nearplace-container {
		background: #fff;
		position: relative;
		overflow: hidden;
		border-left: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	.nearplace-item {
		box-sizing: border-box;
		float: left;
		width: 33.33%;
		margin-bottom: -.02rem;
		padding: .02rem 0;
		color: #616161;
		font-size: .28rem;
		line-height: .8rem;
		text-align: center;
		border-top: 1px solid #ddd;
		border-right: 1px solid #ddd;
	}
	.nearplace-item:before {
		border: 5px solid red;
	}
</style>