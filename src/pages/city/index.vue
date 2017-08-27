<template>
    <div>
      	<div class="city-header">
            <div class="city-header-area">
                <span class="city-in-china city-area" v-on:click="handleChina">国内</span>
                <span class="city-area" v-on:click="handleAbroad">海外</span>
            </div>
        </div>
        <hot-city></hot-city>
        <city-letter></city-letter> 
        <router-view></router-view>
    </div>
</template>

<script>
    import HotCity from './hotcity.vue'
    import CityLetter from './cityletter.vue'

    export default {
        name: 'city-index',

        data () {
            return {} 
        },
        components: {
            "city-letter": CityLetter,
            "hot-city": HotCity
        },
        methods: {
            handleChina() {
                location.href='http://localhost:8080/#/city';
            },
            handleAbroad() {
                location.href='http://localhost:8080/#/city/abroadCity';
            }
        }

    }

</script>


<style scoped>
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
</style>
