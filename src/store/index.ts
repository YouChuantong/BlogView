import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $themeClass: 'light'
  },
  mutations: {
    // 根据时间变化调整主题模式
    SwitchTheme(state){
      const hours = new Date().getHours();
      // 晚上 8 点到早上 7 点为深色模式
      state.$themeClass = hours >= 20 || hours < 7 ? 'dark' : 'light';
    }
  },
  actions: {
  },
  modules: {
  }
})
