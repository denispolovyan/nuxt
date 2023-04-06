<template>
  <div class="current-film">
    <div class="current-film__body">
      <div class="current-film__title">{{ film.name }}</div>
      <div class="current-film__img">
        <img :src="film.img" :alt="film.name" />
      </div>
      <div class="current-film__text">{{ film.description }}</div>
    </div>
    <b-button-group>
      <b-button v-for="(day, idx) in film.sessions" :key="idx">{{
        day.day
      }}</b-button>
    </b-button-group>
  </div>
</template>

<script>
import { films } from '~/api/films'

export default {
  data: () => {
    return {
      film: '',
    }
  },
  created() {
    const film = films.find((film) => film.id === this.$route.params.id)
    this.film = film
  },
}
</script>

<style scoped>
.current-film {
  margin: 0px auto;
  max-width: 900px;
}
.current-film__body {
}
.current-film__title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}
.current-film__img img {
  width: 900px;
  margin-bottom: 10px;
}
.current-film__text {
  margin-bottom: 10px;
  line-height: 26px;
  
}
</style>
