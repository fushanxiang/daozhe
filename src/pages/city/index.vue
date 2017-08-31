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
                var res = response.body;
                this.datas.chinaCity = res.china;
                this.datas.abroadCity = res.abroad;
                this.datas.hotChinaCity = res.hotcity;
                this.datas.hotAbroadCity = res.hotcityAbroad;
            }, response => {
                console.log("ajax error");
            });
        },
    }
</script>

<style scoped>
</style>
