<template>
	<div>
		<div class="prdcard-con">
		    <div class="prdcard-title ellipsis2">【大内御讲9:00场】蓝琪儿格格带您穿越故宫（不含故宫门票）</div>
		    <div class="prdcard-pricecon">
		        <em class="prdcard-priceicon">¥</em>
		        <span class="prdcard-pricetext">65</span>
		        <span class="prdcard-gray prdcard-marketprice">票面价<span class="underline">¥88</span></span>
		    </div>
		
		    <div class="prddetail-tagarea">   
		        <div class="prddetail-ul prod-hassupplier">
		            <div class="prddetail-li">
		                <img class="playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">可订明日
		            </div>
		            <div class="prddetail-li">
		                <img class="playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">支持退款
		            </div>
		            <div class="prddetail-supplier prddetail-text">去哪儿直销</div>
		        </div>
		    </div>
		</div>
		<router-link to="/ping" class="commentsinfo-con">
	        <span class="comment-icon"></span>
	        <span class="starlevel">
	            <span class="iconfont starlevel-gain" data-score="5.0" style="width:100%">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</span>
	        </span>
	        <span class="comments-tagscore">5.0分</span>
	        <span class="comments-totalnum">64条评论&nbsp;
	          	<span class="iconfont comments-rightarrow">&#xe626;</span>
	        </span>
		</router-link>
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
	
	.prdcard-con {
	    position: relative;
	    margin-top: -.1rem;
	    padding: .2rem .2rem 0 .2rem;
	    background: #fff;
	    border-radius: .1rem .1rem 0 0;
	}
	.prdcard-title {
	    padding-bottom: .1rem;
	    line-height: .5rem;
	    font-size: .36rem;
	}
	.ellipsis2, .ellipsis2 {
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.prdcard-pricecon {
	    line-height: .48rem;
	}
	.prdcard-priceicon {
	    color: #ff8300;
	    font-size: .24rem;
	}
	.prdcard-pricetext {
	    margin-left: -.06rem;
	    color: #ff8300;
	    font-size: .48rem;
	}
	.prdcard-gray {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.prdcard-marketprice {
	    margin-left: .16rem;
	}
	.prdcard-gray {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.underline {
	    text-decoration: line-through;
	}
	.prod-hassupplier {
	    position: relative;
	    padding-right: 1.72rem;
	}
	.prddetail-tagarea {
		overflow: hidden;
	}
	.prddetail-ul {
	    font-size: .24rem;
	    color: #9e9e9e;
	}
	.prddetail-li {
	    float: left;
	    white-space: nowrap;
	    margin: .1rem 0;
	    margin-right: .4rem;
	}
	.playlimit-icon {
	    vertical-align: top;
	    width: .22rem;
	    height: .22rem;
	    margin-right: .04rem;
	}
	.prddetail-supplier {
		display: inline;
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    margin-top: .1rem;
	    width: 1.2rem;
	    white-space: nowrap;
	    text-align: right;
	    text-overflow: ellipsis;
	}
	.prddetail-text{
	    font-size: .24rem;
	    color: #9e9e9e;
	}
	/*评论*/
	.commentsinfo-con {
	    position: relative;
	    margin-bottom: .2rem;
	    margin-top: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.linkarea {
	    position: absolute;
	    z-index: 2;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}
	.comment-icon {
	    position: relative;
	    top: .08rem;
	    display: inline-block;
	    width: .36rem;
	    height: .36rem;
	    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
	    margin-left: .2rem;
	    background-size: .4rem 3rem;
	}
	.commentsinfo-con .starlevel {
	    width: 1.6rem;
	    top: .04rem;
	}
	.starlevel {
	    display: inline-block;
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}
	.starlevel-gain {
	    letter-spacing: .06rem;
	    z-index: 2;
   		color: #00bcd4;
	}
	.comments-tagscore {
	    display: inline-block;
	    margin-left: .3rem;
	    color: #616161;
	}
	.comments-totalnum {
	    float: right;
	    position: relative;
	    top: .25rem;
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
	}
	.comments-rightarrow {
	    position: relative;
	    top: .02rem;
	    font-size: .24rem;
	}
</style>