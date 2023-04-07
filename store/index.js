export default {
  state() {
    return {
      userInfo: [],
      films: [],
      sessions: [],
      halls: [],
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    },
    getFilms(state) {
      return state.films
    },
    getSessions(state) {
      return state.sessions
    },
    getHalls(state) {
      return state.halls
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
    setHalls(state, halls) {
      state.halls = halls
    },
    deleteUserInfo(state) {
      state.userInfo = ''
    },
  },
}
