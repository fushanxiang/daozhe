
<template>
	<div class="discuss-container">
		
		<h3 class="container-title"><span class="blue">丨</span>用户评论</h3>
		<div class="jiange"></div>
		
		<div class="container-comment border-top">
			<div class="container-comment-stardate">
				<span class="mpf-starlevel">
					★★★★★
				</span>
				<span class="container-comment-date">
					能*兔&nbsp;&nbsp;2017-08-11
				</span>
			</div>
			<div class="">
				<p id="comment-content-p" v-bind:class="{active?"a":"b"}">
					亲子套票还是挺划算的，里面有几项是要求小孩子80斤才可以玩的，我家宝贝只有70斤，有几个项目没有玩，必须得说说，去玩自己备好一双拖鞋，大热天赤脚走地上不是一般的烫，水可以带进去，里面最便宜的水10元，一杯奶茶25元，饭68一份，不是一般的贵，但必须吃否则没有力气玩。总体还是很棒的一次游玩，一票通玩，建议把大型的项目全部玩了再去小的项目，因为时间原因还有几个项目要排队没有玩到，晚上还有表演可以看。很开心的一次体验
				</p>
				<div class="foldbtn iconfont js-foldbtn" v-on:click="handleClick">&#xe62d;</div>
			</div>
		</div>	
		
			<div class="discuss-photo">
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg"/></div>		
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg"/></div>
			</div>
		
	
		<div class="jiange"></div>
		
		<div class="container-comment border-top">
			<div class="container-comment-stardate">
				<span class="mpf-starlevel">
					★★★★★
				</span>
				<span class="container-comment-date">
					能*兔&nbsp;&nbsp;2017-08-11
				</span>
			</div>
			<div class="">
				<p id="comment-content-p" style="height:100%; overflow: hidden;">
					亲子套票还是挺划算的，里面有几项是要求小孩子80斤才可以玩的，我家宝贝只有70斤，有几个项目没有玩，必须得说说，去玩自己备好一双拖鞋，大热天赤脚走地上不是一般的烫，水可以带进去，里面最便宜的水10元，一杯奶茶25元，饭68一份，不是一般的贵，但必须吃否则没有力气玩。总体还是很棒的一次游玩，一票通玩，建议把大型的项目全部玩了再去小的项目，因为时间原因还有几个项目要排队没有玩到，晚上还有表演可以看。很开心的一次体验
				</p>
				<div class="foldbtn iconfont js-foldbtn" v-on:click="handleClick">&#xe62d;</div>
			</div>
		</div>	
		
			<div class="discuss-photo">
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg"/></div>		
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg"/></div>
				<div class="discuss-img"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg"/></div>
			</div>
		
		
	</div>
</template>

<script>
export default {
  
  	data () {
    	return {
			active:true
    	}
  	},
  	methods: {
		handleClick() {
			active:!this.active
 		}
	}
}
</script>


<style scoped>
	
	@import "../../assets/font/iconfont.css";
	.asss{
		height:125px; overflow: hidden;
	}
	.b {
		height: 100%;
	}
	.container-title {
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}
	.container-title .blue {
		padding-right: .1rem;
		color: #00bcd4;
	}
	.jiange {
		margin-top: .3rem;
		width: 100%;
		height: .08rem;
		background: #f5f5f5;
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
	}
	.container-comment-date {
		float: right;
	}
	#comment-content-p{
		word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    font-size: .26rem;
	    color: #616161;
	}
	.foldbtn {
		height: .48rem;
	    line-height: .48rem;
	    text-align: center;
	    font-size: .26rem;
	    color: #9e9e9e;
	}
	.con{
		display: block;
		height: 100%;
	}
	
	
	
	
	
	
	
	
	
	
	.discuss-photo {
		box-sizing: border-box;
		padding: .1rem;
		height: 100%;
		overflow: hidden;
	}
	.discuss-img {
		box-sizing: border-box;
		width: 33.3%;
		height: 85px;
		float: left;
		padding: .045rem;
	}
	.discuss-img .imgs{
		width: 100%;
		height: 100%;		
	}
</style>
