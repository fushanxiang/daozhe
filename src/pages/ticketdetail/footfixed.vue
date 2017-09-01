<template>
	 <div class="mpg-flexbox">
    <div class="fixbooking-pricecon">
        <span class="fixbooking-priceitem ">
            价格<em class="fixbooking-priceicon">¥</em>
            <span class="fixbooking-price">65</span>
        </span>
    </div>
    <div class="fixbooking-btn">
        <a href="#" class="booking-link">立即预订</a>
    </div>
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
    .mpg-flexbox {
        display: flex;
        width: 100%;
        border: .01rem solid #ccc;
    }
    .fixbooking-pricecon {
        float: left;
        height: .88rem;
        width: 56%;
        background: #fff;
        color: #ff8300;
        text-indent: .2rem;
    }
    .fixbooking-priceitem {
        color: #616161;
        line-height: .88rem;
        font-size: .28rem;
    }
    .fixbooking-priceicon {
        margin-left: .1rem;
        color: #ff8300;
        font-size: .24rem;
    }
    .fixbooking-price {
        margin-right: .1rem;
        font-size: .4rem;
        color: #ff8300;
    }
    .fixbooking-btn {
        overflow: hidden;
        width: 44%;
        height: .88rem;
        background: #ff9800;
        font-size: .36rem;
        text-align: center;
        line-height: .88rem;
    }
    .booking-link {
        display: block;
        color: #fff;
    }
</style>
