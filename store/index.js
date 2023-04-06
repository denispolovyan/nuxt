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
	 getFilms(state) {
      return state.films;
    },
    getSessions(state) {
      return state.sessions;
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setFilms(state, films) {
      state.films = films
    },
    setSessions(state, sessions) {
      state.sessions = sessions
    },
    deleteUserInfo(state) {
      state.userInfo = ''
    },
  },
}
