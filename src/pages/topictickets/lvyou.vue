<template>
	<div>
		<ul class="listMain">
			<li class="liAggregate" v-for="item in lvyou">
				<p class="imgsUrl"><img :src="item.imgslist" alt="" width="90%" height="100%" /></p>
				<p class="itemsName">{{item.name}}</p>
				<p class="itemsPrice">
					<span>￥{{item.marketPrice}}</span>
					<span class="originalprice">{{item.delayPayMinutes}}</span>
				</p>
				<p class="panicbuying">
					<span class="purchase">立即抢购</span>
				</p>
			</li>
		</ul>
		<div class="listmore">更多门票玩乐产品</div>
	</div>
</template>
<script>
export default {
	data () {
		return {		
		}
	},
	props:["lvyou"]
}
</script>
<style scoped>
	.listMain{
		margin: 0 0 0 2%;
		overflow: hidden;
	}
	.imgsUrl{
		margin-top: .2rem;
		width:100%;
	}
	.liAggregate{
		float: left;
		width: 50%;
	}
	.itemsName{
		margin: 0 5.5% 0 0;
		padding: 5% 3% 0;
		background:#fff;
		font-size: 0.28rem;
		height: 5.6vh;
		width: 84%;
	}
	.itemsPrice{
		margin: 0 5.5% 0 0;
		font-size: 20px;
		height: 5.9vh;
		width: 90%;
		background:#fff;	
	}
	.itemsPrice span:first-child{
		margin-left: 10px;
		line-height: 8vh;
		color: #f95d4e;
	}
	.originalprice{
		text-decoration: line-through;
		line-height: 5.9vh;
		font-size: 12px;
		color: #999999;
	}
	.panicbuying{
		margin: 0 5.5% 0 0;
		width: 90%;
		height: .65rem;
		background: #fff;
		
	}
	 .purchase{
	 	display: block;
		margin-left:2.5%;
		font-size: .3rem;
		line-height: 4.7vh;
		text-align: center;
		background: #fd3422;
		border-radius: .2rem;
		width: 95%;
		height: .6rem;
		color: #fff;
	} 
	.listmore{
		border-radius: 10px;
		text-align: center;
		line-height: .592rem;
		width: 90%;
		height: .592rem;
		background:rgb(255, 125, 82);
		margin: 10px auto;
		margin-bottom: 60px;
	}
</style>
