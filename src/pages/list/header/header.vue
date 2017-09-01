<template>
	  <div>
        <header class="header">
            <a class="header-left iconfont" @click="routerBack">&#xe600;</a>
            <span class="header-title">
            <input class="header-title-input" placeholder="输入城市或景点" @focus="handlefocus" v-model="inputtext" 
            @input="handleinput"/>
            <span class="search-del iconfont" @click="handleSearchDel" v-show="this.searchDel">&#xe60d;</span>
            </span>
            <div class="header-right">
            <router-link to="/list">
            <span class="header-submit" @click="handlesearch" >搜索 </span>
            </router-link>
            </div>
        </header>
        <div class="search-near-box" v-show="this.$store.state.searchnear">
            <div class="search-history"  v-show="this.$store.state.searchHistory">
                <h1 class="search-history-title">搜索历史<span class="history-del iconfont" @click="handledel">&#xe7ac; 清除</span></h1>
                <div class="search-history-info">
                <router-link to="/search">
                <span class="historyarr" v-for="item in this.historyarr" :key="item.id" @click="handlehistory(item.id)">{{item.historysearch}}</span>
                </router-link>
                </div> 
            </div>
            <div class="hot-search-box">
            <div class="hot-search-title">
                <h1 class="search-history-title">热门搜索<span class="history-change iconfont"  @click="handleHotChange">&#xe61f; 换一批</span></h1>
                </div>
                <div class="hot-search-info">
                <div class="hot-search-scenicz">
                <span class="hot-search-icon hotsceniczcss iconfont">&#xe63e;</span>
                <ul class="hot-box scenicz"  v-bind:style="{ top: this.sentop }">
                <router-link to="/">
                <li class="hot-info" v-for="item in dataScen" @click="handlehotScen(item.id,item.name)">{{item.name}}</li>
                </router-link>
                </ul>
                </div>
                <div class="hot-search-area">
                    <span class="hot-search-icon hotAreacss iconfont">&#xe607;</span>
                    <ul class="hot-box" v-bind:style="{ top: this.areatop }">
                    <router-link to="/list">
                    <li class="hot-info area" v-for="item in dataArea" @click="handlehotArea(item.id,item.name)">{{item.name}}</li>
                    </router-link>
                    </ul>
                </div>
            </div>
            </div>
            <div class="search-near-box-info">
            <router-link to="/">
            <div class="search-near">搜索身边的景点</div>
            </router-link>
            </div>
        </div>
        <ul class="suggestbox" v-show="this.$store.state.suggestsearch">
         <h1 class="search-history-title">搜索建议<span class="suggestclose" @click="handelSuggestClose"> 关闭</span></h1>
         <router-link to="/">
          <li v-for="(value,$index) in myData" class="suggestinfo"  @click="handleSuggestInfo(value)">{{value}}</li>
          </router-link>
        </ul>
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
        searchDel:false,
        myData:[]
        }
    },
    props:["dataScen", "dataArea"],
      created(){
        if (localStorage.landunphone100cn == undefined) {
              this.$store.commit("searchHistory",false);
          }else {
              this.$store.commit("searchHistory",true);
              this.historyarr = JSON.parse(localStorage.landunphone100cn);
          } 
        },
      updated(){
      if (this.inputtext !== "") {
          this.$store.commit("showNear",false)
          this.searchDel = true;
      }else {
          this.searchDel = false;
      }
  },
  methods: {
      routerBack() {
          this.$router.go(-1);
      },
      handlefocus(){
          if (this.inputtext =="") {
              this.$store.commit("showNear",true);
          }
          if (localStorage.landunphone100cn == undefined) {
              this.$store.commit("searchHistory",false);
          }else {
              this.$store.commit("searchHistory",true);
              this.historyarr = JSON.parse(localStorage.landunphone100cn);
          } 
      },
      handledel(){
          this.$store.commit("searchHistory",false);
          localStorage.removeItem('landunphone100cn');
          this.historyarr = [];
      },
      handleinput(){
        if (this.inputtext =="") {
              this.$store.commit("showNear",true);
          }else if (this.inputtext !== "") {
              this.$store.commit("showNear",false);
              this.$store.commit("suggestsearch",true);
              this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{
              params: {
                  wd: this.inputtext
              },
              jsonp: 'cb'
          }).then((res) => {
              this.myData = res.body.s
          },(res) => {
              console.log(res.status)
          })
          }  
      },
      handleSearchDel(){
          this.inputtext = "";
          this.$store.commit("suggestsearch",false);
      },
      handlesearch(){
        this.$store.commit("showNear",false)
      for (var i = 0; i < this.historyarr.length; i++) {
          if (this.historyarr[i].historysearch == this.inputtext||(this.historyarr[i].historysearch == "北京"&&this.inputtext == "")) {
              return this.historyarr.splice(0,1);
          }
      }
      if (this.inputtext == "") {
          this.inputtext = "北京";
          var id = new Date().getTime();
          this.historyarr.unshift({id:id,historysearch:this.inputtext});
          localStorage.landunphone100cn=JSON.stringify(this.historyarr);
      }else {   
      if (localStorage.landunphone100cn) {
          var id = new Date().getTime();
          this.historyarr=JSON.parse(localStorage.landunphone100cn);
          this.historyarr.unshift({id:id,historysearch:this.inputtext});
          localStorage.landunphone100cn=JSON.stringify(this.historyarr);
      }else {
          var id = new Date().getTime();
          this.historyarr = [];
          this.historyarr.unshift({id:id,historysearch:this.inputtext});
          localStorage.landunphone100cn = JSON.stringify(this.historyarr);
          }   
        } 
      },
      handleHotChange(){
          this.index++;
          this.areaindex++;
          var topvalue = -1.6*this.index
          this.sentop = topvalue+"rem";
          this.areatop = this.areaindex*-.8+"rem";
          if (this.index == 4) {
              this.areaindex = 0;
              this.areatop = 0+"rem";
          }else if (this.index == 5) {
              this.sentop = 0+"rem";
              this.index = 0;
              this.areatop = 0+"rem";
          }   
      },
      handlehistory(e){
          this.$store.commit("showNear",false)
      },
      handlehotScen(e,v){
          for (var i = 0; i < this.historyarr.length; i++) {
          if (this.historyarr[i].historysearch == v) {
            this.historyarr.splice(0,1);
            this.$store.commit("showNear",false)
              return this.historyarr
          }
      }
          this.historyarr.unshift({id:e,historysearch:v});
          localStorage.landunphone100cn = JSON.stringify(this.historyarr);
          this.$store.commit("showNear",false)
      },
      handlehotArea(e,v){
          this.$store.commit("showNear",false)
      },
      handlebox(){
        alert("sss")
      },
      handelSuggestClose(){
        this.$store.commit("suggestsearch",false);
      },
      handleSuggestInfo(value){
        var id = new Date().getTime();
        for (var i = 0; i < this.historyarr.length; i++) {
          if (this.historyarr[i].historysearch == value) {
              this.$store.commit("suggestsearch",false);
              return this.historyarr.splice(0,1);
          }
      }
        this.historyarr.unshift({id:id,historysearch:value});
        localStorage.landunphone100cn = JSON.stringify(this.historyarr);
        this.$store.commit("suggestsearch",false);
      }
  }
}
</script>
<style scoped>
@import "../../../assets/font/iconfont.css";
	.header {
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: .88rem;
      background: #00bcd4;
      text-align: center;
      color: #fff;
  }
  .header-left {
      box-sizing: border-box;
      float: left;
      display: block;
      width: 10%;
      line-height: .88rem;
      padding: 0 .2rem;
      margin: .02rem 0 0 -0.08rem;
      margin-top: 0.02rem;
      color: #fff;
      font-size: .40rem;
      text-align: left;
  }
  .header-title {
      box-sizing: border-box;
      float: left;
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
      width: 70%;
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
    width: 88%;
  }
  .search-del{
    line-height: .6rem;
    color: #ccc;
    font-size: .38rem;
    float: right;
    padding-right: 0.1rem;
  }
  .header-right{
      box-sizing: border-box;
      width: 20%;
      float: right;
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
    background: #fff;
    overflow: auto; 
    padding: 0 .2rem;
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
  .history-del,.history-change,.suggestclose{
    float: right;
    color: #00bcd4;
    font-size: 0.2rem;
  }
  .historyarr{
    background: #fff;
    border:1px solid #bbb;
    color: #333;
    height: .25rem;
    padding: .12rem .12rem .15rem;
    text-align: center;
    float:left;
    margin: .2rem .2rem .2rem 0 ;
    overflow: hidden;
    border-radius: .1rem;
  }
  .hot-search-scenicz{
    border-bottom: 1px solid #ccc;
    height: 1.6rem;
    margin: .2rem 0;
    position: relative;
    overflow: hidden;
  }
  .hot-search-area{
    border-bottom: 1px solid #ccc;
    height: .8rem;
    margin: .2rem 0;
    position: relative;
    overflow: hidden;
  }
  .hotsceniczcss{
    line-height: 1.3rem;
  }
  .hotAreacss{
    line-height: .6rem;
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
    color: #333;
    float: left;
    line-height: .5rem;
    padding: 0 .4rem;
    margin: .1rem 0 .2rem 0;
  }
  .area{
    box-sizing: border-box;
    padding: 0 .2rem;
    width: 25%;
    text-align: center;
  }
  .suggestbox{
    background: #fff;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
  .suggestinfo{
    padding: .2rem;
    border-bottom: 1px solid #eee;
    color: #333;
  }
</style>