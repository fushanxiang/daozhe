<template>
    <div class="products-main">
        <ul class="view-list">
            <li class="sight-group border-topbottom" v-for="item in this.pages[index]" :key="item.id">
                <div class="item-content">
                    <div class="sight-info">
                        <div class="sight-imgcon">
                            <img class="sight-img" :src="item.imgSrc" >                
                        </div>
                        <div class="sight-detail">
                            <p class="item-float-p">
                                <h3 class="sight-name sight-name-float">{{item.scenic}}</h3>
                                <span class="tag-word" v-if="item.hot">热</span>
                                <span class="sight-price">¥<em>{{item.price}}</em><span class="lowprice-text">&nbsp;起</span></span>
                            </p>
                            <div class="sight-comments">
                                <span class="starlevel"><span class="iconfont starlevel-total">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</span></span>
                                <span class="comments-totalnum">{{item.comment}}</span>
                            </div>
                            <div class="sight-location"><span class="sight-address">{{item.location}}</span></div>
                        </div>
                    </div>

                    <div class="sight-ticket-item border-top">
                        <h4 class="ticket-name">{{item.tourGuide}}</h4>
                        <span class="ticket-qunarprice">¥<em>{{item.tourPrice}}</em></span>
                    </div>
                    
                    <div class="sight-ticket-item border-top">
                        <h4 class="ticket-name">{{item.navigation}}</h4>
                        <span class="ticket-qunarprice">¥<em>{{item.navigationPrice}}</em></span>
                    </div>

                </div>
                <div class="item-more-ticket ">查看全部{{item.moreProduct}}个产品<span class="more-ticketicon">&gt;</span>
                </div> 
            </li>
        </ul>
        <div class="moreinfo">
            <div class="pagination">
                <a href="javascript:;" class="" @click="handPageUp">上一页</a>
                <span class="page-num">{{index+1}}</span>
                <a href="javascript:;" class="" @click="handPageDown">下一页</a>
            </div>
            <div class="mp-page-text">去哪儿门票</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hello',
        data () {
            return {
                index: 0,
                content: [],
            }
        },
        created() {

            this.$http.get('/static/productItems.json').then(response => {
                this.content = response.body.content;
                this.hot = response.body.content        
            }, response => {
                console.log("response error")
            });
        },
        methods: {
            handPageUp() {
                this.index--;
                if(this.index <= 0) {
                    this.index = 0
                }
                window.scrollTo(0,0)
            },
            handPageDown() {
                this.index++;
                if(this.index >= this.pages.length) {
                    this.index = this.pages.length - 1;
                }
                window.scrollTo(0,0)
            }
            
        },
        computed: {
            pages() {
                const pages = [];
                for (var i = 0; i < this.content.length; i++) {
                    let page = Math.floor(i/4);
                    if(!pages[page]){
                        pages[page] = [];
                    }
                    pages[page].push(this.content[i])
                }
                return pages;
            }
        }
    }
</script>


<style scoped>
@import "../../../assets/font/iconfont.css";
@import '../../../assets/css/common/border.css';
.pagination .page-num {
    color: #212121;
    line-height: .6rem;
    padding: 0 15px;
}
.pagination a{
    display: inline-block;
    width: 1.4rem;
    border: .02rem solid #00afc7;
    background: #fff;
    color: #00afc7;
    line-height: .6rem;
    border-radius: .06rem;
}
.moreinfo{
    padding-top:.2rem;
    color: #00afc7;
    line-height: .82rem;
    text-align: center;
    background: #f5f5f5;
}
.item-more-ticket {
    height: .9rem;
    padding: 0 .2rem;
    color: #9e9e9e;
    font-size: .28rem;
    line-height: .9rem;
    border-bottom:1px solid #ccc;
}
.more-ticketicon {
    float: right;
    height: .9rem;
    font-size: .22rem;
    line-height: .9rem;
}
.item-content{
    border-bottom:1px solid #ccc;
}
.ticket-qunarprice em {
    font-size: .36rem;
}
.ticket-qunarprice {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: .9rem;
    color: #ff8300;
    font-size: .2rem;
    line-height: .9rem;
    text-align: right;
}
.ticket-name {   
    overflow: hidden;
    margin-right: 1.2rem;
    color: #212121;
    font-size: .28rem;
    line-height: .9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.sight-ticket-item {
    position: relative;
    height: .9rem;
    margin: 0 .2rem;
}
.starlevel {
    width: 1.2rem;
    height: .24rem;
    font-size: .24rem;
    color:#00bcd4;
}
.comments-totalnum {
    position: relative;
    top: -.04rem;
    margin-left: .06rem;
    color: #9e9e9e;
    font-size: .24rem;
}
.sight-address, .sight-distance {
    font-size: .24rem;
}
.sight-location {
    position: absolute;
    bottom: 0;
    color: #9e9e9e;
    font-size: 0;
    white-space: nowrap;
}
.sight-comments {
    margin-top: .38rem;
    height: .64rem;
    line-height: .64rem;
}
.item-float-p{
    display: block;
    overflow: hidden;
}
.lowprice-text {
     color: #9e9e9e; 
}
.sight-price em {
    font-size: .36rem;
}
.sight-price {
    position: absolute;
    top: 0;
    right: 0;
    height: .36rem;
    color: #ff8300;
    font-size: .2rem;
}
.sight-name-float {
    float: left;
}
.sight-name {
    overflow: hidden;
    max-width: 60%;
    color: #212121;
    font-size: .32rem;
    line-height: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.tag-word {
    display: inline-block;
    margin-left: .06rem;
    width: .3rem;
    height: .3rem;
    background: #ff1200;
    color: #fff;
    font-size: .24rem;
    line-height: .3rem;
    text-align: center;
}
.sight-detail{
    position: relative;
    overflow: hidden;
    padding-left: .2rem;
    height: 1.6rem;
}
.view-list{
    display: block;
    background: #f5f5f5;
    width:100%;
    height:100%;
    overflow: hidden;
}
.sight-group{
    background: #fff;   
    overflow: hidden;
    margin-top: .2rem;
}
.sight-info{
    overflow: hidden;
    border-top: 1px solid #ccc;
    padding: .2rem;
}
.sight-imgcon{
    width: 1.6rem;
    height: 1.6rem;
    background: pink;
    float:left;
}
.sight-img{
    width: 1.6rem;
    height: 1.6rem;
}
.sight-ticket-item::before{
    border-color:#ccc;
    border-style: dashed;
    transform: scaleY(.2);
}

</style>