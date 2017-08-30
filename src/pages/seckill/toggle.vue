<template>
	<div>
		<transition name='fade'>
			<ul class="toggle" v-if='show'>
				<li class="toggle-item">1元秒</li>
				<li class="toggle-item">热门TOP</li>
				<li class="toggle-item">玩水</li>
				<li class="toggle-item">一日游</li>
			</ul>
		</transition>
		<div id="page"></div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			show:true
    	}
	}
}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to{
	  opacity: 0
	}
	.toggle{
		width:100%;
		height: .8rem;
		position: fixed;
		top: 0;
		left: 0;
	}
	.toggle-item{
		width: 25%;
		float: left;
		line-height: .8rem;
		text-align: center;
		color: #fff;
		font-weight: bold;
		background: #af16ff;
	}
	#page{
		height: 10rem;
	}
</style>