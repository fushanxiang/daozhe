<template>
    <div>
        <div class="prddetail-group" id="comments-con">
            <h3 class="prddetail-title border-bottom">用户评论</h3>
            <div class="prddetail-content">
                <div class="comments-item">
                    <div class="content-level">
                        <span class="starlevel">
                            <strong class="iconfont starlevel-gain" style="width:100%">&#xe730;&#xe730;&#xe730;&#xe730;</strong>
                            <span class="iconfont starlevel-total"></span>
                        </span>
                        <span class="comments-date">v*9&nbsp;&nbsp;2017-08-17</span>
                    </div>
                    <p class="comments-text ellipsis2">昨天中午完成了心心念念的长城旅游，真的很棒，超级赞！俗话说不到长城非好汉、所以有机会一定要来参观下，长城上面的人不是一般的多，但是长城上面的风景确实很不错，也很好爬，为了美好风景再累也是值得的，而且每一块砖上面都刻有了字迹，登上去以后你才会感慨道中国古人的伟大，和广大人名的团结力量。</p>
                    <div class="comments-imgs">
                        <img class="comments-img" src="http://img1.qunarzz.com/piao/fusion/1708/bd/6bc5c44bec1e6e02.jpg_240x240_4a0c5259.jpg">
                        <img class="comments-img" src="http://img1.qunarzz.com/piao/fusion/1708/df/41169710ef3fee02.jpg_240x240_3223a317.jpg">
                    </div>
                </div>
                <div class="comments-item">
                    <div class="content-level">
                        <span class="starlevel">
                            <strong class="iconfont starlevel-gain" style="width:100%">&#xe730;&#xe730;&#xe730;&#xe730;</strong>
                            <span class="iconfont starlevel-total"></span>
                        </span>
                        <span class="comments-date">v*9&nbsp;&nbsp;2017-08-17</span>
                    </div>
                    <p class="comments-text ellipsis2">我们是一家四口参加这次一日游的，北京一日游的团餐比其他地方的好很多，口味很不错，吃饱的同时还能吃的稍好！姚导游也很尽心，真正做到是零购物。省心省力，到北京是一定要去长城的！雄伟壮观！不到长城非好汉，不吃烤鸭真遗憾！我是9号家庭。</p>
                    <div class="comments-imgs">
                        <img class="comments-img" src="http://img1.qunarzz.com/piao/fusion/1708/d5/917f1db668b20c02.jpg_240x240_a2b9f7ce.jpg">
                    </div>
                </div>
            </div>
            <router-link :to="{name:'comment'}">
                <div class="more border-top">
                 	 查看更多评论		<span class="iconfont prddetail-arrow">&#xe62d;</span>
                </div>
            </router-link>           
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
    .prddetail-group {
        margin-top: .2rem;
        padding: .01rem 0;
        background-color: #fff;
    }
    .prddetail-title {
        overflow: hidden;
        position: relative;
        height: .84rem;
        padding: 0 .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .16rem;
    }
    .prddetail-title::after {
        content: " ";
        position: absolute;
        top: .28rem;
        left: .2rem;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        border-radius: .06rem;
    }
    .prddetail-content {
        overflow: hidden;
        padding: 0 .24rem;
        color: #616161;
        font-size: .28rem; 
        line-height: .4rem;
    }
    .comments-item {
        padding: .2rem 0 !important;
        color: #616161;
        
    }
    .comments-item:first-child {
        border-bottom:1px dashed #616161; 
    }
    .starlevel-gain {
         color: #00bcd4;
     }
    .starlevel {
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
    }
    .comments-date {
        float: right;
        margin-left: .2rem;
        color: #616161;
    }
    .comments-text.ellipsis2 {
        -webkit-line-clamp: 4;
    }
    .comments-text {
        font-size: .28rem;
        line-height: .4rem;
        margin: .1rem 0;
    }
    .ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
    .comments-imgs {
        overflow: hidden;
        overflow-x: auto;font-size: 0;
        white-space: nowrap;
    }
    .comments-img {
        width: 1.6rem;
        height: 1.6rem;
    }
    .comments-img:not(:first-child) {
        margin-left: .2rem;
    }
    .more {
        height: .8rem;
        color: #616161;
        font-size: .28rem;
        line-height: .8rem;
        text-align: center;
    }
    .prddetail-arrow {
        color: #9e9e9e;
        font-size: .2rem;
        margin-left: .08rem;
    }


    
</style>


