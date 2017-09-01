<template>
	<header class="header">
		<a class="header-left iconfont" @click="handleClick">&#xe600;</a>
		<router-link :to="{name:'search'}">
			<div class="header-title">
				<span class="iconfont icon-search">&#xe60a;</span>
				<span class="single-line">景点/目的地/主题</span>
			</div>
		</router-link>
		<div class="header-right">
			<router-link :to="{name:'city',params: {id:123}}">
				<span class="nav-city">北京<span class="downarrow"></span></span>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
        handleClick() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header {
		position: fixed;
	    overflow: hidden;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	    z-index: 99;
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
	    margin: .14rem 1.16rem .14rem .8rem;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.single-line {
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .6rem;
	    top: 0;
	    width: 3.8rem;
	    text-align: left;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #d5d5d5;
	}
	.icon-search {
	    position: absolute;
	    left: .1rem;
	    color: #d5d5d5;
	}
	.icon-search::before{
		content: '';
	}
	.header-right{
		position: absolute;
		top: 0;
		right: 0;
		margin-right: .1rem;
		line-height: .88rem;
		width: 1rem;
		text-align: center;
	}
	.nav-city {
		margin-left: -0.04rem;
		color: #fff;
	}
	.downarrow {
		position: relative;
		top: -0.03rem;
		left: 0.04rem;
		display: inline-block;
	    width: 0;
	    height: 0;
	    border-left: 0.11rem solid transparent;
	    border-right: 0.11rem solid transparent;
	    border-top: 0.11rem solid #FFFFFF;
	}
</style>
