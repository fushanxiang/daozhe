<template>
    <div class="city-header-area">
        <span class="iconfont city-header-goback">&#xe624;</span>
        <span class="city-china city-area" v-on:click="handleChina">国内</span>
        <span class="city-abroad city-area" v-on:click="handleAbroad">海外</span>
    </div>
</template>

<script>

    export default {
        data () {
            return {}
        },
        methods: {
            handleChina() {
                location.href='http://localhost:8080/#/city';
            },
            handleAbroad() {
                location.href='http://localhost:8080/#/city/abroadCity';
            }
        }
    }

</script>


<style scoped>
    @import "../../assets/font/iconfont.css";
  	.city-header-area {
        line-height: .88rem;
        background: #00afc7;
        text-align: center;
        overflow: hidden;
    }
    .city-header-goback {
        font-size: .36rem;
        color: #fff;
        font-weight: bold;
        float: left;
        padding: 0 .22rem;
    }
    .city-area {
        border: 1px solid white;
        display: inline-block;
        line-height: .56rem;
        width: 2.04rem;
        color: white;
    }
    .city-china {
        background: white;
        color: #00afc7;
        border-radius: 3px 0 0 3px;
        float: left;
        margin-left: .44rem;
        margin-top: .14rem;
    }
    .city-abroad {
        border-radius: 0 3px 3px 0;
        float: left;
        margin-top: .14rem;
    }
</style>
