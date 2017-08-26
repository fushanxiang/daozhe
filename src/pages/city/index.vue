<template>
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
    <div>
      	<div class="city-header">
            <div class="city-header-area">
                <span class="city-in-china city-area" v-on:click="handleChina">国内</span>
                <span class="city-area" v-on:click="handleAbroad">海外</span>
            </div>
        </div>
        <router-view></router-view>
    </div>
>>>>>>> origin/20170822-lishihao-test
</template>

<script>

<<<<<<< HEAD
import HotCity from './hotcity.vue'

=======
>>>>>>> origin/20170822-lishihao-test
>>>>>>> a336b0bc3564dda48bb8c25c0df9a34bc71d1b15
    export default {
        name: 'city-index',
        data () {
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
          "hot-city": HotCity
>>>>>>> a336b0bc3564dda48bb8c25c0df9a34bc71d1b15
        }
    }

</script>


<style scoped>
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
</style>
