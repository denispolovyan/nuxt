export default {
  state() {
    return {
      userInfo: [],
      films: [],
      filteredFilms: [],
      sessions: [],
      halls: [],
      selectedSessions: [],
      blackTheme: false,
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
    getSelectedSessions(state) {
      return state.selectedSessions
    },
    getBlackTheme(state) {
      return state.blackTheme
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
      state.filteredFilms = state.films.filter((t) => t.name.includes(filter))
    },
    setSessions(state, sessions) {
      state.sessions = sessions
    },
    setHalls(state, halls) {
      state.halls = halls
    },
    setSelectedSessions(state, session) {
      state.selectedSessions.push(session)
    },
    setNewSelectedSessions(state, session) {
      state.selectedSessions = ''
      state.selectedSessions = session
    },
    setBlackTheme(state, theme) {
      state.blackTheme = theme
    },
    deleteUserInfo(state) {
      state.userInfo = ''
    },
  },
}
