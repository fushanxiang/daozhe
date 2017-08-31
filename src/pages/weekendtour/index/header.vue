<template>
  <div class="header">
  		<a class="header-left iconfont">&#59031;</a>
  		<h1 class="header-title">
  		<router-link :to="{name:'city',params: {id:123}}">
  			<span class="header-city" href="###">{{$store.state.city}}</span>
  			<span class="header-city-option"></span>
  		</router-link>
  		</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
     
  }
}
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	.header{
		width: 100%;
		height: 0.88rem;
		background:#00bcd4;
	}
	.header-left {
		font-weight: 600;
		float: left;
	    display: block;
	    width: .4rem;
	    line-height: .88rem;
	    padding-left: .14rem;
	    color: #fff;
	    font-size: .5rem;
	    text-align: left;
	}
	.header-title{
		overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff; 
	    position: relative;

	}
	.header-city{
		color: white;

	}
	.header-city-option {
		position: absolute;
		top: .38rem;
		width:0; 
		height:0; 
		margin-left: .1rem;
		border:.1rem;
		border-style: solid;
		border-color:transparent;
		border-top: .15rem solid #fff;
		
	}

</style>