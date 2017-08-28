<template>
	<div>
  <header class="header">
    <a class="header-left iconfont">&#xe600;</a>
      <input class="header-title" placeholder="输入城市或景点" @focus="handlefocus" @blur="handleblur"/>
    <div class="header-right">
      <span class="header-submit" @click="handlesearch">搜索 </span>
    </div>
  </header>
  <div class="search-near-box"  @click="handleclick">
    <div class="search-history">
      <h1 class="search-history-title">搜索历史<span class="history-del iconfont">&#xe7ac; 清除</span></h1>
      <div class="search-history-info"></div>
    </div>
    <div class="hot-search-box">
      <div class="hot-search-title">
        <h1 class="search-history-title">热门搜索<span class="history-change iconfont">&#xe61f; 换一批</span></h1>
      </div>
      <div class="hot-search-info">
        <div class="hot-search-scenicz"></div>
      </div>
    </div>
    <div class="search-near-box-info">
    <div class="search-near">搜索身边的景点</div>
    </div>
  </div>
    {{scenicz}}
  </div>
</template>
<script>
export default {
    data(){
      return {
        scenicz:[{
          id:1,
          name:"故宫"
        },{
          id:2,
          name:"颐和园"
        },{
          id:3,
          name:"南浔古镇冰雪世界"
        },{
          id:4,
          name:"恭王府"
        },{
          id:5,
          name:"八达岭长城"
        },{
          id:6,
          name:"天坛公园"
        },{
          id:7,
          name:"北京欢乐谷"
        },{
          id:8,
          name:"圆明园"
        },{
          id:9,
          name:"北京海洋馆"
        },{
          id:10,
          name:"北京动物园"
        },{
          id:11,
          name:"北京杜莎夫人蜡像馆"
        }]
      }
    },
    created(){

    },
    mounted(){
      this.searchNear = document.querySelector('.search-near-box');
      this.headerTitle = document.querySelector('.header-title');
      this.historyInfo = document.querySelector('.search-history-info');
    },
    methods: {
    handlefocus(){
      this.searchNear.style.display="block";
    },
    handleblur(){
      this.searchNear.style.display="none";
    },
    handleclick(){
      this.searchNear.style.display="block";
    },
    handlesearch(){
      if (this.headerTitle.value=="") {
          var historyarr=null;
          var id = 0;
          alert(123);
      }else{   
      }
    }
  }
}
</script>
<style scoped>
@import "../../../assets/font/iconfont.css";
	.header {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: .88rem;
      background: #00bcd4;
      text-align: center;
      color: #fff;
  }
  .header-left {
      float: left;
      display: block;
      width: .4rem;
      line-height: .88rem;
      padding: 0 .2rem;
      margin: .02rem 0 0 -0.08rem;
      margin-top: 0.02rem;
      color: #fff;
      font-size: .40rem;
      text-align: left;
  }
  .header-title {
      height: .6rem;
      margin: .14rem .96rem .14rem .8rem;
      background: #fff;
      line-height: .6rem;
      border-radius: .06rem;
      display: inline-block;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      padding-left: 0.2rem;
      width: 5.3rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;
      border: none;
      font-family: "Microsoft Yahei",Arial;
      font-size: .28rem;
  }

  .header-right{
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      height: .88rem;
      line-height: .88rem;
      padding: 0 .1rem;
  }
  .header-submit {
      display: inline-block;
      width: .74rem;
      margin-right: .04rem;
      color: #fff;
      font-size: .28rem;
  }
  .search-near-box{
      position: absolute;
      z-index: 10;
      width: 100%;
      box-shadow: 0 1px 3px 1px #c7ced4;
      display: none;
      background: #fff;
  }
  .search-near{
      height: .72rem;
      line-height: .72rem;
      background-color: #fff;
      text-align: center;
      font-size: .26rem;
      color: #333;
      border: 1px solid #dde1e3;
      border-radius: 2px;
  }
  .search-near-box-info{
    padding: .2rem;
  }
  .search-history-title,.search-history-title{
    height: .72rem;
    line-height: .72rem;
    background: #eee;
    padding:0 .2rem;
    color:#999;
    font-size: 0.2rem;
    border-bottom: 1px solid #ccc;
  }
  .history-del,.history-change{
    float: right;
    color: #00bcd4;
    font-size: 0.2rem;
  }
</style>