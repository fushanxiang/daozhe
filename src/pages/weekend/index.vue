<template>
	<div class="main">
        <div class="museum-header">
            <a class="header-left iconfont">&#xe600;</a>
            <div class="header-title">学生最爱的博物馆</div>
        </div>
        <div class="content">
            <div class="content-list" v-for='item in listInfo' :key='item.id' @click="handleClick($event)">
                <div class="content-img">
                    <img v-lazy="item.img" class="content-list-img">
                </div>
                <p class="content-list-title">
                    <span class="name">{{item.title}}</span>
                    <span class="price" v-if="item.show">
                        <span class="money">&yen;</span>
                        <span class="price-info">{{item.price}}</span>
                        <span class="min-price">起</span>
                    </span>
                    <span class="price" v-if="!item.show">
                        产品详情
                    </span>
                </p>
                <p class="content-info">
                    {{item.content}}
                </p>
            </div> 
            <modal-img @clickit="viewImg" v-if='showModal' 
            :imgSrc="imgSrc" @scroll.prevent @touchmove.prevent :imgTitle='imgTitle'>
            </modal-img>
        </div>
    </div>
</template>

<script>
import modalImg from './modal.vue';
export default {
   methods:{
            viewImg(){
                this.showModal = false;
            },
            handleClick(e){
                this.showModal = true;
                this.imgSrc = e.currentTarget.firstChild.firstChild.src;
                this.imgTitle = e.currentTarget.lastChild.innerHTML;
            }
        },
  components:{
    "modal-img":modalImg
  } ,
  data () {
    return {
        imgSrc:'',
        imgTitle:'',
        showModal:false, 
        listInfo:[{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地",
            'show':true
        },{
            "id":"2",
            "img":"http://img1.qunarzz.com/sight/p0/1501/8d/8d99565a2dea08e7.water.jpg_640x276_188d04d3.jpg",
            "title":"中国蜜蜂博物馆",
            "price":"",
            "link":'/detail',
            "content":"小昆虫大视界",
            "show":false

        },{
            "id":"3",
            "img":"http://img1.qunarzz.com/sight/p0/1602/e6/e655d7ee86c7fd1390.water.jpg_640x276_8b20ff5e.jpg",
            "title":"中国科学技术馆",
            "price":"198",
            "link":'/detail',
            "content":"科学性、知识性、趣味性、互动性相结合的展",
            "show":true

        },{
            "id":"4",
            "img":"http://img1.qunarzz.com/sight/p25/201211/00/8a09e85dceb22cea93835fbb.jpg_640x276_b3ed91d8.jpg",
            "title":"北京自然博物馆",
            "price":"",
            "link":'/detail',
            "content":"打开通往自然的大门，去探索大自然的奥秘",
            "show":false

        },{
            "id":"5",
            "img":"http://img1.qunarzz.com/sight/p81/201211/07/453d7d250c21a48693835fbb.jpg_640x276_23654982.jpg",
            "title":"中国古动物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大的古生物博物馆",
            "show":true

        },{
            "id":"6",
            "img":"http://img1.qunarzz.com/sight/p0/1705/3d/3d7d3740d157a9e9a3.img.jpg_640x276_2ed89e4c.jpg",
            "title":"首都博物馆",
            "price":"1",
            "link":'/detail',
            "content":"古老与现代并存，文明与科技兼顾",
            "show":true

        },{
            "id":"7",
            "img":"http://img1.qunarzz.com/wugc/p153/201204/20/18790ec397b2afe193835fbb.jpg_640x276_00c86e9b.jpg",
            "title":"中国国家博物馆",
            "price":"",
            "link":'/detail',
            "content":"历史与艺术并重，凝聚中国历史文化之精华",
            "show":false

        },{
            "id":"8",
            "img":"http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_640x276_f74664c2.jpg",
            "title":"北京天文馆",
            "price":"137",
            "link":'/detail',
            "content":"陪你去看流星雨落在这地球上",
            "show":true

        },{
            "id":"9",
            "img":"http://img1.qunarzz.com/sight/p0/1507/59/76e0dc86d4416f913d9d919ec79ffe0e.water.jpg_640x276_11e979a9.jpg",
            "title":"北京汽车博物馆",
            "price":"21",
            "link":'/detail',
            "content":"感受汽车的无穷魅力，享受汽车的无限乐趣",
            "show":true

        },{
            "id":"10",
            "img":"http://img1.qunarzz.com/sight/p0/1501/91/913a6c6e45ea135b.water.jpg_640x276_e91e3e8e.jpg",
            "title":"警察博物馆",
            "price":"112",
            "link":'/detail',
            "content":"首都公安的巨大贡献和取得的辉煌成就",
            "show":true
        }]
    }
  }
}
</script>


<style scoped>
    @import "../../assets/font/iconfont.css";
    .main{
        background: #f5f5f5;
    }
	.museum-header{
        line-height:.88rem;
        position: relative;
        color:#fff;
        text-align: center;
        background:#00bcd4;
    }
    .header-left{
        position: absolute;
        font-size: .36rem;
        color: #fff;
        left:.3rem;
    }
    .header-title{
        font-size: .32rem
    }
    .content-list{
        margin-bottom: .2rem;
        background: #fff;
    }
    .content-img{
        width: 100%;
        height:0;
        padding-bottom: 43.3728%;
    }
    .content-list-img{
        display: block;
        width:100%;
        line-height: 100%;
    }
    .content-list-title{
        overflow: hidden;
        padding: 0 .22rem;
        line-height: .6rem;
    }
    .name{
        float: left;
        font-size: .36rem;
        width:60%;
        color: #212121;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .price{
        float: right;
        font-size: .18rem;
    }
    .price-info{
        color: #ff8300;
        font-size: .4rem;
        font-weight: bold;
        padding: 0 .08rem;

    }
    .min-price{
        font-size: .22rem;
    }
    .content-info{
        padding: 0 .22rem;
        width:100%;
        font-size: .26rem;
        padding-bottom: .36rem;
        color: #616161;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .money{
        color: #ff8300;
    }
</style>