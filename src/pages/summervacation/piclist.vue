<template>
	<div class="mp-page">
		<div class="mp-img-container">
			<img class="mp-topic-images" src="//img1.qunarzz.com/piao/fusion/1707/5c/d2562a5021bff502.jpg" style="opacity: 1;">
		</div>
	
		<div class="mp-caption">
			<img class="mp-topic-imga" src="//s.qunarzz.com/piao_topic/image/touch/custom/2016/1772travel10/170710/caption1.jpg" style="opacity: 1;">
		</div>
			<ul class="ticket">
				<li class="mp-product-item" v-for="item in piclistInfo" :key="item.id">
					<div class="mp-product-show">
						<img class="mp-topic-img" v-lazy="item.imagesUrl">
						<span class="mp-product-flag">
							<em class="mp-product-tag">{{item.ticket}}</em>
						</span>
						<span class="mp-product-desc">
							<strong class="mp-product-in">
								{{item.title}}
							</strong>
						</span>
					</div>
					<div class="mp-product-info">
						<h4 class="mp-product-name">
							{{item.text}}
						</h4>
						<div class="active-product">
							<div class="mp-product-price">
								<strong class="mp-product-sale">￥
									<em class="mpg-price-num">{{item.price}}</em>
								</strong>
								<span class="mp-product-cost">
									票面价<span class="mpg-price">￥<em class="mpg-price-num">{{item.numprice}}</em>
									</span>
								</span>
								<span class="mp-product-cashback">{{item.back}}<em class="back-money">{{item.backmoney}}</em>
								</span>
							</div>
							<div class="mp-product-btn">立即预订</div>
						</div>
					</div>
				</li>
			</ul>
		
	</div>
	
</template>


<script>
export default {
	props:["piclistInfo"],
	data () {
		return {
			
    	}
	}
}
</script>

<style scoped>
	.mp-page{
		position:relative;
		width:100%;
		min-height:14rem;
		background:#28a3e1;
	}
	.mp-img-container{
		width: 100%;
		height: 0;
		padding-bottom: 78.4%;
		overflow: hidden;
	}
	.mp-topic-images{
		width:100%;
	}
	.mp-caption{
		overflow: hidden;
		min-height:.88rem;
	}
	.mp-topic-imga{
		width:100%;
	}
	.ticket{
		margin:0 .2rem;
	}
	.mp-product-item{
		position: relative;
		border-radius:.06rem;
		width:100%;
		margin-top:.2rem;
	}
	.ticket li:nth-child(1){
		margin-top:0;
	}
	.mp-product-show{
		overflow:hidden;
		position:relative;
		width:100%;	 
	}
	.mp-topic-img{
		width:100%;
		height:3.26rem;
		border-radius:0.06rem 0.06rem 0 0;
	}
	.mp-product-flag{
		position:absolute;
		top:.12rem;
		left:.12rem;
		width:90%;
	}
	.mp-product-tag{
		display:inline-block;
		overflow:hidden;
		max-width:50%;
		height:.32rem;
		border:.02rem solid #3dc929;
		padding:.08rem;
		background:rgba(98,212,79,.7);
		color:#fff;
		font-weight:bold;
		font-size:.28rem;
		line-height:.32rem;
		white-space:nowrap;
		text-overflow:ellipsis;
		text-align:center;
		border-radius:.04rem;

	}
	.mp-product-desc{
		position: absolute;
	    top:42%;
	    left:0;
	    width:100%;
	    color:#fff;
	    text-align:center;
	    font-size:.28em;
    	line-height:1;
	}
	.mp-product-in{
		display:block;
		width:100%;
	    font-weight:bold!important;
	    font-size:.4rem;
	    line-height:.58rem;
	    text-shadow:0 0 .06rem rgba(0,0,0,1);
	    overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
	.mp-product-info{
		position:relative;
		padding:.1rem .2rem;
		background:#fff;
	}
	.mp-product-name {
	    margin-bottom:.06rem;
	    color:#333;
	    font-size:.28rem;
	   	line-height:.4rem;
	   	overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.active-product{
		overflow: hidden;
		height:.54rem;
		display:flex;
		justify-content:space-between;
		line-height:.48rem;
		
	}   
	.mp-product-sale {
	    display: inline-block;
	    font-size:.28rem;
	    vertical-align: middle;
	    color: #ff4c56;
	    font-size:.24rem;
	}
	.mpg-price-num{
		font-size: .4rem;
		line-height: .48rem;
		font-family:Tahoma,Helvetica,sans-serif
	}
	.mp-product-cost{
		display: inline-block;
	    margin-left: .1rem;
	    color: #aaa;
	    font-size: .24rem;
	    text-decoration: line-through;
	    vertical-align: middle;
	}
	.back-money{
		font-size:.24rem;
	}
	.mp-product-cost .mpg-price-num{
		font-size:.24rem;
	}
	.mp-product-cashback{
		    display: inline-block;
		    overflow: hidden;
		    margin-left: .1rem;
		    height: .28rem;
		    color: #ff4c56;
		    font-size: .24rem;
		    line-height: .28rem;
		    vertical-align: middle;
	}

	.mp-product-disabled .mp-product-btn {
   		background: #aaa;
	}
	.mp-product-btn {
	    position: absolute;
	    right: .2rem;
	    bottom: .12rem;
	    margin-top: -.3rem;
	    width: 1.3rem;
	    height: .5rem;
	    background: #ff4c56;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .5rem;
	    text-align: center;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	}
	
	
</style>