<template>
	<div class="chosenplace">
		<h2 class="hot-top"><span class="hot-title">精选玩法</span></h2>
		<ul class="chosen-list">
			<li class="icon-item" v-for="item in goods" :key="item.id">
    			<div class="chosen-imgwrapper">
	    			<router-link :to="'/weekendtour/detail/id='+item.id" class="back-btn iconfont">
	    				<img :src="item.src" class="chosen-img">
	    			</router-link>
    			</div>
				<div class="chosen-info">
					<h5 class="chosen-title">{{item.title}}</h5>
					<div class="chosen-des"><span>{{item.address}}</span></div>
					<div class="chosen-price1">
						<div class="chosen-price">
							<span class="chosen-newprice">&yen;{{item.sellPrice}}</span>
							<span class="fen">/份</span>
							<span class="chosen-oldprice">&yen;{{item.marketPrice}}</span>
						</div>
					</div>
				</div>
    		</li>
		</ul>
	</div>
</template>


<script>
	export default {
		data () {
		    return {
		    	
		    }
		},
	  	props:["goods"]
	}
</script>

<style scoped>
	.chosenplace{
		background: #fff;
		margin-top: .2rem;
	}
	.chosenplace:before{
		content: "";
		position: absolute;
	    left: 0;
	    width: 100%;
	    height: .02rem;
		background: #c9cccd;
		transform: scaleY(.51);
	}
	.hot-top{
		overflow: hidden;
		position: relative;
		height: .88rem;
		margin-left: .2rem;
		font-size: .28rem;
		line-height: .88rem;
		text-indent: .15rem
	}
	.hot-title:before{
		content: " ";
		overflow: hidden;
		position: absolute;
		top: .32rem;
		left: 0;
		height: .25rem;
		width: .06rem;
		background: #1ba9ba;
		-webkit-border-radius: .04rem;
		-moz-border-radius: .04rem;
		border-radius: .04rem;
	}
	.hot-list{
		padding: 0 .2rem .11rem;
	}
	.hot-item{
		background: #eee;
		overflow: hidden;
		width: 300px;
		padding-bottom: 33.3%;
		height: 0;
		margin-bottom: .2rem;
	}
	.hot-img{
		width: 300px;
		height: 100px;
	}
	.chosen-imgwrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 43.75%; /*高和宽的比*/
		background: url("http://simg3.qunarzz.com/piao/images/loading_camel.gif") center center no-repeat;
	}
	.chosen-list{
		
	}
	.chosen-img{
		width: 100%	;
	}
	.chosen-info{
		position: relative;
	    padding: .2rem;
	}
	.chosen-title{
		font-size: .32rem;
		line-height: .46rem;
		max-height: .92rem;
		overflow: hidden;
		margin-bottom: .2rem;
		color: #212121;
		word-wrap: break-word;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.chosen-des span{
		color: #9e9e9e;
		font-size: .24rem;		
	}
	.chosen-price1{
		position: absolute;
	    top: -.65rem;
	    left: 0;
	    height: .45rem;
	    line-height: .45rem;
	}
	.chosen-price{
		position: relative;
	    float: left;
	    height: .45rem;
	    padding: 0 .1rem;
	    background: #ff9800;
	    color: #fff;
	    line-height: .45rem;
	}
	.chosen-price:after{
		content: " ";
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: -.14rem;
	    width: 0;
	    height: 0;
	    border-top: .45rem solid #ff9800;
	    border-right: .14rem solid transparent;
	}
	.chosen-newprice{
    	line-height: .45rem;
		font-size: .255rem;
		font-weight: bold;
		color: #fff;
	}
	.chosen-oldprice{
		color: #fff;
	    font-size: .18rem;
	    text-decoration: line-through;
	}
	.fen{
		font-size: .2rem;
		margin-left: -3px;
	}
</style>