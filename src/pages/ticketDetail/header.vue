<template>
	<div class="topbar">
		<a class="top-back iconfont" @click="handleBackClick">&#xe600;</a>
		<h1 class="top-title">【1元秒杀】北京蟒山公园国际奇幻森林灯光节门票</h1>
	</div>
</template>

<script>
	export default {
		methods:{
			handleBackClick:function(){
				window.history.back();
			}
		},
		mounted(){
			document.addEventListener('scroll', function(){	
				if(window.scrollY>=44){
					document.querySelector('.topbar').style.opacity = '1'
				}else{
					document.querySelector('.topbar').style.opacity = '0'
				}
			})
		}
	}

</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.topbar{
		position: fixed;
		height: .88rem;
		background: #00bcd4;
		z-index: 98;
		width: 100%;
		left: 0px;
		opacity: 0;
		transition: 1.3s;
	}
	.top-back{
		position: absolute;
		font-size: .36rem;
		color: #fff;
		text-align: center;
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
	}
	.top-title{
		font-family: "微软雅黑";
		margin: 0 1rem;
		line-height: .88rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
</style>
