<template>
	<div>
		<div class="ticket">
			<h3 class="td-ticket-title">
				购票须知
			</h3>
		</div>
		<div class="main">
			<div class="td-ticketcontent td-border-top">
			    	<div class="td-ticketcontent-item">
				    	<p class="td-ticketcontent-title">
				    		<img class="td-ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/1b/b4ae0bf46adb9602.png">预订说明
				    	</p>
				    	<p class="td-ticketcontent-line">
				    		<span class="td-ticketcontent-keyword">有效期：</span>游玩日期当天有效
				    	</p>
				    	<p class="td-ticketcontent-line">
				    		<span class="td-ticketcontent-keyword">提前预订时间：</span>需要在游玩当天的08:30前预订
				    	</p>
			    	</div>

					<div class="td-ticketcontent-item">
						<p class="td-ticketcontent-title">
							<img class="td-ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/89/dc69c8cb83b92502.png">入园须知
						</p>
						<p class="td-ticketcontent-notice">需提前换票入园</p>
							<p class="td-ticketcontent-line">
								<span class="td-ticketcontent-keyword">入园方式</span>
							</p>
									<p class="td-ticketcontent-sepline">
										<span class="td-ticketcontent-linetag">
											<img class="td-ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/4f/60b1629ae5d22702.png">
										</span>
										凭身份证、手机号、姓名到故宫午门游客服务中心门口进行换票
									</p>
									<p class="td-ticketcontent-sepline">
										<span class="td-ticketcontent-linetag"><img class="td-ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/e2/8f4c1d0b353c9402.png"></span>在北京故宫博物院检票处凭票入园
									</p>
									<p class="td-ticketcontent-line">
										<span class="td-ticketcontent-keyword">景区开放时间</span>
									</p>
									<p class="td-ticketcontent-line">4月～10月：08:30～17:00开放，16:00停止入园；<br>11月～3月：08:30～16:30开放，15:40停止入园；</p>
							</div>
		    		<div class="td-ticketcontent-item">
						<p class="td-ticketcontent-title">
							<img class="td-ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/19/c2df078ae9e10802.png">
							退款说明
						</p>
							<p class="td-ticketcontent-sepline">
								<span class="td-ticketcontent-linetag">
									<img class="td-ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/84/ca17a90b690b4b02.png">
								</span>
								条件退：使用日期开始前1天12:00可申请退款
							</p>
							<p class="td-ticketcontent-sepline">
								<span class="td-ticketcontent-linetag">
								<img class="td-ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/51/39b07e031986102.png">
								</span>
								极速处理：去哪儿网承诺，提交申请后一个工作日内完成退款申请的审核
							</p>
					</div>
					<div :class="isActive?'up':'down'">
					<div class="td-ticketcontent-item">
						<p class="td-ticketcontent-title">
							<img class="td-ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/30/7704a63ac2cedf02.png">
							费用说明
						</p>
						<p class="td-ticketcontent-line td-ticketcontent-line-ellipsis4" td-role="feeDesc">费用包含： <br>1）导游：①国家认证高级导游<br>         ②故宫认证深度讲解员<br>         ③蓝琪儿格格带团4小时故宫讲解 （9点-13点） <br>2）其他：无线讲解器的使用项） <br>3）讲解服务说明：讲解服务、大小同价，2岁以下请勿提交订单，无学生、老人等优惠；<br>4）线路安排参考：午门—太和殿—中和殿—保和殿—西宫：永寿宫—启祥宫—翊坤宫—储秀宫---中宫：乾清宫—交泰殿—坤宁宫—东宫：承乾宫—永和宫—景仁宫—延禧宫—宁寿全宫—九龙壁—珍宝馆—珍妃井---御花园—散团（讲解时长4小时）<br>费用不含： <br>1）不含餐和交通、故宫大门票和珍宝馆门票 <br>2）其他一切个人消费及“费用包含”中未提及的费用</p>
					</div>

						<div class="td-ticketcontent-item" td-role="usingDescArea" style="display: none;">
							<p class="td-ticketcontent-title">
								<img class="td-ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/be/e0e62095776dc802.png">
								使用说明
							</p>
							<p class="td-ticketcontent-line">集合时间：09:00（具体以导游通知为准） <br>集合地点：故宫午门游客服务中心门口 <br>预订限制： <br>1）不含门票：儿童与成人同价</p>
						</div>
			    <div class="td-ticketcontent-item" td-role="usingDescArea">
					<p class="td-ticketcontent-title">
						<img class="td-ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/be/e0e62095776dc802.png">
						使用说明
					</p>
					<p class="td-ticketcontent-line">集合时间：09:00（具体以导游通知为准） <br>集合地点：故宫午门游客服务中心门口 <br>预订限制： <br>1）不含门票：儿童与成人同价</p>
				</div>
				</div>
				<div class="td-ticketcontent-more" @click="handleClick">
			    	<div :class="isActive?'td-ticketcontent-shadow':''"></div>
			        <span>{{isActive?'更多购票须知':'收起购票须知'}}</span>
			        <span class="iconfont td-ticketcontent-arrow">{{isActive?'&#xe62d;':'&#xe62e;'}}</span>
	    		</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isActive:true,
			}
		},
		methods:{
			handleClick(){
				this.isActive=!this.isActive
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.up{
		height:2.55rem;
		overflow:hidden;
	}
	.down{
		height:100%;
	}
	.main{
		background:#fff;
	}
	.td-border-top{
		border-top:1px solid #dadada;
	}
	.ticket{
		position:relative;
	}
	.td-ticket-title {
	    padding:0 0.2rem;
	    margin-top:.2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}
	.td-ticket-title::after {
	    content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    border-radius: .04rem;
	}
	.td-ticketcontent {
	    position: relative;
	    padding: 0 .4rem .3rem .4rem;
	    background: #fff;
	    margin: 0 .2rem;
	}
	.td-prddetail-content {
	    color: #9e9e9e;
	    font-size: .28rem;
	    line-height: .44rem;
	    overflow: hidden;
	    padding: .15rem 0;
	    margin: 0 .2rem;
	}
	.td-ticketcontent-title {
	    position: relative;
	    padding-top: .3rem;
	    line-height: .44rem;
	    font-size: .3rem;
	    color: #ff8300;
	}
	.td-ticketcontent-line, .td-ticketcontent-sepline {
	    margin-top: .14rem;
	    line-height: .42rem;
	    font-size: .28rem;
	}
	.td-ticketcontent-notice {
	    margin: .2rem 0 .06rem 0;
	    padding: .1rem .2rem .1rem .2rem;
	    line-height: .44rem;
	    background: #fffaf2;
	    border-radius: .08rem;
	    color: #ff8300;
	}
	.td-ticketcontent-sepline {
	    position: relative;
	    padding-left: .4rem;
	    margin-top: .14rem;
	    line-height: .42rem;
	    font-size: .28rem;
	}
	.td-ticketcontent-linetag {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .4rem;
	    height: .4rem;
	    text-align: left;
	}
	.td-ticketcontent-innericon {
	    width: .26rem;
	    height: .26rem;
	    vertical-align: top;
	    margin-top: .06rem;
	}
	.td-ticketcontent-titleicon {
	    position: absolute;
	    top: .34rem;
	    left: -.4rem;
	    width: .34rem;
	    height: .34rem;
	}
	.td-ticketcontent-more {
	    display:block;
	    padding-top: .3rem;
	    text-align: center;
	    border-top: 0;
	    font-size: .28rem;
	    color: #616161;
	}
	.td-ticketcontent-shadow, .td-supplier-shadow {
	    position: absolute;
	    bottom: .8rem;
	    left: 0;
	    right: 0;
	    height: .5rem;
	    background-image: linear-gradient(to bottom,rgba(255,255,255,0),#fff);
	}
	.td-ticketcontent-arrow {
	    font-size: .3rem;
	    
	}
	</style>