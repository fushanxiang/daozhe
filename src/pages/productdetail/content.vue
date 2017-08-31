<template>
<div class="bg"  ref="box" >
   <iscroll-view  class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" @scrollStart="log" ref="iscroll":scrollerStyle="{color:'red'}"  :options="{preventDefault: false}" >
			<div class="content">
				<div class="tab-list">
					<div class="caption">
						<div class='inner'>
							<h2 class='hot-sale-area'>热销区</h2>
						</div>
					</div>
				    <content-imperial v-if="showImperial" @getLength="handleGetLength">{{getContend}}</content-imperial>
					<content-temple v-if="showTemple" @getLength="handleGetLength">{{getContend}}</content-temple>
					<content-summer v-if="showSummer" @getLength= "handleGetLength">{{getContend}}</content-summer>	
				</div>	
			</div>
	</iscroll-view>
</div>
</template>
<script>
import ContentImperial from './content_imperial.vue'
import ContentTemple from './content_temple.vue'
import ContentSummer from './content_summer.vue'

export default {
    mounted() {
	    const $scroller = this.$refs.iscroll.$refs.scroller;
    },
	data() {
		return {
			showImperial: true,
			showTemple: false,
			showSummer: false,
			perItemHeight: 110,
			scroll: {}
    	}
	},
	props: ["tabChoosedIndex"],
	components: {
    	"content-imperial": ContentImperial,
    	"content-temple": ContentTemple,
    	"content-summer": ContentSummer
    },
    computed: {
    	getContend:function(){
    		this.showImperial = this.showTemple  = this.showSummer = false;
    		if(this.tabChoosedIndex == 0){
    			this.showImperial = true;
    		}else if(this.tabChoosedIndex == 1){
    			this.showTemple = true;
    		}else if(this.tabChoosedIndex == 2){
    			this.showSummer = true;;
    		}
    	}
    },
    methods: {
    	handleGetLength(length,getLatterItems) {
	    	this.height = this.perItemHeight * (length + 1.6);
	    	this.$refs.box.style.height = this.height + "px";
	    	this.itemsInfo = getLatterItems;
	    },
	    log(iscroll) {   
	        this.scroll = iscroll;
	    },
		handleScroll() {
	        console.log("滚");
	    },
	    scrollToTop() {
		    const iscroll = this.$refs.iscroll;
		    iscroll.scrollTo(0, 0, 100);
		    iscroll.refresh();
	    },
	    pullDown() {},
	    pullUp() {
	    	var this_ = this;
	    	if(this.tabChoosedIndex == 0){
    			this.$http.get('/static/productDetail_palace.json').then(response => {
					this.someData = response.body;
					this.itemsInfoLatter = this.someData.data.itemsInfo2;	
					for(var i = 0 ; i< this.itemsInfoLatter.length ; i ++ ){
						this.itemsInfo.push(this.itemsInfoLatter[i]);
					}
					setTimeout(() => {
						this.scroll.refresh();
					},1000)
				},response => {
					console.log("url输入有误")
				});

    		}else if(this.tabChoosedIndex == 1) {

    			this.$alert("没有新内容了！去看看其他地方吧").then(function(){
					this_.scrollToTop();
				})	
    		}else if(this.tabChoosedIndex == 2) {
    			this.$alert("没有新内容了！去看看其他地方吧").then(function(){
					this_.scrollToTop();
				})
    		}
	    }   
	}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.bg{
		width: 100%;
		position: fixed;
		top:4.6rem;
	}
	.content-box{
		padding-top: .2rem;
		background: #FFE6AA;
    }
    .content{
		background: #FFE6AA;
		position: relative;
	    margin: 0 .2rem;
	    padding-bottom: .1rem;
    }
    .tab-list .caption{
    	background: #fdae08;
    	position: relative;
	    height: .5rem;
    }
    .inner{
    	background-color: #ff4444;
    	position: absolute;
	    top: -0.08rem;
	    left: 50%;
	    width: 2.12rem;
	    height: 0.48rem;
	    margin-left: -0.9rem;
    }
    .hot-sale-area{
	    padding: 0.08rem 0;
	    color: #fff;
	    font: 0.28rem;
	    text-align: center;
    }
    .scroll-view {
    	padding-top:0.2rem; 
	    touch-action: none;
	    background: #FFE6AA;
	    position: fixed;
	    top:34.4%;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    overflow: hidden;
	}
   .scroller {
	    background: blue;
	}
</style>
