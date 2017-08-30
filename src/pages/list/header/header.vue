<template>
	  <div>
        <header class="header">
            <a class="header-left iconfont" @click="routerBack">&#xe600;</a>
            <span class="header-title">
            <input class="header-title-input" placeholder="输入城市或景点" @focus="handlefocus" v-model="inputtext" 
            />
            <span class="search-del iconfont" @click="handleSearchDel" v-show="this.searchDel">&#xe60d;</span>
            </span>
            <div class="header-right">
            <router-link to="/list">
            <span class="header-submit" @click="handlesearch" >搜索 </span>
            </router-link>
            </div>
        </header>
        <div class="search-near-box" v-show="this.$store.state.searchNear">
            <div class="search-history"  v-show="this.searchHistory">
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
                    <router-link to="/">
                    <li class="hot-info area" v-for="item in dataArea" @click="handlehotArea(item.id,item.name)">{{item.name}}</li>
                    </router-link>
                    </ul>
                </div>
            </div>
            </div>
            <div class="search-near-box-info">
            <div class="search-near" @click="handlehotSearchNear">搜索身边的景点</div>
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
        searchHistory:true,
        searchDel:false,
        historysearch:""
        }
    },
    props:["dataScen","dataArea"],
        updated(){
        if (this.inputtext!=="") {
            this.$store.commit("showNear",false)
            this.searchDel=true;
        }else{
            this.searchDel=false;
        }
    },
    methods: {
        routerBack() {
            this.$router.go(-1);
        },
        handlefocus(){
            if (this.inputtext=="") {
                this.$store.commit("showNear",true);
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
        handleSearchDel(){
            this.inputtext="";
        },
        handlesearch(){
          this.$store.commit("showNear",false)
        for (var i = 0; i < this.historyarr.length; i++) {
            if (this.historyarr[i].historysearch==this.inputtext||(this.historyarr[i].historysearch=="北京"&&this.inputtext=="")) {
                return this.historyarr.splice(0,1);
            }
        }
        if (this.inputtext=="") {
            this.inputtext="北京";
            var id=new Date().getTime();
            this.historyarr.unshift({id:id,historysearch:this.inputtext});
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
            var topvalue=-1.6*this.index
            this.sentop=topvalue+"rem";
            this.areatop=this.areaindex*-.8+"rem";
            if (this.index==4) {
                this.areaindex=0;
                this.areatop=0+"rem";
            }else if (this.index==5) {
                this.sentop=0+"rem";
                this.index=0;
                this.areatop=0+"rem";
            }   
        },
        handlehistory(e){
            alert(e)
            this.$store.commit("showNear",false)
        },
        handlehotScen(e,v){
            alert(e);
            for (var i = 0; i < this.historyarr.length; i++) {
            if (this.historyarr[i].historysearch==v) {
              //this.historyarr.unshift({id:e,historysearch:v});
              this.historyarr.splice(0,1);
              this.$store.commit("showNear",false)
                return this.historyarr
            }
        }
            this.historyarr.unshift({id:e,historysearch:v});
            localStorage.history=JSON.stringify(this.historyarr);
            this.$store.commit("showNear",false)
        },
        handlehotArea(e,v){
            alert(e);
            this.$store.commit("showNear",false)
        },
        handlehotSearchNear(){
            alert("周边景点");
        },
        handlebox(){
          alert("sss")
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
  .history-del,.history-change{
    float: right;
    color: #00bcd4;
    font-size: 0.2rem;
  }
  .historyarr{
    background: #fff;
    border:1px solid #bbb;
    color: #333;
    height: .2rem;
    padding: 0.1rem 0.12rem;
    text-align: center;
    float:left;
    margin: .3rem .2rem .2rem 0 ;
    overflow: hidden;
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
</style>