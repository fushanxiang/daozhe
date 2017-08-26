<template>
  <div class="footer">
  		<div class="footer-provider">
  			<p class="footer-provider-line"></p>
  			<p class="footer-provider-message">本产品由爱陌客自营提供</p>
  		</div>
  		<ul class="footer-main-nav">
  			<li class="plane-ticket"><span class="iconfont">&#xe630;</span>机票</li>
  			<li class="hotel"><span class="iconfont">&#xe61e;</span>酒店</li>
  			<li class="apartment"><span class="iconfont">&#xe6a8;</span>公寓</li>
  			<li class="more"><span class="iconfont">&#xe6b8;</span>更多</li>
  			
  		</ul>
  		<ul class="footer-menu">
  			<li>登录</li>
  			<li>我的订单</li>
  			<li>最近浏览</li>
  			<li>关于我们</li>
  		</ul>
  		<ul class="mobile-pc">
  			<li class="mobile">触屏版</li>
  			<li class="PC">PC版</li>
  		</ul>
  		<p class="fadeback">Qunar 京ICP备05021287意见反馈</p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
     
  }
}
</script>

<style scoped>
	.footer {
		width: 100%;
		height: auto;
		background: #f3f3f3;
	}
	.footer-provider {
		position: relative;
		width: 100%;
		height: .8rem;
		text-align: center;


	}
	.footer-provider-line {
		position: absolute;
		top: 50%;
		height: .01rem;
		background: #ddd;
		width: 100%;
		z-index: 0;
		
	}
	.footer-provider-message {
		position: absolute;
		width: 3rem;
		height: .3rem;
		left: 50%;
		top: .02rem;
		margin-left: -1.7rem;
		background:#f3f3f3;
		padding: 0.2rem;
		color: #a5a5a5;
	    font-size: .24rem;
	    line-height: .4rem;
	    text-align: center;
	    z-index: 2;
		}
		.footer-main-nav {
			width: 100%;
			height: .7rem;
			

		}
		.footer-main-nav li {
			float: left;
			width: 1.5rem;
			height: .42rem;
			text-align: center;
			line-height: .42rem;
			color: #9e9e9e;
		    font-size: 12px;
		   
		}	
		.footer .iconfont {
			margin:3px 3px  0 5px;
		}
		.footer-menu {
			width: 100%;
			height: .8rem;
			border-bottom: .01rem solid #cacaca;
		}
		.footer-menu li {
			float: left;
			padding-left: .4rem;
			height: 100%;
			text-align: center;
			line-height: .8rem;
			color: #25a4bb;
			font-size: .14rem;
		}
		.mobile-pc {
			width: 100%;
			height: .48rem;
			padding-top: 10px;
			text-align: center;
		}
		.mobile,
		.PC {
			display: inline-block;
			margin: 0 .3rem;
		}
		.PC {
			color: #25a4bb;
		}
		.fadeback {
			color: #9e9e9e;
		    text-align: center;
		    font-size: 14px;
		    padding: 10px;
		}

</style>