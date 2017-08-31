<template>
	<div class="discuss-container">
		
		<h3 class="container-title">用户评论</h3>
		<div class="space"></div>
		
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
				<p id="comment-content-p" v-bind:class="activea?'down':'up'">
					亲子套票还是挺划算的，里面有几项是要求小孩子80斤才可以玩的，我家宝贝只有70斤，有几个项目没有玩，必须得说说，去玩自己备好一双拖鞋，大热天赤脚走地上不是一般的烫，水可以带进去，里面最便宜的水10元，一杯奶茶25元，饭68一份，不是一般的贵，但必须吃否则没有力气玩。总体还是很棒的一次游玩，一票通玩，建议把大型的项目全部玩了再去小的项目，因为时间原因还有几个项目要排队没有玩到，晚上还有表演可以看。很开心的一次体验
				</p>
				<div class="foldbtn iconfont js-foldbtn" v-on:click="handleClicka">{{activea?'&#xe62d;':'&#xe62e;'}}</div>
			</div>
		</div>	
		
			<div class="discuss-photo">
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/64/9be292e6b135d802.jpg_228x168_82d0bfa2.jpg"/></div></div>			
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/36/b676102d4bcf0f02.jpg_228x168_0ccb30e8.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/91/4df3680362018a02.jpg_228x168_821eaaf6.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/75/f86c97262c153802.jpg_228x168_1fffe1af.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/e3/878c4ccd503aa802.jpg_228x168_b91c50f2.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1708/f6/3baa272158ce0e02.jpg_228x168_1a578982.jpg"/></div></div>	
			</div>
		
		<div class="space-small"></div>
		
		<div class="container-comment border-top">
			<div class="container-comment-stardate">
				<span class="mpf-starlevel">★★★★★
				</span>
				<span class="container-comment-date">
					能*兔&nbsp;&nbsp;2017-08-11
				</span>
			</div>
			<div class="">
				<p id="comment-content-p" v-bind:class="activeb?'down':'up'">
					里面环境很棒。可惜姨妈来了不能去玩。老公只有带着孩子在小池里面玩。这里面真的是太完善了。各种大小型号的儿童漂浮衣（救身衣）一岁多的小朋友都有合适他穿的。大人们如果要玩大型的刺激的又快又方便。还是不要带小朋友来。自己来玩更尽兴！如果人多的时候去玩。建议还是购买VIP通到票。但是里面吃的挺贵的。不可以带吃的进去，如果有吃的话，必须先寄存。
				</p>
				<div class="foldbtn iconfont js-foldbtn" v-on:click="handleClickb">{{activeb?'&#xe62d;':'&#xe62e;'}}</div>
			</div>
		</div>	
		
			<div class="discuss-photo">
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1706/cc/23bf15b074135102.jpg_228x168_438a8b4a.jpg"/></div></div>		
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1706/23/49888426e2025702.jpg_228x168_25c9be88.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1706/e8/bae69c631635e002.jpg_228x168_427eb91f.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1706/bb/3a16b3feae9ee02.jpg_228x168_5372c90a.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1706/cf/0ac9f56f8a2ef302.jpg_228x168_fea874ca.jpg"/></div></div>	
				<div class="discuss-img"><div class="discuss-imgs"><img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1706/ad/a357cc8f0d4a6a02.jpg_228x168_5cf9e316.jpg"/></div></div>	
			</div>
		<router-link to="/discussall">
			<div class="discuss-refresh mp-border-top">查看全部评论&nbsp;&nbsp;<span class="iconfont">&#xe62f;</span></div>
		</router-link>

	</div>
	
</template>

<script>
export default {
  
  	data () {
    	return {
			activea:true,
			activeb:true,
			
    	}
  	},
  	methods: {
		handleClicka() {	
			this.activea=!this.activea
 		},
		handleClickb() {	
			this.activeb=!this.activeb
 		}
	}	
}
</script>

<style scoped>
		
	@import "../../assets/font/iconfont.css";	
	.down {
		height:105px;
		overflow: hidden;
	}
	.up {
		height: 100%;
	}
	.discuss-container{
		position: relative;
	}
	.container-title {
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	    position: relative;
	}
	.container-title::after {
	    content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}
	.space {
		width: 100%;
		height: .08rem;
		background: #f5f5f5;
	}
	.space-small {
		width: 100%;
		height: .08rem;
		margin-top: .2rem;
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
	#comment-content-p {
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
	.discuss-photo {
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
		padding: .045rem;
	}
	
	.discuss-img {
		width: 33.3%;
		float: left;
		margin-bottom:.1rem ;
	}
	.discuss-imgs {
		margin-left: .07rem;
    	margin-right: .07rem;
	}
	.imgs {
		width: 100%;	
	}
	.discuss-refresh {
		width: 100%;
	    margin-top: .02rem;
	    height: .8rem;
	    background: #fff;
	    color: #616161;
	    line-height: .8rem;
	    text-align: center;
	    border-top: 1px #f5f5f5 dashed;
    }
</style>
