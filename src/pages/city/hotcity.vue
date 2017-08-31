<template>

	<div class="content-city">

		<div class="cityarea-group">
			<div class="cityarea-title">您的位置</div>
			<div class="cityarea-content city-now">
				<div class="cityitem-light">
					<a href="###" class="cityitem-name cityitem-seleted ellipsis">澳门</a>
				</div>
			</div>
		</div>
		<div class="cityarea-group">
			<div class="cityarea-title">热门城市</div>
			<div class="cityarea-content city-now">
				<div class="cityitem-light" v-for="item in cityclass">
					<a href="###" class="cityitem-name ellipsis">{{item.city}}</a>
				</div>
			</div>
		</div>
	</div>

</template>
<script>

export default { 
	
	data () {
		return {
			foreign: false
    	}
	},
	props: ['countryChange', 'datas'],
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
	.content-city{
		background: #F5F5F5;
	}
	.cityarea-content {
	    overflow: hidden;
	    background: #fff;
	}
	.city-now {
	    padding-top: .04rem;
	    padding-bottom: .26rem;
	    padding-right: .5rem;
	    padding-left: .2rem;
	    border:0.01rem solid #C9CCCD;
	    border-left: 0;
	    border-right: 0;
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