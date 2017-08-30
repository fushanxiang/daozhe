<template>
    <div>
        <seckill-banner></seckill-banner>
        <city-list></city-list>
        <hot-top :hot="hot"></hot-top>
        <hot-top :hot="topic"></hot-top>
        <hot-top :hot="tour"></hot-top>
    </div>
</template>

<script>
import SeckillBanner from './seckillbanner.vue';
import HotTop from './hottop.vue';
import CityList from './citylist.vue';

export default {
    name:'seckill',
    data () {
        return {
            hot:[],
            topic:[],
            tour:[],
        }
    },
     created() {
	    this.$http.get('/static/seckill.json').then(response => {
	      var data = response.body.data;
	      this.hot = data.hot;
	      this.topic = data.topic;
	      this.tour = data.tour;
	    }, response => {
	      console.log("ajax error");
	    });
	  },
    components:{
        'seckill-banner':SeckillBanner,
        "city-list": CityList,
        "hot-top": HotTop
    }
}
</script>


<style scoped>
	
</style>