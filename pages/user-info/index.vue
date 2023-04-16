<template>
  <div class="user-info">
    <div class="user-info__body">
      <div class="card card-info">
        <div class="card__body">
          <div class="card__left">
            <p class="card-text">{{ userInfo.name || 'name' }}</p>
            <p class="card-text">{{ userInfo.email || 'email' }}</p>
            <b-button
              v-if="clientWidth >= 600"
              class="card__button_delete"
              variant="dark"
              size="sm"
              @click="deleteUser"
              >Sign out</b-button
            >
          </div>
          <div class="card__right">
            <p class="card-text">Age: {{ userInfo.age || 'age' }}</p>
            <p class="card-text">{{ userInfo.phone || 'phone' }}</p>
            <p class="card-text">City: {{ userInfo.city || 'city' }}</p>
          </div>
        </div>
        <div class="card__buttons">
          <div class="card__edit">
            <b-button size="sm" variant="warning" @click="showEditForm = true"
              >EDIT</b-button
            >
          </div>
          <div class="card__delete" v-if="clientWidth < 600">
            <b-button
              class="card__button_delete"
              variant="dark"
              size="sm"
              @click="deleteUser"
              >Sign out</b-button
            >
          </div>
        </div>
      </div>
      <div class="card card-change" v-if="showEditForm == true">
        <div class="card__body">
          <div class="card__left_change">
            <p class="card-text">
              <b-form-input
                maxlength="30"
                class="card__input"
                v-model="userInfo.name"
                placeholder="Enter your name"
              ></b-form-input>
            </p>
            <p class="card-text">
              <b-form-input
                maxlength="30"
                class="card__input"
                v-model="userInfo.email"
                placeholder="Enter your email"
              ></b-form-input>
            </p>
            <div class="card__button" v-if="clientWidth >= 600">
              <b-button variant="dark" size="sm" @click="setOnChanges"
                >Save changes</b-button
              >
              <b-button variant="dark" size="sm" @click="resetChanges"
                >Reset changes</b-button
              >
              <b-button variant="dark" size="sm" @click="showEditForm = false"
                >Close</b-button
              >
            </div>
          </div>
          <div class="card__right_change">
            <p class="card-text">
              <b-form-input
                maxlength="3"
                class="card__input"
                v-model="userInfo.age"
                placeholder="Enter your age"
              ></b-form-input>
            </p>
            <p class="card-text">
              <b-form-input
                maxlength="30"
                class="card__input"
                v-model="userInfo.phone"
                placeholder="Enter your phone"
              ></b-form-input>
            </p>
            <p class="card-text">
              <b-form-input
                maxlength="30"
                class="card__input"
                v-model="userInfo.city"
                placeholder="Enter your city"
              ></b-form-input>
            </p>
          </div>
        </div>
        <div class="card__buttons" v-if="clientWidth < 600">
          <b-button variant="dark" size="sm" @click="setOnChanges"
            >Save changes</b-button
          >
          <b-button variant="dark" size="sm" @click="resetChanges"
            >Reset changes</b-button
          >
          <b-button variant="dark" size="sm" @click="showEditForm = false"
            >Close</b-button
          >
        </div>
      </div>
      <div class="sessions" v-if="$store.getters.getSelectedSessions.length">
        <div class="session_main">
          <div class="session__name session__item">Name</div>
          <div
            class="session__day session__item_narrow"
            v-if="clientWidth >= 600"
          >
            Day
          </div>
          <div
            class="session__time session__item_narrow"
            v-if="clientWidth >= 600"
          >
            Time
          </div>
          <div
            class="session__place session__item_narrow"
            v-if="clientWidth >= 600"
          >
            Place
          </div>
          <div
            class="session__price session__item_narrow"
            v-if="clientWidth >= 600"
          >
            Price
          </div>
          <div
            class="session__price session__item_narrow"
            v-if="clientWidth < 600"
          >
            More info
          </div>
        </div>
        <div class="sessions-body">
          <div
            @click="deleteSession(session)"
            class="session"
            v-for="(session, idx) in $store.getters.getSelectedSessions"
            :key="idx"
          >
            <div class="session__name session__item">{{ session.name }}</div>
            <div
              class="session__day session__item_narrow"
              v-if="clientWidth >= 600"
            >
              {{ session.day }}
            </div>
            <div
              class="session__time session__item_narrow"
              v-if="clientWidth >= 600"
            >
              {{ session.time }}
            </div>
            <div
              class="session__place session__item_narrow"
              v-if="clientWidth >= 600"
            >
              {{ session.place }}
            </div>
            <div
              class="session__price session__item_narrow"
              v-if="clientWidth >= 600"
            >
              {{ session.price }}грн
              {{ $store.getters.getWindowSize }}
            </div>
            <div
              class="session__price session__item_narrow"
              v-if="clientWidth < 600"
            >
              <b-dropdown
                id="dropdown-1"
                text="More info"
                class="m-md-2"
                :variant="
                  $store.getters.getBlackTheme ? 'warning' : 'secondary'
                "
              >
                <b-dropdown-item>{{ session.day }}</b-dropdown-item>
                <b-dropdown-item>Time: {{ session.time }}</b-dropdown-item>
                <b-dropdown-item>Place: {{ session.place }}</b-dropdown-item>
                <b-dropdown-item>Price: {{ session.price }}грн</b-dropdown-item>
              </b-dropdown>
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
      showEditForm: '',
      clientWidth: '',
    }
  },
  methods: {
    getWindowSize() {
      // this.$store.commit('setWindowSize', window.screen.width)
      this.clientWidth = window.screen.width
    },
    resetChanges() {
      this.userInfo = Object.assign({}, this.$store.getters.getUserInfo)
    },
    setOnChanges() {
      this.$store.commit('setUserInfo', this.userInfo)
      localStorage.setItem('user-info', JSON.stringify(this.userInfo))
      this.userInfo = Object.assign({}, this.$store.getters.getUserInfo)
      this.showEditForm = false
    },
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
  created() {
    this.userInfo = Object.assign({}, this.$store.getters.getUserInfo)

    //  window size
    this.getWindowSize()
  },
  mounted() {
    window.addEventListener('resize', this.getWindowSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.getWindowSize)
  },
}
</script>

