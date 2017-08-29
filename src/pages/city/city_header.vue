<template>
    <div>
        <div class="city-header-area">
            <span class="iconfont city-header-goback">&#xe624;</span>
            <span :style="colorChina" class="city-china city-area" v-on:click="handleChina" >国内</span>
            <span :style="colorAbroad" class="city-abroad city-area" v-on:click="handleAbroad">海外</span>
        </div>
        <div class="header-keyword">
            <input type="text"class="city-keyword" value="输入城市名或拼音"
            @focus="handleFocus" @blur="handleBlur" :style="styleObj" @input="handleSearch">
        </div>
         <div class="header-search">
                <p class="header-search-city" v-for="city in cities">
                    {{city}}
                </p>
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
                cities: [],
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
            },
            handleSearch(e) {
                var e = e || window.event,
                    china = this.datas.chinaCity,
                    china = china.concat(this.datas.abroadCity),
                    allSearchCities = [],
                    searchWord = e.target.value.toLowerCase(),
                    searchCharacter = e.target.value;
                for(var i = 0; i < china.length; i++) {
                    china[i][1].filter(function (item) {
                        if(item.itemName.toLowerCase().indexOf(searchWord) !== -1 || item.cityarea.indexOf(searchCharacter) !== -1) {
                            allSearchCities.push(item.cityarea);                          
                        }
                    })
                }
                
                if(allSearchCities.length == 0) {
                    allSearchCities = ['无搜索匹配城市'];
                }
                this.cities = allSearchCities;
                if(searchWord.length === 0) {
                    this.cities = [];
                }
                
            }
        }
    }

</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    @import "../../assets/css/common/border.css";
  	.city-header-area {
        width: 100%;
        line-height: .88rem;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
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
    .header-search {
        width: 100%;
        position: absolute;
        top: 1.72rem;
        background: #fff;
    }
    .header-search-city {
        line-height: .76rem;
        padding-left: .2rem;
        font-size: .28rem;
        color: #212121;
        border-bottom: 0.01rem solid #c9cccd;
    }
</style>
