<template>
	<div>
		<header class="header">
			<a class="header-left iconfont">&#xe624;</a>
			<div class="header-title">
				门票9元起
			</div>
			<div class="header-right">
				<p class="iconfont">&#xe601;</p>
				首页
			</div>
		</header>
		<div class="topic">
			<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/banner_v3.jpg" alt="">
			<p class="imgcamel">
				<img  :src="myurl" alt="" width="100%" height="100%">
			</p>
			<p class="imgcamel">
				<img v-show="show" class="imgshow" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/camel_eye.png" alt="" width="100%" height="100%">
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			myurl:"https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/camel_normal.png",
			show:true
		}
    },
    created:function(){
    	var this_ = this;
    	setInterval(function(){	
    		this_.show = !this_.show
    		/*console.log(this_.show)*/
    	},2000)
    }
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.topic{position:relative}
	.topic img{height:35.625%;width:100%;}
	.header{
		position: relative;
		overflow: hidden;
		background: #1ba9ba;
		height: 44px;
		text-align: center;
		color: white;
	}
	.header-left{
		float: left;
		color: white;
		margin: .3rem 0 0 .1rem;
	}
	.header-right{
		float: right;
		margin: 0.19rem .1rem 0 0;
		font-size: 10px;
	}
	.header-title{
		position: absolute;
		margin: .3rem 0 0 2.8rem;
	}
	ul li ol{list-style:none;}
	li:last-child{
		background: #ff2d0a;
	}
	.imgtop{
		position: relative;
	}
	.imgcamel{
		position: absolute;
		bottom: 0;
		right: 2px;
		width: 100px; 
	}
</style>
