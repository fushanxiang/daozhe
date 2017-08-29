<template>
	<div class="bigdiv">

		<div class="mp-header" id="header">
			<router-link to="/parkdetail">
				<span class="iconfont css-icon">&#xe600;</span>
			</router-link>
			<h1 mp-role="title" class="mp-header-title css-title">评论</h1>
			<span class="iconfont css-icon-a">&#xe6f5;</span>
		</div>
		
		<div id="conent">
			<div class="mpm-comment-head">
				<div class="mpm-comment-total">15272个评论</div>
				<ul class="mpf-tagbar">
					<li class="mpf-tag mpf-tag-actived" mp-role="commentTagItem" data-tagtype="0" @click="handleClick">全部(15272)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="1">好评(15063)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="2">中评(147)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="3">差评(62)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="4">取票方便(2827)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="8">便宜(1452)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="16">靠谱(1820)</li>
					<li class="mpf-tag" mp-role="commentTagItem" data-tagtype="32">服务好(1446)</li>
				</ul>
			</div>
		
			<div class="container-comment border-top">
				<div class="container-comment-stardate">
					<span class="container-comment-date">
						能*兔&nbsp;&nbsp;2017-08-11
					</span>
					<span class="mpf-starlevel">
						★★★★★
					</span>
				</div>
				<div class="">
					<p id="comment-content-p">
						亲子套票还是挺划算的，里面有几项是要求小孩子80斤才可以玩的，我家宝贝只有70斤，有几个项目没有玩，必须得说说，去玩自己备好一双拖鞋，大热天赤脚走地上不是一般的烫，水可以带进去，里面最便宜的水10元，一杯奶茶25元，饭68一份，不是一般的贵，但必须吃否则没有力气玩。总体还是很棒的一次游玩，一票通玩，建议把大型的项目全部玩了再去小的项目，因为时间原因还有几个项目要排队没有玩到，晚上还有表演可以看。很开心的一次体验
					</p>
					<p class="mpm-comment-info-outer">
		                <span class="mpm-comment-info">取票方便</span>
		                <span class="mpm-comment-info">靠谱</span>
		                <span class="mpm-comment-info">好评</span>
	        		</p>
				</div>
				<div class="mpm-comment-show">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_240x240_de7c7ea6.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_240x240_de7c7ea6.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_240x240_999bdf9e.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_240x240_999bdf9e.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_240x240_7a09bf47.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_240x240_7a09bf47.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_240x240_d42daca1.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_240x240_d42daca1.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_240x240_4625c248.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_240x240_4625c248.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_240x240_f8e49dff.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_240x240_f8e49dff.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/31/653c9e3da1734602.jpg_240x240_af39e2c5.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/31/653c9e3da1734602.jpg_240x240_af39e2c5.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/16/c057a3f692936102.jpg_240x240_0d7961aa.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/16/c057a3f692936102.jpg_240x240_0d7961aa.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/8e/928989000ca69502.jpg_240x240_d56053c6.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/8e/928989000ca69502.jpg_240x240_d56053c6.jpg" alt="" mp-role="thumbImg" style="">
		        </div>
			</div>
			<div class="container-comment border-top">
				<div class="container-comment-stardate">
					<span class="container-comment-date">
						能*兔&nbsp;&nbsp;2017-08-11
					</span>
					<span class="mpf-starlevel">
						★★★★★
					</span>
				</div>
				<div class="">
					<p id="comment-content-p">
						亲子套票还是挺划算的，里面有几项是要求小孩子80斤才可以玩的，我家宝贝只有70斤，有几个项目没有玩，必须得说说，去玩自己备好一双拖鞋，大热天赤脚走地上不是一般的烫，水可以带进去，里面最便宜的水10元，一杯奶茶25元，饭68一份，不是一般的贵，但必须吃否则没有力气玩。总体还是很棒的一次游玩，一票通玩，建议把大型的项目全部玩了再去小的项目，因为时间原因还有几个项目要排队没有玩到，晚上还有表演可以看。很开心的一次体验
					</p>
					<p class="mpm-comment-info-outer">
		                <span class="mpm-comment-info">取票方便</span>
		                <span class="mpm-comment-info">靠谱</span>
		                <span class="mpm-comment-info">好评</span>
	        		</p>
				</div>
				<div class="mpm-comment-show">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_240x240_de7c7ea6.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_240x240_de7c7ea6.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_240x240_999bdf9e.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_240x240_999bdf9e.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_240x240_7a09bf47.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_240x240_7a09bf47.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_240x240_d42daca1.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_240x240_d42daca1.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_240x240_4625c248.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_240x240_4625c248.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_240x240_f8e49dff.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_240x240_f8e49dff.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/31/653c9e3da1734602.jpg_240x240_af39e2c5.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/31/653c9e3da1734602.jpg_240x240_af39e2c5.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/16/c057a3f692936102.jpg_240x240_0d7961aa.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/16/c057a3f692936102.jpg_240x240_0d7961aa.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/8e/928989000ca69502.jpg_240x240_d56053c6.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/8e/928989000ca69502.jpg_240x240_d56053c6.jpg" alt="" mp-role="thumbImg" style="">
		        </div>
			</div>
			<div class="container-comment border-top">
				<div class="container-comment-stardate">
					<span class="container-comment-date">
						能*兔&nbsp;&nbsp;2017-08-11
					</span>
					<span class="mpf-starlevel">
						★★★★★
					</span>
				</div>
				<div class="">
					<p id="comment-content-p">
						亲子套票还是挺划算的，里面有几项是要求小孩子80斤才可以玩的，我家宝贝只有70斤，有几个项目没有玩，必须得说说，去玩自己备好一双拖鞋，大热天赤脚走地上不是一般的烫，水可以带进去，里面最便宜的水10元，一杯奶茶25元，饭68一份，不是一般的贵，但必须吃否则没有力气玩。总体还是很棒的一次游玩，一票通玩，建议把大型的项目全部玩了再去小的项目，因为时间原因还有几个项目要排队没有玩到，晚上还有表演可以看。很开心的一次体验
					</p>
					<p class="mpm-comment-info-outer">
		                <span class="mpm-comment-info">取票方便</span>
		                <span class="mpm-comment-info">靠谱</span>
		                <span class="mpm-comment-info">好评</span>
	        		</p>
				</div>
				<div class="mpm-comment-show">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_240x240_de7c7ea6.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_240x240_de7c7ea6.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_240x240_999bdf9e.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_240x240_999bdf9e.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_240x240_7a09bf47.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_240x240_7a09bf47.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_240x240_d42daca1.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_240x240_d42daca1.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_240x240_4625c248.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_240x240_4625c248.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_240x240_f8e49dff.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_240x240_f8e49dff.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/31/653c9e3da1734602.jpg_240x240_af39e2c5.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/31/653c9e3da1734602.jpg_240x240_af39e2c5.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/16/c057a3f692936102.jpg_240x240_0d7961aa.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/16/c057a3f692936102.jpg_240x240_0d7961aa.jpg" alt="" mp-role="thumbImg" style="">
		            <img class="mpm-comment-img" src="//img1.qunarzz.com/piao/fusion/1708/8e/928989000ca69502.jpg_240x240_d56053c6.jpg" data-original-src="//img1.qunarzz.com/piao/fusion/1708/8e/928989000ca69502.jpg_240x240_d56053c6.jpg" alt="" mp-role="thumbImg" style="">
		        </div>
			</div>
			
			<div class="kongbai"></div>
		</div>
	
		<div class="mp-addcomment mp-border-top">	
			<div class="mp-addcomment-btn">写点评</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				handleClick:function(){
					
				}
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.bigdiv {
		position: relative;
		height: 100%;
	}
	#header {
		position: fixed;
		width: 100%;
	}	
	.mp-header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
		z-index: 91;
	}
	.mp-addcomment {
	    z-index: 3;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 1.04rem;
	    background: #fff;
	}
	.mp-addcomment-btn {
	    margin: .16rem .2rem 0 .16rem;
	    line-height: .72rem;
	    background: #00bcd4;
	    border-radius: .04rem;
	    text-align: center;
	    color: #fff;
	}	
	#conent {			
		position: absolute;
		top: .88rem;
		left: 0;
    	right: 0;
		bottom: 1.04rem;
		height: 100%;
	}
	.kongbai {
		width: 100%;
		height: 1.04rem;
	}
	.css-icon {
		position: absolute;
		top: .24rem;
		padding-left: .15rem;
		font-size: .40rem;
		color: white;
	}
	.css-icon-a {
		position: absolute;
		top: .2rem;
		right: .2rem;
		padding-left: .15rem;
		font-size: 22px;
		color: white;
	}	
	.mp-header-title {
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}	
	.mpm-comment-total {
		box-sizing: border-box;
		padding: .2rem;
		height: .6rem;
		line-height: .6rem;
		margin-bottom: .16rem;
	}
	.mpm-comment-head .mpf-tagbar {
		box-sizing: border-box;
		padding: .2rem;
		margin-left: -.05rem;
	}
	.mpf-tagbar {
		zoom: 1;
		overflow: hidden;
	}	
	.mpf-tagbar .mpf-tag-actived {
		background: #00bcd4;
		color: #fff;
	}
	.mpf-tag {
		float: left;
		padding: .18rem .12rem;
		border: .02rem solid #cfdddf;
		margin: 0 .05rem .16rem;
		background: #fff;
		-webkit-border-radius: .06rem;
		-moz-border-radius: .06rem;
		border-radius: .06rem;
	}
	.container-comment {
		width: 100%;
		box-sizing: border-box;
		padding: .1rem .2rem .02rem .2rem;
		
	}
	.container-comment-stardate {
		margin-top: .1rem;
    	line-height: .6rem;
	}
	.mpf-starlevel {
		color: #00bcd4;
		font-size: 18px;
		float: right;
	}
	.container-comment-date {
		
	}
	#comment-content-p{
		word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    font-size: .26rem;
	    color: #616161;
	}
	.mpm-comment-info-outer {
		padding-top: .1rem;
	}
	.mpm-comment-img {
	    float: left;
	    width: 1rem;
	    height: 1rem;
	    margin-right: .2rem;
	    margin-top: .2rem;
	}
	.border-top{
		border-bottom: 1px solid #f5f5f5;
		padding-bottom: .3rem;
		overflow: hidden;
	}
</style>