<template>
  <div class="current-film">
    <div class="current-film__body">
      <div class="current-film__title">{{ film.name }}</div>
      <div class="current-film__img">
        <img :src="film.img" :alt="film.name" />
      </div>
      <div class="current-film__text">{{ film.description }}</div>
    </div>
    <div class="current-film__dates">
      <b-button
        v-for="(day, idx) in sessions"
        :key="idx"
        @click="switchToSessions(day.idx)"
        variant="secondary"
        >{{ day.day }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      film: '',
      sessions: '',
    }
  },
  methods: {
    switchToSessions(day) {
      this.$router.push(`/films/${this.$route.params.id}/${day}`)
    },
  },
  created() {
    // current film
    const films = this.$store.getters.getFilms
    this.film = films.find((film) => film.id === this.$route.params.id)

    // sessions
    const sessions = this.$store.getters.getSessions;
    this.sessions = sessions.find(
      (session) => session.id === this.$route.params.id
    ).sessions
  },
}
</script>

<style scoped>
.current-film {
  padding: 40px;
  margin: 0px auto;
  max-width: 900px;
}
.current-film__title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}
.current-film__img img {
  max-width: 100%;
  width: 900px;
  margin-bottom: 10px;
}

.current-film__text {
  margin-bottom: 10px;
  line-height: 26px;
}
.current-film__dates {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
@media (max-width: 1050px) {
  .current-film {
    padding: 20px;
  }
}
</style>
