export default {
  state() {
    return {
      userInfo: '',
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
	 deleteUserInfo(state) {
      state.userInfo = '';
    }
  }
}
