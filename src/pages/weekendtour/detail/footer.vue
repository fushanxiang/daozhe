<template>
  <div class="footer" id="footer">
  		<div class="footer-provider">
  			<p class="footer-provider-line"></p>
  			<p class="footer-provider-message">本产品由爱陌客自营提供</p>
  		</div>
  		<ul id = "tag" v-bind:class="[show1 ? 'nav1' : 'nav2' ]">
  			<li class="plane-ticket"><span class="iconfont">&#xe630;</span>机票</li>
  			<li class="hotel"><span class="iconfont">&#xe61e;</span>酒店</li>
  			<li class="apartment"><span class="iconfont">&#xe6a8;</span>公寓</li>
  			<li class="tag" v-on:click="handleClick">
  				<span class="iconfont" v-if="!show1">&#xe6b8;更多</span>
  				<span class="iconfont" v-if="show1">&#xe63c;收起</span>
  			</li>
  			<li><span class="iconfont">&#xe772;</span>火车票</li>
  			<li><span class="iconfont">&#xe655;</span>景点</li>
  			<li><span class="iconfont">&#xe6b4;</span>接送机</li>
  			<li><span class="iconfont">&#xe6c9;</span>度假</li>
  			<li><span class="iconfont">&#xe631;</span>攻略</li>
  			<li><span class="iconfont">&#xe678;</span>车车</li>
  			<li><span class="iconfont">&#xe606;</span>当地人</li>
  			<li><span class="iconfont">&#xe6d4;</span>团购</li>
  			<li><span class="iconfont">&#xe629;</span>旅途</li>
  		</ul>
  		<div class="footer-menu-center">
	  		<ul class="footer-menu">
	  			<li>登录</li>
	  			<li>我的订单</li>
	  			<li>最近浏览</li>
	  			<li>关于我们</li>
	  		</ul>
  		</div>
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
            show1 : false, 
        }
    },
    methods: {
        handleClick() {
            this.show1 = !this.show1;
        }
    }
}
	
</script>

<style scoped>
	.nav1 {
		position: relative;
		width: 6.4rem;
		height: 2.5rem;
		padding: .2rem .2rem 0 .2rem;
		margin: 0 auto;
		overflow: hidden;
		
	}
	.nav2 {
		position: relative;
		width: 6.4rem;
		height: .7rem;
		padding: .2rem .2rem 0 .2rem;
		margin: 0 auto;
		overflow: hidden;
	}
	#tag li {
		float: left;
		width: 1.5rem;
		height: .6rem;
		text-align: center;
		line-height: .6rem;
		color: #9e9e9e;
	    font-size: 12px;
	}	
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
	.footer .iconfont {
		margin:3px 3px  0 5px;
		font-size: 12px;
	}
	.footer-menu {
		display: block;
		height: .8rem;
		border-bottom: .01rem solid #cacaca;
	}
	.footer-menu-center{
		display: flex;
		justify-content: center;
	}
	.footer-menu li {
		box-sizing: border-bottom;
		float: left;
		padding: .2rem;
		text-align: center;
		line-height: .5rem;
		color: #25a4bb;
		font-size: .28rem;
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
	    padding: 0px 10px 1.2rem 10px;
	}
	.tag {
		position: absolute;
		bottom: 0.1rem;
		right: .6rem;
		background: #f3f3f3;
	}

</style>