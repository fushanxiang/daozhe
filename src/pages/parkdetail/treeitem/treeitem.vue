<template>
	<div>
	<div class="pd-ticket-group">
	
			
			<h3 class="pd-ticket-type">
				<span class="pd-ticketype-ticket"></span>
				促销票
			</h3>
			
		<div>
		<div class="pd-ticketype-ticket-item pd-border-top">
			<h5 class="pd-ticket-type-name">[长隆周年庆]长隆水上乐园成人票（仅限8月28日）</h5>
			<div class="pd-ticket-type-price" @click="handleClick(2)">
			¥<em class="pd-price-num">149</em><span class="pd-ticket-numword">起</span><span class="pd-ticket-type-extend iconfont">{{isActive2?'&#xe62d;':'&#xe62e;'}}</span>
			</div>
		</div>
		
		<div :style="isActive2?'display:none':'display:block'">
		<div class="pd-ticketype-ticket-item2 pd-border-top2">
			<div class="pd-ticket-main">
			<div>
			<span class="pd-ticket-onedayitem">启程旅游</span>
			<h6 class="pd-ticket-title">【暑期特惠】广州长隆水上乐园亲子票1大1小</h6>
			<p><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon">&#xe64d;</span>18:00前可订今日</span><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon"> &#xe627;</span> 条件退</span></p>
			</div>
			</div>
			<div class="pd-ticket-side" >
				<div>
				<p class="pd-ticket-sale">
				¥<em class="pd-price-num">262</em>
				</p>
				<p class="pd-ticket-cost">
				票面价:¥<em>280</em>
				</p>
				<p class="pd-ticket-btn">预订</p>
			</div>
			</div>
		</div>
		<div class="pd-ticketype-ticket-item2 pd-border-top">
		<div class="pd-ticket-main">
			<div>
			<span class="pd-ticket-onedayitem">启程旅游</span>
			<h6 class="pd-ticket-title">【暑期特惠】广州长隆水上乐园亲子票1大1小</h6>
			<p><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon">&#xe64d;</span>18:00前可订今日</span><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon"> &#xe627;</span> 条件退</span></p>
			</div>
			</div>
			<div class="pd-ticket-side" >
				<div>
				<p class="pd-ticket-sale">
				¥<em class="pd-price-num">262</em>
				</p>
				<p class="pd-ticket-cost">
				票面价:¥<em>280</em>
				</p>
				<p class="pd-ticket-btn">预订</p>
			</div>
			</div>
			
		</div>
			<div class="pd-more-refresh pd-border-top" @click="handleClick(3)" :style="isActive3?'display:block':'display:none'">
			查看剩余报价
			<span class="pd-ticket-type-extend iconfont">&#xe62d;</span>
		</div>
		</div>
		</div>	


		<div class="pd-ticketype-ticket-item pd-border-top">
			<h5 class="pd-ticket-type-name">[长隆周年庆]长隆水上乐园成人票（仅限8月28日）</h5>
			<div class="pd-ticket-type-price">
			¥<em class="pd-price-num">149</em><span class="pd-ticket-numword">起</span><span class="pd-ticket-type-extend iconfont">&#xe62d;</span>
			</div>
		</div>
		<div :style="isActive?'display:none':'display:block'">
				<div class="pd-ticketype-ticket-item pd-border-top">
			<h5 class="pd-ticket-type-name">[长隆周年庆]长隆水上乐园成人票（仅限8月28日）</h5>
			<div class="pd-ticket-type-price">
			¥<em class="pd-price-num">149</em><span class="pd-ticket-numword">起</span><span class="pd-ticket-type-extend iconfont">&#xe62d;</span>
			</div>
		</div>

		<div class="pd-ticketype-ticket-item pd-border-top">
			<h5 class="pd-ticket-type-name">[长隆周年庆]长隆水上乐园成人票（仅限8月28日）</h5>
			<div class="pd-ticket-type-price">
			¥<em class="pd-price-num">149</em><span class="pd-ticket-numword">起</span><span class="pd-ticket-type-extend iconfont">&#xe62d;</span>
			</div>
		</div>
		</div>
		<div class="pd-more-refresh pd-border-top" @click="handleClick(1)" :style="isActive?'display:block':'display:none'">
			查看剩余产品
			<span class="pd-ticket-type-extend iconfont">&#xe62d;</span>

		</div>
	</div>

	</div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      isActive:true,
      isActive2:true,
      isActive3:true,
    }
  },
  methods:{
  	handleClick(type){
  		switch(type){
  			case 1:this.isActive=false; break;
  			case 2:this.isActive2=!this.isActive2; break;
  			default:this.isActive3=false;
  		}
  		
  	}
  }
}
</script>


