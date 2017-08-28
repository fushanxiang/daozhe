<template>
    <div>
        <div class="city-header-area">
            <span class="iconfont city-header-goback">&#xe624;</span>
            <span class="city-china city-area" v-on:click="handleChina">国内</span>
            <span class="city-abroad city-area" v-on:click="handleAbroad">海外</span>
            <div class="header-keyword">
                <input type="text" value="输入城市名或拼音" class="city-keyword" 
                @focus="handleFocus" @blur="handleBlur" >
            </div>
        </div>
        <city-area :change="cityChange"></city-area>
    </div>
</template>

<script>
    import cityArea from './china_city.vue';
    export default {
        data () {
            return {
                cityChange: ''
            }
        },
        components: {
            "city-area": cityArea
        },
        methods: {
            handleBlur(e) {
                if(e.target.value == "") {
                    e.target.value = "输入城市名或拼音";
                } 
            },
            handleFocus(e) {
                e.target.value = "";
            },
            handleChina() {
                this.cityChange = 'china';
            },
            handleAbroad() {
                this.cityChange = 'abroad';
            }
        }
    }

</script>


<style scoped>
    @import "../../assets/font/iconfont.css";
  	.city-header-area {
        line-height: .88rem;
        background: #00afc7;
        text-align: center;
        overflow: hidden;
    }
    .city-header-goback {
        font-size: .36rem;
        color: #fff;
        font-weight: bold;
        float: left;
        padding: 0 .22rem;
    }
    .city-area {
        border: 1px solid white;
        display: inline-block;
        line-height: .56rem;
        width: 2.04rem;
        color: white;
    }
    .city-china {
        border-radius: 3px 0 0 3px;
        float: left;
        margin-left: 10%;
        margin-top: .14rem;
        background: #fff;
        color: #00afc7;
    }
    .city-abroad {
        border-radius: 0 3px 3px 0;
        float: left;
        margin-top: .14rem;
    }
    .header-keyword {
        margin-top: .18rem;
        padding: 0 .4rem .1rem .2rem;
        font-size: .26rem;
        color: #9e9e9e;
    }
    .city-keyword {
        display: block;
        width: 100%;
        height: .3rem;
        line-height: .3rem;
        padding: .16rem 0 .16rem .1rem;
        border-radius: .1rem;
        text-align: center;
    }
</style>
