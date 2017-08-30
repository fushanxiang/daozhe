<template>
	<div class="top-container" v-bind:style='{opacity: this.activeOpacity}'>
		<router-link to="/weekendtour/index" class="back-icon iconfont">&#59031;</router-link>
		<h1 class="top-title">{{goodsInfo.title}}</h1>
	</div>
</template>

<script>
export default {
	data () {
    	return {
    		activeOpacity : 0
   		}
     
	},
	props : ["goodsInfo"],
	methods: {
		onScroll() {
			this.activeOpacity = window.scrollY / 100 > 1 ? 1 :  window.scrollY / 100;
		}
	},
	created() {
		window.addEventListener('scroll', this.onScroll);
		window.scrollTo(0,0);
	},
	beforeDestroy() {
		window.scrollTo(0,0);
	}

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
	.top-title {
		margin: 0 1rem;
		font-size: .32rem;
		line-height: .88rem;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>