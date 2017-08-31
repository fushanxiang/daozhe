<template>
    <div>
        <div class="evaluate">
            <div class="evaluate-title">
                <span class="evaluate-title-score">4.7</span>
                <span class="evaluate-title-text">分</span>
                <span class="evaluate-title-tagscore">非常满意</span>
                <span class="evaluate-title-totalnum">用户评论(69)
                    <span class="evaluate-title-logo">></span>
                </span>
            </div>
        </div>
        <div class="comments-border">
            <div class="comments-item">
                <div class="comments-cotent">
                    <span class="comments-starts">
                        <strong class="comments-start iconfont" >&#xe64b;&#xe64b;&#xe64b;&#xe64b;</strong>
                    </span>
                    <span class="comments-date">w*5&nbsp;&nbsp;2017-08-22</span>
                </div>
                <router-link :to="{name:'comment'}">
                    <p class="comments-text">刘强导游讲解幽默，推荐的旅游路线不错，在旅游旺季，长城上面人山人海，摩肩接踵的条件下，为我们推荐不错的游览路线，让我与孩子感受到来了长城爬长城，并欣赏到了蜿蜒曲折的壮观的长城，而不是来看人了。确实不错！给赞</p>
                </router-link>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";

    .evaluate {
        width: 100%;
        height: .8rem;
        background: white;
        line-height: .8rem;
        position: relative;
        margin-top: .2rem;
    }
    .evaluate-title-score {
        font-size: .4rem;
        color: #00afc7;
        margin-left: .2rem;
    }
    .evaluate-title-text {
        color: #00afc7;
    }
    .evaluate-title-tagscore {
        display: inline-block;
        margin-left: .1rem;
        color: #616161;
    }
    .evaluate-title-totalnum {
        float: right;
        position: relative;
        top: .25rem;
        display: inline-block;
        line-height: .28rem;
        font-size: .28rem;
        margin-left: .16rem;
        margin-right: .2rem;
        color: #9e9e9e;
    }
    .comments-border {
        width: 100%;
        height: 1.68rem;
        border-top:1px dashed grey; 
        background: white;
    }
    .comments-item {
       padding: .2rem 
    }
    .comments-start {
        color: #00bcd4;
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
    .comments-text {
        line-height: .4rem;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        overflow: hidden;
        text-overflow: ellipsis;
         color: #616161;
    }
</style>
