<template>
	<div class='b-box'>
     <index-header></index-header>
     <index-tab></index-tab>   
  </div>
</template>


<script>

import Header from './header.vue'
import Tab from './tab.vue'


export default {
  data () {
    return {
      name: 'list page'
    }
  },
  components:{
    "index-header": Header,
    "index-tab": Tab
  }
}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .b-box{
        height: 100%;
        background: #FFE6AA;
    }
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
        margin-top: .02rem;
        color: #fff;
        font-size: .40rem;
        text-align: left;
    }
    .header-title {
        position: relative;
        height: .6rem;
        margin: .14rem 1.32rem .14rem .8rem;
        background: #fff;
        line-height: .6rem;
        border-radius: .06rem;
    }
    .single-line {
        display: inline-block;
        overflow: hidden;
        position: absolute;
        left: .3rem;
        top: 0;
        width: 3.6rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #e4e7ea;
    }
    .icon-search {
        position: absolute;
        left: .2rem;
        color: #e4e7ea;
    }
    .header-right{
        position: absolute;
        top: 0;
        right: 0;
        margin-right: .04rem;
        line-height: .88rem;
        width: 1.28rem;
        text-align: center;
    }
    .nav-city {
        margin-left: -0.04rem;
    }
    .downarrow {
        position: relative;
        top: -0.05rem;
        left: .03rem;
        display: inline-block;
        width: 0;
        height: 0;
        border-left: .12rem solid transparent;
        border-right: .12rem solid transparent;
        border-top: .12rem solid #FFFFFF;
    }
  
</style>
