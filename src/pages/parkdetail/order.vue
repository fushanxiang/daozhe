<template>
<div class="mask" :style="mode? 'display:block':'display:none'" >
	<div id="page-category" class="mpw-dock mpw-dock-fadein"  >
        <div class="mpw-dock-header mpf-border-bottom mpf-border-top"></div>
        <div class="mpw-dock-content" mp-role="dockContent">
        <div class="mpf-control-outer">
        <div class="mp-booking-info">
        <h5 class="mpf-booking-title">太平洋海底世界成人票+海洋动物表演电子套票（文惠券产品）</h5>
        <div class="mpw-dock-close iconfont" @click="handleClick">&#xe633;</div>
        <p class="mpf-booking-price">
            <span class="mpg-price">¥<em class="mpg-price-num" id="price">80</em></span>
            <span id="price-text">/张</span>
            <span class="mp-prdcard-gray mp-prdcard-marketprice mpf-booking-marketprice">票面价:¥<span>160</span></span>
        </p>
    </div>
    <div class="mpf-booking-select" data-type="CALENDAR">
        <h6 class="mpf-booking-note">价格日历</h6>
    <div class="mpf-booking-datecard clrfix">       
    <span class="mpf-datecard mpf-datecard-disabled ">
        <em class="mpf-datecard-name">今天</em>
        <strong class="mpf-datecard-detail">8月28日</strong>
    </span>
    <span class="mpf-datecard   mpf-datecard-actived">
        <em class="mpf-datecard-name">明天</em>
        <strong class="mpf-datecard-detail">8月29日</strong>
    </span>
    <span class="mpf-datecard  ">
        <em class="mpf-datecard-name">后天</em>
        <strong class="mpf-datecard-detail">8月30日</strong>
    </span>
    <span class="mpf-datecard  mpf-datecard-wait" id="alldate" readonly="true">
        <em class="mpf-datecard-name">其他日期</em>
    </span>
		</div></div>
		    <div class="mpf-booking-light">需要在游玩前1天的23:30前预订</div>
		</div>
			<a  class="mpf-booking-btn" href="#">立即预订</a>
		</div>
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
               	this.mode = !this.mode;
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
	
	.mpw-dock {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		background: #FFF;
		transition: transform .3s ease-out;
	}
	
	.mpf-control-outer {
		margin: 0 .2rem;
	}
	
	.mpf-booking-btn {
		display: block;
		width: 100%;
		border: 0 none;
		background: #ff9800;
		color: #fff;
		font: normal .36rem/1rem Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		text-align: center;
	}
	
	.mpw-dock-close {
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
	
	.mpf-booking-title {
		margin-right: .6rem;
		padding: .3rem 0 .1rem;
		color: #212121;
		font-size: .34rem;
		line-height: .4rem;
	}
	
	.mpf-booking-price {
		color: #9e9e9e;
		font-size: .24rem;
		line-height: .48rem;
	}
	
	.mpf-booking-price .mpg-price {
		color: #ff9800;
		margin-right: .06rem;
	}
	
	.mpf-booking-price .mpg-price-num {
		margin-left: .06rem;
		font-size: .36rem;
	}
	
	.mp-prdcard-marketprice {
		margin-left: .05rem;
		text-decoration: line-through;
	}
	
	.mp-prdcard-gray {
		color: #9e9e9e;
		font-size: .24rem;
		margin-left: -.06rem;
	}
	
	.mpf-booking-select {
		margin-top: .18rem;
	}
	
	.mpf-booking-note {
		color: #333;
		font-size: .26rem;
		line-height: .65rem;
	}
	
	.mpf-booking-datecard {
		overflow: hidden;
		height: .86rem;
	}
	
	.mpf-booking-datecard .mpf-datecard:first-child {
		margin-left: 0;
	}
	
	.mpf-booking-datecard .mpf-datecard {
		box-sizing: border-box;
		float: left;
		width: 22.5%;
		height: .86rem;
		margin-left: 3.33%;
	}
	
	.mpf-datecard-disabled {
		border-color: #ececec;
		background: #fff;
	}
	
	.mpf-datecard {
		display: inline-block;
		min-width: 1.2rem;
		min-height: .82rem;
		border: .02rem solid #bdbdbd;
		background: #fff;
		text-align: center;
		border-radius: .1rem;
	}
	
	.mpf-datecard-name {
		padding-top: .08rem;
		color: #212121;
		font-size: .28rem;
		line-height: .36rem;
	}
	
	.mpf-datecard-detail {
		padding-bottom: .06rem;
		color: #888;
		font-size: .24rem;
		line-height: .32rem;
	}
	
	.mpf-datecard-name,
	.mpf-datecard-detail {
		display: block;
		width: 100%;
	}
	
	.mpf-datecard-actived {
		position: relative;
		border-color: #00bcd4;
		color: #fff;
		background: #00bcd4;
	}
	
	.mpf-booking-light {
		padding: .14rem 0;
		color: #ff8300;
		font-size: .24rem;
		line-height: .36rem;
	}
</style>