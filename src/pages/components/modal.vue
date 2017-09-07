<template>
    <transition name="fade">
        <div class="img-view" @click="bigImg" @touchmove.prevent>
            <div class="img-layer">
                <img class="img-info" :src="imgSrc">
                <p class="content">{{imgTitle}}</p>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: ['imgSrc','imgTitle'],
        methods: {
            bigImg() {
                this.$emit('clickit')
            }
        }
    }

</script>
<style scoped>
/*动画*/
.fade-enter-active,
.fade-leave-active {
     transition: opacity .5s
}
.fade-enter,
.fade-leave-active {
     opacity: 0
}
.img-view {
    position: relative;
    width: 100%;
    height: 100%;
}
.img-layer {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
}
.img-info{
    display: block;
    width:80%;
    height:26%;
    position: absolute;
    left: 10%;
    top: 35%;
    z-index: 1000;
}
.content{
    width:60%;
    height:26%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    position: absolute;
    left: 20%;
    top: 64%;
    z-index: 1000;
    color: rgba(255,255,255,.5);
}
</style>