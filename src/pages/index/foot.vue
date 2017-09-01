<template>
	<div class="footer">
		<ul class="footer-list">
			<li class="list-item">
				<a class='item-type' href="#">
					<div class="iconfont">&#xe635;</div>
					<span class="footer-title">机票</span>
				</a>
			</li>
			<li class="list-item">
				<a class='item-type' href="#">
					<div class="iconfont">&#xe609;</div>
					<span class="footer-title">酒店</span>
				</a>
			</li>
			<li class="list-item">
				<a class='item-type' href="#">
					<div class="iconfont">&#xe698;</div>
					<span class="footer-title">公寓</span>
				</a>
			</li>
			<li class="list-item">
				<a class='item-type last' href="#">
					<div class="iconfont">&#xe608;</div>
					<span class="footer-title">更多</span>
				</a>
			</li>
		</ul>
		<ul class="footer-logon">
			<li class="logon-item">登陆</li>
			<li class="logon-item">我的订单</li>
			<li class="logon-item">我的订单</li>
			<li class="logon-item">我的订单</li>
			<li class="logon-item">关于我们</li>
		</ul>
		<ul class="footer-version">
			<li class="touch version-type">触屏版</li>
			<li class="telephone version-type">手机版</li>
		</ul>
		<div class="foot-copyright">Qunar 京ICP备05021087<span>意见反馈</span></div>
	</div>
</template>

<script>
	export default{
        data() {
        	return {

        	}
        }
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
	.footer{
		width: 100%;
		background: #f3f3f3;
		padding-left: 0;
		margin: 0;
	}
	.footer-list{
        width: 100%;
	    height: .5rem;
	    padding: .15rem .1rem 0;
	    overflow: hidden;
	}
	.list-item{
		box-sizing: border-box;
	    height: .62rem;
	    width: 25%;
	    float: left;
	}
	.item-type{
		display: block;
	    height: .44rem;
	    width: 100%;
	    font-size: .24rem;
	}
	.item-type .iconfont{
		float: left;
	    width: .44rem;
	    height: .44rem;
	    color:#9e9e9e;
	    background-size: 175px 50px;
	}
	.footer-title{
		float: left;
	    display: inline-block;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #9e9e9e;
	    margin: .06rem 0 0 .1rem;
	    border-bottom: 1px solid #acacac;
	    font-size: .24rem;
	}
	.footer-list .last{
		border-left: 1px solid #acacac;
		padding-left: .3rem;
	}
	.footer-logon{
		width: 100%;
		height:.78rem;
		border-bottom: 1px solid #cacaca;
	}
	.logon-item{
		width:20%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
		float: left;
		text-align: center;
		color: #25a4bb;
	    font-size: .28rem;
	    line-height: .78rem;
	}
	.footer-version{
		width: 100%;
		padding: .2rem 0 0 0;
        overflow: hidden;
	}
	.footer-version .version-type{
		color: black;
		width:48%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
		float: left;
		font-size: .28rem;
	}
	.footer-version .touch{
		text-align: right;
		padding-right: .1rem;
	}
	.footer-version .telephone{
		text-align: left;
		padding-left: .1rem;
	}
	.foot-copyright{
		width: 100%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
		color: #9e9e9e;
	    text-align: center;
	    font-size: .28rem;
	    padding: .2rem;
	}
</style>