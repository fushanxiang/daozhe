<template>
    <div>
        <div class="china-city">
            <hot-city :countryChange="change" :datas="datas"></hot-city>
            <div v-for="city in cityclass" class="city-item">
                <p class="city-class">{{city[0]}}</p>
                <ul>
                    <li v-for="cityName in city[1]" class="city-list" v-bind:spell="cityName.itemName" v-bind:key="cityName.id">
                        {{cityName.cityarea}}
                    </li>
                </ul>
            </div>
        </div>
        <city-letter :letterChange="change" :datas="datas"></city-letter>
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