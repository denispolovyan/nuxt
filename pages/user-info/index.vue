<template>
  <div class="user-info">
    <div class="user-info__body">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">User info</h4>
          <p class="card-text">{{ userInfo.name }}</p>
          <p class="card-text">{{ userInfo.email }}</p>
          <b-button variant="dark" size="sm" @click="deleteUser"
            >Sign out</b-button
          >
        </div>
      </div>
      <div class="sessions">
        <div class="sessions-body">
          <div
            class="session"
            v-for="(session, idx) in $store.getters.getSelectedSessions"
            :key="idx"
          >
            <div class="session__name">{{ session.name }}</div>
            <div class="session__day">{{ session.day }}</div>
            <div class="session__time">{{ session.time }}</div>
            <div class="session__place">{{ session.place }}</div>
            <div class="session__price">{{ session.price }}грн</div>
            <div class="session__button">
              <b-button variant="dark" size="sm" @click="deleteSession(session)"
                >Unbook</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userInfo: '',
    }
  },
  created() {
    this.userInfo = this.$store.getters.getUserInfo
  },
  methods: {
    deleteUser() {
      const isDelete = confirm(`Delete user ${this.userInfo.name}`)
      if (isDelete) {
        this.$router.push('/films')
        this.$store.commit('deleteUserInfo')
        localStorage.removeItem('user-info')
        localStorage.removeItem('selected-sessions')
      }
    },
    deleteSession(session) {
      const isDelete = confirm(
        `Delete booking '${
          session.day + ' ' + session.time + ' ' + session.name
        }' ?`
      )
      if (isDelete) {
        let sessions = this.$store.getters.getSelectedSessions
        sessions = sessions.filter((t) => t.id !== session.id)
        this.$store.commit('setNewSelectedSessions', sessions)
        const loadedSessions = localStorage.getItem('selected-sessions')
        if (loadedSessions) {
          let parsedSessions = JSON.parse(loadedSessions)
          parsedSessions = Object.assign(
            [],
            this.$store.getters.getSelectedSessions
          )
          localStorage.setItem(
            'selected-sessions',
            JSON.stringify(parsedSessions)
          )
        }
      }
    },
  },
}
</script>

<style scoped>
.user-info {
  margin: 40px 0px;
  padding: 0px 30px;
}
.user-info__body {
  /* display: flex; */
  justify-content: center;
}

/* sessions  */
.sessions {
}
.sessions-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.session {
  display: flex;
  gap: 20px;
}
.session__name {
}
.session__day {
}
.session__time {
}
.session__price {
}
</style>
