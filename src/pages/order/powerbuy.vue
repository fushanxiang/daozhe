<template>
	<header class="buynumber">
		<div id="root">

			<div class="number">
				<div class="buy">购买数量</div>
				<div class="ticketcontent">
					<button class="cut" @click="handleClickPlus" >+</button>
					<span class="iptconcent" >{{number}}</span>
					<button class="plus" @click="handleClickCut">-</button>
				</div>
			</div>
			</div>

			<div class="tourist">
					<div class="touristmsg">
						<div class="touristfirst">
							游客1
						</div>
						<input class="touristipt" type="text" @click="handleChange" v-bind:style="{ color: activeColor, }" placeholder="游客姓名" />
						<div class="iconfont">&#xe606;</div>
					</div>

					<div class="phone">
						<div class="phonemsg">
						<div class="touristfirst">
							手机号
						</div>
						<div class="zone">+86&gt </div>
						<input class="phoneipt" type="text" placeholder="请填写手机号" />						
					</div>		

			<div class="identity">
				<div class="identitycard">
				身份证&gt
				</div>
				<input class="idipt" type="text" placeholder="请输入正确身份证号" />				
				</div>
			</div>

			</div>
			
			<div class="addmsg" v-for="item in touristInfo">
			<div class="test">
			<div class="kill"></div>
			<div class="backcolor"></div>
			<div class="tourist" >			
				<div class="touristmsg">
					<div class="touristfirst">
						{{item.tourist}}
					</div>
					<input class="touristipt" type="text" @click="handleChange" v-bind:style="{ color: activeColor, }" placeholder="游客姓名" />
					<div class="iconfont">&#xe606;</div>
				</div>								
			</div>	
			<div class="identity">
				<div class="identitycard">
				身份证&gt
				</div>
				<input class="idipt" type="text" placeholder="请输入正确身份证号" />				
				</div>
			</div>

			</div>
		</div>
			<div class="orderfooter">
				<div class="footer">
				<div class="footerleft">
					产品价格&yen<span class="price"  @price>{{price}}</span>
				</div>
				<div class="footerright" @click="handleGo">
					提交订单
				</div>
				</div>					
			</div>
	</header>
	
</template>

<script>
export default {
	data () {
		return {
				price:187,
				activeColor: 'red',
				number:1,
				touristInfo:[]
    	}
	},	
	methods:{
		handleClickPlus:function(){
			this.number++;
			this.price=187*this.number;	
			this.touristInfo.push({
				"tourist":"游客"+this.number
			})		
		},
		handleClickCut(){
			this.number--;
			if(this.number<=1){
				this.number=1
			}
				this.price=187*this.number;
				this.touristInfo.pop({
				"tourist":"游客"
			})
		},
	    handleChange(){},
		handleGo() {
			confirm('请填写信息')
		}
	},
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	
	.buynumber{	
		height:1.24rem;	
		padding:10px;	
		margin-top:.4rem;	

	}

	.backcolor{
		width:100%;
		height:.1rem;
		background:#edf8f4;
	}

	.identity{
		width:100%;
		height:1.24rem;
		border-top:1px solid grey;
		clear:both;
	}

	.number{
		width:100%;
		height:1.24rem;
		
		
	}

	.kill{
		width:100%;
		height:.4rem;
		clear:both;	
		border-bottom:1px solid grey;
	}

	.tourist{
		width:100%;
		height:2.28rem;	
	}

	.addmsg{
		width:100%;
		height:100%;
		clear:both;
	}

	.buy{
		line-height:1.24rem;
		font-size:.3rem;
		float:left;
	}

	.ticketcontent{
		height:100%;
		float:right;
	}

	.cut,.plus{
		width:.56rem;
		height:.56rem;
		background:#00afc7;
		margin-top:.24rem;
		float:right;
		border:none;
		font-size:.42rem;
		font-weight:900;
		color:white;
	}

	.iptconcent{
		line-height:.54rem;
		display:block;
		text-algin:center;
		float:right;
		padding-left:.26rem;
		display:inline-block;
		width:.54rem;
		height:.54rem;	
		margin-top:.24rem;
		font-size:.32rem;
		
	}

	.tourist,phone,identity{		
		height:1.24rem;	
	}

	.touristmsg,.phonemsg,identitycard{
		width:100%;
		height:1.24rem;			
		line-height:1.24rem;			
	}

	.touristmsg{
		overflow:hidden;
		clear:both;		
	}

	.touristfirst{
		float:left;
		font-size:.36rem;
	}

	.touristipt{
		float:left;
		margin-top:.4rem;
		margin-left:.6rem;
		width:62%;
		height:.4rem;
		border:none;
	}

	.idipt{
		float:left;
		margin-top:.4rem;
		margin-left:.6rem;
		width:50%;
		height:.4rem;
		border:none;
	}

	.phoneipt{
		float:left;
		margin-top:.4rem;
		margin-left:.6rem;
		width:30%;
		height:.4rem;
		border:none;
	}

	.phone{
		border-top:1px solid grey;
		border-bottom:1px solid grey;
	}

	.iconfont{
		float:right;
		margin-right:.1rem;
		font-size:.36rem;
		color:#00afc7;
	}

	.zone{
		font-size:.4rem;
		text-algin:center;
		line-height:.4rem;
		width:1rem;
		height:.4rem;
		float:left;
		border:1px solid grey;
		margin-left:.6rem;
		margin-top:.4rem;
	}

	.identitycard{
		float:left;
		font-size:.36rem;
		border:1px solid grey;
		line-height:.4rem;
		margin-top:.4rem;
	}

	.orderfooter{
		width:100%;
		height:1rem;
		border-top:1px solid grey;
		position:fixed;
		bottom:0;
		left:0;
	}

	.price{
		color:#ff9800;
		font-size:.6rem;
	}

	.footerleft{
		float:left;
		width:50%;
		height:1rem;
		line-height:1rem;
		text-align:center;
		color:#ff9800;
		background:white;
	}

	.footerright{
		float:right;
		width:50%;
		height:1rem;
		background:#ff9800;
		text-align:center;
		line-height:1rem;
		font-size:.36rem;
		color:white;
	}
</style>
