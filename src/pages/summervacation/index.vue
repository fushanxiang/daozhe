<template>
	<div @scroll="handleScroll">       
    	<common-header></common-header>
    	<pic-list></pic-list>
    	<choose-city></choose-city>
        <summerselect></summerselect>
	</div>
</template>

<script>
import CommonHeader from './commonheader'
import PicList from './piclist'
import ChooseCity from './choosecity'
import SummerSelect from './summerselect.vue'

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
            let scrollTop=document.body.scrollTop,
                clientHeight=document.body.clientHeight,
                oSumSelect=document.getElementById("summer-select"),
                oToggle=document.getElementById("toggle"),
                oSumSelectH=oSumSelect.offsetTop,
                oToggleH=oToggle.offsetTop;
                console.log(scrollTop)
                console.log(clientHeight)
                console.log(oToggleH)
                if(scrollTop=oSumSelectH+oToggleH) {
                    oToggle.className="toggle-fixed";
                }else{
                    oToggle.className="toggle";
                }
            // if(scrollTop-offsetTop<clientHeight){
            //     console.log(scrollTop-offsetTop)
            //     console.log(clientHeight)
            //     oToggle.className="toggle-fixed";
            // }else{
            //     oToggle.className="toggle";
            // }
        }
    },

    components:{
        "summerselect": SummerSelect,
        "common-header":CommonHeader,
        "pic-list":PicList,
        "choose-city":ChooseCity
    },

    data () {
        return {
        }  
    }
}
</script>

<style scoped>

</style>