<style scoped lang="scss">
.user-info {
  min-height: 100vh;
  background-color: var(--films-bg-color);
  padding: 40px 30px;
}

/* card  */
.card {
  background-color: var(--user-info-card-color);
  position: relative;
  text-align: center;
  max-width: 730px;
  margin: 0px auto;
}
.card-info {
  margin-bottom: 20px;

  border: 1px solid #000;
}
.card-change {
  border: 1px solid #000;
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
}
.card__left_change {
  flex: 0 0 50%;
  padding-right: 16px;
  border-right: 1px solid #000;
}
.card__right_change {
  padding-left: 16px;
  flex: 0 0 50%;
}
.card__button {
  display: flex;
  justify-content: space-between;
}
/* card-edit  */
.card__edit {
  position: absolute;
  right: 16px;
  bottom: 16px;
}
/* sessions  */
.sessions {
  margin: 20px auto;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 16px;
  max-width: 730px;
  background-color: var(--user-info-card-color);
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
  padding-bottom: 3px;
  display: flex;
  justify-content: end;
  &:hover {
    transition-duration: 0.3s;
    border-bottom: 2px solid #76777c;
  }
}
.session__item {
  flex: 0 1 200px;
  justify-self: end;
}
.session__item_narrow {
  text-align: center;
  flex: 0 1 148px;
}

@media (max-width: 1050px) {
  .user-info {
    padding: 20px 30px;
  }
  .session__item {
    flex: 0 1 200px;
  }
  .session__item_narrow {
    flex: 0 1 148px;
  }
}
@media (max-width: 600px) {
  .session_main {
    justify-content: space-around;
    text-align: center;
  }
  .session {
    justify-content: space-around;
    text-align: center;
    padding-bottom: 5px;
    align-items: center;
  }
  .card__body {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  //   card info
  .card-info {
    text-align: center;
    padding: 16px;
    margin-bottom: 20px;
  }
  .card__left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: none;
  }
  .card__right {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .card__buttons {
    justify-content: center;
    margin-top: 10px;
    display: flex;
    gap: 15px;
  }
  .card__edit {
    position: static;
  }
  .card-text {
    margin: 0px !important;
  }

  //   card change
  .card-change {
    padding: 16px;
    margin-bottom: 20px;
  }
  .card__left_change {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: none;
    padding-right: 0px;
    border-right: none;
  }
  .card__right_change {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 0px;
  }

  //   sessions
  .sessions {
    margin: 0px auto;
  }
}
</style>
