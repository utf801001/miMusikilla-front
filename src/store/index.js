
import jwtDecode from 'jwt-decode'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  mutations: {
    saveToken(state, token = null){
        state.token = token

        if(token){
          state.user = jwtDecode(token)
        }

        if(!token){
          state.user = null
        }
      }
  },
  actions: {
    login(context, token){
      if(token !== null){
        localStorage.setItem("jwt-token", token)
      }

      context.commit('saveToken', token)
    },
    logout(context){
      localStorage.removeItem("jwt-token")

      context.commit('saveToken')
    }
  },
  getters: {
    isAuth(state){
      return state.token !== null
    },
    token(state){
      return state.token
    },
    currentUser(state){
      return state.user
    }  
  },
  modules: {
  }
})