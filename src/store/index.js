import { createStore } from 'vuex'

export default createStore({
  state: {
    loginVisible:false,
    isLogin:false,
    registerVisible:false,
    username:'',
    picture:'',
    useremail:'',
    sessionID:''
  },
  getters: {
  },
  mutations: {
    updateUser(state, user){
        state.picture =  user;
      },
      updateSession(state,ses){
        state.sessionID = ses;
      },
    logout(state){
        state.username = '';
        state.useremail='';
        state.picture = '';
        state.isLogin = false;
      },
    regvisible(state){
      state.registerVisible = true;
    },
    regnotvisible(state){
      state.registerVisible = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
