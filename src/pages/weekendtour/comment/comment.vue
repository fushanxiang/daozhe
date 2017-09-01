<template class="box">
	<div class="comments-box">
		<ul class="comments-list" v-on:click="handleClick">
		    <li class="comments-item" v-for="(item, index) in comments.info" :key="'item'+index">
	            <div class="comments-stars">
	                <span class="star-icon iconfont" v-for="i in item.stars">
                    	<span>&#58955;</span>
                    </span>
	                <span class="comments-date">{{item.username}}&nbsp;{{item.date}}</span>
	            </div>
	            <div v-bind:class="flag[index] ? 'comments-desc-min' : 'comments-desc-max' ">
	                <p class="comments-text" v-bind:class="flag[index] ? 'comments-text-less' : ''">{{item.content}}</span></p>
	            </div>
	            <div class="comments-descmore">
	            	<i class="comments-descmore-icon iconfont" v-bind:class="[item.isIconHide ? 'comments-img-hide' : '', flag[index] ? 'descmore-icon-down' : 'descmore-icon-up', 'icon'+index]">&#59031;</i>
	            </div>
	            <div class="comments-img-wrapper" v-bind:class="[item.imgsSrc ? '' : 'comments-img-hide' ]">
	                <img class="comments-img" v-for="imgItem in item.imgsSrc" :src="imgItem" :data-src="imgItem" alt="石花洞国家地质公园" style="">
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
		props: ['comments','flag'],
		methods: {
	        handleClick(event) {
	        	var lis = event.currentTarget.getElementsByTagName('li');
	        	for(var i=0; i<this.flag.length; i++){
	        		var ele = lis[i].getElementsByTagName('i')[0];
	        		if(ele == event.target){
	        			var temp = !this.flag[i];
	        			this.flag.splice(i,1,temp);
	        		}
	        	}       
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
	}
	.comments-text-less{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
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
	.comments-img-hide{
		display: none;
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