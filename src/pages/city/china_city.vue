<template>
    <div>
        <div class="china-city">
            <hot-city :countryChange="change" :datas="datas"></hot-city>
            <div v-for="city in cityclass" class="city-item">
                <p class="city-class" ref="spell">{{city[0]}}</p>
                <ul >
                    <li v-for="cityName in city[1]" class="city-list" v-bind:spell="cityName.itemName" v-bind:key="cityName.id" v-on:click="handleHref">
                        {{cityName.cityarea}}
                    </li>
                </ul>
            </div>
        </div>
        <city-letter :letterChange="change" v-on:getWord="changePlace" v-on:handleMoveWord="handleTouchWord" :datas="datas"></city-letter>
    </div>
</template>

<script>
    import HotCity from './hotcity.vue';
    import CityLetter from './cityletter.vue'; 

    export default {
        data () {
            return {
                foreign: false
            }
        },
        props: ['change', 'datas'],
        components: {
          "hot-city": HotCity,
          "city-letter": CityLetter
        },
        computed: {
            cityclass: function() {
                return this.foreign? this.datas.abroadCity :this.datas.chinaCity;
            }
        },
        watch: {
            change: function(value) {
                if(value==='china') {
                    this.foreign = false;
                }
                if(value==='abroad') {
                    this.foreign = true;
                }
            }
        },
        methods: {
            changePlace:function(word) {
                // console.log(word);//传入点击各个单独单词的字母对应的单词
                var spells = this.$refs.spell;
                for(var i = 0; i < spells.length; i++) {
                    if(spells[i].innerText === word) {
                        document.body.scrollTop = spells[i].offsetTop-44;
                    }
                }
            },
            handleTouchWord:function(num) {
                // console.log(num);//获取手指在字母上移动时，该字母距离屏幕顶部的高度
                var spells = this.$refs.spell;
                if(num < spells.length && num >= 0) {
                    document.body.scrollTop = spells[num].offsetTop-44;
                }
            },
            handleHref:function(ev) {
                var e = ev || window.event;
                this.$store.commit("changeCity", {city: e.target.innerText});
                location.href = 'http://localhost:8080/#/';
            }
        }
    }
</script>

<style scoped>
    .city-class {
        line-height: .54rem;
        padding-left: .3rem;
        color: #616161;
        font-size: .26rem;
        border-top: 1px solid #dfe0e1;
        background: #f5f5f5;
    }
    .city-list {
        display: block;
        line-height: .76rem;
        padding-left: .2rem;
        font-size: .28rem;
        color: #212121;
        border-top: 1px solid #dfe0e1;
    }
</style>