<template>
	<div class="pd-ticket-main">
	<div class="pd-ticket-group">
	
			
			<h3 class="pd-ticket-type">
				<span class="pd-ticketype-ticket"></span>
				促销票
			</h3>
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
	</div>
	<tree-item></tree-item>
	<tree-item></tree-item>
	<tree-item></tree-item>
	</div>
</template>

<script>
	import TreeItem from './treeitem/treeitem.vue'

export default {
  name: 'hello',
  data () {
    return {
      name: 'detailtree'
    }
   
  },
   components:{
    	"tree-item":TreeItem
    }
}
</script>


<style scoped>
  .pd-ticket-main{
  	background:#f5f5f5;
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
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)  no-repeat;
    margin-right: .1rem;
    background-size: .5rem .5rem;
    background-position: .2rem center;
	}	                                                                                             
</style>