<style scoped>
.pd-border-top{
	border-top:1px solid #dadada;
}
.pd-border-top2{
	border-top:1px dashed #dadada;
}
.pd-border-bottom{
	border-bottom:1px solid #dadada;
}
.pd-ticket-group{
	position: relative;
	margin-top: .2rem;
    background: #fff
}
.pd-ticket-type{
	overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
    text-indent: .4rem;
}
.pd-ticketype-ticket{
	display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .26rem;
    left: .2rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
	}	
	.pd-ticketype-ticket-item{
		    padding: .24rem .2rem;
		   	position:relative;
	} 
	.pd-ticketype-ticket-item2{
		 padding:.25rem;
		 position:relative;
		 background:#f5f5f5;
		 display: flex;
    	 width: 100%;
	}
	.pd-ticket-main{
		display:flex;
		flex:2.92;
		align-item:center;
	}
	.pd-ticket-onedayitem{
		display: inline-block;
	    overflow: hidden;
	    line-height: .34rem;
	    max-width: 2.5rem;
	    padding: 0 .2rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #666;
	}
	.pd-ticket-title{
		  	padding-top: 0;
		    color: #888;
		    font-size: .24rem;
		    line-height: .36rem;
		    display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
	}
	.pd-ticket-desctag{
		display: inline-block;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .32rem;
	    white-space: nowrap;
	    margin-right:.25rem;
	}
	.pd-ticket-tagicon{
		    display: inline-block;
		    margin-right: .08rem;
		    color: #1ba9ba;
		    font-size: .2rem;
	}
	.pd-ticket-side{
		display:flex;
		flex:1;
		border-left:1px solid #dadada;
		padding-left: .2rem;
		align-item:center;
	}
	.pd-ticket-sale{
		color: #ff9800;
		height: .32rem;
		display: block;
	    font-size: .24rem;
	    line-height: .28rem;
	    text-align: center;
	}
	.pd-price-num{
	margin-left: .04rem;
    font: .24rem Tahoma,Helvetica,sans-serif;
    line-height: .3rem;
	}
	.pd-ticket-cost{
		width: 150%;
	    margin: 1px -25%;
	    color: #9e9e9e;
	    text-decoration: line-through;
	    transform: scale(.8);
		display: block;
	    overflow: hidden;
	    height: .28rem;
	    line-height: .28rem;
	    text-align: center;
	    font-size:.18rem;
	}
	.pd-ticket-btn{
		height: .6rem;
	    background: #ff9800;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .6rem;
	   	text-align:center;
	    border-radius: .06rem;
	}
	 .pd-ticket-type-name {
	 	margin-right: 1.8rem;
	    color: #333;
	    font-size: .3rem;
	    line-height: .48rem; 
	 } 
	 .pd-ticket-type-price{
			right: .15rem;
		    margin-top: -.28rem;
		    color: #ff9800;
		   	overflow: hidden;
		    position: absolute;
		    top: 50%;
		    height: .4rem;
		    line-height: .4rem;
		   	font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
	 } 
	 pd-ticket-cost{
	 width: 150%;
    margin: 1px -25%;
    color: #9e9e9e;
    text-decoration: line-through;
    transform: scale(.8);
	 }
	 .pd-price-num{
	 	margin-left: .04rem;
    	font-size: .36rem;
	 } 
	 .pd-ticket-numword{
	 	    display: inline-block;
		    color: #9e9e9e;
		    font-size: .24rem;
        	transform: scale(.8);
	 }
	 .pd-ticket-type-extend{
	 	right: .2rem;
	    margin-top: -.22rem;
	    color: #bbb;
	    font-size: .24rem;
	 } 
	 .pd-more-refresh{
	 	height: .8rem;
	    background: #fff;
	    color: #616161;
	    line-height: .8rem;
	    text-align: center;
	    z-index: 2;
	 }                                                                                                                     
</style>

