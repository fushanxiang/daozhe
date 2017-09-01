import Vue from 'vue'
import Router from 'vue-router'
import Onedaydetail from '@/pages/onedaydetail/index'
import Comment from '@/pages/onedaydetail/comment'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Purchaseorder from '@/pages/onedaydetail/purchaseorder'
import Weekend from '@/pages/weekend/index'
import SecKill from '@/pages/seckill/index'
import Introduce from '@/pages/onedaydetail/introduce'
import Productdetail from '@/pages/productdetail/index'
import search from '@/search/search'
import List from '@/pages/list/index'



Vue.use(Router)
export default new Router({
  routes: [
     {
       path: '/',
       name: 'index',
       component: Index
     },  
      {
        path: '/onedaydetail',
        name: 'order',
        component: Onedaydetail
      },
      {
      path: '/purchaseorder',
      name: 'purchaseorder',
      component: Purchaseorder
      },
      {
        path: "/onedaydetail/comments",
        name: 'comment',
        component: Comment
      },
      {
      path: '/weekend',
      name: 'weekend',
      component: Weekend
    },{
      path:'/seckill',
      name:'seckill',
      component:SecKill
    },{
      path: '/city',
      name: 'city',
      component: City,
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/productdetail',
      name: 'productdetail',
      component: Productdetail
    },
    {
      path: '/list',
      name: 'list',
      component: List

    },{
      path: '/search',
      name: 'search',
      component: search

    }]

})
