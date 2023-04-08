export default {
  state() {
    return {
      userInfo: [],
      films: [],
      filteredFilms: [],
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
    getFilteredFilms(state) {
      return state.filteredFilms
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
    setFilteredFilms(state, filter) {
      state.filteredFilms = state.films.filter(t => t.name.includes(filter));
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
