<template>
	<div>
    	<common-header message="暑假大放价"></common-header>
    	<div @scroll="handleScroll">       
        	<pic-list :piclistInfo="piclistInfo"></pic-list>
        	<choose-city :choosecityInfo="choosecityInfo"></choose-city>
            <toggle></toggle>
            <summerselect :selectInfo="selectInfo"></summerselect>
    	</div>
    </div>
</template>

<script>

import CommonHeader from '../components/commonheader'
import PicList from './piclist'
import ChooseCity from './choosecity'
import SummerSelect from './summerselect.vue'
import Toggle from './toggle.vue'
export default {
    name: 'index',

    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.$http.get('/static/summer_vacation.json').then(response => {
            var data = response.body.data;
            this.piclistInfo = data.piclistInfo;
            this.selectInfo = data.selectInfo;
            this.choosecityInfo = data.choosecityInfo;
        }, response => {
          console.log("ajax error");
        });
    },

    destroyed(){
        window.removeEventListener("scroll", this.handleScroll)
    },

    methods:{
        handleScroll(){
            let scrollTop = document.body.scrollTop,
                clientHeight = document.body.clientHeight,
                oToggle = document.getElementById("toggle"),
                oToggleImg =document.getElementById("sumselect-img"),
                oToggleH=oToggleImg.offsetTop;
            if(scrollTop>=oToggleH) {
                oToggle.className="toggle-fixed";
                
            }else{
                oToggle.className="toggle";
            }
        }
    },

    components:{
        "summerselect": SummerSelect,
        "common-header":CommonHeader,
        "pic-list":PicList,
        "choose-city":ChooseCity,
         "toggle": Toggle
    },

    data () {
        return {
            piclistInfo:[],
            selectInfo:[],
            choosecityInfo:[]
        }  
    }
     
  }
</script>

<style scoped>

</style>
