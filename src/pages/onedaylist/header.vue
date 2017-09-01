<template>
	<header class="header">
		<a class="header-left iconfont" @click="handleClick">&#xe600;</a>
		<div class="header-search">
			<input type="text" class="header-title" ref="input" @click="handleHeaderSearch" value="一日游" placeholder="请输入城市或景点" autocomplete="off" />
			<span class="delete iconfont" v-show="show" @click="handleDelete">&#xe60d;</span>
		</div>
		<div class="header-right">
			<router-link :to="{name:'city',params: {id:123}}">
				<span class="nav-city">搜索</span>
			</router-link>
		</div>
	</header>	
</template>

<script>
export default {
	data() {
		return {
			show: ''
		}
	},
	methods: {
        handleClick() {
            this.$router.go(-1)
        },
        handleHeaderSearch() {
        	this.show = true;
        	if(this.$refs.input.value == ""){
        		this.show = false
        		this.$router.push({name: 'search'});
        	}
        },
        handleDelete() {
        	this.show = false;
        	this.$refs.input.value = ''	;
        }
    }
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header {
		position: relative;
	    display: flex;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	    z-index: 99;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    margin-top: 0.02rem;
	    color: #fff;
	    font-size: .40rem;
	    text-align: left;
	}
	.header-search {
		box-sizing: border-box;
		flex: 1;
		box-flex: 1;
    	position: relative;
   		height: .6rem; 
	    line-height: .6rem;
	    padding: 0 .6rem 0 .2rem;
	    margin: .14rem 0;
	    background: #fff;
	    border-radius: .06rem;
	}
	.header-title {
	    position: relative;
	    display: block;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    font-size: .3rem;
	    border: 0;
	    border-radius: .06rem;
	    outline: none;
	}
	.delete {
		position: absolute;
	    top: 0;
	    right: 0;
	    width: .58rem;
	    height: .58rem;
	    font-size: .4rem;
	    color: #d5d5d5;
	}
	.header-right{
		display: inline-block;
	    height: .88rem;
	    line-height: .88rem;
	    padding: 0 .1rem;
	}
	.nav-city {
		display: inline-block;
	    width: .74rem;
	    margin-right: .04rem;
	    color: #fff;
	    font-size: .28rem;
	}
</style>