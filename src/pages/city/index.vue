<template>
    <hot-city></hot-city>
</template>

<script>

import HotCity from './hotcity.vue'

    export default {
        name: 'city-index',
        data () {
            return {
              name: 'city-index'
            }
        },
        components: {
          "hot-city": HotCity
        }
    }
</script>


<style scoped>
  	
</style>
