<template>
<div>
	<div class="tab-box">
 		<div class='tab'>
 			<b class='tab-name' @click="handleToggleClick">{{tabChoosedSight}}</b>
 			<span class='tab-arrow-sign'></span>
 			<span class='tab-arrow-circle' @click="handleToggleClick"></span>
 			<ul class='tab-inner' v-show="show">
 				<li v-for='(tab,key,index) in tabs' @click="addClassFun(index,tab)" :class="{item:true,tabSelected:tabChoosedIndex==index}":tabChoosedSight="tab.sight" >
 					{{tab.sight}}
 				</li>
 			</ul>
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
			show: false,
			tabs: {
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
			tabChoosedIndex: "0",
			tabChoosedSight: '故宫'
    	}
	},
	methods: {
		handleToggleClick(){
			this.show == true ? this.show = false : this.show = true;
		},
		addClassFun(index,tab) {  
		    this.tabChoosedIndex = index;  
		    this.tabChoosedSight = tab.sight;
		    this.show = false;
		}
	},
	components: {
		"index-content":Content
	}

}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	
	.tab {
		min-width: 1.12rem;
    	position: fixed;
	    left: .05rem;
	    top: 37.5%;
	    height: .6rem;
	    margin-top: -1rem;
	    background: #ff7200;
	    border-radius: .16rem;
		margin-left: .12rem;
		z-index: 200;	
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
	    top: .28rem;
	    right: .18rem;
	    width: 0;
	    height: 0;
	    border-width: .08rem .08rem 0;
	    border-style: solid;
	    border-color: #ed3d00 transparent transparent;
    }
    .tab-arrow-circle {
    	position: absolute;
	    z-index: 1;
	    top: -10%;
	    right: .08rem;
	    width: .28rem;
	    height: .28rem;
	    margin-top: .18rem;
	    border: .04rem solid #ed3d00;
	    background: #fff;
	    border-radius: 50%;
    }
    .tab-inner {
	    position: absolute;
	    top: .62rem;
	    left: 0;
	    width: 6rem;
	    z-index: 10;
	}
    .tab-inner li {
	    float: left;
	    width: 1.98rem;
	    min-height: .6rem;
	    margin: 0 .02rem .02rem 0;
	}
	.tab-inner .tabSelected {
	    background-color: #683478;
	}
	.item {
	    overflow: hidden;
	    height: .6rem;
	    background: #ff9900;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    text-align: center;
	    display: block;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .6rem;
	} 
</style>
