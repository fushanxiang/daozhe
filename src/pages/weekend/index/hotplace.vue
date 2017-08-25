<template>
	<div>
		<div class="chosen">
			<h2 class="hot-top"><span class="hot-title">周末精选</span></h2>
			<ul class="hot-list">
				<li class="hot-item"><img src="../../../assets/images/item1.jpg" class="hot-img"></li>
				<li class="hot-item"><img src="../../../assets/images/item2.jpg" class="hot-img"></li>
			</ul>
		</div> 
		<div class="chosenplace">
			<h2 class="hot-top"><span class="hot-title">精选玩法</span></h2>
			<ul class="chosen-list">
				<li class="chosen-item">
					<div><img src="../../../assets/images/item3.jpg" class="chosen-img"></div>
					<div class="chosen-info">
						<h5 class="chosen-title">超值热卖 来自地下三千米的温暖【温都水城两馆周末成人票】</h5>
						<div class="chosen-des"><span>昌平区·温都水城</span></div>
						<div class="chosen-price1">
							<div class="chosen-price">
								<span class="chosen-newprice">&yen;127</span>/份<span class="chosen-oldprice">&yen;178</span>
							</div>
						</div>
					</div>
				</li>
				<li class="chosen-item">
					<div><img src="../../../assets/images/item4.jpg" class="chosen-img"></div>
					<div class="chosen-info">
						<h5 class="chosen-title">超值热卖 来自地下三千米的温暖【温都水城两馆周末成人票】</h5>
						<div class="chosen-des"><span>昌平区·温都水城</span></div>
						<div class="chosen-price1">
							<div class="chosen-price">
								<span class="chosen-newprice">&yen;127</span>/份<span class="chosen-oldprice">&yen;178</span>
							</div>
						</div>
					</div>
				</li>
				<li class="chosen-item">
					<div><img src="../../../assets/images/item5.jpg" class="chosen-img"></div>
					<div class="chosen-info">
						<h5 class="chosen-title">超值热卖 来自地下三千米的温暖【温都水城两馆周末成人票】</h5>
						<div class="chosen-des"><span>昌平区·温都水城</span></div>
						<div class="chosen-price1">
							<div class="chosen-price">
								<span class="chosen-newprice">&yen;127</span>/份<span class="chosen-oldprice">&yen;178</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
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
	.chosen{
		margin-top: .2rem;
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
	.hot-top:before{
		width: 100%;
		height: .02rem;
		background: #c9cccd;
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
		font-size: .2rem;
		color: #fff;
    	line-height: .45rem;
	}
	.chosen-oldprice{
		color: #fff;
	    font-size: .18rem;
	    text-decoration: line-through;
	}
</style>
