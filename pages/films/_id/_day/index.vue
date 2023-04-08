<template>
  <div class="sessions">
    <div class="sessions__body">
      <div class="sessions__name">
        {{ film.name }}
      </div>
      <div class="date">
        <p>
          {{ sessionInfo.day + ' ' + sessionInfo.time }}
        </p>
        <p>Price: {{ sessionInfo.price }}грн</p>
      </div>
      <div class="hall">
        <div class="hall__place" v-for="(place, idx) in halls" :key="idx">
          <button
            :disabled="place"
            @click="selectSession(idx + 1)"
            class="hall__button"
            :class="{
              hall__place_selected: place,
            }"
          >
            {{ idx + 1 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      hall: [],
      sessionInfo: '',
      film: '',
    }
  },
  methods: {
    selectSession(idx) {
      const confirmation = confirm(`Do you want to book ${idx} place ?`)
      if (confirmation) {
        const session = {
          place: idx,
          day: this.sessionInfo.day,
          time: this.sessionInfo.time,
          name: this.film.name,
        }

        // container for sessions
        const loadedSessions = this.$store.getters.getSelectedSessions
        const selectedSessions = Object.assign([], loadedSessions)
        selectedSessions.push(session)

        localStorage.setItem(
          'selected-sessions',
          JSON.stringify(selectedSessions)
        )
        this.$store.commit('setSelectedSessions', session)
      }
    },
  },
  created() {
    // halls
    const halls = this.$store.getters.getHalls
    this.halls = halls
      .find((t) => t.id === this.$route.params.id)
      .places.find((t) => t.day === this.$route.params.day).seats

    //  sessions
    const sessions = this.$store.getters.getSessions
    this.sessionInfo = sessions
      .find((t) => t.id === this.$route.params.id)
      .sessions.find((t) => t.idx === this.$route.params.day)

    // films
    const films = this.$store.getters.getFilms
    this.film = films.find((t) => t.id === this.$route.params.id)

  },
}
</script>

<style scoped>
.sessions {
  padding: 40px;
  margin: 0px auto;
  max-width: 800px;
}

.hall {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 0px;
  justify-content: center;
}
.hall__place {
  text-align: center;
  flex: 1 1 12.5%;
}
.hall__button {
  background-color: #fff;
  height: 40px;
  width: 60px;
  border: 1px solid #000;
  border-radius: 40px;
  font-weight: 500;
}
.hall__button:hover {
  transition-duration: 0.5s;
  background-color: #43fb84;
}
.date {
  padding: 0px 26px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.date p {
  font-size: 20px;
  font-weight: 500;
}
.sessions__name {
  padding: 0px 26px 10px 26px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid #000;
}
/* selected  */
.hall__place_selected {
  background-color: #ea5e4b !important;
}
</style>
