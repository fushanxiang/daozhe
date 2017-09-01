<template>
	<div id="tour">
		 <div class="tab-main">
		   <ul :class='{tab:true, "tab-fixed":tabFixed, "border-bottom":true}'>
             <li v-for="(item, index) in tabInfo.index.tabs" :class="{tabs:true, active: index==activeIndex}" @click="hadleTabItemClick(index)"
              :key="index + 'tab'">{{item.title}}</li>
            </ul>
           <tourinstrctor :tourItinerary="tabInfo.tourItinerary" @update="handleClick"></tourinstrctor>
           <tourcost :expenseExplanation="tabInfo.expenseExplanation"></tourcost>
           <tourdescription :instructions="tabInfo.instructions" :userComment="tabInfo.userComment"></tourdescription>           
		 </div>
	</div>
</template>.index.tabs
<script>
 import tourcost from './tab-details/tourCost.vue'
 import tourinstrctor from './tab-details/tourInstrctor.vue'
 import tourdescription from './tab-details/tourDescription.vue'
 import IScrollView from 'vue-iscroll-view'
 import IScroll from 'iscroll'
 export default{
 		data(){
 			return {
 				mainOffsetTop: 0,
				tabOffsetHeight: 0,
				headerOffsetHeight: 0,
				expenseElementOffsetTop: 0,
				expenseElementOffsetHeight: 0,
				haveGetOffset: false,
        show:true
       
 			}
 		},
 		  props: [
 		  	"scrollTop", "tabInfo"
 		  ],
 		
 		components:{
            tourcost:tourcost,
            tourinstrctor:tourinstrctor,
            tourdescription:tourdescription,
 		            },
 		methods:{
               hadleTabItemClick: function (index) {
               	if (index == 0) {
               		document.body.scrollTop = this.mainOffsetTop - this.headerOffsetHeight;
               	} else if (index == 1) {
               		document.body.scrollTop = this.mainOffsetTop + this.expenseElementOffsetTop - this.tabOffsetHeight - this.headerOffsetHeight;
               	} else if (index == 2) {
               		document.body.scrollTop = this.mainOffsetTop + this.instructionsElementOffsetTop - this.tabOffsetHeight - this.headerOffsetHeight;
               	}
               },
               handleClick:function(){
                	this.$emit('updateShow');
                

               }
            },
            computed: {
            	tabFixed: function () {
            		return this.scrollTop > this.mainOffsetTop -42;
            	},
            	activeIndex: function () {
            		var index = 0;
            		var criticalValue_1 = this.mainOffsetTop + this.expenseElementOffsetTop - window.innerHeight / 2;
            		var criticalValue_2 = this.mainOffsetTop + this.expenseElementOffsetTop + this.expenseElementOffsetHeight - window.innerHeight / 2;
            		if (this.scrollTop <= criticalValue_1) {
            			index = 0
            		} else if (this.scrollTop > criticalValue_1 && this.scrollTop <= criticalValue_2) {
            			index = 1;
            		} else {
            			index = 2;
            		}
            		return index;
            	}
            },
            updated: function () {
            	if (!this.haveGetOffset) {
            		var tabMainElement = document.querySelectorAll('.tab-main');
            		var tabElement = document.querySelectorAll('.tab');
            	  var headerElement = document.querySelectorAll('.fix');
            		var expenseElement = document.querySelectorAll('#tourCost');
            		var instructionsElement = document.querySelectorAll('#tourDescription');
            		this.mainOffsetTop = tabMainElement[0].offsetTop;
            		this.tabOffsetHeight = tabElement[0].offsetHeight;
            	  //this.headerOffsetHeight = headerElement[0].offsetHeight;
                this.headerOffsetHeight=40;
                this.expenseElementOffsetTop = expenseElement[0].offsetTop;
            		this.expenseElementOffsetHeight = expenseElement[0].offsetHeight;
            		this.instructionsElementOffsetTop = instructionsElement[0].offsetTop;
                this.haveGetOffset = true;
            	}
            }
 }
</script>
<style scoped>
        .tab-main {
        	position: relative;
        	padding: 0 .2rem;
        }
        .tab {
        	left: 0;
        	right: 0;
        	top: 0;
        	display: flex;
        	height: .84rem;
        	font-size: .28rem;
        	background: #fff;
        	z-index: 2;
        }

        .tab-fixed {
        	position: fixed;
        	left: 0;
        	right: 0;
        	top: .8rem;
            z-index:888;
            padding: 0 .2rem;

        }

        .tabs {
        	flex: 1;
        	text-align: center;
        	width: 30%;
        	height: .84rem;
        	line-height: .84rem;
        	color: #616161
        }
        .fix{
          z-index: 99999
        }

        .active {
        	box-sizing: border-box;
        	color: #00afc7;
        	border-bottom: .04rem solid #00afc7;
        }
        .scroll-view {
          touch-action: none;
          position: fixed;
          top: 216px;
          bottom: 0px;
          left: 0;
          right: 0;
          overflow: hidden;
          padding: 0 .2rem;
        }
        #tour{
        	background: #fff;
        }

    	.mp-tab-group {
    	    min-height: .6rem;
    	}
    	.mp-prddetail-group {
    	    margin-top: .2rem;
    	    padding: .01rem 0;
    	    background-color: #fff;
    	}
    	.mp-tab {
        overflow: hidden;
        margin-bottom: -.2rem;
        background-color: #fff;
        }
    	.mpg-flexbox{
           display: flex;
           width: 100%;
    	}
    	.mp-tab-item {
    	    display: block;
    	    height: .4rem;
    	    padding: .2rem 0;
    	    color: #616161;
    	    font-size: .28rem;
    	    line-height: .4rem;
    	    text-align: center;
    	}
    	.mpg-flexbox-item, .mpg-flexbox-layout {
    	    flex: 1;
    	}
    	.mp-tab-item.mp-tab-active {
    	    position: relative;
    	    border-bottom: .04rem solid #00afc7;
    	    color: #00afc7;
    	}
    .scroll-view {
      touch-action: none;
      position: fixed;
      top: 216px;
      bottom: 100px;
      left: 0;
      right: 0;
      overflow: hidden;
      padding: 0 .2rem;
    }
    .iconfont{
    	color: #616161;
    }
</style>