<template>
	<div @scroll="handleScroll">       
    	<common-header></common-header>
    	<pic-list></pic-list>
    	<choose-city></choose-city>
        <toggle></toggle>
        <summerselect></summerselect>
	</div>
</template>

<script>
import CommonHeader from './commonheader'
import PicList from './piclist'
import ChooseCity from './choosecity'
import SummerSelect from './summerselect.vue'
import Toggle from './toggle.vue'
export default {
    name: 'index',

    created() {
        window.addEventListener('scroll', this.handleScroll);
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
                console.log(oToggleH)
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
        }  
    }
}
</script>

<style scoped>

</style>
