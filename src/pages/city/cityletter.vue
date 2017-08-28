<template>
    <div class="city-aside">
        <div class="city-aside-set"> 
            <div class="city-aside-set-character" v-for="(item, index) of cityclass" v-on:click="handleLetterClick($event)">{{item[0]}}</div>
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
                console.log(el);
            },
            broadcast() {//发布订阅模式（dispatcher让store说一声）//$(this).trigger(与jq相似)
                this.emit("change");
            },
            addChangeFn(fn) {
                this.on("change", fn);//当改变数据的时候，在store.js中改变存的数据内容
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
        font-size: .24rem;
        color: #00afc7;
        padding: .02rem;
    }

</style>
