<template>
    <div>
        <city-header :datas="datas"></city-header>
    </div>
</template> 

<script>
   import cityHeader from './city_header.vue';

    export default {
        data () {
            return {
                datas: {
                    chinaCity: [],
                    abroadCity: [],
                    hotChinaCity: [],
                    hotAbroadCity: []
                }
            } 
        },
        components: {
          "city-header": cityHeader
        },
        created() {
            this.$http.get('/static/city_select.json').then(response => {
                this.datas.chinaCity = response.body.china;
                this.datas.abroadCity = response.body.abroad;
                this.datas.hotChinaCity = response.body.hotcity;
                this.datas.hotAbroadCity = response.body.hotcityAbroad;
            }, response => {
                console.log("ajax error");
            });
        },

    }
</script>

<style scoped>

</style>
