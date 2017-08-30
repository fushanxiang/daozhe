<template>

	

	<div class="packages-box">

	
		<div class="packages">
			<div class="packages-content">
				<h3 class="title packages-title"><span class="word">套餐包括</span></h3>
				<div class="packages-des">
			        <p class="packages-des-content" v-html="goodsInfo.combo"></p>
			    </div>
			</div>
			
			<h3 class="title purchase-notes" v-on:click="toogleClick">
				<span class="word">购买须知</span>
				<span class="next-icon iconfont">&#58918;</span>
			</h3>

			<div class="Pop-ups" v-bind:class="[show ? 'block' : 'none' ]"> <!-- 购买须知弹窗 -->
				<div class="box">
					<div class="top">

						<i class="iconfont close" v-on:click="toogleClick">&#xe622;</i>

						<div class="Pop-title-box">
							<h2 class="Pop-title">{{goodsInfo.title}}</h2>
						</div>

						<div class="Pop-headdetail">
							<div class="item1">
								<img src="../../../assets/images/qunar.png" class="qunar">
								<span class="item-text">去哪儿直销</span>
							</div>
							<div class="item2">
								<i class="iconfont icon">&#xe64d;</i>
								<span class="item-text">21:59前可订今日</span>
							</div>
							<div class="item3">
								<i class="iconfont icon">&#xe604;</i>
								<span class="item-text">入园保障</span>
							</div>
						</div>

					</div>


					<div class="middle">

					

							
					</div>

					<div class="bottom">
						<div class="b-left">
							<span class="Online-Payment">在线支付</span>
							<span class="b-icon">&yen;</span>
							<span class="price">{{goodsInfo.sellPrice}}</span>
						</div>
						<div class="b-right">
							<a href="javascript:;" class="Booking">立即预订</a>
						</div>
					</div>

				</div>
			</div>

			<h3 class="title fun-around">
				<span class="word">周边好玩</span>
				<span class="next-icon iconfont">&#58918;</span>
			</h3>
		</div>
	</div>
</template>

<script>
export default {

	data () {
	    return {
			show : false
	    }   
	},
	methods:{
		toogleClick:function(){
			this.show = !this.show;
		}
	},
	mounted () {
	    
	},
	props : ["goodsInfo"]
		
}
</script>

<style scoped>
<<<<<<< HEAD
	@import "../../../assets/font/iconfont.css";

	

	.scroll-view{
		touch-action: none;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		padding: .2rem;
		overflow: hidden;
	}



=======
>>>>>>> d025038699a5a513aaea0b29214993421ce96472
	.block{
		display: block;
	}
	.none{
		display: none;
	}
	.packages-box{
		padding-top: .2rem;
		background: #f1f1f1;
	}
	.packages{
	    padding: 0 .2rem;
	    background-color: #fff;
	}
	.packages:before,.packages:after{
		content:"";
		position: absolute;
		left: 0;
		width: 100%;
		height: .02rem;
		background: #c9cccd;
	} 
	.title{
		overflow: hidden;
		position: relative;
		height: .88rem;
		font-size: .28rem;
		line-height: .88rem;
		text-indent: .15rem;
	}
	.word:before{
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
	.purchase-notes,.fun-around{
		border-top: .02rem dashed #efefef;
	}
	.next-icon {
		position: absolute;
		top: 0;
		right: 0;
		color: #9e9e9e;
	}
	.packages{
		padding: 0 .2rem;
	}
	.packages-des-content{
	    padding-bottom: .15rem;
	    line-height: .48rem;
	    color: #616161;
	}




	/*泽林负责*/
	.Pop-ups{
		background:rgba(0,0,0,.5);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	.box{
		width: 95%;
		height: 90%;
		background: #fff;
		margin:0 auto;
		margin-top: .55rem;
		position: relative;
	}
	.bottom{
		line-height: 1rem;
		width: 100%;
		height: 1rem;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 101;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
	}
	.b-left,.b-right{
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		line-height: 1rem;
	}
	.b-left{
		position: relative;
		display:flex; 
	}
	.b-right{
	    overflow: hidden;
	    background: #ff9800;
	    color: #fff;
	    font-size: .4rem;
	    text-align: center;
	}
	.Online-Payment{
		margin-left: 10px;
		line-height: 1.15rem;
		color: #999;
    	font-size: .24rem;
	}
	.b-icon{
		line-height: 1.15rem;
		color: #ff9800;
		margin-left: 2px;
    	font-size: .24rem;
	}
	.price{
	    color: #ff9800;
	    font-size: .48rem;	
	    line-height: 1rem;
	    overflow: hidden;
	    white-space: nowrap;
		text-overflow: ellipsis;
	}
	.Booking{
		color: #fff;
	}
	.b-left::before{
	    content: "";
		width: 100%;
	    height: .02rem;
		background: #dadada;
	    position: absolute;
	    left: 0;
	    top: 0;
	    transform: scaleY(.51);
	}
	.top{
		line-height: .4rem;
		position: relative;
		padding:.2rem;
	    color: #333;
    	font-size: .33rem;
	    word-wrap: break-word;
    	word-break: break-all;
    	font-weight: bold;
    	overflow: hidden;
	}
	.Pop-title-box{
	    margin-right: .5rem;
	    font-size: .32rem;
	    font-weight: bold;
	    overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.close{
	    display: inline-block;
	    position: absolute;
	    top: .266rem;
	    right: .44rem;
	    width: .4rem;
	    height: .4rem;
	    font-size: .66rem;
	    color: #b5b5b5;
	    cursor: pointer;
	}
	.Pop-headdetail{
		font-size: 0;
		overflow: hidden;
	    position: relative;
	    margin-top: .3rem;
	    font-weight: normal;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.Pop-headdetail .icon{
		color: #1ba9ba;
        font-size: .24rem;
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    vertical-align: bottom;
	    line-height: 1;
	    margin-bottom: -2px;
	    -webkit-font-smoothing: antialiased;
	}
	.qunar{
		width: .32rem;
   	 	height: .32rem;
 	    border-radius: .06rem;
	}
	.item-text{
	    display: inline-block;
	    height: .24rem;
	    color: #666;
	    font-size: .24rem;
	    line-height: .24rem;
	    white-space: nowrap;
	    margin-left: 5px;
	}

	.item1,.item2,.item3{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.middle{
		overflow: hidden;
		position: absolute;
		top: auto;
		right:0;
		bottom: 1rem;
		left: 0;
    	height: 7.5rem;
	}
</style>