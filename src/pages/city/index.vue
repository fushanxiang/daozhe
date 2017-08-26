<template>

    <div>
        <div class="city-header">
            <div class="city-header-area">
                <span class="city-in-china city-area">国内</span>
                <span class="city-area">海外</span>
            </div>
         </div>
        <hot-city></hot-city>
        <hot-city-abroad></hot-city-abroad>
    </div>
    
</template> 

<script>

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
