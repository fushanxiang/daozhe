<template>
	<div class="content" ref="fillter">
        <h3 class="head" v-show="isActive">
            游玩景点
          <span class="moreChose">(可多选)</span>
        </h3>
        <div id="fillterWraper" ref="fillterList" class="listCon" :class="{'show': isActive, '': !isActive}" >
            <ul class="listInner"  ref="inner" :class="{'lists': isActive, '': !isActive}"  >
              <li :class="{itemActive: itemActive[index] }" ref="list" class="listItem" @click="handleChose(index)" v-for="(item, index) in dataInfo">
                <span :class="{'txtActive': itemActive[index]}" class="itemCon">{{item.name}}</span>
              </li>
            </ul>
        </div>
        <div class="moreSight">
          <span class="rightIcon iconfont" 
          :class="{'list-iconfont': isActive, '': !isActive}" @click="ChangeScrollStyle">&#xe6a6;</span>
        </div>
        <div :class="{'mask': isActive}" @click="ChangeScrollStyle"></div>
	</div>
  
</template>

<script>
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import Vue from 'vue'

Vue.use(IScrollView, IScroll)
export default {
  name: 'index',
  data () {
    return {
      isActive:false,
      isChose:false,
      itemActive:[],
      listWidth:0,  
      scroll:null,
      itemActiveCount:0,
    } 
  },

  props:["dataInfo"],

  updated() {
    if(this.listWidth) return;
    let listWidth = 0;
    if(this.$refs.list) {
      this.$refs.list.forEach((item) => {
        listWidth += item.offsetWidth;
      })
      this.listWidth = listWidth + 40 + "px";
      this.$refs.inner.style.width = this.listWidth;
    }
    this.$refs.fillter.style.height = window.innerHeight + "px";
    this.setNewScroll();
  },

  methods: {
    ChangeScrollStyle() {
      if(this.isActive) {
        this.$refs.inner.style.width = this.listWidth;
        this.setNewScroll(); 
      } else {
        this.$refs.inner.style.width = this.$refs.fillterList.offsetWidth + "px";
        this.setNewScroll(false, true);
      }
        this.$refs.fillter.style.height = window.innerHeight + "px";
        this.isActive = !this.isActive;    
    },

    handleChose(index) {
      if(this.itemActive[ index ]) {       
        let choseItem = this.dataInfo.splice(index,1)[0];
        this.dataInfo.push(choseItem);
        this.itemActive[-- this.itemActiveCount ] = false;
        
      } else {       
        let choseItem = this.dataInfo.splice(index,1)[0];
        this.dataInfo.unshift(choseItem);
        this.itemActive[this.itemActiveCount ++] = true;
      } 
    },

    setNewScroll( scrollX = true, scrollY = false) {
      if(this.scroll) {
        this.scroll.destroy();
        this.scroll = null;
      }
      this.scroll = new IScroll('#fillterWraper', {scrollX, scrollY} );
      setTimeout( () => this.scroll.refresh(), 1000)  
    }
  }
}
</script>

<style scoped>
  .content .list-iconfont{
    transform: rotate(180deg);
  }
  .content .txtActive{
    border-color: #28a9b9;
    color: #28a9b9;
  }
  .content .show{
    box-sizing: border-box;
    position: absolute;
    top: 1.6rem;
    left: 0;
    margin-right: 0;
    width: 100%;
    height: auto;
    z-index: 6;
  }
  .content .lists{
    height:auto;
    overflow: hidden;
    touch-action: none;
  }
  .rightIcon{
    display: block;
    color: #aab2b7;
    font-size: .38rem;
    font-weight: 600;
    line-height: .79rem;
    text-align: center;
    background: #e5e7e8;
  }
  .moreSight{
    position: absolute;
    z-index: 6;
    top: 0.88rem;
    right: 0;
    width: .8rem;
    height: .78rem;
    border-left:1px solid #d7dbde;
  }
  .content {
    height: .8rem;
  }
  .head {
    position: relative;
    z-index: 6;
    color: #212121;
    font-size: .28rem;
    line-height: .8rem;
    text-indent: .2rem;
    background: #e5e7e8;
    display: block;
  }
  .moreChose {
    color: #212121;
    line-height: .8rem;
    text-indent: .2rem;
    font-weight: normal;
    font-size: .24rem;
    padding-left: .1rem
  }

  .listCon{
    position: relative;
    top: 0;
    overflow: hidden;
    height: .68rem;
    max-height: 6rem;
    padding: .08rem .12rem;
    background: #e5e7e8;
    z-index: 6;
  }
  .listInner {
     height:.68rem;
     touch-action: none;
     z-index: 3
  }
  .listItem {
    padding-top: .08rem;
    padding-bottom: .08rem;
    display: inline-block;
    float: left;
    position: relative;
    padding: .04rem .08rem;
  }
  .itemCon {
    position: relative;
    display: block;
    min-width: .26rem;
    padding: 0 .22rem;
    background: #fff;
    color: #212121;
    font-size: .26rem;
    line-height: .56rem;
    border-radius: .04rem;
    border:1px solid #fff;
  }
  .scroll-view {
    touch-action: none;
    overflow: hidden; 
  }
  .mask {
    background: rgba(0,0,0,0.45);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    z-index: 5;
  }
</style>