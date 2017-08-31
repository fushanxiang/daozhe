<template>
    <div>
        <div>{{$route.params.id}}</div>
        <div>{{$route.query.name}}</div>
        <router-link to="/city/shanghai">link</router-link>
        <button @click="handleClick">跳转</button>
        <router-view></router-view>
  
    <bottom-introduce></bottom-introduce>
    </div>
</template>

<script>
import Introduce from '../order/introduce.vue'

export default {
    data () {
        return {
            
        }
    },
    methods: {
        handleClick() {
            this.$router.go(-1)
        },
        bottomClick(){
            alert(6);
        }
    },
    components:{
        "bottom-introduce":Introduce
    }
}
</script>


<style scoped>
.mp-fixbooking-btn {
    overflow: hidden;
    height: .98rem;
    background: #ff9800;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: 0.98rem;

}
.mpg-flexbox-item{
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
}
.mpg-flexbox-item a{
    color: #fff;
}
</style>
