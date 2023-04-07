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
        <div class="hall__place" v-for="(place, idx) in hall" :key="idx">
          <button
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
  created() {
    // halls
    this.hall = this.$store.getters.getHalls

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
  width: 40px;
  border-radius: 50%;
}
.hall__button:hover {
  transition-duration: 0.5s;
  background-color: green;
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
  background-color: red !important;
}
</style>
