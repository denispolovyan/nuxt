<template>
  <div class="films">
    <div class="films__body">
      <div
        class="film-card"
        v-for="(film, idx) in $store.getters.getFilms"
        :key="idx"
      >
        <div class="film-card__img">
          <img :src="film.img" :alt="film.name" />
        </div>
        <div class="film-card__name">
          {{ film.name }}
        </div>
        <div class="film-card__button">
          <button class="btn btn-primary" @click="switchToCurrentFilm(film.id)">
            More info
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
      films: [],
    }
  },
  methods: {
    switchToCurrentFilm(id) {
      this.$router.push(`/films/${id}`)
    },
  },
}
</script>

<style scoped>
.films__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 5px;
}

.film-card {
	background-color: #e7efff;
  display: flex;
  flex: 0 0 24%;
  flex-direction: column;
  border: 1px solid #7a7672;
  border-radius: 0px 0px 10px 10px;
}
.film-card__img img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.film-card__img {
  display: block;
  margin: auto 0px;
  align-items: center;
}
.film-card__name {
  display: flex;
  margin: 0px 0px 5px 20px;
}
.film-card__button {
  margin: 0px 0px 20px 20px;
}

/* adaptive */
@media (max-width: 1350px) {
  .film-card {
    flex: 0 0 32%;
  }
  .film-card__img img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 1050px) {
  .films__body {
    display: block;
  }
  .film-card {
    display: block;
    margin-bottom: 20px;
  }
  .film-card__img img {
    width: 100%;
    height: auto;
  }
}
</style>
