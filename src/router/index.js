import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import F1 from '@/components/floor/1F'
import F2 from '@/components/floor/2F'
import F3 from '@/components/floor/3F'
import F4 from '@/components/floor/4F'
import F5 from '@/components/floor/5F'
import F6 from '@/components/floor/6F'
import F7 from '@/components/floor/7F'
import freezer from '@/components/freezer'
import boiler from '@/components/boiler'
import freshAir from '@/components/freshAir'
import facilities from '@/components/facilities'
import fanCoil from '@/components/fanCoil'
import personal from '@/components/personal'
import editPsd from '@/components/editPsd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/1F',
      name: '1F',
      component: F1
    },
    {
      path: '/2F',
      name: '2F',
      component: F2
    },
    {
      path: '/3F',
      name: '3F',
      component: F3
    },
    {
      path: '/4F',
      name: '4F',
      component: F4
    },
    {
      path: '/5F',
      name: '5F',
      component: F5
    },
    {
      path: '/6F',
      name: '6F',
      component: F6
    },
    {
      path: '/7F',
      name: '7F',
      component: F7
    },
    {
      path: '/freezer',
      name: 'freezer',
      component: freezer
    },
    {
      path: '/boiler',
      name: 'boiler',
      component: boiler
    },
    {
      path: '/freshAir',
      name: 'freshAir',
      component: freshAir
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: facilities
    },
    {
      path: '/fanCoil',
      name: 'fanCoil',
      component: fanCoil
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/editPsd',
      name: 'editPsd',
      component: editPsd
    },
  ]
})
