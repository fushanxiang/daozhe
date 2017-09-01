<template>
    <div class="city-aside">
        <div class="city-aside-set"> 
            <div class="city-aside-set-character" @touchmove="touchmoveword" v-for="(item, index) of cityclass" v-on:click="handleLetterClick">{{item[0]}}</div>
        </div>
    </div>
</template> 

<script>
    export default {
        data () {
            return {
                character: [],
                foreign: false
            } 
        },
        props: ['letterChange', 'datas'],
        computed: {
            cityclass: function() {
                return this.foreign? this.datas.abroadCity :this.datas.chinaCity;
            }
        },
        watch: {
            letterChange: function(value) {
                if(value==='china') {
                    this.foreign = false;
                }
                if(value==='abroad') {
                    this.foreign = true;
                }
            }
        },
        methods: {
            handleLetterClick(event) {
                var el = event.currentTarget;
                var getWord=el.innerHTML;
                // alert(getWord);
                this.$emit("getWord",getWord);
            },
            touchmoveword(ev) {
                var e=ev||window.event;
                e.preventDefault();
                var touchword=Math.floor((e.targetTouches[0].clientY-110)/18);
                this.$emit("handleMoveWord",touchword); 
            }
        }
    }
</script>

<style scoped>
    .city-aside {
        position: fixed;
        right: 0;
        top: 2.16rem;
    }
    .city-aside-set {
        height: auto;
        overflow: hidden;
    }
    .city-aside-set-character {
        line-height: .32rem;
        padding: .02rem;
        font-size: .24rem;
        color: #00afc7;
    }
</style>

