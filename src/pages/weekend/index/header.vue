<template>
  <div class="header">
  		<a class="header-left iconfont">&#59001;</a>
  		<h1 class="header-title"><a class="header-city" href="###">北京</a>
  		<span class="header-city-option"></span>
  		
			
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
		float: left;
	    display: block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
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
		top: .4rem;
		left: 2.6rem;
		width:0; 
		height:0; 
		border:.1rem;
		border-style: solid;
		border-color:transparent;
		border-top: .15rem solid #fff;
		
	}

</style>