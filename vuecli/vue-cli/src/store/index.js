import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vip2:"hello",
    num:0
  },
  mutations: {
    addNum(state,i){
      state.num+=i
    }
  },
  actions: {
    actionAdd(data){
      // console.log(data);
      data.commit("addNum",5);
    }
  },
  getters:{
    sum(state){
      return state.num + 100
    }
  },
  modules: {
  }
})
