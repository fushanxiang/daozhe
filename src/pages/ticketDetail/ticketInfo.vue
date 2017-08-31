<template>
	<div class="ticket-info">
		<div class="prddetail-group">
			<h3 class="prddetail-title" >购票须知</h3>
			<div class="ticketcontent border-top">
				<div class="ticketcontent-item">
					<p class="ticketcontent-title"><img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/1b/b4ae0bf46adb9602.png">预订说明</p>
					<p class="ticketcontent-line"><span class="ticketcontent-keyword">有效期：</span>游玩日期当天内的18:00~22:00有效</p>
					<p class="ticketcontent-line"><span class="ticketcontent-keyword">提前预订时间：</span>需要在游玩当天的17:00前预订</p>
				</div>
				<div class="ticketcontent-item">
					<p class="ticketcontent-title"><img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/89/dc69c8cb83b92502.png">入园须知</p>
					<p class="ticketcontent-notice">需提前换票入园</p>
					<p class="ticketcontent-line"><span class="ticketcontent-keyword">入园方式</span></p>
					<p class="ticketcontent-sepline">
						<span class="ticketcontent-linetag"><img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/4f/60b1629ae5d22702.png"></span>凭商家确认短信到景区售票处进行换票
					</p>
					<p class="ticketcontent-sepline">
						<span class="ticketcontent-linetag"><img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/e2/8f4c1d0b353c9402.png"></span>在北京市昌平区蟒山路2号凭票入园
					</p>
					<p class="ticketcontent-line"><span class="ticketcontent-keyword">商家短信</span></p>
					<p class="ticketcontent-line">商家确认短信会在下单成功后3分钟内发送</p>
					<p class="ticketcontent-line"><span class="ticketcontent-keyword">景区开放时间</span></p>
					<p class="ticketcontent-line">08:00～17:00开放；</p>
				</div>

				<div class="ticketcontent-item">
					<p class="ticketcontent-title"><img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/19/c2df078ae9e10802.png">
						退款说明</p>
						<p class="ticketcontent-sepline">
							<span class="ticketcontent-linetag"><img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/84/ca17a90b690b4b02.png"></span>不可退：非经法定原因，不可退订
						</p>
					</div>

					<div class="ticketcontent-item">
						<p class="ticketcontent-title"><img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/30/7704a63ac2cedf02.png">费用说明</p>
						<p class="ticketcontent-line">北京蟒山公园国际奇幻森林灯光节门票一张</p>
					</div>

					<div class="ticketcontent-item" v-show="flag[0]">
						<p class="ticketcontent-title"><img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/be/e0e62095776dc802.png">使用说明</p>
						<p class="ticketcontent-line">亮灯时间18:00~23:00；换票时间：18:00~22:00<br>优惠政策：1米以下免费，1米以上为全价票（老人、军官、学生无优惠）；<br>温馨提示：因恶劣天气，自然灾害、特殊活动等不可抗力因素，造成的开园时间变更或关团，园方不承担任何责任；</p>
					</div>

					<div class="ticketcontent-more" style="display: block;" @click="handleClick(0)">
						<div  class="ticketcontent-shadow"></div>
						<span >更多购票须知</span><span class="iconfont ticketcontent-arrow" v-html="showTicketHtml"></span>
					</div>
				</div>
			</div>
			<div class="prddetail-group">
				<h3 class="prddetail-title">景区信息</h3>
				<div class="prddetail-content border-top">
					<div class="sightlist">
						<span class="sightlist-item border-left">
							<a href="" class="sightlist-link">
								<span class="iconfont sightlist-temple">&#xe63e;</span>蟒山国家森林公园(3A)
							</a>
						</span>
						<span class="sightlist-item border-left">
							<a href="" class="sightlist-link">
								<span class="iconfont sightlist-temple">&#xe63e;</span>蟒山灯光节
							</a>
						</span>
					</div>
				</div>
			</div>
			<div class="prddetail-group" style="position:relative">
				<h3 class="prddetail-title">供应商：中凯智慧生活</h3>
				<div class="prddetail-content border-top">
					<div class="sullier" role="supllierInfo" v-show="flag[1]">
						消费者成功预订门票并按产品规则使用，出游当日无法按照原订单入园，联系供应商（或去哪儿网）后10分钟未解决，消费者可在景区购买门市价入园并保留票根，去哪儿网将双倍赔付差价。
					</div>
				</div>
				<div class="supplier-more" role="supplierDescMoreBtn" @click="handleClick(1)">
					<div role="moreShaddow" class="supplier-shadow" style="display: none;"></div>
					<span role="moreText"><span class="iconfont supplier-arrow prddetail-arrowup" role="supplierDescMoreArrow" v-html="showContentHtml"></span>
				</span></div>
			</div>

			<div class="prddetail-group" id="moreprice-con">
				<h3 class="prddetail-title border-bottom">更多报价</h3>
				<div class="prddetail-content">
					<div class="productlist-item">
						<div class="productprices-info">
							<h3 class="productprices-name ellipsis2">北京蟒山国家森林公园灯光节门票</h3>
							<div class="productprices-supplier ellipsis">
								蓝精灵
							</div>
							<div class="product-tag">
							</div>
							<div class="product-tag">
								<span class="product-desctag"><span class="iconfont product-desctag-icon product-desctag-invalid">&#xe6ed;</span>不可退</span>
								<span class="product-desctag"><span class="iconfont product-desctag-icon">&#xe64d;</span>17:00前可订今日</span>
							</div>
							<div class="productprices-disandprice">
								<span class="product-price"><span class="price">¥<em class="price-num">30</em></span></span>
								<span class="iconfont product-arrow">&#xe626;</span>
								<br>
								<span class="product-marketprice" style="padding-right: .4rem;">票面价¥<span class="product-marketnum">30</span></span>
							</div>
						</div>
						<a href="" class="linkarea" data-click="t_more_price"></a>
					</div>
				</div>
			</div>
		</div>
	</template>
	<script>


		export default {
			components: {

			},
			data() {
				return {
                  flag : [false,false],
                  showTicketHtml:"&#xe6a6;",
                  showContentHtml:"&#xe6a6;",
              }
          },
          methods: {
            handleClick:function(num) {
              var temp =this.flag[num]
              this.flag.splice(num,1,!temp);             
              if(num == 0){                        
                this.showTicketHtml = (!temp ===true) ? "&#xe6a5;" : "&#xe6a6;"
            }
            if(num == 1){
                this.showContentHtml = (!temp ===true) ? "&#xe6a5;" : "&#xe6a6;"
            }
        }
    },
    created() {

    },
    computed: {

    }
}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .ticket-info {
       position: relative;
   }
   .prddetail-group {
       margin-top: .2rem; 
       padding: .01rem 0;
       background-color: #fff;
       display: block;
   }
   .prddetail-title {
       overflow: hidden;
       position: relative;
       height: .88rem;
       font-size: .32rem;
       line-height: .88rem;
       text-indent: .15rem;
       padding: 0 .2rem;
   }
   .prddetail-title::after {
       content: " ";
       position: absolute;
       top: .32rem;
       left: .26rem;
       width: .06rem;
       height: .27rem;
       background: #00bcd4;
       -webkit-border-radius: .04rem;
       -moz-border-radius: .04rem;
       border-radius: .04rem;
   }

   .ticketcontent-title {
       position: relative;
       padding-top: .3rem;
       line-height: .44rem;
       font-size: .3rem;
       color: #ff8300;
   }
   .ticketcontent-line {
       margin: .2rem .6rem;
       line-height: .42rem;
       font-size: .28rem;
   }
   .ticketcontent-titleicon {
       width: .34rem;
       height: .34rem;
       position: relative;
       margin-right: .26rem;
       left: .2rem;
   }
   .ticketcontent-keyword {
       font-weight: bold;
       color: #212121;
   }
   .ticketcontent-notice {
       margin: .2rem .2rem .06rem .72rem;
       line-height: .44rem;
       background: #fffaf2;
       border-radius: .08rem;
       color: #ff8300;
   }
   .ticketcontent-linetag img {
       width:.25rem;
       height:.25rem;
       margin:.08rem .04rem;
       vertical-align: top;
   }
   .ticketcontent-sepline {
       margin: .2rem .20rem .06rem .72rem;
       line-height: .44rem;
   }

   .sightlist {
       overflow: hidden;
       overflow-x: auto;
       -webkit-overflow-scrolling: touch;
       white-space: nowrap;
   }
   .prddetail-content {
       color: #9e9e9e;
       font-size: .28rem;
       line-height: .44rem;
       overflow: hidden;
       padding: .15rem 0;
       margin: 0 .2rem;
   }
   .sightlist-item a {
       color: #212121;
       margin-right: .4rem;
   }
   .sightlist-item .iconfont {
       color: #bdbdbd;
       margin-right: .1rem;
   }   
   .ticketcontent-more,.supplier-more {
       text-align: center;
   }
   .productlist-item {
       overflow: hidden;
       position: relative;
       margin-bottom: .6rem;
   }
   .productprices-info {
       overflow: hidden;
       padding: .24rem 1.6rem .24rem 0;
   }
   .productprices-name {
       overflow: hidden;
       margin-bottom: .04rem;
       color: #212121;
       font-size: .3rem;
       line-height: .42rem;
   }
   .productprices-supplier {
       margin-bottom: .04rem;
       color: #9e9e9e;
       font-size: .24rem;
       line-height: .34rem;
   }
   .linkarea {
       position: absolute;
       z-index: 2;
       top: 0;
       right: 0;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 100%;
   }
   .product-desctag {
    margin:.2rem;
}
.product-desctag-icon {
    color:#ff9800;
    margin-right: .08rem;
    color: #00afc7;
    font-size: .24rem;
}
.product-desctag-invalid {
 color:#ff9800;
}
.productprices-disandprice {
  position: absolute;
  top: 50%;
  right: 0;
  color: #9e9e9e;
  font-size: .22rem;
  line-height: .3rem;
  text-align: right;
}
.product-price {
  color: #ff8300;
  font-size: .18rem;
}
.price-num {
  margin: 0 .04rem 0 .06rem;
  font-size: .4rem;
}
</style>
