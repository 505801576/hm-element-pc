import { setToken,getToken } from "@/router/storage"
export default {
  namespaced:true,
  state: {
    /* 默认第一次 调用本地储存的 token */
    token: getToken() || ''
  },
  getters: {},
  mutations: {
    setToken(state,newToken) {
      console.log(newToken);
      state.token = newToken
      setToken(newToken)  //  实参把数据传给形参
    }
  },
  actions: {}
}