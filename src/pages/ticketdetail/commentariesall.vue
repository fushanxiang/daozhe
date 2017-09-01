<template>
	<div>
		<div class="discussall-header" id="header">
			<router-link to="/ticketdetail">
				<span class="iconfont css-icon-left">&#xe600;</span>
			</router-link>
			<h1 mp-role="title" class="discussall-header-title css-title">点评</h1>
			<span class="iconfont css-icon-right">&#xe6f5;</span>
		</div>

		<div id="conent">
			<div class="container-comment border-top" v-for="(recommendInfo,i) in recommendInfos">
				<div class="container-comment-stardate">
					<span class="container-comment-date">
						{{recommendInfo.name}}
					</span>
					<span class="starlevel">
						{{recommendInfo.level}}
					</span>
				</div>
				<div class="">
					<p class="comment-content-p down">
						{{recommendInfo.text}}
					</p>
					<div class="foldbtn iconfont js-foldbtn " @click="handleClick(i)">{{'&#xe62d;'}}</div>
				</div>

				<div class="discuss-photo">
					<img class="comment-img" :src="recommendInfo.img[0].src1" />
					<img class="comment-img" :src="recommendInfo.img[1].src2" />
				</div>
			</div>

			<router-link to="/logined">
				<div class="discuss-refresh mp-border-top">查看更多</div>
			</router-link>

			<div class="space-small"></div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				recommendInfos: [],
			}
		},
		methods: {
			handleClick: function(i) {
				this.$el.children.conent.children[i].children[1].children[1].innerText = '';
				this.$el.children.conent.children[i].children[1].children[0].className = 'comment-content-p'
			}
		},
		created() {
			this.$http.get('../../../static/commentaries.json').then(response => {
				var data = response.data;
				this.recommendInfos = data.recommendInfo;
			}, response => {
				console.log("dfs");
			});
			//console.log(this, this.$el)
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.down {
		height: 80px;
		overflow: hidden;
	}
	
	.up {
		height: 100%;
	}
	
	#header {
		position: fixed;
		width: 100%;
	}
	
	.discussall-header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
		z-index: 91;
	}
	
	#conent {
		position: absolute;
		top: .88rem;
		left: 0;
		right: 0;
		bottom: 1.04rem;
		height: 100%;
	}
	
	.css-icon-left {
		position: absolute;
		top: .24rem;
		padding-left: .15rem;
		font-size: .40rem;
		color: white;
	}
	
	.css-icon-right {
		position: absolute;
		top: .2rem;
		right: .2rem;
		padding-left: .15rem;
		font-size: 22px;
		color: white;
	}
	
	.discussall-header-title {
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	
	.container-comment {
		width: 100%;
		box-sizing: border-box;
		padding: .1rem .4rem .02rem .4rem;
	}
	
	.border-top {
		padding-bottom: .15rem;
	}
	
	.container-comment-stardate {
		margin-top: .1rem;
		line-height: .6rem;
	}
	
	.starlevel {
		color: red;
		font-size: 20px;
	}
	
	.container-comment-date {
		float: right;
	}
	
	.comment-content-p {
		color: #999;
		font-size: .28rem;
		line-height: .4rem;
	}
	
	.discuss-photo {
		box-sizing: border-box;
		overflow: hidden;
		width: 100%;
		padding: .1rem .4rem .02rem .4rem;
	}
	
	.comment-img {
		float: left;
		width: 1rem;
		height: 1rem;
		margin-right: .2rem;
		margin-top: .2rem;
	}
	
	.foldbtn {
		height: .48rem;
		line-height: .48rem;
		text-align: center;
		font-size: .26rem;
		color: #9e9e9e;
	}
	
	.space-small {
		width: 100%;
		height: .05rem;
		margin-top: .2rem;
		background: #f5f5f5;
	}
	
	.discuss-refresh {
		width: 100%;
		margin-top: .02rem;
		height: .6rem;
		background: #fff;
		color: #616161;
		line-height: .8rem;
		text-align: center;
		border-top: 2px #f5f5f5 solid;
	}
</style>