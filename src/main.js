import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

Vue.config.errorHandler = function () {
  console.log('全局捕获');
}

// vm 代表是当前应用的实例
new Vue({
  // el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')


