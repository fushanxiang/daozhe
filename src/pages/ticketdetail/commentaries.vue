<template>
	<div class="discuss-container">

		<h3 class="container-title">用户评论</h3>
		<div class="space"></div>

		<div class="container-comment border-top">
			<div class="container-comment-stardate">
				<span class="starlevel">
					★★★★★
				</span>
				<span class="container-comment-date">
					r*2&nbsp;&nbsp;2017-08-02

				</span>
			</div>
			<div class="">
				<p id="comment-content-p">
					蓝琪儿格格非常棒！非常敬业又有爱心的导游，怕大家晒着中暑，带领我们走阴凉地，找最佳观赏位置，我们坐着，她全程站着讲解。知识丰富渊博，语言妙趣横生，一个个有趣的历史故事带领我们穿越千年。因为导游我们爱上了这座城。
				</p>
			</div>
		</div>

		<div class="discuss-photo">
			<div class="discuss-img"><img class="imgs" src="https://imgs.qunarzz.com/piao/fusion/1708/ef/d8c6025104ed3b02.jpg_240x240_dd99b6bf.jpg" /></div>
			<div class="discuss-img"><img class="imgs" src="https://imgs.qunarzz.com/piao/fusion/1708/51/d1e3ccc595a28302.jpg_240x240_7686a9d6.jpg" /></div>
		</div>

		<div class="space-small"></div>

		<div class="container-comment border-top">
			<div class="container-comment-stardate">
				<span class="starlevel">
					★★★★★
				</span>
				<span class="container-comment-date">
					能*兔&nbsp;&nbsp;2017-08-11
				</span>
			</div>
			<div class="">
				<p id="comment-content-p">
					蓝旗儿格格非常敬业，预定后的早一天短信给我见面路线，然后又电话叮咛，约好时间由于有一家人迟到半小时，耽误了大家，这家人也没道歉觉得素质太差。导游非常好，尽量找阴凉处让我们坐着听她讲解，而她却辛苦的一直站着，举着小黄旗太阳下站了4个多小时，不停讲解，我和女儿非常感动感谢，讲解的很好，觉得游故宫就应该请她这样的导游，下次会介绍盆友来报她的团游故宫
				</p>
			</div>
		</div>

		<router-link to="/commentariesall">
			<div class="discuss-refresh mp-border-top">查看全部评论&nbsp;&nbsp;<span class="iconfont">&#xe62f;</span></div>
		</router-link>
		<div class="space-buttom"></div>
	</div>

</template>

<script>
	export default {

		data() {
			return {

			}
		},
		methods: {
			handleClick() {

			}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.discuss-container {
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
		padding: .1rem .4rem .02rem .2rem;
		background: #fff;
	}
	
	.border-top {
		padding-bottom: .25rem;
	}
	
	.container-comment-stardate {
		margin-top: .1rem;
		line-height: .6rem;
	}
	
	.starlevel {
		color: #00bcd4;
		font-size: 20px;
	}
	
	.container-comment-date {
		float: right;
	}
	
	#comment-content-p {
		font-size: .28rem;
		line-height: .4rem;
		margin: .1rem 0;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.discuss-photo {
		box-sizing: border-box;
		padding: .1rem;
		height: 100%;
		overflow: hidden;
		background: #fff;
	}
	
	.discuss-img {
		box-sizing: border-box;
		width: 25%;
		height: 85px;
		float: left;
		padding: .045rem;
	}
	
	.discuss-img .imgs {
		width: 100%;
		height: 100%;
	}
	
	.discuss-refresh {
		width: 100%;
		margin-top: .02rem;
		height: .8rem;
		background: #fff;
		color: #616161;
		line-height: .8rem;
		text-align: center;
		border-top: 2px #f5f5f5 solid;
	}
	
	.space-buttom {
		width: 100%;
		height: .15rem;
		background: #f5f5f5;
	}
</style>