<template>
	<div>
		<ul class="listMain">
			<li v-for="item in imgsInfo">
				<p class="imgsUrl"><img :src="item.sightImgUrl" alt="" width="90%" height="100%"></p>
				<p class="itemsName">{{item.productName}}</p>
				<p class="itemsPrice">
					<span>￥{{item.qunarPrice}}</span>
					<span class="yuanjia">票面价{{item.marketPrice}}</span>
				</p>
				<p class="qianggoulist">
					<span class="qianggou">立即抢购</span>
				</p>
			</li>
		</ul>
	
	</div>
</template>
<script>
export default {
	data () {
		return {		
		}
	},
	props:["imgsInfo"]
}
</script>
<style scoped>
	body,html{
		font-family: 微软雅黑；
	}
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

	}
	.itemsPrice{
		font-size: 20px;
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
	.listMain li:nth-child(7){
		position: relative;
		width: 95%;
		margin-top:5%;
		height: 33vh;
	}
	
	.listMain li:nth-child(7) img{
		position: relative;
		width: 100%;
		height: 25vh;
	}
	.listMain li:nth-child(7) p{
		position: absolute;
	}
	.listMain li:nth-child(7) .itemsName{
		font-size: .32rem;
		background: 0;
		width: 100%;
		color: #fff;
		bottom: 7.5vh;
		left: 0;
	}
	.listMain li:nth-child(7) .itemsPrice{
		bottom: 2.1vh;
		left: 0;
	}
	.listMain li:nth-child(7) .qianggoulist{
		width: 69.5%;
		height:5.9vh ;
		bottom: 2.1vh;
		left: 30.5%;
	}
	.listMain li:nth-child(7) .qianggou{
		position: absolute;
		width: 40%;
		height: 5vh;
		right: 4vw;
		line-height: 5vh;
		top: 0.4vh;
	}
	


	.listMain li:nth-child(8){
		position: relative;
		width: 95%;
		margin-top:5%;
		height: 33vh;
	}
	
	.listMain li:nth-child(8) img{
		position: relative;
		width: 100%;
		height: 25vh;
	}
	.listMain li:nth-child(8) p{
		position: absolute;
	}
	.listMain li:nth-child(8) .itemsName{
		font-size: .32rem;
		background: 0;
		width: 100%;
		color: #fff;
		bottom: 7.5vh;
		left: 0;
	}
	.listMain li:nth-child(8) .itemsPrice{
		bottom: 2.1vh;
		left: 0;
	}
	.listMain li:nth-child(8) .qianggoulist{
		width: 75.3%;
		height:5.9vh ;
		bottom: 2.1vh;
		left: 24.7%;
	}
	.listMain li:nth-child(8) .qianggou{
		position: absolute;
		width: 40%;
		height: 5vh;
		right: 4vw;
		line-height: 5vh;
		top: 0.4vh;
	}
</style>
