<template>
    <div>

        <ul class="location">

            <li class="location-Left location-border-right">
                <a class="header-left iconfont">&#xe615;定位失败</a>
                
            </li>
            <li class="location-Right">
                <a class="header-left iconfont">&#xe629;9元门票</a>
              
            </li>
        
        </ul>

        <div class="sale">

            <div class="sale-main"></div>

        </div>

    </div>
</template>

<script>
    export default {
          name: 'hello',
          data () {
                return {
                    
                }
          }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "../../assets/font/iconfont.css";

li {
    list-style: none;
}
a {
    color: #000;
}
.location {
    width: 100%;
    height: .9rem;
    border-top: .1rem;
    border-color: #ccc;
    line-height: .9rem;
    text-align: center;
    font-size: .56px;
    position: relative;
}
.location:before {
    top: 0;
    transform-origin: 0 0;
    transform: scaleY(.5);
    left: 0;
    width: 100%;
    height: 1px;
    content: " ";
    overflow: hidden;
    position: absolute;
    border-top: 1px solid #e0e0e0;
}

.location-Left {
    width: 50%;
    float: left;
    position: relative;
}
.location-border-right:before {
    right: 0;
    transform-origin: 0 0;
    transform: scaleY(.5);
    top: 0;
    width: .01rem;
    height: 200%;
    content: " ";
    overflow: hidden;
    position: absolute;
    border-right: 1px solid #e0e0e0;
}
.location-Right {
    width: 50%;
    float: left;
}
.sale {
    width: 100%;
    height: 1.4rem;
    margin-top: .2rem;
    background: #fff;
}
.sale-main {
    height: 1.4rem;
    background: url('http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png') center center no-repeat;
    background-size: auto 100%;
    margin: 0 auto;
    display: block;
    position: relative;
}
.sale-main:before {
    border-color: #ccc;
    transform: scaleY(.5);
    top: 0;
    border-top: 1px solid #e0e0e0;
    transform-origin: 0 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: " ";
    overflow: hidden;
    position: absolute;
}


</style>
