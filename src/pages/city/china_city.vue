<template>	
    <div class="china-city">
        <hot-city></hot-city>
        <div v-for="city in cityClass" class="city-item">
            <p class="city-class">{{city[0]}}</p>
            <ul>
                <li v-for="cityName in city[1]" class="city-list" v-bind:spell="cityName.itemName" v-bind:key="cityName.id">
                    {{cityName.cityarea}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import HotCity from './hotcity.vue';
    var appData = require('./china.json');
    export default {
        name: 'hello',
        data () {
            return {
                cityClass: []
            }
        },
        components: {
          "hot-city": HotCity
        },
        created() {
            var cityData = appData.data;
            for (var i = 0; i < cityData.length; i++) {
                this.cityClass.push(cityData[i]);
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
