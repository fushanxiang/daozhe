import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Weekend from '@/pages/Weekend/index'

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
        },
        {
            path: '/weekend',
            name: 'weekend',
            component: Weekend
        }
    ]
})
