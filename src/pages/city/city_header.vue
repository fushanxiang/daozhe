<template>
    <div class="backgroud-color" ref="outer">
        <div class="city-header-area">
            <router-link to="/">
                <span class="iconfont city-header-goback">&#xe624;</span>
            </router-link>
            <span :style="colorChina" class="city-china city-area" v-on:click="handleChina">国内</span>
            <span :style="colorAbroad" class="city-abroad city-area border" v-on:click="handleAbroad">海外</span>
        </div>
        <div class="header-keyword">
            <input type="text" value="输入城市名或拼音" class="city-keyword" 
            @focus="handleFocus" @blur="handleBlur" :style="styleObj" @input="handleInput">
            <div class="search-cities">
                <div v-for="city in cities" class="search-city" @click="selectCity">{{city}}</div>
            </div>
        </div>
        <city-area :change="cityChange" :datas="datas" v-show="show"></city-area>
    </div>
</template>

<script>
    import cityArea from './china_city.vue';
    export default {
        data () {
            return {
                cityChange: '',
                cities: [],
                url: "",
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
                },
                country: true,
                cities: [],
                show: true
            }
        },
        props: ['datas'],
        components: {
            "city-area": cityArea
        },
        methods: {
            handleBlur(e) {
                    e.target.value = "输入城市名或拼音";
                this.styleObj = {
                    textAlign: "center"
                }
                // this.cities = [];
            },
            handleFocus(e) {
                e.target.value = "";
                this.cities = [];
                this.show = true;
                this.styleObj = {
                    textAlign: "left"
                }
            },
            handleChina() {
                this.cityChange = 'china';
                this.cities = [];
                this.show = true;
                this.colorChina = {
                    "color": "#00afc7",
                    "background": "#fff"
                }
                this.colorAbroad = {
                    "color": "#fff",
                    "background": "#00afc7"
                }
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.country = true;
                this.show = true;
                this.cities = [];
            },
            handleAbroad() {
                this.cityChange = 'abroad';
                this.cities = [];
                this.show = true;
                this.colorAbroad = {
                    "color": "#00afc7",
                    "background": "#fff"
                }
                this.colorChina = {
                    "color": "#fff",
                    "background": "#00afc7"
                }
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                
                this.country = false;
                this.show = true;
                this.cities = [];
            },
            handleInput(ev) {
                var e = ev || window.event,
                    searchWord = e.target.value.toLowerCase(),
                    searchCharacter = e.target.value,
                    searchCities = this.country? this.datas.chinaCity:this.datas.abroadCity,
                    allSearchCities = [];
                for (var i = 0; i < searchCities.length; i++) {
                    var getCities = searchCities[i][1];                  
                        getCities.filter(function (item) {
                            if(item.itemName.toLowerCase().indexOf(searchWord) !== -1 || item.cityarea.indexOf(searchCharacter) !== -1) {
                                allSearchCities.push(item.cityarea);                          
                            }
                        })
                }
                if(allSearchCities.length === 0) {
                    allSearchCities = ['无搜索匹配城市'];
                }
                this.cities = allSearchCities;
                this.show = false;
                if (searchWord.length === 0) {
                    this.cities = [];
                    this.show = true;
                }
            },
            selectCity(ev) {
                var e = ev || window.event;
                if(e.target.innerText !== '无搜索匹配城市') {
                    this.$store.commit("changeCity", {city: e.target.innerText});
                    localStorage.selectedCity = e.target.innerText;
                    this.$router.push('/')
                }else {
                    this.$router.push('')
                    this.cities = [];
                    this.show = true;
                    this.cities = [];
                }
            }
        },
        mounted() {
            this.$refs.outer.style.height = window.innerHeight * 0.02 - 0.88 + 'rem';
        }
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .backgroud-color {
        background: #f5f5f5;
    }
    .city-header-area {
        width: 100%;
        line-height: .88rem;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background: #00afc7;
        text-align: center;
    }
    .city-header-goback {
        width: 6%;
        float: left;
        padding: 0 .22rem;
        font-size: .36rem;
        color: #fff;
        font-weight: bold;
    }
    .city-area {
        border: 1px solid white;
        display: inline-block;
        line-height: .56rem;
        width: 30%;
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
        margin-top: .88rem;
        padding: 0 .4rem .1rem .2rem;
        background: #00afc7;
        font-size: .26rem;
        color: #9e9e9e;
    }
    .city-keyword {
        display: block;
        width: 100%;
        line-height: .3rem;
        padding: .16rem 0 .16rem .2rem;
        border-radius: .1rem;
        border: none;
        color: #777;
    }
    .search-cities {
        width: 100%;
        position: absolute;
        left: 0;
        top: 1.68rem;
        background: #fff;
    }
    .search-city {
        line-height: .76rem;
        width: 100%;
        padding-left: .2rem;
        border-bottom: 1px solid #dfe0e1;
        font-size: .28rem;
        color: #212121;
    }
    .search-cities {
        position: absolute;
        left: 0;
        top: 1.68rem;
        background: #fff;
        width: 100%;
    }
    .search-city {
        line-height: .76rem;
        width: 100%;
        padding-left: .2rem;
        border-top: 1px solid #dfe0e1;
        font-size: .28rem;
        color: #212121;
    }
</style>