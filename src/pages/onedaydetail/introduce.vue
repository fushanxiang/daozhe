<template>
	<div>
	   	<div class="shadown" v-show="open" @touchmove.prevent></div>
        <transition name="bounce">
            <div v-if="show" id="page-2" class="mpw-dock mpw-dock-fadein" 
                 @touchmove.prevent>
                <div class="mp-booking-info">
                    <h5 class="mp-booking-title">
                        <p class="mpg-ellipsis">
                            {{header.text}}
                        </p>
                    </h5>
                    <p class="mp-booking-price">
                        <span class="mpg-price">¥
                            <em class="mpg-price-num" id="spucategory-price"> 
                                {{header.money}}
                            </em>
                        </span>
                        <span id="spucategory-price-text">{{header.version}}</span>
                        <span class="mp-prdcard-gray mp-prdcard-marketprice">票面价:¥
                            <span mp-role="highMarketPrice">{{header.moneys}}</span>
                        </span>
                        <span mp-role="cashBack"></span>
                    </p>
                </div>
                <div class="mpw-dock-content" mp-role="dockContent" @touchmove.prevent>
                    <div>
                        <div id="specifications-con" style="height: 417.6px; overflow: hidden;">
                            <div style="transition-property: transform; transform-origin: 0px 0px 0px; 
                                transform: translate(0px, 0px) translateZ(0px);">
                                <div class="mp-booking-calendar mpf-border-top">
                                    <h6 class="mp-booking-note">日期选择</h6>
                                    <div class="mp-booking-datecard clrfix" mp-role="calendarList" >
                                        <span class="mpf-datecard mpf-datecard-disabled" 
                                            v-for="(item,index) in itemInfo" :class="{'date-active': dateInd == index}" @click="handleDateClick(index)">
                                            <em class="mpf-datecard-name">{{item.title}}</em>
                                            <strong class="mpf-datecard-detail">{{item.date}}</strong>
                                        </span>
                                        <span class="mpf-datecard mpf-datecard-disabled"  @click="dataClick">
                                            <em class="mpf-datecard-name" >其他日期</em>
                                            <strong class="mpf-datecard-detail"></strong>
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="mp-booking-select mpf-border-top">
                                    <h6 class="mp-booking-note">人群</h6>
                                    <div class="mp-booking-textcard clrfix" mp-role="textList">
                                        <span class="mpf-play-date mpf-play-date-active">成人</span>
                                        <span class="mpf-play-date">儿童</span>
                                    </div>
                                </div>
                                <div class="mp-booking-select mpf-border-top" v-for="item in itemsInfo">
                                    <h6 class="mp-booking-note">{{item.content}}</h6>
                                    <div class="mp-booking-textcard clrfix" mp-role="textList">
                                        <span class="mpf-play-date mpf-play-date-active">{{item.time}}</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="mp-location" >
                                <div class="mp-location-tap" ></div>
                            </div>
                        </div>
                        <a class="mp-booking-btn" id="mp-control-booking" href="javascript:;" 
                            data-click="t_preOrder" @click="changeShow">
                                                                                立即预订
                        </a>
                    </div>
                </div>
                <div class="mpg-iconfont mpw-dock-close iconfont" mp-role="closeButton " 
                    @click="handleClick" ref="adsf">
                    &#xe620;
                </div>
            </div>
        </transition>
		<div class="mp-booking-btn" id="mp-control-booking" @click="bottomClick">
			<a href="javascript:;" mp-role="booking-link" data-teamtype="" data-click="t_goumai" 
				>
				立即预订
			</a>
  		</div>
  		<div  class="otherdata1" >
            <tell-calendar @close="closeClick" v-show="otherdata"></tell-calendar>    
       </div>      
	</div>	
</template>

