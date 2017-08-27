<template>
    <div>
        <div class="china-city">
            <hot-city :countryChange="change"></hot-city>
            <div v-for="city in cityClass" class="city-item">
                <p class="city-class">{{city[0]}}</p>
                <ul>
                    <li v-for="cityName in city[1]" class="city-list" v-bind:spell="cityName.itemName" v-bind:key="cityName.id">
                        {{cityName.cityarea}}
                    </li>
                </ul>
            </div>
        </div>
        <city-letter :letterChange="change"></city-letter>
    </div>
</template>

<script>
    import HotCity from './hotcity.vue';
    import CityLetter from './cityletter.vue'; 
    var appData = require('./china.json');
    var abroadData = require('./abroad.json');
    export default {
        name: 'hello',
        data () {
            return {
                cityClass: [],
                changeData:''
            }
        },
        props: ['change'],
        components: {
          "hot-city": HotCity,
          "city-letter": CityLetter
        },
        created() {
            var cityData = appData.data;
            for (var i = 0; i < cityData.length; i++) {
                this.cityClass.push(cityData[i]);
            };
        },
        watch: {
            change: function(value) {
                var cityData = [];
                if(value==='china') {
                    this.cityClass = [];
                    cityData = appData.data;
                }
                if(value==='abroad') {
                    this.cityClass = [];
                    cityData = abroadData.data;
                }
                for (var i = 0; i < cityData.length; i++) {
                    this.cityClass.push(cityData[i]);
                }
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
