<template>
    <div>
        <city-header></city-header>
        <city-letter></city-letter> 
        <router-view></router-view>
    </div>
</template> 

<script>

    import cityHeader from './city_header.vue';
    import CityLetter from './cityletter.vue';
   
    export default {
        data () {
            return {}
        },
        components: {
          "city-header": cityHeader,
          "city-letter": CityLetter
        }
    }

</script>


<style scoped>

</style>
