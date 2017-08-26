<template>
	<div class="img-container">
		<router-link to="/weekend/index" class="back-btn iconfont">&#59031;</router-link>
		<img src="../../../assets/images/item3.jpg" class="header-img" />
		<div class="show-images">
			<span class="pic-icon iconfont">&#59180;</span>
			<span>1</span>
			<span>/</span>
			<span>11</span>
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
	@import "../../../assets/font/iconfont.css";
	.img-container {
		position: relative;
	}
	.back-btn {
		position: absolute;
		top: .1rem;
		left: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		color: #fff;
		font-size: .60rem;
		text-align: center;
		font-weight: 900;
	}
	.header-img {
		width: 100%;
	}
	.show-images {
		position: absolute;
		right: .2rem;
		bottom: .3rem;
		min-width: 1rem;
		padding: 0 .15rem;
		line-height: .4rem;
		background: rgba(0,0,0,.3);
		color: #fff;
		border-radius: .3rem;
		font-size: .24rem;
		text-align: center;
	}
</style>