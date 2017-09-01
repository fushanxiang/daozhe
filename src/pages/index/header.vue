<template>
	<div class="header">
		<a class="header-left iconfont">&#xe600;</a>
		 <router-link to="/search">
			 <div class="header-title">
				<span class="iconfont icon-search">&#xe6a4;</span >
				<span class="single-line">输入城市/景点/游玩主题</span>
			</div>
		</router-link>
		<div class="header-right">
			<router-link :to="{name:'city',params: {id:123}}">
				<span class="nav-city">{{$store.getters.perfectCity}}<span class="downarrow"></span>
				</span>
			</router-link>
		</div>
	</div>
	
</template>

<script>
export default {
	mounted(){
	},
	data () {
		return {
    	}
	},
	methods: {
		changeCity: function() {
			this.$store.dispatch("fiveSecondsChangeCity",{
				city:"云南"
			});
		}
	}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header {
		position: relative;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
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
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
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
		margin-right: .02rem;
		line-height: .88rem;
		width: 1.28rem;
		text-align: center;
	}
	.nav-city {
		margin-left: -0.01rem;
		display: inline-block;
		width:.9rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color:#fff;
	}
	.downarrow {
		position: absolute;
		top: 50%;
		right: 0.08rem;
		margin-top: -.26rem;
		display: inline-block;
	    width: 0;
	    height: 0;
	    border-left: 0.12rem solid transparent;
	    border-right: 0.12rem solid transparent;
	    border-top: 0.12rem solid #FFFFFF;
	}
</style>