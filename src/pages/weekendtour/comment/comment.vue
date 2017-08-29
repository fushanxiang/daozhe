<template class="box">
	<div class="comments-box">
		<ul class="comments-list">
		    <li class="comments-item">
	            <div class="comments-stars">
	                <span class="star-icon iconfont" v-for="i in 5">
                    	<span>&#58955;</span>
                    </span>
	                <span class="comments-date">x*8&nbsp;2017-08-03</span>
	            </div>
	            <div v-bind:class="[flag ? 'comments-desc-min' : 'comments-desc-max' ]">
	                <p class="comments-text">风景很好，洞内温度很低，建议带外套。夏天去特别爽。但是上山前有村民会拦车。如果坐观光车上山一人10元，下山一人5元。选择坐的话，讨价还价一下。我们一行6人，上下一次各20元。其实上面有车位的，你可以不理村名，自己开上去的。就是村民会不让你开，要么花点钱坐车，要么自己走上去。其实不远，走上去大概花10-15分钟吧。票价有点高，感觉仙栖洞跟这个差不多。</span></p>
	            </div>
	            <div class="comments-descmore"><span class="comments-descmore-icon iconfont" v-bind:class="[flag ? 'descmore-icon-down' : 'descmore-icon-up' ]" v-on:click="handleClick">&#59031;</span></div>
	            <div class="comments-img-wrapper">
	                <img class="comments-img" src="//img1.qunarzz.com/piao/fusion/1708/91/f605a8780751d702.jpg_240x240_6c632654.jpg" data-src="//img1.qunarzz.com/piao/fusion/1708/91/f605a8780751d702.jpg_240x240_6c632654.jpg" alt="石花洞国家地质公园" style="">
	                <img class="comments-img" src="//img1.qunarzz.com/piao/fusion/1708/2b/ba9fc608f2660502.jpg_240x240_60fa8f5f.jpg" data-src="//img1.qunarzz.com/piao/fusion/1708/2b/ba9fc608f2660502.jpg_240x240_60fa8f5f.jpg" alt="石花洞国家地质公园" style="">
	                <img class="comments-img" src="//img1.qunarzz.com/piao/fusion/1708/59/0e5f141236380a02.jpg_240x240_2bb51691.jpg" data-src="//img1.qunarzz.com/piao/fusion/1708/59/0e5f141236380a02.jpg_240x240_2bb51691.jpg" alt="石花洞国家地质公园" style="">
	                <img class="comments-img" src="//img1.qunarzz.com/piao/fusion/1708/ef/10bb5c68c90ffc02.jpg_240x240_2b4f43a4.jpg" data-src="//img1.qunarzz.com/piao/fusion/1708/ef/10bb5c68c90ffc02.jpg_240x240_2b4f43a4.jpg" alt="石花洞国家地质公园" style="">
	            </div>
		    </li>
		    <li class="comments-item">
		        <div class="comments-content">
	                <div class="comments-stars">
	                    <span class="star-icon iconfont" v-for="i in 5">
	                    	<span>&#58955;</span>
	                    </span>
                		<span class="comments-date">x*8&nbsp;2017-08-03</span>
	                </div>
		            <div class="comments-desc">
		                <p class="comments-text">不错 价格优惠 不过要提前一小时团购</p>
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
	    		flag: true
	   		}
	     
		},
		props: ['goodsInfo', 'comments', 'id'],
		//created() {
			//console.log(comments);
			//console.log(id);
			//console.log(goodsInfo);
			//for(var i in comments){
				//console.log(comments[i].id);
				//console.log(id);
		    	/*if(comments[i].id  == id){
		    		var data = comments[i]
		    		console.log(data);
		    		return ;
		    	}*/
		    //}
		//}
		methods: {
	        handleClick() {
	            this.flag = !this.flag;
	           
	        }
	    }
	}
</script>

<style scoped>
	.box{
		padding: 1.08rem 0 .2rem;
		background: #f1f1f1;
	}
	.comments-box{
		margin-top: 0.88rem;
	}
	.comments-list{
		width: 100%;
    	background: #fff;
	}
	.comments-item{
		width: 280px;
		margin: 0 auto;
		padding: .3rem 0;
	}
	.comments-stars{
		overflow: hidden;
		margin-bottom: .2rem;
	}
	.star-icon {
		float: left;
		color: #fc6343;
	}
	.comments-date{
		float: right;
	}
	.comments-desc-min{
		max-height: 2rem;
		overflow: hidden;
	}
	.comments-desc-max{
		overflow: hidden;
	}
	.comments-text{
		width: 100%;
		height: 100%;
		color: #999;
	    font-size: .28rem;
	    line-height: .4rem;
		overflow: hidden;
		white-space: wrap;
		text-overflow: ellipsis;
	}
	.comments-descmore{
	    line-height: .4rem;
	    color: #999;
	    text-align: center;
	    margin-top: .15rem;
	}
	.comments-descmore-icon{
		display: block;
		width: .32rem;
		height: .32rem;
		margin: 0 auto;
	}
	.descmore-icon-down{
		transform: rotate(-90deg);
	}
	.descmore-icon-up{
		transform: rotate(90deg);
	}
	.comments-img-wrapper{
		overflow: hidden;
		width: 280px;
    	margin: .15rem auto 0;
	}
	.comments-img{
	    width: 1.05rem;
	    height: 1.05rem;
	    vertical-align: top;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	    position: relative;
	    float: left;
	    margin: .1rem .2rem 0 0;
	}
</style>