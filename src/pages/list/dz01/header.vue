<template>
	<div>
  <header class="header">
    <a class="header-left iconfont">&#xe600;</a>
    <div class="header-title">
      <span class="single-line">输入城市或景点</span>
    </div>
    <div class="header-right">
      <span class="header-submit">搜索 </span>
    </div>
  </header>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'list  index page'
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
      position: relative;
      height: .6rem;
      margin: .14rem .96rem .14rem .8rem;
      background: #fff;
      line-height: .6rem;
      border-radius: .06rem;
  }
  .single-line {
        display: inline-block;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 3.6rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #666;
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
</style>