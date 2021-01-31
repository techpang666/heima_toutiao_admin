import Vue from 'vue'
import App from './App.vue'

// 引入常规样式(字体/重置样式)
import '@/styles/index.less'

// 导入及注册路由
import router from '@/router/index'

// 按需引入element组件
import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)









Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
