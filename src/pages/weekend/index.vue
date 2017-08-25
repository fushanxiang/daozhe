<template>
	<div class="main">
        <div class="museum-header">
            <a class="header-left iconfont">&#xe600;</a>
            <div class="header-title">学生最爱的博物馆</div>
        </div>
        <div class="content">
            <div class="content-list" v-for='item in listInfo' :key='item.id'>
                <img :src="item.img" class="content-list-img">
                <p class="content-list-title">
                    <span class="name">{{item.title}}</span>
                    <span class="price">
                        <span class="money">&yen;</span>
                        <span class="price-info">{{item.price}}</span>
                        <span class="min-price">起</span>
                    </span>
                </p>
                <p class="content-info">
                    {{item.content}}
                </p>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        listInfo:[{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

        },{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

        },{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

        },{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

        },{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

        },{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

        },{
            "id":"1",
            "img":"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
            "title":"中国航空博物馆",
            "price":"112",
            "link":'/detail',
            "content":"亚洲最大以飞机文物为主的航空珍品荟萃地"

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
        font-size: .3rem;
        color:#fff;
        text-align: center;
        background:#00bcd4;
    }
    .header-left{
        position: absolute;
        color: #fff;
        left:.3rem;
    }
    .content-list{
        margin-bottom: .2rem;
        background: #fff;
    }
    .content-list-img{
        width:100%;
        height:3.12rem;
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
        font-size: .24rem;
    }
    .price-info{
        color: #ff8300;
        font-size: .3rem;
        font-weight: bold;
        padding: 0 .08rem;

    }
    .content-info{
        padding: 0 .22rem;
        width:100%;
        font-size: .24rem;
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