<template>
    <div>
        <city-header></city-header>
        <city-letter></city-letter> 
        <router-view></router-view>
    </div>
</template> 

<script>

    import HotCity from './hotcity.vue';
    import HotCityAbroad from './hotcity-abroad.vue';
    import cityHeader from './city_header.vue';
    import CityLetter from './cityletter.vue';

    export default {

        data () {
            return {} 
        },
        components: {
            "hot-city" :HotCity,
            "hot-city-abroad": HotCityAbroad,
            "city-letter": CityLetter,
            "city-header": cityHeader
        }
    }

</script>


<style scoped>

</style>
