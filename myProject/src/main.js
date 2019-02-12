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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})