<template>
    <div>
        <hot-city></hot-city>
        <hot-city-abroad></hot-city-abroad>
    </div>
</template>

<script>

import HotCity from './hotcity.vue'
import HotCityAbroad from './hotcity-abroad.vue'
    export default {
        name: 'city-index',
        data () {
            return {
              name: 'city-index'
            }
        },
        components: {
          "hot-city": HotCity,
          "hot-city-abroad": HotCityAbroad
        }
    }
</script>


<style scoped>
  
</style>
