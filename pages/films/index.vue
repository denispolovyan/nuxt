<template>
  <div class="films">
    <div class="films__body">
      <div
        class="film-card"
        v-for="(film, idx) in $store.getters.getFilteredFilms"
        :key="idx"
      >
        <div class="film-card__img">
          <img :src="film.img" :alt="film.name" />
        </div>
        <div class="film-card__name">
          {{ film.name }}
        </div>
        <div class="film-card__button">
          <button
            class="btn btn-warning"
            style="font-weight: 500"
            @click="switchToCurrentFilm(film.id)"
          >
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
.films {
  background-color: var(--films-bg-color);
  min-height: calc(100vh - 60px);
  padding: 40px;
  background-color: var(--films-bg-color);
}
.films__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 15px;
}
.film-card {
  position: relative;
  background-color: var(--films-card-color);
  display: flex;
  flex: 0 0 24%;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
}
.film-card__img img {
  object-fit: cover;
  width: 100%;
  height: 220px;
  margin-bottom: 10px;
}
.film-card__img {
  display: block;
  align-items: center;
}
.film-card__name {
  display: flex;
  margin: 0px 0px 15px 20px;
}
.film-card__button {
  margin: 0px 0px 20px 20px;
}
.jcCenter {
  justify-content: center;
}
/* adaptive */
@media (min-width: 1700px) {
  .film-card {
    flex: 0 0 400px;
  }
  .films__body {
    justify-content: center;
  }
}
@media (max-width: 1350px) {
  .film-card {
    flex: 0 0 32%;
  }
  .film-card__img img {
    object-fit: cover;
    height: 220px;
  }
}

@media (max-width: 1050px) {
  .films__body {
    display: block;
  }
  .film-card {
    display: block;
    padding-bottom: 5px;
	 margin-bottom: 20px;
  }
  .film-card__img img {
    width: 100%;
    height: auto;
  }
  .films {
    padding: 20px;
  }
  .film-card__button {
    margin: 0px 0px 15px 20px;
  }
}
</style>
