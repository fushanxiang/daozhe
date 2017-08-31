<template>
	<div class="packages-box">
		<div class="packages">
			<div class="packages-content">
				<h3 class="title packages-title"><span class="word">套餐包括</span></h3>
				<div class="packages-des">
			        <p class="packages-des-content" v-html="goodsInfo.combo"></p>
			    </div>
			</div>
			<h3 class="title purchase-notes" v-on:click="toogleClick">
				<span class="word">购买须知</span>
				<span class="next-icon iconfont">&#58918;</span>
			</h3>
			<div class="Pop-ups" v-bind:class="[show ? 'block' : 'none' ]"> <!-- 购买须知弹窗 -->
				<div class="box">
					<div class="top">

						<i class="iconfont close" v-on:click="toogleClick">&#xe622;</i>

						<div class="Pop-title-box">
							<h2 class="Pop-title">{{goodsInfo.title}}</h2>
						</div>

						<div class="Pop-headdetail">
							<div class="item1">
								<img src="../../../assets/images/qunar.png" class="qunar">
								<span class="item-text">去哪儿直销</span>
							</div>
							<div class="item2">
								<i class="iconfont icon">&#xe64d;</i>
								<span class="item-text">21:59前可订今日</span>
							</div>
							<div class="item3">
								<i class="iconfont icon">&#xe604;</i>
								<span class="item-text">入园保障</span>
							</div>
						</div>
					</div>
				











					<div class="orderdetail-content">

		                <div class="content-head">
		                    <div class="prdintro-item">
		                        <div class="prdintro-icon">
		                            <span class="prdintroicon iconfont">&#xe604;</span>随心退
		                        </div>
		                        <div class="prdintro-detail">
		                            <div>
		                              	90天内支持随时退款，经核实如未取票，可免费取消
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <iscroll-view ref="scrollView" class="scroll-view"  @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel: true}">
		                    <div class="content-body">
		                        <div class="prddetail-item">
		                            <h5 class="prddetail-name">有效时间</h5>
		                            <p class="prddetail-txt">游玩日期当天有效</p>
		                        </div>
		                        <div class="prddetail-item">
		                            <h5 class="prddetail-name">预定时间</h5>
		                            <p class="prddetail-txt">需要在游玩当天的21:59前预订；预订后2小时才能入园</p>
		                        </div>
		                        <div class="prddetail-item">
		                            <h5 class="prddetail-name">入园信息</h5>
		                            <p class="prddetail-txt">
		                                【兑换凭证】<br>可以通过商家的确认短信,手机号,姓名,进行兑换<br>【商家确认短信发送时间】<br>下单后1分钟内发送入园短信<br>【入园方式】<br>凭兑换凭证换票<br>【换票地址】<br>长隆水上乐园景区门口自助取票机处输入短信中的电子票号和手机号<br>【入园地址】<br>长隆水上乐园景区门口<br>
		                            </p>
		                        </div>
		                        <div class="prddetail-item">
		                            <h5 class="prddetail-name">退款说明</h5>
		                            <p class="prddetail-txt">
		                            【关于改期】系统不支持改期，若需改期用户请提前一天前端取消订单后再次预定；游玩当天不退不改。<br>任何时间内，票一经验证或取票，均不可退改。</p>
		                        </div>
		                        <div class="prddetail-item">
		                            <h5 class="prddetail-name">费用说明</h5>
		                            <p class="prddetail-txt">
		                                【费用包含】长隆水上成人票1张，景区一票通玩，无需自费(购买零食除外）<br>注：请勿携带食物入场。<br><br>【暑期促销】2017年8月25日-8月31日期间，购买水上乐园相关成人票（包含门票，套票，夜场票），每名购票成人可携带1名1.5米以下儿童免费入园（仅限水上乐园，其他园区不可携带，嘉宾票，教师和司机陪票，中小学生票，情侣票不享受此活动）<br><br>【换票方式】<br>方法一：景区门口自助取票机处输入短信中的电子票号和手机号；<br>方法二：景区门口有二维码提供用户扫码，扫码后是一个二维码门票的生成界面，用户输入取票凭证码以及手机号码，会生成门票二维码，凭门票二维码可以直接扫码入园。（生成入园二维码后，视同已经取票，无法再在自助取票机取票，任何时间内均无法退改）。
		                            </p>
		                        </div>
		                        <div class="prddetail-item">
		                            <h5 class="prddetail-name">使用说明</h5>
		                            <p class="prddetail-txt">
		                                【开放时间】09：30—22：00如有调整以现场为准；<br>【入园须知】最晚取票时间为当日闭园前2小时；<br>【票类说明】全票对象：指成人及身高1.5米以上儿童。<br>【关于改期】系统不支持改期，若需改期用户请提前一天前端取消订单后再次预定；游玩当天不可退改。<br>【温馨提示】<br>1、购票信息敬请注意保密，如因个人原因泄露订票信息而造成的损失，去哪儿网对此不承担任何责任；<br>2、若无法在自助取票机取票，或是取票数量不对，取票过程中遇到问题请及时咨询景区工作人员。<br>3、园区为户外项目，受天气等不可抗力因素影响较大，建议您出行前查看当地天气预报，由于天气原因、自然灾害、机械检修等原因而不能游玩全部的项目，去哪儿网将不作退款，并不负责补偿。
		                            </p>
		                        </div>
		                    </div>
		                </iscroll-view> 

		            </div>
			




					<div class="bottom">
						<div class="b-left">
							<span class="Online-Payment">在线支付</span>
							<span class="b-icon">&yen;</span>
							<span class="price">{{goodsInfo.sellPrice}}</span>
						</div>
						<div class="b-right">
							<a href="javascript:;" class="Booking">立即预订</a>
						</div>
					</div>

				</div>
			</div>

			<h3 class="title fun-around">
				<span class="word">周边好玩</span>
				<span class="next-icon iconfont">&#58918;</span>
			</h3>
			
		</div>
	</div>
</template>

<script>
export default {

	data () {
	    return {
			show : false
	    }   
	},
	methods:{
		toogleClick:function(){
			this.show = !this.show;
		},
		pullUp(){
            console.log('pull up')
        },
        pullDown(){
            console.log('pull down')
        }
	},
	mounted () {
	     this.$refs.scrollView.refresh()
	},
	props : ["goodsInfo"]
		
}
</script>

<style scoped>

	@import "../../../assets/font/iconfont.css";





	.block{
		display: block;
	}
	.none{
		display: none;
	}
	.packages-box{
		padding-top: .2rem;
		background: #f1f1f1;
	}
	.packages{
	    padding: 0 .2rem;
	    background-color: #fff;
	}
	.packages:before,.packages:after{
		content:"";
		position: absolute;
		left: 0;
		width: 100%;
		height: .02rem;
		background: #c9cccd;
	} 
	.title{
		overflow: hidden;
		position: relative;
		height: .88rem;
		font-size: .28rem;
		line-height: .88rem;
		text-indent: .15rem;
	}
	.word:before{
		content: " ";
		overflow: hidden;
		position: absolute;
		top: .32rem;
		left: 0;
		height: .25rem;
		width: .06rem;
		background: #1ba9ba;
		-webkit-border-radius: .04rem;
		-moz-border-radius: .04rem;
		border-radius: .04rem;
	}
	.purchase-notes,.fun-around{
		border-top: .02rem dashed #efefef;
	}
	.next-icon {
		position: absolute;
		top: 0;
		right: 0;
		color: #9e9e9e;
	}
	.packages{
		padding: 0 .2rem;
	}
	.packages-des-content{
	    padding-bottom: .15rem;
	    line-height: .48rem;
	    color: #616161;
	}





	.Pop-ups{
		background:rgba(0,0,0,.5);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	.box{
		width: 95%;
		height: 90%;
		background: #fff;
		margin:0 auto;
		margin-top: .55rem;
		position: relative;
	}
	.bottom{
		line-height: 1rem;
		width: 100%;
		height: 1rem;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 101;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
	}
	.b-left,.b-right{
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		line-height: 1rem;
	}
	.b-left{
		background: #fff;
		position: relative;
		display:flex; 
	}
	.b-right{
	    overflow: hidden;
	    background: #ff9800;
	    color: #fff;
	    font-size: .4rem;
	    text-align: center;
	}
	.Online-Payment{
		margin-left: 10px;
		line-height: 1.15rem;
		color: #999;
    	font-size: .24rem;
	}
	.b-icon{
		line-height: 1.15rem;
		color: #ff9800;
		margin-left: 2px;
    	font-size: .24rem;
	}
	.price{
	    color: #ff9800;
	    font-size: .48rem;	
	    line-height: 1rem;
	    overflow: hidden;
	    white-space: nowrap;
		text-overflow: ellipsis;
	}
	.Booking{
		color: #fff;
	}
	.b-left::before{
	    content: "";
		width: 100%;
	    height: .02rem;
		background: #dadada;
	    position: absolute;
	    left: 0;
	    top: 0;
	    transform: scaleY(.51);
	}
	.top{
		line-height: .4rem;
		position: relative;
		padding:.2rem;
	    color: #333;
    	font-size: .33rem;
	    word-wrap: break-word;
    	word-break: break-all;
    	font-weight: bold;
    	overflow: hidden;
	}
	.Pop-title-box{
	    margin-right: .5rem;
	    font-size: .32rem;
	    font-weight: bold;
	    overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.close{
	    display: inline-block;
	    position: absolute;
	    top: .266rem;
	    right: .44rem;
	    width: .4rem;
	    height: .4rem;
	    font-size: .66rem;
	    color: #b5b5b5;
	    cursor: pointer;
	}
	.Pop-headdetail{
		font-size: 0;
		overflow: hidden;
	    position: relative;
	    margin-top: .3rem;
	    font-weight: normal;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.Pop-headdetail .icon{
		color: #1ba9ba;
        font-size: .24rem;
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    vertical-align: bottom;
	    line-height: 1;
	    margin-bottom: -2px;
	    -webkit-font-smoothing: antialiased;
	}
	.qunar{
		width: .32rem;
   	 	height: .32rem;
 	    border-radius: .06rem;
	}
	.item-text{
	    display: inline-block;
	    height: .24rem;
	    color: #666;
	    font-size: .24rem;
	    line-height: .24rem;
	    white-space: nowrap;
	    margin-left: 5px;
	}

	.item1,.item2,.item3{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.middle{
		overflow: hidden;
		position: absolute;
		top: auto;
		right:0;
		bottom: 1rem;
		left: 0;
    	height: 7.5rem;
    	background: red;
	}









	/*滚动区域*/
    .orderdetail-content{
    	border-top: .01rem solid #e0e0e0;
    } 
    .content-head{
        margin: 0 .2rem;
        padding: .28rem 0;
        background: #fff;
        position: relative;
        border-bottom: 1px solid #e0e0e0;
    } 
    .content-head:after{
	    content: "";
    	position: absolute;
    	left: 0;
    	bottom: 0;
	    width: 100%;
   		height: .01rem;
   		transform: scaleY(.51);
	    background: #e0e0e0;
    }
    .prdintro-item{
        position: relative;
        vertical-align: middle;
        margin-bottom: 0;
    }
    .prdintro-icon{
        float: left;
        margin-right: .14rem;
        margin-top: .04rem;
        height: .24rem;
        font-size: .24rem;
        line-height: .24rem;
        border: 0;
        color: #666;
    }
    .prdintroicon{
        margin-right: .08rem;
        color: #1ba9ba;
        font-family: 'mpiconfont';
        speak: none;
        font-size: .12rem;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;   
    }
    .prdintro-detail{
        overflow: hidden;
        color: #666;
        line-height: .377rem;
        font-size: .28rem;
    } 
    .scroll-view {      
        touch-action: none;
        position: fixed;
        top: 185px;
        bottom: 70px;
        left: 0;
        right: 0;
        overflow: hidden;
    } 
    .content-body{
        margin: 0 .2rem;
        padding: .2rem .15rem;
        background: #fff;
        position: relative;
    }
    .prddetail-item{
        margin-bottom: .4rem;
    }
    .prddetail-name{
        margin-bottom: .2rem;
        color: #333;
        font-size: .28rem;
    }
    .prddetail-txt{
        color: #999;
        font-size: .28rem;
        line-height: .36rem;
    } 












</style>