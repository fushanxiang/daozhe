<template>
	<div class="content-city">
		<div class="cityarea-group">
			<div class="cityarea-title">您的位置</div>
			<div class="cityarea-content city-now" >
				<div class="cityitem-light">
					<router-link to="/">
						<p class="cityitem-name  cityitem-seleted ellipsis">{{$store.state.city}}</p>
					</router-link>
				</div>
			</div>
		</div>
		<div class="cityarea-group">
			<div class="cityarea-title">热门城市</div>
			<div class="cityarea-content city-now">
				<div class="cityitem-light" v-for="item in cityclass">
					<router-link to="/">
						<p v-bind:id="item.id" @click="handleSelectedClick($event)" class="cityitem-name ellipsis">{{item.city}}</p>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default { 
	
	data () {
		return {
			foreign: false,
			dataId:[]
    	}
	},
	props: ['countryChange', 'datas'],
	methods: {
		handleSelectedClick(event) {
			var  event = event || window.event;
			var SelectId = event.target.id;
			this.$store.commit ("changeCity", {city: event.target.innerText});
			localStorage.selectedCity = event.target.innerText;
			this.dataId.push(SelectId);
		}
	},
	computed: {
        cityclass: function() {
            return this.foreign? this.datas.hotAbroadCity: this.datas.hotChinaCity;
        }
    },
	watch: {
		countryChange: function(value) {
            if(value==='china') {
                this.foreign = false;
            }
            if(value==='abroad') {
                this.foreign = true;
            }
		}
	}
}
</script>

<style scoped>
	.content-city {
		background: #F5F5F5;
	}
	.city-now {
		overflow: hidden;
	    padding: .04rem .5rem .26rem .2rem;
	    border:0.01rem solid #C9CCCD;
	    border-left: 0;
	    border-right: 0;
	    background: #fff;
	}
	.cityarea-title {
	    line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	}
	.cityitem-light {
		box-sizing: border-box;
	    float: left;
	    width: 33.33%;
	    padding: .2rem .14rem 0 .1rem;
	}
	.cityitem-name {
	    display: block;
	    line-height: 28px;
	    text-align: center;
	    color: #212121;
	    border: .02rem solid #c9cccd;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	}
	.ellipsis {
	    overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.cityitem-seleted {
	    border-color: #00afc7;
	    color: #00afc7;
	}
</style>