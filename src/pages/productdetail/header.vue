<template>
	<div class="header-box">
		<header class="header">
			<a class="header-left iconfont">&#xe600;</a>
			<div class="header-title">
				北京景点讲解
			</div>
			<div class="header-right">
				<span class="nav-city">
					<span class="tower iconfont">&#xe601;</span>
					首页
				</span>
			</div>
		</header>
		<div class='banner-box'>
			<img class='banner' src="//img1.qunarzz.com/piao/fusion/1707/10/fdbb01bcdb3b0802.jpg" alt="banner">
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	}

}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header-box{
		overflow: hidden;
	}
	.header {
		position: fixed;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #1BA9BA;
	    text-align: center;
	    color: #fff;
	    padding-left: .1rem;
	    z-index: 12;
	}
	.header-left {
		float: left;
	    display: block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    margin: .02rem 0 0 -0.08rem;
	    margin-top: 0.02rem;
	    color: #fff;
	    font-size: .40rem;
	    text-align: left;
	}
	.header-title {
	    position: relative;
	    height: .6rem;
	    margin: .14rem 1.32rem .14rem .8rem;
	    line-height: .6rem;
	    border-radius: .06rem;
	    font-size: .32rem;
	}
	.banner-box{
		position: fixed;
		top:.88rem;
	}
	.single-line {
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #e4e7ea;
	}
	.icon-search {
	    position: absolute;
	    left: .2rem;
	    color: #e4e7ea;
	}
	.header-right{
		position: absolute;
		top: 0;
		right: 0;
		width: 1.26rem;
		text-align: center;
	}
	.tower{
		display: block;
		margin-bottom: .02rem;
	}
	.nav-city {
		display: block;
		margin-right: -0.04rem;
		font-size: .24rem;
		padding-top: .2rem;
	}
	.downarrow {
		position: relative;
		top: -0.05rem;
		left: 0.03rem;
		display: inline-block;
	    width: 0;
	    height: 0;
	    border-left: 0.12rem solid transparent;
	    border-right: 0.12rem solid transparent;
	    border-top: 0.12rem solid #FFFFFF;
	}
	.banner-box{
		height: 184.56px;
		width:100%;
		background-image:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504089486357&di=67d242ade647c3a538f3ce2349419ffa&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0137875543a8770000019ae99c3a31.jpg");
		background-position:center; 
		background-size: cover;
	}
	.banner {
	    width: 100%;
	    vertical-align: top;
    }
</style>
