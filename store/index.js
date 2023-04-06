export default {
  state() {
    return {
      userInfo: [],
      films: [],
      sessions: [],
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setFilms(state, films) {
      state.films = films;
    },
	 setSessions(state, films) {
      state.films = films;
    },
    deleteUserInfo(state) {
      state.userInfo = ''
    },
  },
}
