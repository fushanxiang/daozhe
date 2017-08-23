import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import OnedayTour from '@/components/OnedayTour'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/OnedayTour',
      name: 'OnedayTour',
      component: OnedayTour
    }
  ]
})
