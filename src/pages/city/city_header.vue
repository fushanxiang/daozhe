<template>
    <div>
        <div class="city-header-area">
            <span class="iconfont city-header-goback">&#xe624;</span>
            <span :style="colorChina" class="city-china city-area" v-on:click="handleChina" >国内</span>
            <span :style="colorAbroad" class="city-abroad city-area" v-on:click="handleAbroad">海外</span>
        </div>
        <div class="header-keyword">
            <input type="text" value="输入城市名或拼音" class="city-keyword" 
            @focus="handleFocus" @blur="handleBlur" :style="styleObj">
        </div>
        <city-area :change="cityChange" :datas="datas"></city-area>
    </div>
</template>

<script>
    import cityArea from './china_city.vue';
    export default {
        data () {
            return {
                cityChange: '',
                styleObj:{
                    "text-align": "center"
                },
                colorChina: {
                    "color": "#00afc7",
                    "background": "#fff"
                },
                colorAbroad: {
                    "color": "#fff",
                    "background": "#00afc7"
                }
            }
        },
        props: ['datas'],
        components: {
            "city-area": cityArea
        },
        methods: {
            handleBlur(e) {
                if(e.target.value == "") {
                    e.target.value = "输入城市名或拼音";
                }
                this.styleObj = {
                    textAlign: "center"
                }
            },
            handleFocus(e) {
                e.target.value = "";
                this.styleObj = {
                    textAlign: "left"
                }
            },
            handleChina() {
                this.cityChange = 'china';
                this.colorChina = {
                    "color": "#00afc7",
                    "background": "#fff"
                }
                this.colorAbroad = {
                    "color": "#fff",
                    "background": "#00afc7"
                }
            },
            handleAbroad() {
                this.cityChange = 'abroad';
                this.colorAbroad = {
                    "color": "#00afc7",
                    "background": "#fff"
                }
                this.colorChina = {
                    "color": "#fff",
                    "background": "#00afc7"
                }
            }
        }
    }

</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
  	.city-header-area {
<<<<<<< HEAD
        position: fixed;
        left: 0;
        top: 0;
        line-height: .88rem;
        width: 100%;
=======
        width: 100%;
        line-height: .88rem;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
>>>>>>> f9fde26f090f44356d6424f0436859cb329842f2
        background: #00afc7;
        text-align: center;
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
        color: #00afc7;
        background: #fff;
    }
    .city-abroad {
        border-radius: 0 3px 3px 0;
        float: left;
        margin-top: .14rem;
    }
    .header-keyword {
        margin-top: .88rem;
        padding: 0 .4rem .1rem .2rem;
        font-size: .26rem;
        color: #9e9e9e;
        background: #00afc7;
    }
    .city-keyword {
        display: block;
        width: 100%;
        height: .3rem;
        line-height: .3rem;
        padding: .16rem 0 .16rem .1rem;
        border-radius: .1rem;
    }
</style>
