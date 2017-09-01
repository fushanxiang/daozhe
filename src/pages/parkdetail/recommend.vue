<template>
	<div class="recommend">
		<h3 class="recommend-title border-bottom">看了该景点的人还看了</h3>
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
	.recommend{
		position: relative;
	}
	.recommend-title {
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}
	.recommend-title::after {
	    content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    border-radius: .04rem;
	}
</style>