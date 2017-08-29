<template>
	<div>
  <header class="header">
    <a class="header-left iconfont">&#xe600;</a>
    <span class="header-title">
      <input class="header-title-input" placeholder="输入城市或景点" @focus="handlefocus" @blur="handleblur" v-model="inputtext"/>
      <span class="search-del iconfont" @click="handleSearchDel">&#xe60d;</span>
    </span>
    <div class="header-right">
      <span class="header-submit" @click="handlesearch">搜索 </span>
    </div>
  </header>
  <div class="search-near-box"  @click="handleclick" v-show="this.searchNear">
    <div class="search-history"  v-show="this.searchHistory">
      <h1 class="search-history-title">搜索历史<span class="history-del iconfont" @click="handledel">&#xe7ac; 清除</span></h1>
      <div class="search-history-info">
        <span class="historyarr" v-for="item in this.historyarr">{{item.historysearch}}</span>
      </div>
    </div>
    <div class="hot-search-box">
      <div class="hot-search-title">
        <h1 class="search-history-title">热门搜索<span class="history-change iconfont"  @click="handleHotChange">&#xe61f; 换一批</span></h1>
      </div>
      <div class="hot-search-info">
        <div class="hot-search-scenicz">
          <span class="hot-search-icon hotcss iconfont">&#xe63e;</span>
          <ul class="hot-box scenicz"  v-bind:style="{ top: this.sentop }">
          <li class="hot-info" v-for="item in hotSearchScen">{{item.name}}</li>
          </ul>
        </div>
        <div class="hot-search-area">
          <span class="hot-search-icon iconfont">&#xe607;</span>
          <ul class="hot-box" v-bind:style="{ top: this.areatop }">
          <li class="hot-info area" v-for="item in hotSearchArea">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-near-box-info">
    <div class="search-near">搜索身边的景点</div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    data(){
      return {
        index:0,
        areaindex:0,
        sentop:"",
        areatop:"",
        inputtext:"",
        historyarr:[],
        searchNear:false,
        searchHistory:true,
        historysearch:"",
        hotSearchScen:[{
          id:1,
          name:"故宫"
        },{
          id:2,
          name:"颐和园"
        },{
          id:3,
          name:"恭王府"
        },{
          id:4,
          name:"南浔古镇冰雪世界"
        },{
          id:5,
          name:"八达岭长城"
        },{
          id:6,
          name:"天坛公园"
        },{
          id:7,
          name:"天坛公园"
        },{
          id:8,
          name:"天坛公园"
        },{
          id:9,
          name:"天坛公园"
        },{
          id:10,
          name:"天坛公园"
        },{
          id:11,
          name:"天坛公园"
        },
        {
          id:12,
          name:"天坛公园"
        }],
        hotSearchArea:[{
          id:1,
          name:"昌平区"
        },{
          id:2,
          name:"天津"
        },{
          id:3,
          name:"秦皇岛"
        },{
          id:4,
          name:"大连"
        },{
          id:5,
          name:"青岛"
        },{
          id:6,
          name:"沈阳"
        }]
      }
    },
    updated(){
      if (this.inputtext!=="") {
        this.searchNear=false;
      }
    },
    methods: {
    handlefocus(){
      if (this.inputtext=="") {
        this.searchNear=true;
       
      }else{
        this.searchNear=false;
      }
       if (localStorage.history==undefined) {
        this.searchHistory=false;
      }else{
        this.searchHistory=true
        this.historyarr=JSON.parse(localStorage.history);
      } 
    },
    handledel(){
    this.searchHistory=false;
    localStorage.removeItem('history');
    this.historyarr=[];
    },
    handleblur(){
    this.searchNear=false;
    },
    handleclick(){
    this.searchNear=true;;
    },
    handleSearchDel(){
      this.inputtext="";
    },
    handlesearch(){
      for (var i = 0; i < this.historyarr.length; i++) {
        if (this.historyarr[i].historysearch==this.inputtext||(this.historyarr[i].historysearch=="北京"&&this.inputtext=="")) {
            return this.historyarr.splice(0,1);
            }
          }
      if (this.inputtext=="") {
          this.inputtext="北京";
          this.historyarr.unshift({historysearch:this.inputtext});
          localStorage.history=JSON.stringify(this.historyarr);
      }else{   
        if (localStorage.history) {
            var id=new Date().getTime();
            this.historyarr=JSON.parse(localStorage.history);
            this.historyarr.unshift({id:id,historysearch:this.inputtext});
            localStorage.history=JSON.stringify(this.historyarr);
          }else{
            var id=new Date().getTime();
           this.historyarr=[];
           this.historyarr.unshift({id:id,historysearch:this.inputtext});
          localStorage.history=JSON.stringify(this.historyarr);
          }   
        } 
    },
    handleHotChange(){
        this.index++;
        this.areaindex++;
        var topvalue=-1.5*this.index
        this.sentop=topvalue+"rem";
        this.areatop=this.areaindex*-.6+"rem";
        if (this.index==4) {
         this.areaindex=0;
         this.areatop=0.2+"rem";
        }else if (this.index==5) {
          this.sentop=0.2+"rem";
          this.index=0;
          this.areatop=0.2+"rem";
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
      font-size: .28rem;
  }
  .header-title-input{
    background: #fff;
    border: none;
    color: #666;
    float: left;
    font-family: "Microsoft Yahei",Arial;
    line-height: .6rem;
    width: 4.3rem;
  }
  .search-del{
    line-height: .6rem;
    color: #ccc;
    font-size: .38rem;
    float: right;
    padding-right: 0.1rem;
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
  .search-history-info{
    height: 1.2rem;
    line-height:1.2rem; 
    overflow:auto;
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
  .historyarr{
    background: #fff;
    border:1px solid #bbb;
    height: .2rem;
    padding: 0.1rem 0.12rem;
    margin-left: .2rem;
    text-align: center;
    float: left;
  }
  .hot-search-scenicz{
    border-bottom: 1px solid #ccc;
    height: 1.3rem;
    padding: .2rem 0;
    position: relative;
    overflow: hidden;
  }
  .hot-search-area{
    border-bottom: 1px solid #ccc;
    height: .6rem;
    line-height: .6rem;
    padding: .2rem 0;
    position: relative;
    overflow: hidden;
  }
  .hotcss{
    line-height: 1.3rem;
  }
  .hot-box{
    left: 10%;
    position: absolute;
    overflow: hidden;  
  }
  .scenicz{
    width: 85%;
    padding-left: .1rem;
  }
  .hot-search-icon{
    float: left;
    border-right: 1px solid #ccc;
    color: #bbb;
    display: inline-block;
    width: 10%;
    text-align: center;
  }
  .hot-info{
    border-right: 1px dashed #ccc;
    float: left;
    line-height: .5rem;
    padding: 0 .3rem;
    margin-bottom: .3rem;
  }
  .area{
    padding: 0 .47rem;
  }
</style>