<template>
	<div class="recommend">
		<h3 class="recommend-title">相关推荐</h3>
		<div class="prddetail-content">
            <div class="recommenditem" v-for="item in recommendInfo" :key="item.id">
                <a href="#" class="recommenditem-link">
                    <div class="recommenditem-imgwrap">
                         <img class="recommenditem-img" :src="item.src" :alt="item.alt"/>
                    </div>
                    <div class="recommenditem-content">
                        <div class="recommenditem-title ellipsis">{{item.title}}</div>
                        <div class="recommenditem-info">
                            <div class="recommenditem-price">¥
                            	<span class="recommenditem-pricenum">{{item.pricenum}}</span>
                            </div>
                            <div class="recommenditem-more">查看&gt;</div>
                        </div>
                    </div>
                </a>
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
		props:["recommendInfo"]
	}
</script>

<style scoped>
	.recommend{
		position: relative;
	}
	.recommend-title {
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}
	.recommend-title::after {
	    content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    border-radius: .04rem;
	}
	.prddetail-content {
	    color: #9e9e9e;
	    font-size: .28rem;
	    line-height: .44rem;
	    overflow: hidden;
	    padding: .15rem 0;
	    margin: 0 .2rem;
	}
	.recommenditem {
	    float: left;
	    width: 50%;
	}
	.recommenditem-link {
	    display: block;
	    margin: 0 .08rem .16rem;
	    background: #fff;
	}	
	.recommenditem-imgwrap {
	    overflow: hidden;
	    position: relative;
	    width: 100%;
	    height: 0;
	    padding-bottom: 56.25%;
	    background: #cfcfcf url(//s.qunarzz.com/piao_topic/image/common/default/288x288.png) 0 bottom no-repeat;
	    background-size: 100% auto;
	}
	.recommenditem-img {
	    width: 100%;
	}
	.recommenditem-content {
	    position: relative;
	    height: 1.64rem;
	}
	.recommenditem-title {
	    padding: .14rem .2rem 0 .2rem;
	    line-height: .38rem;
	    font-size: .28rem;
	    color: #212121;
	}
	.ellipsis{
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.recommenditem-pricenum {
	    font-size: .4rem;
	    margin-left: .04rem;
	}
	.recommenditem-info {
	    position: absolute;
	    left: .2rem;
	    right: .2rem;
	    bottom: 0;
	    line-height: .7rem;
	}
	.recommenditem-price {
	    float: left;
	    font-size: .24rem;
	    color: #ff8300;
	}
	.recommenditem-more {
	    float: right;
	    font-size: .28rem;
	    color: #9e9e9e;
	}
</style>