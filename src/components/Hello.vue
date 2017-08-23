<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>门票景点</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">首页</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">列表</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">推荐</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">销量</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">我的项目</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">你的</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">我的</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">他的</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">故宫</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue 一日游项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
