<template>
<div>
	<div class="pd-ticket-group" v-for="item in ticketinfo" :key="item.id">
		<h3 class="pd-ticket-type">
			<span class="pd-ticketype-ticket"></span>{{item.title}}
		</h3>
		<div>
			<ticket-about></ticket-about>
			<ticket-about></ticket-about>		
			<div class="pd-more-refresh pd-border-top" @click="handleClick" :style="isActive?'display:block':'display:none'">
				查看剩余报价
				<span class="pd-ticket-type-extend iconfont">&#xe62d;</span>
			</div>
		</div>	
	</div>
</div>
</template>

<script>
  	import ticketabout from '../ticketabout.vue'
export default {  
	  data () {
		    return {		      
		      isActive:true,
		      isPop:false
		    }
	  },
	  props:["ticketinfo"],
	  components:{
	  	"ticket-about": ticketabout
	  },
	  methods:{
		  	handleClick(){
		  		this.isActive = !this.isActive;
		  	},
		  	handleOrderClick:function() {
		  		this.$store.commit("changeIsPop");
		  	}
	  	}
	}
</script>

<style scoped>
	.pd-ticket-group{
		position: relative;
		margin-top: .2rem;
	    background: #fff
	}
	.pd-ticket-type{
		overflow: hidden;
	    position: relative;
	    z-index: 4;
	    margin-bottom: -.02rem;
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .32rem;
	    line-height: .88rem;
	    text-indent: .4rem;
	}
	.pd-ticketype-ticket{
		display: inline-block;
	    position: absolute;
	    width: .36rem;
	    height: .36rem;
	    top: .26rem;
	    left: .2rem;
	    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
	    margin-right: .1rem;
	    background-size: .4rem 3rem;
	}	
	 .pd-more-refresh{
	 	height: .8rem;
	    background: #fff;
	    color: #616161;
	    line-height: .8rem;
	    text-align: center;
	    z-index:2;
	 }                                                                                                                     
</style>

