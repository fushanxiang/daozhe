<template>
	<div>
		<div class="park-header">
			<span class="iconfont header-left" @click="handleBackClick">&#xe600;</span><span class="header-title">详情介绍</span>
		</div>
		<div class="park-empty"></div>
		<div class="park-reference">入园参考</div>
		<div class="park-opening-time">
			<p class="park-title">开放时间</p>
			<p class="park-opentime">7月8日-8月31日：9:30-23:00（星光夜场：17:00-23:00）</p>
		</div>
		<div class="park-expand border-top" v-show="mode" @click="handleModeClick">展开更多<span class="iconfont more-arrow">&#xe6a6;</span></div>
		<water-prompt v-show="prompt"></water-prompt>
		<water-features></water-features>
		<water-traffic></water-traffic>
	</div>	
</template>

<script>
  	import WaterPrompt from './waterprompt.vue'
	import WaterFeatures from './waterfeatures.vue'
	import WaterTraffic from './watertraffic.vue'
	
	export default {
		data () {
			
			return {
				prompt:false,
				mode:true
			}
		},
		components:{
			"water-prompt":WaterPrompt,
			"water-features":WaterFeatures,
			"water-traffic":WaterTraffic
		},
		methods:{
			handleBackClick:function(){
				window.history.go(-1);
			},
			handleModeClick:function(){
				this.mode=false;
				this.prompt=true;
			}
			
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.park-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		display: flex;
		background: #00bcd4;
	    color: #fff;
	}
	.header-left {
		width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    margin-left:.2rem ;
	}
	.header-title {
		flex:1;
		overflow: hidden;
	    margin: 0 auto;
	    padding-right:1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	}
	.park-empty {
		width: 100%;
		height:.88rem;
	}
	/*入园参考*/
	.park-reference {
		position: relative;
	    overflow: hidden;
	    height: .9rem;
	    line-height: .9rem;
	    padding: 0 .34rem;
	    font-size: .3rem;
	    font-weight: bold;
	    color: #212121;
	}
	
	.park-reference::after {
	    content: " ";
	    position: absolute;
	    top: .32rem;
	    left: .2rem;
	    width: .06rem;
	    height: .28rem;
	    background: #00bcd4;
	    border-radius: .04rem;
	}
	.park-opening-time {
	    padding: 0 .2rem;
	    padding-top: .1rem;
	    padding-bottom: .06rem;
	}
	.park-title {
		font-weight: bold;
		line-height: .42rem;
	    font-size: .28rem;
	    color: #212121;
	}
	.park-opentime {
		word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    color: #616161;
	}
	/*展示更多*/
	.park-expand {
		line-height: .88rem;
    	text-align: center;
	}
	.more-arrow {
		font-size: .24rem;
	    padding-left: .16rem;
	    color: #9e9e9e;
	}
</style>