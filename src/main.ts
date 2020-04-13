import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 使用 Vuex 状态管理
store.commit("SwitchTheme");
// 自动调整主题
setInterval((e: number) => {
  store.commit("SwitchTheme");
}, 10000)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
