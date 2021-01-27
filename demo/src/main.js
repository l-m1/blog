import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import ElementUI, { Message } from 'element-ui';; //ui组件库
import 'element-ui/lib/theme-chalk/index.css'; //同上个一起使用
import api from 'server/index.js';

Vue.use(ElementUI)
Vue.prototype.$api = api;
Vue.prototype.$message = Message

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

