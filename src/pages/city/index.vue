<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div>
        <hot-city></hot-city>
        <hot-city-abroad></hot-city-abroad>
    </div>
=======
<<<<<<< HEAD
    <div>
       <div class="city-header">
            <div class="city-header-area">
                <span class="city-in-china city-area">国内</span>
                <span class="city-area">海外</span>
            </div>
        </div>
        <city-letter></city-letter> 
    </div>
    
</template> 

<script>
    import CityLetter from './cityletter.vue'
    var appData=require('./china.json');
=======
<<<<<<< HEAD
    <hot-city></hot-city>
=======
>>>>>>> ad69d19a0a70caf5190b9b223a5cfb567ce0f9c8
    <div>
        <city-header></city-header>
        <hot-city></hot-city>
        <router-view></router-view>
    </div>
<<<<<<< HEAD
=======
>>>>>>> origin/20170822-lishihao-test
>>>>>>> e69e153b7dfe50caecc48337eb0032b5877e00e2
>>>>>>> ad69d19a0a70caf5190b9b223a5cfb567ce0f9c8
</template>

<script>

<<<<<<< HEAD
import HotCity from './hotcity.vue';
import cityHeader from './city_header.vue';

=======
<<<<<<< HEAD
import HotCity from './hotcity.vue'
<<<<<<< HEAD
import HotCityAbroad from './hotcity-abroad.vue'
=======

=======
>>>>>>> origin/20170822-lishihao-test
>>>>>>> a336b0bc3564dda48bb8c25c0df9a34bc71d1b15
>>>>>>> e69e153b7dfe50caecc48337eb0032b5877e00e2
>>>>>>> ad69d19a0a70caf5190b9b223a5cfb567ce0f9c8
    export default {
        data () {
<<<<<<< HEAD
            return {}
        },
        components: {
          "hot-city": HotCity,
          "city-header": cityHeader
=======
<<<<<<< HEAD
            return {} 
        },
        components: {
            "city-letter": CityLetter
=======
            return {
<<<<<<< HEAD
              name: 'city-index'
=======
                cityClass: []
            }
        },
        methods: {
            handleChina() {
                location.href='http://localhost:8080/#/city';
            },
            handleAbroad() {
                location.href='http://localhost:8080/#/city/abroadCity';
>>>>>>> origin/20170822-lishihao-test
            }
        },
        components: {
<<<<<<< HEAD
          "hot-city": HotCity,
          "hot-city-abroad": HotCityAbroad
=======
          "hot-city": HotCity
>>>>>>> a336b0bc3564dda48bb8c25c0df9a34bc71d1b15
>>>>>>> e69e153b7dfe50caecc48337eb0032b5877e00e2
>>>>>>> ad69d19a0a70caf5190b9b223a5cfb567ce0f9c8
        }
    }

</script>


<style scoped>
<<<<<<< HEAD
  	
=======
<<<<<<< HEAD
  
=======
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
<<<<<<< HEAD

=======
>>>>>>> origin/20170822-lishihao-test
>>>>>>> a336b0bc3564dda48bb8c25c0df9a34bc71d1b15
>>>>>>> ad69d19a0a70caf5190b9b223a5cfb567ce0f9c8
</style>