<script>	
import Calendar from "./calendar.vue"
export default {
    name: 'index',
    created() {
            this.$http.get( '/static/onedaytour-details.json' ).then( response => {
                 var data = response.body.data.bookingTicket;
                 this.header = data.header;
                 this.itemInfo = data.content.item;
                 this.itemsInfo = data.content.items;
            }, response => {
                console.log( "error" )
            });
        },
  	data () {
	    return {
			isActive:false,
			open:false,
            otherdata:false,  
            header:{ },
            itemInfo:[],
            itemsInfo:[],
            show:false,
            dateInd:"",
            flag:false
	    }
  	},
  	methods:{
        handleDateClick(index){
            this.dateInd = index;
            this.flag=true;
        },
	    handleClick(){ 
            this.show = !this.show
		    this.open=!this.open
		    this.isActive=false;
            this.otherdata=false;
            
    	},
	    bottomClick(){
	         this.open=!this.open
            this.show = !this.show
	       //console.log(this.$refs.adsf)
	    },
	    dateClick(){
	    	this.isActive=false
	    },
        dataClick(){
         this.isActive=false,
         this.otherdata=true

        },
        closeClick(){
            this.otherdata=false;
            this.flag=true;

        },
        changeShow(){
             this.show=true;
            if(this.flag){
                 this.$router.push("/purchaseorder")
            }
            else{
               alert("请填写完整信息");
            }
           
        }
  	},
  	components:{
	    "tell-calendar": Calendar
	}
}
</script>
<style scoped>
.date-active {
    background:#00bcd4 !important
}
.shadown {
    position: fixed;
    top:0;
    bottom:0;
    left: 0;
    right: 0;
    background: black;
    opacity: .5;
    z-index: 999;
}
.a {display: block;}
.b {display: none;} 
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(800px);
  }
   
  100% {
    transform: translateY(0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateY(0);
  }
   
  100% {
    transform: translateY(800px);
  }
}  
.mpw-dock {
    position: fixed;
    z-index: 1000;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    transition: transform .3s ease-out;
    height: 533.6px;
}
.mp-booking-info {
    padding: 0 .2rem;
}
.mp-booking-title {
    margin-right: .6rem;
    padding: .3rem 0 .1rem 0;
    font-size: .34rem;
    line-height: .4rem;
}
h1, h2, h3, h4, h5, h6, b, strong {
    font-weight: normal;
}
.mpg-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-booking-price {
    color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.mp-booking-price .mpg-price {
    color: #ff8300;
    margin-right: .06rem;
}
.mp-prdcard-gray, .mp-prdcard-supplier {
    color: #9e9e9e;
    font-size: .24rem;
}
.mp-prdcard-marketprice {
    text-decoration: line-through;
}
element.style {
    height: 417.6px;
    overflow: hidden;
}
.mp-booking-calendar {
    margin: .18rem .2rem 0 .2rem;
    padding-bottom: .3rem;
}
.mp-booking-select {
    margin: 0 .2rem;
    padding-bottom: .3rem;
}
.mp-booking-note {
    padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
}
.mp-booking-datecard .mpf-datecard:first-child {
    margin-left: 0;
}
.mp-booking-datecard .mpf-datecard {
    box-sizing: border-box;
    float: left;
    width: 22.5%;
    height: .86rem;
    overflow: hidden;
}
.mpf-datecard-disabled {
    background: #fff;
}
.mpf-datecard {
    display: inline-block;
    min-width: 1.2rem;
    min-height: .82rem;
    border: .02rem solid #bdbdbd;
    text-align: center;
    border-radius: .1rem;
}
.mp-booking-textcard {
    margin-top: -.15rem;
}
.mpf-play-date-active {
    position: relative;
    border: .02rem solid #00bcd4;
    background: #00bcd4;
    color: #fff;
    overflow: hidden;
}
.mpf-play-date {
    display: inline-block;
    float: left;
    margin-right: .2rem;
    margin-top: .15rem;
    padding: 0 .2rem;
    line-height: .53rem;
    font-size: .28rem;
    border-radius: .1rem;
}
.mp-booking-select {
    margin: 0 .2rem;
    padding-bottom: .3rem;
}
.mpf-datecard-name, .mpf-datecard-detail {
    display: block;
    width: 100%;
}
.mpf-datecard-name {
    padding-top: .08rem;
    color: #212121;
    font-size: .28rem;
    line-height: .36rem;
}
address, cite, dfn, em, i, optgroup, var {
    font-style: normal;
}
.mpf-datecard-detail {
    padding-bottom: .06rem;
    color: #888;
    font-size: .24rem;
    line-height: .32rem;
}
.mpf-datecard-name, .mpf-datecard-detail {
    display: block;
    width: 100%;
}
.mp-booking-datecard .mpf-datecard {
    box-sizing: border-box;
    float: left;
    width: 22.5%;
    height: .86rem;
    margin-left: 3.33%;
    overflow: hidden;
}
.mpf-datecard {
    display: inline-block;
    min-width: 1.2rem;
    min-height: .82rem;
    border: .02rem solid #bdbdbd;
    background: #fff;
    text-align: center;
    border-radius: .1rem;
}
.mp-booking-datecard .mpf-datecard {
    box-sizing: border-box;
    float: left;
    width: 22.5%;
    height: .86rem;
    margin-left: 3.33%;
    overflow: hidden;
}
.mpf-datecard-wait .mpf-datecard-name {
    line-height: .6rem;
}
.clrfix:after {
    content: " ";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
}
.mp-booking-btn {
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    text-align: center;
    height: 50px;
}
.mpw-dock-close {
    z-index: 2;
    right: 0;
}
.mpw-dock-close, .mpw-dock-back {
    position: absolute;
    top: 0;
    width: .88rem;
    height: 1rem;
    color: #9e9e9e;
    font-size: .4rem;
    line-height: 1rem;
    text-align: center;
}
.mpg-iconfont {
    font-family: 'mpiconfont';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
}
.mp-booking-price {
  margin-top:-0.35rem;
}
.mp-booking-calendar {
  margin-top:-0.2rem;
}
.mp-booking-textcard {
  margin-top:-0.1rem;
}
.mp-booking-note {
  margin-top:-0.1rem;
}
.mpw-dock-close {
  margin-top:0.3rem;
}
.mp-booking-btn a {
  color: #fff;
}
.mp-location{
    position: absolute; 
    z-index: 100; 
    width: 7px; bottom: 2px; 
    top: 2px; right: 1px; 
    pointer-events: none; 
    transition-property: opacity; 
    transition-duration: 350ms; 
    overflow: hidden; 
    opacity: 0;
}
.mp-location-tap{
    position: absolute; 
    z-index: 100; 
    background: padding-box padding-box rgba(0, 0, 0, 0.5); 
    border: 1px solid rgba(255, 255, 255, 0.9); 
    box-sizing: border-box;
    width: 100%; 
    border-radius: 3px; 
    pointer-events: none; 
    transition-property: transform; 
    transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); 
    transform: translate(0px, 232px) translateZ(0px); 
    height: 298px;
}
.otherdata1{
    position: fixed;
    z-index: 9999;
    background: #fff;
    bottom: 50px;
    height: 390px;
    

}
.close {
    position: absolute;
    right:2rem;
    top:4rem;
    font-size:0.5rem;
  }
</style>
