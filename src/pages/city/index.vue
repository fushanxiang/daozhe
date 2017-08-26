<template>
<<<<<<< HEAD

    <div>
        <div class="city-header">
            <div class="city-header-area">
                <span class="city-in-china city-area">国内</span>
                <span class="city-area">海外</span>
            </div>
         </div>
        <hot-city></hot-city>
        <hot-city-abroad></hot-city-abroad>
=======
    <div>
        <city-header></city-header>
        
        <city-letter></city-letter> 
        <router-view></router-view>
>>>>>>> 1bfab2843daddb2654baf04bbc1f1e4f5b1912ce
    </div>
</template> 

<script>
<<<<<<< HEAD

    import HotCity from './hotcity.vue'
    import HotCityAbroad from './hotcity-abroad.vue'
    export default {

        data () {
            return {} 
        },
        components: {
            "hot-city" :HotCity,
            "hot-city-abroad": HotCityAbroad
        },
        methods: {
            handleChina() {
                location.href='http://localhost:8080/#/city';
            },
            handleAbroad() {
                location.href='http://localhost:8080/#/city/abroadCity';
            }
=======

import cityHeader from './city_header.vue';
import CityLetter from './cityletter.vue';


    export default {
        data () {
            return {}
        },
        components: {
          "city-header": cityHeader,
          "city-letter": CityLetter
>>>>>>> 1bfab2843daddb2654baf04bbc1f1e4f5b1912ce
        }
    }

</script>


<style scoped>

<<<<<<< HEAD
  	.city-header {
        line-height: 1.5rem;
        background: skyblue;
        text-align: center;
    }
    .city-area {
        border: 1px solid white;
        display: inline-block;
        line-height: .5rem;
        width: 2rem;
        color: white;
    }
    .city-in-china {
        background: white;
        color: skyblue;
    }
=======
>>>>>>> 1bfab2843daddb2654baf04bbc1f1e4f5b1912ce
</style>
