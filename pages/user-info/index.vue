<template>
  <div class="user-info">
    <div class="user-info__body">
      <div class="card">
        <div class="card__body">
          <div class="card__left">
            <p class="card-text">{{ userInfo.name }}</p>
            <p class="card-text">{{ userInfo.email }}</p>
            <b-button variant="dark" size="sm" @click="deleteUser"
              >Sign out</b-button
            >
          </div>
          <div class="card__right">
            <p class="card-text">Age: {{ userInfo.age }}</p>
            <p class="card-text">{{ userInfo.phone }}</p>
            <p class="card-text">City: {{ userInfo.city }}</p>
          </div>
        </div>
      </div>
      <div class="sessions" v-if="$store.getters.getSelectedSessions.length">
        <div class="session_main">
          <div class="session__name session__item">Name</div>
          <div class="session__day session__item_narrow">Day</div>
          <div class="session__time session__item_narrow">Time</div>
          <div class="session__place session__item_narrow">Place</div>
          <div class="session__price session__item_narrow">Price</div>
        </div>
        <div class="sessions-body">
          <div
            @click="deleteSession(session)"
            class="session"
            v-for="(session, idx) in $store.getters.getSelectedSessions"
            :key="idx"
          >
            <div class="session__name session__item">{{ session.name }}</div>
            <div class="session__day session__item_narrow">
              {{ session.day }}
            </div>
            <div class="session__time session__item_narrow">
              {{ session.time }}
            </div>
            <div class="session__place session__item_narrow">
              {{ session.place }}
            </div>
            <div class="session__price session__item_narrow">
              {{ session.price }}грн
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

/* card  */
.card {
  text-align: center;
  width: 730px;
  margin: 0px auto;
}
.card__body {
  padding: 16px;
  display: flex;
  flex: 0 0 50%;
}
.card__left {
  flex: 0 0 50%;
  border-right: 1px solid #000;
}
.card__right {
  flex: 0 0 50%;
  padding-left: 16px;
}
/* sessions  */
.sessions {
  margin: 20px auto;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 16px;
  max-width: 730px;
}

.sessions-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.session_main {
  text-decoration: underline;
  font-weight: 500;
  display: flex;
  flex: 1 0 200px;
  margin-bottom: 20px;
}
.session {
  border-bottom: 2px solid #d9d9da;
  display: flex;
}
.session:hover {
  transition-duration: 0.3s;
  border-bottom: 2px solid #76777c;
}
.session__item {
  flex: 0 0 200px;
}
.session__item_narrow {
  flex: 0 0 138px;
}
</style>
