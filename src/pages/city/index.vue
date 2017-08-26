<template>
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
    export default {
        name: 'city-index',
        data () {
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
>>>>>>> origin/20170822-lishihao-test
</style>
