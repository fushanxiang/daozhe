<template>
	<div class="position-sale">
	    <div class="position">
	    	<div class="position-directon">
	    	    <span class="position-left iconfont">&#xe6f1;</span>
			    定位失败
			</div>
			<div class="position-directon">
			    <span class="position-right iconfont">&#xe629;</span>
				九元门票
			</div>
	    </div>
        <div class="sale"></div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style scoped>
    .position-sale{
    	overflow: hidden;
    	background-color: #f5f5f5;
    }
    .position{
    	width: 100%; 	
    	border-top:1px solid #e0e0e0;
    	overflow: hidden;
    	margin-bottom: .24rem;
    }
    .position-directon{
    	float: left;
    	width: 3.74rem;
    	font-size:.28rem;
    	color:#212121;
    	line-height: .98rem;
    	text-align: center;
    	background-color: #fff; 
    }
    .position-directon:nth-child(1){
    	border-right: 1px solid #e0e0e0;
    }
    .position-left{
    	font-size: .5rem;
    	margin-right: .05rem;
    	color:#616161;
    }
    .position-right{
    	font-size: .32rem;
    	margin-right: .05rem;
    	color:#616161;
    }
    .sale{
    	width: 100%;
    	height: 1.4rem;
    	text-align: center;
    	border:1px solid #e0e0e0;
    	background:#fff url(http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png) center center no-repeat;
    	background-size:auto 100%;

    }
	
</style>