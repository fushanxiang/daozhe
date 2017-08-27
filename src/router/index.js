import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import ChinaCity from '@/pages/city/china_city'
import AbroadCity from '@/pages/city/abroad_city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
      // children: [{
      //   path: '',
      //   component: ChinaCity
      // },{
      //   path: 'abroadCity',
      //   component: AbroadCity
      // }]
    }
  ]
})
