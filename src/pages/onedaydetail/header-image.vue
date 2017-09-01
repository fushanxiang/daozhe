<template>
<div class="Page">
	<transition name="fade">
	<div class="fix" @scroll="heightScroll()" v-show="scrollTop">
		<span class="return-fix iconfont" @click="handleReturnClick">&#xe624;</span>
		[北京出发]天安门+故宫【赠送珍宝...		
	</div>
	</transition>
	<div class="sights">
		<div class="return-page iconfont" @click="handleReturnClick">&#xe624;</div>
        <img class="sights-img" @click="handleImgClick" src="http://img1.qunarzz.com/p/tts0/1705/fb/bc9bf7ef985f7702.jpg_280x200_a2b83d7c.jpg" />   	    		
	</div>
	<div class="mask" @click="handleCloseClick" v-show="show" @touchmove.prevent>
	    <div class="background-img" v-show="show" >  	       
	        <swiper :options="swiperOption" >
	            <swiper-slide v-for="item in swiperInfo" :key="item.id">
	    	        <div class="img-container" >
	    		        <img class="swiper-img" :src="item.src"/>
	    	        </div>	    	
	            </swiper-slide>	     	
	        </swiper>		
	    </div> 	
	</div>
</div>
</template>
<script>	
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data () {
        return {
            show:false,
            scrollTop: false,
            scroll: '',
            swiperOption: {
				direction : 'horizontal',
				paginationClickable :true,
				observeParents:true
			}
        }
     },
    props: ['swiperInfo'],
    methods:{
  	    handleReturnClick() {
  		    this.$router.go(-1)
  	    },
  	    handleImgClick() {
  		    this.show=true
  	    },
  	    handleCloseClick() {  	    	
  	    	this.show=false 	
  	    },
  	    heightScroll() {
  	    	if(document.body.scrollTop> 120){  	    		
  	    		this.scrollTop = true  	    		
  	    	}else{
  	    		this.scrollTop = false
  	    	} 	    	
  	    }  	    
     },
    mounted() {
           window.addEventListener('scroll', this.heightScroll)
    },
    components:{
  	    "swiper": swiper,
		"swiper-slide": swiperSlide
    }
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	@import '~swiper/dist/css/swiper.css';
	.Page{
		width: 100%;
		height: 100%;
	}
	.fix{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.8rem;
		background: #14bbce;
		z-index: 888;
		font-size: 0.35rem;
		text-align: center;
		color: white;
		line-height: 0.8rem;		
	}	
	.fade-enter-active, .fade-leave-active{
        transition: opacity 1.5s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0
    }
	.return-fix{
		float: left;
	}
	.sights {
		position: relative;
	}
	.sights-img {
	    width:100%;
	    height: 4rem;       
	}
	.return-page{
		position: absolute;
		top:3%;
		left: 3%;
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 50%;
		line-height: 0.78rem;
		background: #5f666e;
		text-align: center;	
		color: white;
		font-size: 0.4rem;
		overflow: hidden;
		opacity: 0.3;
	}
	.mask{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.background-img{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.9);
		z-index: 1000;		
	}
	.img-container{	
		width: 100%;	
	}
	.swiper-img{
		margin-top: 3.7rem;
		width:100%;
		height: 3.7rem;		
	}
	
</style>
