<template>
    <div class="city-aside">
        <div class="city-aside-set"> 
            <div class="city-aside-set-character" v-for="(item, index) of character" v-on:click="handleLetterClick($event)">{{item[0]}}</div>
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
                console.log(el);
            },
            broadcast() {//发布订阅模式（dispatcher让store说一声）//$(this).trigger(与jq相似)
                this.emit("change");
            },
            addChangeFn(fn) {
                this.on("change", fn);//当改变数据的时候，在store.js中改变存的数据内容
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
        // methods: {
        //     handleCharacterClick(ev) {
        //         var e = ev || window.event;
        //         var word=e.path[0].innerHTML;
        //         this.word;
        //         if (window.localStorage) {
        //             localStorage[word]=word;
        //         } else {
        //             Cookie.write("word",word);  
        //         }

                
        //     }
        // }
        
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
