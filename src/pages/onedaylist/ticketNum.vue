<template>
	<div>
		<div class="ticketnum" ref="ticketnum" >
			<iscroll-view @scroll="loadMore()" >
				<ul class="ticket-list" id="ticket-list" >
					<li class="ticket-list-item" v-for="(news, index) in ticketData" :key="index">
						<div class="ticket-list-img">
	  					<img class="ticket-list-img-left" :src="news.ticketImg">
	  					<div class="ticket-list-today-san">
	  						<span class="ticket-list-today"></span>
	  					</div>
	  					<div class="ticket-list-tomorrow-san">
	  						<span class="ticket-list-tomorrow">可定明日</span>
	  					</div>
	  				</div>
	  				<div class="ticket-list-productinfo">
	  					<h4 class="ticket-list-title">{{news.title}}</h4>
	  					<div class="ticket-list-taglist">
	  						<span class="ticket-list-taglist-item">北京出发|</span>
	  						<span>无自费|</span>
	  						<span>无购物</span>
	  						<span class="ticket-list-taglist-stock">{{news.stock}}</span>
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
				</ul>
			</iscroll-view>
		</div>
	</div>	
</template>
<script>

import IScrollView from 'vue-iscroll-view'
import Vue from "vue"
import IScroll from 'iscroll'
Vue.use(IScrollView, IScroll)

 export default{
	data(){
		return{ 
			
		}
		
	},

	mount() {},
	props: ["ticketData"],

	methods: {
		loadMore () {
			console.log(1)
			
			
		}
			
		
	}
 }

</script>
<style>
	.ticket-list {
		width:100%;
	}
	.ticket-list-item {
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
	.ticket-list-tomorrow-san:after {
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
	    font-size: .28em;
	    color: #fff;
	    line-height: .24rem;
	    z-index: 1;
	}
	.ticket-list-productinfo {
		overflow: hidden;
		padding: .2rem .2rem .2rem 0;
	    height: 1.6rem;
	    border-bottom:1px solid #ccc;
	}
	.ticket-list-title {
		display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
		line-height: .36rem;
    	font-size: .3rem;
    	
	}
	.ticket-list-taglist {
		float: left;
		padding-left: .05rem;
	    max-height: .58rem;
	    padding-top: .08rem;
	    line-height: .24rem;
	    font-size: 1px;
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
		
	}
	.ticket-list-price {
		clear: both;
		width: 100%;
		height: 0.2rem;	
	}
	.ticket-list-new-price {
		color:#ff8300;
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