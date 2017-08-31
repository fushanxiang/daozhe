<template>
	<div>
		<div class="baseinfo">
			<router-link to="/map">
				<div class="baseinfo-address" id="card-adress">
					<p class="baseinfo-address-txt">
						<span class="iconfont baseinfo-address-icon">&#xe615;</span>广东省广州市番禺区迎宾路长隆旅游度假区内
						<span class="iconfont baseinfo-address-arrow">&#xe626;</span>
					</p>
				</div>
			</router-link>

			<router-link to="/waterpark" class="baseinfo-intro border-top">
				<p class="baseinfo-intro-txt">
					<span class="iconfont baseinfo-intro-icon">&#xe646;</span>查看景点简介及开放时间<span class="iconfont baseinfo-address-arrow">&#xe626;</span>
				</p>
			</router-link>
		</div>
		
		<router-link to="/discussall">
			<div class="commentsinfo-con">
				<span class="comment-icon"></span>
				<span class="mpf-starlevel">
					<i class="iconfont mpf-starlevel-gain" style="width:98.00000000000001%">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</i>
				</span>
				<span class="comments-tagscore">4.9分</span>
				<span class="comments-totalnum">14976评论&nbsp;
					<span class="iconfont comments-rightarrow">&#xe626;</span>
				</span>
			</div>
		</router-link>
		
		<div class="announce-con" id="announce-con">
			<div class="announce-inner">
				<span class="iconfont announce-icon">&#xe602;</span>【暑期促销】2017年8月25日-8月31日期间，购买水上乐园相关成人票（包含门票，套票，夜场票），每名购票成人可携带1名1.5米以下儿童免费入园（仅限水上乐园，其他园区不可携带，嘉宾票，教师和司机陪票，中小学生票，情侣票不享受此优惠）<span class="iconfont announce-closeicon">&#xe626;</span>
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
	@import "../../assets/font/iconfont.css";	
	.baseinfo {
	    position: relative;
	    top: -.1rem;
	    padding: .1rem .2rem 0 .2rem;
	    margin-bottom: .1rem;
	    background: #fff;
	    border-radius: .1rem .1rem 0 0;
	}
	.baseinfo-opentime, .baseinfo-address, .baseinfo-intro {
	    display: block;
	    position: relative;
	    height: .88rem;
	    color: #212121;
	    line-height: .88rem;
	}
	.baseinfo-address-txt, .baseinfo-intro-txt {
	    overflow: hidden;
	    padding-right: .56rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.baseinfo-opentime, .baseinfo-address, .baseinfo-intro {
	    display: block;
	    position: relative;
	    height: .88rem;
	    color: #212121;
	    line-height: .88rem;
	}
	.baseinfo-address-txt, .baseinfo-intro-txt {
	    overflow: hidden;
	    padding-right: .56rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.baseinfo-opentime-icon, .baseinfo-address-icon, .baseinfo-intro-icon {
	    margin-right: .2rem;
	    color: #9e9e9e;
	}
	.baseinfo-address-arrow {
	    position: absolute;
	    right: 0;
	    color: #b9b9b9;
	}
	.baseinfo-intro-icon{
	    position: relative;
	    top: .02rem;
	}
	/*评分*/
	.commentsinfo-con {
	    margin-bottom: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.comment-icon {
	    position: relative;
	    top: .08rem;
	    display: inline-block;
	    width: .36rem;
	    height: .36rem;
	    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
	    margin-left: .2rem;
	    margin-right: .1rem;
	    background-size: .4rem 3rem;
	}
	.commentsinfo-con .mpf-starlevel {
	    top: .04rem;
	}
	.mpf-starlevel {
	    display: inline-block;
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}
	.mpf-starlevel-gain{
		font-size: .3rem;
		color: #00afc7;
	}
	.comments-tagscore {
	    display: inline-block;
	    margin-left: .1rem;
	    color: #00afc7;
	}
	.comments-total {
	    float: right;
	    display: block;
	    margin-bottom: .2rem;
	}
	
	.comments-totalnum {	    
	   	padding-top: .01rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
	    float: right;
	}
	.comments-rightarrow {
	    position: relative;
	    top: .02rem;
	}
	
	/*促销*/
	.announce-con {
	    background-color: #fdeede;
	    color: #f1441a;
	    margin-bottom: .2rem;
	    height: .88rem;
	    line-height: .88rem;
	    padding-left: .23rem;
	}
	.announce-inner {
	    padding-right: .6rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    position: relative;
	}
	.announce-icon {
	    color: #f67353;
	    margin-right: .1rem;
	}
	.announce-closeicon {
	    right: .2rem;
	    position: absolute;
	    color: #c7bcaf;
	}
</style>