<template>
	<div @scroll="handleScroll">
        <summerselect></summerselect>
	</div>
</template>

<script>
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
                oToggle=document.getElementById("toggle"),
                offsetTop=oToggle.offsetTop;
            if(scrollTop>=offsetTop){
                oToggle.className="toggle-fixed";
            }else{
                oToggle.className="toggle";
            }
        }
    },

    data () {
        return {
        }  
    },
  
    components:{
        "summerselect": SummerSelect
    }
}
</script>

<style scoped>

</style>
