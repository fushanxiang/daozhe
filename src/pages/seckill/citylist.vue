<template>
	<div class="content">
		<div class="city-container"> 
    		<ul class="city-list">
		    	<li class="city-item" v-for="list in list" @click="changeColor" :key = "list.index">
      				<span class="iconfont city-icon-none" ref='pos'>&#xe614;</span >
      				<span class="city-inner" ref="city">{{list.city}}</span>
		    	</li>
    		</ul> 
    		<div class="city-expand iconfont" v-on:click="handleClick" ref="outer">&#xe6a6;</div>
    		<ul class="menu-list" v-show="isShow">
	            <li class="menu-item"v-for="item in cityInfo" :key="item.id">
	                <span class="menu-inner" ref="inner" @click="menuClick">{{item.name}}</span>
	            </li>
         	</ul>
     	</div>
	</div>
	
</template>

<script>
export default {
	data () {
		return {
			isShow:false,
			list: [
			{"city": "北京"
			},
			{"city": "上海"
			},
			{"city": "南京"
			},
			{"city": "大连"
			}],
			cityInfo: [{
				id: 1,
				"name": "成都"
			},
			{
				id: 2,
				"name": "青岛"
			},
			{
				id: 3,
				"name": "深圳"
			},
			{
				id: 4,
				"name": "三亚"
			},{
				id: 5,
				"name": "重庆"
			},{
				id: 6,
				"name": "西安"
			}]
			
    	}
	},
	methods: {
		 changeColor(e) {
		 	let font = e.target.previousElementSibling
			let citys = this.$refs.city;
			let position = this.$refs.pos;
			for ( var i = 0 ; i < citys.length; i++ ) {
				citys[i].style.color = "#fff";
				position[i].style.display = 'none';
			}
			e.target.style.color = "#FFF400";
			font.style.display = 'inline-block';
			font.style.color = '#FFF400';
			let city = e.target.innerHTML;
		 	localStorage.cityItem = city;
		},
		menuClick(e){
            var arr = this.$refs.inner;
//          console.log(e.target.innerHTML)
            try{
                localStorage.cityStyleText= e.target.innerHTML;
            }catch(e){} 
            this.isShow = false;
            if(this.isShow){
                this.$refs.outer.style.transform='rotate('+-180+'deg)'
            }else{
                this.$refs.outer.style.transform='rotate('+0+'deg)'
            }
        },
        handleClick(){
            this.isShow=!this.isShow;
            if(this.isShow){
                this.$refs.outer.style.transform='rotate('+-180+'deg)'
            }else{
                this.$refs.outer.style.transform='rotate('+0+'deg)'
            }

        }   
	},
	mounted() {
			let citys = this.$refs.city;
			let position = this.$refs.pos;
		if(!localStorage.cityItem && !localStorage.cityPosition){
			citys[0].style.color = "#FFF400";
			position[0].style.display = 'inline-block';
			position[0].style.color = '#FFF400'
		}else{
			let item = localStorage.cityItem;
			for (var i = 0; i < citys.length; i++) {
				if(citys[i].innerHTML == item){
					citys[i].style.color = "#FFF400";
					position[i].style.display = 'inline-block';
					position[i].style.color = '#FFF400'
				}
			}
		}
	}
}
</script>

<style>
	@import "../../assets/font/iconfont.css";
	
	.content {
		margin-top: 115px;
	}
	.city-container {
		position: relative;
		width: 100%;
		height: .76rem;
		background: #fe5605;
	}
	.city-list {
		float: left;
		width: 6.4rem;
		height: .76rem;
		background: #ff9000;
	}
	.city-icon-none{
		display: none;
	}
	.city-item {
		position: relative;
		float: left;
		text-align: center;
		width: 1.6rem;
		line-height: .76rem;
		color: #FFFFFF;
	}
	.city-icon {
		display: block;
		position: absolute;
		left: .15rem;
		top: 0;
		line-height: .76rem;
	}
	.item-color {
		color: #FFF400;
	}
	.city-expand {
		float: left;
		width: 1rem;
		height: .76rem;
		color: #FFFFFF;
		text-align: center;
		line-height: .76rem;
	}
	.city-expand {
		position: absolute;
		top: 0;
		right: 0;
	}
	.menu-list {
		position: absolute;
	    top: .76rem;
	    left: 0;
	    width: 100%;
	    padding: .2rem 0;
	    background: rgba(254,86,5,.9);
	}
	.menu-item {
		float: left;
	    margin-top: .2rem;
	    width: 20%;
	    height: .5rem;
	}
	.menu-inner {
		display: block;
	    margin: 0 .06rem;
	    background-color: #fff;
	    color: #282828;
	    line-height: .5rem;
	    text-align: center;
	    border-radius: .5rem;
	}
</style>