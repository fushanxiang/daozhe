<template>
	<div class="mask" v-show="mode">
		<div class="dock" :style="mode? 'display:block':'display:none'">
	        <div class="control-outer">	        
	        <h5 class="booking-title">太平洋海底世界成人票+海洋动物表演电子套票（文惠券产品）</h5>
	        <div class="dock-close iconfont" @click="handleClick">&#xe633;</div>
	        <p class="booking-price">
	            <span class="price">¥<em class="price-num" id="price">80</em></span>
	            <span id="price-text">/张</span>
	            <span class="prdcard-gray prdcard-marketprice">票面价:¥<span>160</span></span>
	        </p>
	    <div class="booking-select">
	        <h6 class="booking-note">价格日历</h6>
	    <div class="booking-datecard">       
	    <span class="datecard datecard-disabled ">
	        <em class="datecard-name">今天</em>
	        <strong class="datecard-detail">8月28日</strong>
	    </span>
	    <span class="datecard   datecard-actived">
	        <em class="datecard-name">明天</em>
	        <strong class="datecard-detail">8月29日</strong>
	    </span>
	    <span class="datecard  ">
	        <em class="datecard-name">后天</em>
	        <strong class="datecard-detail">8月30日</strong>
	    </span>
	    <span class="datecard  datecard-wait" id="alldate" readonly="true">
	        <em class="datecard-name">其他日期</em>
	    </span>
			</div></div>
			    <div class="booking-light">需要在游玩前1天的23:30前预订</div>
			</div>
				<a  class="booking-btn" href="#">立即预订</a>			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mode: true
			}
		},
        methods:{
            handleClick() {
               this.mode = !this.mode
            }
        }		
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	
	.mask {
		position: fixed;
		z-index: 92;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.7);
	}
	
	.dock {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		background: #FFF;
		transition: transform .3s ease-out;
	}
	
	.control-outer {
		margin: 0 .2rem;
	}
	
	.booking-btn {
		display: block;
		width: 100%;
		border: 0 none;
		background: #ff9800;
		color: #fff;
		font: normal .36rem/1rem Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		text-align: center;
	}
	
	.dock-close {
		z-index: 2;
		right: 0;
		position: absolute;
		top: 0;
		width: .88rem;
		height: 1rem;
		color: #9e9e9e;
		font-size: .4rem;
		line-height: 1rem;
		text-align: center;
	}
	
	.booking-title {
		margin-right: .6rem;
		padding: .3rem 0 .1rem;
		color: #212121;
		font-size: .34rem;
		line-height: .4rem;
	}
	
	.booking-price {
		color: #9e9e9e;
		font-size: .24rem;
		line-height: .48rem;
	}
	
	.booking-price .price {
		color: #ff9800;
		margin-right: .06rem;
	}
	
	.booking-price .price-num {
		margin-left: .06rem;
		font-size: .36rem;
	}
	
	.prdcard-marketprice {
		margin-left: .05rem;
		text-decoration: line-through;
	}
	
	.prdcard-gray {
		color: #9e9e9e;
		font-size: .24rem;
		margin-left: -.06rem;
	}
	
	.booking-select {
		margin-top: .18rem;
	}
	
	.booking-note {
		color: #333;
		font-size: .26rem;
		line-height: .65rem;
	}
	
	.booking-datecard {
		overflow: hidden;
		height: .86rem;
	}
	
	.booking-datecard .datecard:first-child {
		margin-left: 0;
	}
	
	.booking-datecard .datecard {
		box-sizing: border-box;
		float: left;
		width: 22.5%;
		height: .86rem;
		margin-left: 3.33%;
	}
	
	.datecard-disabled {
		border-color: #ececec;
		background: #fff;
	}
	
	.datecard {
		display: inline-block;
		min-width: 1.2rem;
		min-height: .82rem;
		border: .02rem solid #bdbdbd;
		background: #fff;
		text-align: center;
		border-radius: .1rem;
	}
	
	.datecard-name {
		padding-top: .08rem;
		color: #212121;
		font-size: .28rem;
		line-height: .36rem;
	}
	
	.datecard-detail {
		padding-bottom: .06rem;
		color: #888;
		font-size: .24rem;
		line-height: .32rem;
	}
	
	.datecard-name,
	.datecard-detail {
		display: block;
		width: 100%;
	}
	
	.datecard-actived {
		position: relative;
		border-color: #00bcd4;
		color: #fff;
		background: #00bcd4;
	}
	
	.booking-light {
		padding: .14rem 0;
		color: #ff8300;
		font-size: .24rem;
		line-height: .36rem;
	}
</style>