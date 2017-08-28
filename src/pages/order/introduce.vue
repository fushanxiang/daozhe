<template>
	<div>
	   <div id="page-2" class="mpw-dock mpw-dock-fadein" v-bind:class="isActive?'a':'b'"><div class="mp-booking-info">
    <h5 class="mp-booking-title"><p class="mpg-ellipsis">【赠送珍宝馆】天安门＋故宫＋八达岭长城＋鸟巢·水立方一日游</p></h5>
    <p class="mp-booking-price">
        <span class="mpg-price">¥<em class="mpg-price-num" id="spucategory-price">228</em></span>
        <span id="spucategory-price-text">起/份</span>
        <span class="mp-prdcard-gray mp-prdcard-marketprice">票面价:¥<span mp-role="highMarketPrice">268</span></span>
        <span mp-role="cashBack"></span>
    </p>
</div><div class="mpw-dock-content" mp-role="dockContent"><div><div id="specifications-con" style="height: 417.6px; overflow: hidden;"><div style="transition-property: transform; transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);"><div class="mp-booking-calendar mpf-border-top"><h6 class="mp-booking-note">日期选择</h6><div class="mp-booking-datecard clrfix" mp-role="calendarList"><span class="mpf-datecard mpf-datecard-disabled"><em class="mpf-datecard-name">今天</em><strong class="mpf-datecard-detail">08月26日</strong></span><span class="mpf-datecard"><em class="mpf-datecard-name">明天</em><strong class="mpf-datecard-detail">08月27日</strong></span><span class="mpf-datecard"><em class="mpf-datecard-name">后天</em><strong class="mpf-datecard-detail">08月28日</strong></span><span class="mpf-datecard mpf-datecard-wait" readonly="true"><em class="mpf-datecard-name"  @click="dateClick">其他日期</em><strong class="mpf-datecard-detail"></strong></span></div></div><div class="mp-booking-select mpf-border-top"><h6 class="mp-booking-note">人群</h6><div class="mp-booking-textcard clrfix" mp-role="textList"><span class="mpf-play-date mpf-play-date-active">成人</span><span class="mpf-play-date">儿童</span></div></div><div class="mp-booking-select mpf-border-top"><h6 class="mp-booking-note">发车时间</h6><div class="mp-booking-textcard clrfix" mp-role="textList"><span class="mpf-play-date mpf-play-date-active">07:30</span></div></div><div class="mp-booking-select mpf-border-top"><h6 class="mp-booking-note">用餐</h6><div class="mp-booking-textcard clrfix" mp-role="textList"><span class="mpf-play-date mpf-play-date-active">含餐</span></div></div><div class="mp-booking-select mpf-border-top"><h6 class="mp-booking-note">服务语言</h6><div class="mp-booking-textcard clrfix" mp-role="textList"><span class="mpf-play-date mpf-play-date-active">中文</span></div></div></div><div style="position: absolute; z-index: 100; width: 7px; bottom: 2px; top: 2px; right: 1px; pointer-events: none; transition-property: opacity; transition-duration: 350ms; overflow: hidden; opacity: 0;"><div style="position: absolute; z-index: 100; background: padding-box padding-box rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.9); box-sizing: border-box; width: 100%; border-radius: 3px; pointer-events: none; transition-property: transform; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate(0px, 232px) translateZ(0px); height: 298px;"></div></div></div><a class="mp-booking-btn" id="mp-control-booking" href="javascript:;" data-click="t_preOrder">立即预订</a></div></div><div class="mpg-iconfont mpw-dock-close iconfont" mp-role="closeButton " @click="handleClick">&#xe620;</div></div>
  <div class="mp-booking-btn" id="mp-control-booking">
        <a href="javascript:;" mp-role="booking-link" data-teamtype="" data-click="t_goumai" @click="bottomClick">立即预订</a>
  </div>
  <div v-bind:class="isActive?'a':'b'">
      <tell-calendar></tell-calendar>
  </div>
	</div>
    
</template>

<script>
import Calendar from "./calendar.vue"


export default {
  name: 'index',
  data () {
    return {
      isActive:false
    }
     
  },
  methods:{
    handleClick(){
    
      this.isActive=false
    },
    bottomClick(){
        this.isActive=true
    },
    dateClick(){
      
    this.isActive=false
    }
  },
  components:{
    "tell-calendar": Calendar
  }
}
</script>

<style scoped>

 .mpw-dock-fadein {
    transform: translateY(0);
}

.a{display: block;}
.b{display: none;}  
.mpw-dock {
    position: fixed;
    z-index: 92;
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
h1, h2, h3, h4, h5, h6 {
    font-family: tahoma,arial,"Hiragino Sans GB","\5FAE\8F6F\96C5\9ED1",simsun,sans-serif;
}
.mpg-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}

body, ul, ol, dl, dd, h1, h2, h3, h4, h5, h6, figure, form, fieldset, legend, input, textarea, button, p, blockquote, th, td, pre, xmp {
    margin: 0;
    padding: 0;
}

p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
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

h1, h2, h3, h4, h5, h6 {
    font-family: tahoma,arial,"Hiragino Sans GB","\5FAE\8F6F\96C5\9ED1",simsun,sans-serif;
}

.mp-booking-price {
    color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
}

body, ul, ol, dl, dd, h1, h2, h3, h4, h5, h6, figure, form, fieldset, legend, input, textarea, button, p, blockquote, th, td, pre, xmp {
    margin: 0;
    padding: 0;

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

.mp-booking-price {
    color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
}
.mp-prdcard-gray, .mp-prdcard-supplier {
    color: #9e9e9e;
    font-size: .24rem;
}

.mp-prdcard-marketprice {
    text-decoration: line-through;
}

.mp-booking-price {
    color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
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

h1, h2, h3, h4, h5, h6, b, strong {
    font-weight: normal;
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
.mpf-datecard-name {
    padding-top: .08rem;
    color: #212121;
    font-size: .28rem;
    line-height: .36rem;
}

.mpf-datecard-name, .mpf-datecard-detail {
    display: block;
    width: 100%;
}

address, cite, dfn, em, i, optgroup, var {
    font-style: normal;
}




.mpf-datecard-name {
    padding-top: .08rem;
    color: #212121;
    font-size: .28rem;
    line-height: .36rem;
}

.mpf-datecard-name, .mpf-datecard-detail {
    display: block;
    width: 100%;
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

.mpf-datecard {
    display: inline-block;
    min-width: 1.2rem;
    min-height: .82rem;
    border: .02rem solid #bdbdbd;
    background: #fff;
    text-align: center;
   
    border-radius: .1rem;
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
    display: block;
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    text-align: center;
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
.mp-booking-price{
  margin-top:-0.35rem;
}
.mp-booking-calendar{
  margin-top:-0.2rem;
}
.mp-booking-btn{
  width: 375px;
  height: 50px;
  background: red;
}
.mp-booking-textcard{
  margin-top:-0.1rem;
}
.mp-booking-note{
  margin-top:-0.1rem;
}
.mp-booking-btn{
  margin-top:-0.5rem;
  background:#ff9800;
}
 .mpw-dock-close{
  margin-top:0.3rem;
 }
 .mp-booking-btn{
  position: fixed;
  bottom: 0;
  right: 0;

 }
 .mp-booking-btn a{
  color: #fff;
 }
</style>
