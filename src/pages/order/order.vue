
<template>
	<div class="box">
	<header class="header">
		<a class="header-left iconfont">&#xe600;</a>
		<div class="header-title">
		<div class="header-content">订单填写</div>
			
		</div>
		<div class="header-right">
			登录
		</div>
	</header>

	<div class="address">
	<div class="address-left">
	<span class="text-font" >
		{{headerTitle}}
	</span>

		<ul class="taglist">
			<li class="taglist-childfirst"><img class="taglist-icontim" src="../../../images/download1.png">{{year}}-{{month}}-{{day}}</li>
			<li class="taglist-childsecond"><img class="taglist-iconright" src="../../../images/download.png">条件退</li>
			
		</ul>

		<ul  class="taglist-second">
			<li><img class="taglist-iconright" src="../../../images/download.png">含餐</li>
			<li><img class="taglist-iconright" src="../../../images/download.png">成人</li>
			<li><img class="taglist-iconright" src="../../../images/download.png">中文</li>
			<li><img class="taglist-iconright" src="../../../images/download.png">7:30</li>
		</ul>
	</div>
	
	<div class="address-right">
		<div class="ticket">
			<span class="num">/张</span><span class="ticket-num">&yen187</span><br/>
			<span class="ticket-back">退票须知</span>
		</div>
		
	</div>

	</div>

	</div>
	
	


	
</template>

<script>

export default {
	
	created(){
		this.$http.get('/static/onedaytour-details.json').then(response => {        	
            var data = response.body.data.index.headerTitle;          	
            this.headerTitle = data;
            console.log(this.headerTitle)
        }, response => {
            console.log("ajax error");
        });

	},
	data () {

		return {
			headerTitle:"",
			year:new Date().getFullYear(),
			month:new Date().getMonth()+1,
			day:new Date().getDate(),
    	}
	}
	
}


</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.box{
		background:#edf8f4;
		
		width:100%;

	}
	html{
			background:#edf8f4;
		
		width:100%;
	}
	.header {
		position: relative;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	    line-height:.88rem;
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
	.header-content{
		width:30%;
		height:100%;
		margin:0 auto;
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
		margin-right: .04rem;
		line-height: .88rem;
		width: 1.28rem;
		text-align: center;
	}
	.nav-city {
		margin-left: -0.04rem;
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
	.address{
		
		height:2.7rem;
		
		padding:.2rem;
	}
	
	.address-left{
		float:left;
		width:68%;
		height:100%;
		
	}

	.address-right{
		width:32%;
		height:100%;
		float:left;
		overflow:hidden;
	}

	.text-font{
		font-size:.33rem;
		line-height:.44rem;
	}

	.ticket-num{
		display:inline-block;
		float:right;
		font-size:.4rem;
		color:#ff8300;
	}
	.num{
		margin-top:.06rem;
		display:block;
		float:right;
		color:grey;
	}
	.taglist{
		margin-top:.2rem;
	}
	.taglist-childfirst{
		float:left;
		margin-left:.2rem;
	}
	.taglist-childsecond{
		float:left;
		margin-left:.2rem;
	}
	.ticket{
		float:right;
		margin-top:20px;	
		margin-right:10px;
	}

	.taglist-icontim,.taglist-iconright{
		width:.2rem;
		height:.2rem;
	}

	.taglist-second,.taglist{
			width:100%;
			float:left;
			margin-top:14px;	
	}
	.taglist-second li{
		float:left;
		margin-left:.2rem;
	}
	.ticket-back{
		float:right;
		margin-top:20px;	
		margin-right:.1rem;
		color:#00bcd4;
	}
</style>
