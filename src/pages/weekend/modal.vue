<template>
    <transition name="fade">
        <div class="img-view" @click="bigImg">
            <div class="img-layer"></div>
            <div class="img">
                <img class="img-info" :src="imgSrc">
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: ['imgSrc'],
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
    transition: all .2s linear;
    transform: translate3D(0, 0, 0);
}
.fade-enter,
.fade-leave-active {
    transform: translate3D(100%, 0, 0);
}
.img-view {
    position: relative;
    width: 100%;
    height: 100%;
}

/*遮罩层样式*/
.img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
}
.img-info{
    max-width: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    margin: auto;
    z-index: 1000;
}
</style>