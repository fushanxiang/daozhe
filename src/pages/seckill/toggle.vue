<template>
	<div @scroll="handleScroll()">
		<transition name='fade'>
			<ul class="toggle" v-show='show'>
				<li class="toggle-item" v-for='item in itemInfo' ref='itemlist' v-on:click="handleClick" :key='item.id'>
					{{item.item}}
				</li>
			</ul>
		</transition>
	</div>
</template>
<script>
export default {
	props:["offset"],
	created() {
        window.addEventListener('scroll', this.handleScroll);
    },
	data () {
		return {
			itemInfo:[{
				"id":"0",
				"item":"1元秒"
			},{
				"id":"1",
				"item":"热门TOP"
			},{
				"id":"2",
				"item":"玩水"
			},{
				"id":"3",
				"item":"一日游"
			}],
			show:false
    	}
	},
	methods:{
		handleClick(e){
			const items = this.$refs.itemlist;
			let num = items.indexOf(e.target)
			for (var i = 0; i < items.length; i++) {
					items[i].style.background = '#af16ff';
					items[i].style.color = '#fff';
				}
				items[num].style.background = '#ffee30';
				items[num].style.color = '#af16ff';
			document.body.scrollTop = this.offset[num];
		},
		handleScroll(){	
		 	let scrollT =  document.body.scrollTop;
			if(scrollT > this.offset[0]){
				this.show = true;
				const items = this.$refs.itemlist;
				if(this.offset[0] <= scrollT&&scrollT < this.offset[1]){
					for (var i = 0; i < items.length; i++) {
					items[i].style.background = '#af16ff';
					items[i].style.color = '#fff';
				}
					items[0].style.background = '#ffee30';
					items[0].style.color = '#af16ff';
				}
			if(this.offset[1] <= scrollT&&scrollT < this.offset[2]){
				for (var i = 0; i < items.length; i++) {
					items[i].style.background = '#af16ff';
					items[i].style.color = '#fff';
				}
					items[1].style.background = '#ffee30';
					items[1].style.color = '#af16ff';
				}
			if(this.offset[2] <= scrollT&&scrollT < this.offset[3]-100){
				for (var i = 0; i < items.length; i++) {
					items[i].style.background = '#af16ff';
					items[i].style.color = '#fff';
				}	
				items[2].style.background = '#ffee30';
				items[2].style.color = '#af16ff';
			}
			if(this.offset[3]-100 <= scrollT ){
				for (var i = 0; i < items.length; i++) {
					items[i].style.background = '#af16ff';
					items[i].style.color = '#fff';
				}
				items[3].style.background = '#ffee30';
				items[3].style.color = '#af16ff';
			}
			}else{
				this.show = false;
			}			
		 }
	}
}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to{
	  opacity: 0
	}
	.toggle{
		width:100%;
		height: .8rem;
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
	}
	.toggle-item{
		width: 25%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
		line-height: .8rem;
		text-align: center;
		color: #fff;
		font-weight: bold;
		background: #af16ff;
	}
	
</style>