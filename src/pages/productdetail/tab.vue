<template>
<div>
	<div class="tab-box">
	 	<div class = 'tab-outer'>
	 		<div class = 'tab'>
	 			<b class = 'tab-name'  @click="handleToggleClick">{{tabChoosedSight}}</b>
	 			<span class = 'tab-arrow-sign'></span>
	 			<span class = 'tab-arrow-circle' @click = "handleToggleClick"></span>
	 			<ul class = 'tab-inner' v-show="show">
	 				<li 
	 				    v-for = '(tab,key,index) in tabs' 
	 				    @click = "addClassFun(index,tab)" 
	 				    :class = "{item:true,tabSelected: tabChoosedIndex == index}" :tabChoosedSight = "tab.sight"
	 				>
	 					{{tab.sight}}
	 				</li>
	 			</ul>
	 		</div>  
	 	</div>
	</div>
	<index-content :tabChoosedIndex="tabChoosedIndex"></index-content>
	
</div>
</template>

<script>

import Content from './content.vue'

export default {
	data () {
		return {
			show:false,
			tabs:{
				tab1:{
					sight:"故宫",
					id:0
				},
				tab2:{
					sight:"天坛公园",
					id:1
				},
				tab3:{
					sight:"颐和园",
					id:2
				}
			},
			tabChoosedIndex:"0",
			tabChoosedSight:'故宫'
    	}
	},
	methods:{
		handleToggleClick(){
			this.show == true ? this.show = false : this.show = true;
		},
		addClassFun(index,tab) {  
		    this.tabChoosedIndex = index;  
		    this.tabChoosedSight = tab.sight;
		   //console.log(this.tabChoosedSight)
		    this.show = false;
		}
	},
	components:{
		"index-content":Content
	}

}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	
	.tab {
		min-width: 1.12rem;
    	position: absolute;
	    left: 0.05rem;
	    height: 0.6rem;
	    margin-top: -0.64rem;
	    background: #ff7200;
	    border-radius: 8px;
		margin-left: .12rem;	
	}
    .tab-name {
	    border: 0 none;
	    line-height: 0.6rem;
	    text-align: center;
	    color: #fff;
	    padding: 0 .5rem 0 .5rem;
	}
	.tab-arrow-sign {
	    overflow: hidden;
	    position: absolute;
	    z-index: 2;
	    top: 14px;
	    right: 9px;
	    width: 0;
	    height: 0;
	    border-width: 4px 4px 0;
	    border-style: solid;
	    border-color: #ed3d00 transparent transparent;
    }
    .tab-arrow-circle{
    	position: absolute;
	    z-index: 1;
	    top: 50%;
	    right: 4px;
	    width: 14px;
	    height: 14px;
	    margin-top: -9px;
	    border: 2px solid #ed3d00;
	    background: #fff;
	    border-radius: 50%;
    }
    .tab-inner {
	    position: absolute;
	    top: 31px;
	    left: 0;
	    width: 300px;
	    z-index: 10;
	}
    .tab-inner li {
	    float: left;
	    width: 99px;
	    min-height: 30px;
	    margin: 0 1px 1px 0;
	}
	.tab-inner .tabSelected {
	    background-color: #683478;
	}
	.item {
	    overflow: hidden;
	    height: 30px;
	    background: #ff9900;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    text-align: center;
	    display: block;
	    color: #fff;
	    font-size: 14px;
	    line-height: 30px;
	}

</style>
