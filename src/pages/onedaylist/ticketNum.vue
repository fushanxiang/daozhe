<template>
	<div>
		<div class="ticketnum" ref="ticketnum" >
			<iscroll-view class="scroll-view" :options="{preventDefault: false}" @scrollStart="log" @pullUp="load" @pullDown="refresh">
				<ul class="ticket-list" id="ticket-list" >
					<router-link :to="{name:'order'}">
						<li class="ticket-list-item" v-for="(news, index) in newslist" :key="index">
							<div class="ticket-list-img">
		  						<img class="ticket-list-img-left" :src="news.ticketImg" />
		  						<div class="ticket-list-tomorrow-san" v-if="news.font == true">
		  							<span class="ticket-list-tomorrow">可定明日</span>
		  						</div>
		  						<div class="ticket-list-today-san" v-else="news.font == false">
		  							<span class="ticket-list-today">可定今日</span>
		  						</div>
		  					</div>
		  					<div class="ticket-list-productinfo">
			  					<h4 class="ticket-list-title">{{news.title}}</h4>
			  					<div class="ticket-list-taglist">
			  						<span class="ticket-list-taglist-item">北京出发|</span>
			  						<span>无自费|</span>
			  						<span>无购物</span>
			  						<span class="ticket-list-taglist-stock" v-if="news.stock == true">赠券</span>
			  					</div>
			  					<p class="ticket-list-price">
			  					    <span>起</span>	
			  						<span class="ticket-list-new-price">&yen;{{news.newPrice}}</span>
			  					</p>
			  					<div class="ticket-list-text">
			  						<span class="ticket-list-sold">已售{{news.sold}}</span>
			  						<span class="ticket-list-face">票面价:</span>
			  						<span class="ticket-list-marketprice">&yen;{{news.oldPrice}}</span>	
			  					</div>
		  					</div>
						</li>
					</router-link> 
				</ul>
			</iscroll-view>
		</div>
	</div>	
</template>
<script>
 export default{
	data(){
		return{ 
		}
		
	},

	props: ["newslist"],
	
	methods: {
		 log (iscroll) {
		 }, 
         load (iscroll) {
         	iscroll.refresh()
         	this.newslist.push({
                "id":"60",
                "ticketImg":"//img1.qunarzz.com/p/tts9/1707/39/426a13e7cc066202.jpg_110x110_89e7700a.jpg",
                "title":"【超值亲子游】北京海洋馆+动物园+熊猫馆自助纯玩一日游",
                "font":true,
                "stock":"",
                "newPrice":"160",
                "sold":36,
                "oldPrice":"268" 
                },
                {
                "id":"61",
                "ticketImg":"//img1.qunarzz.com/p/tts0/1608/92/230d3471b8bc4a02.jpg_110x110_2c67d52a.jpg",
                "title":"北京故宫套票（含颐和园半日游+海碗居炸酱面）",
                "font":true,
                "stock":true,
                "newPrice":"198",
                "sold":206,
                "oldPrice":"268" 
                },
                {
                "id":"62",
                "ticketImg":"//img1.qunarzz.com/p/tts0/1703/b6/e4c9c0d6d528ed02.jpg_110x110_318cfeb8.jpg",
                "title":"【赠金殿国际餐厅午餐】八达岭长城+颐和园+清华北大一日游",
                "font": false,
                "newPrice":"150",
                "sold":206,
                "oldPrice":"388" 
                })
         },
         refresh (iscroll) {}		
	}
 }

</script>
<style scoped>
	.scroll-view {
	  touch-action: none;
	  position: absolute;
	  top: 15%;
	  bottom: -1rem;
	  left: 0;
	  right: 0;
	  overflow: hidden;
	}
	.ticket-list {
		width: 100%;
	}
	.ticket-list-item {
		width: 100%;
		position: relative;
		display: flex;
    	width: 100%;
    	height: 2rem;
	}
	.ticket-list-img {
		margin: .2rem;
	}
	.ticket-list-img-left {
		display: block;
		width: 1.6rem;
		height: 1.6rem;
	}
	.ticket-list-today-san::after {
		position: absolute;
		top: .2rem;
		left: 1.1rem;
		padding: .02rem;
		line-height: .24rem;
		content: "";
		border: .12rem solid #ff8300;
		border-right-color: transparent;
	}
	.ticket-list-today {
		display: block;
		position: absolute;
	    left: .2rem;
	    top: .2rem;
	    padding: .02rem;
	    background: #ff8300;
	    font-size: .24em;
	    color: #fff;
	    line-height: .24rem;
	    z-index: 1;
	}
	.ticket-list-tomorrow-san::after {
		position: absolute;
		top: .2rem;
		left: 1.1rem;
		padding: .02rem;
		line-height: .24rem;
		content: "";
		border: .12rem solid #00bcd4;
		border-right-color: transparent;
	}
	.ticket-list-tomorrow {
		display: block;
		position: absolute;
	    left: .2rem;
	    top: .2rem;
	    padding: .02rem;
	    background: #00bcd4;
	    font-size: .24em;
	    color: #fff;
	    line-height: .24rem;
	    z-index: 1;
	}
	.ticket-list-productinfo {
		width: 100%;
		overflow: hidden;
		padding: .2rem .2rem .2rem 0;
	    height: 1.6rem;
	    border-bottom: 1px solid #ccc;
	}
	.ticket-list-title {
		display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
		line-height: .36rem;
    	font-size: .3rem;
    	color: #212121;
	}
	.ticket-list-taglist {
		float: left;
		padding-left: .05rem;
	    max-height: .58rem;
	    width: 100%;
	    padding-top: .08rem;
	    line-height: .24rem;
	    font-size: 1px;
	    color: #212121;
	}
	.ticket-list-taglist-item {
		color: #00bcd4;
	}
	.ticket-list-taglist-stock {
		float: right;
		display: block;
		width: .52rem;
		line-height: .2rem;
		margin-left: .8rem;
		color: #ff1200;
		text-align: center;
		border: 1px solid #ff1200;
	}
	.ticket-list-price {
		clear: both;
		width: 100%;
		height: 0.2rem;	
		color: #212121;
	}
	.ticket-list-new-price {
		color: #ff8300;
	}
	.ticket-list-price span{
		float: right;
	}
	.ticket-list-text {
	    width: 100%;
	    height: .24rem;
	    color: #9e9e9e;
	}
	.ticket-list-sold {
		float: left;
		padding-top: .2rem;
   		font-size: .24rem;
	}
	.ticket-list-face {
		display: block;
		padding-left: 2.6rem;
		padding-top: .2rem;
   		font-size: .24rem;
	}
	.ticket-list-marketprice {
		display: block;
		float: right;
		margin-top: -.24rem;
   		margin-right: .2rem;
   		font-size: .24rem;
   		text-decoration: line-through;
	}
</style>