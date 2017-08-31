<template>
	<div class="bigdiv">

		<div class="discussall-header" id="header">
			<router-link to="/parkdetail">
				<span class="iconfont css-icon-left">&#xe600;</span>
			</router-link>
			<h1 mp-role="title" class="discussall-header-title css-title">评论</h1>
			<span class="iconfont css-icon-right">&#xe6f5;</span>
		</div>

		<div id="conent">
			<div class="comment-head">
				<div class="comment-total">15272个评论</div>
				<ul class="tagbar">
					<li class="tag" v-for="(item,index) in items" :class="item.actived?'actived':''" @click="handleclick(index)">
						{{item.text}}
					</li>
				</ul>
			</div>

			<div class="container-comment border-top" v-for="recommendInfo in recommendInfos">
				<div class="container-comment-stardate">
					<span class="container-comment-date">
						{{recommendInfo.name}}
					</span>
					<span class="starlevel">
						{{recommendInfo.level}}
					</span>
				</div>
				<div class="">
					<p id="comment-content-p">
						{{recommendInfo.text}}
					</p>
					<p class="comment-info-outer">
						<span class="discussall-comment-info">{{recommendInfo.goodorded}}</span>
						<span class="discussall-comment-info">{{recommendInfo.goodorded}}</span>
						<span class="discussall-comment-info">{{recommendInfo.goodorded}}</span>
					</p>
				</div>
				<div class="mpm-comment-show">
					<img class="comment-img" :src="recommendInfo.img[0].src1" />
					<img class="comment-img" :src="recommendInfo.img[1].src2" />
					<img class="comment-img" :src="recommendInfo.img[2].src3" />
					<img class="comment-img" :src="recommendInfo.img[3].src4" />
					<img class="comment-img" :src="recommendInfo.img[4].src5" />
					<img class="comment-img" :src="recommendInfo.img[5].src6" />
					<img class="comment-img" :src="recommendInfo.img[6].src7" />
					<img class="comment-img" :src="recommendInfo.img[7].src8" />
					<img class="comment-img" :src="recommendInfo.img[8].src9" />
				</div>
			</div>
			<div class="space"></div>
		</div>
		<router-link to="/logined">
			<div class="addcomment mp-border-top">
				<div class="addcomment-btn">写点评</div>
			</div>
		</router-link>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					"id": "01",
					"text": "全部(15272)",
					"actived": true
				}, {
					"id": "02",
					"text": "好评(15063)"
				}, {
					"id": "03",
					"text": "中评(147)"
				}, {
					"id": "04",
					"text": "差评(62)"
				}, {
					"id": "05",
					"text": "取票方便(2827)"
				}, {
					"id": "06",
					"text": "便宜"
				}, {
					"id": "07",
					"text": "靠谱"
				}, {
					"id": "08",
					"text": "服务好"
				}],
				actived: false,
				recommendInfos: []
			}
		},
		methods: {
			handleclick(index) {
				for(var i = 0; i < this.items.length; i++) {
					var item = this.items[i];
					item.actived = false;
					this.items.splice(i, 1, item);
				}
				var item = this.items[index];
				item.actived = true;
			}
		},
		created() {
			this.$http.get('../../../static/discussall.json').then(response => {
				var data = response.data;
				this.recommendInfos = data.recommendInfo;		    	
			}, response => {
				console.log("dfs");
			});
		},
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
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
	
	.addcomment {
		z-index: 3;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1.04rem;
		background: #fff;
	}
	
	.addcomment-btn {
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
	
	.space {
		width: 100%;
		height: 1.04rem;
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
	
	.comment-total {
		box-sizing: border-box;
		padding: .2rem;
		height: .6rem;
		line-height: .6rem;
		margin-bottom: .16rem;
	}
	
	.comment-head .tagbar {
		box-sizing: border-box;
		padding: .2rem;
		margin-left: -.05rem;
	}
	
	.tagbar {
		zoom: 1;
		overflow: hidden;
	}
	
	.tag {
		float: left;
		padding: .18rem .12rem;
		border: .02rem solid #cfdddf;
		margin: 0 .05rem .16rem;
		background: #fff;
		-webkit-border-radius: .06rem;
		-moz-border-radius: .06rem;
		border-radius: .06rem;
	}
	
	.actived {
		background: #00bcd4;
		color: #fff;
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
	
	.starlevel {
		color: #00bcd4;
		font-size: 18px;
		float: right;
	}
	
	#comment-content-p {
		word-break: break-all;
		word-wrap: break-word;
		line-height: .42rem;
		font-size: .26rem;
		color: #616161;
	}
	
	.comment-info-outer {
		padding-top: .1rem;
	}
	
	.comment-img {
		float: left;
		width: 1rem;
		height: 1rem;
		margin-right: .2rem;
		margin-top: .2rem;
	}
	
	.border-top {
		border-bottom: 1px solid #f5f5f5;
		padding-bottom: .3rem;
		overflow: hidden;
	}
</style>