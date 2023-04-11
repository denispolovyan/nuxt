<template>
  <div class="sessions">
    <div class="sessions__body">
      <div class="sessions__name">
        <p>{{ film.name }}</p>
        <p v-if="selectedPlaces.length">
          <b-button variant="success" @click="selectSessions()"
            >Book {{ selectedPlaces.length }} ticket(s)</b-button
          >
        </p>
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
            :disabled="place || currentSessionBookedPlaces.includes(idx + 1)"
            @click="addSelectedClass(idx + 1)"
            class="hall__button"
            :id="idx + 1"
            :class="{
              hall__place_selected:
                place || currentSessionBookedPlaces.includes(idx + 1),
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
      selectedPlaces: [],
      currentSessionBookedPlaces: [],
    }
  },
  methods: {
    addSelectedClass(idx) {
      if (this.selectedPlaces.length >= 4) {
        alert('You can book max 4 places')
        return
      }
      document.getElementById(idx).classList.toggle('selected')
      const sessionId = this.$store.getters.getSelectedSessions.length + this.selectedPlaces.length
      const session = {
        place: idx,
        day: this.sessionInfo.day,
        dayIdx: this.$route.params.day,
        time: this.sessionInfo.time,
        price: this.sessionInfo.price,
        name: this.film.name,
        id: sessionId,
      }
      const coincidence = this.selectedPlaces.filter((t) => t.place === idx)
      if (coincidence.length) {
        this.selectedPlaces = this.selectedPlaces.filter((t) => t.place !== idx)
      } else {
        this.selectedPlaces.push(session)
      }
    },
    selectSessions() {
      const bookedPlacesString = this.selectedPlaces.reduce((acc, value) => {
        return acc + `${value.place} `
      }, '')

      const confirmation = confirm(
        `Do you want to book ${bookedPlacesString} place(s)?`
      )

      if (confirmation) {
        // container for sessions
        const selectedSessions = Object.assign(
          [],
          this.$store.getters.getSelectedSessions
        )

        this.selectedPlaces.forEach((session) => {
          selectedSessions.push(session)
        })

        localStorage.setItem(
          'selected-sessions',
          JSON.stringify(selectedSessions)
        )

        this.$store.commit('setNewSelectedSessions', selectedSessions)
        this.selectedPlaces = []
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

    //  current session booked places
    this.$store.getters.getSelectedSessions
      .filter((t) => t.name === this.film.name)
      .filter((t) => t.dayIdx === this.$route.params.day)
      .forEach((t) => this.currentSessionBookedPlaces.push(t.place))
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
  padding: 0px 26px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
}
.sessions__name p {
  margin-bottom: 10px;
}
/* selected  */
.hall__place_selected {
  background-color: #ea5e4b !important;
}

/* selected places basket  */
.selected-places {
  padding: 0px 18px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
}
.selected-place {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.selected-place__day {
}
.selected-place__time {
}
.selected-place__place {
}
.selected-place__price {
}

/* toggle  */
.selected {
  font-weight: 700;
  background-color: #43fb84;
}
</style>
