import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/Contents/HelloWorld'

import homeContent from '../pages/home'
import memberContent from '../pages/member'
import shopcarContent from '../pages/shopcar'
import searchContent from '../pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/' ,redirect:'/home'},
  { path: '/home',  component:homeContent},
  { path:'/member', component:memberContent},
  { path: '/shopcar', component: shopcarContent },
  { path: '/search', component:searchContent },
    
  ],
  linkActiveClass: 'mui-active' // 类库
})
