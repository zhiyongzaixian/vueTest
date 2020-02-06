import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// vm 代表是当前应用的实例
const vm = new Vue({
  render: h => h(App),
}).$mount('#app')


console.log(vm);

