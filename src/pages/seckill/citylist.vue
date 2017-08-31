<template>
	<div class="content">
		<div class="city-container"> 
    		<ul class="city-list">
		    	<li class="city-item" v-for="list in list" @click="changeColor" :key = "list.id">
			    	<div class="city-inner">
	      				<span class="iconfont city-icon-none" ref='pos'>&#xe614;
	      				</span >
	      				<span ref="city" class="city-icon-info">
	      					{{list.city}}
	      				</span>
	      			</div>
		    	</li>
    		</ul> 
    		<div class="city-expand iconfont" v-on:click="handleClick" ref="outer">&#xe6a6;
    		</div>
    		<ul class="menu-list" v-show="isShow">
	            <li class="menu-item"v-for="item in cityInfo" :key="item.id">
	                <span class="menu-inner" ref="inner" @click="menuClick">	{{item.name}}
	                </span>
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
			{
				"city": "北京",
				"id":0
			},
			{
				"city": "上海",
				"id":1
			},
			{
				"city": "南京",
				"id":2
			},
			{
				"city": "大连",
				"id":3
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
		 	let font = e.target.previousElementSibling;
			let citys = this.$refs.city;
			let position = this.$refs.pos;
			let city = e.target.innerHTML;
			for ( var i = 0 ; i < citys.length; i++ ) {
				citys[i].style.color = "#fff";
				position[i].style.color = "#fff";
				position[i].style.display = 'none';
			}
			e.target.style.color = "#FFF400";
			font.style.display = 'inline-block';
		 	localStorage.cityItem = city;
		},
		menuClick(e){
            let citys = this.$refs.city;
			let position = this.$refs.pos;
			    this.isShow = false;
            try{
                localStorage.cityStyleText= e.target.innerHTML;
                localStorage.cityItem = e.target.innerHTML;
            }catch(e){} 
            for (var i = 0; i < citys.length; i++) {
				citys[i].style.color = "#fff";
				position[i].style.display = 'none';
			}
			citys[3].innerHTML = localStorage.cityStyleText;
			citys[3].style.color = "#FFF400";
			position[3].style.display = 'inline-block';
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
		if(!localStorage.cityStyleText){
			citys[3].innerHTML = '大连'
		}else{
			citys[3].innerHTML = localStorage.cityStyleText;	
		}
		if(!localStorage.cityItem){
			citys[0].style.color = "#FFF400";
			position[0].style.display = 'inline-block';
		}else{
			let item = localStorage.cityItem;
			for (var i = 0; i < citys.length; i++) {
				if(citys[i].innerHTML == item){
					citys[i].style.color = "#FFF400";
					position[i].style.display = 'inline-block';
					citys[i].style.color = '#FFF400';
				}
			}
		}
	}
}
</script>

<style>
	@import "../../assets/font/iconfont.css";
	.city-container {
		position: relative;
		width: 100%;
		height: .76rem;
		background: #fe5605;
	}
	.city-list {
		float: left;
		width: 88%;
		height: .76rem;
		background: #ff9000;
	}
	.city-icon-none{
		display: none;
		position: absolute;
		top: 5%;
		left: 5%;
		margin-top: 
	}
	.city-inner{
		display: inline-block;
		position: relative;
		width: 100%;
		height: 100%;
		line-height: .76rem;
	}
	.city-item {
		position: relative;
		float: left;
		width: 25%;
		text-align: center;
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
	.city-icon-info{
		display: inline-block;
		width: 100%;
		height: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .76rem;
	}
	.city-expand {
		width: 12%;
		height: .76rem;
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
	    width: 100%;
	    overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	    background-color: #fff;
	    color: #282828;
	    line-height: .5rem;
	    text-align: center;
	    border-radius: .5rem;
	}
</style>