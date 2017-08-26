<template>
    <div>
        <city-header></city-header>
        <hot-city></hot-city>
        <router-view></router-view>
    </div>
</template>

<script>

import HotCity from './hotcity.vue';
import cityHeader from './city_header.vue';

    export default {
        data () {
            return {}
        },
        components: {
          "hot-city": HotCity,
          "city-header": cityHeader
        }
    }

</script>


<style scoped>
  	
</style>
