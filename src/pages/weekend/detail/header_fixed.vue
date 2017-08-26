<template>
	<div class="top-container" v-bind:style='{opacity: this.activeOpacity}'>
		<router-link to="/weekend/index" class="back-icon iconfont">&#59031;</router-link>
		<h1 class="top-title">超值热卖 来自地下三千米的温暖【温都水城两馆周末成人票】</h1>
	</div>
</template>

<script>
export default {
	data () {
    	return {
    		activeOpacity : 0
   		}
     
	},
	methods: {
		onScroll() {
			this.activeOpacity = window.scrollY / 100;
		}
	},
	mounted() {
		window.addEventListener('scroll', this.onScroll);
	},
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
		font-size: .60rem;
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