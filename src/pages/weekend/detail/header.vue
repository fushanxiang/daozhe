<template>
	<div class="header-container">
		<div class="img-container">
			<router-link to="/weekend/index" class="back-btn iconfont">&#59031;</router-link>
			<img :src="goodsInfo.src" class="header-img" />
			<div class="show-images">
				<span class="pic-iconh iconfont">&#59180;</span>
				<span>1</span>
				<span>/</span>
				<span>{{goodsInfo.imgsSrc ? goodsInfo.imgsSrc.length : 0}}</span>
			</div>
		</div>
		<div class="header-content">
			<h3 class="place-title">{{goodsInfo.title}}</h3>
			<div class="place-price-content">
				<span class="place-price-header">&yen;</span>
				<span class="place-price-selling">{{goodsInfo.sellPrice}}</span>
				<span class="place-price-footer">起/张</span>
				<span class="place-price-market">&yen;{{goodsInfo.marketPrice}}/张</span>
			</div>
			<div class="comment">
				<div class="starlevel">
					<span class="star-icon iconfont" v-for="item in goodsInfo.starLevel">
						<span>&#58955;</span>
					</span>
					
					<span class="comment-score">{{goodsInfo.starLevel}}分</span>
					<span class="comment-totalnum">{{goodsInfo.comments ? goodsInfo.comments.length : 0}}评论</span>
					<span class="next-icon iconfont">&#58918;</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	props:["goodsInfo"]
}
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	.img-container {
		position: relative;
	}
	.back-btn {
		position: absolute;
		top: .1rem;
		left: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		color: #fff;
		font-size: .60rem;
		text-align: center;
		font-weight: 900;
	}
	.header-img {
		width: 100%;
	}
	.show-images {
		position: absolute;
		right: .2rem;
		bottom: .3rem;
		min-width: 1rem;
		padding: 0 .15rem;
		line-height: .4rem;
		background: rgba(0,0,0,.3);
		color: #fff;
		border-radius: .3rem;
		font-size: .24rem;
		text-align: center;
	}
	.pic-icon {
		font-size: .26rem;
	}
	.header-content {
		position: relative;
		padding: .3rem .2rem 0 .2rem;
		border-bottom: .02rem solid #ccc;
	}
	.place-title {
		font-size: .32rem;
		line-height: .38rem;
	}
	.place-price-content {
		margin: .3rem 0 .1rem 0;
	}
	.place-price-header {
		color: #ff8300;
		font-size: .24rem;
	}
	.place-price-selling {
		color: #ff8300;
		font-size: .36rem;
	}
	.place-price-footer {
		color: #9e9e9e;
		font-size: .24rem;
	}
	.place-price-market {
		color: #9e9e9e;
		font-size: .24rem;
		text-decoration: line-through;
	}
	.comment {
		position: relative;
		line-height: .9rem;
	}
	.comment:before {
		content: "";
		position: absolute;
		left:0;
		width: 100%;
		border: .02rem dashed #ccc;
	}
	.star-icon {
		color: #00bcd4;
	}
	.comment-score {
		margin-left: .1rem;
    	color: #616161
	}
	.comment-totalnum {
		float: right;
	    padding-right: .3rem;
	    color: #616161;
	    font-size: .28rem;
	}
	.next-icon {
		position: absolute;
		top: 0;
		right: .06rem;
		width: .2rem;
		height: .9rem;
		color: #9e9e9e;
	}
</style>