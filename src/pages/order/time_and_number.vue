<template>
	<div class="order-info-middle">
		<div class="order-info-time">
			<label class="order-time-title">游玩日期</label>
			<div class="order-time-select">
				<input type="hidden" id="data" value="2017-8-30" name="data" notfocus='true'>
				<div class="order-info-datacard">
					<span class="datacart-item datacart-item-today" :class="selected1 ? 'datacart-item-selected' : ''" @click="handleDateSelect">
						<em class="datacart-item-name datacart-item-today" :class="selected1 ? 'datacart-item-name-selected' : ''">今天</em>
						<strong class="datecart-item-date datacart-item-today">{{month}}月{{date}}日</strong>
					</span>
					<span class="datacart-item datacart-item-tomorrow" :class="selected2 ? 'datacart-item-selected' : ''" @click="handleDateSelect">
						<em class="datacart-item-name datacart-item-tomorrow" :class="selected2 ? 'datacart-item-name-selected' : ''">明天</em>
						<strong class="datecart-item-date datacart-item-tomorrow">{{month}}月{{date > 31 ? 1 : date+1}}日</strong>
					</span>
					<span class="datacart-item" v-on:click="handleDatePickerClick">
						<em class="datacart-item-name datacart-item-otherday" @click="handleDateSelect">其他日期</em>
						<strong class="datecart-item-date"></strong>
					</span>
				</div>
			</div>
		</div>
		<div class="order-info-num">
			<label class="order-num-title">购买数量</label>
			<div class="order-num-input">
				<span class="minus-btn" v-on:click="handleMinusBtnClick" :class="value == 1 ? 'minus-btn-color':'' ">-</span>
				<input class="order-num-current" type="text" :value="value" />
				<span class="add-btn" v-on:click="handleAddBtnClick">+</span>
			</div>
		</div>
		<div class="shadow" v-on:click="handleDatePickerClick" v-show="show">
			<div class="date-picker">
				<date-picker :timestamp='timestamp'></date-picker>
			</div>
		</div>
	</div>
</template>

<script>
	import DatePicker from './date_picker.vue'
	export default {
		data() {
			return {
				value: 1,
				selected1: false,
				selected2: false,
				month: new Date().getMonth()+1,
				date: new Date().getDate(),
				timestamp: "2017-8-31",
				show: false
			}
		},
		props:['goodsInfo'],
		methods: {
			handleAddBtnClick() {
				this.value += 1;
				this.$bus.emit('totalPriceChange', this.value)
			},
			handleMinusBtnClick() {
				this.value > 1 ? this.value -= 1 : this.value = 1;
				this.$bus.emit('totalPriceChange', this.value)
			},
			handleDateSelect(event) {
				if(/datacart-item-today$/.test(event.target.className)) {
					this.selected1 = !this.selected1;
					this.selected2 = false;
				}else if(/datacart-item-tomorrow$/.test(event.target.className)) {
					this.selected2 = !this.selected2;
					this.selected1 = false;
				}else if(/datacart-item-otherday$/.test(event.target.className)) {
					this.selected2 = false;
					this.selected1 = false;
				};
			},
			handleDatePickerClick() {
				this.show = !this.show;
			}
		},
		components: {
			'date-picker': DatePicker
		}
	}
</script>
<style scoped>
	.order-info-middle {
		margin: .2rem 0;
		background: #fff;
	}
	.order-info-time {
		position: relative;
		overflow: hidden;
		min-height: .5rem;
		padding: .24rem;
	}
	.order-time-title {
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .92rem;
	}
	.order-time-select {
		overflow: hidden;
		height: .86rem;
		margin-left: .5rem;
	}
	.datacart-item {
		float: left;
		width: 29.3%;
		display: inline-block;
		min-width: 1.2rem;
		min-height: .76rem;
		border: .02rem solid #bdbdbd;
		background: #fff;
		text-align: center;
		border-radius: .1rem;
	}
	.datacart-item-name, .datecart-item-date {
		display: block;
		width: 100%;
	}
	.datacart-item-name {
		padding-top: .08rem;
		color: #212121;
		font-size: .28rem;
		line-height: .36rem;
	}
	.datacart-item-name-selected {
		color: #fff;
	}
	.datecart-item-date {
		line-height: .32rem;
	}
	.datacart-item {
		padding-bottom: .06rem;
		margin-left: 4.6%;
		font-size: .24rem;
		color: #888;
	}.datacart-item-selected {
		background: #00bcd4;
		color: #fff;
	}
	
	.datacart-item:first-of-type {
		margin-left: 0;
	}
	.datacart-item:last-of-type .datacart-item-name {
		line-height: .6rem;
	}
	.order-info-num {
		position: relative;
		padding: .3rem .2rem .3rem .2rem;
		overflow: hidden;
	}
	.order-info-num:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: .02rem;
		background: #e0e0e0;
	}
	.order-num-title {
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .6rem;
	}
	.order-num-input {
		display: inline-block;
		float: right;
		border: .02rem solid #ccc;
		padding: .02rem;
	}
	.minus-btn, .add-btn {
		display: inline-block;
		float: left;
		width: .56rem;
		text-align: center;
		line-height: .6rem;
		font-size: .6rem;
	}
	.minus-btn {
		background: #00afc7;
		color: #fff;
	}
	.minus-btn-color {
		background: #f0f0f0;
		color: #cad1d7;
	}
	.add-btn {
		background: #00afc7;
		color: #fff;
	}
	.order-num-current {
		display: block;
		float: left;
		width: .72rem;
		line-height: .6rem;
		text-align: center;
		border: 0;
	}
	.shadow {
		position: fixed;
		top: .88rem;
		bottom: 1rem;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.3);
	}
	.date-picker {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>