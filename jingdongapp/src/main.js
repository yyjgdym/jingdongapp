import Vue from 'vue'
import App from './App.vue'
import service from './utils/service'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router/index'
Vue.config.productionTip = false
Vue.prototype.$service=service;
// Vue.use(ElementUI)
Vue.use(Vant)

new Vue({
  router, //植入根属性，在组件里就可以使用 this.$router
  render: h => h(App),
}).$mount('#app')
