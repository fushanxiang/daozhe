<template>
	<div class="ticket-sale">
		<div class="sale-header">
           <a class="sale-header-back iconfont" href="javascript:window.history.back();">&#xe624;</a>
           <h1 class="sale-header-title">门票特卖</h1>
       </div>
       <div class="ticket-navbar">
        <span class="nav-title">促销门票</span>
        <p class="nav-city">
            <span class="city-name">北京</span>
            <i class="iconfont">&#xe65e;</i>
        </p>
    </div>

    <div class="product-list">
        <ul class="sale-list">
            <li class="list-item" v-for="list in imgsInfo" :key="list.id">
                <span class="hot-sale">
                    <i>热卖中</i>
                </span>
                <img  class="sale-img" :src="list.imgUrl" :alt="list.title"/>
                <div class="list-bottom">
                    <h5 class="sale-title">{{list.title}}</h5>
                    <div class="sale-price">
                        <span class="new-price">￥<i>{{list.newPrice}}</i></span>
                        <span class="old-price">￥<i>{{list.oldPrice}}</i></span>                    
                    </div>
                </div>
            </li>               
        </ul>
    </div>
    <div class="sale-bottom">
        <i class="iconfont">&#xe6ed;</i>
        <strong>票面价</strong>
        是指通过景区指定窗口售卖的纸质门票上标注的价格    
    </div>
</div>
</template>

<script>


    export default {
      data () {
        return {
            imgsInfo:[{
                "id":"001",
                "imgUrl":"//img1.qunarzz.com/sight/p0/1704/6c/6c8f90546cca86c8a3.img.jpg_640x266_3aa718bd.jpg",
                "link":"",
                "title":"[北京]【1元秒杀】北京蟒山公园国际奇幻森林灯光节门票",
                "tip":"北京",
                "newPrice":"1",
                "oldPrice":"23"
            },{
                "id":"002",
                "imgUrl":"//img1.qunarzz.com/sight/p0/1706/de/dee2af4ba016221ea3.img.png_640x266_b401bb3c.png",
                "link":"",
                "title":"[北京]【去哪儿会员日】北京亲子畅玩卡（限量100张）",
                "tip":"北京", 
                "newPrice":"2",
                "oldPrice":"23"
            },{
                "id":"003",
                "imgUrl":"//img1.qunarzz.com/sight/p0/1706/61/61cbf3401445d0fca3.img.jpg_640x266_cc828462.jpg",
                "link":"",
                "title":"[北京]爱琴海庄园门票+冰雪乐园特惠票（下午场）",
                "tip":"北京",
                "newPrice":"3",
                "oldPrice":"23"
            },{
                "id":"004",
                "imgUrl":"////s.qunarzz.com/piao_topic/image/common/default/640x266.jpg",
                "link":"",
                "title":"[北京]【七夕专享】温都水城两馆通票七夕专享情侣票（限8.28）",
                "tip":"北京",
                "newPrice":"4",
                "oldPrice":"23"
            },{
                "id":"005",
                "imgUrl":"////s.qunarzz.com/piao_topic/image/common/default/640x266.jpg",
                "link":"",
                "title":"[北京]【活动票】爱琴海薰衣草庄园成人特惠票（下午场）",
                "tip":"北京",
                "newPrice":"5",
                "oldPrice":"23"
            },{
                "id":"006",
                "imgUrl":"//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg",
                "link":"",
                "title":"[北京]【三环内上门接】北京慕田峪踏青一日游，纯玩无购物，人少风景好",
                "tip":"北京",
                "newPrice":"6",
                "oldPrice":"23"
            },{
                "id":"007",
                "imgUrl":"//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg",
                "link":"",
                "title":"[北京]【赠杜莎】北京故宫+八达岭长城+鸟巢水立方一日游，无线讲解器",
                "tip":"北京",
                "newPrice":"7",
                "oldPrice":"23"
            },{
                "id":"008",
                "imgUrl":"//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg",
                "link":"",
                "title":"[北京]【活动票】金海湖风景区成人特惠票",
                "tip":"北京",
                "newPrice":"8",
                "oldPrice":"23"
            },{
                "id":"009",
                "imgUrl":"//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg",
                "link":"",
                "title":"[北京]北京园博园成人票",
                "tip":"北京",
                "newPrice":"9",
                "oldPrice":"23"
            }]
        }

    }
}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .ticket-sale{
      width:100%; 
      position: relative;     
  }
  .sale-header{
      position: relative;
      height: .88rem;
      border-bottom: #1b7a8b 1px solid;
      z-index: 91;
      background:#25a4bb;
  }
  .sale-header-back{
      position: absolute;
      left: 0;
      top: 0;
      width: .84rem;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      font-size: .36rem;
      color: #fff;
  }
  .sale-header-title{      
    overflow: hidden;
    margin: 0 1rem;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
}
.ticket-navbar{    
    padding: .2rem .2rem;
    background-color: #fff;
    position: relative;
}
.nav-city{
    float:right;
}
.product-list{
    width:100%;
    overflow:hidden;
}
.sale-list{
    width:100%;
}
.list-item{
    width:100%;  
    height:222px;  
    overflow: hidden;
    background-image: url(../../assets/img/sale-bg.jpg);
    position: relative;

}
.hot-sale{
    border-width: .18rem .08rem .18rem 0;
    border-style: solid;
    border-color: #fa8514 transparent #fa8514 #fa8514;
    position: absolute;
    bottom: 1.2rem;
    left: 0;
    width: 1.12rem;
}
.hot-sale i{
    display: inline-block;
    position: absolute;
    top: -.18rem;
    left: 0;
    padding: 0 .2rem;
    font-size: .24rem;
    line-height: .36rem;
    color: #fff;
}
.list-item .sale-img{
    width:100%;
    height:172px;
    display: block;
    
}
.list-bottom{
    height:1rem;
    width:100%;
    padding:.1rem 0;
    background: #fff;
}
.sale-title{
    width: 80%;
    height: .2rem;
    margin-bottom: 0.1rem;
    height: 30px;
    float: left;
    padding: .1rem 0;
    height: 1rem;
    line-height: .4rem;
    padding: .1rem .3rem;
    font-size: .32rem;  
}
.sale-price{
    float:right;
    height:30px;
    padding:.2rem;  
}
.sale-price .new-price,.sale-price .old-price{
    width:100%;
    line-height:.3rem;
    display:block;
}
.new-price{
      color:red;
}
.new-price i{
    color:red;
    font-size:.4rem;
}
.old-price{
    color:#333;
}
.sale-bottom{
    margin-top: .2rem;
    padding: .2rem;
    color: #333;
    font-size: .24rem;
    line-height: .3rem;
}
</style>
