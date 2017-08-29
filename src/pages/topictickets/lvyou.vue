<template>
	<div>
		<ul class="listMain">
			<li v-for="item in lvyou">
				<p class="imgsUrl"><img :src="item.imgslist" alt="" width="90%" height="100%" /></p>
				<p class="itemsName">{{item.name}}</p>
				<p class="itemsPrice">
					<span>￥{{item.marketPrice}}</span>
					<span class="yuanjia">{{item.delayPayMinutes}}</span>
				</p>
				<p class="qianggoulist">
					<span class="qianggou">立即抢购</span>
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
		margin: 0 0 0 5%;
		overflow: hidden;
	}
	.imgsUrl{
		width:100%;
		height: 16.4vh;
		margin-top: 15px;
	}
	li{
		float: left;
		width: 50%;
	}
	.itemsName{
		background:#fff;
		font-size: 0.28rem;
		height: 5.6vh;
		margin: 0 10% 0 0;
		padding-top: 5%;
		padding-left: 10px;

	}
	.itemsPrice{
		font-size: 0.365rem;
		height: 5.9vh;
		background:#fff;
		margin: 0 10% 0 0;
	}
	.itemsPrice span:first-child{
		color: #f00;
		margin-left: 10px;
	}
	.yuanjia{
		text-decoration: line-through;
		line-height: 5.9vh;
		font-size: 12px;
	}
	.qianggoulist{
		height: 50px;
		background: #fff;
		margin: 0 10% 0 0;
	}
	.qianggou{
		display: block;
		margin-left:3%;
		line-height: 5.6vh;
		text-align: center;
		background: #fd3422;
		border-radius: .2rem;
		width: 85%;
		height: 5.6vh;
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
