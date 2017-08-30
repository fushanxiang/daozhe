<template>
<div class="bg"  ref = "ContentBox" >
   <iscroll-view  class="scroll-view" 
        @pullUp="pullUp"
        @pullDown="pullDown"  
        @scrollStart="log" 
        ref="iscroll" 
        :scrollerStyle="{color: 'red'}"
        :options="{preventDefault: false}"    

    >
		<div class = "content-box" >
			<div class = "content">
				<div class = "tab-list">
					<div class = "caption">
						<div class = 'inner'>
							<h2 class = 'name'>热销区</h2>
						</div>
					</div>
				    <content-palace v-if="showPalace" @getLength = "handleGetLength" >{{getContend}}</content-palace>
					<content-temple v-if="showTemple" @getLength = "handleGetLength">{{getContend}}</content-temple>
					<content-summer v-if="showSummer" @getLength = "handleGetLength">{{getContend}}</content-summer>
					
				</div>	
			</div>
		</div>
	</iscroll-view>
</div>
</template>

<script>

import ContentPalace from './content_palace.vue'
import ContentTemple from './content_temple.vue'
import ContentSummer from './content_summer.vue'


import Vue from 'vue'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
Vue.use(IScrollView, IScroll);

import Alert from 'vue-alert-component'
Vue.use(Alert)




export default {
    mounted () {
	    const $scroller = this.$refs.iscroll.$refs.scroller
    },
	data () {
		return {
			showPalace:true,
			showTemple:false,
			showSummer:false,
			contentHeight:"11",
			perItemHeight:110,
			scroll:{}
			
    	}
	},
	props:["tabChoosedIndex"],
	components:{
    	"content-palace": ContentPalace,
    	"content-temple": ContentTemple,
    	"content-summer": ContentSummer
   
    },
    computed:{
    	getContend:function(){
    		this.showPalace = false;
			this.showTemple = false;
			this.showSummer = false;
    		if(this.tabChoosedIndex == 0){
    			this.showTemple = this.showTemple = false;
    			this.showPalace = true;
    			//console.log(this.contentHeight)
    		}else if(this.tabChoosedIndex == 1){
    			this.showTemple = true;
    		}else if(this.tabChoosedIndex == 2){
    			this.showSummer = true;
    		}

    	}

    },
    methods: {
    	handleGetLength(length,getLatterItems){
	    	//console.log("haha,handleGetLength",+ length);
	    	this.height = this.perItemHeight * (length+1.6);
	    	this.$refs.ContentBox.style.height = this.height + "px";
	    	this.$refs.ContentBox.style.backgroundColor = "pink";
	    	console.log(getLatterItems + "getLatterItems");
	    	this.itemsInfo = getLatterItems;
	    },
	    log (iscroll) {
	        console.log("iscroll")
	        this.scroll = iscroll;
	    },
		handleScroll:function(){
	      console.log("滚")
	    },
	    load (iscroll) {
     	   console.log("aaa");
	    },
	    scrollToTop () {
	      const iscroll = this.$refs.iscroll;
	      iscroll.scrollTo(0, 0, 100)
	      iscroll.refresh()
	    },
	    pullDown () {
	     	 //console.log('Pull down.')
	    },
	    pullUp(){
	    	var this_ = this;
	    	if(this.tabChoosedIndex == 0){
    			this.$http.get('/static/productDetail_palace.json').then(response => {
					this.someData = response.body;
					this.itemsInfoLatter = this.someData.data.itemsInfo2;	
					for(var i = 0 ; i< this.itemsInfoLatter.length ; i ++ ){
						this.itemsInfo.push(this.itemsInfoLatter[i]);
					}
					setTimeout(()=>{
						this.scroll.refresh();
					},1000)
					
				},response => {
					console.log("url输入有误")
				});

    		}else if(this.tabChoosedIndex == 1){
    			this.$alert("没有新内容了！去看看其他地方吧").then(function(){
					this_.scrollToTop();
				})
    			
    		}else if(this.tabChoosedIndex == 2){
    			this.$alert("没有新内容了！去看看其他地方吧").then(function(){
					this_.scrollToTop();
				})
    		}

    		console.log("pop_up")
	    }
	   
	}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.bg{
	
		background: #FFE6AA;
		height:1300px;
	}
	.content-box{
		padding-top: .2rem;
		background: #FFE6AA;
    }
    .content{
		background: #FFE6AA;
		position: relative;
	    margin: 0 .5rem;
	    padding-bottom: .1rem;
    }
    .tab-list{
    	
    }
    .tab-list .caption{
    	background: #fdae08;
    	position: relative;
	    height: .5rem;
    }
    .inner{
    	background-color: #ff4444;
    	position: absolute;
	    top: -4px;
	    left: 50%;
	    width: 106px;
	    height: 24px;
	    margin-left: -45px;
    }
    .name{
	    padding: 4px 0;
	    color: #fff;
	    font: 14px/16px;
	    text-align: center;
    }
    .scroll-view {
	    touch-action: none;
	    background: #FFE6AA;
	    position: fixed;
	    top:34.6%;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    overflow: hidden;
	}
   .scroller {
	  background: blue
	}
</style>
