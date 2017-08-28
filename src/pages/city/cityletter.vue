<template>
    <div class="city-aside">
        <div class="city-aside-set"> 
            <div class="city-aside-set-character" @touchmove="touchmoveword" v-for="(item, index) of character" v-on:click="handleLetterClick">{{item[0]}}</div>
        </div>
    </div>
</template> 

<script>
    var appData = require('./china.json');
    var abroadData = require('./abroad.json');
    export default {
        data () {
            return {
                character: []
            } 

        },
        props: ['letterChange'],
        created() {
            var cityData=appData.data;
            for(var i=0; i<cityData.length;i++) {
              this.character.push(cityData[i]);
            };
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
                var touchword=e.targetTouches[0].clientY;
                this.$emit("handleMoveWord",touchword);
            }

        },
        watch: {
            letterChange: function(value) {
                var cityData = [];
                if(value==='china') {
                    this.character = [];
                    cityData = appData.data;
                }
                if(value==='abroad') {
                    this.character = [];
                    cityData = abroadData.data;
                }
                for (var i = 0; i < cityData.length; i++) {
                    this.character.push(cityData[i]);
                }
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
