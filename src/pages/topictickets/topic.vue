<template>
	<div>
		<div class="topic">
			
			<ul>
				<li class="itemsList" v-for="item in itemshotcity" v-on:click="handleClick($event)">{{item.text}}</li>
				<li class="itemsList iconfont">&#xe62d;</li>
			</ul>
			<a href="#">
				<img class="lmgtop" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/caption_1.jpg" alt="" width="100%">
			</a>
		</div>
		<ul class="listMain">
			<li class="liAggregate" v-for="item in imgsInfo['beijing']">
				<router-link :to="{name:'ticketDetail',params:{id:item.priceId}}">
					<p class="imgsUrl"><img :src="item.sightImgUrl" alt="" width="95%" height="100%"></p>
					<p  class="itemsName">{{item.productName}}</p>
					<p class="itemsPrice">
						<span>￥{{item.qunarPrice}}</span>
						<span class="originalprice">票面价{{item.marketPrice}}</span>
					</p>
					<p class="panicbuying">
						<span class="purchase">立即抢购</span>
					</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data () {
		return {}
	},
    methods:{
    	handleClick:function(event){
            var itemsli = event.target;
            var itemsvalue = itemsli.innerText;
            //触发事件父组件修改
          if( itemsvalue == "北京"){
            	this.imgsInfo['beijing'] = null
            }else if( itemsvalue == "天津"){
            	this.imgsInfo['beijing'] = this.imgsInfo['tianjin']
            }else if( itemsvalue == "保定"){
            	this.imgsInfo['beijing'] = this.imgsInfo['baoding'] 	
            }else if( itemsvalue == "承德"){
            	this.imgsInfo['beijing'] = this.imgsInfo['chengde']	
            } 
    	},

    },
	props:["itemshotcity","imgsInfo"]
}
</script>
<style scoped>
	.topic{position:relative}
	.topic img{height:35.625%;width:100%;}
	.itemsList{
		line-height: 5.93vh;
		text-align: center;
		color: #fff;
		font-size: 0.28rem;
		background: #fd551e;
		float:left;
		width:20%;
		height: 5.93vh;
	}
	.listMain{
		margin: 0 0 0 2%;
		overflow: hidden;
	}
	.imgsUrl{
		margin-top: 15px;
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
		color: #666;
	}
	.itemsPrice{
		font-size: 20px;
		margin: 0 5.5% 0 0;
		height: 5.9vh;
		background:#fff;
		width: 94.5%;
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
	.listMain li:nth-last-child(2){
		position: relative;
		margin-top:5%;
		width: 95%;
		height: 33vh;
	}
	
	.listMain li:nth-last-child(2) img{
		position: relative;
		width: 100%;
		height: 25vh;
	}
	.listMain li:nth-last-child(2) p{
		position: absolute;
	}
	.listMain li:nth-last-child(2) .itemsName{
		font-size: .32rem;
		margin: 0 0 0 -2%;
		bottom: 8vh;
		left: 0;
		width: 99%;
		text-align: center;
		color: #fff;
		background: 0;
		
	}
	.listMain li:nth-last-child(2) .itemsPrice{
		bottom: 2.1vh;
		left: 0;
	}
	.listMain li:nth-last-child(2) .panicbuying{
		width: 41%;
		height:5.9vh ;
		bottom: 2.1vh;
		left: 59%;
	}
	.listMain li:nth-last-child(2) .purchase{
		position: absolute;
		line-height: 5vh;
		right: 4vw;
		top: 0.4vh;
		width: 60%;
		height: 5vh;
	}
	
	.listMain li:last-child{
		position: relative;
		width: 95%;
		height: 33vh;
	}
	.listMain li:last-child img{
		position: relative;
		width: 100%;
		height: 25vh;
	}
	.listMain li:last-child p{
		position: absolute;
	}
	.listMain li:last-child .itemsName{
		font-size: .32rem;
		margin: 0 0 0 -2%;
		text-align: center;
		bottom: 8vh;
		left: 0;
		width: 99%;
		color: #fff;
		background: 0;
	}
	.listMain li:last-child .itemsPrice{
		bottom: 2.1vh;
		left: 0;
	}
	.listMain li:last-child .panicbuying{
		bottom: 2.1vh;
		left: 59%;
		width: 41%;
		height:5.9vh ;
	}
	.listMain li:last-child .purchase{
		position: absolute;
		line-height: 5vh;
		right: 4vw;
		top: 0.4vh;
		width: 60%;
		height: 5vh;	
	}
</style>
