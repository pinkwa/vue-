// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import './styles/common.css'
// 引入mui的css文件
import './styles/common.css'
// 引入mui的css文件
import './libs/mui/css/mui.css'
// 引入mui扩展字体的css文件
import './libs/mui/css/icons-extra.css'


// 1.导入mint-ui和其样式文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.use(MintUI)



// 导入vue-resource
import vueRseource from 'vue-resource'
Vue.use(vueRseource)
import moment from 'moment'
// 定义一个全局的过滤器
Vue.filter( 'dateFormat', function(dataStr,placced="YYYY-MM-DD HH-mm-ss"){
    return  moment().format('YYYY-MM-DD HH-mm-ss');
})

// 挂载全局的url公共的地址
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';
Vue.config.productionTip = false
// 导入缩略图
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

// 注册一个全局评论的组件
import comment from "./components/commont.vue"
Vue.component('comment',comment)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
