<template>
    <div>
        <div class="main">
            <common-header message="1元秒杀！门票绝对低价！"></common-header>
            <seckill-banner :cheapInfo="cheapInfo" @changeA='changePositionA' @changeB='changePositionB' @changeC='changePositionC'></seckill-banner>
            <toggle :offset="offset"></toggle>
            <city-list></city-list>
            <hot-top :hot="hot"></hot-top>
            <hot-top :hot="topic"></hot-top>
            <hot-top :hot="tour"></hot-top>
        </div>
    </div>
</template>
<script>
import CommonHeader from '../components/commonheader'
import SeckillBanner from './seckillbanner.vue';
import Toggle from './toggle.vue';
import HotTop from './hottop.vue';
import CityList from './citylist.vue';
export default {
    name:'seckill',
    data () {
        return {
            hot:[],
            topic:[],
            tour:[],
            cheapInfo:[],
            offset:['','', '','']
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.$http.get('/static/seckill.json').then(response => {
            var data = response.body.data;
            this.hot = data.hot;
            this.topic = data.topic;
            this.tour = data.tour;
            this.cheapInfo = data.cheapInfo;
        }, response => {
          console.log("ajax error");
        });
      },
    updated(){
        this.offset[0] = document.getElementById('anchor').offsetTop;
        this.offset[1] = document.getElementsByClassName('hot')[0].offsetTop;
        this.offset[2] = document.getElementsByClassName('hot')[1].offsetTop;
        this.offset[3] = document.getElementsByClassName('hot')[2].offsetTop;
    },
    
     methods:{
        changePositionA(){
            document.body.scrollTop = this.offset[1]
        },
        changePositionB(){
            document.body.scrollTop = this.offset[2]
        },
        changePositionC(){
            document.body.scrollTop = this.offset[3]
        }
    }, 
    destroyed(){
        window.removeEventListener("scroll", this.handleScroll)
    },  
    components:{
        'seckill-banner':SeckillBanner,
        'toggle':Toggle,
        "city-list": CityList,
        "common-header":CommonHeader,
        "hot-top": HotTop
    }
}
</script>

<style scoped>
	
</style>