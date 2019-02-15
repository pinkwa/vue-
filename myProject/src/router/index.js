import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/Contents/HelloWorld'

import homeContent from '../pages/home'
import memberContent from '../pages/member'
import shopcarContent from '../pages/shopcar'
import searchContent from '../pages/search'
import newsListContent from '../pages/newsList'
import newInfoContent from '../pages/newInfo'
import photoListContent from '../pages/photoList'
import photoInfoContent from '../pages/photoInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/' ,redirect:'/home'},
  { path: '/home',  component:homeContent},
  { path:'/member', component:memberContent},
  { path: '/shopcar', component: shopcarContent },
  { path: '/search', component:searchContent },
  { path: '/home/newsList', component:newsListContent },
  { path: '/home/newInfo/:id', component:newInfoContent },
  { path: '/home/photoList', component:photoListContent},
  { path: '/home/photoInfo/:id', component:photoInfoContent}
    
  ],
  linkActiveClass: 'mui-active' // 类库
})
