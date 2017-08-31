<template>
	<div class="pd-ticket-main">
		<div class="pd-ticket-group" v-for="item in qnrecommendinfo">
			<h3 class="pd-ticket-type">
				<span class="pd-ticketype-ticket"></span>
				去哪儿推荐
			</h3>
			<div class="pd-ticketype-ticket-item2 pd-border-top" >
				<div class="pd-ticket-main2">
					<div>
						<span class="pd-ticket-onedayitem">启程旅游</span>
						<h6 class="pd-ticket-title">{{item.ticketTitle}}</h6>
						<p>
							<span class="pd-ticket-desctag">
							<span class="iconfont pd-ticket-tagicon">&#xe64d;</span>18:00前可订今日</span>
							<span class="pd-ticket-desctag">
							<span class="iconfont pd-ticket-tagicon"> &#xe627;</span> 条件退</span>
						</p>
					</div>
				</div>
				<div class="pd-ticket-side" >
					<div>
						<p class="pd-ticket-sale">
							¥<em class="pd-price-num">{{item.priceNum}}</em>
						</p>
						<p class="pd-ticket-cost">
							票面价:¥<em>{{item.ticketCost}}</em>
						</p>
						<p class="pd-ticket-btn" style="background:#00bcd4;">下载APP</p>
					</div>
				</div>
			</div>
			<div class="pd-ticketype-ticket-item2 pd-border-top">
				<div class="pd-ticket-main2">
					<div>
						<span class="pd-ticket-onedayitem">启程旅游</span>
						<h6 class="pd-ticket-title">{{item.ticketTitle}}</h6>
						<p><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon">&#xe64d;</span>18:00前可订今日</span><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon"> &#xe627;</span> 条件退</span></p>
					</div>
				</div>
				<div class="pd-ticket-side" >
					<div>
						<p class="pd-ticket-sale">
							¥<em class="pd-price-num">{{item.priceNum}}</em>
						</p>
						<p class="pd-ticket-cost">
							票面价:¥<em>{{item.ticketCost}}</em>
						</p>
						<p class="pd-ticket-btn" @click="handleOrderClick" >预订</p>

					</div>
				</div>
			</div>
		</div>
		<div v-show="show">
			<order></order>
		</div>
	</div>
</template>

<script>
	import Order from './order.vue'
	export default {
	  	data () {
		    return {
		       show:false,		       
		    }
		  },
		props:["qnrecommendinfo"],	  
		   	components:{
		    	"order":Order
		    },
		    methods:{
		    	handleOrderClick:function() {
		  			this.$store.commit("changeIsPop");
		  		}
		    }
		}
</script>
<style scoped>
	.pd-border-top{
		border-top:1px solid #dadada;
	}
	.pd-ticket-main{
		background:#f4f4f4;
	}
  	.pd-ticket-type{
		overflow: hidden;
	    position: relative;
	    z-index: 4;
	    margin-bottom: -.02rem;
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .32rem;
	    line-height: .88rem;
	    text-indent: .4rem;
	}
	.pd-ticketype-ticket{
		display: inline-block;
	    position: absolute;
	    width: .36rem;
	    height: .36rem;
	    top: .26rem;
	    left: .2rem;
	    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
	    margin-right: .1rem;
	    background-size: .4rem 3rem;
	}
	.pd-ticketype-ticket-item2{
		padding:.25rem;
		position:relative;
		background:#f5f5f5;
		display: flex;
    	width: 100%;
    	background:#fff;
	}
	.pd-ticket-main2{
		display:flex;
		flex:2.92;
		align-item:center; 
	}
	.pd-ticket-onedayitem{
		display: inline-block;
	    overflow: hidden;
	    line-height: .34rem;
	    max-width: 2.5rem;
	    padding: 0 .2rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #666;
	}
	.pd-ticket-title{
		padding-top: 0;
		color: #888;
		font-size: .24rem;
		line-height: .36rem;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.pd-ticket-desctag{
		display: inline-block;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .32rem;
	    white-space: nowrap;
	    margin-right:.25rem;
	}
	.pd-ticket-tagicon{
		display: inline-block;
		margin-right: .08rem;
		color: #1ba9ba;
		font-size: .2rem;
	}
	.pd-ticket-side{
		display:flex;
		flex:1;
		border-left:1px solid #dadada;
		padding-left: .2rem;
		align-item:center;
	}
	.pd-ticket-sale{
		color: #ff9800;
		height: .32rem;
		display: block;
	    font-size: .24rem;
	    line-height: .28rem;
	    text-align: center;
	}
	.pd-price-num{
		margin-left: .04rem;
	    font: .24rem Tahoma,Helvetica,sans-serif;
	    line-height: .3rem;
	}
	.pd-ticket-cost{
		width: 150%;
	    margin: 1px -25%;
	    color: #9e9e9e;
	    text-decoration: line-through;
	    transform: scale(.8);
		display: block;
	    overflow: hidden;
	    height: .28rem;
	    line-height: .28rem;
	    text-align: center;
	    font-size:.18rem;
	}
	.pd-ticket-btn{
		height: .6rem;
	    background: #ff9800;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .6rem;
	   	text-align:center;
	    border-radius: .06rem;
	}
	
	.slide-fade-enter-active {
  		transition: all .8s cubic-bezier((0,0), (0,1), (1,0),(1,1));
	}
	.slide-fade-enter{
 	 	transform: translateY(10rem);
  		opacity: 0;
	}                                                                           
</style>

