<template>
	<div class="header-container">
		<div class="img-container">
			<router-link to="/weekend/index" class="back-btn iconfont">&#59031;</router-link>
			<img src="../../../assets/images/item3.jpg" class="header-img" />
			<div class="show-images">
				<span class="pic-icon iconfont">&#59180;</span>
				<span>1</span>
				<span>/</span>
				<span>11</span>
			</div>
		</div>
		<div class="header-content">
			<h3 class="place-title">超值热卖 来自地下三千米的温暖【温都水城两馆周末成人票】</h3>
			<div class="place-price-content">
				<span class="place-price-header">&yen;</span>
				<span class="place-price-selling">127</span>
				<span class="place-price-footer">起/张</span>
				<span class="place-price-market">&yen;178/张</span>
			</div>
			<div class="comment">
				<div class="starlevel">
					<span class="star-icon iconfont">&#58955;&#58955;&#58955;&#58955;&#58955;</span>
					<span class="comment-score">5.0分</span>
					<span class="comment-totalnum">32评论</span>
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
	}
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
	    content: ' ';
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: 100%;
	    height: 0;
	    border-top: .02rem dashed #ccc;
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
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