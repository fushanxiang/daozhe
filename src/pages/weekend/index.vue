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
            :imgSrc="imgSrc" @touchmove.prevent :imgTitle='imgTitle'>
            </modal-img>
        </div>
    </div>
</template>

<script>
import modalImg from '../components/modal.vue';
export default {
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.$http.get('/static/weekend.json').then(response => {
            var data = response.body.data;
            this.listInfo = data.listInfo;
        }, response => {
          console.log("ajax error");
        });
    },
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
        listInfo:[]
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