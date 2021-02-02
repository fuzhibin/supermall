import { createStore } from 'vuex'

export default createStore({
  state:{
    vuexScroll:null
  },
  mutations:{
    updateScroll(state,value){
      state.vuexScroll=value;
    }
  },
  actions:{},
  getters:{},
  modules:{}
});

